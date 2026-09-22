<<<<<<< HEAD
# 🏢 API Catálogo e Gestão de Imóveis

Microsserviço central responsável pelo cadastro de imóveis, acompanhamento do ciclo de vida de contratos de locação e gestão financeira (lançamento, liquidação e arquivamento de comprovantes de despesas).

O sistema foi desenvolvido como parte de um projeto acadêmico de ADS, seguindo uma arquitetura baseada em microsserviços. Cada microsserviço possui seu próprio banco de dados e configuração independente.

---

## 🎯 Visão Geral

O Microsserviço de Imóveis é responsável por gerenciar:
*   **Imóveis:** Catálogo de propriedades disponíveis para locação. Integração direta com ViaCEP para preenchimento automático de endereços.
*   **Contratos:** Vínculo jurídico entre o Locador, o Inquilino e o Imóvel, controlando status (ATIVO, ENCERRADO, RESCINDIDO) e vigência.
*   **Despesas:** Motor transacional financeiro, permitindo lançamentos avulsos, faturas e liquidação com upload de comprovantes (PDF/Imagens).
*   **Automação (Robô):** Cron Job que roda em segundo plano para gerar faturas mensais de aluguel automaticamente para contratos ativos.

**Nota de Arquitetura:** Por decisão do grupo, a responsabilidade de *Contratos* e *Imóveis* ficou centralizada neste microsserviço, enquanto os dados sensíveis dos proprietários ficam no Microsserviço Locador (evitando duplicidade de responsabilidades).

---

## 🚀 Tecnologias Utilizadas

*   **Node.js (v20+)** & **TypeScript**
*   **NestJS** (Framework progressivo)
*   **Prisma ORM (v7.8.0)** & **MariaDB / MySQL**
*   **@nestjs/schedule:** Agendador de tarefas em background (Cron Jobs).
*   **Axios:** Cliente HTTP para consumo de APIs externas (ViaCEP).
*   **Multer:** Manipulação de upload de arquivos binários.
*   **JWT & RBAC:** Segurança baseada em perfis de acesso (`USER`, `ADMIN`).
*   **Swagger / OpenAPI:** Documentação interativa.
*   **Docker:** Containerização (Multi-stage build).

---

## 🏗️ Arquitetura da Aplicação

A API foi organizada seguindo a estrutura padrão do NestJS, com forte separação por domínios.

**Fluxo básico de uma requisição protegida:**
Requisição HTTP → Controller → JwtAuthGuard → RolesGuard → Service → PrismaService → Banco MySQL

**Estrutura Principal do Projeto:**
```text
src/
 ├── generated/
 │    └── prisma/
 │
 ├── modules/
 │    ├── imoveis/
 │    ├── contratos/
 │    └── despesas/
 │         ├── controllers/
 │         ├── dto/
 │         └── services/ (Incluindo o despesas-cron.service.ts)
 │
 ├── app.module.ts
 └── main.ts

```

---

## 🗄️ Banco de Dados e Tabelas Principais

O banco de dados está hospedado no servidor da faculdade e é acessado através da variável `DATABASE_URL`. O Docker encapsula apenas a API.

**1. Tabela `imovel**`

* Campos: `id`, `titulo`, `descricao`, `endereco`, `valorAluguel`, `criadoEm`

**2. Tabela `contrato_locacao**`

* Campos: `id`, `idImovel`, `idInquilino`, `dataInicio`, `dataVencimento`, `status`

**3. Tabela `despesa**`

* Campos: `id`, `idContratoLocacao`, `descricao`, `valor`, `tipo`, `status`, `dataPagamento`, `comprovantePagamento` (LongBlob)

---

## ⚙️ Regras de Negócio

* **Autenticação:** O corretor (Role `USER`) tem permissão total para operar o fluxo diário (cadastrar imóveis, buscar CEP, gerar contratos e baixar pagamentos).
* **Upload de Comprovantes:** A liquidação de uma despesa exige o envio de um arquivo binário, que é convertido e armazenado diretamente no banco de dados.
* **Robô de Aluguéis:** Uma rotina agendada roda diariamente verificando contratos `ATIVOS` e gerando as despesas de aluguel do mês atual de forma autônoma.
* **Trava Financeira (Segurança):** O sistema impede a exclusão (`DELETE`) de qualquer despesa que já esteja com o status `PAGA`.
* **IRRF por vigência:** O imposto é calculado com a tabela vigente na data de competência, cadastrada por um `ADMIN` (ver seção *IRRF* em Endpoints).

---

## 🛠️ Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto.
**Importante:** Não use aspas na `DATABASE_URL`.

```env
PORT=3003
DATABASE_URL=mysql://USUARIO:SENHA@SERVIDOR:3306/NOME_DO_BANCO

```

---

## 📍 Endpoints Principais

A documentação interativa com todos os DTOs e testes de upload de arquivos está disponível via Swagger em: `http://localhost:3003/api`

### Imóveis

| Método | Endpoint | Protegido | Descrição |
| --- | --- | --- | --- |
| GET | `/imoveis` | Sim | Lista catálogo de imóveis |
| POST | `/imoveis` | Sim | Cadastra um novo imóvel |
| GET | `/imoveis/cep/:cep` | Sim | Consulta automática de endereço via integração com ViaCEP |

### Contratos

| Método | Endpoint | Protegido | Descrição |
| --- | --- | --- | --- |
| GET | `/contratos` | Sim | Lista contratos |
| POST | `/contratos` | Sim | Gera um novo contrato de locação |
| PATCH | `/contratos/:id` | Sim | Atualiza status (ex: ATIVO para ENCERRADO) |

### Despesas (Financeiro)

| Método | Endpoint | Protegido | Descrição |
| --- | --- | --- | --- |
| GET | `/despesas` | Sim | Lista faturas (aceita filtro `?idContrato=x`) |
| POST | `/despesas` | Sim | Lança nova fatura/despesa manual |
| PATCH | `/despesas/:id/pagamento` | Sim | Liquida fatura (Exige `multipart/form-data` com arquivo) |
| GET | `/despesas/:id/comprovante` | Sim | Download do comprovante em anexo |
| DELETE | `/despesas/:id` | Sim | Exclui fatura (Bloqueado se estiver PAGA) |

### IRRF (tabela progressiva versionada)

> Explicação do cálculo para não técnicos, com exemplos, ressalvas e fontes: [`docs/calculo-do-irrf.md`](../docs/calculo-do-irrf.md).

Consulta: qualquer usuário autenticado. Cadastro, edição e exclusão: somente `ADMIN`.

| Método | Endpoint | Perfil | Descrição |
| --- | --- | --- | --- |
| GET | `/irrf/tabelas` | USER/ADMIN | Lista as versões (mais recente primeiro), com faixas, situação (`VIGENTE`, `FUTURA`, `ENCERRADA`) e fim de vigência derivado |
| GET | `/irrf/tabelas/vigente?data=AAAA-MM-DD` | USER/ADMIN | Tabela vigente na data (padrão: hoje). `404` se não houver |
| GET | `/irrf/tabelas/:id` | USER/ADMIN | Uma versão |
| POST | `/irrf/tabelas` | ADMIN | Cadastra uma nova versão |
| PATCH | `/irrf/tabelas/:id` | ADMIN | Substitui os dados e as faixas de uma versão |
| DELETE | `/irrf/tabelas/:id` | ADMIN | Exclui uma versão |
| POST | `/irrf/calcular` | USER/ADMIN | Calcula o IRRF: `{ baseCalculo, dataCompetencia, numeroDependentes?, rendimentoTributavel? }` |

**Como funciona**

* Uma versão vale a partir de `vigenciaInicio` até o dia anterior ao início da próxima. O fim **não é gravado**, é derivado, então não há sobreposição nem lacuna.
* O cálculo usa a versão vigente na **data de competência** informada (nunca a de hoje). Sem versão vigente naquela data o cálculo é **recusado** (`404`) em vez de usar a tabela mais recente.
* No cadastro só o limite "Até" de cada faixa é informado; o "De" é sempre o "Até" anterior + R$ 0,01 e a última faixa não tem limite. A alíquota é em percentual (`7.5` = 7,5%).
* `POST /irrf/calcular` devolve, além do valor, o que deve ser gravado no recibo para auditoria: `idTabela`, `faixaAplicada`, `aliquotaEfetiva`, `baseCalculoLiquida` e o redutor aplicado. Ele apenas calcula: quem gera o recibo decide se a retenção se aplica ao caso.
* **Redutor (Lei 15.270/2025, desde 01/2026):** opcional por versão. Os limites e a fórmula (`constante − coeficiente × rendimento`) valem para o **rendimento tributável bruto**, e não para a base de cálculo depois das deduções; a redução é subtraída do imposto já calculado pela tabela e nunca o deixa negativo. Por isso o cálculo aceita `rendimentoTributavel` (bruto); se omitido, assume a própria `baseCalculo` (nenhuma outra dedução). `calcular-irrf.oficial-2026.spec.ts` reproduz os exemplos oficiais da Receita Federal.
* Nenhum valor fiscal fica no código nem em seed. O `ADMIN` cadastra as tabelas pela tela **Gerenciar IRRF** (confira sempre a fonte oficial da Receita Federal).
* `editavel`: hoje toda versão pode ser corrigida, pois nenhum cálculo é gravado. Quando existir o model de recibo, `IrrfService.tabelaEstaEmUso` deve passar a bloquear a edição das versões já usadas.

**Criar as tabelas no banco.** Este serviço não usa `prisma migrate`. Aplique uma vez, no `db_imoveis`:

```bash
npx prisma db execute --file prisma/sql/2026-irrf-tabelas.sql
npx prisma generate
```

---

## 💻 Execução e Deploy

### Rodar Localmente

1. Instale as dependências: `npm install`
2. Gere o Prisma Client: `npx prisma generate`
3. Inicie a API: `npm run start:dev`
A API estará rodando em: `http://localhost:3003`

### Build e Docker (Produção)

O projeto utiliza um *Multi-stage build* para garantir uma imagem leve, segura e otimizada para o API Gateway.

1. Criar a imagem Docker:

```bash
docker build -t api-imoveis .

```

2. Rodar o container:

```bash
docker run -d --name api-imoveis -p 3003:3003 --env-file .env api-imoveis

```

---

## ⚠️ Possíveis Problemas e Troubleshooting

**1. Erro de Conexão no Upload de PDF (max_allowed_packet)**

* **Erro:** `Cannot execute new commands: connection closed` ao fazer upload.
* **Causa:** O arquivo binário ultrapassa o limite de tráfego do MySQL.
* **Solução:** O servidor do banco de dados precisa ter a variável `max_allowed_packet` configurada para `64M` ou mais no arquivo `my.ini`.

**2. Porta 3003 já está em uso**

* **Erro:** `EADDRINUSE: address already in use :::3003`
* **Solução:** Verifique se há um container rodando (`docker ps`) e pare-o (`docker stop api-imoveis`), ou feche outros terminais locais.

**3. Erro de Tipagem do Prisma**

* **Erro:** O TypeScript acusa que uma propriedade ou status do Enum não existe.
* **Solução:** Rode `npx prisma generate` para traduzir o banco de dados e sincronizar os tipos com o seu código.

```
=======
# 🏢 Microsserviço de Catálogo e Gestão de Imóveis

Este é o microsserviço central responsável pela gestão do ecossistema imobiliário. Ele fornece uma API RESTful robusta para o cadastro de imóveis, acompanhamento do ciclo de vida de contratos de locação e gestão financeira (lançamento, liquidação e arquivamento de comprovantes de despesas).

Construído com foco em escalabilidade, tipagem estrita e arquitetura modular, este serviço está pronto para ser integrado a front-ends (Web/Mobile) e orquestrado via API Gateway.

## 🚀 Tecnologias Utilizadas

- **[NestJS](https://nestjs.com/)**: Framework Node.js progressivo para construção de aplicações eficientes e escaláveis.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática rigorosa para maior segurança de código.
- **[Prisma ORM](https://www.prisma.io/)**: Mapeamento objeto-relacional (ORM) de última geração para interação com o banco de dados.
- **[MySQL / MariaDB]**: Banco de dados relacional para armazenamento transacional seguro.
- **[Multer]**: Gerenciamento e upload de arquivos binários (PDFs, Imagens) em rotas `multipart/form-data`.
- **[Swagger / OpenAPI]**: Documentação interativa e automatizada dos endpoints.
- **[Docker]**: Containerização da aplicação (Multi-stage build) para deploys isolados e leves.

---

## 📦 Módulos Principais (Domínios)

1. **Imóveis:** Cadastro e gerenciamento do portfólio de propriedades.
2. **Contratos:** Gestão do ciclo de vida da locação, vinculando inquilinos aos imóveis com controle de datas e status.
3. **Despesas (Financeiro):** Motor transacional de faturas. Permite lançamentos avulsos, liquidação com envio e validação de comprovantes (upload de arquivos) e travas de segurança rigorosas contra manipulação de faturas pagas.

---

## 🛠️ Configuração do Ambiente (.env)

Antes de rodar o projeto, crie um arquivo `.env` na raiz do projeto. Você pode usar o `.env.example` como base (caso exista) ou seguir a estrutura abaixo:

```env
# Configuração do Banco de Dados Relacional
DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"

# Outras variáveis de ambiente (JWT, Portas, etc)
PORT=3000
>>>>>>> b90ee2e519713a3764202f1a3328fc8eb3cb121b
