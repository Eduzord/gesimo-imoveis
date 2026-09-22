
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model endereco
 * 
 */
export type endereco = $Result.DefaultSelection<Prisma.$enderecoPayload>
/**
 * Model imovel
 * 
 */
export type imovel = $Result.DefaultSelection<Prisma.$imovelPayload>
/**
 * Model propriedadeimovel
 * 
 */
export type propriedadeimovel = $Result.DefaultSelection<Prisma.$propriedadeimovelPayload>
/**
 * Model contratolocacao
 * 
 */
export type contratolocacao = $Result.DefaultSelection<Prisma.$contratolocacaoPayload>
/**
 * Model reajustecontrato
 * 
 */
export type reajustecontrato = $Result.DefaultSelection<Prisma.$reajustecontratoPayload>
/**
 * Model memoriacalculo
 * 
 */
export type memoriacalculo = $Result.DefaultSelection<Prisma.$memoriacalculoPayload>
/**
 * Model memoriacalculoitem
 * 
 */
export type memoriacalculoitem = $Result.DefaultSelection<Prisma.$memoriacalculoitemPayload>
/**
 * Model despesa
 * 
 */
export type despesa = $Result.DefaultSelection<Prisma.$despesaPayload>
/**
 * Model tabelairrf
 * 
 */
export type tabelairrf = $Result.DefaultSelection<Prisma.$tabelairrfPayload>
/**
 * Model faixairrf
 * 
 */
export type faixairrf = $Result.DefaultSelection<Prisma.$faixairrfPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const classificacao_enum: {
  RESIDENCIAL: 'RESIDENCIAL',
  COMERCIAL: 'COMERCIAL',
  RURAL: 'RURAL',
  INDUSTRIAL: 'INDUSTRIAL'
};

export type classificacao_enum = (typeof classificacao_enum)[keyof typeof classificacao_enum]


export const tipologia_enum: {
  CASA: 'CASA',
  APARTAMENTO: 'APARTAMENTO',
  TERRENO: 'TERRENO',
  SALA_COMERCIAL: 'SALA_COMERCIAL',
  GALPAO: 'GALPAO'
};

export type tipologia_enum = (typeof tipologia_enum)[keyof typeof tipologia_enum]


export const status_imovel_enum: {
  DISPONIVEL: 'DISPONIVEL',
  ALUGADO: 'ALUGADO',
  VENDIDO: 'VENDIDO',
  INATIVO: 'INATIVO'
};

export type status_imovel_enum = (typeof status_imovel_enum)[keyof typeof status_imovel_enum]


export const status_contrato_enum: {
  ATIVO: 'ATIVO',
  ENCERRADO: 'ENCERRADO',
  CANCELADO: 'CANCELADO'
};

export type status_contrato_enum = (typeof status_contrato_enum)[keyof typeof status_contrato_enum]


export const tipo_despesa_enum: {
  ALUGUEL: 'ALUGUEL',
  CONDOMINIO: 'CONDOMINIO',
  IPTU: 'IPTU',
  TAXA_BOMBEIRO: 'TAXA_BOMBEIRO',
  SEGURO_INCENDIO: 'SEGURO_INCENDIO',
  MANUTENCAO: 'MANUTENCAO',
  OUTRA: 'OUTRA'
};

export type tipo_despesa_enum = (typeof tipo_despesa_enum)[keyof typeof tipo_despesa_enum]


export const status_despesa_enum: {
  PAGA: 'PAGA',
  EM_ABERTO: 'EM_ABERTO'
};

export type status_despesa_enum = (typeof status_despesa_enum)[keyof typeof status_despesa_enum]


export const indice_reajuste_enum: {
  IGPM: 'IGPM',
  IPCA: 'IPCA',
  INCC: 'INCC',
  OUTRO: 'OUTRO'
};

export type indice_reajuste_enum = (typeof indice_reajuste_enum)[keyof typeof indice_reajuste_enum]

}

export type classificacao_enum = $Enums.classificacao_enum

export const classificacao_enum: typeof $Enums.classificacao_enum

export type tipologia_enum = $Enums.tipologia_enum

export const tipologia_enum: typeof $Enums.tipologia_enum

export type status_imovel_enum = $Enums.status_imovel_enum

export const status_imovel_enum: typeof $Enums.status_imovel_enum

export type status_contrato_enum = $Enums.status_contrato_enum

export const status_contrato_enum: typeof $Enums.status_contrato_enum

export type tipo_despesa_enum = $Enums.tipo_despesa_enum

export const tipo_despesa_enum: typeof $Enums.tipo_despesa_enum

export type status_despesa_enum = $Enums.status_despesa_enum

export const status_despesa_enum: typeof $Enums.status_despesa_enum

export type indice_reajuste_enum = $Enums.indice_reajuste_enum

export const indice_reajuste_enum: typeof $Enums.indice_reajuste_enum

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Enderecos
 * const enderecos = await prisma.endereco.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Enderecos
   * const enderecos = await prisma.endereco.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.endereco`: Exposes CRUD operations for the **endereco** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enderecos
    * const enderecos = await prisma.endereco.findMany()
    * ```
    */
  get endereco(): Prisma.enderecoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imovel`: Exposes CRUD operations for the **imovel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Imovels
    * const imovels = await prisma.imovel.findMany()
    * ```
    */
  get imovel(): Prisma.imovelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propriedadeimovel`: Exposes CRUD operations for the **propriedadeimovel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Propriedadeimovels
    * const propriedadeimovels = await prisma.propriedadeimovel.findMany()
    * ```
    */
  get propriedadeimovel(): Prisma.propriedadeimovelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contratolocacao`: Exposes CRUD operations for the **contratolocacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contratolocacaos
    * const contratolocacaos = await prisma.contratolocacao.findMany()
    * ```
    */
  get contratolocacao(): Prisma.contratolocacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reajustecontrato`: Exposes CRUD operations for the **reajustecontrato** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reajustecontratoes
    * const reajustecontratoes = await prisma.reajustecontrato.findMany()
    * ```
    */
  get reajustecontrato(): Prisma.reajustecontratoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.memoriacalculo`: Exposes CRUD operations for the **memoriacalculo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Memoriacalculos
    * const memoriacalculos = await prisma.memoriacalculo.findMany()
    * ```
    */
  get memoriacalculo(): Prisma.memoriacalculoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.memoriacalculoitem`: Exposes CRUD operations for the **memoriacalculoitem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Memoriacalculoitems
    * const memoriacalculoitems = await prisma.memoriacalculoitem.findMany()
    * ```
    */
  get memoriacalculoitem(): Prisma.memoriacalculoitemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.despesa`: Exposes CRUD operations for the **despesa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Despesas
    * const despesas = await prisma.despesa.findMany()
    * ```
    */
  get despesa(): Prisma.despesaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tabelairrf`: Exposes CRUD operations for the **tabelairrf** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tabelairrfs
    * const tabelairrfs = await prisma.tabelairrf.findMany()
    * ```
    */
  get tabelairrf(): Prisma.tabelairrfDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.faixairrf`: Exposes CRUD operations for the **faixairrf** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Faixairrfs
    * const faixairrfs = await prisma.faixairrf.findMany()
    * ```
    */
  get faixairrf(): Prisma.faixairrfDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    endereco: 'endereco',
    imovel: 'imovel',
    propriedadeimovel: 'propriedadeimovel',
    contratolocacao: 'contratolocacao',
    reajustecontrato: 'reajustecontrato',
    memoriacalculo: 'memoriacalculo',
    memoriacalculoitem: 'memoriacalculoitem',
    despesa: 'despesa',
    tabelairrf: 'tabelairrf',
    faixairrf: 'faixairrf'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "endereco" | "imovel" | "propriedadeimovel" | "contratolocacao" | "reajustecontrato" | "memoriacalculo" | "memoriacalculoitem" | "despesa" | "tabelairrf" | "faixairrf"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      endereco: {
        payload: Prisma.$enderecoPayload<ExtArgs>
        fields: Prisma.enderecoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.enderecoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.enderecoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          findFirst: {
            args: Prisma.enderecoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.enderecoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          findMany: {
            args: Prisma.enderecoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>[]
          }
          create: {
            args: Prisma.enderecoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          createMany: {
            args: Prisma.enderecoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.enderecoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          update: {
            args: Prisma.enderecoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          deleteMany: {
            args: Prisma.enderecoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.enderecoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.enderecoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          aggregate: {
            args: Prisma.EnderecoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEndereco>
          }
          groupBy: {
            args: Prisma.enderecoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnderecoGroupByOutputType>[]
          }
          count: {
            args: Prisma.enderecoCountArgs<ExtArgs>
            result: $Utils.Optional<EnderecoCountAggregateOutputType> | number
          }
        }
      }
      imovel: {
        payload: Prisma.$imovelPayload<ExtArgs>
        fields: Prisma.imovelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.imovelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imovelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.imovelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imovelPayload>
          }
          findFirst: {
            args: Prisma.imovelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imovelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.imovelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imovelPayload>
          }
          findMany: {
            args: Prisma.imovelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imovelPayload>[]
          }
          create: {
            args: Prisma.imovelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imovelPayload>
          }
          createMany: {
            args: Prisma.imovelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.imovelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imovelPayload>
          }
          update: {
            args: Prisma.imovelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imovelPayload>
          }
          deleteMany: {
            args: Prisma.imovelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.imovelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.imovelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imovelPayload>
          }
          aggregate: {
            args: Prisma.ImovelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImovel>
          }
          groupBy: {
            args: Prisma.imovelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImovelGroupByOutputType>[]
          }
          count: {
            args: Prisma.imovelCountArgs<ExtArgs>
            result: $Utils.Optional<ImovelCountAggregateOutputType> | number
          }
        }
      }
      propriedadeimovel: {
        payload: Prisma.$propriedadeimovelPayload<ExtArgs>
        fields: Prisma.propriedadeimovelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.propriedadeimovelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propriedadeimovelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.propriedadeimovelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propriedadeimovelPayload>
          }
          findFirst: {
            args: Prisma.propriedadeimovelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propriedadeimovelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.propriedadeimovelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propriedadeimovelPayload>
          }
          findMany: {
            args: Prisma.propriedadeimovelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propriedadeimovelPayload>[]
          }
          create: {
            args: Prisma.propriedadeimovelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propriedadeimovelPayload>
          }
          createMany: {
            args: Prisma.propriedadeimovelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.propriedadeimovelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propriedadeimovelPayload>
          }
          update: {
            args: Prisma.propriedadeimovelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propriedadeimovelPayload>
          }
          deleteMany: {
            args: Prisma.propriedadeimovelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.propriedadeimovelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.propriedadeimovelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propriedadeimovelPayload>
          }
          aggregate: {
            args: Prisma.PropriedadeimovelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropriedadeimovel>
          }
          groupBy: {
            args: Prisma.propriedadeimovelGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropriedadeimovelGroupByOutputType>[]
          }
          count: {
            args: Prisma.propriedadeimovelCountArgs<ExtArgs>
            result: $Utils.Optional<PropriedadeimovelCountAggregateOutputType> | number
          }
        }
      }
      contratolocacao: {
        payload: Prisma.$contratolocacaoPayload<ExtArgs>
        fields: Prisma.contratolocacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.contratolocacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contratolocacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.contratolocacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contratolocacaoPayload>
          }
          findFirst: {
            args: Prisma.contratolocacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contratolocacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.contratolocacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contratolocacaoPayload>
          }
          findMany: {
            args: Prisma.contratolocacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contratolocacaoPayload>[]
          }
          create: {
            args: Prisma.contratolocacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contratolocacaoPayload>
          }
          createMany: {
            args: Prisma.contratolocacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.contratolocacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contratolocacaoPayload>
          }
          update: {
            args: Prisma.contratolocacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contratolocacaoPayload>
          }
          deleteMany: {
            args: Prisma.contratolocacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.contratolocacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.contratolocacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contratolocacaoPayload>
          }
          aggregate: {
            args: Prisma.ContratolocacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContratolocacao>
          }
          groupBy: {
            args: Prisma.contratolocacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContratolocacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.contratolocacaoCountArgs<ExtArgs>
            result: $Utils.Optional<ContratolocacaoCountAggregateOutputType> | number
          }
        }
      }
      reajustecontrato: {
        payload: Prisma.$reajustecontratoPayload<ExtArgs>
        fields: Prisma.reajustecontratoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reajustecontratoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reajustecontratoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reajustecontratoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reajustecontratoPayload>
          }
          findFirst: {
            args: Prisma.reajustecontratoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reajustecontratoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reajustecontratoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reajustecontratoPayload>
          }
          findMany: {
            args: Prisma.reajustecontratoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reajustecontratoPayload>[]
          }
          create: {
            args: Prisma.reajustecontratoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reajustecontratoPayload>
          }
          createMany: {
            args: Prisma.reajustecontratoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.reajustecontratoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reajustecontratoPayload>
          }
          update: {
            args: Prisma.reajustecontratoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reajustecontratoPayload>
          }
          deleteMany: {
            args: Prisma.reajustecontratoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reajustecontratoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.reajustecontratoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reajustecontratoPayload>
          }
          aggregate: {
            args: Prisma.ReajustecontratoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReajustecontrato>
          }
          groupBy: {
            args: Prisma.reajustecontratoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReajustecontratoGroupByOutputType>[]
          }
          count: {
            args: Prisma.reajustecontratoCountArgs<ExtArgs>
            result: $Utils.Optional<ReajustecontratoCountAggregateOutputType> | number
          }
        }
      }
      memoriacalculo: {
        payload: Prisma.$memoriacalculoPayload<ExtArgs>
        fields: Prisma.memoriacalculoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.memoriacalculoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memoriacalculoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.memoriacalculoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memoriacalculoPayload>
          }
          findFirst: {
            args: Prisma.memoriacalculoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memoriacalculoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.memoriacalculoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memoriacalculoPayload>
          }
          findMany: {
            args: Prisma.memoriacalculoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memoriacalculoPayload>[]
          }
          create: {
            args: Prisma.memoriacalculoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memoriacalculoPayload>
          }
          createMany: {
            args: Prisma.memoriacalculoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.memoriacalculoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memoriacalculoPayload>
          }
          update: {
            args: Prisma.memoriacalculoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memoriacalculoPayload>
          }
          deleteMany: {
            args: Prisma.memoriacalculoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.memoriacalculoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.memoriacalculoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memoriacalculoPayload>
          }
          aggregate: {
            args: Prisma.MemoriacalculoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemoriacalculo>
          }
          groupBy: {
            args: Prisma.memoriacalculoGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemoriacalculoGroupByOutputType>[]
          }
          count: {
            args: Prisma.memoriacalculoCountArgs<ExtArgs>
            result: $Utils.Optional<MemoriacalculoCountAggregateOutputType> | number
          }
        }
      }
      memoriacalculoitem: {
        payload: Prisma.$memoriacalculoitemPayload<ExtArgs>
        fields: Prisma.memoriacalculoitemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.memoriacalculoitemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memoriacalculoitemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.memoriacalculoitemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memoriacalculoitemPayload>
          }
          findFirst: {
            args: Prisma.memoriacalculoitemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memoriacalculoitemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.memoriacalculoitemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memoriacalculoitemPayload>
          }
          findMany: {
            args: Prisma.memoriacalculoitemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memoriacalculoitemPayload>[]
          }
          create: {
            args: Prisma.memoriacalculoitemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memoriacalculoitemPayload>
          }
          createMany: {
            args: Prisma.memoriacalculoitemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.memoriacalculoitemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memoriacalculoitemPayload>
          }
          update: {
            args: Prisma.memoriacalculoitemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memoriacalculoitemPayload>
          }
          deleteMany: {
            args: Prisma.memoriacalculoitemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.memoriacalculoitemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.memoriacalculoitemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memoriacalculoitemPayload>
          }
          aggregate: {
            args: Prisma.MemoriacalculoitemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemoriacalculoitem>
          }
          groupBy: {
            args: Prisma.memoriacalculoitemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemoriacalculoitemGroupByOutputType>[]
          }
          count: {
            args: Prisma.memoriacalculoitemCountArgs<ExtArgs>
            result: $Utils.Optional<MemoriacalculoitemCountAggregateOutputType> | number
          }
        }
      }
      despesa: {
        payload: Prisma.$despesaPayload<ExtArgs>
        fields: Prisma.despesaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.despesaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$despesaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.despesaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$despesaPayload>
          }
          findFirst: {
            args: Prisma.despesaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$despesaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.despesaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$despesaPayload>
          }
          findMany: {
            args: Prisma.despesaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$despesaPayload>[]
          }
          create: {
            args: Prisma.despesaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$despesaPayload>
          }
          createMany: {
            args: Prisma.despesaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.despesaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$despesaPayload>
          }
          update: {
            args: Prisma.despesaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$despesaPayload>
          }
          deleteMany: {
            args: Prisma.despesaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.despesaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.despesaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$despesaPayload>
          }
          aggregate: {
            args: Prisma.DespesaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDespesa>
          }
          groupBy: {
            args: Prisma.despesaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DespesaGroupByOutputType>[]
          }
          count: {
            args: Prisma.despesaCountArgs<ExtArgs>
            result: $Utils.Optional<DespesaCountAggregateOutputType> | number
          }
        }
      }
      tabelairrf: {
        payload: Prisma.$tabelairrfPayload<ExtArgs>
        fields: Prisma.tabelairrfFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tabelairrfFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tabelairrfPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tabelairrfFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tabelairrfPayload>
          }
          findFirst: {
            args: Prisma.tabelairrfFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tabelairrfPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tabelairrfFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tabelairrfPayload>
          }
          findMany: {
            args: Prisma.tabelairrfFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tabelairrfPayload>[]
          }
          create: {
            args: Prisma.tabelairrfCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tabelairrfPayload>
          }
          createMany: {
            args: Prisma.tabelairrfCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tabelairrfDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tabelairrfPayload>
          }
          update: {
            args: Prisma.tabelairrfUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tabelairrfPayload>
          }
          deleteMany: {
            args: Prisma.tabelairrfDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tabelairrfUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tabelairrfUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tabelairrfPayload>
          }
          aggregate: {
            args: Prisma.TabelairrfAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTabelairrf>
          }
          groupBy: {
            args: Prisma.tabelairrfGroupByArgs<ExtArgs>
            result: $Utils.Optional<TabelairrfGroupByOutputType>[]
          }
          count: {
            args: Prisma.tabelairrfCountArgs<ExtArgs>
            result: $Utils.Optional<TabelairrfCountAggregateOutputType> | number
          }
        }
      }
      faixairrf: {
        payload: Prisma.$faixairrfPayload<ExtArgs>
        fields: Prisma.faixairrfFieldRefs
        operations: {
          findUnique: {
            args: Prisma.faixairrfFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faixairrfPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.faixairrfFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faixairrfPayload>
          }
          findFirst: {
            args: Prisma.faixairrfFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faixairrfPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.faixairrfFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faixairrfPayload>
          }
          findMany: {
            args: Prisma.faixairrfFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faixairrfPayload>[]
          }
          create: {
            args: Prisma.faixairrfCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faixairrfPayload>
          }
          createMany: {
            args: Prisma.faixairrfCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.faixairrfDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faixairrfPayload>
          }
          update: {
            args: Prisma.faixairrfUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faixairrfPayload>
          }
          deleteMany: {
            args: Prisma.faixairrfDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.faixairrfUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.faixairrfUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faixairrfPayload>
          }
          aggregate: {
            args: Prisma.FaixairrfAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFaixairrf>
          }
          groupBy: {
            args: Prisma.faixairrfGroupByArgs<ExtArgs>
            result: $Utils.Optional<FaixairrfGroupByOutputType>[]
          }
          count: {
            args: Prisma.faixairrfCountArgs<ExtArgs>
            result: $Utils.Optional<FaixairrfCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    endereco?: enderecoOmit
    imovel?: imovelOmit
    propriedadeimovel?: propriedadeimovelOmit
    contratolocacao?: contratolocacaoOmit
    reajustecontrato?: reajustecontratoOmit
    memoriacalculo?: memoriacalculoOmit
    memoriacalculoitem?: memoriacalculoitemOmit
    despesa?: despesaOmit
    tabelairrf?: tabelairrfOmit
    faixairrf?: faixairrfOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EnderecoCountOutputType
   */

  export type EnderecoCountOutputType = {
    imovel: number
  }

  export type EnderecoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imovel?: boolean | EnderecoCountOutputTypeCountImovelArgs
  }

  // Custom InputTypes
  /**
   * EnderecoCountOutputType without action
   */
  export type EnderecoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoCountOutputType
     */
    select?: EnderecoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EnderecoCountOutputType without action
   */
  export type EnderecoCountOutputTypeCountImovelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: imovelWhereInput
  }


  /**
   * Count Type ImovelCountOutputType
   */

  export type ImovelCountOutputType = {
    contratolocacao: number
    propriedadeimovel: number
    memoriacalculo: number
  }

  export type ImovelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contratolocacao?: boolean | ImovelCountOutputTypeCountContratolocacaoArgs
    propriedadeimovel?: boolean | ImovelCountOutputTypeCountPropriedadeimovelArgs
    memoriacalculo?: boolean | ImovelCountOutputTypeCountMemoriacalculoArgs
  }

  // Custom InputTypes
  /**
   * ImovelCountOutputType without action
   */
  export type ImovelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImovelCountOutputType
     */
    select?: ImovelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImovelCountOutputType without action
   */
  export type ImovelCountOutputTypeCountContratolocacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contratolocacaoWhereInput
  }

  /**
   * ImovelCountOutputType without action
   */
  export type ImovelCountOutputTypeCountPropriedadeimovelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: propriedadeimovelWhereInput
  }

  /**
   * ImovelCountOutputType without action
   */
  export type ImovelCountOutputTypeCountMemoriacalculoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: memoriacalculoWhereInput
  }


  /**
   * Count Type ContratolocacaoCountOutputType
   */

  export type ContratolocacaoCountOutputType = {
    despesa: number
    reajustecontrato: number
    memoriacalculo: number
  }

  export type ContratolocacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    despesa?: boolean | ContratolocacaoCountOutputTypeCountDespesaArgs
    reajustecontrato?: boolean | ContratolocacaoCountOutputTypeCountReajustecontratoArgs
    memoriacalculo?: boolean | ContratolocacaoCountOutputTypeCountMemoriacalculoArgs
  }

  // Custom InputTypes
  /**
   * ContratolocacaoCountOutputType without action
   */
  export type ContratolocacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContratolocacaoCountOutputType
     */
    select?: ContratolocacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContratolocacaoCountOutputType without action
   */
  export type ContratolocacaoCountOutputTypeCountDespesaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: despesaWhereInput
  }

  /**
   * ContratolocacaoCountOutputType without action
   */
  export type ContratolocacaoCountOutputTypeCountReajustecontratoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reajustecontratoWhereInput
  }

  /**
   * ContratolocacaoCountOutputType without action
   */
  export type ContratolocacaoCountOutputTypeCountMemoriacalculoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: memoriacalculoWhereInput
  }


  /**
   * Count Type MemoriacalculoCountOutputType
   */

  export type MemoriacalculoCountOutputType = {
    itens: number
  }

  export type MemoriacalculoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | MemoriacalculoCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * MemoriacalculoCountOutputType without action
   */
  export type MemoriacalculoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoriacalculoCountOutputType
     */
    select?: MemoriacalculoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MemoriacalculoCountOutputType without action
   */
  export type MemoriacalculoCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: memoriacalculoitemWhereInput
  }


  /**
   * Count Type TabelairrfCountOutputType
   */

  export type TabelairrfCountOutputType = {
    faixairrf: number
  }

  export type TabelairrfCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faixairrf?: boolean | TabelairrfCountOutputTypeCountFaixairrfArgs
  }

  // Custom InputTypes
  /**
   * TabelairrfCountOutputType without action
   */
  export type TabelairrfCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TabelairrfCountOutputType
     */
    select?: TabelairrfCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TabelairrfCountOutputType without action
   */
  export type TabelairrfCountOutputTypeCountFaixairrfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: faixairrfWhereInput
  }


  /**
   * Models
   */

  /**
   * Model endereco
   */

  export type AggregateEndereco = {
    _count: EnderecoCountAggregateOutputType | null
    _avg: EnderecoAvgAggregateOutputType | null
    _sum: EnderecoSumAggregateOutputType | null
    _min: EnderecoMinAggregateOutputType | null
    _max: EnderecoMaxAggregateOutputType | null
  }

  export type EnderecoAvgAggregateOutputType = {
    id: number | null
  }

  export type EnderecoSumAggregateOutputType = {
    id: number | null
  }

  export type EnderecoMinAggregateOutputType = {
    id: number | null
    rua: string | null
    numero: string | null
    bairro: string | null
    cidade: string | null
    estado: string | null
    cep: string | null
  }

  export type EnderecoMaxAggregateOutputType = {
    id: number | null
    rua: string | null
    numero: string | null
    bairro: string | null
    cidade: string | null
    estado: string | null
    cep: string | null
  }

  export type EnderecoCountAggregateOutputType = {
    id: number
    rua: number
    numero: number
    bairro: number
    cidade: number
    estado: number
    cep: number
    _all: number
  }


  export type EnderecoAvgAggregateInputType = {
    id?: true
  }

  export type EnderecoSumAggregateInputType = {
    id?: true
  }

  export type EnderecoMinAggregateInputType = {
    id?: true
    rua?: true
    numero?: true
    bairro?: true
    cidade?: true
    estado?: true
    cep?: true
  }

  export type EnderecoMaxAggregateInputType = {
    id?: true
    rua?: true
    numero?: true
    bairro?: true
    cidade?: true
    estado?: true
    cep?: true
  }

  export type EnderecoCountAggregateInputType = {
    id?: true
    rua?: true
    numero?: true
    bairro?: true
    cidade?: true
    estado?: true
    cep?: true
    _all?: true
  }

  export type EnderecoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which endereco to aggregate.
     */
    where?: enderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enderecos to fetch.
     */
    orderBy?: enderecoOrderByWithRelationInput | enderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: enderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned enderecos
    **/
    _count?: true | EnderecoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnderecoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnderecoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnderecoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnderecoMaxAggregateInputType
  }

  export type GetEnderecoAggregateType<T extends EnderecoAggregateArgs> = {
        [P in keyof T & keyof AggregateEndereco]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEndereco[P]>
      : GetScalarType<T[P], AggregateEndereco[P]>
  }




  export type enderecoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enderecoWhereInput
    orderBy?: enderecoOrderByWithAggregationInput | enderecoOrderByWithAggregationInput[]
    by: EnderecoScalarFieldEnum[] | EnderecoScalarFieldEnum
    having?: enderecoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnderecoCountAggregateInputType | true
    _avg?: EnderecoAvgAggregateInputType
    _sum?: EnderecoSumAggregateInputType
    _min?: EnderecoMinAggregateInputType
    _max?: EnderecoMaxAggregateInputType
  }

  export type EnderecoGroupByOutputType = {
    id: number
    rua: string
    numero: string | null
    bairro: string
    cidade: string
    estado: string
    cep: string
    _count: EnderecoCountAggregateOutputType | null
    _avg: EnderecoAvgAggregateOutputType | null
    _sum: EnderecoSumAggregateOutputType | null
    _min: EnderecoMinAggregateOutputType | null
    _max: EnderecoMaxAggregateOutputType | null
  }

  type GetEnderecoGroupByPayload<T extends enderecoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnderecoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnderecoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnderecoGroupByOutputType[P]>
            : GetScalarType<T[P], EnderecoGroupByOutputType[P]>
        }
      >
    >


  export type enderecoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rua?: boolean
    numero?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    cep?: boolean
    imovel?: boolean | endereco$imovelArgs<ExtArgs>
    _count?: boolean | EnderecoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endereco"]>



  export type enderecoSelectScalar = {
    id?: boolean
    rua?: boolean
    numero?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    cep?: boolean
  }

  export type enderecoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rua" | "numero" | "bairro" | "cidade" | "estado" | "cep", ExtArgs["result"]["endereco"]>
  export type enderecoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imovel?: boolean | endereco$imovelArgs<ExtArgs>
    _count?: boolean | EnderecoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $enderecoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "endereco"
    objects: {
      imovel: Prisma.$imovelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rua: string
      numero: string | null
      bairro: string
      cidade: string
      estado: string
      cep: string
    }, ExtArgs["result"]["endereco"]>
    composites: {}
  }

  type enderecoGetPayload<S extends boolean | null | undefined | enderecoDefaultArgs> = $Result.GetResult<Prisma.$enderecoPayload, S>

  type enderecoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<enderecoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnderecoCountAggregateInputType | true
    }

  export interface enderecoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['endereco'], meta: { name: 'endereco' } }
    /**
     * Find zero or one Endereco that matches the filter.
     * @param {enderecoFindUniqueArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends enderecoFindUniqueArgs>(args: SelectSubset<T, enderecoFindUniqueArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Endereco that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {enderecoFindUniqueOrThrowArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends enderecoFindUniqueOrThrowArgs>(args: SelectSubset<T, enderecoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endereco that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoFindFirstArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends enderecoFindFirstArgs>(args?: SelectSubset<T, enderecoFindFirstArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endereco that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoFindFirstOrThrowArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends enderecoFindFirstOrThrowArgs>(args?: SelectSubset<T, enderecoFindFirstOrThrowArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enderecos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enderecos
     * const enderecos = await prisma.endereco.findMany()
     * 
     * // Get first 10 Enderecos
     * const enderecos = await prisma.endereco.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enderecoWithIdOnly = await prisma.endereco.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends enderecoFindManyArgs>(args?: SelectSubset<T, enderecoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Endereco.
     * @param {enderecoCreateArgs} args - Arguments to create a Endereco.
     * @example
     * // Create one Endereco
     * const Endereco = await prisma.endereco.create({
     *   data: {
     *     // ... data to create a Endereco
     *   }
     * })
     * 
     */
    create<T extends enderecoCreateArgs>(args: SelectSubset<T, enderecoCreateArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enderecos.
     * @param {enderecoCreateManyArgs} args - Arguments to create many Enderecos.
     * @example
     * // Create many Enderecos
     * const endereco = await prisma.endereco.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends enderecoCreateManyArgs>(args?: SelectSubset<T, enderecoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Endereco.
     * @param {enderecoDeleteArgs} args - Arguments to delete one Endereco.
     * @example
     * // Delete one Endereco
     * const Endereco = await prisma.endereco.delete({
     *   where: {
     *     // ... filter to delete one Endereco
     *   }
     * })
     * 
     */
    delete<T extends enderecoDeleteArgs>(args: SelectSubset<T, enderecoDeleteArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Endereco.
     * @param {enderecoUpdateArgs} args - Arguments to update one Endereco.
     * @example
     * // Update one Endereco
     * const endereco = await prisma.endereco.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends enderecoUpdateArgs>(args: SelectSubset<T, enderecoUpdateArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enderecos.
     * @param {enderecoDeleteManyArgs} args - Arguments to filter Enderecos to delete.
     * @example
     * // Delete a few Enderecos
     * const { count } = await prisma.endereco.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends enderecoDeleteManyArgs>(args?: SelectSubset<T, enderecoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enderecos
     * const endereco = await prisma.endereco.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends enderecoUpdateManyArgs>(args: SelectSubset<T, enderecoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Endereco.
     * @param {enderecoUpsertArgs} args - Arguments to update or create a Endereco.
     * @example
     * // Update or create a Endereco
     * const endereco = await prisma.endereco.upsert({
     *   create: {
     *     // ... data to create a Endereco
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Endereco we want to update
     *   }
     * })
     */
    upsert<T extends enderecoUpsertArgs>(args: SelectSubset<T, enderecoUpsertArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoCountArgs} args - Arguments to filter Enderecos to count.
     * @example
     * // Count the number of Enderecos
     * const count = await prisma.endereco.count({
     *   where: {
     *     // ... the filter for the Enderecos we want to count
     *   }
     * })
    **/
    count<T extends enderecoCountArgs>(
      args?: Subset<T, enderecoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnderecoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnderecoAggregateArgs>(args: Subset<T, EnderecoAggregateArgs>): Prisma.PrismaPromise<GetEnderecoAggregateType<T>>

    /**
     * Group by Endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends enderecoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: enderecoGroupByArgs['orderBy'] }
        : { orderBy?: enderecoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, enderecoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnderecoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the endereco model
   */
  readonly fields: enderecoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for endereco.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__enderecoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    imovel<T extends endereco$imovelArgs<ExtArgs> = {}>(args?: Subset<T, endereco$imovelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imovelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the endereco model
   */
  interface enderecoFieldRefs {
    readonly id: FieldRef<"endereco", 'Int'>
    readonly rua: FieldRef<"endereco", 'String'>
    readonly numero: FieldRef<"endereco", 'String'>
    readonly bairro: FieldRef<"endereco", 'String'>
    readonly cidade: FieldRef<"endereco", 'String'>
    readonly estado: FieldRef<"endereco", 'String'>
    readonly cep: FieldRef<"endereco", 'String'>
  }
    

  // Custom InputTypes
  /**
   * endereco findUnique
   */
  export type enderecoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter, which endereco to fetch.
     */
    where: enderecoWhereUniqueInput
  }

  /**
   * endereco findUniqueOrThrow
   */
  export type enderecoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter, which endereco to fetch.
     */
    where: enderecoWhereUniqueInput
  }

  /**
   * endereco findFirst
   */
  export type enderecoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter, which endereco to fetch.
     */
    where?: enderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enderecos to fetch.
     */
    orderBy?: enderecoOrderByWithRelationInput | enderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enderecos.
     */
    cursor?: enderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enderecos.
     */
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * endereco findFirstOrThrow
   */
  export type enderecoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter, which endereco to fetch.
     */
    where?: enderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enderecos to fetch.
     */
    orderBy?: enderecoOrderByWithRelationInput | enderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enderecos.
     */
    cursor?: enderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enderecos.
     */
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * endereco findMany
   */
  export type enderecoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter, which enderecos to fetch.
     */
    where?: enderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enderecos to fetch.
     */
    orderBy?: enderecoOrderByWithRelationInput | enderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing enderecos.
     */
    cursor?: enderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enderecos.
     */
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * endereco create
   */
  export type enderecoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * The data needed to create a endereco.
     */
    data: XOR<enderecoCreateInput, enderecoUncheckedCreateInput>
  }

  /**
   * endereco createMany
   */
  export type enderecoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many enderecos.
     */
    data: enderecoCreateManyInput | enderecoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * endereco update
   */
  export type enderecoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * The data needed to update a endereco.
     */
    data: XOR<enderecoUpdateInput, enderecoUncheckedUpdateInput>
    /**
     * Choose, which endereco to update.
     */
    where: enderecoWhereUniqueInput
  }

  /**
   * endereco updateMany
   */
  export type enderecoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update enderecos.
     */
    data: XOR<enderecoUpdateManyMutationInput, enderecoUncheckedUpdateManyInput>
    /**
     * Filter which enderecos to update
     */
    where?: enderecoWhereInput
    /**
     * Limit how many enderecos to update.
     */
    limit?: number
  }

  /**
   * endereco upsert
   */
  export type enderecoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * The filter to search for the endereco to update in case it exists.
     */
    where: enderecoWhereUniqueInput
    /**
     * In case the endereco found by the `where` argument doesn't exist, create a new endereco with this data.
     */
    create: XOR<enderecoCreateInput, enderecoUncheckedCreateInput>
    /**
     * In case the endereco was found with the provided `where` argument, update it with this data.
     */
    update: XOR<enderecoUpdateInput, enderecoUncheckedUpdateInput>
  }

  /**
   * endereco delete
   */
  export type enderecoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter which endereco to delete.
     */
    where: enderecoWhereUniqueInput
  }

  /**
   * endereco deleteMany
   */
  export type enderecoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enderecos to delete
     */
    where?: enderecoWhereInput
    /**
     * Limit how many enderecos to delete.
     */
    limit?: number
  }

  /**
   * endereco.imovel
   */
  export type endereco$imovelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imovel
     */
    select?: imovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imovel
     */
    omit?: imovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imovelInclude<ExtArgs> | null
    where?: imovelWhereInput
    orderBy?: imovelOrderByWithRelationInput | imovelOrderByWithRelationInput[]
    cursor?: imovelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImovelScalarFieldEnum | ImovelScalarFieldEnum[]
  }

  /**
   * endereco without action
   */
  export type enderecoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
  }


  /**
   * Model imovel
   */

  export type AggregateImovel = {
    _count: ImovelCountAggregateOutputType | null
    _avg: ImovelAvgAggregateOutputType | null
    _sum: ImovelSumAggregateOutputType | null
    _min: ImovelMinAggregateOutputType | null
    _max: ImovelMaxAggregateOutputType | null
  }

  export type ImovelAvgAggregateOutputType = {
    id: number | null
    idEndereco: number | null
  }

  export type ImovelSumAggregateOutputType = {
    id: number | null
    idEndereco: number | null
  }

  export type ImovelMinAggregateOutputType = {
    id: number | null
    idEndereco: number | null
    inscricaoIPTU: string | null
    inscricaoBombeiro: string | null
    metragem: string | null
    dataCadastro: Date | null
    classificacao: $Enums.classificacao_enum | null
    tipologia: $Enums.tipologia_enum | null
    status: $Enums.status_imovel_enum | null
  }

  export type ImovelMaxAggregateOutputType = {
    id: number | null
    idEndereco: number | null
    inscricaoIPTU: string | null
    inscricaoBombeiro: string | null
    metragem: string | null
    dataCadastro: Date | null
    classificacao: $Enums.classificacao_enum | null
    tipologia: $Enums.tipologia_enum | null
    status: $Enums.status_imovel_enum | null
  }

  export type ImovelCountAggregateOutputType = {
    id: number
    idEndereco: number
    inscricaoIPTU: number
    inscricaoBombeiro: number
    metragem: number
    dataCadastro: number
    classificacao: number
    tipologia: number
    status: number
    _all: number
  }


  export type ImovelAvgAggregateInputType = {
    id?: true
    idEndereco?: true
  }

  export type ImovelSumAggregateInputType = {
    id?: true
    idEndereco?: true
  }

  export type ImovelMinAggregateInputType = {
    id?: true
    idEndereco?: true
    inscricaoIPTU?: true
    inscricaoBombeiro?: true
    metragem?: true
    dataCadastro?: true
    classificacao?: true
    tipologia?: true
    status?: true
  }

  export type ImovelMaxAggregateInputType = {
    id?: true
    idEndereco?: true
    inscricaoIPTU?: true
    inscricaoBombeiro?: true
    metragem?: true
    dataCadastro?: true
    classificacao?: true
    tipologia?: true
    status?: true
  }

  export type ImovelCountAggregateInputType = {
    id?: true
    idEndereco?: true
    inscricaoIPTU?: true
    inscricaoBombeiro?: true
    metragem?: true
    dataCadastro?: true
    classificacao?: true
    tipologia?: true
    status?: true
    _all?: true
  }

  export type ImovelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which imovel to aggregate.
     */
    where?: imovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of imovels to fetch.
     */
    orderBy?: imovelOrderByWithRelationInput | imovelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: imovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` imovels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` imovels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned imovels
    **/
    _count?: true | ImovelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImovelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImovelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImovelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImovelMaxAggregateInputType
  }

  export type GetImovelAggregateType<T extends ImovelAggregateArgs> = {
        [P in keyof T & keyof AggregateImovel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImovel[P]>
      : GetScalarType<T[P], AggregateImovel[P]>
  }




  export type imovelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: imovelWhereInput
    orderBy?: imovelOrderByWithAggregationInput | imovelOrderByWithAggregationInput[]
    by: ImovelScalarFieldEnum[] | ImovelScalarFieldEnum
    having?: imovelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImovelCountAggregateInputType | true
    _avg?: ImovelAvgAggregateInputType
    _sum?: ImovelSumAggregateInputType
    _min?: ImovelMinAggregateInputType
    _max?: ImovelMaxAggregateInputType
  }

  export type ImovelGroupByOutputType = {
    id: number
    idEndereco: number
    inscricaoIPTU: string | null
    inscricaoBombeiro: string | null
    metragem: string | null
    dataCadastro: Date
    classificacao: $Enums.classificacao_enum
    tipologia: $Enums.tipologia_enum
    status: $Enums.status_imovel_enum
    _count: ImovelCountAggregateOutputType | null
    _avg: ImovelAvgAggregateOutputType | null
    _sum: ImovelSumAggregateOutputType | null
    _min: ImovelMinAggregateOutputType | null
    _max: ImovelMaxAggregateOutputType | null
  }

  type GetImovelGroupByPayload<T extends imovelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImovelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImovelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImovelGroupByOutputType[P]>
            : GetScalarType<T[P], ImovelGroupByOutputType[P]>
        }
      >
    >


  export type imovelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idEndereco?: boolean
    inscricaoIPTU?: boolean
    inscricaoBombeiro?: boolean
    metragem?: boolean
    dataCadastro?: boolean
    classificacao?: boolean
    tipologia?: boolean
    status?: boolean
    endereco?: boolean | enderecoDefaultArgs<ExtArgs>
    contratolocacao?: boolean | imovel$contratolocacaoArgs<ExtArgs>
    propriedadeimovel?: boolean | imovel$propriedadeimovelArgs<ExtArgs>
    memoriacalculo?: boolean | imovel$memoriacalculoArgs<ExtArgs>
    _count?: boolean | ImovelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imovel"]>



  export type imovelSelectScalar = {
    id?: boolean
    idEndereco?: boolean
    inscricaoIPTU?: boolean
    inscricaoBombeiro?: boolean
    metragem?: boolean
    dataCadastro?: boolean
    classificacao?: boolean
    tipologia?: boolean
    status?: boolean
  }

  export type imovelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idEndereco" | "inscricaoIPTU" | "inscricaoBombeiro" | "metragem" | "dataCadastro" | "classificacao" | "tipologia" | "status", ExtArgs["result"]["imovel"]>
  export type imovelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endereco?: boolean | enderecoDefaultArgs<ExtArgs>
    contratolocacao?: boolean | imovel$contratolocacaoArgs<ExtArgs>
    propriedadeimovel?: boolean | imovel$propriedadeimovelArgs<ExtArgs>
    memoriacalculo?: boolean | imovel$memoriacalculoArgs<ExtArgs>
    _count?: boolean | ImovelCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $imovelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "imovel"
    objects: {
      endereco: Prisma.$enderecoPayload<ExtArgs>
      contratolocacao: Prisma.$contratolocacaoPayload<ExtArgs>[]
      propriedadeimovel: Prisma.$propriedadeimovelPayload<ExtArgs>[]
      memoriacalculo: Prisma.$memoriacalculoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idEndereco: number
      inscricaoIPTU: string | null
      inscricaoBombeiro: string | null
      metragem: string | null
      dataCadastro: Date
      classificacao: $Enums.classificacao_enum
      tipologia: $Enums.tipologia_enum
      status: $Enums.status_imovel_enum
    }, ExtArgs["result"]["imovel"]>
    composites: {}
  }

  type imovelGetPayload<S extends boolean | null | undefined | imovelDefaultArgs> = $Result.GetResult<Prisma.$imovelPayload, S>

  type imovelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<imovelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImovelCountAggregateInputType | true
    }

  export interface imovelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['imovel'], meta: { name: 'imovel' } }
    /**
     * Find zero or one Imovel that matches the filter.
     * @param {imovelFindUniqueArgs} args - Arguments to find a Imovel
     * @example
     * // Get one Imovel
     * const imovel = await prisma.imovel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends imovelFindUniqueArgs>(args: SelectSubset<T, imovelFindUniqueArgs<ExtArgs>>): Prisma__imovelClient<$Result.GetResult<Prisma.$imovelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Imovel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {imovelFindUniqueOrThrowArgs} args - Arguments to find a Imovel
     * @example
     * // Get one Imovel
     * const imovel = await prisma.imovel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends imovelFindUniqueOrThrowArgs>(args: SelectSubset<T, imovelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__imovelClient<$Result.GetResult<Prisma.$imovelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Imovel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imovelFindFirstArgs} args - Arguments to find a Imovel
     * @example
     * // Get one Imovel
     * const imovel = await prisma.imovel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends imovelFindFirstArgs>(args?: SelectSubset<T, imovelFindFirstArgs<ExtArgs>>): Prisma__imovelClient<$Result.GetResult<Prisma.$imovelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Imovel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imovelFindFirstOrThrowArgs} args - Arguments to find a Imovel
     * @example
     * // Get one Imovel
     * const imovel = await prisma.imovel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends imovelFindFirstOrThrowArgs>(args?: SelectSubset<T, imovelFindFirstOrThrowArgs<ExtArgs>>): Prisma__imovelClient<$Result.GetResult<Prisma.$imovelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Imovels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imovelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Imovels
     * const imovels = await prisma.imovel.findMany()
     * 
     * // Get first 10 Imovels
     * const imovels = await prisma.imovel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imovelWithIdOnly = await prisma.imovel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends imovelFindManyArgs>(args?: SelectSubset<T, imovelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imovelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Imovel.
     * @param {imovelCreateArgs} args - Arguments to create a Imovel.
     * @example
     * // Create one Imovel
     * const Imovel = await prisma.imovel.create({
     *   data: {
     *     // ... data to create a Imovel
     *   }
     * })
     * 
     */
    create<T extends imovelCreateArgs>(args: SelectSubset<T, imovelCreateArgs<ExtArgs>>): Prisma__imovelClient<$Result.GetResult<Prisma.$imovelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Imovels.
     * @param {imovelCreateManyArgs} args - Arguments to create many Imovels.
     * @example
     * // Create many Imovels
     * const imovel = await prisma.imovel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends imovelCreateManyArgs>(args?: SelectSubset<T, imovelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Imovel.
     * @param {imovelDeleteArgs} args - Arguments to delete one Imovel.
     * @example
     * // Delete one Imovel
     * const Imovel = await prisma.imovel.delete({
     *   where: {
     *     // ... filter to delete one Imovel
     *   }
     * })
     * 
     */
    delete<T extends imovelDeleteArgs>(args: SelectSubset<T, imovelDeleteArgs<ExtArgs>>): Prisma__imovelClient<$Result.GetResult<Prisma.$imovelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Imovel.
     * @param {imovelUpdateArgs} args - Arguments to update one Imovel.
     * @example
     * // Update one Imovel
     * const imovel = await prisma.imovel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends imovelUpdateArgs>(args: SelectSubset<T, imovelUpdateArgs<ExtArgs>>): Prisma__imovelClient<$Result.GetResult<Prisma.$imovelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Imovels.
     * @param {imovelDeleteManyArgs} args - Arguments to filter Imovels to delete.
     * @example
     * // Delete a few Imovels
     * const { count } = await prisma.imovel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends imovelDeleteManyArgs>(args?: SelectSubset<T, imovelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Imovels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imovelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Imovels
     * const imovel = await prisma.imovel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends imovelUpdateManyArgs>(args: SelectSubset<T, imovelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Imovel.
     * @param {imovelUpsertArgs} args - Arguments to update or create a Imovel.
     * @example
     * // Update or create a Imovel
     * const imovel = await prisma.imovel.upsert({
     *   create: {
     *     // ... data to create a Imovel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Imovel we want to update
     *   }
     * })
     */
    upsert<T extends imovelUpsertArgs>(args: SelectSubset<T, imovelUpsertArgs<ExtArgs>>): Prisma__imovelClient<$Result.GetResult<Prisma.$imovelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Imovels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imovelCountArgs} args - Arguments to filter Imovels to count.
     * @example
     * // Count the number of Imovels
     * const count = await prisma.imovel.count({
     *   where: {
     *     // ... the filter for the Imovels we want to count
     *   }
     * })
    **/
    count<T extends imovelCountArgs>(
      args?: Subset<T, imovelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImovelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Imovel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImovelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImovelAggregateArgs>(args: Subset<T, ImovelAggregateArgs>): Prisma.PrismaPromise<GetImovelAggregateType<T>>

    /**
     * Group by Imovel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imovelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends imovelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: imovelGroupByArgs['orderBy'] }
        : { orderBy?: imovelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, imovelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImovelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the imovel model
   */
  readonly fields: imovelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for imovel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__imovelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    endereco<T extends enderecoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, enderecoDefaultArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contratolocacao<T extends imovel$contratolocacaoArgs<ExtArgs> = {}>(args?: Subset<T, imovel$contratolocacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contratolocacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    propriedadeimovel<T extends imovel$propriedadeimovelArgs<ExtArgs> = {}>(args?: Subset<T, imovel$propriedadeimovelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$propriedadeimovelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    memoriacalculo<T extends imovel$memoriacalculoArgs<ExtArgs> = {}>(args?: Subset<T, imovel$memoriacalculoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$memoriacalculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the imovel model
   */
  interface imovelFieldRefs {
    readonly id: FieldRef<"imovel", 'Int'>
    readonly idEndereco: FieldRef<"imovel", 'Int'>
    readonly inscricaoIPTU: FieldRef<"imovel", 'String'>
    readonly inscricaoBombeiro: FieldRef<"imovel", 'String'>
    readonly metragem: FieldRef<"imovel", 'String'>
    readonly dataCadastro: FieldRef<"imovel", 'DateTime'>
    readonly classificacao: FieldRef<"imovel", 'classificacao_enum'>
    readonly tipologia: FieldRef<"imovel", 'tipologia_enum'>
    readonly status: FieldRef<"imovel", 'status_imovel_enum'>
  }
    

  // Custom InputTypes
  /**
   * imovel findUnique
   */
  export type imovelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imovel
     */
    select?: imovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imovel
     */
    omit?: imovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imovelInclude<ExtArgs> | null
    /**
     * Filter, which imovel to fetch.
     */
    where: imovelWhereUniqueInput
  }

  /**
   * imovel findUniqueOrThrow
   */
  export type imovelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imovel
     */
    select?: imovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imovel
     */
    omit?: imovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imovelInclude<ExtArgs> | null
    /**
     * Filter, which imovel to fetch.
     */
    where: imovelWhereUniqueInput
  }

  /**
   * imovel findFirst
   */
  export type imovelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imovel
     */
    select?: imovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imovel
     */
    omit?: imovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imovelInclude<ExtArgs> | null
    /**
     * Filter, which imovel to fetch.
     */
    where?: imovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of imovels to fetch.
     */
    orderBy?: imovelOrderByWithRelationInput | imovelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for imovels.
     */
    cursor?: imovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` imovels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` imovels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of imovels.
     */
    distinct?: ImovelScalarFieldEnum | ImovelScalarFieldEnum[]
  }

  /**
   * imovel findFirstOrThrow
   */
  export type imovelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imovel
     */
    select?: imovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imovel
     */
    omit?: imovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imovelInclude<ExtArgs> | null
    /**
     * Filter, which imovel to fetch.
     */
    where?: imovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of imovels to fetch.
     */
    orderBy?: imovelOrderByWithRelationInput | imovelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for imovels.
     */
    cursor?: imovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` imovels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` imovels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of imovels.
     */
    distinct?: ImovelScalarFieldEnum | ImovelScalarFieldEnum[]
  }

  /**
   * imovel findMany
   */
  export type imovelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imovel
     */
    select?: imovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imovel
     */
    omit?: imovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imovelInclude<ExtArgs> | null
    /**
     * Filter, which imovels to fetch.
     */
    where?: imovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of imovels to fetch.
     */
    orderBy?: imovelOrderByWithRelationInput | imovelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing imovels.
     */
    cursor?: imovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` imovels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` imovels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of imovels.
     */
    distinct?: ImovelScalarFieldEnum | ImovelScalarFieldEnum[]
  }

  /**
   * imovel create
   */
  export type imovelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imovel
     */
    select?: imovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imovel
     */
    omit?: imovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imovelInclude<ExtArgs> | null
    /**
     * The data needed to create a imovel.
     */
    data: XOR<imovelCreateInput, imovelUncheckedCreateInput>
  }

  /**
   * imovel createMany
   */
  export type imovelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many imovels.
     */
    data: imovelCreateManyInput | imovelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * imovel update
   */
  export type imovelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imovel
     */
    select?: imovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imovel
     */
    omit?: imovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imovelInclude<ExtArgs> | null
    /**
     * The data needed to update a imovel.
     */
    data: XOR<imovelUpdateInput, imovelUncheckedUpdateInput>
    /**
     * Choose, which imovel to update.
     */
    where: imovelWhereUniqueInput
  }

  /**
   * imovel updateMany
   */
  export type imovelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update imovels.
     */
    data: XOR<imovelUpdateManyMutationInput, imovelUncheckedUpdateManyInput>
    /**
     * Filter which imovels to update
     */
    where?: imovelWhereInput
    /**
     * Limit how many imovels to update.
     */
    limit?: number
  }

  /**
   * imovel upsert
   */
  export type imovelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imovel
     */
    select?: imovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imovel
     */
    omit?: imovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imovelInclude<ExtArgs> | null
    /**
     * The filter to search for the imovel to update in case it exists.
     */
    where: imovelWhereUniqueInput
    /**
     * In case the imovel found by the `where` argument doesn't exist, create a new imovel with this data.
     */
    create: XOR<imovelCreateInput, imovelUncheckedCreateInput>
    /**
     * In case the imovel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<imovelUpdateInput, imovelUncheckedUpdateInput>
  }

  /**
   * imovel delete
   */
  export type imovelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imovel
     */
    select?: imovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imovel
     */
    omit?: imovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imovelInclude<ExtArgs> | null
    /**
     * Filter which imovel to delete.
     */
    where: imovelWhereUniqueInput
  }

  /**
   * imovel deleteMany
   */
  export type imovelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which imovels to delete
     */
    where?: imovelWhereInput
    /**
     * Limit how many imovels to delete.
     */
    limit?: number
  }

  /**
   * imovel.contratolocacao
   */
  export type imovel$contratolocacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contratolocacao
     */
    select?: contratolocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contratolocacao
     */
    omit?: contratolocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contratolocacaoInclude<ExtArgs> | null
    where?: contratolocacaoWhereInput
    orderBy?: contratolocacaoOrderByWithRelationInput | contratolocacaoOrderByWithRelationInput[]
    cursor?: contratolocacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContratolocacaoScalarFieldEnum | ContratolocacaoScalarFieldEnum[]
  }

  /**
   * imovel.propriedadeimovel
   */
  export type imovel$propriedadeimovelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the propriedadeimovel
     */
    select?: propriedadeimovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the propriedadeimovel
     */
    omit?: propriedadeimovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propriedadeimovelInclude<ExtArgs> | null
    where?: propriedadeimovelWhereInput
    orderBy?: propriedadeimovelOrderByWithRelationInput | propriedadeimovelOrderByWithRelationInput[]
    cursor?: propriedadeimovelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropriedadeimovelScalarFieldEnum | PropriedadeimovelScalarFieldEnum[]
  }

  /**
   * imovel.memoriacalculo
   */
  export type imovel$memoriacalculoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memoriacalculo
     */
    select?: memoriacalculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memoriacalculo
     */
    omit?: memoriacalculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memoriacalculoInclude<ExtArgs> | null
    where?: memoriacalculoWhereInput
    orderBy?: memoriacalculoOrderByWithRelationInput | memoriacalculoOrderByWithRelationInput[]
    cursor?: memoriacalculoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemoriacalculoScalarFieldEnum | MemoriacalculoScalarFieldEnum[]
  }

  /**
   * imovel without action
   */
  export type imovelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imovel
     */
    select?: imovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imovel
     */
    omit?: imovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imovelInclude<ExtArgs> | null
  }


  /**
   * Model propriedadeimovel
   */

  export type AggregatePropriedadeimovel = {
    _count: PropriedadeimovelCountAggregateOutputType | null
    _avg: PropriedadeimovelAvgAggregateOutputType | null
    _sum: PropriedadeimovelSumAggregateOutputType | null
    _min: PropriedadeimovelMinAggregateOutputType | null
    _max: PropriedadeimovelMaxAggregateOutputType | null
  }

  export type PropriedadeimovelAvgAggregateOutputType = {
    id: number | null
    idImovel: number | null
    idLocador: number | null
    percentualParticipacao: Decimal | null
  }

  export type PropriedadeimovelSumAggregateOutputType = {
    id: number | null
    idImovel: number | null
    idLocador: bigint | null
    percentualParticipacao: Decimal | null
  }

  export type PropriedadeimovelMinAggregateOutputType = {
    id: number | null
    idImovel: number | null
    idLocador: bigint | null
    percentualParticipacao: Decimal | null
  }

  export type PropriedadeimovelMaxAggregateOutputType = {
    id: number | null
    idImovel: number | null
    idLocador: bigint | null
    percentualParticipacao: Decimal | null
  }

  export type PropriedadeimovelCountAggregateOutputType = {
    id: number
    idImovel: number
    idLocador: number
    percentualParticipacao: number
    _all: number
  }


  export type PropriedadeimovelAvgAggregateInputType = {
    id?: true
    idImovel?: true
    idLocador?: true
    percentualParticipacao?: true
  }

  export type PropriedadeimovelSumAggregateInputType = {
    id?: true
    idImovel?: true
    idLocador?: true
    percentualParticipacao?: true
  }

  export type PropriedadeimovelMinAggregateInputType = {
    id?: true
    idImovel?: true
    idLocador?: true
    percentualParticipacao?: true
  }

  export type PropriedadeimovelMaxAggregateInputType = {
    id?: true
    idImovel?: true
    idLocador?: true
    percentualParticipacao?: true
  }

  export type PropriedadeimovelCountAggregateInputType = {
    id?: true
    idImovel?: true
    idLocador?: true
    percentualParticipacao?: true
    _all?: true
  }

  export type PropriedadeimovelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which propriedadeimovel to aggregate.
     */
    where?: propriedadeimovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of propriedadeimovels to fetch.
     */
    orderBy?: propriedadeimovelOrderByWithRelationInput | propriedadeimovelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: propriedadeimovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` propriedadeimovels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` propriedadeimovels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned propriedadeimovels
    **/
    _count?: true | PropriedadeimovelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropriedadeimovelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropriedadeimovelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropriedadeimovelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropriedadeimovelMaxAggregateInputType
  }

  export type GetPropriedadeimovelAggregateType<T extends PropriedadeimovelAggregateArgs> = {
        [P in keyof T & keyof AggregatePropriedadeimovel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropriedadeimovel[P]>
      : GetScalarType<T[P], AggregatePropriedadeimovel[P]>
  }




  export type propriedadeimovelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: propriedadeimovelWhereInput
    orderBy?: propriedadeimovelOrderByWithAggregationInput | propriedadeimovelOrderByWithAggregationInput[]
    by: PropriedadeimovelScalarFieldEnum[] | PropriedadeimovelScalarFieldEnum
    having?: propriedadeimovelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropriedadeimovelCountAggregateInputType | true
    _avg?: PropriedadeimovelAvgAggregateInputType
    _sum?: PropriedadeimovelSumAggregateInputType
    _min?: PropriedadeimovelMinAggregateInputType
    _max?: PropriedadeimovelMaxAggregateInputType
  }

  export type PropriedadeimovelGroupByOutputType = {
    id: number
    idImovel: number
    idLocador: bigint
    percentualParticipacao: Decimal
    _count: PropriedadeimovelCountAggregateOutputType | null
    _avg: PropriedadeimovelAvgAggregateOutputType | null
    _sum: PropriedadeimovelSumAggregateOutputType | null
    _min: PropriedadeimovelMinAggregateOutputType | null
    _max: PropriedadeimovelMaxAggregateOutputType | null
  }

  type GetPropriedadeimovelGroupByPayload<T extends propriedadeimovelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropriedadeimovelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropriedadeimovelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropriedadeimovelGroupByOutputType[P]>
            : GetScalarType<T[P], PropriedadeimovelGroupByOutputType[P]>
        }
      >
    >


  export type propriedadeimovelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idImovel?: boolean
    idLocador?: boolean
    percentualParticipacao?: boolean
    imovel?: boolean | imovelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propriedadeimovel"]>



  export type propriedadeimovelSelectScalar = {
    id?: boolean
    idImovel?: boolean
    idLocador?: boolean
    percentualParticipacao?: boolean
  }

  export type propriedadeimovelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idImovel" | "idLocador" | "percentualParticipacao", ExtArgs["result"]["propriedadeimovel"]>
  export type propriedadeimovelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imovel?: boolean | imovelDefaultArgs<ExtArgs>
  }

  export type $propriedadeimovelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "propriedadeimovel"
    objects: {
      imovel: Prisma.$imovelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idImovel: number
      idLocador: bigint
      percentualParticipacao: Prisma.Decimal
    }, ExtArgs["result"]["propriedadeimovel"]>
    composites: {}
  }

  type propriedadeimovelGetPayload<S extends boolean | null | undefined | propriedadeimovelDefaultArgs> = $Result.GetResult<Prisma.$propriedadeimovelPayload, S>

  type propriedadeimovelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<propriedadeimovelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropriedadeimovelCountAggregateInputType | true
    }

  export interface propriedadeimovelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['propriedadeimovel'], meta: { name: 'propriedadeimovel' } }
    /**
     * Find zero or one Propriedadeimovel that matches the filter.
     * @param {propriedadeimovelFindUniqueArgs} args - Arguments to find a Propriedadeimovel
     * @example
     * // Get one Propriedadeimovel
     * const propriedadeimovel = await prisma.propriedadeimovel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends propriedadeimovelFindUniqueArgs>(args: SelectSubset<T, propriedadeimovelFindUniqueArgs<ExtArgs>>): Prisma__propriedadeimovelClient<$Result.GetResult<Prisma.$propriedadeimovelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Propriedadeimovel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {propriedadeimovelFindUniqueOrThrowArgs} args - Arguments to find a Propriedadeimovel
     * @example
     * // Get one Propriedadeimovel
     * const propriedadeimovel = await prisma.propriedadeimovel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends propriedadeimovelFindUniqueOrThrowArgs>(args: SelectSubset<T, propriedadeimovelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__propriedadeimovelClient<$Result.GetResult<Prisma.$propriedadeimovelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Propriedadeimovel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {propriedadeimovelFindFirstArgs} args - Arguments to find a Propriedadeimovel
     * @example
     * // Get one Propriedadeimovel
     * const propriedadeimovel = await prisma.propriedadeimovel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends propriedadeimovelFindFirstArgs>(args?: SelectSubset<T, propriedadeimovelFindFirstArgs<ExtArgs>>): Prisma__propriedadeimovelClient<$Result.GetResult<Prisma.$propriedadeimovelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Propriedadeimovel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {propriedadeimovelFindFirstOrThrowArgs} args - Arguments to find a Propriedadeimovel
     * @example
     * // Get one Propriedadeimovel
     * const propriedadeimovel = await prisma.propriedadeimovel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends propriedadeimovelFindFirstOrThrowArgs>(args?: SelectSubset<T, propriedadeimovelFindFirstOrThrowArgs<ExtArgs>>): Prisma__propriedadeimovelClient<$Result.GetResult<Prisma.$propriedadeimovelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Propriedadeimovels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {propriedadeimovelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Propriedadeimovels
     * const propriedadeimovels = await prisma.propriedadeimovel.findMany()
     * 
     * // Get first 10 Propriedadeimovels
     * const propriedadeimovels = await prisma.propriedadeimovel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propriedadeimovelWithIdOnly = await prisma.propriedadeimovel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends propriedadeimovelFindManyArgs>(args?: SelectSubset<T, propriedadeimovelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$propriedadeimovelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Propriedadeimovel.
     * @param {propriedadeimovelCreateArgs} args - Arguments to create a Propriedadeimovel.
     * @example
     * // Create one Propriedadeimovel
     * const Propriedadeimovel = await prisma.propriedadeimovel.create({
     *   data: {
     *     // ... data to create a Propriedadeimovel
     *   }
     * })
     * 
     */
    create<T extends propriedadeimovelCreateArgs>(args: SelectSubset<T, propriedadeimovelCreateArgs<ExtArgs>>): Prisma__propriedadeimovelClient<$Result.GetResult<Prisma.$propriedadeimovelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Propriedadeimovels.
     * @param {propriedadeimovelCreateManyArgs} args - Arguments to create many Propriedadeimovels.
     * @example
     * // Create many Propriedadeimovels
     * const propriedadeimovel = await prisma.propriedadeimovel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends propriedadeimovelCreateManyArgs>(args?: SelectSubset<T, propriedadeimovelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Propriedadeimovel.
     * @param {propriedadeimovelDeleteArgs} args - Arguments to delete one Propriedadeimovel.
     * @example
     * // Delete one Propriedadeimovel
     * const Propriedadeimovel = await prisma.propriedadeimovel.delete({
     *   where: {
     *     // ... filter to delete one Propriedadeimovel
     *   }
     * })
     * 
     */
    delete<T extends propriedadeimovelDeleteArgs>(args: SelectSubset<T, propriedadeimovelDeleteArgs<ExtArgs>>): Prisma__propriedadeimovelClient<$Result.GetResult<Prisma.$propriedadeimovelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Propriedadeimovel.
     * @param {propriedadeimovelUpdateArgs} args - Arguments to update one Propriedadeimovel.
     * @example
     * // Update one Propriedadeimovel
     * const propriedadeimovel = await prisma.propriedadeimovel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends propriedadeimovelUpdateArgs>(args: SelectSubset<T, propriedadeimovelUpdateArgs<ExtArgs>>): Prisma__propriedadeimovelClient<$Result.GetResult<Prisma.$propriedadeimovelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Propriedadeimovels.
     * @param {propriedadeimovelDeleteManyArgs} args - Arguments to filter Propriedadeimovels to delete.
     * @example
     * // Delete a few Propriedadeimovels
     * const { count } = await prisma.propriedadeimovel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends propriedadeimovelDeleteManyArgs>(args?: SelectSubset<T, propriedadeimovelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Propriedadeimovels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {propriedadeimovelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Propriedadeimovels
     * const propriedadeimovel = await prisma.propriedadeimovel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends propriedadeimovelUpdateManyArgs>(args: SelectSubset<T, propriedadeimovelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Propriedadeimovel.
     * @param {propriedadeimovelUpsertArgs} args - Arguments to update or create a Propriedadeimovel.
     * @example
     * // Update or create a Propriedadeimovel
     * const propriedadeimovel = await prisma.propriedadeimovel.upsert({
     *   create: {
     *     // ... data to create a Propriedadeimovel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Propriedadeimovel we want to update
     *   }
     * })
     */
    upsert<T extends propriedadeimovelUpsertArgs>(args: SelectSubset<T, propriedadeimovelUpsertArgs<ExtArgs>>): Prisma__propriedadeimovelClient<$Result.GetResult<Prisma.$propriedadeimovelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Propriedadeimovels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {propriedadeimovelCountArgs} args - Arguments to filter Propriedadeimovels to count.
     * @example
     * // Count the number of Propriedadeimovels
     * const count = await prisma.propriedadeimovel.count({
     *   where: {
     *     // ... the filter for the Propriedadeimovels we want to count
     *   }
     * })
    **/
    count<T extends propriedadeimovelCountArgs>(
      args?: Subset<T, propriedadeimovelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropriedadeimovelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Propriedadeimovel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropriedadeimovelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropriedadeimovelAggregateArgs>(args: Subset<T, PropriedadeimovelAggregateArgs>): Prisma.PrismaPromise<GetPropriedadeimovelAggregateType<T>>

    /**
     * Group by Propriedadeimovel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {propriedadeimovelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends propriedadeimovelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: propriedadeimovelGroupByArgs['orderBy'] }
        : { orderBy?: propriedadeimovelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, propriedadeimovelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropriedadeimovelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the propriedadeimovel model
   */
  readonly fields: propriedadeimovelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for propriedadeimovel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__propriedadeimovelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    imovel<T extends imovelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, imovelDefaultArgs<ExtArgs>>): Prisma__imovelClient<$Result.GetResult<Prisma.$imovelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the propriedadeimovel model
   */
  interface propriedadeimovelFieldRefs {
    readonly id: FieldRef<"propriedadeimovel", 'Int'>
    readonly idImovel: FieldRef<"propriedadeimovel", 'Int'>
    readonly idLocador: FieldRef<"propriedadeimovel", 'BigInt'>
    readonly percentualParticipacao: FieldRef<"propriedadeimovel", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * propriedadeimovel findUnique
   */
  export type propriedadeimovelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the propriedadeimovel
     */
    select?: propriedadeimovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the propriedadeimovel
     */
    omit?: propriedadeimovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propriedadeimovelInclude<ExtArgs> | null
    /**
     * Filter, which propriedadeimovel to fetch.
     */
    where: propriedadeimovelWhereUniqueInput
  }

  /**
   * propriedadeimovel findUniqueOrThrow
   */
  export type propriedadeimovelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the propriedadeimovel
     */
    select?: propriedadeimovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the propriedadeimovel
     */
    omit?: propriedadeimovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propriedadeimovelInclude<ExtArgs> | null
    /**
     * Filter, which propriedadeimovel to fetch.
     */
    where: propriedadeimovelWhereUniqueInput
  }

  /**
   * propriedadeimovel findFirst
   */
  export type propriedadeimovelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the propriedadeimovel
     */
    select?: propriedadeimovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the propriedadeimovel
     */
    omit?: propriedadeimovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propriedadeimovelInclude<ExtArgs> | null
    /**
     * Filter, which propriedadeimovel to fetch.
     */
    where?: propriedadeimovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of propriedadeimovels to fetch.
     */
    orderBy?: propriedadeimovelOrderByWithRelationInput | propriedadeimovelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for propriedadeimovels.
     */
    cursor?: propriedadeimovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` propriedadeimovels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` propriedadeimovels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of propriedadeimovels.
     */
    distinct?: PropriedadeimovelScalarFieldEnum | PropriedadeimovelScalarFieldEnum[]
  }

  /**
   * propriedadeimovel findFirstOrThrow
   */
  export type propriedadeimovelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the propriedadeimovel
     */
    select?: propriedadeimovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the propriedadeimovel
     */
    omit?: propriedadeimovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propriedadeimovelInclude<ExtArgs> | null
    /**
     * Filter, which propriedadeimovel to fetch.
     */
    where?: propriedadeimovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of propriedadeimovels to fetch.
     */
    orderBy?: propriedadeimovelOrderByWithRelationInput | propriedadeimovelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for propriedadeimovels.
     */
    cursor?: propriedadeimovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` propriedadeimovels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` propriedadeimovels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of propriedadeimovels.
     */
    distinct?: PropriedadeimovelScalarFieldEnum | PropriedadeimovelScalarFieldEnum[]
  }

  /**
   * propriedadeimovel findMany
   */
  export type propriedadeimovelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the propriedadeimovel
     */
    select?: propriedadeimovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the propriedadeimovel
     */
    omit?: propriedadeimovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propriedadeimovelInclude<ExtArgs> | null
    /**
     * Filter, which propriedadeimovels to fetch.
     */
    where?: propriedadeimovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of propriedadeimovels to fetch.
     */
    orderBy?: propriedadeimovelOrderByWithRelationInput | propriedadeimovelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing propriedadeimovels.
     */
    cursor?: propriedadeimovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` propriedadeimovels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` propriedadeimovels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of propriedadeimovels.
     */
    distinct?: PropriedadeimovelScalarFieldEnum | PropriedadeimovelScalarFieldEnum[]
  }

  /**
   * propriedadeimovel create
   */
  export type propriedadeimovelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the propriedadeimovel
     */
    select?: propriedadeimovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the propriedadeimovel
     */
    omit?: propriedadeimovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propriedadeimovelInclude<ExtArgs> | null
    /**
     * The data needed to create a propriedadeimovel.
     */
    data: XOR<propriedadeimovelCreateInput, propriedadeimovelUncheckedCreateInput>
  }

  /**
   * propriedadeimovel createMany
   */
  export type propriedadeimovelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many propriedadeimovels.
     */
    data: propriedadeimovelCreateManyInput | propriedadeimovelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * propriedadeimovel update
   */
  export type propriedadeimovelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the propriedadeimovel
     */
    select?: propriedadeimovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the propriedadeimovel
     */
    omit?: propriedadeimovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propriedadeimovelInclude<ExtArgs> | null
    /**
     * The data needed to update a propriedadeimovel.
     */
    data: XOR<propriedadeimovelUpdateInput, propriedadeimovelUncheckedUpdateInput>
    /**
     * Choose, which propriedadeimovel to update.
     */
    where: propriedadeimovelWhereUniqueInput
  }

  /**
   * propriedadeimovel updateMany
   */
  export type propriedadeimovelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update propriedadeimovels.
     */
    data: XOR<propriedadeimovelUpdateManyMutationInput, propriedadeimovelUncheckedUpdateManyInput>
    /**
     * Filter which propriedadeimovels to update
     */
    where?: propriedadeimovelWhereInput
    /**
     * Limit how many propriedadeimovels to update.
     */
    limit?: number
  }

  /**
   * propriedadeimovel upsert
   */
  export type propriedadeimovelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the propriedadeimovel
     */
    select?: propriedadeimovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the propriedadeimovel
     */
    omit?: propriedadeimovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propriedadeimovelInclude<ExtArgs> | null
    /**
     * The filter to search for the propriedadeimovel to update in case it exists.
     */
    where: propriedadeimovelWhereUniqueInput
    /**
     * In case the propriedadeimovel found by the `where` argument doesn't exist, create a new propriedadeimovel with this data.
     */
    create: XOR<propriedadeimovelCreateInput, propriedadeimovelUncheckedCreateInput>
    /**
     * In case the propriedadeimovel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<propriedadeimovelUpdateInput, propriedadeimovelUncheckedUpdateInput>
  }

  /**
   * propriedadeimovel delete
   */
  export type propriedadeimovelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the propriedadeimovel
     */
    select?: propriedadeimovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the propriedadeimovel
     */
    omit?: propriedadeimovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propriedadeimovelInclude<ExtArgs> | null
    /**
     * Filter which propriedadeimovel to delete.
     */
    where: propriedadeimovelWhereUniqueInput
  }

  /**
   * propriedadeimovel deleteMany
   */
  export type propriedadeimovelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which propriedadeimovels to delete
     */
    where?: propriedadeimovelWhereInput
    /**
     * Limit how many propriedadeimovels to delete.
     */
    limit?: number
  }

  /**
   * propriedadeimovel without action
   */
  export type propriedadeimovelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the propriedadeimovel
     */
    select?: propriedadeimovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the propriedadeimovel
     */
    omit?: propriedadeimovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propriedadeimovelInclude<ExtArgs> | null
  }


  /**
   * Model contratolocacao
   */

  export type AggregateContratolocacao = {
    _count: ContratolocacaoCountAggregateOutputType | null
    _avg: ContratolocacaoAvgAggregateOutputType | null
    _sum: ContratolocacaoSumAggregateOutputType | null
    _min: ContratolocacaoMinAggregateOutputType | null
    _max: ContratolocacaoMaxAggregateOutputType | null
  }

  export type ContratolocacaoAvgAggregateOutputType = {
    id: number | null
    idImovel: number | null
    idLocador: number | null
    idLocatario: number | null
    valorAluguel: Decimal | null
    comissao: Decimal | null
  }

  export type ContratolocacaoSumAggregateOutputType = {
    id: bigint | null
    idImovel: number | null
    idLocador: bigint | null
    idLocatario: bigint | null
    valorAluguel: Decimal | null
    comissao: Decimal | null
  }

  export type ContratolocacaoMinAggregateOutputType = {
    id: bigint | null
    idImovel: number | null
    idLocador: bigint | null
    idLocatario: bigint | null
    dataInicio: Date | null
    dataFim: Date | null
    dataReajuste: Date | null
    valorAluguel: Decimal | null
    status: $Enums.status_contrato_enum | null
    contratoDigitalizado: Bytes | null
    comissao: Decimal | null
  }

  export type ContratolocacaoMaxAggregateOutputType = {
    id: bigint | null
    idImovel: number | null
    idLocador: bigint | null
    idLocatario: bigint | null
    dataInicio: Date | null
    dataFim: Date | null
    dataReajuste: Date | null
    valorAluguel: Decimal | null
    status: $Enums.status_contrato_enum | null
    contratoDigitalizado: Bytes | null
    comissao: Decimal | null
  }

  export type ContratolocacaoCountAggregateOutputType = {
    id: number
    idImovel: number
    idLocador: number
    idLocatario: number
    dataInicio: number
    dataFim: number
    dataReajuste: number
    valorAluguel: number
    status: number
    contratoDigitalizado: number
    comissao: number
    _all: number
  }


  export type ContratolocacaoAvgAggregateInputType = {
    id?: true
    idImovel?: true
    idLocador?: true
    idLocatario?: true
    valorAluguel?: true
    comissao?: true
  }

  export type ContratolocacaoSumAggregateInputType = {
    id?: true
    idImovel?: true
    idLocador?: true
    idLocatario?: true
    valorAluguel?: true
    comissao?: true
  }

  export type ContratolocacaoMinAggregateInputType = {
    id?: true
    idImovel?: true
    idLocador?: true
    idLocatario?: true
    dataInicio?: true
    dataFim?: true
    dataReajuste?: true
    valorAluguel?: true
    status?: true
    contratoDigitalizado?: true
    comissao?: true
  }

  export type ContratolocacaoMaxAggregateInputType = {
    id?: true
    idImovel?: true
    idLocador?: true
    idLocatario?: true
    dataInicio?: true
    dataFim?: true
    dataReajuste?: true
    valorAluguel?: true
    status?: true
    contratoDigitalizado?: true
    comissao?: true
  }

  export type ContratolocacaoCountAggregateInputType = {
    id?: true
    idImovel?: true
    idLocador?: true
    idLocatario?: true
    dataInicio?: true
    dataFim?: true
    dataReajuste?: true
    valorAluguel?: true
    status?: true
    contratoDigitalizado?: true
    comissao?: true
    _all?: true
  }

  export type ContratolocacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contratolocacao to aggregate.
     */
    where?: contratolocacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contratolocacaos to fetch.
     */
    orderBy?: contratolocacaoOrderByWithRelationInput | contratolocacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: contratolocacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contratolocacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contratolocacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned contratolocacaos
    **/
    _count?: true | ContratolocacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContratolocacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContratolocacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContratolocacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContratolocacaoMaxAggregateInputType
  }

  export type GetContratolocacaoAggregateType<T extends ContratolocacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateContratolocacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContratolocacao[P]>
      : GetScalarType<T[P], AggregateContratolocacao[P]>
  }




  export type contratolocacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contratolocacaoWhereInput
    orderBy?: contratolocacaoOrderByWithAggregationInput | contratolocacaoOrderByWithAggregationInput[]
    by: ContratolocacaoScalarFieldEnum[] | ContratolocacaoScalarFieldEnum
    having?: contratolocacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContratolocacaoCountAggregateInputType | true
    _avg?: ContratolocacaoAvgAggregateInputType
    _sum?: ContratolocacaoSumAggregateInputType
    _min?: ContratolocacaoMinAggregateInputType
    _max?: ContratolocacaoMaxAggregateInputType
  }

  export type ContratolocacaoGroupByOutputType = {
    id: bigint
    idImovel: number
    idLocador: bigint
    idLocatario: bigint
    dataInicio: Date
    dataFim: Date | null
    dataReajuste: Date | null
    valorAluguel: Decimal
    status: $Enums.status_contrato_enum
    contratoDigitalizado: Bytes | null
    comissao: Decimal
    _count: ContratolocacaoCountAggregateOutputType | null
    _avg: ContratolocacaoAvgAggregateOutputType | null
    _sum: ContratolocacaoSumAggregateOutputType | null
    _min: ContratolocacaoMinAggregateOutputType | null
    _max: ContratolocacaoMaxAggregateOutputType | null
  }

  type GetContratolocacaoGroupByPayload<T extends contratolocacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContratolocacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContratolocacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContratolocacaoGroupByOutputType[P]>
            : GetScalarType<T[P], ContratolocacaoGroupByOutputType[P]>
        }
      >
    >


  export type contratolocacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idImovel?: boolean
    idLocador?: boolean
    idLocatario?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    dataReajuste?: boolean
    valorAluguel?: boolean
    status?: boolean
    contratoDigitalizado?: boolean
    comissao?: boolean
    imovel?: boolean | imovelDefaultArgs<ExtArgs>
    despesa?: boolean | contratolocacao$despesaArgs<ExtArgs>
    reajustecontrato?: boolean | contratolocacao$reajustecontratoArgs<ExtArgs>
    memoriacalculo?: boolean | contratolocacao$memoriacalculoArgs<ExtArgs>
    _count?: boolean | ContratolocacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contratolocacao"]>



  export type contratolocacaoSelectScalar = {
    id?: boolean
    idImovel?: boolean
    idLocador?: boolean
    idLocatario?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    dataReajuste?: boolean
    valorAluguel?: boolean
    status?: boolean
    contratoDigitalizado?: boolean
    comissao?: boolean
  }

  export type contratolocacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idImovel" | "idLocador" | "idLocatario" | "dataInicio" | "dataFim" | "dataReajuste" | "valorAluguel" | "status" | "contratoDigitalizado" | "comissao", ExtArgs["result"]["contratolocacao"]>
  export type contratolocacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imovel?: boolean | imovelDefaultArgs<ExtArgs>
    despesa?: boolean | contratolocacao$despesaArgs<ExtArgs>
    reajustecontrato?: boolean | contratolocacao$reajustecontratoArgs<ExtArgs>
    memoriacalculo?: boolean | contratolocacao$memoriacalculoArgs<ExtArgs>
    _count?: boolean | ContratolocacaoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $contratolocacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "contratolocacao"
    objects: {
      imovel: Prisma.$imovelPayload<ExtArgs>
      despesa: Prisma.$despesaPayload<ExtArgs>[]
      reajustecontrato: Prisma.$reajustecontratoPayload<ExtArgs>[]
      memoriacalculo: Prisma.$memoriacalculoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      idImovel: number
      idLocador: bigint
      idLocatario: bigint
      dataInicio: Date
      dataFim: Date | null
      dataReajuste: Date | null
      valorAluguel: Prisma.Decimal
      status: $Enums.status_contrato_enum
      contratoDigitalizado: Prisma.Bytes | null
      comissao: Prisma.Decimal
    }, ExtArgs["result"]["contratolocacao"]>
    composites: {}
  }

  type contratolocacaoGetPayload<S extends boolean | null | undefined | contratolocacaoDefaultArgs> = $Result.GetResult<Prisma.$contratolocacaoPayload, S>

  type contratolocacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<contratolocacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContratolocacaoCountAggregateInputType | true
    }

  export interface contratolocacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['contratolocacao'], meta: { name: 'contratolocacao' } }
    /**
     * Find zero or one Contratolocacao that matches the filter.
     * @param {contratolocacaoFindUniqueArgs} args - Arguments to find a Contratolocacao
     * @example
     * // Get one Contratolocacao
     * const contratolocacao = await prisma.contratolocacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends contratolocacaoFindUniqueArgs>(args: SelectSubset<T, contratolocacaoFindUniqueArgs<ExtArgs>>): Prisma__contratolocacaoClient<$Result.GetResult<Prisma.$contratolocacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contratolocacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {contratolocacaoFindUniqueOrThrowArgs} args - Arguments to find a Contratolocacao
     * @example
     * // Get one Contratolocacao
     * const contratolocacao = await prisma.contratolocacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends contratolocacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, contratolocacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__contratolocacaoClient<$Result.GetResult<Prisma.$contratolocacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contratolocacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contratolocacaoFindFirstArgs} args - Arguments to find a Contratolocacao
     * @example
     * // Get one Contratolocacao
     * const contratolocacao = await prisma.contratolocacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends contratolocacaoFindFirstArgs>(args?: SelectSubset<T, contratolocacaoFindFirstArgs<ExtArgs>>): Prisma__contratolocacaoClient<$Result.GetResult<Prisma.$contratolocacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contratolocacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contratolocacaoFindFirstOrThrowArgs} args - Arguments to find a Contratolocacao
     * @example
     * // Get one Contratolocacao
     * const contratolocacao = await prisma.contratolocacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends contratolocacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, contratolocacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__contratolocacaoClient<$Result.GetResult<Prisma.$contratolocacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contratolocacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contratolocacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contratolocacaos
     * const contratolocacaos = await prisma.contratolocacao.findMany()
     * 
     * // Get first 10 Contratolocacaos
     * const contratolocacaos = await prisma.contratolocacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contratolocacaoWithIdOnly = await prisma.contratolocacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends contratolocacaoFindManyArgs>(args?: SelectSubset<T, contratolocacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contratolocacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contratolocacao.
     * @param {contratolocacaoCreateArgs} args - Arguments to create a Contratolocacao.
     * @example
     * // Create one Contratolocacao
     * const Contratolocacao = await prisma.contratolocacao.create({
     *   data: {
     *     // ... data to create a Contratolocacao
     *   }
     * })
     * 
     */
    create<T extends contratolocacaoCreateArgs>(args: SelectSubset<T, contratolocacaoCreateArgs<ExtArgs>>): Prisma__contratolocacaoClient<$Result.GetResult<Prisma.$contratolocacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contratolocacaos.
     * @param {contratolocacaoCreateManyArgs} args - Arguments to create many Contratolocacaos.
     * @example
     * // Create many Contratolocacaos
     * const contratolocacao = await prisma.contratolocacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends contratolocacaoCreateManyArgs>(args?: SelectSubset<T, contratolocacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contratolocacao.
     * @param {contratolocacaoDeleteArgs} args - Arguments to delete one Contratolocacao.
     * @example
     * // Delete one Contratolocacao
     * const Contratolocacao = await prisma.contratolocacao.delete({
     *   where: {
     *     // ... filter to delete one Contratolocacao
     *   }
     * })
     * 
     */
    delete<T extends contratolocacaoDeleteArgs>(args: SelectSubset<T, contratolocacaoDeleteArgs<ExtArgs>>): Prisma__contratolocacaoClient<$Result.GetResult<Prisma.$contratolocacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contratolocacao.
     * @param {contratolocacaoUpdateArgs} args - Arguments to update one Contratolocacao.
     * @example
     * // Update one Contratolocacao
     * const contratolocacao = await prisma.contratolocacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends contratolocacaoUpdateArgs>(args: SelectSubset<T, contratolocacaoUpdateArgs<ExtArgs>>): Prisma__contratolocacaoClient<$Result.GetResult<Prisma.$contratolocacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contratolocacaos.
     * @param {contratolocacaoDeleteManyArgs} args - Arguments to filter Contratolocacaos to delete.
     * @example
     * // Delete a few Contratolocacaos
     * const { count } = await prisma.contratolocacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends contratolocacaoDeleteManyArgs>(args?: SelectSubset<T, contratolocacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contratolocacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contratolocacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contratolocacaos
     * const contratolocacao = await prisma.contratolocacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends contratolocacaoUpdateManyArgs>(args: SelectSubset<T, contratolocacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contratolocacao.
     * @param {contratolocacaoUpsertArgs} args - Arguments to update or create a Contratolocacao.
     * @example
     * // Update or create a Contratolocacao
     * const contratolocacao = await prisma.contratolocacao.upsert({
     *   create: {
     *     // ... data to create a Contratolocacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contratolocacao we want to update
     *   }
     * })
     */
    upsert<T extends contratolocacaoUpsertArgs>(args: SelectSubset<T, contratolocacaoUpsertArgs<ExtArgs>>): Prisma__contratolocacaoClient<$Result.GetResult<Prisma.$contratolocacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contratolocacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contratolocacaoCountArgs} args - Arguments to filter Contratolocacaos to count.
     * @example
     * // Count the number of Contratolocacaos
     * const count = await prisma.contratolocacao.count({
     *   where: {
     *     // ... the filter for the Contratolocacaos we want to count
     *   }
     * })
    **/
    count<T extends contratolocacaoCountArgs>(
      args?: Subset<T, contratolocacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContratolocacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contratolocacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratolocacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContratolocacaoAggregateArgs>(args: Subset<T, ContratolocacaoAggregateArgs>): Prisma.PrismaPromise<GetContratolocacaoAggregateType<T>>

    /**
     * Group by Contratolocacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contratolocacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends contratolocacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contratolocacaoGroupByArgs['orderBy'] }
        : { orderBy?: contratolocacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, contratolocacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContratolocacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the contratolocacao model
   */
  readonly fields: contratolocacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for contratolocacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contratolocacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    imovel<T extends imovelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, imovelDefaultArgs<ExtArgs>>): Prisma__imovelClient<$Result.GetResult<Prisma.$imovelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    despesa<T extends contratolocacao$despesaArgs<ExtArgs> = {}>(args?: Subset<T, contratolocacao$despesaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$despesaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reajustecontrato<T extends contratolocacao$reajustecontratoArgs<ExtArgs> = {}>(args?: Subset<T, contratolocacao$reajustecontratoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reajustecontratoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    memoriacalculo<T extends contratolocacao$memoriacalculoArgs<ExtArgs> = {}>(args?: Subset<T, contratolocacao$memoriacalculoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$memoriacalculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the contratolocacao model
   */
  interface contratolocacaoFieldRefs {
    readonly id: FieldRef<"contratolocacao", 'BigInt'>
    readonly idImovel: FieldRef<"contratolocacao", 'Int'>
    readonly idLocador: FieldRef<"contratolocacao", 'BigInt'>
    readonly idLocatario: FieldRef<"contratolocacao", 'BigInt'>
    readonly dataInicio: FieldRef<"contratolocacao", 'DateTime'>
    readonly dataFim: FieldRef<"contratolocacao", 'DateTime'>
    readonly dataReajuste: FieldRef<"contratolocacao", 'DateTime'>
    readonly valorAluguel: FieldRef<"contratolocacao", 'Decimal'>
    readonly status: FieldRef<"contratolocacao", 'status_contrato_enum'>
    readonly contratoDigitalizado: FieldRef<"contratolocacao", 'Bytes'>
    readonly comissao: FieldRef<"contratolocacao", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * contratolocacao findUnique
   */
  export type contratolocacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contratolocacao
     */
    select?: contratolocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contratolocacao
     */
    omit?: contratolocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contratolocacaoInclude<ExtArgs> | null
    /**
     * Filter, which contratolocacao to fetch.
     */
    where: contratolocacaoWhereUniqueInput
  }

  /**
   * contratolocacao findUniqueOrThrow
   */
  export type contratolocacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contratolocacao
     */
    select?: contratolocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contratolocacao
     */
    omit?: contratolocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contratolocacaoInclude<ExtArgs> | null
    /**
     * Filter, which contratolocacao to fetch.
     */
    where: contratolocacaoWhereUniqueInput
  }

  /**
   * contratolocacao findFirst
   */
  export type contratolocacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contratolocacao
     */
    select?: contratolocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contratolocacao
     */
    omit?: contratolocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contratolocacaoInclude<ExtArgs> | null
    /**
     * Filter, which contratolocacao to fetch.
     */
    where?: contratolocacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contratolocacaos to fetch.
     */
    orderBy?: contratolocacaoOrderByWithRelationInput | contratolocacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contratolocacaos.
     */
    cursor?: contratolocacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contratolocacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contratolocacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contratolocacaos.
     */
    distinct?: ContratolocacaoScalarFieldEnum | ContratolocacaoScalarFieldEnum[]
  }

  /**
   * contratolocacao findFirstOrThrow
   */
  export type contratolocacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contratolocacao
     */
    select?: contratolocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contratolocacao
     */
    omit?: contratolocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contratolocacaoInclude<ExtArgs> | null
    /**
     * Filter, which contratolocacao to fetch.
     */
    where?: contratolocacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contratolocacaos to fetch.
     */
    orderBy?: contratolocacaoOrderByWithRelationInput | contratolocacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contratolocacaos.
     */
    cursor?: contratolocacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contratolocacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contratolocacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contratolocacaos.
     */
    distinct?: ContratolocacaoScalarFieldEnum | ContratolocacaoScalarFieldEnum[]
  }

  /**
   * contratolocacao findMany
   */
  export type contratolocacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contratolocacao
     */
    select?: contratolocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contratolocacao
     */
    omit?: contratolocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contratolocacaoInclude<ExtArgs> | null
    /**
     * Filter, which contratolocacaos to fetch.
     */
    where?: contratolocacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contratolocacaos to fetch.
     */
    orderBy?: contratolocacaoOrderByWithRelationInput | contratolocacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing contratolocacaos.
     */
    cursor?: contratolocacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contratolocacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contratolocacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contratolocacaos.
     */
    distinct?: ContratolocacaoScalarFieldEnum | ContratolocacaoScalarFieldEnum[]
  }

  /**
   * contratolocacao create
   */
  export type contratolocacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contratolocacao
     */
    select?: contratolocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contratolocacao
     */
    omit?: contratolocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contratolocacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a contratolocacao.
     */
    data: XOR<contratolocacaoCreateInput, contratolocacaoUncheckedCreateInput>
  }

  /**
   * contratolocacao createMany
   */
  export type contratolocacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contratolocacaos.
     */
    data: contratolocacaoCreateManyInput | contratolocacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * contratolocacao update
   */
  export type contratolocacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contratolocacao
     */
    select?: contratolocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contratolocacao
     */
    omit?: contratolocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contratolocacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a contratolocacao.
     */
    data: XOR<contratolocacaoUpdateInput, contratolocacaoUncheckedUpdateInput>
    /**
     * Choose, which contratolocacao to update.
     */
    where: contratolocacaoWhereUniqueInput
  }

  /**
   * contratolocacao updateMany
   */
  export type contratolocacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contratolocacaos.
     */
    data: XOR<contratolocacaoUpdateManyMutationInput, contratolocacaoUncheckedUpdateManyInput>
    /**
     * Filter which contratolocacaos to update
     */
    where?: contratolocacaoWhereInput
    /**
     * Limit how many contratolocacaos to update.
     */
    limit?: number
  }

  /**
   * contratolocacao upsert
   */
  export type contratolocacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contratolocacao
     */
    select?: contratolocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contratolocacao
     */
    omit?: contratolocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contratolocacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the contratolocacao to update in case it exists.
     */
    where: contratolocacaoWhereUniqueInput
    /**
     * In case the contratolocacao found by the `where` argument doesn't exist, create a new contratolocacao with this data.
     */
    create: XOR<contratolocacaoCreateInput, contratolocacaoUncheckedCreateInput>
    /**
     * In case the contratolocacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contratolocacaoUpdateInput, contratolocacaoUncheckedUpdateInput>
  }

  /**
   * contratolocacao delete
   */
  export type contratolocacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contratolocacao
     */
    select?: contratolocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contratolocacao
     */
    omit?: contratolocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contratolocacaoInclude<ExtArgs> | null
    /**
     * Filter which contratolocacao to delete.
     */
    where: contratolocacaoWhereUniqueInput
  }

  /**
   * contratolocacao deleteMany
   */
  export type contratolocacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contratolocacaos to delete
     */
    where?: contratolocacaoWhereInput
    /**
     * Limit how many contratolocacaos to delete.
     */
    limit?: number
  }

  /**
   * contratolocacao.despesa
   */
  export type contratolocacao$despesaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the despesa
     */
    select?: despesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the despesa
     */
    omit?: despesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: despesaInclude<ExtArgs> | null
    where?: despesaWhereInput
    orderBy?: despesaOrderByWithRelationInput | despesaOrderByWithRelationInput[]
    cursor?: despesaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DespesaScalarFieldEnum | DespesaScalarFieldEnum[]
  }

  /**
   * contratolocacao.reajustecontrato
   */
  export type contratolocacao$reajustecontratoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reajustecontrato
     */
    select?: reajustecontratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reajustecontrato
     */
    omit?: reajustecontratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reajustecontratoInclude<ExtArgs> | null
    where?: reajustecontratoWhereInput
    orderBy?: reajustecontratoOrderByWithRelationInput | reajustecontratoOrderByWithRelationInput[]
    cursor?: reajustecontratoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReajustecontratoScalarFieldEnum | ReajustecontratoScalarFieldEnum[]
  }

  /**
   * contratolocacao.memoriacalculo
   */
  export type contratolocacao$memoriacalculoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memoriacalculo
     */
    select?: memoriacalculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memoriacalculo
     */
    omit?: memoriacalculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memoriacalculoInclude<ExtArgs> | null
    where?: memoriacalculoWhereInput
    orderBy?: memoriacalculoOrderByWithRelationInput | memoriacalculoOrderByWithRelationInput[]
    cursor?: memoriacalculoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemoriacalculoScalarFieldEnum | MemoriacalculoScalarFieldEnum[]
  }

  /**
   * contratolocacao without action
   */
  export type contratolocacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contratolocacao
     */
    select?: contratolocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contratolocacao
     */
    omit?: contratolocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contratolocacaoInclude<ExtArgs> | null
  }


  /**
   * Model reajustecontrato
   */

  export type AggregateReajustecontrato = {
    _count: ReajustecontratoCountAggregateOutputType | null
    _avg: ReajustecontratoAvgAggregateOutputType | null
    _sum: ReajustecontratoSumAggregateOutputType | null
    _min: ReajustecontratoMinAggregateOutputType | null
    _max: ReajustecontratoMaxAggregateOutputType | null
  }

  export type ReajustecontratoAvgAggregateOutputType = {
    id: number | null
    idContrato: number | null
    percentual: Decimal | null
    valorAnterior: Decimal | null
    valorNovo: Decimal | null
  }

  export type ReajustecontratoSumAggregateOutputType = {
    id: bigint | null
    idContrato: bigint | null
    percentual: Decimal | null
    valorAnterior: Decimal | null
    valorNovo: Decimal | null
  }

  export type ReajustecontratoMinAggregateOutputType = {
    id: bigint | null
    idContrato: bigint | null
    dataReajuste: Date | null
    indice: $Enums.indice_reajuste_enum | null
    percentual: Decimal | null
    valorAnterior: Decimal | null
    valorNovo: Decimal | null
    observacao: string | null
    criadoEm: Date | null
  }

  export type ReajustecontratoMaxAggregateOutputType = {
    id: bigint | null
    idContrato: bigint | null
    dataReajuste: Date | null
    indice: $Enums.indice_reajuste_enum | null
    percentual: Decimal | null
    valorAnterior: Decimal | null
    valorNovo: Decimal | null
    observacao: string | null
    criadoEm: Date | null
  }

  export type ReajustecontratoCountAggregateOutputType = {
    id: number
    idContrato: number
    dataReajuste: number
    indice: number
    percentual: number
    valorAnterior: number
    valorNovo: number
    observacao: number
    criadoEm: number
    _all: number
  }


  export type ReajustecontratoAvgAggregateInputType = {
    id?: true
    idContrato?: true
    percentual?: true
    valorAnterior?: true
    valorNovo?: true
  }

  export type ReajustecontratoSumAggregateInputType = {
    id?: true
    idContrato?: true
    percentual?: true
    valorAnterior?: true
    valorNovo?: true
  }

  export type ReajustecontratoMinAggregateInputType = {
    id?: true
    idContrato?: true
    dataReajuste?: true
    indice?: true
    percentual?: true
    valorAnterior?: true
    valorNovo?: true
    observacao?: true
    criadoEm?: true
  }

  export type ReajustecontratoMaxAggregateInputType = {
    id?: true
    idContrato?: true
    dataReajuste?: true
    indice?: true
    percentual?: true
    valorAnterior?: true
    valorNovo?: true
    observacao?: true
    criadoEm?: true
  }

  export type ReajustecontratoCountAggregateInputType = {
    id?: true
    idContrato?: true
    dataReajuste?: true
    indice?: true
    percentual?: true
    valorAnterior?: true
    valorNovo?: true
    observacao?: true
    criadoEm?: true
    _all?: true
  }

  export type ReajustecontratoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reajustecontrato to aggregate.
     */
    where?: reajustecontratoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reajustecontratoes to fetch.
     */
    orderBy?: reajustecontratoOrderByWithRelationInput | reajustecontratoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reajustecontratoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reajustecontratoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reajustecontratoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reajustecontratoes
    **/
    _count?: true | ReajustecontratoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReajustecontratoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReajustecontratoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReajustecontratoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReajustecontratoMaxAggregateInputType
  }

  export type GetReajustecontratoAggregateType<T extends ReajustecontratoAggregateArgs> = {
        [P in keyof T & keyof AggregateReajustecontrato]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReajustecontrato[P]>
      : GetScalarType<T[P], AggregateReajustecontrato[P]>
  }




  export type reajustecontratoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reajustecontratoWhereInput
    orderBy?: reajustecontratoOrderByWithAggregationInput | reajustecontratoOrderByWithAggregationInput[]
    by: ReajustecontratoScalarFieldEnum[] | ReajustecontratoScalarFieldEnum
    having?: reajustecontratoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReajustecontratoCountAggregateInputType | true
    _avg?: ReajustecontratoAvgAggregateInputType
    _sum?: ReajustecontratoSumAggregateInputType
    _min?: ReajustecontratoMinAggregateInputType
    _max?: ReajustecontratoMaxAggregateInputType
  }

  export type ReajustecontratoGroupByOutputType = {
    id: bigint
    idContrato: bigint
    dataReajuste: Date
    indice: $Enums.indice_reajuste_enum
    percentual: Decimal
    valorAnterior: Decimal
    valorNovo: Decimal
    observacao: string | null
    criadoEm: Date
    _count: ReajustecontratoCountAggregateOutputType | null
    _avg: ReajustecontratoAvgAggregateOutputType | null
    _sum: ReajustecontratoSumAggregateOutputType | null
    _min: ReajustecontratoMinAggregateOutputType | null
    _max: ReajustecontratoMaxAggregateOutputType | null
  }

  type GetReajustecontratoGroupByPayload<T extends reajustecontratoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReajustecontratoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReajustecontratoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReajustecontratoGroupByOutputType[P]>
            : GetScalarType<T[P], ReajustecontratoGroupByOutputType[P]>
        }
      >
    >


  export type reajustecontratoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idContrato?: boolean
    dataReajuste?: boolean
    indice?: boolean
    percentual?: boolean
    valorAnterior?: boolean
    valorNovo?: boolean
    observacao?: boolean
    criadoEm?: boolean
    contratolocacao?: boolean | contratolocacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reajustecontrato"]>



  export type reajustecontratoSelectScalar = {
    id?: boolean
    idContrato?: boolean
    dataReajuste?: boolean
    indice?: boolean
    percentual?: boolean
    valorAnterior?: boolean
    valorNovo?: boolean
    observacao?: boolean
    criadoEm?: boolean
  }

  export type reajustecontratoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idContrato" | "dataReajuste" | "indice" | "percentual" | "valorAnterior" | "valorNovo" | "observacao" | "criadoEm", ExtArgs["result"]["reajustecontrato"]>
  export type reajustecontratoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contratolocacao?: boolean | contratolocacaoDefaultArgs<ExtArgs>
  }

  export type $reajustecontratoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reajustecontrato"
    objects: {
      contratolocacao: Prisma.$contratolocacaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      idContrato: bigint
      dataReajuste: Date
      indice: $Enums.indice_reajuste_enum
      percentual: Prisma.Decimal
      valorAnterior: Prisma.Decimal
      valorNovo: Prisma.Decimal
      observacao: string | null
      criadoEm: Date
    }, ExtArgs["result"]["reajustecontrato"]>
    composites: {}
  }

  type reajustecontratoGetPayload<S extends boolean | null | undefined | reajustecontratoDefaultArgs> = $Result.GetResult<Prisma.$reajustecontratoPayload, S>

  type reajustecontratoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reajustecontratoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReajustecontratoCountAggregateInputType | true
    }

  export interface reajustecontratoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reajustecontrato'], meta: { name: 'reajustecontrato' } }
    /**
     * Find zero or one Reajustecontrato that matches the filter.
     * @param {reajustecontratoFindUniqueArgs} args - Arguments to find a Reajustecontrato
     * @example
     * // Get one Reajustecontrato
     * const reajustecontrato = await prisma.reajustecontrato.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reajustecontratoFindUniqueArgs>(args: SelectSubset<T, reajustecontratoFindUniqueArgs<ExtArgs>>): Prisma__reajustecontratoClient<$Result.GetResult<Prisma.$reajustecontratoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reajustecontrato that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reajustecontratoFindUniqueOrThrowArgs} args - Arguments to find a Reajustecontrato
     * @example
     * // Get one Reajustecontrato
     * const reajustecontrato = await prisma.reajustecontrato.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reajustecontratoFindUniqueOrThrowArgs>(args: SelectSubset<T, reajustecontratoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reajustecontratoClient<$Result.GetResult<Prisma.$reajustecontratoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reajustecontrato that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reajustecontratoFindFirstArgs} args - Arguments to find a Reajustecontrato
     * @example
     * // Get one Reajustecontrato
     * const reajustecontrato = await prisma.reajustecontrato.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reajustecontratoFindFirstArgs>(args?: SelectSubset<T, reajustecontratoFindFirstArgs<ExtArgs>>): Prisma__reajustecontratoClient<$Result.GetResult<Prisma.$reajustecontratoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reajustecontrato that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reajustecontratoFindFirstOrThrowArgs} args - Arguments to find a Reajustecontrato
     * @example
     * // Get one Reajustecontrato
     * const reajustecontrato = await prisma.reajustecontrato.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reajustecontratoFindFirstOrThrowArgs>(args?: SelectSubset<T, reajustecontratoFindFirstOrThrowArgs<ExtArgs>>): Prisma__reajustecontratoClient<$Result.GetResult<Prisma.$reajustecontratoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reajustecontratoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reajustecontratoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reajustecontratoes
     * const reajustecontratoes = await prisma.reajustecontrato.findMany()
     * 
     * // Get first 10 Reajustecontratoes
     * const reajustecontratoes = await prisma.reajustecontrato.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reajustecontratoWithIdOnly = await prisma.reajustecontrato.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reajustecontratoFindManyArgs>(args?: SelectSubset<T, reajustecontratoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reajustecontratoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reajustecontrato.
     * @param {reajustecontratoCreateArgs} args - Arguments to create a Reajustecontrato.
     * @example
     * // Create one Reajustecontrato
     * const Reajustecontrato = await prisma.reajustecontrato.create({
     *   data: {
     *     // ... data to create a Reajustecontrato
     *   }
     * })
     * 
     */
    create<T extends reajustecontratoCreateArgs>(args: SelectSubset<T, reajustecontratoCreateArgs<ExtArgs>>): Prisma__reajustecontratoClient<$Result.GetResult<Prisma.$reajustecontratoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reajustecontratoes.
     * @param {reajustecontratoCreateManyArgs} args - Arguments to create many Reajustecontratoes.
     * @example
     * // Create many Reajustecontratoes
     * const reajustecontrato = await prisma.reajustecontrato.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reajustecontratoCreateManyArgs>(args?: SelectSubset<T, reajustecontratoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reajustecontrato.
     * @param {reajustecontratoDeleteArgs} args - Arguments to delete one Reajustecontrato.
     * @example
     * // Delete one Reajustecontrato
     * const Reajustecontrato = await prisma.reajustecontrato.delete({
     *   where: {
     *     // ... filter to delete one Reajustecontrato
     *   }
     * })
     * 
     */
    delete<T extends reajustecontratoDeleteArgs>(args: SelectSubset<T, reajustecontratoDeleteArgs<ExtArgs>>): Prisma__reajustecontratoClient<$Result.GetResult<Prisma.$reajustecontratoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reajustecontrato.
     * @param {reajustecontratoUpdateArgs} args - Arguments to update one Reajustecontrato.
     * @example
     * // Update one Reajustecontrato
     * const reajustecontrato = await prisma.reajustecontrato.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reajustecontratoUpdateArgs>(args: SelectSubset<T, reajustecontratoUpdateArgs<ExtArgs>>): Prisma__reajustecontratoClient<$Result.GetResult<Prisma.$reajustecontratoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reajustecontratoes.
     * @param {reajustecontratoDeleteManyArgs} args - Arguments to filter Reajustecontratoes to delete.
     * @example
     * // Delete a few Reajustecontratoes
     * const { count } = await prisma.reajustecontrato.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reajustecontratoDeleteManyArgs>(args?: SelectSubset<T, reajustecontratoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reajustecontratoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reajustecontratoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reajustecontratoes
     * const reajustecontrato = await prisma.reajustecontrato.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reajustecontratoUpdateManyArgs>(args: SelectSubset<T, reajustecontratoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reajustecontrato.
     * @param {reajustecontratoUpsertArgs} args - Arguments to update or create a Reajustecontrato.
     * @example
     * // Update or create a Reajustecontrato
     * const reajustecontrato = await prisma.reajustecontrato.upsert({
     *   create: {
     *     // ... data to create a Reajustecontrato
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reajustecontrato we want to update
     *   }
     * })
     */
    upsert<T extends reajustecontratoUpsertArgs>(args: SelectSubset<T, reajustecontratoUpsertArgs<ExtArgs>>): Prisma__reajustecontratoClient<$Result.GetResult<Prisma.$reajustecontratoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reajustecontratoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reajustecontratoCountArgs} args - Arguments to filter Reajustecontratoes to count.
     * @example
     * // Count the number of Reajustecontratoes
     * const count = await prisma.reajustecontrato.count({
     *   where: {
     *     // ... the filter for the Reajustecontratoes we want to count
     *   }
     * })
    **/
    count<T extends reajustecontratoCountArgs>(
      args?: Subset<T, reajustecontratoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReajustecontratoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reajustecontrato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReajustecontratoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReajustecontratoAggregateArgs>(args: Subset<T, ReajustecontratoAggregateArgs>): Prisma.PrismaPromise<GetReajustecontratoAggregateType<T>>

    /**
     * Group by Reajustecontrato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reajustecontratoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reajustecontratoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reajustecontratoGroupByArgs['orderBy'] }
        : { orderBy?: reajustecontratoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reajustecontratoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReajustecontratoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reajustecontrato model
   */
  readonly fields: reajustecontratoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reajustecontrato.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reajustecontratoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contratolocacao<T extends contratolocacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, contratolocacaoDefaultArgs<ExtArgs>>): Prisma__contratolocacaoClient<$Result.GetResult<Prisma.$contratolocacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the reajustecontrato model
   */
  interface reajustecontratoFieldRefs {
    readonly id: FieldRef<"reajustecontrato", 'BigInt'>
    readonly idContrato: FieldRef<"reajustecontrato", 'BigInt'>
    readonly dataReajuste: FieldRef<"reajustecontrato", 'DateTime'>
    readonly indice: FieldRef<"reajustecontrato", 'indice_reajuste_enum'>
    readonly percentual: FieldRef<"reajustecontrato", 'Decimal'>
    readonly valorAnterior: FieldRef<"reajustecontrato", 'Decimal'>
    readonly valorNovo: FieldRef<"reajustecontrato", 'Decimal'>
    readonly observacao: FieldRef<"reajustecontrato", 'String'>
    readonly criadoEm: FieldRef<"reajustecontrato", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * reajustecontrato findUnique
   */
  export type reajustecontratoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reajustecontrato
     */
    select?: reajustecontratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reajustecontrato
     */
    omit?: reajustecontratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reajustecontratoInclude<ExtArgs> | null
    /**
     * Filter, which reajustecontrato to fetch.
     */
    where: reajustecontratoWhereUniqueInput
  }

  /**
   * reajustecontrato findUniqueOrThrow
   */
  export type reajustecontratoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reajustecontrato
     */
    select?: reajustecontratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reajustecontrato
     */
    omit?: reajustecontratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reajustecontratoInclude<ExtArgs> | null
    /**
     * Filter, which reajustecontrato to fetch.
     */
    where: reajustecontratoWhereUniqueInput
  }

  /**
   * reajustecontrato findFirst
   */
  export type reajustecontratoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reajustecontrato
     */
    select?: reajustecontratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reajustecontrato
     */
    omit?: reajustecontratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reajustecontratoInclude<ExtArgs> | null
    /**
     * Filter, which reajustecontrato to fetch.
     */
    where?: reajustecontratoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reajustecontratoes to fetch.
     */
    orderBy?: reajustecontratoOrderByWithRelationInput | reajustecontratoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reajustecontratoes.
     */
    cursor?: reajustecontratoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reajustecontratoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reajustecontratoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reajustecontratoes.
     */
    distinct?: ReajustecontratoScalarFieldEnum | ReajustecontratoScalarFieldEnum[]
  }

  /**
   * reajustecontrato findFirstOrThrow
   */
  export type reajustecontratoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reajustecontrato
     */
    select?: reajustecontratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reajustecontrato
     */
    omit?: reajustecontratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reajustecontratoInclude<ExtArgs> | null
    /**
     * Filter, which reajustecontrato to fetch.
     */
    where?: reajustecontratoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reajustecontratoes to fetch.
     */
    orderBy?: reajustecontratoOrderByWithRelationInput | reajustecontratoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reajustecontratoes.
     */
    cursor?: reajustecontratoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reajustecontratoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reajustecontratoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reajustecontratoes.
     */
    distinct?: ReajustecontratoScalarFieldEnum | ReajustecontratoScalarFieldEnum[]
  }

  /**
   * reajustecontrato findMany
   */
  export type reajustecontratoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reajustecontrato
     */
    select?: reajustecontratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reajustecontrato
     */
    omit?: reajustecontratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reajustecontratoInclude<ExtArgs> | null
    /**
     * Filter, which reajustecontratoes to fetch.
     */
    where?: reajustecontratoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reajustecontratoes to fetch.
     */
    orderBy?: reajustecontratoOrderByWithRelationInput | reajustecontratoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reajustecontratoes.
     */
    cursor?: reajustecontratoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reajustecontratoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reajustecontratoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reajustecontratoes.
     */
    distinct?: ReajustecontratoScalarFieldEnum | ReajustecontratoScalarFieldEnum[]
  }

  /**
   * reajustecontrato create
   */
  export type reajustecontratoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reajustecontrato
     */
    select?: reajustecontratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reajustecontrato
     */
    omit?: reajustecontratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reajustecontratoInclude<ExtArgs> | null
    /**
     * The data needed to create a reajustecontrato.
     */
    data: XOR<reajustecontratoCreateInput, reajustecontratoUncheckedCreateInput>
  }

  /**
   * reajustecontrato createMany
   */
  export type reajustecontratoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reajustecontratoes.
     */
    data: reajustecontratoCreateManyInput | reajustecontratoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reajustecontrato update
   */
  export type reajustecontratoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reajustecontrato
     */
    select?: reajustecontratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reajustecontrato
     */
    omit?: reajustecontratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reajustecontratoInclude<ExtArgs> | null
    /**
     * The data needed to update a reajustecontrato.
     */
    data: XOR<reajustecontratoUpdateInput, reajustecontratoUncheckedUpdateInput>
    /**
     * Choose, which reajustecontrato to update.
     */
    where: reajustecontratoWhereUniqueInput
  }

  /**
   * reajustecontrato updateMany
   */
  export type reajustecontratoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reajustecontratoes.
     */
    data: XOR<reajustecontratoUpdateManyMutationInput, reajustecontratoUncheckedUpdateManyInput>
    /**
     * Filter which reajustecontratoes to update
     */
    where?: reajustecontratoWhereInput
    /**
     * Limit how many reajustecontratoes to update.
     */
    limit?: number
  }

  /**
   * reajustecontrato upsert
   */
  export type reajustecontratoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reajustecontrato
     */
    select?: reajustecontratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reajustecontrato
     */
    omit?: reajustecontratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reajustecontratoInclude<ExtArgs> | null
    /**
     * The filter to search for the reajustecontrato to update in case it exists.
     */
    where: reajustecontratoWhereUniqueInput
    /**
     * In case the reajustecontrato found by the `where` argument doesn't exist, create a new reajustecontrato with this data.
     */
    create: XOR<reajustecontratoCreateInput, reajustecontratoUncheckedCreateInput>
    /**
     * In case the reajustecontrato was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reajustecontratoUpdateInput, reajustecontratoUncheckedUpdateInput>
  }

  /**
   * reajustecontrato delete
   */
  export type reajustecontratoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reajustecontrato
     */
    select?: reajustecontratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reajustecontrato
     */
    omit?: reajustecontratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reajustecontratoInclude<ExtArgs> | null
    /**
     * Filter which reajustecontrato to delete.
     */
    where: reajustecontratoWhereUniqueInput
  }

  /**
   * reajustecontrato deleteMany
   */
  export type reajustecontratoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reajustecontratoes to delete
     */
    where?: reajustecontratoWhereInput
    /**
     * Limit how many reajustecontratoes to delete.
     */
    limit?: number
  }

  /**
   * reajustecontrato without action
   */
  export type reajustecontratoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reajustecontrato
     */
    select?: reajustecontratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reajustecontrato
     */
    omit?: reajustecontratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reajustecontratoInclude<ExtArgs> | null
  }


  /**
   * Model memoriacalculo
   */

  export type AggregateMemoriacalculo = {
    _count: MemoriacalculoCountAggregateOutputType | null
    _avg: MemoriacalculoAvgAggregateOutputType | null
    _sum: MemoriacalculoSumAggregateOutputType | null
    _min: MemoriacalculoMinAggregateOutputType | null
    _max: MemoriacalculoMaxAggregateOutputType | null
  }

  export type MemoriacalculoAvgAggregateOutputType = {
    id: number | null
    idContrato: number | null
    idImovel: number | null
    valorAluguelBase: Decimal | null
    idContaBancaria: number | null
    reajustePercentual: Decimal | null
    reajusteValorAnterior: Decimal | null
    totalAPagar: Decimal | null
    geradoPorUsuarioId: number | null
  }

  export type MemoriacalculoSumAggregateOutputType = {
    id: number | null
    idContrato: bigint | null
    idImovel: number | null
    valorAluguelBase: Decimal | null
    idContaBancaria: number | null
    reajustePercentual: Decimal | null
    reajusteValorAnterior: Decimal | null
    totalAPagar: Decimal | null
    geradoPorUsuarioId: number | null
  }

  export type MemoriacalculoMinAggregateOutputType = {
    id: number | null
    idContrato: bigint | null
    idImovel: number | null
    competencia: Date | null
    valorAluguelBase: Decimal | null
    idContaBancaria: number | null
    contaDescricao: string | null
    contaBanco: string | null
    contaAgencia: string | null
    contaNumero: string | null
    contaTipoChavePix: string | null
    contaChavePix: string | null
    contaTitular: string | null
    contaDocumentoTitular: string | null
    reajusteIndice: $Enums.indice_reajuste_enum | null
    reajustePercentual: Decimal | null
    reajusteValorAnterior: Decimal | null
    totalAPagar: Decimal | null
    geradoPorUsuarioId: number | null
    criadoEm: Date | null
  }

  export type MemoriacalculoMaxAggregateOutputType = {
    id: number | null
    idContrato: bigint | null
    idImovel: number | null
    competencia: Date | null
    valorAluguelBase: Decimal | null
    idContaBancaria: number | null
    contaDescricao: string | null
    contaBanco: string | null
    contaAgencia: string | null
    contaNumero: string | null
    contaTipoChavePix: string | null
    contaChavePix: string | null
    contaTitular: string | null
    contaDocumentoTitular: string | null
    reajusteIndice: $Enums.indice_reajuste_enum | null
    reajustePercentual: Decimal | null
    reajusteValorAnterior: Decimal | null
    totalAPagar: Decimal | null
    geradoPorUsuarioId: number | null
    criadoEm: Date | null
  }

  export type MemoriacalculoCountAggregateOutputType = {
    id: number
    idContrato: number
    idImovel: number
    competencia: number
    valorAluguelBase: number
    idContaBancaria: number
    contaDescricao: number
    contaBanco: number
    contaAgencia: number
    contaNumero: number
    contaTipoChavePix: number
    contaChavePix: number
    contaTitular: number
    contaDocumentoTitular: number
    reajusteIndice: number
    reajustePercentual: number
    reajusteValorAnterior: number
    totalAPagar: number
    geradoPorUsuarioId: number
    criadoEm: number
    _all: number
  }


  export type MemoriacalculoAvgAggregateInputType = {
    id?: true
    idContrato?: true
    idImovel?: true
    valorAluguelBase?: true
    idContaBancaria?: true
    reajustePercentual?: true
    reajusteValorAnterior?: true
    totalAPagar?: true
    geradoPorUsuarioId?: true
  }

  export type MemoriacalculoSumAggregateInputType = {
    id?: true
    idContrato?: true
    idImovel?: true
    valorAluguelBase?: true
    idContaBancaria?: true
    reajustePercentual?: true
    reajusteValorAnterior?: true
    totalAPagar?: true
    geradoPorUsuarioId?: true
  }

  export type MemoriacalculoMinAggregateInputType = {
    id?: true
    idContrato?: true
    idImovel?: true
    competencia?: true
    valorAluguelBase?: true
    idContaBancaria?: true
    contaDescricao?: true
    contaBanco?: true
    contaAgencia?: true
    contaNumero?: true
    contaTipoChavePix?: true
    contaChavePix?: true
    contaTitular?: true
    contaDocumentoTitular?: true
    reajusteIndice?: true
    reajustePercentual?: true
    reajusteValorAnterior?: true
    totalAPagar?: true
    geradoPorUsuarioId?: true
    criadoEm?: true
  }

  export type MemoriacalculoMaxAggregateInputType = {
    id?: true
    idContrato?: true
    idImovel?: true
    competencia?: true
    valorAluguelBase?: true
    idContaBancaria?: true
    contaDescricao?: true
    contaBanco?: true
    contaAgencia?: true
    contaNumero?: true
    contaTipoChavePix?: true
    contaChavePix?: true
    contaTitular?: true
    contaDocumentoTitular?: true
    reajusteIndice?: true
    reajustePercentual?: true
    reajusteValorAnterior?: true
    totalAPagar?: true
    geradoPorUsuarioId?: true
    criadoEm?: true
  }

  export type MemoriacalculoCountAggregateInputType = {
    id?: true
    idContrato?: true
    idImovel?: true
    competencia?: true
    valorAluguelBase?: true
    idContaBancaria?: true
    contaDescricao?: true
    contaBanco?: true
    contaAgencia?: true
    contaNumero?: true
    contaTipoChavePix?: true
    contaChavePix?: true
    contaTitular?: true
    contaDocumentoTitular?: true
    reajusteIndice?: true
    reajustePercentual?: true
    reajusteValorAnterior?: true
    totalAPagar?: true
    geradoPorUsuarioId?: true
    criadoEm?: true
    _all?: true
  }

  export type MemoriacalculoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which memoriacalculo to aggregate.
     */
    where?: memoriacalculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of memoriacalculos to fetch.
     */
    orderBy?: memoriacalculoOrderByWithRelationInput | memoriacalculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: memoriacalculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` memoriacalculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` memoriacalculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned memoriacalculos
    **/
    _count?: true | MemoriacalculoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemoriacalculoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemoriacalculoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemoriacalculoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemoriacalculoMaxAggregateInputType
  }

  export type GetMemoriacalculoAggregateType<T extends MemoriacalculoAggregateArgs> = {
        [P in keyof T & keyof AggregateMemoriacalculo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemoriacalculo[P]>
      : GetScalarType<T[P], AggregateMemoriacalculo[P]>
  }




  export type memoriacalculoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: memoriacalculoWhereInput
    orderBy?: memoriacalculoOrderByWithAggregationInput | memoriacalculoOrderByWithAggregationInput[]
    by: MemoriacalculoScalarFieldEnum[] | MemoriacalculoScalarFieldEnum
    having?: memoriacalculoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemoriacalculoCountAggregateInputType | true
    _avg?: MemoriacalculoAvgAggregateInputType
    _sum?: MemoriacalculoSumAggregateInputType
    _min?: MemoriacalculoMinAggregateInputType
    _max?: MemoriacalculoMaxAggregateInputType
  }

  export type MemoriacalculoGroupByOutputType = {
    id: number
    idContrato: bigint
    idImovel: number
    competencia: Date
    valorAluguelBase: Decimal
    idContaBancaria: number | null
    contaDescricao: string | null
    contaBanco: string | null
    contaAgencia: string | null
    contaNumero: string | null
    contaTipoChavePix: string | null
    contaChavePix: string | null
    contaTitular: string | null
    contaDocumentoTitular: string | null
    reajusteIndice: $Enums.indice_reajuste_enum | null
    reajustePercentual: Decimal | null
    reajusteValorAnterior: Decimal | null
    totalAPagar: Decimal
    geradoPorUsuarioId: number
    criadoEm: Date
    _count: MemoriacalculoCountAggregateOutputType | null
    _avg: MemoriacalculoAvgAggregateOutputType | null
    _sum: MemoriacalculoSumAggregateOutputType | null
    _min: MemoriacalculoMinAggregateOutputType | null
    _max: MemoriacalculoMaxAggregateOutputType | null
  }

  type GetMemoriacalculoGroupByPayload<T extends memoriacalculoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemoriacalculoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemoriacalculoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemoriacalculoGroupByOutputType[P]>
            : GetScalarType<T[P], MemoriacalculoGroupByOutputType[P]>
        }
      >
    >


  export type memoriacalculoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idContrato?: boolean
    idImovel?: boolean
    competencia?: boolean
    valorAluguelBase?: boolean
    idContaBancaria?: boolean
    contaDescricao?: boolean
    contaBanco?: boolean
    contaAgencia?: boolean
    contaNumero?: boolean
    contaTipoChavePix?: boolean
    contaChavePix?: boolean
    contaTitular?: boolean
    contaDocumentoTitular?: boolean
    reajusteIndice?: boolean
    reajustePercentual?: boolean
    reajusteValorAnterior?: boolean
    totalAPagar?: boolean
    geradoPorUsuarioId?: boolean
    criadoEm?: boolean
    contratolocacao?: boolean | contratolocacaoDefaultArgs<ExtArgs>
    imovel?: boolean | imovelDefaultArgs<ExtArgs>
    itens?: boolean | memoriacalculo$itensArgs<ExtArgs>
    _count?: boolean | MemoriacalculoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memoriacalculo"]>



  export type memoriacalculoSelectScalar = {
    id?: boolean
    idContrato?: boolean
    idImovel?: boolean
    competencia?: boolean
    valorAluguelBase?: boolean
    idContaBancaria?: boolean
    contaDescricao?: boolean
    contaBanco?: boolean
    contaAgencia?: boolean
    contaNumero?: boolean
    contaTipoChavePix?: boolean
    contaChavePix?: boolean
    contaTitular?: boolean
    contaDocumentoTitular?: boolean
    reajusteIndice?: boolean
    reajustePercentual?: boolean
    reajusteValorAnterior?: boolean
    totalAPagar?: boolean
    geradoPorUsuarioId?: boolean
    criadoEm?: boolean
  }

  export type memoriacalculoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idContrato" | "idImovel" | "competencia" | "valorAluguelBase" | "idContaBancaria" | "contaDescricao" | "contaBanco" | "contaAgencia" | "contaNumero" | "contaTipoChavePix" | "contaChavePix" | "contaTitular" | "contaDocumentoTitular" | "reajusteIndice" | "reajustePercentual" | "reajusteValorAnterior" | "totalAPagar" | "geradoPorUsuarioId" | "criadoEm", ExtArgs["result"]["memoriacalculo"]>
  export type memoriacalculoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contratolocacao?: boolean | contratolocacaoDefaultArgs<ExtArgs>
    imovel?: boolean | imovelDefaultArgs<ExtArgs>
    itens?: boolean | memoriacalculo$itensArgs<ExtArgs>
    _count?: boolean | MemoriacalculoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $memoriacalculoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "memoriacalculo"
    objects: {
      contratolocacao: Prisma.$contratolocacaoPayload<ExtArgs>
      imovel: Prisma.$imovelPayload<ExtArgs>
      itens: Prisma.$memoriacalculoitemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idContrato: bigint
      idImovel: number
      competencia: Date
      valorAluguelBase: Prisma.Decimal
      idContaBancaria: number | null
      contaDescricao: string | null
      contaBanco: string | null
      contaAgencia: string | null
      contaNumero: string | null
      contaTipoChavePix: string | null
      contaChavePix: string | null
      contaTitular: string | null
      contaDocumentoTitular: string | null
      reajusteIndice: $Enums.indice_reajuste_enum | null
      reajustePercentual: Prisma.Decimal | null
      reajusteValorAnterior: Prisma.Decimal | null
      totalAPagar: Prisma.Decimal
      geradoPorUsuarioId: number
      criadoEm: Date
    }, ExtArgs["result"]["memoriacalculo"]>
    composites: {}
  }

  type memoriacalculoGetPayload<S extends boolean | null | undefined | memoriacalculoDefaultArgs> = $Result.GetResult<Prisma.$memoriacalculoPayload, S>

  type memoriacalculoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<memoriacalculoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemoriacalculoCountAggregateInputType | true
    }

  export interface memoriacalculoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['memoriacalculo'], meta: { name: 'memoriacalculo' } }
    /**
     * Find zero or one Memoriacalculo that matches the filter.
     * @param {memoriacalculoFindUniqueArgs} args - Arguments to find a Memoriacalculo
     * @example
     * // Get one Memoriacalculo
     * const memoriacalculo = await prisma.memoriacalculo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends memoriacalculoFindUniqueArgs>(args: SelectSubset<T, memoriacalculoFindUniqueArgs<ExtArgs>>): Prisma__memoriacalculoClient<$Result.GetResult<Prisma.$memoriacalculoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Memoriacalculo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {memoriacalculoFindUniqueOrThrowArgs} args - Arguments to find a Memoriacalculo
     * @example
     * // Get one Memoriacalculo
     * const memoriacalculo = await prisma.memoriacalculo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends memoriacalculoFindUniqueOrThrowArgs>(args: SelectSubset<T, memoriacalculoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__memoriacalculoClient<$Result.GetResult<Prisma.$memoriacalculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Memoriacalculo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memoriacalculoFindFirstArgs} args - Arguments to find a Memoriacalculo
     * @example
     * // Get one Memoriacalculo
     * const memoriacalculo = await prisma.memoriacalculo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends memoriacalculoFindFirstArgs>(args?: SelectSubset<T, memoriacalculoFindFirstArgs<ExtArgs>>): Prisma__memoriacalculoClient<$Result.GetResult<Prisma.$memoriacalculoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Memoriacalculo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memoriacalculoFindFirstOrThrowArgs} args - Arguments to find a Memoriacalculo
     * @example
     * // Get one Memoriacalculo
     * const memoriacalculo = await prisma.memoriacalculo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends memoriacalculoFindFirstOrThrowArgs>(args?: SelectSubset<T, memoriacalculoFindFirstOrThrowArgs<ExtArgs>>): Prisma__memoriacalculoClient<$Result.GetResult<Prisma.$memoriacalculoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Memoriacalculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memoriacalculoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Memoriacalculos
     * const memoriacalculos = await prisma.memoriacalculo.findMany()
     * 
     * // Get first 10 Memoriacalculos
     * const memoriacalculos = await prisma.memoriacalculo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memoriacalculoWithIdOnly = await prisma.memoriacalculo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends memoriacalculoFindManyArgs>(args?: SelectSubset<T, memoriacalculoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$memoriacalculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Memoriacalculo.
     * @param {memoriacalculoCreateArgs} args - Arguments to create a Memoriacalculo.
     * @example
     * // Create one Memoriacalculo
     * const Memoriacalculo = await prisma.memoriacalculo.create({
     *   data: {
     *     // ... data to create a Memoriacalculo
     *   }
     * })
     * 
     */
    create<T extends memoriacalculoCreateArgs>(args: SelectSubset<T, memoriacalculoCreateArgs<ExtArgs>>): Prisma__memoriacalculoClient<$Result.GetResult<Prisma.$memoriacalculoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Memoriacalculos.
     * @param {memoriacalculoCreateManyArgs} args - Arguments to create many Memoriacalculos.
     * @example
     * // Create many Memoriacalculos
     * const memoriacalculo = await prisma.memoriacalculo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends memoriacalculoCreateManyArgs>(args?: SelectSubset<T, memoriacalculoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Memoriacalculo.
     * @param {memoriacalculoDeleteArgs} args - Arguments to delete one Memoriacalculo.
     * @example
     * // Delete one Memoriacalculo
     * const Memoriacalculo = await prisma.memoriacalculo.delete({
     *   where: {
     *     // ... filter to delete one Memoriacalculo
     *   }
     * })
     * 
     */
    delete<T extends memoriacalculoDeleteArgs>(args: SelectSubset<T, memoriacalculoDeleteArgs<ExtArgs>>): Prisma__memoriacalculoClient<$Result.GetResult<Prisma.$memoriacalculoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Memoriacalculo.
     * @param {memoriacalculoUpdateArgs} args - Arguments to update one Memoriacalculo.
     * @example
     * // Update one Memoriacalculo
     * const memoriacalculo = await prisma.memoriacalculo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends memoriacalculoUpdateArgs>(args: SelectSubset<T, memoriacalculoUpdateArgs<ExtArgs>>): Prisma__memoriacalculoClient<$Result.GetResult<Prisma.$memoriacalculoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Memoriacalculos.
     * @param {memoriacalculoDeleteManyArgs} args - Arguments to filter Memoriacalculos to delete.
     * @example
     * // Delete a few Memoriacalculos
     * const { count } = await prisma.memoriacalculo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends memoriacalculoDeleteManyArgs>(args?: SelectSubset<T, memoriacalculoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memoriacalculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memoriacalculoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Memoriacalculos
     * const memoriacalculo = await prisma.memoriacalculo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends memoriacalculoUpdateManyArgs>(args: SelectSubset<T, memoriacalculoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Memoriacalculo.
     * @param {memoriacalculoUpsertArgs} args - Arguments to update or create a Memoriacalculo.
     * @example
     * // Update or create a Memoriacalculo
     * const memoriacalculo = await prisma.memoriacalculo.upsert({
     *   create: {
     *     // ... data to create a Memoriacalculo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Memoriacalculo we want to update
     *   }
     * })
     */
    upsert<T extends memoriacalculoUpsertArgs>(args: SelectSubset<T, memoriacalculoUpsertArgs<ExtArgs>>): Prisma__memoriacalculoClient<$Result.GetResult<Prisma.$memoriacalculoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Memoriacalculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memoriacalculoCountArgs} args - Arguments to filter Memoriacalculos to count.
     * @example
     * // Count the number of Memoriacalculos
     * const count = await prisma.memoriacalculo.count({
     *   where: {
     *     // ... the filter for the Memoriacalculos we want to count
     *   }
     * })
    **/
    count<T extends memoriacalculoCountArgs>(
      args?: Subset<T, memoriacalculoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemoriacalculoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Memoriacalculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoriacalculoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemoriacalculoAggregateArgs>(args: Subset<T, MemoriacalculoAggregateArgs>): Prisma.PrismaPromise<GetMemoriacalculoAggregateType<T>>

    /**
     * Group by Memoriacalculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memoriacalculoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends memoriacalculoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: memoriacalculoGroupByArgs['orderBy'] }
        : { orderBy?: memoriacalculoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, memoriacalculoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemoriacalculoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the memoriacalculo model
   */
  readonly fields: memoriacalculoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for memoriacalculo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__memoriacalculoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contratolocacao<T extends contratolocacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, contratolocacaoDefaultArgs<ExtArgs>>): Prisma__contratolocacaoClient<$Result.GetResult<Prisma.$contratolocacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    imovel<T extends imovelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, imovelDefaultArgs<ExtArgs>>): Prisma__imovelClient<$Result.GetResult<Prisma.$imovelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itens<T extends memoriacalculo$itensArgs<ExtArgs> = {}>(args?: Subset<T, memoriacalculo$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$memoriacalculoitemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the memoriacalculo model
   */
  interface memoriacalculoFieldRefs {
    readonly id: FieldRef<"memoriacalculo", 'Int'>
    readonly idContrato: FieldRef<"memoriacalculo", 'BigInt'>
    readonly idImovel: FieldRef<"memoriacalculo", 'Int'>
    readonly competencia: FieldRef<"memoriacalculo", 'DateTime'>
    readonly valorAluguelBase: FieldRef<"memoriacalculo", 'Decimal'>
    readonly idContaBancaria: FieldRef<"memoriacalculo", 'Int'>
    readonly contaDescricao: FieldRef<"memoriacalculo", 'String'>
    readonly contaBanco: FieldRef<"memoriacalculo", 'String'>
    readonly contaAgencia: FieldRef<"memoriacalculo", 'String'>
    readonly contaNumero: FieldRef<"memoriacalculo", 'String'>
    readonly contaTipoChavePix: FieldRef<"memoriacalculo", 'String'>
    readonly contaChavePix: FieldRef<"memoriacalculo", 'String'>
    readonly contaTitular: FieldRef<"memoriacalculo", 'String'>
    readonly contaDocumentoTitular: FieldRef<"memoriacalculo", 'String'>
    readonly reajusteIndice: FieldRef<"memoriacalculo", 'indice_reajuste_enum'>
    readonly reajustePercentual: FieldRef<"memoriacalculo", 'Decimal'>
    readonly reajusteValorAnterior: FieldRef<"memoriacalculo", 'Decimal'>
    readonly totalAPagar: FieldRef<"memoriacalculo", 'Decimal'>
    readonly geradoPorUsuarioId: FieldRef<"memoriacalculo", 'Int'>
    readonly criadoEm: FieldRef<"memoriacalculo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * memoriacalculo findUnique
   */
  export type memoriacalculoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memoriacalculo
     */
    select?: memoriacalculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memoriacalculo
     */
    omit?: memoriacalculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memoriacalculoInclude<ExtArgs> | null
    /**
     * Filter, which memoriacalculo to fetch.
     */
    where: memoriacalculoWhereUniqueInput
  }

  /**
   * memoriacalculo findUniqueOrThrow
   */
  export type memoriacalculoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memoriacalculo
     */
    select?: memoriacalculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memoriacalculo
     */
    omit?: memoriacalculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memoriacalculoInclude<ExtArgs> | null
    /**
     * Filter, which memoriacalculo to fetch.
     */
    where: memoriacalculoWhereUniqueInput
  }

  /**
   * memoriacalculo findFirst
   */
  export type memoriacalculoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memoriacalculo
     */
    select?: memoriacalculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memoriacalculo
     */
    omit?: memoriacalculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memoriacalculoInclude<ExtArgs> | null
    /**
     * Filter, which memoriacalculo to fetch.
     */
    where?: memoriacalculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of memoriacalculos to fetch.
     */
    orderBy?: memoriacalculoOrderByWithRelationInput | memoriacalculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for memoriacalculos.
     */
    cursor?: memoriacalculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` memoriacalculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` memoriacalculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of memoriacalculos.
     */
    distinct?: MemoriacalculoScalarFieldEnum | MemoriacalculoScalarFieldEnum[]
  }

  /**
   * memoriacalculo findFirstOrThrow
   */
  export type memoriacalculoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memoriacalculo
     */
    select?: memoriacalculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memoriacalculo
     */
    omit?: memoriacalculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memoriacalculoInclude<ExtArgs> | null
    /**
     * Filter, which memoriacalculo to fetch.
     */
    where?: memoriacalculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of memoriacalculos to fetch.
     */
    orderBy?: memoriacalculoOrderByWithRelationInput | memoriacalculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for memoriacalculos.
     */
    cursor?: memoriacalculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` memoriacalculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` memoriacalculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of memoriacalculos.
     */
    distinct?: MemoriacalculoScalarFieldEnum | MemoriacalculoScalarFieldEnum[]
  }

  /**
   * memoriacalculo findMany
   */
  export type memoriacalculoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memoriacalculo
     */
    select?: memoriacalculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memoriacalculo
     */
    omit?: memoriacalculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memoriacalculoInclude<ExtArgs> | null
    /**
     * Filter, which memoriacalculos to fetch.
     */
    where?: memoriacalculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of memoriacalculos to fetch.
     */
    orderBy?: memoriacalculoOrderByWithRelationInput | memoriacalculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing memoriacalculos.
     */
    cursor?: memoriacalculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` memoriacalculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` memoriacalculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of memoriacalculos.
     */
    distinct?: MemoriacalculoScalarFieldEnum | MemoriacalculoScalarFieldEnum[]
  }

  /**
   * memoriacalculo create
   */
  export type memoriacalculoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memoriacalculo
     */
    select?: memoriacalculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memoriacalculo
     */
    omit?: memoriacalculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memoriacalculoInclude<ExtArgs> | null
    /**
     * The data needed to create a memoriacalculo.
     */
    data: XOR<memoriacalculoCreateInput, memoriacalculoUncheckedCreateInput>
  }

  /**
   * memoriacalculo createMany
   */
  export type memoriacalculoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many memoriacalculos.
     */
    data: memoriacalculoCreateManyInput | memoriacalculoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * memoriacalculo update
   */
  export type memoriacalculoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memoriacalculo
     */
    select?: memoriacalculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memoriacalculo
     */
    omit?: memoriacalculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memoriacalculoInclude<ExtArgs> | null
    /**
     * The data needed to update a memoriacalculo.
     */
    data: XOR<memoriacalculoUpdateInput, memoriacalculoUncheckedUpdateInput>
    /**
     * Choose, which memoriacalculo to update.
     */
    where: memoriacalculoWhereUniqueInput
  }

  /**
   * memoriacalculo updateMany
   */
  export type memoriacalculoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update memoriacalculos.
     */
    data: XOR<memoriacalculoUpdateManyMutationInput, memoriacalculoUncheckedUpdateManyInput>
    /**
     * Filter which memoriacalculos to update
     */
    where?: memoriacalculoWhereInput
    /**
     * Limit how many memoriacalculos to update.
     */
    limit?: number
  }

  /**
   * memoriacalculo upsert
   */
  export type memoriacalculoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memoriacalculo
     */
    select?: memoriacalculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memoriacalculo
     */
    omit?: memoriacalculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memoriacalculoInclude<ExtArgs> | null
    /**
     * The filter to search for the memoriacalculo to update in case it exists.
     */
    where: memoriacalculoWhereUniqueInput
    /**
     * In case the memoriacalculo found by the `where` argument doesn't exist, create a new memoriacalculo with this data.
     */
    create: XOR<memoriacalculoCreateInput, memoriacalculoUncheckedCreateInput>
    /**
     * In case the memoriacalculo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<memoriacalculoUpdateInput, memoriacalculoUncheckedUpdateInput>
  }

  /**
   * memoriacalculo delete
   */
  export type memoriacalculoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memoriacalculo
     */
    select?: memoriacalculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memoriacalculo
     */
    omit?: memoriacalculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memoriacalculoInclude<ExtArgs> | null
    /**
     * Filter which memoriacalculo to delete.
     */
    where: memoriacalculoWhereUniqueInput
  }

  /**
   * memoriacalculo deleteMany
   */
  export type memoriacalculoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which memoriacalculos to delete
     */
    where?: memoriacalculoWhereInput
    /**
     * Limit how many memoriacalculos to delete.
     */
    limit?: number
  }

  /**
   * memoriacalculo.itens
   */
  export type memoriacalculo$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memoriacalculoitem
     */
    select?: memoriacalculoitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memoriacalculoitem
     */
    omit?: memoriacalculoitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memoriacalculoitemInclude<ExtArgs> | null
    where?: memoriacalculoitemWhereInput
    orderBy?: memoriacalculoitemOrderByWithRelationInput | memoriacalculoitemOrderByWithRelationInput[]
    cursor?: memoriacalculoitemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemoriacalculoitemScalarFieldEnum | MemoriacalculoitemScalarFieldEnum[]
  }

  /**
   * memoriacalculo without action
   */
  export type memoriacalculoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memoriacalculo
     */
    select?: memoriacalculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memoriacalculo
     */
    omit?: memoriacalculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memoriacalculoInclude<ExtArgs> | null
  }


  /**
   * Model memoriacalculoitem
   */

  export type AggregateMemoriacalculoitem = {
    _count: MemoriacalculoitemCountAggregateOutputType | null
    _avg: MemoriacalculoitemAvgAggregateOutputType | null
    _sum: MemoriacalculoitemSumAggregateOutputType | null
    _min: MemoriacalculoitemMinAggregateOutputType | null
    _max: MemoriacalculoitemMaxAggregateOutputType | null
  }

  export type MemoriacalculoitemAvgAggregateOutputType = {
    id: number | null
    idMemoriaCalculo: number | null
    idLocador: number | null
    percentualParticipacao: Decimal | null
    valorAluguel: Decimal | null
    valorReembolsos: Decimal | null
    valorDescontos: Decimal | null
    baseCalculoIrrf: Decimal | null
    valorIrrf: Decimal | null
    valorAPagar: Decimal | null
  }

  export type MemoriacalculoitemSumAggregateOutputType = {
    id: number | null
    idMemoriaCalculo: number | null
    idLocador: bigint | null
    percentualParticipacao: Decimal | null
    valorAluguel: Decimal | null
    valorReembolsos: Decimal | null
    valorDescontos: Decimal | null
    baseCalculoIrrf: Decimal | null
    valorIrrf: Decimal | null
    valorAPagar: Decimal | null
  }

  export type MemoriacalculoitemMinAggregateOutputType = {
    id: number | null
    idMemoriaCalculo: number | null
    idLocador: bigint | null
    nomeLocador: string | null
    documentoLocador: string | null
    percentualParticipacao: Decimal | null
    valorAluguel: Decimal | null
    valorReembolsos: Decimal | null
    valorDescontos: Decimal | null
    baseCalculoIrrf: Decimal | null
    valorIrrf: Decimal | null
    valorAPagar: Decimal | null
  }

  export type MemoriacalculoitemMaxAggregateOutputType = {
    id: number | null
    idMemoriaCalculo: number | null
    idLocador: bigint | null
    nomeLocador: string | null
    documentoLocador: string | null
    percentualParticipacao: Decimal | null
    valorAluguel: Decimal | null
    valorReembolsos: Decimal | null
    valorDescontos: Decimal | null
    baseCalculoIrrf: Decimal | null
    valorIrrf: Decimal | null
    valorAPagar: Decimal | null
  }

  export type MemoriacalculoitemCountAggregateOutputType = {
    id: number
    idMemoriaCalculo: number
    idLocador: number
    nomeLocador: number
    documentoLocador: number
    percentualParticipacao: number
    valorAluguel: number
    valorReembolsos: number
    valorDescontos: number
    baseCalculoIrrf: number
    valorIrrf: number
    valorAPagar: number
    detalhesExtras: number
    _all: number
  }


  export type MemoriacalculoitemAvgAggregateInputType = {
    id?: true
    idMemoriaCalculo?: true
    idLocador?: true
    percentualParticipacao?: true
    valorAluguel?: true
    valorReembolsos?: true
    valorDescontos?: true
    baseCalculoIrrf?: true
    valorIrrf?: true
    valorAPagar?: true
  }

  export type MemoriacalculoitemSumAggregateInputType = {
    id?: true
    idMemoriaCalculo?: true
    idLocador?: true
    percentualParticipacao?: true
    valorAluguel?: true
    valorReembolsos?: true
    valorDescontos?: true
    baseCalculoIrrf?: true
    valorIrrf?: true
    valorAPagar?: true
  }

  export type MemoriacalculoitemMinAggregateInputType = {
    id?: true
    idMemoriaCalculo?: true
    idLocador?: true
    nomeLocador?: true
    documentoLocador?: true
    percentualParticipacao?: true
    valorAluguel?: true
    valorReembolsos?: true
    valorDescontos?: true
    baseCalculoIrrf?: true
    valorIrrf?: true
    valorAPagar?: true
  }

  export type MemoriacalculoitemMaxAggregateInputType = {
    id?: true
    idMemoriaCalculo?: true
    idLocador?: true
    nomeLocador?: true
    documentoLocador?: true
    percentualParticipacao?: true
    valorAluguel?: true
    valorReembolsos?: true
    valorDescontos?: true
    baseCalculoIrrf?: true
    valorIrrf?: true
    valorAPagar?: true
  }

  export type MemoriacalculoitemCountAggregateInputType = {
    id?: true
    idMemoriaCalculo?: true
    idLocador?: true
    nomeLocador?: true
    documentoLocador?: true
    percentualParticipacao?: true
    valorAluguel?: true
    valorReembolsos?: true
    valorDescontos?: true
    baseCalculoIrrf?: true
    valorIrrf?: true
    valorAPagar?: true
    detalhesExtras?: true
    _all?: true
  }

  export type MemoriacalculoitemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which memoriacalculoitem to aggregate.
     */
    where?: memoriacalculoitemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of memoriacalculoitems to fetch.
     */
    orderBy?: memoriacalculoitemOrderByWithRelationInput | memoriacalculoitemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: memoriacalculoitemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` memoriacalculoitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` memoriacalculoitems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned memoriacalculoitems
    **/
    _count?: true | MemoriacalculoitemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemoriacalculoitemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemoriacalculoitemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemoriacalculoitemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemoriacalculoitemMaxAggregateInputType
  }

  export type GetMemoriacalculoitemAggregateType<T extends MemoriacalculoitemAggregateArgs> = {
        [P in keyof T & keyof AggregateMemoriacalculoitem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemoriacalculoitem[P]>
      : GetScalarType<T[P], AggregateMemoriacalculoitem[P]>
  }




  export type memoriacalculoitemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: memoriacalculoitemWhereInput
    orderBy?: memoriacalculoitemOrderByWithAggregationInput | memoriacalculoitemOrderByWithAggregationInput[]
    by: MemoriacalculoitemScalarFieldEnum[] | MemoriacalculoitemScalarFieldEnum
    having?: memoriacalculoitemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemoriacalculoitemCountAggregateInputType | true
    _avg?: MemoriacalculoitemAvgAggregateInputType
    _sum?: MemoriacalculoitemSumAggregateInputType
    _min?: MemoriacalculoitemMinAggregateInputType
    _max?: MemoriacalculoitemMaxAggregateInputType
  }

  export type MemoriacalculoitemGroupByOutputType = {
    id: number
    idMemoriaCalculo: number
    idLocador: bigint
    nomeLocador: string
    documentoLocador: string | null
    percentualParticipacao: Decimal
    valorAluguel: Decimal
    valorReembolsos: Decimal
    valorDescontos: Decimal
    baseCalculoIrrf: Decimal
    valorIrrf: Decimal
    valorAPagar: Decimal
    detalhesExtras: JsonValue | null
    _count: MemoriacalculoitemCountAggregateOutputType | null
    _avg: MemoriacalculoitemAvgAggregateOutputType | null
    _sum: MemoriacalculoitemSumAggregateOutputType | null
    _min: MemoriacalculoitemMinAggregateOutputType | null
    _max: MemoriacalculoitemMaxAggregateOutputType | null
  }

  type GetMemoriacalculoitemGroupByPayload<T extends memoriacalculoitemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemoriacalculoitemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemoriacalculoitemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemoriacalculoitemGroupByOutputType[P]>
            : GetScalarType<T[P], MemoriacalculoitemGroupByOutputType[P]>
        }
      >
    >


  export type memoriacalculoitemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idMemoriaCalculo?: boolean
    idLocador?: boolean
    nomeLocador?: boolean
    documentoLocador?: boolean
    percentualParticipacao?: boolean
    valorAluguel?: boolean
    valorReembolsos?: boolean
    valorDescontos?: boolean
    baseCalculoIrrf?: boolean
    valorIrrf?: boolean
    valorAPagar?: boolean
    detalhesExtras?: boolean
    memoriacalculo?: boolean | memoriacalculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memoriacalculoitem"]>



  export type memoriacalculoitemSelectScalar = {
    id?: boolean
    idMemoriaCalculo?: boolean
    idLocador?: boolean
    nomeLocador?: boolean
    documentoLocador?: boolean
    percentualParticipacao?: boolean
    valorAluguel?: boolean
    valorReembolsos?: boolean
    valorDescontos?: boolean
    baseCalculoIrrf?: boolean
    valorIrrf?: boolean
    valorAPagar?: boolean
    detalhesExtras?: boolean
  }

  export type memoriacalculoitemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idMemoriaCalculo" | "idLocador" | "nomeLocador" | "documentoLocador" | "percentualParticipacao" | "valorAluguel" | "valorReembolsos" | "valorDescontos" | "baseCalculoIrrf" | "valorIrrf" | "valorAPagar" | "detalhesExtras", ExtArgs["result"]["memoriacalculoitem"]>
  export type memoriacalculoitemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memoriacalculo?: boolean | memoriacalculoDefaultArgs<ExtArgs>
  }

  export type $memoriacalculoitemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "memoriacalculoitem"
    objects: {
      memoriacalculo: Prisma.$memoriacalculoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idMemoriaCalculo: number
      idLocador: bigint
      nomeLocador: string
      documentoLocador: string | null
      percentualParticipacao: Prisma.Decimal
      valorAluguel: Prisma.Decimal
      valorReembolsos: Prisma.Decimal
      valorDescontos: Prisma.Decimal
      baseCalculoIrrf: Prisma.Decimal
      valorIrrf: Prisma.Decimal
      valorAPagar: Prisma.Decimal
      detalhesExtras: Prisma.JsonValue | null
    }, ExtArgs["result"]["memoriacalculoitem"]>
    composites: {}
  }

  type memoriacalculoitemGetPayload<S extends boolean | null | undefined | memoriacalculoitemDefaultArgs> = $Result.GetResult<Prisma.$memoriacalculoitemPayload, S>

  type memoriacalculoitemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<memoriacalculoitemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemoriacalculoitemCountAggregateInputType | true
    }

  export interface memoriacalculoitemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['memoriacalculoitem'], meta: { name: 'memoriacalculoitem' } }
    /**
     * Find zero or one Memoriacalculoitem that matches the filter.
     * @param {memoriacalculoitemFindUniqueArgs} args - Arguments to find a Memoriacalculoitem
     * @example
     * // Get one Memoriacalculoitem
     * const memoriacalculoitem = await prisma.memoriacalculoitem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends memoriacalculoitemFindUniqueArgs>(args: SelectSubset<T, memoriacalculoitemFindUniqueArgs<ExtArgs>>): Prisma__memoriacalculoitemClient<$Result.GetResult<Prisma.$memoriacalculoitemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Memoriacalculoitem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {memoriacalculoitemFindUniqueOrThrowArgs} args - Arguments to find a Memoriacalculoitem
     * @example
     * // Get one Memoriacalculoitem
     * const memoriacalculoitem = await prisma.memoriacalculoitem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends memoriacalculoitemFindUniqueOrThrowArgs>(args: SelectSubset<T, memoriacalculoitemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__memoriacalculoitemClient<$Result.GetResult<Prisma.$memoriacalculoitemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Memoriacalculoitem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memoriacalculoitemFindFirstArgs} args - Arguments to find a Memoriacalculoitem
     * @example
     * // Get one Memoriacalculoitem
     * const memoriacalculoitem = await prisma.memoriacalculoitem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends memoriacalculoitemFindFirstArgs>(args?: SelectSubset<T, memoriacalculoitemFindFirstArgs<ExtArgs>>): Prisma__memoriacalculoitemClient<$Result.GetResult<Prisma.$memoriacalculoitemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Memoriacalculoitem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memoriacalculoitemFindFirstOrThrowArgs} args - Arguments to find a Memoriacalculoitem
     * @example
     * // Get one Memoriacalculoitem
     * const memoriacalculoitem = await prisma.memoriacalculoitem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends memoriacalculoitemFindFirstOrThrowArgs>(args?: SelectSubset<T, memoriacalculoitemFindFirstOrThrowArgs<ExtArgs>>): Prisma__memoriacalculoitemClient<$Result.GetResult<Prisma.$memoriacalculoitemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Memoriacalculoitems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memoriacalculoitemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Memoriacalculoitems
     * const memoriacalculoitems = await prisma.memoriacalculoitem.findMany()
     * 
     * // Get first 10 Memoriacalculoitems
     * const memoriacalculoitems = await prisma.memoriacalculoitem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memoriacalculoitemWithIdOnly = await prisma.memoriacalculoitem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends memoriacalculoitemFindManyArgs>(args?: SelectSubset<T, memoriacalculoitemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$memoriacalculoitemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Memoriacalculoitem.
     * @param {memoriacalculoitemCreateArgs} args - Arguments to create a Memoriacalculoitem.
     * @example
     * // Create one Memoriacalculoitem
     * const Memoriacalculoitem = await prisma.memoriacalculoitem.create({
     *   data: {
     *     // ... data to create a Memoriacalculoitem
     *   }
     * })
     * 
     */
    create<T extends memoriacalculoitemCreateArgs>(args: SelectSubset<T, memoriacalculoitemCreateArgs<ExtArgs>>): Prisma__memoriacalculoitemClient<$Result.GetResult<Prisma.$memoriacalculoitemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Memoriacalculoitems.
     * @param {memoriacalculoitemCreateManyArgs} args - Arguments to create many Memoriacalculoitems.
     * @example
     * // Create many Memoriacalculoitems
     * const memoriacalculoitem = await prisma.memoriacalculoitem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends memoriacalculoitemCreateManyArgs>(args?: SelectSubset<T, memoriacalculoitemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Memoriacalculoitem.
     * @param {memoriacalculoitemDeleteArgs} args - Arguments to delete one Memoriacalculoitem.
     * @example
     * // Delete one Memoriacalculoitem
     * const Memoriacalculoitem = await prisma.memoriacalculoitem.delete({
     *   where: {
     *     // ... filter to delete one Memoriacalculoitem
     *   }
     * })
     * 
     */
    delete<T extends memoriacalculoitemDeleteArgs>(args: SelectSubset<T, memoriacalculoitemDeleteArgs<ExtArgs>>): Prisma__memoriacalculoitemClient<$Result.GetResult<Prisma.$memoriacalculoitemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Memoriacalculoitem.
     * @param {memoriacalculoitemUpdateArgs} args - Arguments to update one Memoriacalculoitem.
     * @example
     * // Update one Memoriacalculoitem
     * const memoriacalculoitem = await prisma.memoriacalculoitem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends memoriacalculoitemUpdateArgs>(args: SelectSubset<T, memoriacalculoitemUpdateArgs<ExtArgs>>): Prisma__memoriacalculoitemClient<$Result.GetResult<Prisma.$memoriacalculoitemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Memoriacalculoitems.
     * @param {memoriacalculoitemDeleteManyArgs} args - Arguments to filter Memoriacalculoitems to delete.
     * @example
     * // Delete a few Memoriacalculoitems
     * const { count } = await prisma.memoriacalculoitem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends memoriacalculoitemDeleteManyArgs>(args?: SelectSubset<T, memoriacalculoitemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memoriacalculoitems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memoriacalculoitemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Memoriacalculoitems
     * const memoriacalculoitem = await prisma.memoriacalculoitem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends memoriacalculoitemUpdateManyArgs>(args: SelectSubset<T, memoriacalculoitemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Memoriacalculoitem.
     * @param {memoriacalculoitemUpsertArgs} args - Arguments to update or create a Memoriacalculoitem.
     * @example
     * // Update or create a Memoriacalculoitem
     * const memoriacalculoitem = await prisma.memoriacalculoitem.upsert({
     *   create: {
     *     // ... data to create a Memoriacalculoitem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Memoriacalculoitem we want to update
     *   }
     * })
     */
    upsert<T extends memoriacalculoitemUpsertArgs>(args: SelectSubset<T, memoriacalculoitemUpsertArgs<ExtArgs>>): Prisma__memoriacalculoitemClient<$Result.GetResult<Prisma.$memoriacalculoitemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Memoriacalculoitems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memoriacalculoitemCountArgs} args - Arguments to filter Memoriacalculoitems to count.
     * @example
     * // Count the number of Memoriacalculoitems
     * const count = await prisma.memoriacalculoitem.count({
     *   where: {
     *     // ... the filter for the Memoriacalculoitems we want to count
     *   }
     * })
    **/
    count<T extends memoriacalculoitemCountArgs>(
      args?: Subset<T, memoriacalculoitemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemoriacalculoitemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Memoriacalculoitem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoriacalculoitemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemoriacalculoitemAggregateArgs>(args: Subset<T, MemoriacalculoitemAggregateArgs>): Prisma.PrismaPromise<GetMemoriacalculoitemAggregateType<T>>

    /**
     * Group by Memoriacalculoitem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memoriacalculoitemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends memoriacalculoitemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: memoriacalculoitemGroupByArgs['orderBy'] }
        : { orderBy?: memoriacalculoitemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, memoriacalculoitemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemoriacalculoitemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the memoriacalculoitem model
   */
  readonly fields: memoriacalculoitemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for memoriacalculoitem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__memoriacalculoitemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    memoriacalculo<T extends memoriacalculoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, memoriacalculoDefaultArgs<ExtArgs>>): Prisma__memoriacalculoClient<$Result.GetResult<Prisma.$memoriacalculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the memoriacalculoitem model
   */
  interface memoriacalculoitemFieldRefs {
    readonly id: FieldRef<"memoriacalculoitem", 'Int'>
    readonly idMemoriaCalculo: FieldRef<"memoriacalculoitem", 'Int'>
    readonly idLocador: FieldRef<"memoriacalculoitem", 'BigInt'>
    readonly nomeLocador: FieldRef<"memoriacalculoitem", 'String'>
    readonly documentoLocador: FieldRef<"memoriacalculoitem", 'String'>
    readonly percentualParticipacao: FieldRef<"memoriacalculoitem", 'Decimal'>
    readonly valorAluguel: FieldRef<"memoriacalculoitem", 'Decimal'>
    readonly valorReembolsos: FieldRef<"memoriacalculoitem", 'Decimal'>
    readonly valorDescontos: FieldRef<"memoriacalculoitem", 'Decimal'>
    readonly baseCalculoIrrf: FieldRef<"memoriacalculoitem", 'Decimal'>
    readonly valorIrrf: FieldRef<"memoriacalculoitem", 'Decimal'>
    readonly valorAPagar: FieldRef<"memoriacalculoitem", 'Decimal'>
    readonly detalhesExtras: FieldRef<"memoriacalculoitem", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * memoriacalculoitem findUnique
   */
  export type memoriacalculoitemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memoriacalculoitem
     */
    select?: memoriacalculoitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memoriacalculoitem
     */
    omit?: memoriacalculoitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memoriacalculoitemInclude<ExtArgs> | null
    /**
     * Filter, which memoriacalculoitem to fetch.
     */
    where: memoriacalculoitemWhereUniqueInput
  }

  /**
   * memoriacalculoitem findUniqueOrThrow
   */
  export type memoriacalculoitemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memoriacalculoitem
     */
    select?: memoriacalculoitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memoriacalculoitem
     */
    omit?: memoriacalculoitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memoriacalculoitemInclude<ExtArgs> | null
    /**
     * Filter, which memoriacalculoitem to fetch.
     */
    where: memoriacalculoitemWhereUniqueInput
  }

  /**
   * memoriacalculoitem findFirst
   */
  export type memoriacalculoitemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memoriacalculoitem
     */
    select?: memoriacalculoitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memoriacalculoitem
     */
    omit?: memoriacalculoitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memoriacalculoitemInclude<ExtArgs> | null
    /**
     * Filter, which memoriacalculoitem to fetch.
     */
    where?: memoriacalculoitemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of memoriacalculoitems to fetch.
     */
    orderBy?: memoriacalculoitemOrderByWithRelationInput | memoriacalculoitemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for memoriacalculoitems.
     */
    cursor?: memoriacalculoitemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` memoriacalculoitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` memoriacalculoitems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of memoriacalculoitems.
     */
    distinct?: MemoriacalculoitemScalarFieldEnum | MemoriacalculoitemScalarFieldEnum[]
  }

  /**
   * memoriacalculoitem findFirstOrThrow
   */
  export type memoriacalculoitemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memoriacalculoitem
     */
    select?: memoriacalculoitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memoriacalculoitem
     */
    omit?: memoriacalculoitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memoriacalculoitemInclude<ExtArgs> | null
    /**
     * Filter, which memoriacalculoitem to fetch.
     */
    where?: memoriacalculoitemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of memoriacalculoitems to fetch.
     */
    orderBy?: memoriacalculoitemOrderByWithRelationInput | memoriacalculoitemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for memoriacalculoitems.
     */
    cursor?: memoriacalculoitemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` memoriacalculoitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` memoriacalculoitems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of memoriacalculoitems.
     */
    distinct?: MemoriacalculoitemScalarFieldEnum | MemoriacalculoitemScalarFieldEnum[]
  }

  /**
   * memoriacalculoitem findMany
   */
  export type memoriacalculoitemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memoriacalculoitem
     */
    select?: memoriacalculoitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memoriacalculoitem
     */
    omit?: memoriacalculoitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memoriacalculoitemInclude<ExtArgs> | null
    /**
     * Filter, which memoriacalculoitems to fetch.
     */
    where?: memoriacalculoitemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of memoriacalculoitems to fetch.
     */
    orderBy?: memoriacalculoitemOrderByWithRelationInput | memoriacalculoitemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing memoriacalculoitems.
     */
    cursor?: memoriacalculoitemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` memoriacalculoitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` memoriacalculoitems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of memoriacalculoitems.
     */
    distinct?: MemoriacalculoitemScalarFieldEnum | MemoriacalculoitemScalarFieldEnum[]
  }

  /**
   * memoriacalculoitem create
   */
  export type memoriacalculoitemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memoriacalculoitem
     */
    select?: memoriacalculoitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memoriacalculoitem
     */
    omit?: memoriacalculoitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memoriacalculoitemInclude<ExtArgs> | null
    /**
     * The data needed to create a memoriacalculoitem.
     */
    data: XOR<memoriacalculoitemCreateInput, memoriacalculoitemUncheckedCreateInput>
  }

  /**
   * memoriacalculoitem createMany
   */
  export type memoriacalculoitemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many memoriacalculoitems.
     */
    data: memoriacalculoitemCreateManyInput | memoriacalculoitemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * memoriacalculoitem update
   */
  export type memoriacalculoitemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memoriacalculoitem
     */
    select?: memoriacalculoitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memoriacalculoitem
     */
    omit?: memoriacalculoitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memoriacalculoitemInclude<ExtArgs> | null
    /**
     * The data needed to update a memoriacalculoitem.
     */
    data: XOR<memoriacalculoitemUpdateInput, memoriacalculoitemUncheckedUpdateInput>
    /**
     * Choose, which memoriacalculoitem to update.
     */
    where: memoriacalculoitemWhereUniqueInput
  }

  /**
   * memoriacalculoitem updateMany
   */
  export type memoriacalculoitemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update memoriacalculoitems.
     */
    data: XOR<memoriacalculoitemUpdateManyMutationInput, memoriacalculoitemUncheckedUpdateManyInput>
    /**
     * Filter which memoriacalculoitems to update
     */
    where?: memoriacalculoitemWhereInput
    /**
     * Limit how many memoriacalculoitems to update.
     */
    limit?: number
  }

  /**
   * memoriacalculoitem upsert
   */
  export type memoriacalculoitemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memoriacalculoitem
     */
    select?: memoriacalculoitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memoriacalculoitem
     */
    omit?: memoriacalculoitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memoriacalculoitemInclude<ExtArgs> | null
    /**
     * The filter to search for the memoriacalculoitem to update in case it exists.
     */
    where: memoriacalculoitemWhereUniqueInput
    /**
     * In case the memoriacalculoitem found by the `where` argument doesn't exist, create a new memoriacalculoitem with this data.
     */
    create: XOR<memoriacalculoitemCreateInput, memoriacalculoitemUncheckedCreateInput>
    /**
     * In case the memoriacalculoitem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<memoriacalculoitemUpdateInput, memoriacalculoitemUncheckedUpdateInput>
  }

  /**
   * memoriacalculoitem delete
   */
  export type memoriacalculoitemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memoriacalculoitem
     */
    select?: memoriacalculoitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memoriacalculoitem
     */
    omit?: memoriacalculoitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memoriacalculoitemInclude<ExtArgs> | null
    /**
     * Filter which memoriacalculoitem to delete.
     */
    where: memoriacalculoitemWhereUniqueInput
  }

  /**
   * memoriacalculoitem deleteMany
   */
  export type memoriacalculoitemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which memoriacalculoitems to delete
     */
    where?: memoriacalculoitemWhereInput
    /**
     * Limit how many memoriacalculoitems to delete.
     */
    limit?: number
  }

  /**
   * memoriacalculoitem without action
   */
  export type memoriacalculoitemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memoriacalculoitem
     */
    select?: memoriacalculoitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memoriacalculoitem
     */
    omit?: memoriacalculoitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memoriacalculoitemInclude<ExtArgs> | null
  }


  /**
   * Model despesa
   */

  export type AggregateDespesa = {
    _count: DespesaCountAggregateOutputType | null
    _avg: DespesaAvgAggregateOutputType | null
    _sum: DespesaSumAggregateOutputType | null
    _min: DespesaMinAggregateOutputType | null
    _max: DespesaMaxAggregateOutputType | null
  }

  export type DespesaAvgAggregateOutputType = {
    id: number | null
    idContratoLocacao: number | null
    valor: Decimal | null
  }

  export type DespesaSumAggregateOutputType = {
    id: bigint | null
    idContratoLocacao: bigint | null
    valor: Decimal | null
  }

  export type DespesaMinAggregateOutputType = {
    id: bigint | null
    idContratoLocacao: bigint | null
    descricao: string | null
    valor: Decimal | null
    tipo: $Enums.tipo_despesa_enum | null
    dataVencimento: Date | null
    dataPagamento: Date | null
    status: $Enums.status_despesa_enum | null
    comprovantePagamento: Bytes | null
  }

  export type DespesaMaxAggregateOutputType = {
    id: bigint | null
    idContratoLocacao: bigint | null
    descricao: string | null
    valor: Decimal | null
    tipo: $Enums.tipo_despesa_enum | null
    dataVencimento: Date | null
    dataPagamento: Date | null
    status: $Enums.status_despesa_enum | null
    comprovantePagamento: Bytes | null
  }

  export type DespesaCountAggregateOutputType = {
    id: number
    idContratoLocacao: number
    descricao: number
    valor: number
    tipo: number
    dataVencimento: number
    dataPagamento: number
    status: number
    comprovantePagamento: number
    _all: number
  }


  export type DespesaAvgAggregateInputType = {
    id?: true
    idContratoLocacao?: true
    valor?: true
  }

  export type DespesaSumAggregateInputType = {
    id?: true
    idContratoLocacao?: true
    valor?: true
  }

  export type DespesaMinAggregateInputType = {
    id?: true
    idContratoLocacao?: true
    descricao?: true
    valor?: true
    tipo?: true
    dataVencimento?: true
    dataPagamento?: true
    status?: true
    comprovantePagamento?: true
  }

  export type DespesaMaxAggregateInputType = {
    id?: true
    idContratoLocacao?: true
    descricao?: true
    valor?: true
    tipo?: true
    dataVencimento?: true
    dataPagamento?: true
    status?: true
    comprovantePagamento?: true
  }

  export type DespesaCountAggregateInputType = {
    id?: true
    idContratoLocacao?: true
    descricao?: true
    valor?: true
    tipo?: true
    dataVencimento?: true
    dataPagamento?: true
    status?: true
    comprovantePagamento?: true
    _all?: true
  }

  export type DespesaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which despesa to aggregate.
     */
    where?: despesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of despesas to fetch.
     */
    orderBy?: despesaOrderByWithRelationInput | despesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: despesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` despesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` despesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned despesas
    **/
    _count?: true | DespesaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DespesaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DespesaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DespesaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DespesaMaxAggregateInputType
  }

  export type GetDespesaAggregateType<T extends DespesaAggregateArgs> = {
        [P in keyof T & keyof AggregateDespesa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDespesa[P]>
      : GetScalarType<T[P], AggregateDespesa[P]>
  }




  export type despesaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: despesaWhereInput
    orderBy?: despesaOrderByWithAggregationInput | despesaOrderByWithAggregationInput[]
    by: DespesaScalarFieldEnum[] | DespesaScalarFieldEnum
    having?: despesaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DespesaCountAggregateInputType | true
    _avg?: DespesaAvgAggregateInputType
    _sum?: DespesaSumAggregateInputType
    _min?: DespesaMinAggregateInputType
    _max?: DespesaMaxAggregateInputType
  }

  export type DespesaGroupByOutputType = {
    id: bigint
    idContratoLocacao: bigint
    descricao: string
    valor: Decimal
    tipo: $Enums.tipo_despesa_enum
    dataVencimento: Date
    dataPagamento: Date | null
    status: $Enums.status_despesa_enum
    comprovantePagamento: Bytes | null
    _count: DespesaCountAggregateOutputType | null
    _avg: DespesaAvgAggregateOutputType | null
    _sum: DespesaSumAggregateOutputType | null
    _min: DespesaMinAggregateOutputType | null
    _max: DespesaMaxAggregateOutputType | null
  }

  type GetDespesaGroupByPayload<T extends despesaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DespesaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DespesaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DespesaGroupByOutputType[P]>
            : GetScalarType<T[P], DespesaGroupByOutputType[P]>
        }
      >
    >


  export type despesaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idContratoLocacao?: boolean
    descricao?: boolean
    valor?: boolean
    tipo?: boolean
    dataVencimento?: boolean
    dataPagamento?: boolean
    status?: boolean
    comprovantePagamento?: boolean
    contratolocacao?: boolean | contratolocacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["despesa"]>



  export type despesaSelectScalar = {
    id?: boolean
    idContratoLocacao?: boolean
    descricao?: boolean
    valor?: boolean
    tipo?: boolean
    dataVencimento?: boolean
    dataPagamento?: boolean
    status?: boolean
    comprovantePagamento?: boolean
  }

  export type despesaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idContratoLocacao" | "descricao" | "valor" | "tipo" | "dataVencimento" | "dataPagamento" | "status" | "comprovantePagamento", ExtArgs["result"]["despesa"]>
  export type despesaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contratolocacao?: boolean | contratolocacaoDefaultArgs<ExtArgs>
  }

  export type $despesaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "despesa"
    objects: {
      contratolocacao: Prisma.$contratolocacaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      idContratoLocacao: bigint
      descricao: string
      valor: Prisma.Decimal
      tipo: $Enums.tipo_despesa_enum
      dataVencimento: Date
      dataPagamento: Date | null
      status: $Enums.status_despesa_enum
      comprovantePagamento: Prisma.Bytes | null
    }, ExtArgs["result"]["despesa"]>
    composites: {}
  }

  type despesaGetPayload<S extends boolean | null | undefined | despesaDefaultArgs> = $Result.GetResult<Prisma.$despesaPayload, S>

  type despesaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<despesaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DespesaCountAggregateInputType | true
    }

  export interface despesaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['despesa'], meta: { name: 'despesa' } }
    /**
     * Find zero or one Despesa that matches the filter.
     * @param {despesaFindUniqueArgs} args - Arguments to find a Despesa
     * @example
     * // Get one Despesa
     * const despesa = await prisma.despesa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends despesaFindUniqueArgs>(args: SelectSubset<T, despesaFindUniqueArgs<ExtArgs>>): Prisma__despesaClient<$Result.GetResult<Prisma.$despesaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Despesa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {despesaFindUniqueOrThrowArgs} args - Arguments to find a Despesa
     * @example
     * // Get one Despesa
     * const despesa = await prisma.despesa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends despesaFindUniqueOrThrowArgs>(args: SelectSubset<T, despesaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__despesaClient<$Result.GetResult<Prisma.$despesaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Despesa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {despesaFindFirstArgs} args - Arguments to find a Despesa
     * @example
     * // Get one Despesa
     * const despesa = await prisma.despesa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends despesaFindFirstArgs>(args?: SelectSubset<T, despesaFindFirstArgs<ExtArgs>>): Prisma__despesaClient<$Result.GetResult<Prisma.$despesaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Despesa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {despesaFindFirstOrThrowArgs} args - Arguments to find a Despesa
     * @example
     * // Get one Despesa
     * const despesa = await prisma.despesa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends despesaFindFirstOrThrowArgs>(args?: SelectSubset<T, despesaFindFirstOrThrowArgs<ExtArgs>>): Prisma__despesaClient<$Result.GetResult<Prisma.$despesaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Despesas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {despesaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Despesas
     * const despesas = await prisma.despesa.findMany()
     * 
     * // Get first 10 Despesas
     * const despesas = await prisma.despesa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const despesaWithIdOnly = await prisma.despesa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends despesaFindManyArgs>(args?: SelectSubset<T, despesaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$despesaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Despesa.
     * @param {despesaCreateArgs} args - Arguments to create a Despesa.
     * @example
     * // Create one Despesa
     * const Despesa = await prisma.despesa.create({
     *   data: {
     *     // ... data to create a Despesa
     *   }
     * })
     * 
     */
    create<T extends despesaCreateArgs>(args: SelectSubset<T, despesaCreateArgs<ExtArgs>>): Prisma__despesaClient<$Result.GetResult<Prisma.$despesaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Despesas.
     * @param {despesaCreateManyArgs} args - Arguments to create many Despesas.
     * @example
     * // Create many Despesas
     * const despesa = await prisma.despesa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends despesaCreateManyArgs>(args?: SelectSubset<T, despesaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Despesa.
     * @param {despesaDeleteArgs} args - Arguments to delete one Despesa.
     * @example
     * // Delete one Despesa
     * const Despesa = await prisma.despesa.delete({
     *   where: {
     *     // ... filter to delete one Despesa
     *   }
     * })
     * 
     */
    delete<T extends despesaDeleteArgs>(args: SelectSubset<T, despesaDeleteArgs<ExtArgs>>): Prisma__despesaClient<$Result.GetResult<Prisma.$despesaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Despesa.
     * @param {despesaUpdateArgs} args - Arguments to update one Despesa.
     * @example
     * // Update one Despesa
     * const despesa = await prisma.despesa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends despesaUpdateArgs>(args: SelectSubset<T, despesaUpdateArgs<ExtArgs>>): Prisma__despesaClient<$Result.GetResult<Prisma.$despesaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Despesas.
     * @param {despesaDeleteManyArgs} args - Arguments to filter Despesas to delete.
     * @example
     * // Delete a few Despesas
     * const { count } = await prisma.despesa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends despesaDeleteManyArgs>(args?: SelectSubset<T, despesaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Despesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {despesaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Despesas
     * const despesa = await prisma.despesa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends despesaUpdateManyArgs>(args: SelectSubset<T, despesaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Despesa.
     * @param {despesaUpsertArgs} args - Arguments to update or create a Despesa.
     * @example
     * // Update or create a Despesa
     * const despesa = await prisma.despesa.upsert({
     *   create: {
     *     // ... data to create a Despesa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Despesa we want to update
     *   }
     * })
     */
    upsert<T extends despesaUpsertArgs>(args: SelectSubset<T, despesaUpsertArgs<ExtArgs>>): Prisma__despesaClient<$Result.GetResult<Prisma.$despesaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Despesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {despesaCountArgs} args - Arguments to filter Despesas to count.
     * @example
     * // Count the number of Despesas
     * const count = await prisma.despesa.count({
     *   where: {
     *     // ... the filter for the Despesas we want to count
     *   }
     * })
    **/
    count<T extends despesaCountArgs>(
      args?: Subset<T, despesaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DespesaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Despesa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DespesaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DespesaAggregateArgs>(args: Subset<T, DespesaAggregateArgs>): Prisma.PrismaPromise<GetDespesaAggregateType<T>>

    /**
     * Group by Despesa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {despesaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends despesaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: despesaGroupByArgs['orderBy'] }
        : { orderBy?: despesaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, despesaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDespesaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the despesa model
   */
  readonly fields: despesaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for despesa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__despesaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contratolocacao<T extends contratolocacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, contratolocacaoDefaultArgs<ExtArgs>>): Prisma__contratolocacaoClient<$Result.GetResult<Prisma.$contratolocacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the despesa model
   */
  interface despesaFieldRefs {
    readonly id: FieldRef<"despesa", 'BigInt'>
    readonly idContratoLocacao: FieldRef<"despesa", 'BigInt'>
    readonly descricao: FieldRef<"despesa", 'String'>
    readonly valor: FieldRef<"despesa", 'Decimal'>
    readonly tipo: FieldRef<"despesa", 'tipo_despesa_enum'>
    readonly dataVencimento: FieldRef<"despesa", 'DateTime'>
    readonly dataPagamento: FieldRef<"despesa", 'DateTime'>
    readonly status: FieldRef<"despesa", 'status_despesa_enum'>
    readonly comprovantePagamento: FieldRef<"despesa", 'Bytes'>
  }
    

  // Custom InputTypes
  /**
   * despesa findUnique
   */
  export type despesaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the despesa
     */
    select?: despesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the despesa
     */
    omit?: despesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: despesaInclude<ExtArgs> | null
    /**
     * Filter, which despesa to fetch.
     */
    where: despesaWhereUniqueInput
  }

  /**
   * despesa findUniqueOrThrow
   */
  export type despesaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the despesa
     */
    select?: despesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the despesa
     */
    omit?: despesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: despesaInclude<ExtArgs> | null
    /**
     * Filter, which despesa to fetch.
     */
    where: despesaWhereUniqueInput
  }

  /**
   * despesa findFirst
   */
  export type despesaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the despesa
     */
    select?: despesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the despesa
     */
    omit?: despesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: despesaInclude<ExtArgs> | null
    /**
     * Filter, which despesa to fetch.
     */
    where?: despesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of despesas to fetch.
     */
    orderBy?: despesaOrderByWithRelationInput | despesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for despesas.
     */
    cursor?: despesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` despesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` despesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of despesas.
     */
    distinct?: DespesaScalarFieldEnum | DespesaScalarFieldEnum[]
  }

  /**
   * despesa findFirstOrThrow
   */
  export type despesaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the despesa
     */
    select?: despesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the despesa
     */
    omit?: despesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: despesaInclude<ExtArgs> | null
    /**
     * Filter, which despesa to fetch.
     */
    where?: despesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of despesas to fetch.
     */
    orderBy?: despesaOrderByWithRelationInput | despesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for despesas.
     */
    cursor?: despesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` despesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` despesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of despesas.
     */
    distinct?: DespesaScalarFieldEnum | DespesaScalarFieldEnum[]
  }

  /**
   * despesa findMany
   */
  export type despesaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the despesa
     */
    select?: despesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the despesa
     */
    omit?: despesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: despesaInclude<ExtArgs> | null
    /**
     * Filter, which despesas to fetch.
     */
    where?: despesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of despesas to fetch.
     */
    orderBy?: despesaOrderByWithRelationInput | despesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing despesas.
     */
    cursor?: despesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` despesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` despesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of despesas.
     */
    distinct?: DespesaScalarFieldEnum | DespesaScalarFieldEnum[]
  }

  /**
   * despesa create
   */
  export type despesaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the despesa
     */
    select?: despesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the despesa
     */
    omit?: despesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: despesaInclude<ExtArgs> | null
    /**
     * The data needed to create a despesa.
     */
    data: XOR<despesaCreateInput, despesaUncheckedCreateInput>
  }

  /**
   * despesa createMany
   */
  export type despesaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many despesas.
     */
    data: despesaCreateManyInput | despesaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * despesa update
   */
  export type despesaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the despesa
     */
    select?: despesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the despesa
     */
    omit?: despesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: despesaInclude<ExtArgs> | null
    /**
     * The data needed to update a despesa.
     */
    data: XOR<despesaUpdateInput, despesaUncheckedUpdateInput>
    /**
     * Choose, which despesa to update.
     */
    where: despesaWhereUniqueInput
  }

  /**
   * despesa updateMany
   */
  export type despesaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update despesas.
     */
    data: XOR<despesaUpdateManyMutationInput, despesaUncheckedUpdateManyInput>
    /**
     * Filter which despesas to update
     */
    where?: despesaWhereInput
    /**
     * Limit how many despesas to update.
     */
    limit?: number
  }

  /**
   * despesa upsert
   */
  export type despesaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the despesa
     */
    select?: despesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the despesa
     */
    omit?: despesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: despesaInclude<ExtArgs> | null
    /**
     * The filter to search for the despesa to update in case it exists.
     */
    where: despesaWhereUniqueInput
    /**
     * In case the despesa found by the `where` argument doesn't exist, create a new despesa with this data.
     */
    create: XOR<despesaCreateInput, despesaUncheckedCreateInput>
    /**
     * In case the despesa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<despesaUpdateInput, despesaUncheckedUpdateInput>
  }

  /**
   * despesa delete
   */
  export type despesaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the despesa
     */
    select?: despesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the despesa
     */
    omit?: despesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: despesaInclude<ExtArgs> | null
    /**
     * Filter which despesa to delete.
     */
    where: despesaWhereUniqueInput
  }

  /**
   * despesa deleteMany
   */
  export type despesaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which despesas to delete
     */
    where?: despesaWhereInput
    /**
     * Limit how many despesas to delete.
     */
    limit?: number
  }

  /**
   * despesa without action
   */
  export type despesaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the despesa
     */
    select?: despesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the despesa
     */
    omit?: despesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: despesaInclude<ExtArgs> | null
  }


  /**
   * Model tabelairrf
   */

  export type AggregateTabelairrf = {
    _count: TabelairrfCountAggregateOutputType | null
    _avg: TabelairrfAvgAggregateOutputType | null
    _sum: TabelairrfSumAggregateOutputType | null
    _min: TabelairrfMinAggregateOutputType | null
    _max: TabelairrfMaxAggregateOutputType | null
  }

  export type TabelairrfAvgAggregateOutputType = {
    id: number | null
    deducaoDependente: Decimal | null
    redutorLimiteIsencao: Decimal | null
    redutorLimiteSuperior: Decimal | null
    redutorConstante: Decimal | null
    redutorCoeficiente: Decimal | null
  }

  export type TabelairrfSumAggregateOutputType = {
    id: number | null
    deducaoDependente: Decimal | null
    redutorLimiteIsencao: Decimal | null
    redutorLimiteSuperior: Decimal | null
    redutorConstante: Decimal | null
    redutorCoeficiente: Decimal | null
  }

  export type TabelairrfMinAggregateOutputType = {
    id: number | null
    vigenciaInicio: Date | null
    descricao: string | null
    deducaoDependente: Decimal | null
    redutorLimiteIsencao: Decimal | null
    redutorLimiteSuperior: Decimal | null
    redutorConstante: Decimal | null
    redutorCoeficiente: Decimal | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type TabelairrfMaxAggregateOutputType = {
    id: number | null
    vigenciaInicio: Date | null
    descricao: string | null
    deducaoDependente: Decimal | null
    redutorLimiteIsencao: Decimal | null
    redutorLimiteSuperior: Decimal | null
    redutorConstante: Decimal | null
    redutorCoeficiente: Decimal | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type TabelairrfCountAggregateOutputType = {
    id: number
    vigenciaInicio: number
    descricao: number
    deducaoDependente: number
    redutorLimiteIsencao: number
    redutorLimiteSuperior: number
    redutorConstante: number
    redutorCoeficiente: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type TabelairrfAvgAggregateInputType = {
    id?: true
    deducaoDependente?: true
    redutorLimiteIsencao?: true
    redutorLimiteSuperior?: true
    redutorConstante?: true
    redutorCoeficiente?: true
  }

  export type TabelairrfSumAggregateInputType = {
    id?: true
    deducaoDependente?: true
    redutorLimiteIsencao?: true
    redutorLimiteSuperior?: true
    redutorConstante?: true
    redutorCoeficiente?: true
  }

  export type TabelairrfMinAggregateInputType = {
    id?: true
    vigenciaInicio?: true
    descricao?: true
    deducaoDependente?: true
    redutorLimiteIsencao?: true
    redutorLimiteSuperior?: true
    redutorConstante?: true
    redutorCoeficiente?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type TabelairrfMaxAggregateInputType = {
    id?: true
    vigenciaInicio?: true
    descricao?: true
    deducaoDependente?: true
    redutorLimiteIsencao?: true
    redutorLimiteSuperior?: true
    redutorConstante?: true
    redutorCoeficiente?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type TabelairrfCountAggregateInputType = {
    id?: true
    vigenciaInicio?: true
    descricao?: true
    deducaoDependente?: true
    redutorLimiteIsencao?: true
    redutorLimiteSuperior?: true
    redutorConstante?: true
    redutorCoeficiente?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type TabelairrfAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tabelairrf to aggregate.
     */
    where?: tabelairrfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tabelairrfs to fetch.
     */
    orderBy?: tabelairrfOrderByWithRelationInput | tabelairrfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tabelairrfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tabelairrfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tabelairrfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tabelairrfs
    **/
    _count?: true | TabelairrfCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TabelairrfAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TabelairrfSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TabelairrfMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TabelairrfMaxAggregateInputType
  }

  export type GetTabelairrfAggregateType<T extends TabelairrfAggregateArgs> = {
        [P in keyof T & keyof AggregateTabelairrf]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTabelairrf[P]>
      : GetScalarType<T[P], AggregateTabelairrf[P]>
  }




  export type tabelairrfGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tabelairrfWhereInput
    orderBy?: tabelairrfOrderByWithAggregationInput | tabelairrfOrderByWithAggregationInput[]
    by: TabelairrfScalarFieldEnum[] | TabelairrfScalarFieldEnum
    having?: tabelairrfScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TabelairrfCountAggregateInputType | true
    _avg?: TabelairrfAvgAggregateInputType
    _sum?: TabelairrfSumAggregateInputType
    _min?: TabelairrfMinAggregateInputType
    _max?: TabelairrfMaxAggregateInputType
  }

  export type TabelairrfGroupByOutputType = {
    id: number
    vigenciaInicio: Date
    descricao: string | null
    deducaoDependente: Decimal
    redutorLimiteIsencao: Decimal | null
    redutorLimiteSuperior: Decimal | null
    redutorConstante: Decimal | null
    redutorCoeficiente: Decimal | null
    criadoEm: Date
    atualizadoEm: Date
    _count: TabelairrfCountAggregateOutputType | null
    _avg: TabelairrfAvgAggregateOutputType | null
    _sum: TabelairrfSumAggregateOutputType | null
    _min: TabelairrfMinAggregateOutputType | null
    _max: TabelairrfMaxAggregateOutputType | null
  }

  type GetTabelairrfGroupByPayload<T extends tabelairrfGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TabelairrfGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TabelairrfGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TabelairrfGroupByOutputType[P]>
            : GetScalarType<T[P], TabelairrfGroupByOutputType[P]>
        }
      >
    >


  export type tabelairrfSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vigenciaInicio?: boolean
    descricao?: boolean
    deducaoDependente?: boolean
    redutorLimiteIsencao?: boolean
    redutorLimiteSuperior?: boolean
    redutorConstante?: boolean
    redutorCoeficiente?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    faixairrf?: boolean | tabelairrf$faixairrfArgs<ExtArgs>
    _count?: boolean | TabelairrfCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tabelairrf"]>



  export type tabelairrfSelectScalar = {
    id?: boolean
    vigenciaInicio?: boolean
    descricao?: boolean
    deducaoDependente?: boolean
    redutorLimiteIsencao?: boolean
    redutorLimiteSuperior?: boolean
    redutorConstante?: boolean
    redutorCoeficiente?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type tabelairrfOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vigenciaInicio" | "descricao" | "deducaoDependente" | "redutorLimiteIsencao" | "redutorLimiteSuperior" | "redutorConstante" | "redutorCoeficiente" | "criadoEm" | "atualizadoEm", ExtArgs["result"]["tabelairrf"]>
  export type tabelairrfInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faixairrf?: boolean | tabelairrf$faixairrfArgs<ExtArgs>
    _count?: boolean | TabelairrfCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tabelairrfPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tabelairrf"
    objects: {
      faixairrf: Prisma.$faixairrfPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      vigenciaInicio: Date
      descricao: string | null
      deducaoDependente: Prisma.Decimal
      redutorLimiteIsencao: Prisma.Decimal | null
      redutorLimiteSuperior: Prisma.Decimal | null
      redutorConstante: Prisma.Decimal | null
      redutorCoeficiente: Prisma.Decimal | null
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["tabelairrf"]>
    composites: {}
  }

  type tabelairrfGetPayload<S extends boolean | null | undefined | tabelairrfDefaultArgs> = $Result.GetResult<Prisma.$tabelairrfPayload, S>

  type tabelairrfCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tabelairrfFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TabelairrfCountAggregateInputType | true
    }

  export interface tabelairrfDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tabelairrf'], meta: { name: 'tabelairrf' } }
    /**
     * Find zero or one Tabelairrf that matches the filter.
     * @param {tabelairrfFindUniqueArgs} args - Arguments to find a Tabelairrf
     * @example
     * // Get one Tabelairrf
     * const tabelairrf = await prisma.tabelairrf.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tabelairrfFindUniqueArgs>(args: SelectSubset<T, tabelairrfFindUniqueArgs<ExtArgs>>): Prisma__tabelairrfClient<$Result.GetResult<Prisma.$tabelairrfPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tabelairrf that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tabelairrfFindUniqueOrThrowArgs} args - Arguments to find a Tabelairrf
     * @example
     * // Get one Tabelairrf
     * const tabelairrf = await prisma.tabelairrf.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tabelairrfFindUniqueOrThrowArgs>(args: SelectSubset<T, tabelairrfFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tabelairrfClient<$Result.GetResult<Prisma.$tabelairrfPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tabelairrf that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tabelairrfFindFirstArgs} args - Arguments to find a Tabelairrf
     * @example
     * // Get one Tabelairrf
     * const tabelairrf = await prisma.tabelairrf.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tabelairrfFindFirstArgs>(args?: SelectSubset<T, tabelairrfFindFirstArgs<ExtArgs>>): Prisma__tabelairrfClient<$Result.GetResult<Prisma.$tabelairrfPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tabelairrf that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tabelairrfFindFirstOrThrowArgs} args - Arguments to find a Tabelairrf
     * @example
     * // Get one Tabelairrf
     * const tabelairrf = await prisma.tabelairrf.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tabelairrfFindFirstOrThrowArgs>(args?: SelectSubset<T, tabelairrfFindFirstOrThrowArgs<ExtArgs>>): Prisma__tabelairrfClient<$Result.GetResult<Prisma.$tabelairrfPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tabelairrfs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tabelairrfFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tabelairrfs
     * const tabelairrfs = await prisma.tabelairrf.findMany()
     * 
     * // Get first 10 Tabelairrfs
     * const tabelairrfs = await prisma.tabelairrf.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tabelairrfWithIdOnly = await prisma.tabelairrf.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tabelairrfFindManyArgs>(args?: SelectSubset<T, tabelairrfFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tabelairrfPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tabelairrf.
     * @param {tabelairrfCreateArgs} args - Arguments to create a Tabelairrf.
     * @example
     * // Create one Tabelairrf
     * const Tabelairrf = await prisma.tabelairrf.create({
     *   data: {
     *     // ... data to create a Tabelairrf
     *   }
     * })
     * 
     */
    create<T extends tabelairrfCreateArgs>(args: SelectSubset<T, tabelairrfCreateArgs<ExtArgs>>): Prisma__tabelairrfClient<$Result.GetResult<Prisma.$tabelairrfPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tabelairrfs.
     * @param {tabelairrfCreateManyArgs} args - Arguments to create many Tabelairrfs.
     * @example
     * // Create many Tabelairrfs
     * const tabelairrf = await prisma.tabelairrf.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tabelairrfCreateManyArgs>(args?: SelectSubset<T, tabelairrfCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tabelairrf.
     * @param {tabelairrfDeleteArgs} args - Arguments to delete one Tabelairrf.
     * @example
     * // Delete one Tabelairrf
     * const Tabelairrf = await prisma.tabelairrf.delete({
     *   where: {
     *     // ... filter to delete one Tabelairrf
     *   }
     * })
     * 
     */
    delete<T extends tabelairrfDeleteArgs>(args: SelectSubset<T, tabelairrfDeleteArgs<ExtArgs>>): Prisma__tabelairrfClient<$Result.GetResult<Prisma.$tabelairrfPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tabelairrf.
     * @param {tabelairrfUpdateArgs} args - Arguments to update one Tabelairrf.
     * @example
     * // Update one Tabelairrf
     * const tabelairrf = await prisma.tabelairrf.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tabelairrfUpdateArgs>(args: SelectSubset<T, tabelairrfUpdateArgs<ExtArgs>>): Prisma__tabelairrfClient<$Result.GetResult<Prisma.$tabelairrfPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tabelairrfs.
     * @param {tabelairrfDeleteManyArgs} args - Arguments to filter Tabelairrfs to delete.
     * @example
     * // Delete a few Tabelairrfs
     * const { count } = await prisma.tabelairrf.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tabelairrfDeleteManyArgs>(args?: SelectSubset<T, tabelairrfDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tabelairrfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tabelairrfUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tabelairrfs
     * const tabelairrf = await prisma.tabelairrf.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tabelairrfUpdateManyArgs>(args: SelectSubset<T, tabelairrfUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tabelairrf.
     * @param {tabelairrfUpsertArgs} args - Arguments to update or create a Tabelairrf.
     * @example
     * // Update or create a Tabelairrf
     * const tabelairrf = await prisma.tabelairrf.upsert({
     *   create: {
     *     // ... data to create a Tabelairrf
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tabelairrf we want to update
     *   }
     * })
     */
    upsert<T extends tabelairrfUpsertArgs>(args: SelectSubset<T, tabelairrfUpsertArgs<ExtArgs>>): Prisma__tabelairrfClient<$Result.GetResult<Prisma.$tabelairrfPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tabelairrfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tabelairrfCountArgs} args - Arguments to filter Tabelairrfs to count.
     * @example
     * // Count the number of Tabelairrfs
     * const count = await prisma.tabelairrf.count({
     *   where: {
     *     // ... the filter for the Tabelairrfs we want to count
     *   }
     * })
    **/
    count<T extends tabelairrfCountArgs>(
      args?: Subset<T, tabelairrfCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TabelairrfCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tabelairrf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TabelairrfAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TabelairrfAggregateArgs>(args: Subset<T, TabelairrfAggregateArgs>): Prisma.PrismaPromise<GetTabelairrfAggregateType<T>>

    /**
     * Group by Tabelairrf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tabelairrfGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tabelairrfGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tabelairrfGroupByArgs['orderBy'] }
        : { orderBy?: tabelairrfGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tabelairrfGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTabelairrfGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tabelairrf model
   */
  readonly fields: tabelairrfFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tabelairrf.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tabelairrfClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    faixairrf<T extends tabelairrf$faixairrfArgs<ExtArgs> = {}>(args?: Subset<T, tabelairrf$faixairrfArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$faixairrfPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tabelairrf model
   */
  interface tabelairrfFieldRefs {
    readonly id: FieldRef<"tabelairrf", 'Int'>
    readonly vigenciaInicio: FieldRef<"tabelairrf", 'DateTime'>
    readonly descricao: FieldRef<"tabelairrf", 'String'>
    readonly deducaoDependente: FieldRef<"tabelairrf", 'Decimal'>
    readonly redutorLimiteIsencao: FieldRef<"tabelairrf", 'Decimal'>
    readonly redutorLimiteSuperior: FieldRef<"tabelairrf", 'Decimal'>
    readonly redutorConstante: FieldRef<"tabelairrf", 'Decimal'>
    readonly redutorCoeficiente: FieldRef<"tabelairrf", 'Decimal'>
    readonly criadoEm: FieldRef<"tabelairrf", 'DateTime'>
    readonly atualizadoEm: FieldRef<"tabelairrf", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tabelairrf findUnique
   */
  export type tabelairrfFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tabelairrf
     */
    select?: tabelairrfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tabelairrf
     */
    omit?: tabelairrfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tabelairrfInclude<ExtArgs> | null
    /**
     * Filter, which tabelairrf to fetch.
     */
    where: tabelairrfWhereUniqueInput
  }

  /**
   * tabelairrf findUniqueOrThrow
   */
  export type tabelairrfFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tabelairrf
     */
    select?: tabelairrfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tabelairrf
     */
    omit?: tabelairrfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tabelairrfInclude<ExtArgs> | null
    /**
     * Filter, which tabelairrf to fetch.
     */
    where: tabelairrfWhereUniqueInput
  }

  /**
   * tabelairrf findFirst
   */
  export type tabelairrfFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tabelairrf
     */
    select?: tabelairrfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tabelairrf
     */
    omit?: tabelairrfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tabelairrfInclude<ExtArgs> | null
    /**
     * Filter, which tabelairrf to fetch.
     */
    where?: tabelairrfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tabelairrfs to fetch.
     */
    orderBy?: tabelairrfOrderByWithRelationInput | tabelairrfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tabelairrfs.
     */
    cursor?: tabelairrfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tabelairrfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tabelairrfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tabelairrfs.
     */
    distinct?: TabelairrfScalarFieldEnum | TabelairrfScalarFieldEnum[]
  }

  /**
   * tabelairrf findFirstOrThrow
   */
  export type tabelairrfFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tabelairrf
     */
    select?: tabelairrfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tabelairrf
     */
    omit?: tabelairrfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tabelairrfInclude<ExtArgs> | null
    /**
     * Filter, which tabelairrf to fetch.
     */
    where?: tabelairrfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tabelairrfs to fetch.
     */
    orderBy?: tabelairrfOrderByWithRelationInput | tabelairrfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tabelairrfs.
     */
    cursor?: tabelairrfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tabelairrfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tabelairrfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tabelairrfs.
     */
    distinct?: TabelairrfScalarFieldEnum | TabelairrfScalarFieldEnum[]
  }

  /**
   * tabelairrf findMany
   */
  export type tabelairrfFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tabelairrf
     */
    select?: tabelairrfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tabelairrf
     */
    omit?: tabelairrfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tabelairrfInclude<ExtArgs> | null
    /**
     * Filter, which tabelairrfs to fetch.
     */
    where?: tabelairrfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tabelairrfs to fetch.
     */
    orderBy?: tabelairrfOrderByWithRelationInput | tabelairrfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tabelairrfs.
     */
    cursor?: tabelairrfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tabelairrfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tabelairrfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tabelairrfs.
     */
    distinct?: TabelairrfScalarFieldEnum | TabelairrfScalarFieldEnum[]
  }

  /**
   * tabelairrf create
   */
  export type tabelairrfCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tabelairrf
     */
    select?: tabelairrfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tabelairrf
     */
    omit?: tabelairrfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tabelairrfInclude<ExtArgs> | null
    /**
     * The data needed to create a tabelairrf.
     */
    data: XOR<tabelairrfCreateInput, tabelairrfUncheckedCreateInput>
  }

  /**
   * tabelairrf createMany
   */
  export type tabelairrfCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tabelairrfs.
     */
    data: tabelairrfCreateManyInput | tabelairrfCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tabelairrf update
   */
  export type tabelairrfUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tabelairrf
     */
    select?: tabelairrfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tabelairrf
     */
    omit?: tabelairrfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tabelairrfInclude<ExtArgs> | null
    /**
     * The data needed to update a tabelairrf.
     */
    data: XOR<tabelairrfUpdateInput, tabelairrfUncheckedUpdateInput>
    /**
     * Choose, which tabelairrf to update.
     */
    where: tabelairrfWhereUniqueInput
  }

  /**
   * tabelairrf updateMany
   */
  export type tabelairrfUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tabelairrfs.
     */
    data: XOR<tabelairrfUpdateManyMutationInput, tabelairrfUncheckedUpdateManyInput>
    /**
     * Filter which tabelairrfs to update
     */
    where?: tabelairrfWhereInput
    /**
     * Limit how many tabelairrfs to update.
     */
    limit?: number
  }

  /**
   * tabelairrf upsert
   */
  export type tabelairrfUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tabelairrf
     */
    select?: tabelairrfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tabelairrf
     */
    omit?: tabelairrfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tabelairrfInclude<ExtArgs> | null
    /**
     * The filter to search for the tabelairrf to update in case it exists.
     */
    where: tabelairrfWhereUniqueInput
    /**
     * In case the tabelairrf found by the `where` argument doesn't exist, create a new tabelairrf with this data.
     */
    create: XOR<tabelairrfCreateInput, tabelairrfUncheckedCreateInput>
    /**
     * In case the tabelairrf was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tabelairrfUpdateInput, tabelairrfUncheckedUpdateInput>
  }

  /**
   * tabelairrf delete
   */
  export type tabelairrfDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tabelairrf
     */
    select?: tabelairrfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tabelairrf
     */
    omit?: tabelairrfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tabelairrfInclude<ExtArgs> | null
    /**
     * Filter which tabelairrf to delete.
     */
    where: tabelairrfWhereUniqueInput
  }

  /**
   * tabelairrf deleteMany
   */
  export type tabelairrfDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tabelairrfs to delete
     */
    where?: tabelairrfWhereInput
    /**
     * Limit how many tabelairrfs to delete.
     */
    limit?: number
  }

  /**
   * tabelairrf.faixairrf
   */
  export type tabelairrf$faixairrfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faixairrf
     */
    select?: faixairrfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the faixairrf
     */
    omit?: faixairrfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: faixairrfInclude<ExtArgs> | null
    where?: faixairrfWhereInput
    orderBy?: faixairrfOrderByWithRelationInput | faixairrfOrderByWithRelationInput[]
    cursor?: faixairrfWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FaixairrfScalarFieldEnum | FaixairrfScalarFieldEnum[]
  }

  /**
   * tabelairrf without action
   */
  export type tabelairrfDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tabelairrf
     */
    select?: tabelairrfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tabelairrf
     */
    omit?: tabelairrfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tabelairrfInclude<ExtArgs> | null
  }


  /**
   * Model faixairrf
   */

  export type AggregateFaixairrf = {
    _count: FaixairrfCountAggregateOutputType | null
    _avg: FaixairrfAvgAggregateOutputType | null
    _sum: FaixairrfSumAggregateOutputType | null
    _min: FaixairrfMinAggregateOutputType | null
    _max: FaixairrfMaxAggregateOutputType | null
  }

  export type FaixairrfAvgAggregateOutputType = {
    id: number | null
    idTabela: number | null
    ordem: number | null
    valorDe: Decimal | null
    valorAte: Decimal | null
    aliquota: Decimal | null
    parcelaADeduzir: Decimal | null
  }

  export type FaixairrfSumAggregateOutputType = {
    id: number | null
    idTabela: number | null
    ordem: number | null
    valorDe: Decimal | null
    valorAte: Decimal | null
    aliquota: Decimal | null
    parcelaADeduzir: Decimal | null
  }

  export type FaixairrfMinAggregateOutputType = {
    id: number | null
    idTabela: number | null
    ordem: number | null
    valorDe: Decimal | null
    valorAte: Decimal | null
    aliquota: Decimal | null
    parcelaADeduzir: Decimal | null
  }

  export type FaixairrfMaxAggregateOutputType = {
    id: number | null
    idTabela: number | null
    ordem: number | null
    valorDe: Decimal | null
    valorAte: Decimal | null
    aliquota: Decimal | null
    parcelaADeduzir: Decimal | null
  }

  export type FaixairrfCountAggregateOutputType = {
    id: number
    idTabela: number
    ordem: number
    valorDe: number
    valorAte: number
    aliquota: number
    parcelaADeduzir: number
    _all: number
  }


  export type FaixairrfAvgAggregateInputType = {
    id?: true
    idTabela?: true
    ordem?: true
    valorDe?: true
    valorAte?: true
    aliquota?: true
    parcelaADeduzir?: true
  }

  export type FaixairrfSumAggregateInputType = {
    id?: true
    idTabela?: true
    ordem?: true
    valorDe?: true
    valorAte?: true
    aliquota?: true
    parcelaADeduzir?: true
  }

  export type FaixairrfMinAggregateInputType = {
    id?: true
    idTabela?: true
    ordem?: true
    valorDe?: true
    valorAte?: true
    aliquota?: true
    parcelaADeduzir?: true
  }

  export type FaixairrfMaxAggregateInputType = {
    id?: true
    idTabela?: true
    ordem?: true
    valorDe?: true
    valorAte?: true
    aliquota?: true
    parcelaADeduzir?: true
  }

  export type FaixairrfCountAggregateInputType = {
    id?: true
    idTabela?: true
    ordem?: true
    valorDe?: true
    valorAte?: true
    aliquota?: true
    parcelaADeduzir?: true
    _all?: true
  }

  export type FaixairrfAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which faixairrf to aggregate.
     */
    where?: faixairrfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of faixairrfs to fetch.
     */
    orderBy?: faixairrfOrderByWithRelationInput | faixairrfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: faixairrfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` faixairrfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` faixairrfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned faixairrfs
    **/
    _count?: true | FaixairrfCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FaixairrfAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FaixairrfSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FaixairrfMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FaixairrfMaxAggregateInputType
  }

  export type GetFaixairrfAggregateType<T extends FaixairrfAggregateArgs> = {
        [P in keyof T & keyof AggregateFaixairrf]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFaixairrf[P]>
      : GetScalarType<T[P], AggregateFaixairrf[P]>
  }




  export type faixairrfGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: faixairrfWhereInput
    orderBy?: faixairrfOrderByWithAggregationInput | faixairrfOrderByWithAggregationInput[]
    by: FaixairrfScalarFieldEnum[] | FaixairrfScalarFieldEnum
    having?: faixairrfScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FaixairrfCountAggregateInputType | true
    _avg?: FaixairrfAvgAggregateInputType
    _sum?: FaixairrfSumAggregateInputType
    _min?: FaixairrfMinAggregateInputType
    _max?: FaixairrfMaxAggregateInputType
  }

  export type FaixairrfGroupByOutputType = {
    id: number
    idTabela: number
    ordem: number
    valorDe: Decimal
    valorAte: Decimal | null
    aliquota: Decimal
    parcelaADeduzir: Decimal
    _count: FaixairrfCountAggregateOutputType | null
    _avg: FaixairrfAvgAggregateOutputType | null
    _sum: FaixairrfSumAggregateOutputType | null
    _min: FaixairrfMinAggregateOutputType | null
    _max: FaixairrfMaxAggregateOutputType | null
  }

  type GetFaixairrfGroupByPayload<T extends faixairrfGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FaixairrfGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FaixairrfGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FaixairrfGroupByOutputType[P]>
            : GetScalarType<T[P], FaixairrfGroupByOutputType[P]>
        }
      >
    >


  export type faixairrfSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idTabela?: boolean
    ordem?: boolean
    valorDe?: boolean
    valorAte?: boolean
    aliquota?: boolean
    parcelaADeduzir?: boolean
    tabelairrf?: boolean | tabelairrfDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["faixairrf"]>



  export type faixairrfSelectScalar = {
    id?: boolean
    idTabela?: boolean
    ordem?: boolean
    valorDe?: boolean
    valorAte?: boolean
    aliquota?: boolean
    parcelaADeduzir?: boolean
  }

  export type faixairrfOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idTabela" | "ordem" | "valorDe" | "valorAte" | "aliquota" | "parcelaADeduzir", ExtArgs["result"]["faixairrf"]>
  export type faixairrfInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tabelairrf?: boolean | tabelairrfDefaultArgs<ExtArgs>
  }

  export type $faixairrfPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "faixairrf"
    objects: {
      tabelairrf: Prisma.$tabelairrfPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idTabela: number
      ordem: number
      valorDe: Prisma.Decimal
      valorAte: Prisma.Decimal | null
      aliquota: Prisma.Decimal
      parcelaADeduzir: Prisma.Decimal
    }, ExtArgs["result"]["faixairrf"]>
    composites: {}
  }

  type faixairrfGetPayload<S extends boolean | null | undefined | faixairrfDefaultArgs> = $Result.GetResult<Prisma.$faixairrfPayload, S>

  type faixairrfCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<faixairrfFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FaixairrfCountAggregateInputType | true
    }

  export interface faixairrfDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['faixairrf'], meta: { name: 'faixairrf' } }
    /**
     * Find zero or one Faixairrf that matches the filter.
     * @param {faixairrfFindUniqueArgs} args - Arguments to find a Faixairrf
     * @example
     * // Get one Faixairrf
     * const faixairrf = await prisma.faixairrf.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends faixairrfFindUniqueArgs>(args: SelectSubset<T, faixairrfFindUniqueArgs<ExtArgs>>): Prisma__faixairrfClient<$Result.GetResult<Prisma.$faixairrfPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Faixairrf that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {faixairrfFindUniqueOrThrowArgs} args - Arguments to find a Faixairrf
     * @example
     * // Get one Faixairrf
     * const faixairrf = await prisma.faixairrf.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends faixairrfFindUniqueOrThrowArgs>(args: SelectSubset<T, faixairrfFindUniqueOrThrowArgs<ExtArgs>>): Prisma__faixairrfClient<$Result.GetResult<Prisma.$faixairrfPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faixairrf that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {faixairrfFindFirstArgs} args - Arguments to find a Faixairrf
     * @example
     * // Get one Faixairrf
     * const faixairrf = await prisma.faixairrf.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends faixairrfFindFirstArgs>(args?: SelectSubset<T, faixairrfFindFirstArgs<ExtArgs>>): Prisma__faixairrfClient<$Result.GetResult<Prisma.$faixairrfPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faixairrf that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {faixairrfFindFirstOrThrowArgs} args - Arguments to find a Faixairrf
     * @example
     * // Get one Faixairrf
     * const faixairrf = await prisma.faixairrf.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends faixairrfFindFirstOrThrowArgs>(args?: SelectSubset<T, faixairrfFindFirstOrThrowArgs<ExtArgs>>): Prisma__faixairrfClient<$Result.GetResult<Prisma.$faixairrfPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Faixairrfs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {faixairrfFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Faixairrfs
     * const faixairrfs = await prisma.faixairrf.findMany()
     * 
     * // Get first 10 Faixairrfs
     * const faixairrfs = await prisma.faixairrf.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const faixairrfWithIdOnly = await prisma.faixairrf.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends faixairrfFindManyArgs>(args?: SelectSubset<T, faixairrfFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$faixairrfPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Faixairrf.
     * @param {faixairrfCreateArgs} args - Arguments to create a Faixairrf.
     * @example
     * // Create one Faixairrf
     * const Faixairrf = await prisma.faixairrf.create({
     *   data: {
     *     // ... data to create a Faixairrf
     *   }
     * })
     * 
     */
    create<T extends faixairrfCreateArgs>(args: SelectSubset<T, faixairrfCreateArgs<ExtArgs>>): Prisma__faixairrfClient<$Result.GetResult<Prisma.$faixairrfPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Faixairrfs.
     * @param {faixairrfCreateManyArgs} args - Arguments to create many Faixairrfs.
     * @example
     * // Create many Faixairrfs
     * const faixairrf = await prisma.faixairrf.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends faixairrfCreateManyArgs>(args?: SelectSubset<T, faixairrfCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Faixairrf.
     * @param {faixairrfDeleteArgs} args - Arguments to delete one Faixairrf.
     * @example
     * // Delete one Faixairrf
     * const Faixairrf = await prisma.faixairrf.delete({
     *   where: {
     *     // ... filter to delete one Faixairrf
     *   }
     * })
     * 
     */
    delete<T extends faixairrfDeleteArgs>(args: SelectSubset<T, faixairrfDeleteArgs<ExtArgs>>): Prisma__faixairrfClient<$Result.GetResult<Prisma.$faixairrfPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Faixairrf.
     * @param {faixairrfUpdateArgs} args - Arguments to update one Faixairrf.
     * @example
     * // Update one Faixairrf
     * const faixairrf = await prisma.faixairrf.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends faixairrfUpdateArgs>(args: SelectSubset<T, faixairrfUpdateArgs<ExtArgs>>): Prisma__faixairrfClient<$Result.GetResult<Prisma.$faixairrfPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Faixairrfs.
     * @param {faixairrfDeleteManyArgs} args - Arguments to filter Faixairrfs to delete.
     * @example
     * // Delete a few Faixairrfs
     * const { count } = await prisma.faixairrf.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends faixairrfDeleteManyArgs>(args?: SelectSubset<T, faixairrfDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faixairrfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {faixairrfUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Faixairrfs
     * const faixairrf = await prisma.faixairrf.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends faixairrfUpdateManyArgs>(args: SelectSubset<T, faixairrfUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Faixairrf.
     * @param {faixairrfUpsertArgs} args - Arguments to update or create a Faixairrf.
     * @example
     * // Update or create a Faixairrf
     * const faixairrf = await prisma.faixairrf.upsert({
     *   create: {
     *     // ... data to create a Faixairrf
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Faixairrf we want to update
     *   }
     * })
     */
    upsert<T extends faixairrfUpsertArgs>(args: SelectSubset<T, faixairrfUpsertArgs<ExtArgs>>): Prisma__faixairrfClient<$Result.GetResult<Prisma.$faixairrfPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Faixairrfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {faixairrfCountArgs} args - Arguments to filter Faixairrfs to count.
     * @example
     * // Count the number of Faixairrfs
     * const count = await prisma.faixairrf.count({
     *   where: {
     *     // ... the filter for the Faixairrfs we want to count
     *   }
     * })
    **/
    count<T extends faixairrfCountArgs>(
      args?: Subset<T, faixairrfCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FaixairrfCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Faixairrf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaixairrfAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FaixairrfAggregateArgs>(args: Subset<T, FaixairrfAggregateArgs>): Prisma.PrismaPromise<GetFaixairrfAggregateType<T>>

    /**
     * Group by Faixairrf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {faixairrfGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends faixairrfGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: faixairrfGroupByArgs['orderBy'] }
        : { orderBy?: faixairrfGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, faixairrfGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFaixairrfGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the faixairrf model
   */
  readonly fields: faixairrfFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for faixairrf.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__faixairrfClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tabelairrf<T extends tabelairrfDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tabelairrfDefaultArgs<ExtArgs>>): Prisma__tabelairrfClient<$Result.GetResult<Prisma.$tabelairrfPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the faixairrf model
   */
  interface faixairrfFieldRefs {
    readonly id: FieldRef<"faixairrf", 'Int'>
    readonly idTabela: FieldRef<"faixairrf", 'Int'>
    readonly ordem: FieldRef<"faixairrf", 'Int'>
    readonly valorDe: FieldRef<"faixairrf", 'Decimal'>
    readonly valorAte: FieldRef<"faixairrf", 'Decimal'>
    readonly aliquota: FieldRef<"faixairrf", 'Decimal'>
    readonly parcelaADeduzir: FieldRef<"faixairrf", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * faixairrf findUnique
   */
  export type faixairrfFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faixairrf
     */
    select?: faixairrfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the faixairrf
     */
    omit?: faixairrfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: faixairrfInclude<ExtArgs> | null
    /**
     * Filter, which faixairrf to fetch.
     */
    where: faixairrfWhereUniqueInput
  }

  /**
   * faixairrf findUniqueOrThrow
   */
  export type faixairrfFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faixairrf
     */
    select?: faixairrfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the faixairrf
     */
    omit?: faixairrfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: faixairrfInclude<ExtArgs> | null
    /**
     * Filter, which faixairrf to fetch.
     */
    where: faixairrfWhereUniqueInput
  }

  /**
   * faixairrf findFirst
   */
  export type faixairrfFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faixairrf
     */
    select?: faixairrfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the faixairrf
     */
    omit?: faixairrfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: faixairrfInclude<ExtArgs> | null
    /**
     * Filter, which faixairrf to fetch.
     */
    where?: faixairrfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of faixairrfs to fetch.
     */
    orderBy?: faixairrfOrderByWithRelationInput | faixairrfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for faixairrfs.
     */
    cursor?: faixairrfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` faixairrfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` faixairrfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of faixairrfs.
     */
    distinct?: FaixairrfScalarFieldEnum | FaixairrfScalarFieldEnum[]
  }

  /**
   * faixairrf findFirstOrThrow
   */
  export type faixairrfFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faixairrf
     */
    select?: faixairrfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the faixairrf
     */
    omit?: faixairrfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: faixairrfInclude<ExtArgs> | null
    /**
     * Filter, which faixairrf to fetch.
     */
    where?: faixairrfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of faixairrfs to fetch.
     */
    orderBy?: faixairrfOrderByWithRelationInput | faixairrfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for faixairrfs.
     */
    cursor?: faixairrfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` faixairrfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` faixairrfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of faixairrfs.
     */
    distinct?: FaixairrfScalarFieldEnum | FaixairrfScalarFieldEnum[]
  }

  /**
   * faixairrf findMany
   */
  export type faixairrfFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faixairrf
     */
    select?: faixairrfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the faixairrf
     */
    omit?: faixairrfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: faixairrfInclude<ExtArgs> | null
    /**
     * Filter, which faixairrfs to fetch.
     */
    where?: faixairrfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of faixairrfs to fetch.
     */
    orderBy?: faixairrfOrderByWithRelationInput | faixairrfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing faixairrfs.
     */
    cursor?: faixairrfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` faixairrfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` faixairrfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of faixairrfs.
     */
    distinct?: FaixairrfScalarFieldEnum | FaixairrfScalarFieldEnum[]
  }

  /**
   * faixairrf create
   */
  export type faixairrfCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faixairrf
     */
    select?: faixairrfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the faixairrf
     */
    omit?: faixairrfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: faixairrfInclude<ExtArgs> | null
    /**
     * The data needed to create a faixairrf.
     */
    data: XOR<faixairrfCreateInput, faixairrfUncheckedCreateInput>
  }

  /**
   * faixairrf createMany
   */
  export type faixairrfCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many faixairrfs.
     */
    data: faixairrfCreateManyInput | faixairrfCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * faixairrf update
   */
  export type faixairrfUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faixairrf
     */
    select?: faixairrfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the faixairrf
     */
    omit?: faixairrfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: faixairrfInclude<ExtArgs> | null
    /**
     * The data needed to update a faixairrf.
     */
    data: XOR<faixairrfUpdateInput, faixairrfUncheckedUpdateInput>
    /**
     * Choose, which faixairrf to update.
     */
    where: faixairrfWhereUniqueInput
  }

  /**
   * faixairrf updateMany
   */
  export type faixairrfUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update faixairrfs.
     */
    data: XOR<faixairrfUpdateManyMutationInput, faixairrfUncheckedUpdateManyInput>
    /**
     * Filter which faixairrfs to update
     */
    where?: faixairrfWhereInput
    /**
     * Limit how many faixairrfs to update.
     */
    limit?: number
  }

  /**
   * faixairrf upsert
   */
  export type faixairrfUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faixairrf
     */
    select?: faixairrfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the faixairrf
     */
    omit?: faixairrfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: faixairrfInclude<ExtArgs> | null
    /**
     * The filter to search for the faixairrf to update in case it exists.
     */
    where: faixairrfWhereUniqueInput
    /**
     * In case the faixairrf found by the `where` argument doesn't exist, create a new faixairrf with this data.
     */
    create: XOR<faixairrfCreateInput, faixairrfUncheckedCreateInput>
    /**
     * In case the faixairrf was found with the provided `where` argument, update it with this data.
     */
    update: XOR<faixairrfUpdateInput, faixairrfUncheckedUpdateInput>
  }

  /**
   * faixairrf delete
   */
  export type faixairrfDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faixairrf
     */
    select?: faixairrfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the faixairrf
     */
    omit?: faixairrfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: faixairrfInclude<ExtArgs> | null
    /**
     * Filter which faixairrf to delete.
     */
    where: faixairrfWhereUniqueInput
  }

  /**
   * faixairrf deleteMany
   */
  export type faixairrfDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which faixairrfs to delete
     */
    where?: faixairrfWhereInput
    /**
     * Limit how many faixairrfs to delete.
     */
    limit?: number
  }

  /**
   * faixairrf without action
   */
  export type faixairrfDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faixairrf
     */
    select?: faixairrfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the faixairrf
     */
    omit?: faixairrfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: faixairrfInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EnderecoScalarFieldEnum: {
    id: 'id',
    rua: 'rua',
    numero: 'numero',
    bairro: 'bairro',
    cidade: 'cidade',
    estado: 'estado',
    cep: 'cep'
  };

  export type EnderecoScalarFieldEnum = (typeof EnderecoScalarFieldEnum)[keyof typeof EnderecoScalarFieldEnum]


  export const ImovelScalarFieldEnum: {
    id: 'id',
    idEndereco: 'idEndereco',
    inscricaoIPTU: 'inscricaoIPTU',
    inscricaoBombeiro: 'inscricaoBombeiro',
    metragem: 'metragem',
    dataCadastro: 'dataCadastro',
    classificacao: 'classificacao',
    tipologia: 'tipologia',
    status: 'status'
  };

  export type ImovelScalarFieldEnum = (typeof ImovelScalarFieldEnum)[keyof typeof ImovelScalarFieldEnum]


  export const PropriedadeimovelScalarFieldEnum: {
    id: 'id',
    idImovel: 'idImovel',
    idLocador: 'idLocador',
    percentualParticipacao: 'percentualParticipacao'
  };

  export type PropriedadeimovelScalarFieldEnum = (typeof PropriedadeimovelScalarFieldEnum)[keyof typeof PropriedadeimovelScalarFieldEnum]


  export const ContratolocacaoScalarFieldEnum: {
    id: 'id',
    idImovel: 'idImovel',
    idLocador: 'idLocador',
    idLocatario: 'idLocatario',
    dataInicio: 'dataInicio',
    dataFim: 'dataFim',
    dataReajuste: 'dataReajuste',
    valorAluguel: 'valorAluguel',
    status: 'status',
    contratoDigitalizado: 'contratoDigitalizado',
    comissao: 'comissao'
  };

  export type ContratolocacaoScalarFieldEnum = (typeof ContratolocacaoScalarFieldEnum)[keyof typeof ContratolocacaoScalarFieldEnum]


  export const ReajustecontratoScalarFieldEnum: {
    id: 'id',
    idContrato: 'idContrato',
    dataReajuste: 'dataReajuste',
    indice: 'indice',
    percentual: 'percentual',
    valorAnterior: 'valorAnterior',
    valorNovo: 'valorNovo',
    observacao: 'observacao',
    criadoEm: 'criadoEm'
  };

  export type ReajustecontratoScalarFieldEnum = (typeof ReajustecontratoScalarFieldEnum)[keyof typeof ReajustecontratoScalarFieldEnum]


  export const MemoriacalculoScalarFieldEnum: {
    id: 'id',
    idContrato: 'idContrato',
    idImovel: 'idImovel',
    competencia: 'competencia',
    valorAluguelBase: 'valorAluguelBase',
    idContaBancaria: 'idContaBancaria',
    contaDescricao: 'contaDescricao',
    contaBanco: 'contaBanco',
    contaAgencia: 'contaAgencia',
    contaNumero: 'contaNumero',
    contaTipoChavePix: 'contaTipoChavePix',
    contaChavePix: 'contaChavePix',
    contaTitular: 'contaTitular',
    contaDocumentoTitular: 'contaDocumentoTitular',
    reajusteIndice: 'reajusteIndice',
    reajustePercentual: 'reajustePercentual',
    reajusteValorAnterior: 'reajusteValorAnterior',
    totalAPagar: 'totalAPagar',
    geradoPorUsuarioId: 'geradoPorUsuarioId',
    criadoEm: 'criadoEm'
  };

  export type MemoriacalculoScalarFieldEnum = (typeof MemoriacalculoScalarFieldEnum)[keyof typeof MemoriacalculoScalarFieldEnum]


  export const MemoriacalculoitemScalarFieldEnum: {
    id: 'id',
    idMemoriaCalculo: 'idMemoriaCalculo',
    idLocador: 'idLocador',
    nomeLocador: 'nomeLocador',
    documentoLocador: 'documentoLocador',
    percentualParticipacao: 'percentualParticipacao',
    valorAluguel: 'valorAluguel',
    valorReembolsos: 'valorReembolsos',
    valorDescontos: 'valorDescontos',
    baseCalculoIrrf: 'baseCalculoIrrf',
    valorIrrf: 'valorIrrf',
    valorAPagar: 'valorAPagar',
    detalhesExtras: 'detalhesExtras'
  };

  export type MemoriacalculoitemScalarFieldEnum = (typeof MemoriacalculoitemScalarFieldEnum)[keyof typeof MemoriacalculoitemScalarFieldEnum]


  export const DespesaScalarFieldEnum: {
    id: 'id',
    idContratoLocacao: 'idContratoLocacao',
    descricao: 'descricao',
    valor: 'valor',
    tipo: 'tipo',
    dataVencimento: 'dataVencimento',
    dataPagamento: 'dataPagamento',
    status: 'status',
    comprovantePagamento: 'comprovantePagamento'
  };

  export type DespesaScalarFieldEnum = (typeof DespesaScalarFieldEnum)[keyof typeof DespesaScalarFieldEnum]


  export const TabelairrfScalarFieldEnum: {
    id: 'id',
    vigenciaInicio: 'vigenciaInicio',
    descricao: 'descricao',
    deducaoDependente: 'deducaoDependente',
    redutorLimiteIsencao: 'redutorLimiteIsencao',
    redutorLimiteSuperior: 'redutorLimiteSuperior',
    redutorConstante: 'redutorConstante',
    redutorCoeficiente: 'redutorCoeficiente',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type TabelairrfScalarFieldEnum = (typeof TabelairrfScalarFieldEnum)[keyof typeof TabelairrfScalarFieldEnum]


  export const FaixairrfScalarFieldEnum: {
    id: 'id',
    idTabela: 'idTabela',
    ordem: 'ordem',
    valorDe: 'valorDe',
    valorAte: 'valorAte',
    aliquota: 'aliquota',
    parcelaADeduzir: 'parcelaADeduzir'
  };

  export type FaixairrfScalarFieldEnum = (typeof FaixairrfScalarFieldEnum)[keyof typeof FaixairrfScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const enderecoOrderByRelevanceFieldEnum: {
    rua: 'rua',
    numero: 'numero',
    bairro: 'bairro',
    cidade: 'cidade',
    estado: 'estado',
    cep: 'cep'
  };

  export type enderecoOrderByRelevanceFieldEnum = (typeof enderecoOrderByRelevanceFieldEnum)[keyof typeof enderecoOrderByRelevanceFieldEnum]


  export const imovelOrderByRelevanceFieldEnum: {
    inscricaoIPTU: 'inscricaoIPTU',
    inscricaoBombeiro: 'inscricaoBombeiro',
    metragem: 'metragem'
  };

  export type imovelOrderByRelevanceFieldEnum = (typeof imovelOrderByRelevanceFieldEnum)[keyof typeof imovelOrderByRelevanceFieldEnum]


  export const reajustecontratoOrderByRelevanceFieldEnum: {
    observacao: 'observacao'
  };

  export type reajustecontratoOrderByRelevanceFieldEnum = (typeof reajustecontratoOrderByRelevanceFieldEnum)[keyof typeof reajustecontratoOrderByRelevanceFieldEnum]


  export const memoriacalculoOrderByRelevanceFieldEnum: {
    contaDescricao: 'contaDescricao',
    contaBanco: 'contaBanco',
    contaAgencia: 'contaAgencia',
    contaNumero: 'contaNumero',
    contaTipoChavePix: 'contaTipoChavePix',
    contaChavePix: 'contaChavePix',
    contaTitular: 'contaTitular',
    contaDocumentoTitular: 'contaDocumentoTitular'
  };

  export type memoriacalculoOrderByRelevanceFieldEnum = (typeof memoriacalculoOrderByRelevanceFieldEnum)[keyof typeof memoriacalculoOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const memoriacalculoitemOrderByRelevanceFieldEnum: {
    nomeLocador: 'nomeLocador',
    documentoLocador: 'documentoLocador'
  };

  export type memoriacalculoitemOrderByRelevanceFieldEnum = (typeof memoriacalculoitemOrderByRelevanceFieldEnum)[keyof typeof memoriacalculoitemOrderByRelevanceFieldEnum]


  export const despesaOrderByRelevanceFieldEnum: {
    descricao: 'descricao'
  };

  export type despesaOrderByRelevanceFieldEnum = (typeof despesaOrderByRelevanceFieldEnum)[keyof typeof despesaOrderByRelevanceFieldEnum]


  export const tabelairrfOrderByRelevanceFieldEnum: {
    descricao: 'descricao'
  };

  export type tabelairrfOrderByRelevanceFieldEnum = (typeof tabelairrfOrderByRelevanceFieldEnum)[keyof typeof tabelairrfOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'classificacao_enum'
   */
  export type Enumclassificacao_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'classificacao_enum'>
    


  /**
   * Reference to a field of type 'tipologia_enum'
   */
  export type Enumtipologia_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'tipologia_enum'>
    


  /**
   * Reference to a field of type 'status_imovel_enum'
   */
  export type Enumstatus_imovel_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status_imovel_enum'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'status_contrato_enum'
   */
  export type Enumstatus_contrato_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status_contrato_enum'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'indice_reajuste_enum'
   */
  export type Enumindice_reajuste_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'indice_reajuste_enum'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'tipo_despesa_enum'
   */
  export type Enumtipo_despesa_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'tipo_despesa_enum'>
    


  /**
   * Reference to a field of type 'status_despesa_enum'
   */
  export type Enumstatus_despesa_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status_despesa_enum'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type enderecoWhereInput = {
    AND?: enderecoWhereInput | enderecoWhereInput[]
    OR?: enderecoWhereInput[]
    NOT?: enderecoWhereInput | enderecoWhereInput[]
    id?: IntFilter<"endereco"> | number
    rua?: StringFilter<"endereco"> | string
    numero?: StringNullableFilter<"endereco"> | string | null
    bairro?: StringFilter<"endereco"> | string
    cidade?: StringFilter<"endereco"> | string
    estado?: StringFilter<"endereco"> | string
    cep?: StringFilter<"endereco"> | string
    imovel?: ImovelListRelationFilter
  }

  export type enderecoOrderByWithRelationInput = {
    id?: SortOrder
    rua?: SortOrder
    numero?: SortOrderInput | SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrder
    imovel?: imovelOrderByRelationAggregateInput
    _relevance?: enderecoOrderByRelevanceInput
  }

  export type enderecoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: enderecoWhereInput | enderecoWhereInput[]
    OR?: enderecoWhereInput[]
    NOT?: enderecoWhereInput | enderecoWhereInput[]
    rua?: StringFilter<"endereco"> | string
    numero?: StringNullableFilter<"endereco"> | string | null
    bairro?: StringFilter<"endereco"> | string
    cidade?: StringFilter<"endereco"> | string
    estado?: StringFilter<"endereco"> | string
    cep?: StringFilter<"endereco"> | string
    imovel?: ImovelListRelationFilter
  }, "id">

  export type enderecoOrderByWithAggregationInput = {
    id?: SortOrder
    rua?: SortOrder
    numero?: SortOrderInput | SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrder
    _count?: enderecoCountOrderByAggregateInput
    _avg?: enderecoAvgOrderByAggregateInput
    _max?: enderecoMaxOrderByAggregateInput
    _min?: enderecoMinOrderByAggregateInput
    _sum?: enderecoSumOrderByAggregateInput
  }

  export type enderecoScalarWhereWithAggregatesInput = {
    AND?: enderecoScalarWhereWithAggregatesInput | enderecoScalarWhereWithAggregatesInput[]
    OR?: enderecoScalarWhereWithAggregatesInput[]
    NOT?: enderecoScalarWhereWithAggregatesInput | enderecoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"endereco"> | number
    rua?: StringWithAggregatesFilter<"endereco"> | string
    numero?: StringNullableWithAggregatesFilter<"endereco"> | string | null
    bairro?: StringWithAggregatesFilter<"endereco"> | string
    cidade?: StringWithAggregatesFilter<"endereco"> | string
    estado?: StringWithAggregatesFilter<"endereco"> | string
    cep?: StringWithAggregatesFilter<"endereco"> | string
  }

  export type imovelWhereInput = {
    AND?: imovelWhereInput | imovelWhereInput[]
    OR?: imovelWhereInput[]
    NOT?: imovelWhereInput | imovelWhereInput[]
    id?: IntFilter<"imovel"> | number
    idEndereco?: IntFilter<"imovel"> | number
    inscricaoIPTU?: StringNullableFilter<"imovel"> | string | null
    inscricaoBombeiro?: StringNullableFilter<"imovel"> | string | null
    metragem?: StringNullableFilter<"imovel"> | string | null
    dataCadastro?: DateTimeFilter<"imovel"> | Date | string
    classificacao?: Enumclassificacao_enumFilter<"imovel"> | $Enums.classificacao_enum
    tipologia?: Enumtipologia_enumFilter<"imovel"> | $Enums.tipologia_enum
    status?: Enumstatus_imovel_enumFilter<"imovel"> | $Enums.status_imovel_enum
    endereco?: XOR<EnderecoScalarRelationFilter, enderecoWhereInput>
    contratolocacao?: ContratolocacaoListRelationFilter
    propriedadeimovel?: PropriedadeimovelListRelationFilter
    memoriacalculo?: MemoriacalculoListRelationFilter
  }

  export type imovelOrderByWithRelationInput = {
    id?: SortOrder
    idEndereco?: SortOrder
    inscricaoIPTU?: SortOrderInput | SortOrder
    inscricaoBombeiro?: SortOrderInput | SortOrder
    metragem?: SortOrderInput | SortOrder
    dataCadastro?: SortOrder
    classificacao?: SortOrder
    tipologia?: SortOrder
    status?: SortOrder
    endereco?: enderecoOrderByWithRelationInput
    contratolocacao?: contratolocacaoOrderByRelationAggregateInput
    propriedadeimovel?: propriedadeimovelOrderByRelationAggregateInput
    memoriacalculo?: memoriacalculoOrderByRelationAggregateInput
    _relevance?: imovelOrderByRelevanceInput
  }

  export type imovelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    inscricaoIPTU?: string
    AND?: imovelWhereInput | imovelWhereInput[]
    OR?: imovelWhereInput[]
    NOT?: imovelWhereInput | imovelWhereInput[]
    idEndereco?: IntFilter<"imovel"> | number
    inscricaoBombeiro?: StringNullableFilter<"imovel"> | string | null
    metragem?: StringNullableFilter<"imovel"> | string | null
    dataCadastro?: DateTimeFilter<"imovel"> | Date | string
    classificacao?: Enumclassificacao_enumFilter<"imovel"> | $Enums.classificacao_enum
    tipologia?: Enumtipologia_enumFilter<"imovel"> | $Enums.tipologia_enum
    status?: Enumstatus_imovel_enumFilter<"imovel"> | $Enums.status_imovel_enum
    endereco?: XOR<EnderecoScalarRelationFilter, enderecoWhereInput>
    contratolocacao?: ContratolocacaoListRelationFilter
    propriedadeimovel?: PropriedadeimovelListRelationFilter
    memoriacalculo?: MemoriacalculoListRelationFilter
  }, "id" | "inscricaoIPTU">

  export type imovelOrderByWithAggregationInput = {
    id?: SortOrder
    idEndereco?: SortOrder
    inscricaoIPTU?: SortOrderInput | SortOrder
    inscricaoBombeiro?: SortOrderInput | SortOrder
    metragem?: SortOrderInput | SortOrder
    dataCadastro?: SortOrder
    classificacao?: SortOrder
    tipologia?: SortOrder
    status?: SortOrder
    _count?: imovelCountOrderByAggregateInput
    _avg?: imovelAvgOrderByAggregateInput
    _max?: imovelMaxOrderByAggregateInput
    _min?: imovelMinOrderByAggregateInput
    _sum?: imovelSumOrderByAggregateInput
  }

  export type imovelScalarWhereWithAggregatesInput = {
    AND?: imovelScalarWhereWithAggregatesInput | imovelScalarWhereWithAggregatesInput[]
    OR?: imovelScalarWhereWithAggregatesInput[]
    NOT?: imovelScalarWhereWithAggregatesInput | imovelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"imovel"> | number
    idEndereco?: IntWithAggregatesFilter<"imovel"> | number
    inscricaoIPTU?: StringNullableWithAggregatesFilter<"imovel"> | string | null
    inscricaoBombeiro?: StringNullableWithAggregatesFilter<"imovel"> | string | null
    metragem?: StringNullableWithAggregatesFilter<"imovel"> | string | null
    dataCadastro?: DateTimeWithAggregatesFilter<"imovel"> | Date | string
    classificacao?: Enumclassificacao_enumWithAggregatesFilter<"imovel"> | $Enums.classificacao_enum
    tipologia?: Enumtipologia_enumWithAggregatesFilter<"imovel"> | $Enums.tipologia_enum
    status?: Enumstatus_imovel_enumWithAggregatesFilter<"imovel"> | $Enums.status_imovel_enum
  }

  export type propriedadeimovelWhereInput = {
    AND?: propriedadeimovelWhereInput | propriedadeimovelWhereInput[]
    OR?: propriedadeimovelWhereInput[]
    NOT?: propriedadeimovelWhereInput | propriedadeimovelWhereInput[]
    id?: IntFilter<"propriedadeimovel"> | number
    idImovel?: IntFilter<"propriedadeimovel"> | number
    idLocador?: BigIntFilter<"propriedadeimovel"> | bigint | number
    percentualParticipacao?: DecimalFilter<"propriedadeimovel"> | Decimal | DecimalJsLike | number | string
    imovel?: XOR<ImovelScalarRelationFilter, imovelWhereInput>
  }

  export type propriedadeimovelOrderByWithRelationInput = {
    id?: SortOrder
    idImovel?: SortOrder
    idLocador?: SortOrder
    percentualParticipacao?: SortOrder
    imovel?: imovelOrderByWithRelationInput
  }

  export type propriedadeimovelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: propriedadeimovelWhereInput | propriedadeimovelWhereInput[]
    OR?: propriedadeimovelWhereInput[]
    NOT?: propriedadeimovelWhereInput | propriedadeimovelWhereInput[]
    idImovel?: IntFilter<"propriedadeimovel"> | number
    idLocador?: BigIntFilter<"propriedadeimovel"> | bigint | number
    percentualParticipacao?: DecimalFilter<"propriedadeimovel"> | Decimal | DecimalJsLike | number | string
    imovel?: XOR<ImovelScalarRelationFilter, imovelWhereInput>
  }, "id">

  export type propriedadeimovelOrderByWithAggregationInput = {
    id?: SortOrder
    idImovel?: SortOrder
    idLocador?: SortOrder
    percentualParticipacao?: SortOrder
    _count?: propriedadeimovelCountOrderByAggregateInput
    _avg?: propriedadeimovelAvgOrderByAggregateInput
    _max?: propriedadeimovelMaxOrderByAggregateInput
    _min?: propriedadeimovelMinOrderByAggregateInput
    _sum?: propriedadeimovelSumOrderByAggregateInput
  }

  export type propriedadeimovelScalarWhereWithAggregatesInput = {
    AND?: propriedadeimovelScalarWhereWithAggregatesInput | propriedadeimovelScalarWhereWithAggregatesInput[]
    OR?: propriedadeimovelScalarWhereWithAggregatesInput[]
    NOT?: propriedadeimovelScalarWhereWithAggregatesInput | propriedadeimovelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"propriedadeimovel"> | number
    idImovel?: IntWithAggregatesFilter<"propriedadeimovel"> | number
    idLocador?: BigIntWithAggregatesFilter<"propriedadeimovel"> | bigint | number
    percentualParticipacao?: DecimalWithAggregatesFilter<"propriedadeimovel"> | Decimal | DecimalJsLike | number | string
  }

  export type contratolocacaoWhereInput = {
    AND?: contratolocacaoWhereInput | contratolocacaoWhereInput[]
    OR?: contratolocacaoWhereInput[]
    NOT?: contratolocacaoWhereInput | contratolocacaoWhereInput[]
    id?: BigIntFilter<"contratolocacao"> | bigint | number
    idImovel?: IntFilter<"contratolocacao"> | number
    idLocador?: BigIntFilter<"contratolocacao"> | bigint | number
    idLocatario?: BigIntFilter<"contratolocacao"> | bigint | number
    dataInicio?: DateTimeFilter<"contratolocacao"> | Date | string
    dataFim?: DateTimeNullableFilter<"contratolocacao"> | Date | string | null
    dataReajuste?: DateTimeNullableFilter<"contratolocacao"> | Date | string | null
    valorAluguel?: DecimalFilter<"contratolocacao"> | Decimal | DecimalJsLike | number | string
    status?: Enumstatus_contrato_enumFilter<"contratolocacao"> | $Enums.status_contrato_enum
    contratoDigitalizado?: BytesNullableFilter<"contratolocacao"> | Bytes | null
    comissao?: DecimalFilter<"contratolocacao"> | Decimal | DecimalJsLike | number | string
    imovel?: XOR<ImovelScalarRelationFilter, imovelWhereInput>
    despesa?: DespesaListRelationFilter
    reajustecontrato?: ReajustecontratoListRelationFilter
    memoriacalculo?: MemoriacalculoListRelationFilter
  }

  export type contratolocacaoOrderByWithRelationInput = {
    id?: SortOrder
    idImovel?: SortOrder
    idLocador?: SortOrder
    idLocatario?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrderInput | SortOrder
    dataReajuste?: SortOrderInput | SortOrder
    valorAluguel?: SortOrder
    status?: SortOrder
    contratoDigitalizado?: SortOrderInput | SortOrder
    comissao?: SortOrder
    imovel?: imovelOrderByWithRelationInput
    despesa?: despesaOrderByRelationAggregateInput
    reajustecontrato?: reajustecontratoOrderByRelationAggregateInput
    memoriacalculo?: memoriacalculoOrderByRelationAggregateInput
  }

  export type contratolocacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: contratolocacaoWhereInput | contratolocacaoWhereInput[]
    OR?: contratolocacaoWhereInput[]
    NOT?: contratolocacaoWhereInput | contratolocacaoWhereInput[]
    idImovel?: IntFilter<"contratolocacao"> | number
    idLocador?: BigIntFilter<"contratolocacao"> | bigint | number
    idLocatario?: BigIntFilter<"contratolocacao"> | bigint | number
    dataInicio?: DateTimeFilter<"contratolocacao"> | Date | string
    dataFim?: DateTimeNullableFilter<"contratolocacao"> | Date | string | null
    dataReajuste?: DateTimeNullableFilter<"contratolocacao"> | Date | string | null
    valorAluguel?: DecimalFilter<"contratolocacao"> | Decimal | DecimalJsLike | number | string
    status?: Enumstatus_contrato_enumFilter<"contratolocacao"> | $Enums.status_contrato_enum
    contratoDigitalizado?: BytesNullableFilter<"contratolocacao"> | Bytes | null
    comissao?: DecimalFilter<"contratolocacao"> | Decimal | DecimalJsLike | number | string
    imovel?: XOR<ImovelScalarRelationFilter, imovelWhereInput>
    despesa?: DespesaListRelationFilter
    reajustecontrato?: ReajustecontratoListRelationFilter
    memoriacalculo?: MemoriacalculoListRelationFilter
  }, "id">

  export type contratolocacaoOrderByWithAggregationInput = {
    id?: SortOrder
    idImovel?: SortOrder
    idLocador?: SortOrder
    idLocatario?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrderInput | SortOrder
    dataReajuste?: SortOrderInput | SortOrder
    valorAluguel?: SortOrder
    status?: SortOrder
    contratoDigitalizado?: SortOrderInput | SortOrder
    comissao?: SortOrder
    _count?: contratolocacaoCountOrderByAggregateInput
    _avg?: contratolocacaoAvgOrderByAggregateInput
    _max?: contratolocacaoMaxOrderByAggregateInput
    _min?: contratolocacaoMinOrderByAggregateInput
    _sum?: contratolocacaoSumOrderByAggregateInput
  }

  export type contratolocacaoScalarWhereWithAggregatesInput = {
    AND?: contratolocacaoScalarWhereWithAggregatesInput | contratolocacaoScalarWhereWithAggregatesInput[]
    OR?: contratolocacaoScalarWhereWithAggregatesInput[]
    NOT?: contratolocacaoScalarWhereWithAggregatesInput | contratolocacaoScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"contratolocacao"> | bigint | number
    idImovel?: IntWithAggregatesFilter<"contratolocacao"> | number
    idLocador?: BigIntWithAggregatesFilter<"contratolocacao"> | bigint | number
    idLocatario?: BigIntWithAggregatesFilter<"contratolocacao"> | bigint | number
    dataInicio?: DateTimeWithAggregatesFilter<"contratolocacao"> | Date | string
    dataFim?: DateTimeNullableWithAggregatesFilter<"contratolocacao"> | Date | string | null
    dataReajuste?: DateTimeNullableWithAggregatesFilter<"contratolocacao"> | Date | string | null
    valorAluguel?: DecimalWithAggregatesFilter<"contratolocacao"> | Decimal | DecimalJsLike | number | string
    status?: Enumstatus_contrato_enumWithAggregatesFilter<"contratolocacao"> | $Enums.status_contrato_enum
    contratoDigitalizado?: BytesNullableWithAggregatesFilter<"contratolocacao"> | Bytes | null
    comissao?: DecimalWithAggregatesFilter<"contratolocacao"> | Decimal | DecimalJsLike | number | string
  }

  export type reajustecontratoWhereInput = {
    AND?: reajustecontratoWhereInput | reajustecontratoWhereInput[]
    OR?: reajustecontratoWhereInput[]
    NOT?: reajustecontratoWhereInput | reajustecontratoWhereInput[]
    id?: BigIntFilter<"reajustecontrato"> | bigint | number
    idContrato?: BigIntFilter<"reajustecontrato"> | bigint | number
    dataReajuste?: DateTimeFilter<"reajustecontrato"> | Date | string
    indice?: Enumindice_reajuste_enumFilter<"reajustecontrato"> | $Enums.indice_reajuste_enum
    percentual?: DecimalFilter<"reajustecontrato"> | Decimal | DecimalJsLike | number | string
    valorAnterior?: DecimalFilter<"reajustecontrato"> | Decimal | DecimalJsLike | number | string
    valorNovo?: DecimalFilter<"reajustecontrato"> | Decimal | DecimalJsLike | number | string
    observacao?: StringNullableFilter<"reajustecontrato"> | string | null
    criadoEm?: DateTimeFilter<"reajustecontrato"> | Date | string
    contratolocacao?: XOR<ContratolocacaoScalarRelationFilter, contratolocacaoWhereInput>
  }

  export type reajustecontratoOrderByWithRelationInput = {
    id?: SortOrder
    idContrato?: SortOrder
    dataReajuste?: SortOrder
    indice?: SortOrder
    percentual?: SortOrder
    valorAnterior?: SortOrder
    valorNovo?: SortOrder
    observacao?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    contratolocacao?: contratolocacaoOrderByWithRelationInput
    _relevance?: reajustecontratoOrderByRelevanceInput
  }

  export type reajustecontratoWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: reajustecontratoWhereInput | reajustecontratoWhereInput[]
    OR?: reajustecontratoWhereInput[]
    NOT?: reajustecontratoWhereInput | reajustecontratoWhereInput[]
    idContrato?: BigIntFilter<"reajustecontrato"> | bigint | number
    dataReajuste?: DateTimeFilter<"reajustecontrato"> | Date | string
    indice?: Enumindice_reajuste_enumFilter<"reajustecontrato"> | $Enums.indice_reajuste_enum
    percentual?: DecimalFilter<"reajustecontrato"> | Decimal | DecimalJsLike | number | string
    valorAnterior?: DecimalFilter<"reajustecontrato"> | Decimal | DecimalJsLike | number | string
    valorNovo?: DecimalFilter<"reajustecontrato"> | Decimal | DecimalJsLike | number | string
    observacao?: StringNullableFilter<"reajustecontrato"> | string | null
    criadoEm?: DateTimeFilter<"reajustecontrato"> | Date | string
    contratolocacao?: XOR<ContratolocacaoScalarRelationFilter, contratolocacaoWhereInput>
  }, "id">

  export type reajustecontratoOrderByWithAggregationInput = {
    id?: SortOrder
    idContrato?: SortOrder
    dataReajuste?: SortOrder
    indice?: SortOrder
    percentual?: SortOrder
    valorAnterior?: SortOrder
    valorNovo?: SortOrder
    observacao?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    _count?: reajustecontratoCountOrderByAggregateInput
    _avg?: reajustecontratoAvgOrderByAggregateInput
    _max?: reajustecontratoMaxOrderByAggregateInput
    _min?: reajustecontratoMinOrderByAggregateInput
    _sum?: reajustecontratoSumOrderByAggregateInput
  }

  export type reajustecontratoScalarWhereWithAggregatesInput = {
    AND?: reajustecontratoScalarWhereWithAggregatesInput | reajustecontratoScalarWhereWithAggregatesInput[]
    OR?: reajustecontratoScalarWhereWithAggregatesInput[]
    NOT?: reajustecontratoScalarWhereWithAggregatesInput | reajustecontratoScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"reajustecontrato"> | bigint | number
    idContrato?: BigIntWithAggregatesFilter<"reajustecontrato"> | bigint | number
    dataReajuste?: DateTimeWithAggregatesFilter<"reajustecontrato"> | Date | string
    indice?: Enumindice_reajuste_enumWithAggregatesFilter<"reajustecontrato"> | $Enums.indice_reajuste_enum
    percentual?: DecimalWithAggregatesFilter<"reajustecontrato"> | Decimal | DecimalJsLike | number | string
    valorAnterior?: DecimalWithAggregatesFilter<"reajustecontrato"> | Decimal | DecimalJsLike | number | string
    valorNovo?: DecimalWithAggregatesFilter<"reajustecontrato"> | Decimal | DecimalJsLike | number | string
    observacao?: StringNullableWithAggregatesFilter<"reajustecontrato"> | string | null
    criadoEm?: DateTimeWithAggregatesFilter<"reajustecontrato"> | Date | string
  }

  export type memoriacalculoWhereInput = {
    AND?: memoriacalculoWhereInput | memoriacalculoWhereInput[]
    OR?: memoriacalculoWhereInput[]
    NOT?: memoriacalculoWhereInput | memoriacalculoWhereInput[]
    id?: IntFilter<"memoriacalculo"> | number
    idContrato?: BigIntFilter<"memoriacalculo"> | bigint | number
    idImovel?: IntFilter<"memoriacalculo"> | number
    competencia?: DateTimeFilter<"memoriacalculo"> | Date | string
    valorAluguelBase?: DecimalFilter<"memoriacalculo"> | Decimal | DecimalJsLike | number | string
    idContaBancaria?: IntNullableFilter<"memoriacalculo"> | number | null
    contaDescricao?: StringNullableFilter<"memoriacalculo"> | string | null
    contaBanco?: StringNullableFilter<"memoriacalculo"> | string | null
    contaAgencia?: StringNullableFilter<"memoriacalculo"> | string | null
    contaNumero?: StringNullableFilter<"memoriacalculo"> | string | null
    contaTipoChavePix?: StringNullableFilter<"memoriacalculo"> | string | null
    contaChavePix?: StringNullableFilter<"memoriacalculo"> | string | null
    contaTitular?: StringNullableFilter<"memoriacalculo"> | string | null
    contaDocumentoTitular?: StringNullableFilter<"memoriacalculo"> | string | null
    reajusteIndice?: Enumindice_reajuste_enumNullableFilter<"memoriacalculo"> | $Enums.indice_reajuste_enum | null
    reajustePercentual?: DecimalNullableFilter<"memoriacalculo"> | Decimal | DecimalJsLike | number | string | null
    reajusteValorAnterior?: DecimalNullableFilter<"memoriacalculo"> | Decimal | DecimalJsLike | number | string | null
    totalAPagar?: DecimalFilter<"memoriacalculo"> | Decimal | DecimalJsLike | number | string
    geradoPorUsuarioId?: IntFilter<"memoriacalculo"> | number
    criadoEm?: DateTimeFilter<"memoriacalculo"> | Date | string
    contratolocacao?: XOR<ContratolocacaoScalarRelationFilter, contratolocacaoWhereInput>
    imovel?: XOR<ImovelScalarRelationFilter, imovelWhereInput>
    itens?: MemoriacalculoitemListRelationFilter
  }

  export type memoriacalculoOrderByWithRelationInput = {
    id?: SortOrder
    idContrato?: SortOrder
    idImovel?: SortOrder
    competencia?: SortOrder
    valorAluguelBase?: SortOrder
    idContaBancaria?: SortOrderInput | SortOrder
    contaDescricao?: SortOrderInput | SortOrder
    contaBanco?: SortOrderInput | SortOrder
    contaAgencia?: SortOrderInput | SortOrder
    contaNumero?: SortOrderInput | SortOrder
    contaTipoChavePix?: SortOrderInput | SortOrder
    contaChavePix?: SortOrderInput | SortOrder
    contaTitular?: SortOrderInput | SortOrder
    contaDocumentoTitular?: SortOrderInput | SortOrder
    reajusteIndice?: SortOrderInput | SortOrder
    reajustePercentual?: SortOrderInput | SortOrder
    reajusteValorAnterior?: SortOrderInput | SortOrder
    totalAPagar?: SortOrder
    geradoPorUsuarioId?: SortOrder
    criadoEm?: SortOrder
    contratolocacao?: contratolocacaoOrderByWithRelationInput
    imovel?: imovelOrderByWithRelationInput
    itens?: memoriacalculoitemOrderByRelationAggregateInput
    _relevance?: memoriacalculoOrderByRelevanceInput
  }

  export type memoriacalculoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    idContrato_competencia?: memoriacalculoIdContratoCompetenciaCompoundUniqueInput
    AND?: memoriacalculoWhereInput | memoriacalculoWhereInput[]
    OR?: memoriacalculoWhereInput[]
    NOT?: memoriacalculoWhereInput | memoriacalculoWhereInput[]
    idContrato?: BigIntFilter<"memoriacalculo"> | bigint | number
    idImovel?: IntFilter<"memoriacalculo"> | number
    competencia?: DateTimeFilter<"memoriacalculo"> | Date | string
    valorAluguelBase?: DecimalFilter<"memoriacalculo"> | Decimal | DecimalJsLike | number | string
    idContaBancaria?: IntNullableFilter<"memoriacalculo"> | number | null
    contaDescricao?: StringNullableFilter<"memoriacalculo"> | string | null
    contaBanco?: StringNullableFilter<"memoriacalculo"> | string | null
    contaAgencia?: StringNullableFilter<"memoriacalculo"> | string | null
    contaNumero?: StringNullableFilter<"memoriacalculo"> | string | null
    contaTipoChavePix?: StringNullableFilter<"memoriacalculo"> | string | null
    contaChavePix?: StringNullableFilter<"memoriacalculo"> | string | null
    contaTitular?: StringNullableFilter<"memoriacalculo"> | string | null
    contaDocumentoTitular?: StringNullableFilter<"memoriacalculo"> | string | null
    reajusteIndice?: Enumindice_reajuste_enumNullableFilter<"memoriacalculo"> | $Enums.indice_reajuste_enum | null
    reajustePercentual?: DecimalNullableFilter<"memoriacalculo"> | Decimal | DecimalJsLike | number | string | null
    reajusteValorAnterior?: DecimalNullableFilter<"memoriacalculo"> | Decimal | DecimalJsLike | number | string | null
    totalAPagar?: DecimalFilter<"memoriacalculo"> | Decimal | DecimalJsLike | number | string
    geradoPorUsuarioId?: IntFilter<"memoriacalculo"> | number
    criadoEm?: DateTimeFilter<"memoriacalculo"> | Date | string
    contratolocacao?: XOR<ContratolocacaoScalarRelationFilter, contratolocacaoWhereInput>
    imovel?: XOR<ImovelScalarRelationFilter, imovelWhereInput>
    itens?: MemoriacalculoitemListRelationFilter
  }, "id" | "idContrato_competencia">

  export type memoriacalculoOrderByWithAggregationInput = {
    id?: SortOrder
    idContrato?: SortOrder
    idImovel?: SortOrder
    competencia?: SortOrder
    valorAluguelBase?: SortOrder
    idContaBancaria?: SortOrderInput | SortOrder
    contaDescricao?: SortOrderInput | SortOrder
    contaBanco?: SortOrderInput | SortOrder
    contaAgencia?: SortOrderInput | SortOrder
    contaNumero?: SortOrderInput | SortOrder
    contaTipoChavePix?: SortOrderInput | SortOrder
    contaChavePix?: SortOrderInput | SortOrder
    contaTitular?: SortOrderInput | SortOrder
    contaDocumentoTitular?: SortOrderInput | SortOrder
    reajusteIndice?: SortOrderInput | SortOrder
    reajustePercentual?: SortOrderInput | SortOrder
    reajusteValorAnterior?: SortOrderInput | SortOrder
    totalAPagar?: SortOrder
    geradoPorUsuarioId?: SortOrder
    criadoEm?: SortOrder
    _count?: memoriacalculoCountOrderByAggregateInput
    _avg?: memoriacalculoAvgOrderByAggregateInput
    _max?: memoriacalculoMaxOrderByAggregateInput
    _min?: memoriacalculoMinOrderByAggregateInput
    _sum?: memoriacalculoSumOrderByAggregateInput
  }

  export type memoriacalculoScalarWhereWithAggregatesInput = {
    AND?: memoriacalculoScalarWhereWithAggregatesInput | memoriacalculoScalarWhereWithAggregatesInput[]
    OR?: memoriacalculoScalarWhereWithAggregatesInput[]
    NOT?: memoriacalculoScalarWhereWithAggregatesInput | memoriacalculoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"memoriacalculo"> | number
    idContrato?: BigIntWithAggregatesFilter<"memoriacalculo"> | bigint | number
    idImovel?: IntWithAggregatesFilter<"memoriacalculo"> | number
    competencia?: DateTimeWithAggregatesFilter<"memoriacalculo"> | Date | string
    valorAluguelBase?: DecimalWithAggregatesFilter<"memoriacalculo"> | Decimal | DecimalJsLike | number | string
    idContaBancaria?: IntNullableWithAggregatesFilter<"memoriacalculo"> | number | null
    contaDescricao?: StringNullableWithAggregatesFilter<"memoriacalculo"> | string | null
    contaBanco?: StringNullableWithAggregatesFilter<"memoriacalculo"> | string | null
    contaAgencia?: StringNullableWithAggregatesFilter<"memoriacalculo"> | string | null
    contaNumero?: StringNullableWithAggregatesFilter<"memoriacalculo"> | string | null
    contaTipoChavePix?: StringNullableWithAggregatesFilter<"memoriacalculo"> | string | null
    contaChavePix?: StringNullableWithAggregatesFilter<"memoriacalculo"> | string | null
    contaTitular?: StringNullableWithAggregatesFilter<"memoriacalculo"> | string | null
    contaDocumentoTitular?: StringNullableWithAggregatesFilter<"memoriacalculo"> | string | null
    reajusteIndice?: Enumindice_reajuste_enumNullableWithAggregatesFilter<"memoriacalculo"> | $Enums.indice_reajuste_enum | null
    reajustePercentual?: DecimalNullableWithAggregatesFilter<"memoriacalculo"> | Decimal | DecimalJsLike | number | string | null
    reajusteValorAnterior?: DecimalNullableWithAggregatesFilter<"memoriacalculo"> | Decimal | DecimalJsLike | number | string | null
    totalAPagar?: DecimalWithAggregatesFilter<"memoriacalculo"> | Decimal | DecimalJsLike | number | string
    geradoPorUsuarioId?: IntWithAggregatesFilter<"memoriacalculo"> | number
    criadoEm?: DateTimeWithAggregatesFilter<"memoriacalculo"> | Date | string
  }

  export type memoriacalculoitemWhereInput = {
    AND?: memoriacalculoitemWhereInput | memoriacalculoitemWhereInput[]
    OR?: memoriacalculoitemWhereInput[]
    NOT?: memoriacalculoitemWhereInput | memoriacalculoitemWhereInput[]
    id?: IntFilter<"memoriacalculoitem"> | number
    idMemoriaCalculo?: IntFilter<"memoriacalculoitem"> | number
    idLocador?: BigIntFilter<"memoriacalculoitem"> | bigint | number
    nomeLocador?: StringFilter<"memoriacalculoitem"> | string
    documentoLocador?: StringNullableFilter<"memoriacalculoitem"> | string | null
    percentualParticipacao?: DecimalFilter<"memoriacalculoitem"> | Decimal | DecimalJsLike | number | string
    valorAluguel?: DecimalFilter<"memoriacalculoitem"> | Decimal | DecimalJsLike | number | string
    valorReembolsos?: DecimalFilter<"memoriacalculoitem"> | Decimal | DecimalJsLike | number | string
    valorDescontos?: DecimalFilter<"memoriacalculoitem"> | Decimal | DecimalJsLike | number | string
    baseCalculoIrrf?: DecimalFilter<"memoriacalculoitem"> | Decimal | DecimalJsLike | number | string
    valorIrrf?: DecimalFilter<"memoriacalculoitem"> | Decimal | DecimalJsLike | number | string
    valorAPagar?: DecimalFilter<"memoriacalculoitem"> | Decimal | DecimalJsLike | number | string
    detalhesExtras?: JsonNullableFilter<"memoriacalculoitem">
    memoriacalculo?: XOR<MemoriacalculoScalarRelationFilter, memoriacalculoWhereInput>
  }

  export type memoriacalculoitemOrderByWithRelationInput = {
    id?: SortOrder
    idMemoriaCalculo?: SortOrder
    idLocador?: SortOrder
    nomeLocador?: SortOrder
    documentoLocador?: SortOrderInput | SortOrder
    percentualParticipacao?: SortOrder
    valorAluguel?: SortOrder
    valorReembolsos?: SortOrder
    valorDescontos?: SortOrder
    baseCalculoIrrf?: SortOrder
    valorIrrf?: SortOrder
    valorAPagar?: SortOrder
    detalhesExtras?: SortOrderInput | SortOrder
    memoriacalculo?: memoriacalculoOrderByWithRelationInput
    _relevance?: memoriacalculoitemOrderByRelevanceInput
  }

  export type memoriacalculoitemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: memoriacalculoitemWhereInput | memoriacalculoitemWhereInput[]
    OR?: memoriacalculoitemWhereInput[]
    NOT?: memoriacalculoitemWhereInput | memoriacalculoitemWhereInput[]
    idMemoriaCalculo?: IntFilter<"memoriacalculoitem"> | number
    idLocador?: BigIntFilter<"memoriacalculoitem"> | bigint | number
    nomeLocador?: StringFilter<"memoriacalculoitem"> | string
    documentoLocador?: StringNullableFilter<"memoriacalculoitem"> | string | null
    percentualParticipacao?: DecimalFilter<"memoriacalculoitem"> | Decimal | DecimalJsLike | number | string
    valorAluguel?: DecimalFilter<"memoriacalculoitem"> | Decimal | DecimalJsLike | number | string
    valorReembolsos?: DecimalFilter<"memoriacalculoitem"> | Decimal | DecimalJsLike | number | string
    valorDescontos?: DecimalFilter<"memoriacalculoitem"> | Decimal | DecimalJsLike | number | string
    baseCalculoIrrf?: DecimalFilter<"memoriacalculoitem"> | Decimal | DecimalJsLike | number | string
    valorIrrf?: DecimalFilter<"memoriacalculoitem"> | Decimal | DecimalJsLike | number | string
    valorAPagar?: DecimalFilter<"memoriacalculoitem"> | Decimal | DecimalJsLike | number | string
    detalhesExtras?: JsonNullableFilter<"memoriacalculoitem">
    memoriacalculo?: XOR<MemoriacalculoScalarRelationFilter, memoriacalculoWhereInput>
  }, "id">

  export type memoriacalculoitemOrderByWithAggregationInput = {
    id?: SortOrder
    idMemoriaCalculo?: SortOrder
    idLocador?: SortOrder
    nomeLocador?: SortOrder
    documentoLocador?: SortOrderInput | SortOrder
    percentualParticipacao?: SortOrder
    valorAluguel?: SortOrder
    valorReembolsos?: SortOrder
    valorDescontos?: SortOrder
    baseCalculoIrrf?: SortOrder
    valorIrrf?: SortOrder
    valorAPagar?: SortOrder
    detalhesExtras?: SortOrderInput | SortOrder
    _count?: memoriacalculoitemCountOrderByAggregateInput
    _avg?: memoriacalculoitemAvgOrderByAggregateInput
    _max?: memoriacalculoitemMaxOrderByAggregateInput
    _min?: memoriacalculoitemMinOrderByAggregateInput
    _sum?: memoriacalculoitemSumOrderByAggregateInput
  }

  export type memoriacalculoitemScalarWhereWithAggregatesInput = {
    AND?: memoriacalculoitemScalarWhereWithAggregatesInput | memoriacalculoitemScalarWhereWithAggregatesInput[]
    OR?: memoriacalculoitemScalarWhereWithAggregatesInput[]
    NOT?: memoriacalculoitemScalarWhereWithAggregatesInput | memoriacalculoitemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"memoriacalculoitem"> | number
    idMemoriaCalculo?: IntWithAggregatesFilter<"memoriacalculoitem"> | number
    idLocador?: BigIntWithAggregatesFilter<"memoriacalculoitem"> | bigint | number
    nomeLocador?: StringWithAggregatesFilter<"memoriacalculoitem"> | string
    documentoLocador?: StringNullableWithAggregatesFilter<"memoriacalculoitem"> | string | null
    percentualParticipacao?: DecimalWithAggregatesFilter<"memoriacalculoitem"> | Decimal | DecimalJsLike | number | string
    valorAluguel?: DecimalWithAggregatesFilter<"memoriacalculoitem"> | Decimal | DecimalJsLike | number | string
    valorReembolsos?: DecimalWithAggregatesFilter<"memoriacalculoitem"> | Decimal | DecimalJsLike | number | string
    valorDescontos?: DecimalWithAggregatesFilter<"memoriacalculoitem"> | Decimal | DecimalJsLike | number | string
    baseCalculoIrrf?: DecimalWithAggregatesFilter<"memoriacalculoitem"> | Decimal | DecimalJsLike | number | string
    valorIrrf?: DecimalWithAggregatesFilter<"memoriacalculoitem"> | Decimal | DecimalJsLike | number | string
    valorAPagar?: DecimalWithAggregatesFilter<"memoriacalculoitem"> | Decimal | DecimalJsLike | number | string
    detalhesExtras?: JsonNullableWithAggregatesFilter<"memoriacalculoitem">
  }

  export type despesaWhereInput = {
    AND?: despesaWhereInput | despesaWhereInput[]
    OR?: despesaWhereInput[]
    NOT?: despesaWhereInput | despesaWhereInput[]
    id?: BigIntFilter<"despesa"> | bigint | number
    idContratoLocacao?: BigIntFilter<"despesa"> | bigint | number
    descricao?: StringFilter<"despesa"> | string
    valor?: DecimalFilter<"despesa"> | Decimal | DecimalJsLike | number | string
    tipo?: Enumtipo_despesa_enumFilter<"despesa"> | $Enums.tipo_despesa_enum
    dataVencimento?: DateTimeFilter<"despesa"> | Date | string
    dataPagamento?: DateTimeNullableFilter<"despesa"> | Date | string | null
    status?: Enumstatus_despesa_enumFilter<"despesa"> | $Enums.status_despesa_enum
    comprovantePagamento?: BytesNullableFilter<"despesa"> | Bytes | null
    contratolocacao?: XOR<ContratolocacaoScalarRelationFilter, contratolocacaoWhereInput>
  }

  export type despesaOrderByWithRelationInput = {
    id?: SortOrder
    idContratoLocacao?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    dataVencimento?: SortOrder
    dataPagamento?: SortOrderInput | SortOrder
    status?: SortOrder
    comprovantePagamento?: SortOrderInput | SortOrder
    contratolocacao?: contratolocacaoOrderByWithRelationInput
    _relevance?: despesaOrderByRelevanceInput
  }

  export type despesaWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: despesaWhereInput | despesaWhereInput[]
    OR?: despesaWhereInput[]
    NOT?: despesaWhereInput | despesaWhereInput[]
    idContratoLocacao?: BigIntFilter<"despesa"> | bigint | number
    descricao?: StringFilter<"despesa"> | string
    valor?: DecimalFilter<"despesa"> | Decimal | DecimalJsLike | number | string
    tipo?: Enumtipo_despesa_enumFilter<"despesa"> | $Enums.tipo_despesa_enum
    dataVencimento?: DateTimeFilter<"despesa"> | Date | string
    dataPagamento?: DateTimeNullableFilter<"despesa"> | Date | string | null
    status?: Enumstatus_despesa_enumFilter<"despesa"> | $Enums.status_despesa_enum
    comprovantePagamento?: BytesNullableFilter<"despesa"> | Bytes | null
    contratolocacao?: XOR<ContratolocacaoScalarRelationFilter, contratolocacaoWhereInput>
  }, "id">

  export type despesaOrderByWithAggregationInput = {
    id?: SortOrder
    idContratoLocacao?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    dataVencimento?: SortOrder
    dataPagamento?: SortOrderInput | SortOrder
    status?: SortOrder
    comprovantePagamento?: SortOrderInput | SortOrder
    _count?: despesaCountOrderByAggregateInput
    _avg?: despesaAvgOrderByAggregateInput
    _max?: despesaMaxOrderByAggregateInput
    _min?: despesaMinOrderByAggregateInput
    _sum?: despesaSumOrderByAggregateInput
  }

  export type despesaScalarWhereWithAggregatesInput = {
    AND?: despesaScalarWhereWithAggregatesInput | despesaScalarWhereWithAggregatesInput[]
    OR?: despesaScalarWhereWithAggregatesInput[]
    NOT?: despesaScalarWhereWithAggregatesInput | despesaScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"despesa"> | bigint | number
    idContratoLocacao?: BigIntWithAggregatesFilter<"despesa"> | bigint | number
    descricao?: StringWithAggregatesFilter<"despesa"> | string
    valor?: DecimalWithAggregatesFilter<"despesa"> | Decimal | DecimalJsLike | number | string
    tipo?: Enumtipo_despesa_enumWithAggregatesFilter<"despesa"> | $Enums.tipo_despesa_enum
    dataVencimento?: DateTimeWithAggregatesFilter<"despesa"> | Date | string
    dataPagamento?: DateTimeNullableWithAggregatesFilter<"despesa"> | Date | string | null
    status?: Enumstatus_despesa_enumWithAggregatesFilter<"despesa"> | $Enums.status_despesa_enum
    comprovantePagamento?: BytesNullableWithAggregatesFilter<"despesa"> | Bytes | null
  }

  export type tabelairrfWhereInput = {
    AND?: tabelairrfWhereInput | tabelairrfWhereInput[]
    OR?: tabelairrfWhereInput[]
    NOT?: tabelairrfWhereInput | tabelairrfWhereInput[]
    id?: IntFilter<"tabelairrf"> | number
    vigenciaInicio?: DateTimeFilter<"tabelairrf"> | Date | string
    descricao?: StringNullableFilter<"tabelairrf"> | string | null
    deducaoDependente?: DecimalFilter<"tabelairrf"> | Decimal | DecimalJsLike | number | string
    redutorLimiteIsencao?: DecimalNullableFilter<"tabelairrf"> | Decimal | DecimalJsLike | number | string | null
    redutorLimiteSuperior?: DecimalNullableFilter<"tabelairrf"> | Decimal | DecimalJsLike | number | string | null
    redutorConstante?: DecimalNullableFilter<"tabelairrf"> | Decimal | DecimalJsLike | number | string | null
    redutorCoeficiente?: DecimalNullableFilter<"tabelairrf"> | Decimal | DecimalJsLike | number | string | null
    criadoEm?: DateTimeFilter<"tabelairrf"> | Date | string
    atualizadoEm?: DateTimeFilter<"tabelairrf"> | Date | string
    faixairrf?: FaixairrfListRelationFilter
  }

  export type tabelairrfOrderByWithRelationInput = {
    id?: SortOrder
    vigenciaInicio?: SortOrder
    descricao?: SortOrderInput | SortOrder
    deducaoDependente?: SortOrder
    redutorLimiteIsencao?: SortOrderInput | SortOrder
    redutorLimiteSuperior?: SortOrderInput | SortOrder
    redutorConstante?: SortOrderInput | SortOrder
    redutorCoeficiente?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    faixairrf?: faixairrfOrderByRelationAggregateInput
    _relevance?: tabelairrfOrderByRelevanceInput
  }

  export type tabelairrfWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    vigenciaInicio?: Date | string
    AND?: tabelairrfWhereInput | tabelairrfWhereInput[]
    OR?: tabelairrfWhereInput[]
    NOT?: tabelairrfWhereInput | tabelairrfWhereInput[]
    descricao?: StringNullableFilter<"tabelairrf"> | string | null
    deducaoDependente?: DecimalFilter<"tabelairrf"> | Decimal | DecimalJsLike | number | string
    redutorLimiteIsencao?: DecimalNullableFilter<"tabelairrf"> | Decimal | DecimalJsLike | number | string | null
    redutorLimiteSuperior?: DecimalNullableFilter<"tabelairrf"> | Decimal | DecimalJsLike | number | string | null
    redutorConstante?: DecimalNullableFilter<"tabelairrf"> | Decimal | DecimalJsLike | number | string | null
    redutorCoeficiente?: DecimalNullableFilter<"tabelairrf"> | Decimal | DecimalJsLike | number | string | null
    criadoEm?: DateTimeFilter<"tabelairrf"> | Date | string
    atualizadoEm?: DateTimeFilter<"tabelairrf"> | Date | string
    faixairrf?: FaixairrfListRelationFilter
  }, "id" | "vigenciaInicio">

  export type tabelairrfOrderByWithAggregationInput = {
    id?: SortOrder
    vigenciaInicio?: SortOrder
    descricao?: SortOrderInput | SortOrder
    deducaoDependente?: SortOrder
    redutorLimiteIsencao?: SortOrderInput | SortOrder
    redutorLimiteSuperior?: SortOrderInput | SortOrder
    redutorConstante?: SortOrderInput | SortOrder
    redutorCoeficiente?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: tabelairrfCountOrderByAggregateInput
    _avg?: tabelairrfAvgOrderByAggregateInput
    _max?: tabelairrfMaxOrderByAggregateInput
    _min?: tabelairrfMinOrderByAggregateInput
    _sum?: tabelairrfSumOrderByAggregateInput
  }

  export type tabelairrfScalarWhereWithAggregatesInput = {
    AND?: tabelairrfScalarWhereWithAggregatesInput | tabelairrfScalarWhereWithAggregatesInput[]
    OR?: tabelairrfScalarWhereWithAggregatesInput[]
    NOT?: tabelairrfScalarWhereWithAggregatesInput | tabelairrfScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tabelairrf"> | number
    vigenciaInicio?: DateTimeWithAggregatesFilter<"tabelairrf"> | Date | string
    descricao?: StringNullableWithAggregatesFilter<"tabelairrf"> | string | null
    deducaoDependente?: DecimalWithAggregatesFilter<"tabelairrf"> | Decimal | DecimalJsLike | number | string
    redutorLimiteIsencao?: DecimalNullableWithAggregatesFilter<"tabelairrf"> | Decimal | DecimalJsLike | number | string | null
    redutorLimiteSuperior?: DecimalNullableWithAggregatesFilter<"tabelairrf"> | Decimal | DecimalJsLike | number | string | null
    redutorConstante?: DecimalNullableWithAggregatesFilter<"tabelairrf"> | Decimal | DecimalJsLike | number | string | null
    redutorCoeficiente?: DecimalNullableWithAggregatesFilter<"tabelairrf"> | Decimal | DecimalJsLike | number | string | null
    criadoEm?: DateTimeWithAggregatesFilter<"tabelairrf"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"tabelairrf"> | Date | string
  }

  export type faixairrfWhereInput = {
    AND?: faixairrfWhereInput | faixairrfWhereInput[]
    OR?: faixairrfWhereInput[]
    NOT?: faixairrfWhereInput | faixairrfWhereInput[]
    id?: IntFilter<"faixairrf"> | number
    idTabela?: IntFilter<"faixairrf"> | number
    ordem?: IntFilter<"faixairrf"> | number
    valorDe?: DecimalFilter<"faixairrf"> | Decimal | DecimalJsLike | number | string
    valorAte?: DecimalNullableFilter<"faixairrf"> | Decimal | DecimalJsLike | number | string | null
    aliquota?: DecimalFilter<"faixairrf"> | Decimal | DecimalJsLike | number | string
    parcelaADeduzir?: DecimalFilter<"faixairrf"> | Decimal | DecimalJsLike | number | string
    tabelairrf?: XOR<TabelairrfScalarRelationFilter, tabelairrfWhereInput>
  }

  export type faixairrfOrderByWithRelationInput = {
    id?: SortOrder
    idTabela?: SortOrder
    ordem?: SortOrder
    valorDe?: SortOrder
    valorAte?: SortOrderInput | SortOrder
    aliquota?: SortOrder
    parcelaADeduzir?: SortOrder
    tabelairrf?: tabelairrfOrderByWithRelationInput
  }

  export type faixairrfWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    idTabela_ordem?: faixairrfIdTabelaOrdemCompoundUniqueInput
    AND?: faixairrfWhereInput | faixairrfWhereInput[]
    OR?: faixairrfWhereInput[]
    NOT?: faixairrfWhereInput | faixairrfWhereInput[]
    idTabela?: IntFilter<"faixairrf"> | number
    ordem?: IntFilter<"faixairrf"> | number
    valorDe?: DecimalFilter<"faixairrf"> | Decimal | DecimalJsLike | number | string
    valorAte?: DecimalNullableFilter<"faixairrf"> | Decimal | DecimalJsLike | number | string | null
    aliquota?: DecimalFilter<"faixairrf"> | Decimal | DecimalJsLike | number | string
    parcelaADeduzir?: DecimalFilter<"faixairrf"> | Decimal | DecimalJsLike | number | string
    tabelairrf?: XOR<TabelairrfScalarRelationFilter, tabelairrfWhereInput>
  }, "id" | "idTabela_ordem">

  export type faixairrfOrderByWithAggregationInput = {
    id?: SortOrder
    idTabela?: SortOrder
    ordem?: SortOrder
    valorDe?: SortOrder
    valorAte?: SortOrderInput | SortOrder
    aliquota?: SortOrder
    parcelaADeduzir?: SortOrder
    _count?: faixairrfCountOrderByAggregateInput
    _avg?: faixairrfAvgOrderByAggregateInput
    _max?: faixairrfMaxOrderByAggregateInput
    _min?: faixairrfMinOrderByAggregateInput
    _sum?: faixairrfSumOrderByAggregateInput
  }

  export type faixairrfScalarWhereWithAggregatesInput = {
    AND?: faixairrfScalarWhereWithAggregatesInput | faixairrfScalarWhereWithAggregatesInput[]
    OR?: faixairrfScalarWhereWithAggregatesInput[]
    NOT?: faixairrfScalarWhereWithAggregatesInput | faixairrfScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"faixairrf"> | number
    idTabela?: IntWithAggregatesFilter<"faixairrf"> | number
    ordem?: IntWithAggregatesFilter<"faixairrf"> | number
    valorDe?: DecimalWithAggregatesFilter<"faixairrf"> | Decimal | DecimalJsLike | number | string
    valorAte?: DecimalNullableWithAggregatesFilter<"faixairrf"> | Decimal | DecimalJsLike | number | string | null
    aliquota?: DecimalWithAggregatesFilter<"faixairrf"> | Decimal | DecimalJsLike | number | string
    parcelaADeduzir?: DecimalWithAggregatesFilter<"faixairrf"> | Decimal | DecimalJsLike | number | string
  }

  export type enderecoCreateInput = {
    rua: string
    numero?: string | null
    bairro: string
    cidade: string
    estado: string
    cep: string
    imovel?: imovelCreateNestedManyWithoutEnderecoInput
  }

  export type enderecoUncheckedCreateInput = {
    id?: number
    rua: string
    numero?: string | null
    bairro: string
    cidade: string
    estado: string
    cep: string
    imovel?: imovelUncheckedCreateNestedManyWithoutEnderecoInput
  }

  export type enderecoUpdateInput = {
    rua?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    imovel?: imovelUpdateManyWithoutEnderecoNestedInput
  }

  export type enderecoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rua?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    imovel?: imovelUncheckedUpdateManyWithoutEnderecoNestedInput
  }

  export type enderecoCreateManyInput = {
    id?: number
    rua: string
    numero?: string | null
    bairro: string
    cidade: string
    estado: string
    cep: string
  }

  export type enderecoUpdateManyMutationInput = {
    rua?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
  }

  export type enderecoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rua?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
  }

  export type imovelCreateInput = {
    inscricaoIPTU?: string | null
    inscricaoBombeiro?: string | null
    metragem?: string | null
    dataCadastro?: Date | string
    classificacao: $Enums.classificacao_enum
    tipologia: $Enums.tipologia_enum
    status: $Enums.status_imovel_enum
    endereco: enderecoCreateNestedOneWithoutImovelInput
    contratolocacao?: contratolocacaoCreateNestedManyWithoutImovelInput
    propriedadeimovel?: propriedadeimovelCreateNestedManyWithoutImovelInput
    memoriacalculo?: memoriacalculoCreateNestedManyWithoutImovelInput
  }

  export type imovelUncheckedCreateInput = {
    id?: number
    idEndereco: number
    inscricaoIPTU?: string | null
    inscricaoBombeiro?: string | null
    metragem?: string | null
    dataCadastro?: Date | string
    classificacao: $Enums.classificacao_enum
    tipologia: $Enums.tipologia_enum
    status: $Enums.status_imovel_enum
    contratolocacao?: contratolocacaoUncheckedCreateNestedManyWithoutImovelInput
    propriedadeimovel?: propriedadeimovelUncheckedCreateNestedManyWithoutImovelInput
    memoriacalculo?: memoriacalculoUncheckedCreateNestedManyWithoutImovelInput
  }

  export type imovelUpdateInput = {
    inscricaoIPTU?: NullableStringFieldUpdateOperationsInput | string | null
    inscricaoBombeiro?: NullableStringFieldUpdateOperationsInput | string | null
    metragem?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    classificacao?: Enumclassificacao_enumFieldUpdateOperationsInput | $Enums.classificacao_enum
    tipologia?: Enumtipologia_enumFieldUpdateOperationsInput | $Enums.tipologia_enum
    status?: Enumstatus_imovel_enumFieldUpdateOperationsInput | $Enums.status_imovel_enum
    endereco?: enderecoUpdateOneRequiredWithoutImovelNestedInput
    contratolocacao?: contratolocacaoUpdateManyWithoutImovelNestedInput
    propriedadeimovel?: propriedadeimovelUpdateManyWithoutImovelNestedInput
    memoriacalculo?: memoriacalculoUpdateManyWithoutImovelNestedInput
  }

  export type imovelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idEndereco?: IntFieldUpdateOperationsInput | number
    inscricaoIPTU?: NullableStringFieldUpdateOperationsInput | string | null
    inscricaoBombeiro?: NullableStringFieldUpdateOperationsInput | string | null
    metragem?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    classificacao?: Enumclassificacao_enumFieldUpdateOperationsInput | $Enums.classificacao_enum
    tipologia?: Enumtipologia_enumFieldUpdateOperationsInput | $Enums.tipologia_enum
    status?: Enumstatus_imovel_enumFieldUpdateOperationsInput | $Enums.status_imovel_enum
    contratolocacao?: contratolocacaoUncheckedUpdateManyWithoutImovelNestedInput
    propriedadeimovel?: propriedadeimovelUncheckedUpdateManyWithoutImovelNestedInput
    memoriacalculo?: memoriacalculoUncheckedUpdateManyWithoutImovelNestedInput
  }

  export type imovelCreateManyInput = {
    id?: number
    idEndereco: number
    inscricaoIPTU?: string | null
    inscricaoBombeiro?: string | null
    metragem?: string | null
    dataCadastro?: Date | string
    classificacao: $Enums.classificacao_enum
    tipologia: $Enums.tipologia_enum
    status: $Enums.status_imovel_enum
  }

  export type imovelUpdateManyMutationInput = {
    inscricaoIPTU?: NullableStringFieldUpdateOperationsInput | string | null
    inscricaoBombeiro?: NullableStringFieldUpdateOperationsInput | string | null
    metragem?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    classificacao?: Enumclassificacao_enumFieldUpdateOperationsInput | $Enums.classificacao_enum
    tipologia?: Enumtipologia_enumFieldUpdateOperationsInput | $Enums.tipologia_enum
    status?: Enumstatus_imovel_enumFieldUpdateOperationsInput | $Enums.status_imovel_enum
  }

  export type imovelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idEndereco?: IntFieldUpdateOperationsInput | number
    inscricaoIPTU?: NullableStringFieldUpdateOperationsInput | string | null
    inscricaoBombeiro?: NullableStringFieldUpdateOperationsInput | string | null
    metragem?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    classificacao?: Enumclassificacao_enumFieldUpdateOperationsInput | $Enums.classificacao_enum
    tipologia?: Enumtipologia_enumFieldUpdateOperationsInput | $Enums.tipologia_enum
    status?: Enumstatus_imovel_enumFieldUpdateOperationsInput | $Enums.status_imovel_enum
  }

  export type propriedadeimovelCreateInput = {
    idLocador: bigint | number
    percentualParticipacao: Decimal | DecimalJsLike | number | string
    imovel: imovelCreateNestedOneWithoutPropriedadeimovelInput
  }

  export type propriedadeimovelUncheckedCreateInput = {
    id?: number
    idImovel: number
    idLocador: bigint | number
    percentualParticipacao: Decimal | DecimalJsLike | number | string
  }

  export type propriedadeimovelUpdateInput = {
    idLocador?: BigIntFieldUpdateOperationsInput | bigint | number
    percentualParticipacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imovel?: imovelUpdateOneRequiredWithoutPropriedadeimovelNestedInput
  }

  export type propriedadeimovelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idImovel?: IntFieldUpdateOperationsInput | number
    idLocador?: BigIntFieldUpdateOperationsInput | bigint | number
    percentualParticipacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type propriedadeimovelCreateManyInput = {
    id?: number
    idImovel: number
    idLocador: bigint | number
    percentualParticipacao: Decimal | DecimalJsLike | number | string
  }

  export type propriedadeimovelUpdateManyMutationInput = {
    idLocador?: BigIntFieldUpdateOperationsInput | bigint | number
    percentualParticipacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type propriedadeimovelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idImovel?: IntFieldUpdateOperationsInput | number
    idLocador?: BigIntFieldUpdateOperationsInput | bigint | number
    percentualParticipacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type contratolocacaoCreateInput = {
    id?: bigint | number
    idLocador: bigint | number
    idLocatario: bigint | number
    dataInicio: Date | string
    dataFim?: Date | string | null
    dataReajuste?: Date | string | null
    valorAluguel: Decimal | DecimalJsLike | number | string
    status?: $Enums.status_contrato_enum
    contratoDigitalizado?: Bytes | null
    comissao: Decimal | DecimalJsLike | number | string
    imovel: imovelCreateNestedOneWithoutContratolocacaoInput
    despesa?: despesaCreateNestedManyWithoutContratolocacaoInput
    reajustecontrato?: reajustecontratoCreateNestedManyWithoutContratolocacaoInput
    memoriacalculo?: memoriacalculoCreateNestedManyWithoutContratolocacaoInput
  }

  export type contratolocacaoUncheckedCreateInput = {
    id?: bigint | number
    idImovel: number
    idLocador: bigint | number
    idLocatario: bigint | number
    dataInicio: Date | string
    dataFim?: Date | string | null
    dataReajuste?: Date | string | null
    valorAluguel: Decimal | DecimalJsLike | number | string
    status?: $Enums.status_contrato_enum
    contratoDigitalizado?: Bytes | null
    comissao: Decimal | DecimalJsLike | number | string
    despesa?: despesaUncheckedCreateNestedManyWithoutContratolocacaoInput
    reajustecontrato?: reajustecontratoUncheckedCreateNestedManyWithoutContratolocacaoInput
    memoriacalculo?: memoriacalculoUncheckedCreateNestedManyWithoutContratolocacaoInput
  }

  export type contratolocacaoUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idLocador?: BigIntFieldUpdateOperationsInput | bigint | number
    idLocatario?: BigIntFieldUpdateOperationsInput | bigint | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataReajuste?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorAluguel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumstatus_contrato_enumFieldUpdateOperationsInput | $Enums.status_contrato_enum
    contratoDigitalizado?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    comissao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imovel?: imovelUpdateOneRequiredWithoutContratolocacaoNestedInput
    despesa?: despesaUpdateManyWithoutContratolocacaoNestedInput
    reajustecontrato?: reajustecontratoUpdateManyWithoutContratolocacaoNestedInput
    memoriacalculo?: memoriacalculoUpdateManyWithoutContratolocacaoNestedInput
  }

  export type contratolocacaoUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idImovel?: IntFieldUpdateOperationsInput | number
    idLocador?: BigIntFieldUpdateOperationsInput | bigint | number
    idLocatario?: BigIntFieldUpdateOperationsInput | bigint | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataReajuste?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorAluguel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumstatus_contrato_enumFieldUpdateOperationsInput | $Enums.status_contrato_enum
    contratoDigitalizado?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    comissao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    despesa?: despesaUncheckedUpdateManyWithoutContratolocacaoNestedInput
    reajustecontrato?: reajustecontratoUncheckedUpdateManyWithoutContratolocacaoNestedInput
    memoriacalculo?: memoriacalculoUncheckedUpdateManyWithoutContratolocacaoNestedInput
  }

  export type contratolocacaoCreateManyInput = {
    id?: bigint | number
    idImovel: number
    idLocador: bigint | number
    idLocatario: bigint | number
    dataInicio: Date | string
    dataFim?: Date | string | null
    dataReajuste?: Date | string | null
    valorAluguel: Decimal | DecimalJsLike | number | string
    status?: $Enums.status_contrato_enum
    contratoDigitalizado?: Bytes | null
    comissao: Decimal | DecimalJsLike | number | string
  }

  export type contratolocacaoUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idLocador?: BigIntFieldUpdateOperationsInput | bigint | number
    idLocatario?: BigIntFieldUpdateOperationsInput | bigint | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataReajuste?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorAluguel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumstatus_contrato_enumFieldUpdateOperationsInput | $Enums.status_contrato_enum
    contratoDigitalizado?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    comissao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type contratolocacaoUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idImovel?: IntFieldUpdateOperationsInput | number
    idLocador?: BigIntFieldUpdateOperationsInput | bigint | number
    idLocatario?: BigIntFieldUpdateOperationsInput | bigint | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataReajuste?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorAluguel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumstatus_contrato_enumFieldUpdateOperationsInput | $Enums.status_contrato_enum
    contratoDigitalizado?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    comissao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type reajustecontratoCreateInput = {
    id?: bigint | number
    dataReajuste: Date | string
    indice: $Enums.indice_reajuste_enum
    percentual: Decimal | DecimalJsLike | number | string
    valorAnterior: Decimal | DecimalJsLike | number | string
    valorNovo: Decimal | DecimalJsLike | number | string
    observacao?: string | null
    criadoEm?: Date | string
    contratolocacao: contratolocacaoCreateNestedOneWithoutReajustecontratoInput
  }

  export type reajustecontratoUncheckedCreateInput = {
    id?: bigint | number
    idContrato: bigint | number
    dataReajuste: Date | string
    indice: $Enums.indice_reajuste_enum
    percentual: Decimal | DecimalJsLike | number | string
    valorAnterior: Decimal | DecimalJsLike | number | string
    valorNovo: Decimal | DecimalJsLike | number | string
    observacao?: string | null
    criadoEm?: Date | string
  }

  export type reajustecontratoUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    dataReajuste?: DateTimeFieldUpdateOperationsInput | Date | string
    indice?: Enumindice_reajuste_enumFieldUpdateOperationsInput | $Enums.indice_reajuste_enum
    percentual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAnterior?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorNovo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    contratolocacao?: contratolocacaoUpdateOneRequiredWithoutReajustecontratoNestedInput
  }

  export type reajustecontratoUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idContrato?: BigIntFieldUpdateOperationsInput | bigint | number
    dataReajuste?: DateTimeFieldUpdateOperationsInput | Date | string
    indice?: Enumindice_reajuste_enumFieldUpdateOperationsInput | $Enums.indice_reajuste_enum
    percentual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAnterior?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorNovo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reajustecontratoCreateManyInput = {
    id?: bigint | number
    idContrato: bigint | number
    dataReajuste: Date | string
    indice: $Enums.indice_reajuste_enum
    percentual: Decimal | DecimalJsLike | number | string
    valorAnterior: Decimal | DecimalJsLike | number | string
    valorNovo: Decimal | DecimalJsLike | number | string
    observacao?: string | null
    criadoEm?: Date | string
  }

  export type reajustecontratoUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    dataReajuste?: DateTimeFieldUpdateOperationsInput | Date | string
    indice?: Enumindice_reajuste_enumFieldUpdateOperationsInput | $Enums.indice_reajuste_enum
    percentual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAnterior?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorNovo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reajustecontratoUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idContrato?: BigIntFieldUpdateOperationsInput | bigint | number
    dataReajuste?: DateTimeFieldUpdateOperationsInput | Date | string
    indice?: Enumindice_reajuste_enumFieldUpdateOperationsInput | $Enums.indice_reajuste_enum
    percentual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAnterior?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorNovo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type memoriacalculoCreateInput = {
    competencia: Date | string
    valorAluguelBase: Decimal | DecimalJsLike | number | string
    idContaBancaria?: number | null
    contaDescricao?: string | null
    contaBanco?: string | null
    contaAgencia?: string | null
    contaNumero?: string | null
    contaTipoChavePix?: string | null
    contaChavePix?: string | null
    contaTitular?: string | null
    contaDocumentoTitular?: string | null
    reajusteIndice?: $Enums.indice_reajuste_enum | null
    reajustePercentual?: Decimal | DecimalJsLike | number | string | null
    reajusteValorAnterior?: Decimal | DecimalJsLike | number | string | null
    totalAPagar: Decimal | DecimalJsLike | number | string
    geradoPorUsuarioId: number
    criadoEm?: Date | string
    contratolocacao: contratolocacaoCreateNestedOneWithoutMemoriacalculoInput
    imovel: imovelCreateNestedOneWithoutMemoriacalculoInput
    itens?: memoriacalculoitemCreateNestedManyWithoutMemoriacalculoInput
  }

  export type memoriacalculoUncheckedCreateInput = {
    id?: number
    idContrato: bigint | number
    idImovel: number
    competencia: Date | string
    valorAluguelBase: Decimal | DecimalJsLike | number | string
    idContaBancaria?: number | null
    contaDescricao?: string | null
    contaBanco?: string | null
    contaAgencia?: string | null
    contaNumero?: string | null
    contaTipoChavePix?: string | null
    contaChavePix?: string | null
    contaTitular?: string | null
    contaDocumentoTitular?: string | null
    reajusteIndice?: $Enums.indice_reajuste_enum | null
    reajustePercentual?: Decimal | DecimalJsLike | number | string | null
    reajusteValorAnterior?: Decimal | DecimalJsLike | number | string | null
    totalAPagar: Decimal | DecimalJsLike | number | string
    geradoPorUsuarioId: number
    criadoEm?: Date | string
    itens?: memoriacalculoitemUncheckedCreateNestedManyWithoutMemoriacalculoInput
  }

  export type memoriacalculoUpdateInput = {
    competencia?: DateTimeFieldUpdateOperationsInput | Date | string
    valorAluguelBase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    idContaBancaria?: NullableIntFieldUpdateOperationsInput | number | null
    contaDescricao?: NullableStringFieldUpdateOperationsInput | string | null
    contaBanco?: NullableStringFieldUpdateOperationsInput | string | null
    contaAgencia?: NullableStringFieldUpdateOperationsInput | string | null
    contaNumero?: NullableStringFieldUpdateOperationsInput | string | null
    contaTipoChavePix?: NullableStringFieldUpdateOperationsInput | string | null
    contaChavePix?: NullableStringFieldUpdateOperationsInput | string | null
    contaTitular?: NullableStringFieldUpdateOperationsInput | string | null
    contaDocumentoTitular?: NullableStringFieldUpdateOperationsInput | string | null
    reajusteIndice?: NullableEnumindice_reajuste_enumFieldUpdateOperationsInput | $Enums.indice_reajuste_enum | null
    reajustePercentual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    reajusteValorAnterior?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalAPagar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    geradoPorUsuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    contratolocacao?: contratolocacaoUpdateOneRequiredWithoutMemoriacalculoNestedInput
    imovel?: imovelUpdateOneRequiredWithoutMemoriacalculoNestedInput
    itens?: memoriacalculoitemUpdateManyWithoutMemoriacalculoNestedInput
  }

  export type memoriacalculoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idContrato?: BigIntFieldUpdateOperationsInput | bigint | number
    idImovel?: IntFieldUpdateOperationsInput | number
    competencia?: DateTimeFieldUpdateOperationsInput | Date | string
    valorAluguelBase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    idContaBancaria?: NullableIntFieldUpdateOperationsInput | number | null
    contaDescricao?: NullableStringFieldUpdateOperationsInput | string | null
    contaBanco?: NullableStringFieldUpdateOperationsInput | string | null
    contaAgencia?: NullableStringFieldUpdateOperationsInput | string | null
    contaNumero?: NullableStringFieldUpdateOperationsInput | string | null
    contaTipoChavePix?: NullableStringFieldUpdateOperationsInput | string | null
    contaChavePix?: NullableStringFieldUpdateOperationsInput | string | null
    contaTitular?: NullableStringFieldUpdateOperationsInput | string | null
    contaDocumentoTitular?: NullableStringFieldUpdateOperationsInput | string | null
    reajusteIndice?: NullableEnumindice_reajuste_enumFieldUpdateOperationsInput | $Enums.indice_reajuste_enum | null
    reajustePercentual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    reajusteValorAnterior?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalAPagar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    geradoPorUsuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: memoriacalculoitemUncheckedUpdateManyWithoutMemoriacalculoNestedInput
  }

  export type memoriacalculoCreateManyInput = {
    id?: number
    idContrato: bigint | number
    idImovel: number
    competencia: Date | string
    valorAluguelBase: Decimal | DecimalJsLike | number | string
    idContaBancaria?: number | null
    contaDescricao?: string | null
    contaBanco?: string | null
    contaAgencia?: string | null
    contaNumero?: string | null
    contaTipoChavePix?: string | null
    contaChavePix?: string | null
    contaTitular?: string | null
    contaDocumentoTitular?: string | null
    reajusteIndice?: $Enums.indice_reajuste_enum | null
    reajustePercentual?: Decimal | DecimalJsLike | number | string | null
    reajusteValorAnterior?: Decimal | DecimalJsLike | number | string | null
    totalAPagar: Decimal | DecimalJsLike | number | string
    geradoPorUsuarioId: number
    criadoEm?: Date | string
  }

  export type memoriacalculoUpdateManyMutationInput = {
    competencia?: DateTimeFieldUpdateOperationsInput | Date | string
    valorAluguelBase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    idContaBancaria?: NullableIntFieldUpdateOperationsInput | number | null
    contaDescricao?: NullableStringFieldUpdateOperationsInput | string | null
    contaBanco?: NullableStringFieldUpdateOperationsInput | string | null
    contaAgencia?: NullableStringFieldUpdateOperationsInput | string | null
    contaNumero?: NullableStringFieldUpdateOperationsInput | string | null
    contaTipoChavePix?: NullableStringFieldUpdateOperationsInput | string | null
    contaChavePix?: NullableStringFieldUpdateOperationsInput | string | null
    contaTitular?: NullableStringFieldUpdateOperationsInput | string | null
    contaDocumentoTitular?: NullableStringFieldUpdateOperationsInput | string | null
    reajusteIndice?: NullableEnumindice_reajuste_enumFieldUpdateOperationsInput | $Enums.indice_reajuste_enum | null
    reajustePercentual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    reajusteValorAnterior?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalAPagar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    geradoPorUsuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type memoriacalculoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idContrato?: BigIntFieldUpdateOperationsInput | bigint | number
    idImovel?: IntFieldUpdateOperationsInput | number
    competencia?: DateTimeFieldUpdateOperationsInput | Date | string
    valorAluguelBase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    idContaBancaria?: NullableIntFieldUpdateOperationsInput | number | null
    contaDescricao?: NullableStringFieldUpdateOperationsInput | string | null
    contaBanco?: NullableStringFieldUpdateOperationsInput | string | null
    contaAgencia?: NullableStringFieldUpdateOperationsInput | string | null
    contaNumero?: NullableStringFieldUpdateOperationsInput | string | null
    contaTipoChavePix?: NullableStringFieldUpdateOperationsInput | string | null
    contaChavePix?: NullableStringFieldUpdateOperationsInput | string | null
    contaTitular?: NullableStringFieldUpdateOperationsInput | string | null
    contaDocumentoTitular?: NullableStringFieldUpdateOperationsInput | string | null
    reajusteIndice?: NullableEnumindice_reajuste_enumFieldUpdateOperationsInput | $Enums.indice_reajuste_enum | null
    reajustePercentual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    reajusteValorAnterior?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalAPagar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    geradoPorUsuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type memoriacalculoitemCreateInput = {
    idLocador: bigint | number
    nomeLocador: string
    documentoLocador?: string | null
    percentualParticipacao: Decimal | DecimalJsLike | number | string
    valorAluguel: Decimal | DecimalJsLike | number | string
    valorReembolsos?: Decimal | DecimalJsLike | number | string
    valorDescontos?: Decimal | DecimalJsLike | number | string
    baseCalculoIrrf: Decimal | DecimalJsLike | number | string
    valorIrrf: Decimal | DecimalJsLike | number | string
    valorAPagar: Decimal | DecimalJsLike | number | string
    detalhesExtras?: NullableJsonNullValueInput | InputJsonValue
    memoriacalculo: memoriacalculoCreateNestedOneWithoutItensInput
  }

  export type memoriacalculoitemUncheckedCreateInput = {
    id?: number
    idMemoriaCalculo: number
    idLocador: bigint | number
    nomeLocador: string
    documentoLocador?: string | null
    percentualParticipacao: Decimal | DecimalJsLike | number | string
    valorAluguel: Decimal | DecimalJsLike | number | string
    valorReembolsos?: Decimal | DecimalJsLike | number | string
    valorDescontos?: Decimal | DecimalJsLike | number | string
    baseCalculoIrrf: Decimal | DecimalJsLike | number | string
    valorIrrf: Decimal | DecimalJsLike | number | string
    valorAPagar: Decimal | DecimalJsLike | number | string
    detalhesExtras?: NullableJsonNullValueInput | InputJsonValue
  }

  export type memoriacalculoitemUpdateInput = {
    idLocador?: BigIntFieldUpdateOperationsInput | bigint | number
    nomeLocador?: StringFieldUpdateOperationsInput | string
    documentoLocador?: NullableStringFieldUpdateOperationsInput | string | null
    percentualParticipacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAluguel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorReembolsos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorDescontos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    baseCalculoIrrf?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorIrrf?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAPagar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detalhesExtras?: NullableJsonNullValueInput | InputJsonValue
    memoriacalculo?: memoriacalculoUpdateOneRequiredWithoutItensNestedInput
  }

  export type memoriacalculoitemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idMemoriaCalculo?: IntFieldUpdateOperationsInput | number
    idLocador?: BigIntFieldUpdateOperationsInput | bigint | number
    nomeLocador?: StringFieldUpdateOperationsInput | string
    documentoLocador?: NullableStringFieldUpdateOperationsInput | string | null
    percentualParticipacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAluguel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorReembolsos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorDescontos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    baseCalculoIrrf?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorIrrf?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAPagar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detalhesExtras?: NullableJsonNullValueInput | InputJsonValue
  }

  export type memoriacalculoitemCreateManyInput = {
    id?: number
    idMemoriaCalculo: number
    idLocador: bigint | number
    nomeLocador: string
    documentoLocador?: string | null
    percentualParticipacao: Decimal | DecimalJsLike | number | string
    valorAluguel: Decimal | DecimalJsLike | number | string
    valorReembolsos?: Decimal | DecimalJsLike | number | string
    valorDescontos?: Decimal | DecimalJsLike | number | string
    baseCalculoIrrf: Decimal | DecimalJsLike | number | string
    valorIrrf: Decimal | DecimalJsLike | number | string
    valorAPagar: Decimal | DecimalJsLike | number | string
    detalhesExtras?: NullableJsonNullValueInput | InputJsonValue
  }

  export type memoriacalculoitemUpdateManyMutationInput = {
    idLocador?: BigIntFieldUpdateOperationsInput | bigint | number
    nomeLocador?: StringFieldUpdateOperationsInput | string
    documentoLocador?: NullableStringFieldUpdateOperationsInput | string | null
    percentualParticipacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAluguel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorReembolsos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorDescontos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    baseCalculoIrrf?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorIrrf?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAPagar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detalhesExtras?: NullableJsonNullValueInput | InputJsonValue
  }

  export type memoriacalculoitemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idMemoriaCalculo?: IntFieldUpdateOperationsInput | number
    idLocador?: BigIntFieldUpdateOperationsInput | bigint | number
    nomeLocador?: StringFieldUpdateOperationsInput | string
    documentoLocador?: NullableStringFieldUpdateOperationsInput | string | null
    percentualParticipacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAluguel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorReembolsos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorDescontos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    baseCalculoIrrf?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorIrrf?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAPagar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detalhesExtras?: NullableJsonNullValueInput | InputJsonValue
  }

  export type despesaCreateInput = {
    id?: bigint | number
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    tipo: $Enums.tipo_despesa_enum
    dataVencimento: Date | string
    dataPagamento?: Date | string | null
    status?: $Enums.status_despesa_enum
    comprovantePagamento?: Bytes | null
    contratolocacao: contratolocacaoCreateNestedOneWithoutDespesaInput
  }

  export type despesaUncheckedCreateInput = {
    id?: bigint | number
    idContratoLocacao: bigint | number
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    tipo: $Enums.tipo_despesa_enum
    dataVencimento: Date | string
    dataPagamento?: Date | string | null
    status?: $Enums.status_despesa_enum
    comprovantePagamento?: Bytes | null
  }

  export type despesaUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: Enumtipo_despesa_enumFieldUpdateOperationsInput | $Enums.tipo_despesa_enum
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: Enumstatus_despesa_enumFieldUpdateOperationsInput | $Enums.status_despesa_enum
    comprovantePagamento?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    contratolocacao?: contratolocacaoUpdateOneRequiredWithoutDespesaNestedInput
  }

  export type despesaUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idContratoLocacao?: BigIntFieldUpdateOperationsInput | bigint | number
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: Enumtipo_despesa_enumFieldUpdateOperationsInput | $Enums.tipo_despesa_enum
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: Enumstatus_despesa_enumFieldUpdateOperationsInput | $Enums.status_despesa_enum
    comprovantePagamento?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type despesaCreateManyInput = {
    id?: bigint | number
    idContratoLocacao: bigint | number
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    tipo: $Enums.tipo_despesa_enum
    dataVencimento: Date | string
    dataPagamento?: Date | string | null
    status?: $Enums.status_despesa_enum
    comprovantePagamento?: Bytes | null
  }

  export type despesaUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: Enumtipo_despesa_enumFieldUpdateOperationsInput | $Enums.tipo_despesa_enum
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: Enumstatus_despesa_enumFieldUpdateOperationsInput | $Enums.status_despesa_enum
    comprovantePagamento?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type despesaUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idContratoLocacao?: BigIntFieldUpdateOperationsInput | bigint | number
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: Enumtipo_despesa_enumFieldUpdateOperationsInput | $Enums.tipo_despesa_enum
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: Enumstatus_despesa_enumFieldUpdateOperationsInput | $Enums.status_despesa_enum
    comprovantePagamento?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type tabelairrfCreateInput = {
    vigenciaInicio: Date | string
    descricao?: string | null
    deducaoDependente: Decimal | DecimalJsLike | number | string
    redutorLimiteIsencao?: Decimal | DecimalJsLike | number | string | null
    redutorLimiteSuperior?: Decimal | DecimalJsLike | number | string | null
    redutorConstante?: Decimal | DecimalJsLike | number | string | null
    redutorCoeficiente?: Decimal | DecimalJsLike | number | string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    faixairrf?: faixairrfCreateNestedManyWithoutTabelairrfInput
  }

  export type tabelairrfUncheckedCreateInput = {
    id?: number
    vigenciaInicio: Date | string
    descricao?: string | null
    deducaoDependente: Decimal | DecimalJsLike | number | string
    redutorLimiteIsencao?: Decimal | DecimalJsLike | number | string | null
    redutorLimiteSuperior?: Decimal | DecimalJsLike | number | string | null
    redutorConstante?: Decimal | DecimalJsLike | number | string | null
    redutorCoeficiente?: Decimal | DecimalJsLike | number | string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    faixairrf?: faixairrfUncheckedCreateNestedManyWithoutTabelairrfInput
  }

  export type tabelairrfUpdateInput = {
    vigenciaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    deducaoDependente?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    redutorLimiteIsencao?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redutorLimiteSuperior?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redutorConstante?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redutorCoeficiente?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    faixairrf?: faixairrfUpdateManyWithoutTabelairrfNestedInput
  }

  export type tabelairrfUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vigenciaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    deducaoDependente?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    redutorLimiteIsencao?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redutorLimiteSuperior?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redutorConstante?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redutorCoeficiente?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    faixairrf?: faixairrfUncheckedUpdateManyWithoutTabelairrfNestedInput
  }

  export type tabelairrfCreateManyInput = {
    id?: number
    vigenciaInicio: Date | string
    descricao?: string | null
    deducaoDependente: Decimal | DecimalJsLike | number | string
    redutorLimiteIsencao?: Decimal | DecimalJsLike | number | string | null
    redutorLimiteSuperior?: Decimal | DecimalJsLike | number | string | null
    redutorConstante?: Decimal | DecimalJsLike | number | string | null
    redutorCoeficiente?: Decimal | DecimalJsLike | number | string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type tabelairrfUpdateManyMutationInput = {
    vigenciaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    deducaoDependente?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    redutorLimiteIsencao?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redutorLimiteSuperior?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redutorConstante?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redutorCoeficiente?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tabelairrfUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    vigenciaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    deducaoDependente?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    redutorLimiteIsencao?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redutorLimiteSuperior?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redutorConstante?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redutorCoeficiente?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type faixairrfCreateInput = {
    ordem: number
    valorDe: Decimal | DecimalJsLike | number | string
    valorAte?: Decimal | DecimalJsLike | number | string | null
    aliquota: Decimal | DecimalJsLike | number | string
    parcelaADeduzir: Decimal | DecimalJsLike | number | string
    tabelairrf: tabelairrfCreateNestedOneWithoutFaixairrfInput
  }

  export type faixairrfUncheckedCreateInput = {
    id?: number
    idTabela: number
    ordem: number
    valorDe: Decimal | DecimalJsLike | number | string
    valorAte?: Decimal | DecimalJsLike | number | string | null
    aliquota: Decimal | DecimalJsLike | number | string
    parcelaADeduzir: Decimal | DecimalJsLike | number | string
  }

  export type faixairrfUpdateInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    valorDe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAte?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aliquota?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    parcelaADeduzir?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tabelairrf?: tabelairrfUpdateOneRequiredWithoutFaixairrfNestedInput
  }

  export type faixairrfUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTabela?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
    valorDe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAte?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aliquota?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    parcelaADeduzir?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type faixairrfCreateManyInput = {
    id?: number
    idTabela: number
    ordem: number
    valorDe: Decimal | DecimalJsLike | number | string
    valorAte?: Decimal | DecimalJsLike | number | string | null
    aliquota: Decimal | DecimalJsLike | number | string
    parcelaADeduzir: Decimal | DecimalJsLike | number | string
  }

  export type faixairrfUpdateManyMutationInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    valorDe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAte?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aliquota?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    parcelaADeduzir?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type faixairrfUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTabela?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
    valorDe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAte?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aliquota?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    parcelaADeduzir?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ImovelListRelationFilter = {
    every?: imovelWhereInput
    some?: imovelWhereInput
    none?: imovelWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type imovelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type enderecoOrderByRelevanceInput = {
    fields: enderecoOrderByRelevanceFieldEnum | enderecoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type enderecoCountOrderByAggregateInput = {
    id?: SortOrder
    rua?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrder
  }

  export type enderecoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type enderecoMaxOrderByAggregateInput = {
    id?: SortOrder
    rua?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrder
  }

  export type enderecoMinOrderByAggregateInput = {
    id?: SortOrder
    rua?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrder
  }

  export type enderecoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Enumclassificacao_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.classificacao_enum | Enumclassificacao_enumFieldRefInput<$PrismaModel>
    in?: $Enums.classificacao_enum[]
    notIn?: $Enums.classificacao_enum[]
    not?: NestedEnumclassificacao_enumFilter<$PrismaModel> | $Enums.classificacao_enum
  }

  export type Enumtipologia_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.tipologia_enum | Enumtipologia_enumFieldRefInput<$PrismaModel>
    in?: $Enums.tipologia_enum[]
    notIn?: $Enums.tipologia_enum[]
    not?: NestedEnumtipologia_enumFilter<$PrismaModel> | $Enums.tipologia_enum
  }

  export type Enumstatus_imovel_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.status_imovel_enum | Enumstatus_imovel_enumFieldRefInput<$PrismaModel>
    in?: $Enums.status_imovel_enum[]
    notIn?: $Enums.status_imovel_enum[]
    not?: NestedEnumstatus_imovel_enumFilter<$PrismaModel> | $Enums.status_imovel_enum
  }

  export type EnderecoScalarRelationFilter = {
    is?: enderecoWhereInput
    isNot?: enderecoWhereInput
  }

  export type ContratolocacaoListRelationFilter = {
    every?: contratolocacaoWhereInput
    some?: contratolocacaoWhereInput
    none?: contratolocacaoWhereInput
  }

  export type PropriedadeimovelListRelationFilter = {
    every?: propriedadeimovelWhereInput
    some?: propriedadeimovelWhereInput
    none?: propriedadeimovelWhereInput
  }

  export type MemoriacalculoListRelationFilter = {
    every?: memoriacalculoWhereInput
    some?: memoriacalculoWhereInput
    none?: memoriacalculoWhereInput
  }

  export type contratolocacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type propriedadeimovelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type memoriacalculoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type imovelOrderByRelevanceInput = {
    fields: imovelOrderByRelevanceFieldEnum | imovelOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type imovelCountOrderByAggregateInput = {
    id?: SortOrder
    idEndereco?: SortOrder
    inscricaoIPTU?: SortOrder
    inscricaoBombeiro?: SortOrder
    metragem?: SortOrder
    dataCadastro?: SortOrder
    classificacao?: SortOrder
    tipologia?: SortOrder
    status?: SortOrder
  }

  export type imovelAvgOrderByAggregateInput = {
    id?: SortOrder
    idEndereco?: SortOrder
  }

  export type imovelMaxOrderByAggregateInput = {
    id?: SortOrder
    idEndereco?: SortOrder
    inscricaoIPTU?: SortOrder
    inscricaoBombeiro?: SortOrder
    metragem?: SortOrder
    dataCadastro?: SortOrder
    classificacao?: SortOrder
    tipologia?: SortOrder
    status?: SortOrder
  }

  export type imovelMinOrderByAggregateInput = {
    id?: SortOrder
    idEndereco?: SortOrder
    inscricaoIPTU?: SortOrder
    inscricaoBombeiro?: SortOrder
    metragem?: SortOrder
    dataCadastro?: SortOrder
    classificacao?: SortOrder
    tipologia?: SortOrder
    status?: SortOrder
  }

  export type imovelSumOrderByAggregateInput = {
    id?: SortOrder
    idEndereco?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Enumclassificacao_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.classificacao_enum | Enumclassificacao_enumFieldRefInput<$PrismaModel>
    in?: $Enums.classificacao_enum[]
    notIn?: $Enums.classificacao_enum[]
    not?: NestedEnumclassificacao_enumWithAggregatesFilter<$PrismaModel> | $Enums.classificacao_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumclassificacao_enumFilter<$PrismaModel>
    _max?: NestedEnumclassificacao_enumFilter<$PrismaModel>
  }

  export type Enumtipologia_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tipologia_enum | Enumtipologia_enumFieldRefInput<$PrismaModel>
    in?: $Enums.tipologia_enum[]
    notIn?: $Enums.tipologia_enum[]
    not?: NestedEnumtipologia_enumWithAggregatesFilter<$PrismaModel> | $Enums.tipologia_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtipologia_enumFilter<$PrismaModel>
    _max?: NestedEnumtipologia_enumFilter<$PrismaModel>
  }

  export type Enumstatus_imovel_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status_imovel_enum | Enumstatus_imovel_enumFieldRefInput<$PrismaModel>
    in?: $Enums.status_imovel_enum[]
    notIn?: $Enums.status_imovel_enum[]
    not?: NestedEnumstatus_imovel_enumWithAggregatesFilter<$PrismaModel> | $Enums.status_imovel_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatus_imovel_enumFilter<$PrismaModel>
    _max?: NestedEnumstatus_imovel_enumFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ImovelScalarRelationFilter = {
    is?: imovelWhereInput
    isNot?: imovelWhereInput
  }

  export type propriedadeimovelCountOrderByAggregateInput = {
    id?: SortOrder
    idImovel?: SortOrder
    idLocador?: SortOrder
    percentualParticipacao?: SortOrder
  }

  export type propriedadeimovelAvgOrderByAggregateInput = {
    id?: SortOrder
    idImovel?: SortOrder
    idLocador?: SortOrder
    percentualParticipacao?: SortOrder
  }

  export type propriedadeimovelMaxOrderByAggregateInput = {
    id?: SortOrder
    idImovel?: SortOrder
    idLocador?: SortOrder
    percentualParticipacao?: SortOrder
  }

  export type propriedadeimovelMinOrderByAggregateInput = {
    id?: SortOrder
    idImovel?: SortOrder
    idLocador?: SortOrder
    percentualParticipacao?: SortOrder
  }

  export type propriedadeimovelSumOrderByAggregateInput = {
    id?: SortOrder
    idImovel?: SortOrder
    idLocador?: SortOrder
    percentualParticipacao?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Enumstatus_contrato_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.status_contrato_enum | Enumstatus_contrato_enumFieldRefInput<$PrismaModel>
    in?: $Enums.status_contrato_enum[]
    notIn?: $Enums.status_contrato_enum[]
    not?: NestedEnumstatus_contrato_enumFilter<$PrismaModel> | $Enums.status_contrato_enum
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | null
    notIn?: Bytes[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Bytes | null
  }

  export type DespesaListRelationFilter = {
    every?: despesaWhereInput
    some?: despesaWhereInput
    none?: despesaWhereInput
  }

  export type ReajustecontratoListRelationFilter = {
    every?: reajustecontratoWhereInput
    some?: reajustecontratoWhereInput
    none?: reajustecontratoWhereInput
  }

  export type despesaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reajustecontratoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type contratolocacaoCountOrderByAggregateInput = {
    id?: SortOrder
    idImovel?: SortOrder
    idLocador?: SortOrder
    idLocatario?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    dataReajuste?: SortOrder
    valorAluguel?: SortOrder
    status?: SortOrder
    contratoDigitalizado?: SortOrder
    comissao?: SortOrder
  }

  export type contratolocacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    idImovel?: SortOrder
    idLocador?: SortOrder
    idLocatario?: SortOrder
    valorAluguel?: SortOrder
    comissao?: SortOrder
  }

  export type contratolocacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    idImovel?: SortOrder
    idLocador?: SortOrder
    idLocatario?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    dataReajuste?: SortOrder
    valorAluguel?: SortOrder
    status?: SortOrder
    contratoDigitalizado?: SortOrder
    comissao?: SortOrder
  }

  export type contratolocacaoMinOrderByAggregateInput = {
    id?: SortOrder
    idImovel?: SortOrder
    idLocador?: SortOrder
    idLocatario?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    dataReajuste?: SortOrder
    valorAluguel?: SortOrder
    status?: SortOrder
    contratoDigitalizado?: SortOrder
    comissao?: SortOrder
  }

  export type contratolocacaoSumOrderByAggregateInput = {
    id?: SortOrder
    idImovel?: SortOrder
    idLocador?: SortOrder
    idLocatario?: SortOrder
    valorAluguel?: SortOrder
    comissao?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Enumstatus_contrato_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status_contrato_enum | Enumstatus_contrato_enumFieldRefInput<$PrismaModel>
    in?: $Enums.status_contrato_enum[]
    notIn?: $Enums.status_contrato_enum[]
    not?: NestedEnumstatus_contrato_enumWithAggregatesFilter<$PrismaModel> | $Enums.status_contrato_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatus_contrato_enumFilter<$PrismaModel>
    _max?: NestedEnumstatus_contrato_enumFilter<$PrismaModel>
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | null
    notIn?: Bytes[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Bytes | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type Enumindice_reajuste_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.indice_reajuste_enum | Enumindice_reajuste_enumFieldRefInput<$PrismaModel>
    in?: $Enums.indice_reajuste_enum[]
    notIn?: $Enums.indice_reajuste_enum[]
    not?: NestedEnumindice_reajuste_enumFilter<$PrismaModel> | $Enums.indice_reajuste_enum
  }

  export type ContratolocacaoScalarRelationFilter = {
    is?: contratolocacaoWhereInput
    isNot?: contratolocacaoWhereInput
  }

  export type reajustecontratoOrderByRelevanceInput = {
    fields: reajustecontratoOrderByRelevanceFieldEnum | reajustecontratoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type reajustecontratoCountOrderByAggregateInput = {
    id?: SortOrder
    idContrato?: SortOrder
    dataReajuste?: SortOrder
    indice?: SortOrder
    percentual?: SortOrder
    valorAnterior?: SortOrder
    valorNovo?: SortOrder
    observacao?: SortOrder
    criadoEm?: SortOrder
  }

  export type reajustecontratoAvgOrderByAggregateInput = {
    id?: SortOrder
    idContrato?: SortOrder
    percentual?: SortOrder
    valorAnterior?: SortOrder
    valorNovo?: SortOrder
  }

  export type reajustecontratoMaxOrderByAggregateInput = {
    id?: SortOrder
    idContrato?: SortOrder
    dataReajuste?: SortOrder
    indice?: SortOrder
    percentual?: SortOrder
    valorAnterior?: SortOrder
    valorNovo?: SortOrder
    observacao?: SortOrder
    criadoEm?: SortOrder
  }

  export type reajustecontratoMinOrderByAggregateInput = {
    id?: SortOrder
    idContrato?: SortOrder
    dataReajuste?: SortOrder
    indice?: SortOrder
    percentual?: SortOrder
    valorAnterior?: SortOrder
    valorNovo?: SortOrder
    observacao?: SortOrder
    criadoEm?: SortOrder
  }

  export type reajustecontratoSumOrderByAggregateInput = {
    id?: SortOrder
    idContrato?: SortOrder
    percentual?: SortOrder
    valorAnterior?: SortOrder
    valorNovo?: SortOrder
  }

  export type Enumindice_reajuste_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.indice_reajuste_enum | Enumindice_reajuste_enumFieldRefInput<$PrismaModel>
    in?: $Enums.indice_reajuste_enum[]
    notIn?: $Enums.indice_reajuste_enum[]
    not?: NestedEnumindice_reajuste_enumWithAggregatesFilter<$PrismaModel> | $Enums.indice_reajuste_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumindice_reajuste_enumFilter<$PrismaModel>
    _max?: NestedEnumindice_reajuste_enumFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Enumindice_reajuste_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.indice_reajuste_enum | Enumindice_reajuste_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.indice_reajuste_enum[] | null
    notIn?: $Enums.indice_reajuste_enum[] | null
    not?: NestedEnumindice_reajuste_enumNullableFilter<$PrismaModel> | $Enums.indice_reajuste_enum | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type MemoriacalculoitemListRelationFilter = {
    every?: memoriacalculoitemWhereInput
    some?: memoriacalculoitemWhereInput
    none?: memoriacalculoitemWhereInput
  }

  export type memoriacalculoitemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type memoriacalculoOrderByRelevanceInput = {
    fields: memoriacalculoOrderByRelevanceFieldEnum | memoriacalculoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type memoriacalculoIdContratoCompetenciaCompoundUniqueInput = {
    idContrato: bigint | number
    competencia: Date | string
  }

  export type memoriacalculoCountOrderByAggregateInput = {
    id?: SortOrder
    idContrato?: SortOrder
    idImovel?: SortOrder
    competencia?: SortOrder
    valorAluguelBase?: SortOrder
    idContaBancaria?: SortOrder
    contaDescricao?: SortOrder
    contaBanco?: SortOrder
    contaAgencia?: SortOrder
    contaNumero?: SortOrder
    contaTipoChavePix?: SortOrder
    contaChavePix?: SortOrder
    contaTitular?: SortOrder
    contaDocumentoTitular?: SortOrder
    reajusteIndice?: SortOrder
    reajustePercentual?: SortOrder
    reajusteValorAnterior?: SortOrder
    totalAPagar?: SortOrder
    geradoPorUsuarioId?: SortOrder
    criadoEm?: SortOrder
  }

  export type memoriacalculoAvgOrderByAggregateInput = {
    id?: SortOrder
    idContrato?: SortOrder
    idImovel?: SortOrder
    valorAluguelBase?: SortOrder
    idContaBancaria?: SortOrder
    reajustePercentual?: SortOrder
    reajusteValorAnterior?: SortOrder
    totalAPagar?: SortOrder
    geradoPorUsuarioId?: SortOrder
  }

  export type memoriacalculoMaxOrderByAggregateInput = {
    id?: SortOrder
    idContrato?: SortOrder
    idImovel?: SortOrder
    competencia?: SortOrder
    valorAluguelBase?: SortOrder
    idContaBancaria?: SortOrder
    contaDescricao?: SortOrder
    contaBanco?: SortOrder
    contaAgencia?: SortOrder
    contaNumero?: SortOrder
    contaTipoChavePix?: SortOrder
    contaChavePix?: SortOrder
    contaTitular?: SortOrder
    contaDocumentoTitular?: SortOrder
    reajusteIndice?: SortOrder
    reajustePercentual?: SortOrder
    reajusteValorAnterior?: SortOrder
    totalAPagar?: SortOrder
    geradoPorUsuarioId?: SortOrder
    criadoEm?: SortOrder
  }

  export type memoriacalculoMinOrderByAggregateInput = {
    id?: SortOrder
    idContrato?: SortOrder
    idImovel?: SortOrder
    competencia?: SortOrder
    valorAluguelBase?: SortOrder
    idContaBancaria?: SortOrder
    contaDescricao?: SortOrder
    contaBanco?: SortOrder
    contaAgencia?: SortOrder
    contaNumero?: SortOrder
    contaTipoChavePix?: SortOrder
    contaChavePix?: SortOrder
    contaTitular?: SortOrder
    contaDocumentoTitular?: SortOrder
    reajusteIndice?: SortOrder
    reajustePercentual?: SortOrder
    reajusteValorAnterior?: SortOrder
    totalAPagar?: SortOrder
    geradoPorUsuarioId?: SortOrder
    criadoEm?: SortOrder
  }

  export type memoriacalculoSumOrderByAggregateInput = {
    id?: SortOrder
    idContrato?: SortOrder
    idImovel?: SortOrder
    valorAluguelBase?: SortOrder
    idContaBancaria?: SortOrder
    reajustePercentual?: SortOrder
    reajusteValorAnterior?: SortOrder
    totalAPagar?: SortOrder
    geradoPorUsuarioId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Enumindice_reajuste_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.indice_reajuste_enum | Enumindice_reajuste_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.indice_reajuste_enum[] | null
    notIn?: $Enums.indice_reajuste_enum[] | null
    not?: NestedEnumindice_reajuste_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.indice_reajuste_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumindice_reajuste_enumNullableFilter<$PrismaModel>
    _max?: NestedEnumindice_reajuste_enumNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type MemoriacalculoScalarRelationFilter = {
    is?: memoriacalculoWhereInput
    isNot?: memoriacalculoWhereInput
  }

  export type memoriacalculoitemOrderByRelevanceInput = {
    fields: memoriacalculoitemOrderByRelevanceFieldEnum | memoriacalculoitemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type memoriacalculoitemCountOrderByAggregateInput = {
    id?: SortOrder
    idMemoriaCalculo?: SortOrder
    idLocador?: SortOrder
    nomeLocador?: SortOrder
    documentoLocador?: SortOrder
    percentualParticipacao?: SortOrder
    valorAluguel?: SortOrder
    valorReembolsos?: SortOrder
    valorDescontos?: SortOrder
    baseCalculoIrrf?: SortOrder
    valorIrrf?: SortOrder
    valorAPagar?: SortOrder
    detalhesExtras?: SortOrder
  }

  export type memoriacalculoitemAvgOrderByAggregateInput = {
    id?: SortOrder
    idMemoriaCalculo?: SortOrder
    idLocador?: SortOrder
    percentualParticipacao?: SortOrder
    valorAluguel?: SortOrder
    valorReembolsos?: SortOrder
    valorDescontos?: SortOrder
    baseCalculoIrrf?: SortOrder
    valorIrrf?: SortOrder
    valorAPagar?: SortOrder
  }

  export type memoriacalculoitemMaxOrderByAggregateInput = {
    id?: SortOrder
    idMemoriaCalculo?: SortOrder
    idLocador?: SortOrder
    nomeLocador?: SortOrder
    documentoLocador?: SortOrder
    percentualParticipacao?: SortOrder
    valorAluguel?: SortOrder
    valorReembolsos?: SortOrder
    valorDescontos?: SortOrder
    baseCalculoIrrf?: SortOrder
    valorIrrf?: SortOrder
    valorAPagar?: SortOrder
  }

  export type memoriacalculoitemMinOrderByAggregateInput = {
    id?: SortOrder
    idMemoriaCalculo?: SortOrder
    idLocador?: SortOrder
    nomeLocador?: SortOrder
    documentoLocador?: SortOrder
    percentualParticipacao?: SortOrder
    valorAluguel?: SortOrder
    valorReembolsos?: SortOrder
    valorDescontos?: SortOrder
    baseCalculoIrrf?: SortOrder
    valorIrrf?: SortOrder
    valorAPagar?: SortOrder
  }

  export type memoriacalculoitemSumOrderByAggregateInput = {
    id?: SortOrder
    idMemoriaCalculo?: SortOrder
    idLocador?: SortOrder
    percentualParticipacao?: SortOrder
    valorAluguel?: SortOrder
    valorReembolsos?: SortOrder
    valorDescontos?: SortOrder
    baseCalculoIrrf?: SortOrder
    valorIrrf?: SortOrder
    valorAPagar?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type Enumtipo_despesa_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_despesa_enum | Enumtipo_despesa_enumFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_despesa_enum[]
    notIn?: $Enums.tipo_despesa_enum[]
    not?: NestedEnumtipo_despesa_enumFilter<$PrismaModel> | $Enums.tipo_despesa_enum
  }

  export type Enumstatus_despesa_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.status_despesa_enum | Enumstatus_despesa_enumFieldRefInput<$PrismaModel>
    in?: $Enums.status_despesa_enum[]
    notIn?: $Enums.status_despesa_enum[]
    not?: NestedEnumstatus_despesa_enumFilter<$PrismaModel> | $Enums.status_despesa_enum
  }

  export type despesaOrderByRelevanceInput = {
    fields: despesaOrderByRelevanceFieldEnum | despesaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type despesaCountOrderByAggregateInput = {
    id?: SortOrder
    idContratoLocacao?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    dataVencimento?: SortOrder
    dataPagamento?: SortOrder
    status?: SortOrder
    comprovantePagamento?: SortOrder
  }

  export type despesaAvgOrderByAggregateInput = {
    id?: SortOrder
    idContratoLocacao?: SortOrder
    valor?: SortOrder
  }

  export type despesaMaxOrderByAggregateInput = {
    id?: SortOrder
    idContratoLocacao?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    dataVencimento?: SortOrder
    dataPagamento?: SortOrder
    status?: SortOrder
    comprovantePagamento?: SortOrder
  }

  export type despesaMinOrderByAggregateInput = {
    id?: SortOrder
    idContratoLocacao?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    dataVencimento?: SortOrder
    dataPagamento?: SortOrder
    status?: SortOrder
    comprovantePagamento?: SortOrder
  }

  export type despesaSumOrderByAggregateInput = {
    id?: SortOrder
    idContratoLocacao?: SortOrder
    valor?: SortOrder
  }

  export type Enumtipo_despesa_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_despesa_enum | Enumtipo_despesa_enumFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_despesa_enum[]
    notIn?: $Enums.tipo_despesa_enum[]
    not?: NestedEnumtipo_despesa_enumWithAggregatesFilter<$PrismaModel> | $Enums.tipo_despesa_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtipo_despesa_enumFilter<$PrismaModel>
    _max?: NestedEnumtipo_despesa_enumFilter<$PrismaModel>
  }

  export type Enumstatus_despesa_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status_despesa_enum | Enumstatus_despesa_enumFieldRefInput<$PrismaModel>
    in?: $Enums.status_despesa_enum[]
    notIn?: $Enums.status_despesa_enum[]
    not?: NestedEnumstatus_despesa_enumWithAggregatesFilter<$PrismaModel> | $Enums.status_despesa_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatus_despesa_enumFilter<$PrismaModel>
    _max?: NestedEnumstatus_despesa_enumFilter<$PrismaModel>
  }

  export type FaixairrfListRelationFilter = {
    every?: faixairrfWhereInput
    some?: faixairrfWhereInput
    none?: faixairrfWhereInput
  }

  export type faixairrfOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tabelairrfOrderByRelevanceInput = {
    fields: tabelairrfOrderByRelevanceFieldEnum | tabelairrfOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tabelairrfCountOrderByAggregateInput = {
    id?: SortOrder
    vigenciaInicio?: SortOrder
    descricao?: SortOrder
    deducaoDependente?: SortOrder
    redutorLimiteIsencao?: SortOrder
    redutorLimiteSuperior?: SortOrder
    redutorConstante?: SortOrder
    redutorCoeficiente?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type tabelairrfAvgOrderByAggregateInput = {
    id?: SortOrder
    deducaoDependente?: SortOrder
    redutorLimiteIsencao?: SortOrder
    redutorLimiteSuperior?: SortOrder
    redutorConstante?: SortOrder
    redutorCoeficiente?: SortOrder
  }

  export type tabelairrfMaxOrderByAggregateInput = {
    id?: SortOrder
    vigenciaInicio?: SortOrder
    descricao?: SortOrder
    deducaoDependente?: SortOrder
    redutorLimiteIsencao?: SortOrder
    redutorLimiteSuperior?: SortOrder
    redutorConstante?: SortOrder
    redutorCoeficiente?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type tabelairrfMinOrderByAggregateInput = {
    id?: SortOrder
    vigenciaInicio?: SortOrder
    descricao?: SortOrder
    deducaoDependente?: SortOrder
    redutorLimiteIsencao?: SortOrder
    redutorLimiteSuperior?: SortOrder
    redutorConstante?: SortOrder
    redutorCoeficiente?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type tabelairrfSumOrderByAggregateInput = {
    id?: SortOrder
    deducaoDependente?: SortOrder
    redutorLimiteIsencao?: SortOrder
    redutorLimiteSuperior?: SortOrder
    redutorConstante?: SortOrder
    redutorCoeficiente?: SortOrder
  }

  export type TabelairrfScalarRelationFilter = {
    is?: tabelairrfWhereInput
    isNot?: tabelairrfWhereInput
  }

  export type faixairrfIdTabelaOrdemCompoundUniqueInput = {
    idTabela: number
    ordem: number
  }

  export type faixairrfCountOrderByAggregateInput = {
    id?: SortOrder
    idTabela?: SortOrder
    ordem?: SortOrder
    valorDe?: SortOrder
    valorAte?: SortOrder
    aliquota?: SortOrder
    parcelaADeduzir?: SortOrder
  }

  export type faixairrfAvgOrderByAggregateInput = {
    id?: SortOrder
    idTabela?: SortOrder
    ordem?: SortOrder
    valorDe?: SortOrder
    valorAte?: SortOrder
    aliquota?: SortOrder
    parcelaADeduzir?: SortOrder
  }

  export type faixairrfMaxOrderByAggregateInput = {
    id?: SortOrder
    idTabela?: SortOrder
    ordem?: SortOrder
    valorDe?: SortOrder
    valorAte?: SortOrder
    aliquota?: SortOrder
    parcelaADeduzir?: SortOrder
  }

  export type faixairrfMinOrderByAggregateInput = {
    id?: SortOrder
    idTabela?: SortOrder
    ordem?: SortOrder
    valorDe?: SortOrder
    valorAte?: SortOrder
    aliquota?: SortOrder
    parcelaADeduzir?: SortOrder
  }

  export type faixairrfSumOrderByAggregateInput = {
    id?: SortOrder
    idTabela?: SortOrder
    ordem?: SortOrder
    valorDe?: SortOrder
    valorAte?: SortOrder
    aliquota?: SortOrder
    parcelaADeduzir?: SortOrder
  }

  export type imovelCreateNestedManyWithoutEnderecoInput = {
    create?: XOR<imovelCreateWithoutEnderecoInput, imovelUncheckedCreateWithoutEnderecoInput> | imovelCreateWithoutEnderecoInput[] | imovelUncheckedCreateWithoutEnderecoInput[]
    connectOrCreate?: imovelCreateOrConnectWithoutEnderecoInput | imovelCreateOrConnectWithoutEnderecoInput[]
    createMany?: imovelCreateManyEnderecoInputEnvelope
    connect?: imovelWhereUniqueInput | imovelWhereUniqueInput[]
  }

  export type imovelUncheckedCreateNestedManyWithoutEnderecoInput = {
    create?: XOR<imovelCreateWithoutEnderecoInput, imovelUncheckedCreateWithoutEnderecoInput> | imovelCreateWithoutEnderecoInput[] | imovelUncheckedCreateWithoutEnderecoInput[]
    connectOrCreate?: imovelCreateOrConnectWithoutEnderecoInput | imovelCreateOrConnectWithoutEnderecoInput[]
    createMany?: imovelCreateManyEnderecoInputEnvelope
    connect?: imovelWhereUniqueInput | imovelWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type imovelUpdateManyWithoutEnderecoNestedInput = {
    create?: XOR<imovelCreateWithoutEnderecoInput, imovelUncheckedCreateWithoutEnderecoInput> | imovelCreateWithoutEnderecoInput[] | imovelUncheckedCreateWithoutEnderecoInput[]
    connectOrCreate?: imovelCreateOrConnectWithoutEnderecoInput | imovelCreateOrConnectWithoutEnderecoInput[]
    upsert?: imovelUpsertWithWhereUniqueWithoutEnderecoInput | imovelUpsertWithWhereUniqueWithoutEnderecoInput[]
    createMany?: imovelCreateManyEnderecoInputEnvelope
    set?: imovelWhereUniqueInput | imovelWhereUniqueInput[]
    disconnect?: imovelWhereUniqueInput | imovelWhereUniqueInput[]
    delete?: imovelWhereUniqueInput | imovelWhereUniqueInput[]
    connect?: imovelWhereUniqueInput | imovelWhereUniqueInput[]
    update?: imovelUpdateWithWhereUniqueWithoutEnderecoInput | imovelUpdateWithWhereUniqueWithoutEnderecoInput[]
    updateMany?: imovelUpdateManyWithWhereWithoutEnderecoInput | imovelUpdateManyWithWhereWithoutEnderecoInput[]
    deleteMany?: imovelScalarWhereInput | imovelScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type imovelUncheckedUpdateManyWithoutEnderecoNestedInput = {
    create?: XOR<imovelCreateWithoutEnderecoInput, imovelUncheckedCreateWithoutEnderecoInput> | imovelCreateWithoutEnderecoInput[] | imovelUncheckedCreateWithoutEnderecoInput[]
    connectOrCreate?: imovelCreateOrConnectWithoutEnderecoInput | imovelCreateOrConnectWithoutEnderecoInput[]
    upsert?: imovelUpsertWithWhereUniqueWithoutEnderecoInput | imovelUpsertWithWhereUniqueWithoutEnderecoInput[]
    createMany?: imovelCreateManyEnderecoInputEnvelope
    set?: imovelWhereUniqueInput | imovelWhereUniqueInput[]
    disconnect?: imovelWhereUniqueInput | imovelWhereUniqueInput[]
    delete?: imovelWhereUniqueInput | imovelWhereUniqueInput[]
    connect?: imovelWhereUniqueInput | imovelWhereUniqueInput[]
    update?: imovelUpdateWithWhereUniqueWithoutEnderecoInput | imovelUpdateWithWhereUniqueWithoutEnderecoInput[]
    updateMany?: imovelUpdateManyWithWhereWithoutEnderecoInput | imovelUpdateManyWithWhereWithoutEnderecoInput[]
    deleteMany?: imovelScalarWhereInput | imovelScalarWhereInput[]
  }

  export type enderecoCreateNestedOneWithoutImovelInput = {
    create?: XOR<enderecoCreateWithoutImovelInput, enderecoUncheckedCreateWithoutImovelInput>
    connectOrCreate?: enderecoCreateOrConnectWithoutImovelInput
    connect?: enderecoWhereUniqueInput
  }

  export type contratolocacaoCreateNestedManyWithoutImovelInput = {
    create?: XOR<contratolocacaoCreateWithoutImovelInput, contratolocacaoUncheckedCreateWithoutImovelInput> | contratolocacaoCreateWithoutImovelInput[] | contratolocacaoUncheckedCreateWithoutImovelInput[]
    connectOrCreate?: contratolocacaoCreateOrConnectWithoutImovelInput | contratolocacaoCreateOrConnectWithoutImovelInput[]
    createMany?: contratolocacaoCreateManyImovelInputEnvelope
    connect?: contratolocacaoWhereUniqueInput | contratolocacaoWhereUniqueInput[]
  }

  export type propriedadeimovelCreateNestedManyWithoutImovelInput = {
    create?: XOR<propriedadeimovelCreateWithoutImovelInput, propriedadeimovelUncheckedCreateWithoutImovelInput> | propriedadeimovelCreateWithoutImovelInput[] | propriedadeimovelUncheckedCreateWithoutImovelInput[]
    connectOrCreate?: propriedadeimovelCreateOrConnectWithoutImovelInput | propriedadeimovelCreateOrConnectWithoutImovelInput[]
    createMany?: propriedadeimovelCreateManyImovelInputEnvelope
    connect?: propriedadeimovelWhereUniqueInput | propriedadeimovelWhereUniqueInput[]
  }

  export type memoriacalculoCreateNestedManyWithoutImovelInput = {
    create?: XOR<memoriacalculoCreateWithoutImovelInput, memoriacalculoUncheckedCreateWithoutImovelInput> | memoriacalculoCreateWithoutImovelInput[] | memoriacalculoUncheckedCreateWithoutImovelInput[]
    connectOrCreate?: memoriacalculoCreateOrConnectWithoutImovelInput | memoriacalculoCreateOrConnectWithoutImovelInput[]
    createMany?: memoriacalculoCreateManyImovelInputEnvelope
    connect?: memoriacalculoWhereUniqueInput | memoriacalculoWhereUniqueInput[]
  }

  export type contratolocacaoUncheckedCreateNestedManyWithoutImovelInput = {
    create?: XOR<contratolocacaoCreateWithoutImovelInput, contratolocacaoUncheckedCreateWithoutImovelInput> | contratolocacaoCreateWithoutImovelInput[] | contratolocacaoUncheckedCreateWithoutImovelInput[]
    connectOrCreate?: contratolocacaoCreateOrConnectWithoutImovelInput | contratolocacaoCreateOrConnectWithoutImovelInput[]
    createMany?: contratolocacaoCreateManyImovelInputEnvelope
    connect?: contratolocacaoWhereUniqueInput | contratolocacaoWhereUniqueInput[]
  }

  export type propriedadeimovelUncheckedCreateNestedManyWithoutImovelInput = {
    create?: XOR<propriedadeimovelCreateWithoutImovelInput, propriedadeimovelUncheckedCreateWithoutImovelInput> | propriedadeimovelCreateWithoutImovelInput[] | propriedadeimovelUncheckedCreateWithoutImovelInput[]
    connectOrCreate?: propriedadeimovelCreateOrConnectWithoutImovelInput | propriedadeimovelCreateOrConnectWithoutImovelInput[]
    createMany?: propriedadeimovelCreateManyImovelInputEnvelope
    connect?: propriedadeimovelWhereUniqueInput | propriedadeimovelWhereUniqueInput[]
  }

  export type memoriacalculoUncheckedCreateNestedManyWithoutImovelInput = {
    create?: XOR<memoriacalculoCreateWithoutImovelInput, memoriacalculoUncheckedCreateWithoutImovelInput> | memoriacalculoCreateWithoutImovelInput[] | memoriacalculoUncheckedCreateWithoutImovelInput[]
    connectOrCreate?: memoriacalculoCreateOrConnectWithoutImovelInput | memoriacalculoCreateOrConnectWithoutImovelInput[]
    createMany?: memoriacalculoCreateManyImovelInputEnvelope
    connect?: memoriacalculoWhereUniqueInput | memoriacalculoWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Enumclassificacao_enumFieldUpdateOperationsInput = {
    set?: $Enums.classificacao_enum
  }

  export type Enumtipologia_enumFieldUpdateOperationsInput = {
    set?: $Enums.tipologia_enum
  }

  export type Enumstatus_imovel_enumFieldUpdateOperationsInput = {
    set?: $Enums.status_imovel_enum
  }

  export type enderecoUpdateOneRequiredWithoutImovelNestedInput = {
    create?: XOR<enderecoCreateWithoutImovelInput, enderecoUncheckedCreateWithoutImovelInput>
    connectOrCreate?: enderecoCreateOrConnectWithoutImovelInput
    upsert?: enderecoUpsertWithoutImovelInput
    connect?: enderecoWhereUniqueInput
    update?: XOR<XOR<enderecoUpdateToOneWithWhereWithoutImovelInput, enderecoUpdateWithoutImovelInput>, enderecoUncheckedUpdateWithoutImovelInput>
  }

  export type contratolocacaoUpdateManyWithoutImovelNestedInput = {
    create?: XOR<contratolocacaoCreateWithoutImovelInput, contratolocacaoUncheckedCreateWithoutImovelInput> | contratolocacaoCreateWithoutImovelInput[] | contratolocacaoUncheckedCreateWithoutImovelInput[]
    connectOrCreate?: contratolocacaoCreateOrConnectWithoutImovelInput | contratolocacaoCreateOrConnectWithoutImovelInput[]
    upsert?: contratolocacaoUpsertWithWhereUniqueWithoutImovelInput | contratolocacaoUpsertWithWhereUniqueWithoutImovelInput[]
    createMany?: contratolocacaoCreateManyImovelInputEnvelope
    set?: contratolocacaoWhereUniqueInput | contratolocacaoWhereUniqueInput[]
    disconnect?: contratolocacaoWhereUniqueInput | contratolocacaoWhereUniqueInput[]
    delete?: contratolocacaoWhereUniqueInput | contratolocacaoWhereUniqueInput[]
    connect?: contratolocacaoWhereUniqueInput | contratolocacaoWhereUniqueInput[]
    update?: contratolocacaoUpdateWithWhereUniqueWithoutImovelInput | contratolocacaoUpdateWithWhereUniqueWithoutImovelInput[]
    updateMany?: contratolocacaoUpdateManyWithWhereWithoutImovelInput | contratolocacaoUpdateManyWithWhereWithoutImovelInput[]
    deleteMany?: contratolocacaoScalarWhereInput | contratolocacaoScalarWhereInput[]
  }

  export type propriedadeimovelUpdateManyWithoutImovelNestedInput = {
    create?: XOR<propriedadeimovelCreateWithoutImovelInput, propriedadeimovelUncheckedCreateWithoutImovelInput> | propriedadeimovelCreateWithoutImovelInput[] | propriedadeimovelUncheckedCreateWithoutImovelInput[]
    connectOrCreate?: propriedadeimovelCreateOrConnectWithoutImovelInput | propriedadeimovelCreateOrConnectWithoutImovelInput[]
    upsert?: propriedadeimovelUpsertWithWhereUniqueWithoutImovelInput | propriedadeimovelUpsertWithWhereUniqueWithoutImovelInput[]
    createMany?: propriedadeimovelCreateManyImovelInputEnvelope
    set?: propriedadeimovelWhereUniqueInput | propriedadeimovelWhereUniqueInput[]
    disconnect?: propriedadeimovelWhereUniqueInput | propriedadeimovelWhereUniqueInput[]
    delete?: propriedadeimovelWhereUniqueInput | propriedadeimovelWhereUniqueInput[]
    connect?: propriedadeimovelWhereUniqueInput | propriedadeimovelWhereUniqueInput[]
    update?: propriedadeimovelUpdateWithWhereUniqueWithoutImovelInput | propriedadeimovelUpdateWithWhereUniqueWithoutImovelInput[]
    updateMany?: propriedadeimovelUpdateManyWithWhereWithoutImovelInput | propriedadeimovelUpdateManyWithWhereWithoutImovelInput[]
    deleteMany?: propriedadeimovelScalarWhereInput | propriedadeimovelScalarWhereInput[]
  }

  export type memoriacalculoUpdateManyWithoutImovelNestedInput = {
    create?: XOR<memoriacalculoCreateWithoutImovelInput, memoriacalculoUncheckedCreateWithoutImovelInput> | memoriacalculoCreateWithoutImovelInput[] | memoriacalculoUncheckedCreateWithoutImovelInput[]
    connectOrCreate?: memoriacalculoCreateOrConnectWithoutImovelInput | memoriacalculoCreateOrConnectWithoutImovelInput[]
    upsert?: memoriacalculoUpsertWithWhereUniqueWithoutImovelInput | memoriacalculoUpsertWithWhereUniqueWithoutImovelInput[]
    createMany?: memoriacalculoCreateManyImovelInputEnvelope
    set?: memoriacalculoWhereUniqueInput | memoriacalculoWhereUniqueInput[]
    disconnect?: memoriacalculoWhereUniqueInput | memoriacalculoWhereUniqueInput[]
    delete?: memoriacalculoWhereUniqueInput | memoriacalculoWhereUniqueInput[]
    connect?: memoriacalculoWhereUniqueInput | memoriacalculoWhereUniqueInput[]
    update?: memoriacalculoUpdateWithWhereUniqueWithoutImovelInput | memoriacalculoUpdateWithWhereUniqueWithoutImovelInput[]
    updateMany?: memoriacalculoUpdateManyWithWhereWithoutImovelInput | memoriacalculoUpdateManyWithWhereWithoutImovelInput[]
    deleteMany?: memoriacalculoScalarWhereInput | memoriacalculoScalarWhereInput[]
  }

  export type contratolocacaoUncheckedUpdateManyWithoutImovelNestedInput = {
    create?: XOR<contratolocacaoCreateWithoutImovelInput, contratolocacaoUncheckedCreateWithoutImovelInput> | contratolocacaoCreateWithoutImovelInput[] | contratolocacaoUncheckedCreateWithoutImovelInput[]
    connectOrCreate?: contratolocacaoCreateOrConnectWithoutImovelInput | contratolocacaoCreateOrConnectWithoutImovelInput[]
    upsert?: contratolocacaoUpsertWithWhereUniqueWithoutImovelInput | contratolocacaoUpsertWithWhereUniqueWithoutImovelInput[]
    createMany?: contratolocacaoCreateManyImovelInputEnvelope
    set?: contratolocacaoWhereUniqueInput | contratolocacaoWhereUniqueInput[]
    disconnect?: contratolocacaoWhereUniqueInput | contratolocacaoWhereUniqueInput[]
    delete?: contratolocacaoWhereUniqueInput | contratolocacaoWhereUniqueInput[]
    connect?: contratolocacaoWhereUniqueInput | contratolocacaoWhereUniqueInput[]
    update?: contratolocacaoUpdateWithWhereUniqueWithoutImovelInput | contratolocacaoUpdateWithWhereUniqueWithoutImovelInput[]
    updateMany?: contratolocacaoUpdateManyWithWhereWithoutImovelInput | contratolocacaoUpdateManyWithWhereWithoutImovelInput[]
    deleteMany?: contratolocacaoScalarWhereInput | contratolocacaoScalarWhereInput[]
  }

  export type propriedadeimovelUncheckedUpdateManyWithoutImovelNestedInput = {
    create?: XOR<propriedadeimovelCreateWithoutImovelInput, propriedadeimovelUncheckedCreateWithoutImovelInput> | propriedadeimovelCreateWithoutImovelInput[] | propriedadeimovelUncheckedCreateWithoutImovelInput[]
    connectOrCreate?: propriedadeimovelCreateOrConnectWithoutImovelInput | propriedadeimovelCreateOrConnectWithoutImovelInput[]
    upsert?: propriedadeimovelUpsertWithWhereUniqueWithoutImovelInput | propriedadeimovelUpsertWithWhereUniqueWithoutImovelInput[]
    createMany?: propriedadeimovelCreateManyImovelInputEnvelope
    set?: propriedadeimovelWhereUniqueInput | propriedadeimovelWhereUniqueInput[]
    disconnect?: propriedadeimovelWhereUniqueInput | propriedadeimovelWhereUniqueInput[]
    delete?: propriedadeimovelWhereUniqueInput | propriedadeimovelWhereUniqueInput[]
    connect?: propriedadeimovelWhereUniqueInput | propriedadeimovelWhereUniqueInput[]
    update?: propriedadeimovelUpdateWithWhereUniqueWithoutImovelInput | propriedadeimovelUpdateWithWhereUniqueWithoutImovelInput[]
    updateMany?: propriedadeimovelUpdateManyWithWhereWithoutImovelInput | propriedadeimovelUpdateManyWithWhereWithoutImovelInput[]
    deleteMany?: propriedadeimovelScalarWhereInput | propriedadeimovelScalarWhereInput[]
  }

  export type memoriacalculoUncheckedUpdateManyWithoutImovelNestedInput = {
    create?: XOR<memoriacalculoCreateWithoutImovelInput, memoriacalculoUncheckedCreateWithoutImovelInput> | memoriacalculoCreateWithoutImovelInput[] | memoriacalculoUncheckedCreateWithoutImovelInput[]
    connectOrCreate?: memoriacalculoCreateOrConnectWithoutImovelInput | memoriacalculoCreateOrConnectWithoutImovelInput[]
    upsert?: memoriacalculoUpsertWithWhereUniqueWithoutImovelInput | memoriacalculoUpsertWithWhereUniqueWithoutImovelInput[]
    createMany?: memoriacalculoCreateManyImovelInputEnvelope
    set?: memoriacalculoWhereUniqueInput | memoriacalculoWhereUniqueInput[]
    disconnect?: memoriacalculoWhereUniqueInput | memoriacalculoWhereUniqueInput[]
    delete?: memoriacalculoWhereUniqueInput | memoriacalculoWhereUniqueInput[]
    connect?: memoriacalculoWhereUniqueInput | memoriacalculoWhereUniqueInput[]
    update?: memoriacalculoUpdateWithWhereUniqueWithoutImovelInput | memoriacalculoUpdateWithWhereUniqueWithoutImovelInput[]
    updateMany?: memoriacalculoUpdateManyWithWhereWithoutImovelInput | memoriacalculoUpdateManyWithWhereWithoutImovelInput[]
    deleteMany?: memoriacalculoScalarWhereInput | memoriacalculoScalarWhereInput[]
  }

  export type imovelCreateNestedOneWithoutPropriedadeimovelInput = {
    create?: XOR<imovelCreateWithoutPropriedadeimovelInput, imovelUncheckedCreateWithoutPropriedadeimovelInput>
    connectOrCreate?: imovelCreateOrConnectWithoutPropriedadeimovelInput
    connect?: imovelWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type imovelUpdateOneRequiredWithoutPropriedadeimovelNestedInput = {
    create?: XOR<imovelCreateWithoutPropriedadeimovelInput, imovelUncheckedCreateWithoutPropriedadeimovelInput>
    connectOrCreate?: imovelCreateOrConnectWithoutPropriedadeimovelInput
    upsert?: imovelUpsertWithoutPropriedadeimovelInput
    connect?: imovelWhereUniqueInput
    update?: XOR<XOR<imovelUpdateToOneWithWhereWithoutPropriedadeimovelInput, imovelUpdateWithoutPropriedadeimovelInput>, imovelUncheckedUpdateWithoutPropriedadeimovelInput>
  }

  export type imovelCreateNestedOneWithoutContratolocacaoInput = {
    create?: XOR<imovelCreateWithoutContratolocacaoInput, imovelUncheckedCreateWithoutContratolocacaoInput>
    connectOrCreate?: imovelCreateOrConnectWithoutContratolocacaoInput
    connect?: imovelWhereUniqueInput
  }

  export type despesaCreateNestedManyWithoutContratolocacaoInput = {
    create?: XOR<despesaCreateWithoutContratolocacaoInput, despesaUncheckedCreateWithoutContratolocacaoInput> | despesaCreateWithoutContratolocacaoInput[] | despesaUncheckedCreateWithoutContratolocacaoInput[]
    connectOrCreate?: despesaCreateOrConnectWithoutContratolocacaoInput | despesaCreateOrConnectWithoutContratolocacaoInput[]
    createMany?: despesaCreateManyContratolocacaoInputEnvelope
    connect?: despesaWhereUniqueInput | despesaWhereUniqueInput[]
  }

  export type reajustecontratoCreateNestedManyWithoutContratolocacaoInput = {
    create?: XOR<reajustecontratoCreateWithoutContratolocacaoInput, reajustecontratoUncheckedCreateWithoutContratolocacaoInput> | reajustecontratoCreateWithoutContratolocacaoInput[] | reajustecontratoUncheckedCreateWithoutContratolocacaoInput[]
    connectOrCreate?: reajustecontratoCreateOrConnectWithoutContratolocacaoInput | reajustecontratoCreateOrConnectWithoutContratolocacaoInput[]
    createMany?: reajustecontratoCreateManyContratolocacaoInputEnvelope
    connect?: reajustecontratoWhereUniqueInput | reajustecontratoWhereUniqueInput[]
  }

  export type memoriacalculoCreateNestedManyWithoutContratolocacaoInput = {
    create?: XOR<memoriacalculoCreateWithoutContratolocacaoInput, memoriacalculoUncheckedCreateWithoutContratolocacaoInput> | memoriacalculoCreateWithoutContratolocacaoInput[] | memoriacalculoUncheckedCreateWithoutContratolocacaoInput[]
    connectOrCreate?: memoriacalculoCreateOrConnectWithoutContratolocacaoInput | memoriacalculoCreateOrConnectWithoutContratolocacaoInput[]
    createMany?: memoriacalculoCreateManyContratolocacaoInputEnvelope
    connect?: memoriacalculoWhereUniqueInput | memoriacalculoWhereUniqueInput[]
  }

  export type despesaUncheckedCreateNestedManyWithoutContratolocacaoInput = {
    create?: XOR<despesaCreateWithoutContratolocacaoInput, despesaUncheckedCreateWithoutContratolocacaoInput> | despesaCreateWithoutContratolocacaoInput[] | despesaUncheckedCreateWithoutContratolocacaoInput[]
    connectOrCreate?: despesaCreateOrConnectWithoutContratolocacaoInput | despesaCreateOrConnectWithoutContratolocacaoInput[]
    createMany?: despesaCreateManyContratolocacaoInputEnvelope
    connect?: despesaWhereUniqueInput | despesaWhereUniqueInput[]
  }

  export type reajustecontratoUncheckedCreateNestedManyWithoutContratolocacaoInput = {
    create?: XOR<reajustecontratoCreateWithoutContratolocacaoInput, reajustecontratoUncheckedCreateWithoutContratolocacaoInput> | reajustecontratoCreateWithoutContratolocacaoInput[] | reajustecontratoUncheckedCreateWithoutContratolocacaoInput[]
    connectOrCreate?: reajustecontratoCreateOrConnectWithoutContratolocacaoInput | reajustecontratoCreateOrConnectWithoutContratolocacaoInput[]
    createMany?: reajustecontratoCreateManyContratolocacaoInputEnvelope
    connect?: reajustecontratoWhereUniqueInput | reajustecontratoWhereUniqueInput[]
  }

  export type memoriacalculoUncheckedCreateNestedManyWithoutContratolocacaoInput = {
    create?: XOR<memoriacalculoCreateWithoutContratolocacaoInput, memoriacalculoUncheckedCreateWithoutContratolocacaoInput> | memoriacalculoCreateWithoutContratolocacaoInput[] | memoriacalculoUncheckedCreateWithoutContratolocacaoInput[]
    connectOrCreate?: memoriacalculoCreateOrConnectWithoutContratolocacaoInput | memoriacalculoCreateOrConnectWithoutContratolocacaoInput[]
    createMany?: memoriacalculoCreateManyContratolocacaoInputEnvelope
    connect?: memoriacalculoWhereUniqueInput | memoriacalculoWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type Enumstatus_contrato_enumFieldUpdateOperationsInput = {
    set?: $Enums.status_contrato_enum
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Bytes | null
  }

  export type imovelUpdateOneRequiredWithoutContratolocacaoNestedInput = {
    create?: XOR<imovelCreateWithoutContratolocacaoInput, imovelUncheckedCreateWithoutContratolocacaoInput>
    connectOrCreate?: imovelCreateOrConnectWithoutContratolocacaoInput
    upsert?: imovelUpsertWithoutContratolocacaoInput
    connect?: imovelWhereUniqueInput
    update?: XOR<XOR<imovelUpdateToOneWithWhereWithoutContratolocacaoInput, imovelUpdateWithoutContratolocacaoInput>, imovelUncheckedUpdateWithoutContratolocacaoInput>
  }

  export type despesaUpdateManyWithoutContratolocacaoNestedInput = {
    create?: XOR<despesaCreateWithoutContratolocacaoInput, despesaUncheckedCreateWithoutContratolocacaoInput> | despesaCreateWithoutContratolocacaoInput[] | despesaUncheckedCreateWithoutContratolocacaoInput[]
    connectOrCreate?: despesaCreateOrConnectWithoutContratolocacaoInput | despesaCreateOrConnectWithoutContratolocacaoInput[]
    upsert?: despesaUpsertWithWhereUniqueWithoutContratolocacaoInput | despesaUpsertWithWhereUniqueWithoutContratolocacaoInput[]
    createMany?: despesaCreateManyContratolocacaoInputEnvelope
    set?: despesaWhereUniqueInput | despesaWhereUniqueInput[]
    disconnect?: despesaWhereUniqueInput | despesaWhereUniqueInput[]
    delete?: despesaWhereUniqueInput | despesaWhereUniqueInput[]
    connect?: despesaWhereUniqueInput | despesaWhereUniqueInput[]
    update?: despesaUpdateWithWhereUniqueWithoutContratolocacaoInput | despesaUpdateWithWhereUniqueWithoutContratolocacaoInput[]
    updateMany?: despesaUpdateManyWithWhereWithoutContratolocacaoInput | despesaUpdateManyWithWhereWithoutContratolocacaoInput[]
    deleteMany?: despesaScalarWhereInput | despesaScalarWhereInput[]
  }

  export type reajustecontratoUpdateManyWithoutContratolocacaoNestedInput = {
    create?: XOR<reajustecontratoCreateWithoutContratolocacaoInput, reajustecontratoUncheckedCreateWithoutContratolocacaoInput> | reajustecontratoCreateWithoutContratolocacaoInput[] | reajustecontratoUncheckedCreateWithoutContratolocacaoInput[]
    connectOrCreate?: reajustecontratoCreateOrConnectWithoutContratolocacaoInput | reajustecontratoCreateOrConnectWithoutContratolocacaoInput[]
    upsert?: reajustecontratoUpsertWithWhereUniqueWithoutContratolocacaoInput | reajustecontratoUpsertWithWhereUniqueWithoutContratolocacaoInput[]
    createMany?: reajustecontratoCreateManyContratolocacaoInputEnvelope
    set?: reajustecontratoWhereUniqueInput | reajustecontratoWhereUniqueInput[]
    disconnect?: reajustecontratoWhereUniqueInput | reajustecontratoWhereUniqueInput[]
    delete?: reajustecontratoWhereUniqueInput | reajustecontratoWhereUniqueInput[]
    connect?: reajustecontratoWhereUniqueInput | reajustecontratoWhereUniqueInput[]
    update?: reajustecontratoUpdateWithWhereUniqueWithoutContratolocacaoInput | reajustecontratoUpdateWithWhereUniqueWithoutContratolocacaoInput[]
    updateMany?: reajustecontratoUpdateManyWithWhereWithoutContratolocacaoInput | reajustecontratoUpdateManyWithWhereWithoutContratolocacaoInput[]
    deleteMany?: reajustecontratoScalarWhereInput | reajustecontratoScalarWhereInput[]
  }

  export type memoriacalculoUpdateManyWithoutContratolocacaoNestedInput = {
    create?: XOR<memoriacalculoCreateWithoutContratolocacaoInput, memoriacalculoUncheckedCreateWithoutContratolocacaoInput> | memoriacalculoCreateWithoutContratolocacaoInput[] | memoriacalculoUncheckedCreateWithoutContratolocacaoInput[]
    connectOrCreate?: memoriacalculoCreateOrConnectWithoutContratolocacaoInput | memoriacalculoCreateOrConnectWithoutContratolocacaoInput[]
    upsert?: memoriacalculoUpsertWithWhereUniqueWithoutContratolocacaoInput | memoriacalculoUpsertWithWhereUniqueWithoutContratolocacaoInput[]
    createMany?: memoriacalculoCreateManyContratolocacaoInputEnvelope
    set?: memoriacalculoWhereUniqueInput | memoriacalculoWhereUniqueInput[]
    disconnect?: memoriacalculoWhereUniqueInput | memoriacalculoWhereUniqueInput[]
    delete?: memoriacalculoWhereUniqueInput | memoriacalculoWhereUniqueInput[]
    connect?: memoriacalculoWhereUniqueInput | memoriacalculoWhereUniqueInput[]
    update?: memoriacalculoUpdateWithWhereUniqueWithoutContratolocacaoInput | memoriacalculoUpdateWithWhereUniqueWithoutContratolocacaoInput[]
    updateMany?: memoriacalculoUpdateManyWithWhereWithoutContratolocacaoInput | memoriacalculoUpdateManyWithWhereWithoutContratolocacaoInput[]
    deleteMany?: memoriacalculoScalarWhereInput | memoriacalculoScalarWhereInput[]
  }

  export type despesaUncheckedUpdateManyWithoutContratolocacaoNestedInput = {
    create?: XOR<despesaCreateWithoutContratolocacaoInput, despesaUncheckedCreateWithoutContratolocacaoInput> | despesaCreateWithoutContratolocacaoInput[] | despesaUncheckedCreateWithoutContratolocacaoInput[]
    connectOrCreate?: despesaCreateOrConnectWithoutContratolocacaoInput | despesaCreateOrConnectWithoutContratolocacaoInput[]
    upsert?: despesaUpsertWithWhereUniqueWithoutContratolocacaoInput | despesaUpsertWithWhereUniqueWithoutContratolocacaoInput[]
    createMany?: despesaCreateManyContratolocacaoInputEnvelope
    set?: despesaWhereUniqueInput | despesaWhereUniqueInput[]
    disconnect?: despesaWhereUniqueInput | despesaWhereUniqueInput[]
    delete?: despesaWhereUniqueInput | despesaWhereUniqueInput[]
    connect?: despesaWhereUniqueInput | despesaWhereUniqueInput[]
    update?: despesaUpdateWithWhereUniqueWithoutContratolocacaoInput | despesaUpdateWithWhereUniqueWithoutContratolocacaoInput[]
    updateMany?: despesaUpdateManyWithWhereWithoutContratolocacaoInput | despesaUpdateManyWithWhereWithoutContratolocacaoInput[]
    deleteMany?: despesaScalarWhereInput | despesaScalarWhereInput[]
  }

  export type reajustecontratoUncheckedUpdateManyWithoutContratolocacaoNestedInput = {
    create?: XOR<reajustecontratoCreateWithoutContratolocacaoInput, reajustecontratoUncheckedCreateWithoutContratolocacaoInput> | reajustecontratoCreateWithoutContratolocacaoInput[] | reajustecontratoUncheckedCreateWithoutContratolocacaoInput[]
    connectOrCreate?: reajustecontratoCreateOrConnectWithoutContratolocacaoInput | reajustecontratoCreateOrConnectWithoutContratolocacaoInput[]
    upsert?: reajustecontratoUpsertWithWhereUniqueWithoutContratolocacaoInput | reajustecontratoUpsertWithWhereUniqueWithoutContratolocacaoInput[]
    createMany?: reajustecontratoCreateManyContratolocacaoInputEnvelope
    set?: reajustecontratoWhereUniqueInput | reajustecontratoWhereUniqueInput[]
    disconnect?: reajustecontratoWhereUniqueInput | reajustecontratoWhereUniqueInput[]
    delete?: reajustecontratoWhereUniqueInput | reajustecontratoWhereUniqueInput[]
    connect?: reajustecontratoWhereUniqueInput | reajustecontratoWhereUniqueInput[]
    update?: reajustecontratoUpdateWithWhereUniqueWithoutContratolocacaoInput | reajustecontratoUpdateWithWhereUniqueWithoutContratolocacaoInput[]
    updateMany?: reajustecontratoUpdateManyWithWhereWithoutContratolocacaoInput | reajustecontratoUpdateManyWithWhereWithoutContratolocacaoInput[]
    deleteMany?: reajustecontratoScalarWhereInput | reajustecontratoScalarWhereInput[]
  }

  export type memoriacalculoUncheckedUpdateManyWithoutContratolocacaoNestedInput = {
    create?: XOR<memoriacalculoCreateWithoutContratolocacaoInput, memoriacalculoUncheckedCreateWithoutContratolocacaoInput> | memoriacalculoCreateWithoutContratolocacaoInput[] | memoriacalculoUncheckedCreateWithoutContratolocacaoInput[]
    connectOrCreate?: memoriacalculoCreateOrConnectWithoutContratolocacaoInput | memoriacalculoCreateOrConnectWithoutContratolocacaoInput[]
    upsert?: memoriacalculoUpsertWithWhereUniqueWithoutContratolocacaoInput | memoriacalculoUpsertWithWhereUniqueWithoutContratolocacaoInput[]
    createMany?: memoriacalculoCreateManyContratolocacaoInputEnvelope
    set?: memoriacalculoWhereUniqueInput | memoriacalculoWhereUniqueInput[]
    disconnect?: memoriacalculoWhereUniqueInput | memoriacalculoWhereUniqueInput[]
    delete?: memoriacalculoWhereUniqueInput | memoriacalculoWhereUniqueInput[]
    connect?: memoriacalculoWhereUniqueInput | memoriacalculoWhereUniqueInput[]
    update?: memoriacalculoUpdateWithWhereUniqueWithoutContratolocacaoInput | memoriacalculoUpdateWithWhereUniqueWithoutContratolocacaoInput[]
    updateMany?: memoriacalculoUpdateManyWithWhereWithoutContratolocacaoInput | memoriacalculoUpdateManyWithWhereWithoutContratolocacaoInput[]
    deleteMany?: memoriacalculoScalarWhereInput | memoriacalculoScalarWhereInput[]
  }

  export type contratolocacaoCreateNestedOneWithoutReajustecontratoInput = {
    create?: XOR<contratolocacaoCreateWithoutReajustecontratoInput, contratolocacaoUncheckedCreateWithoutReajustecontratoInput>
    connectOrCreate?: contratolocacaoCreateOrConnectWithoutReajustecontratoInput
    connect?: contratolocacaoWhereUniqueInput
  }

  export type Enumindice_reajuste_enumFieldUpdateOperationsInput = {
    set?: $Enums.indice_reajuste_enum
  }

  export type contratolocacaoUpdateOneRequiredWithoutReajustecontratoNestedInput = {
    create?: XOR<contratolocacaoCreateWithoutReajustecontratoInput, contratolocacaoUncheckedCreateWithoutReajustecontratoInput>
    connectOrCreate?: contratolocacaoCreateOrConnectWithoutReajustecontratoInput
    upsert?: contratolocacaoUpsertWithoutReajustecontratoInput
    connect?: contratolocacaoWhereUniqueInput
    update?: XOR<XOR<contratolocacaoUpdateToOneWithWhereWithoutReajustecontratoInput, contratolocacaoUpdateWithoutReajustecontratoInput>, contratolocacaoUncheckedUpdateWithoutReajustecontratoInput>
  }

  export type contratolocacaoCreateNestedOneWithoutMemoriacalculoInput = {
    create?: XOR<contratolocacaoCreateWithoutMemoriacalculoInput, contratolocacaoUncheckedCreateWithoutMemoriacalculoInput>
    connectOrCreate?: contratolocacaoCreateOrConnectWithoutMemoriacalculoInput
    connect?: contratolocacaoWhereUniqueInput
  }

  export type imovelCreateNestedOneWithoutMemoriacalculoInput = {
    create?: XOR<imovelCreateWithoutMemoriacalculoInput, imovelUncheckedCreateWithoutMemoriacalculoInput>
    connectOrCreate?: imovelCreateOrConnectWithoutMemoriacalculoInput
    connect?: imovelWhereUniqueInput
  }

  export type memoriacalculoitemCreateNestedManyWithoutMemoriacalculoInput = {
    create?: XOR<memoriacalculoitemCreateWithoutMemoriacalculoInput, memoriacalculoitemUncheckedCreateWithoutMemoriacalculoInput> | memoriacalculoitemCreateWithoutMemoriacalculoInput[] | memoriacalculoitemUncheckedCreateWithoutMemoriacalculoInput[]
    connectOrCreate?: memoriacalculoitemCreateOrConnectWithoutMemoriacalculoInput | memoriacalculoitemCreateOrConnectWithoutMemoriacalculoInput[]
    createMany?: memoriacalculoitemCreateManyMemoriacalculoInputEnvelope
    connect?: memoriacalculoitemWhereUniqueInput | memoriacalculoitemWhereUniqueInput[]
  }

  export type memoriacalculoitemUncheckedCreateNestedManyWithoutMemoriacalculoInput = {
    create?: XOR<memoriacalculoitemCreateWithoutMemoriacalculoInput, memoriacalculoitemUncheckedCreateWithoutMemoriacalculoInput> | memoriacalculoitemCreateWithoutMemoriacalculoInput[] | memoriacalculoitemUncheckedCreateWithoutMemoriacalculoInput[]
    connectOrCreate?: memoriacalculoitemCreateOrConnectWithoutMemoriacalculoInput | memoriacalculoitemCreateOrConnectWithoutMemoriacalculoInput[]
    createMany?: memoriacalculoitemCreateManyMemoriacalculoInputEnvelope
    connect?: memoriacalculoitemWhereUniqueInput | memoriacalculoitemWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumindice_reajuste_enumFieldUpdateOperationsInput = {
    set?: $Enums.indice_reajuste_enum | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type contratolocacaoUpdateOneRequiredWithoutMemoriacalculoNestedInput = {
    create?: XOR<contratolocacaoCreateWithoutMemoriacalculoInput, contratolocacaoUncheckedCreateWithoutMemoriacalculoInput>
    connectOrCreate?: contratolocacaoCreateOrConnectWithoutMemoriacalculoInput
    upsert?: contratolocacaoUpsertWithoutMemoriacalculoInput
    connect?: contratolocacaoWhereUniqueInput
    update?: XOR<XOR<contratolocacaoUpdateToOneWithWhereWithoutMemoriacalculoInput, contratolocacaoUpdateWithoutMemoriacalculoInput>, contratolocacaoUncheckedUpdateWithoutMemoriacalculoInput>
  }

  export type imovelUpdateOneRequiredWithoutMemoriacalculoNestedInput = {
    create?: XOR<imovelCreateWithoutMemoriacalculoInput, imovelUncheckedCreateWithoutMemoriacalculoInput>
    connectOrCreate?: imovelCreateOrConnectWithoutMemoriacalculoInput
    upsert?: imovelUpsertWithoutMemoriacalculoInput
    connect?: imovelWhereUniqueInput
    update?: XOR<XOR<imovelUpdateToOneWithWhereWithoutMemoriacalculoInput, imovelUpdateWithoutMemoriacalculoInput>, imovelUncheckedUpdateWithoutMemoriacalculoInput>
  }

  export type memoriacalculoitemUpdateManyWithoutMemoriacalculoNestedInput = {
    create?: XOR<memoriacalculoitemCreateWithoutMemoriacalculoInput, memoriacalculoitemUncheckedCreateWithoutMemoriacalculoInput> | memoriacalculoitemCreateWithoutMemoriacalculoInput[] | memoriacalculoitemUncheckedCreateWithoutMemoriacalculoInput[]
    connectOrCreate?: memoriacalculoitemCreateOrConnectWithoutMemoriacalculoInput | memoriacalculoitemCreateOrConnectWithoutMemoriacalculoInput[]
    upsert?: memoriacalculoitemUpsertWithWhereUniqueWithoutMemoriacalculoInput | memoriacalculoitemUpsertWithWhereUniqueWithoutMemoriacalculoInput[]
    createMany?: memoriacalculoitemCreateManyMemoriacalculoInputEnvelope
    set?: memoriacalculoitemWhereUniqueInput | memoriacalculoitemWhereUniqueInput[]
    disconnect?: memoriacalculoitemWhereUniqueInput | memoriacalculoitemWhereUniqueInput[]
    delete?: memoriacalculoitemWhereUniqueInput | memoriacalculoitemWhereUniqueInput[]
    connect?: memoriacalculoitemWhereUniqueInput | memoriacalculoitemWhereUniqueInput[]
    update?: memoriacalculoitemUpdateWithWhereUniqueWithoutMemoriacalculoInput | memoriacalculoitemUpdateWithWhereUniqueWithoutMemoriacalculoInput[]
    updateMany?: memoriacalculoitemUpdateManyWithWhereWithoutMemoriacalculoInput | memoriacalculoitemUpdateManyWithWhereWithoutMemoriacalculoInput[]
    deleteMany?: memoriacalculoitemScalarWhereInput | memoriacalculoitemScalarWhereInput[]
  }

  export type memoriacalculoitemUncheckedUpdateManyWithoutMemoriacalculoNestedInput = {
    create?: XOR<memoriacalculoitemCreateWithoutMemoriacalculoInput, memoriacalculoitemUncheckedCreateWithoutMemoriacalculoInput> | memoriacalculoitemCreateWithoutMemoriacalculoInput[] | memoriacalculoitemUncheckedCreateWithoutMemoriacalculoInput[]
    connectOrCreate?: memoriacalculoitemCreateOrConnectWithoutMemoriacalculoInput | memoriacalculoitemCreateOrConnectWithoutMemoriacalculoInput[]
    upsert?: memoriacalculoitemUpsertWithWhereUniqueWithoutMemoriacalculoInput | memoriacalculoitemUpsertWithWhereUniqueWithoutMemoriacalculoInput[]
    createMany?: memoriacalculoitemCreateManyMemoriacalculoInputEnvelope
    set?: memoriacalculoitemWhereUniqueInput | memoriacalculoitemWhereUniqueInput[]
    disconnect?: memoriacalculoitemWhereUniqueInput | memoriacalculoitemWhereUniqueInput[]
    delete?: memoriacalculoitemWhereUniqueInput | memoriacalculoitemWhereUniqueInput[]
    connect?: memoriacalculoitemWhereUniqueInput | memoriacalculoitemWhereUniqueInput[]
    update?: memoriacalculoitemUpdateWithWhereUniqueWithoutMemoriacalculoInput | memoriacalculoitemUpdateWithWhereUniqueWithoutMemoriacalculoInput[]
    updateMany?: memoriacalculoitemUpdateManyWithWhereWithoutMemoriacalculoInput | memoriacalculoitemUpdateManyWithWhereWithoutMemoriacalculoInput[]
    deleteMany?: memoriacalculoitemScalarWhereInput | memoriacalculoitemScalarWhereInput[]
  }

  export type memoriacalculoCreateNestedOneWithoutItensInput = {
    create?: XOR<memoriacalculoCreateWithoutItensInput, memoriacalculoUncheckedCreateWithoutItensInput>
    connectOrCreate?: memoriacalculoCreateOrConnectWithoutItensInput
    connect?: memoriacalculoWhereUniqueInput
  }

  export type memoriacalculoUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<memoriacalculoCreateWithoutItensInput, memoriacalculoUncheckedCreateWithoutItensInput>
    connectOrCreate?: memoriacalculoCreateOrConnectWithoutItensInput
    upsert?: memoriacalculoUpsertWithoutItensInput
    connect?: memoriacalculoWhereUniqueInput
    update?: XOR<XOR<memoriacalculoUpdateToOneWithWhereWithoutItensInput, memoriacalculoUpdateWithoutItensInput>, memoriacalculoUncheckedUpdateWithoutItensInput>
  }

  export type contratolocacaoCreateNestedOneWithoutDespesaInput = {
    create?: XOR<contratolocacaoCreateWithoutDespesaInput, contratolocacaoUncheckedCreateWithoutDespesaInput>
    connectOrCreate?: contratolocacaoCreateOrConnectWithoutDespesaInput
    connect?: contratolocacaoWhereUniqueInput
  }

  export type Enumtipo_despesa_enumFieldUpdateOperationsInput = {
    set?: $Enums.tipo_despesa_enum
  }

  export type Enumstatus_despesa_enumFieldUpdateOperationsInput = {
    set?: $Enums.status_despesa_enum
  }

  export type contratolocacaoUpdateOneRequiredWithoutDespesaNestedInput = {
    create?: XOR<contratolocacaoCreateWithoutDespesaInput, contratolocacaoUncheckedCreateWithoutDespesaInput>
    connectOrCreate?: contratolocacaoCreateOrConnectWithoutDespesaInput
    upsert?: contratolocacaoUpsertWithoutDespesaInput
    connect?: contratolocacaoWhereUniqueInput
    update?: XOR<XOR<contratolocacaoUpdateToOneWithWhereWithoutDespesaInput, contratolocacaoUpdateWithoutDespesaInput>, contratolocacaoUncheckedUpdateWithoutDespesaInput>
  }

  export type faixairrfCreateNestedManyWithoutTabelairrfInput = {
    create?: XOR<faixairrfCreateWithoutTabelairrfInput, faixairrfUncheckedCreateWithoutTabelairrfInput> | faixairrfCreateWithoutTabelairrfInput[] | faixairrfUncheckedCreateWithoutTabelairrfInput[]
    connectOrCreate?: faixairrfCreateOrConnectWithoutTabelairrfInput | faixairrfCreateOrConnectWithoutTabelairrfInput[]
    createMany?: faixairrfCreateManyTabelairrfInputEnvelope
    connect?: faixairrfWhereUniqueInput | faixairrfWhereUniqueInput[]
  }

  export type faixairrfUncheckedCreateNestedManyWithoutTabelairrfInput = {
    create?: XOR<faixairrfCreateWithoutTabelairrfInput, faixairrfUncheckedCreateWithoutTabelairrfInput> | faixairrfCreateWithoutTabelairrfInput[] | faixairrfUncheckedCreateWithoutTabelairrfInput[]
    connectOrCreate?: faixairrfCreateOrConnectWithoutTabelairrfInput | faixairrfCreateOrConnectWithoutTabelairrfInput[]
    createMany?: faixairrfCreateManyTabelairrfInputEnvelope
    connect?: faixairrfWhereUniqueInput | faixairrfWhereUniqueInput[]
  }

  export type faixairrfUpdateManyWithoutTabelairrfNestedInput = {
    create?: XOR<faixairrfCreateWithoutTabelairrfInput, faixairrfUncheckedCreateWithoutTabelairrfInput> | faixairrfCreateWithoutTabelairrfInput[] | faixairrfUncheckedCreateWithoutTabelairrfInput[]
    connectOrCreate?: faixairrfCreateOrConnectWithoutTabelairrfInput | faixairrfCreateOrConnectWithoutTabelairrfInput[]
    upsert?: faixairrfUpsertWithWhereUniqueWithoutTabelairrfInput | faixairrfUpsertWithWhereUniqueWithoutTabelairrfInput[]
    createMany?: faixairrfCreateManyTabelairrfInputEnvelope
    set?: faixairrfWhereUniqueInput | faixairrfWhereUniqueInput[]
    disconnect?: faixairrfWhereUniqueInput | faixairrfWhereUniqueInput[]
    delete?: faixairrfWhereUniqueInput | faixairrfWhereUniqueInput[]
    connect?: faixairrfWhereUniqueInput | faixairrfWhereUniqueInput[]
    update?: faixairrfUpdateWithWhereUniqueWithoutTabelairrfInput | faixairrfUpdateWithWhereUniqueWithoutTabelairrfInput[]
    updateMany?: faixairrfUpdateManyWithWhereWithoutTabelairrfInput | faixairrfUpdateManyWithWhereWithoutTabelairrfInput[]
    deleteMany?: faixairrfScalarWhereInput | faixairrfScalarWhereInput[]
  }

  export type faixairrfUncheckedUpdateManyWithoutTabelairrfNestedInput = {
    create?: XOR<faixairrfCreateWithoutTabelairrfInput, faixairrfUncheckedCreateWithoutTabelairrfInput> | faixairrfCreateWithoutTabelairrfInput[] | faixairrfUncheckedCreateWithoutTabelairrfInput[]
    connectOrCreate?: faixairrfCreateOrConnectWithoutTabelairrfInput | faixairrfCreateOrConnectWithoutTabelairrfInput[]
    upsert?: faixairrfUpsertWithWhereUniqueWithoutTabelairrfInput | faixairrfUpsertWithWhereUniqueWithoutTabelairrfInput[]
    createMany?: faixairrfCreateManyTabelairrfInputEnvelope
    set?: faixairrfWhereUniqueInput | faixairrfWhereUniqueInput[]
    disconnect?: faixairrfWhereUniqueInput | faixairrfWhereUniqueInput[]
    delete?: faixairrfWhereUniqueInput | faixairrfWhereUniqueInput[]
    connect?: faixairrfWhereUniqueInput | faixairrfWhereUniqueInput[]
    update?: faixairrfUpdateWithWhereUniqueWithoutTabelairrfInput | faixairrfUpdateWithWhereUniqueWithoutTabelairrfInput[]
    updateMany?: faixairrfUpdateManyWithWhereWithoutTabelairrfInput | faixairrfUpdateManyWithWhereWithoutTabelairrfInput[]
    deleteMany?: faixairrfScalarWhereInput | faixairrfScalarWhereInput[]
  }

  export type tabelairrfCreateNestedOneWithoutFaixairrfInput = {
    create?: XOR<tabelairrfCreateWithoutFaixairrfInput, tabelairrfUncheckedCreateWithoutFaixairrfInput>
    connectOrCreate?: tabelairrfCreateOrConnectWithoutFaixairrfInput
    connect?: tabelairrfWhereUniqueInput
  }

  export type tabelairrfUpdateOneRequiredWithoutFaixairrfNestedInput = {
    create?: XOR<tabelairrfCreateWithoutFaixairrfInput, tabelairrfUncheckedCreateWithoutFaixairrfInput>
    connectOrCreate?: tabelairrfCreateOrConnectWithoutFaixairrfInput
    upsert?: tabelairrfUpsertWithoutFaixairrfInput
    connect?: tabelairrfWhereUniqueInput
    update?: XOR<XOR<tabelairrfUpdateToOneWithWhereWithoutFaixairrfInput, tabelairrfUpdateWithoutFaixairrfInput>, tabelairrfUncheckedUpdateWithoutFaixairrfInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumclassificacao_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.classificacao_enum | Enumclassificacao_enumFieldRefInput<$PrismaModel>
    in?: $Enums.classificacao_enum[]
    notIn?: $Enums.classificacao_enum[]
    not?: NestedEnumclassificacao_enumFilter<$PrismaModel> | $Enums.classificacao_enum
  }

  export type NestedEnumtipologia_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.tipologia_enum | Enumtipologia_enumFieldRefInput<$PrismaModel>
    in?: $Enums.tipologia_enum[]
    notIn?: $Enums.tipologia_enum[]
    not?: NestedEnumtipologia_enumFilter<$PrismaModel> | $Enums.tipologia_enum
  }

  export type NestedEnumstatus_imovel_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.status_imovel_enum | Enumstatus_imovel_enumFieldRefInput<$PrismaModel>
    in?: $Enums.status_imovel_enum[]
    notIn?: $Enums.status_imovel_enum[]
    not?: NestedEnumstatus_imovel_enumFilter<$PrismaModel> | $Enums.status_imovel_enum
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumclassificacao_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.classificacao_enum | Enumclassificacao_enumFieldRefInput<$PrismaModel>
    in?: $Enums.classificacao_enum[]
    notIn?: $Enums.classificacao_enum[]
    not?: NestedEnumclassificacao_enumWithAggregatesFilter<$PrismaModel> | $Enums.classificacao_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumclassificacao_enumFilter<$PrismaModel>
    _max?: NestedEnumclassificacao_enumFilter<$PrismaModel>
  }

  export type NestedEnumtipologia_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tipologia_enum | Enumtipologia_enumFieldRefInput<$PrismaModel>
    in?: $Enums.tipologia_enum[]
    notIn?: $Enums.tipologia_enum[]
    not?: NestedEnumtipologia_enumWithAggregatesFilter<$PrismaModel> | $Enums.tipologia_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtipologia_enumFilter<$PrismaModel>
    _max?: NestedEnumtipologia_enumFilter<$PrismaModel>
  }

  export type NestedEnumstatus_imovel_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status_imovel_enum | Enumstatus_imovel_enumFieldRefInput<$PrismaModel>
    in?: $Enums.status_imovel_enum[]
    notIn?: $Enums.status_imovel_enum[]
    not?: NestedEnumstatus_imovel_enumWithAggregatesFilter<$PrismaModel> | $Enums.status_imovel_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatus_imovel_enumFilter<$PrismaModel>
    _max?: NestedEnumstatus_imovel_enumFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumstatus_contrato_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.status_contrato_enum | Enumstatus_contrato_enumFieldRefInput<$PrismaModel>
    in?: $Enums.status_contrato_enum[]
    notIn?: $Enums.status_contrato_enum[]
    not?: NestedEnumstatus_contrato_enumFilter<$PrismaModel> | $Enums.status_contrato_enum
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | null
    notIn?: Bytes[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Bytes | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumstatus_contrato_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status_contrato_enum | Enumstatus_contrato_enumFieldRefInput<$PrismaModel>
    in?: $Enums.status_contrato_enum[]
    notIn?: $Enums.status_contrato_enum[]
    not?: NestedEnumstatus_contrato_enumWithAggregatesFilter<$PrismaModel> | $Enums.status_contrato_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatus_contrato_enumFilter<$PrismaModel>
    _max?: NestedEnumstatus_contrato_enumFilter<$PrismaModel>
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | null
    notIn?: Bytes[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Bytes | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NestedEnumindice_reajuste_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.indice_reajuste_enum | Enumindice_reajuste_enumFieldRefInput<$PrismaModel>
    in?: $Enums.indice_reajuste_enum[]
    notIn?: $Enums.indice_reajuste_enum[]
    not?: NestedEnumindice_reajuste_enumFilter<$PrismaModel> | $Enums.indice_reajuste_enum
  }

  export type NestedEnumindice_reajuste_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.indice_reajuste_enum | Enumindice_reajuste_enumFieldRefInput<$PrismaModel>
    in?: $Enums.indice_reajuste_enum[]
    notIn?: $Enums.indice_reajuste_enum[]
    not?: NestedEnumindice_reajuste_enumWithAggregatesFilter<$PrismaModel> | $Enums.indice_reajuste_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumindice_reajuste_enumFilter<$PrismaModel>
    _max?: NestedEnumindice_reajuste_enumFilter<$PrismaModel>
  }

  export type NestedEnumindice_reajuste_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.indice_reajuste_enum | Enumindice_reajuste_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.indice_reajuste_enum[] | null
    notIn?: $Enums.indice_reajuste_enum[] | null
    not?: NestedEnumindice_reajuste_enumNullableFilter<$PrismaModel> | $Enums.indice_reajuste_enum | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumindice_reajuste_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.indice_reajuste_enum | Enumindice_reajuste_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.indice_reajuste_enum[] | null
    notIn?: $Enums.indice_reajuste_enum[] | null
    not?: NestedEnumindice_reajuste_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.indice_reajuste_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumindice_reajuste_enumNullableFilter<$PrismaModel>
    _max?: NestedEnumindice_reajuste_enumNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumtipo_despesa_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_despesa_enum | Enumtipo_despesa_enumFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_despesa_enum[]
    notIn?: $Enums.tipo_despesa_enum[]
    not?: NestedEnumtipo_despesa_enumFilter<$PrismaModel> | $Enums.tipo_despesa_enum
  }

  export type NestedEnumstatus_despesa_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.status_despesa_enum | Enumstatus_despesa_enumFieldRefInput<$PrismaModel>
    in?: $Enums.status_despesa_enum[]
    notIn?: $Enums.status_despesa_enum[]
    not?: NestedEnumstatus_despesa_enumFilter<$PrismaModel> | $Enums.status_despesa_enum
  }

  export type NestedEnumtipo_despesa_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_despesa_enum | Enumtipo_despesa_enumFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_despesa_enum[]
    notIn?: $Enums.tipo_despesa_enum[]
    not?: NestedEnumtipo_despesa_enumWithAggregatesFilter<$PrismaModel> | $Enums.tipo_despesa_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtipo_despesa_enumFilter<$PrismaModel>
    _max?: NestedEnumtipo_despesa_enumFilter<$PrismaModel>
  }

  export type NestedEnumstatus_despesa_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status_despesa_enum | Enumstatus_despesa_enumFieldRefInput<$PrismaModel>
    in?: $Enums.status_despesa_enum[]
    notIn?: $Enums.status_despesa_enum[]
    not?: NestedEnumstatus_despesa_enumWithAggregatesFilter<$PrismaModel> | $Enums.status_despesa_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatus_despesa_enumFilter<$PrismaModel>
    _max?: NestedEnumstatus_despesa_enumFilter<$PrismaModel>
  }

  export type imovelCreateWithoutEnderecoInput = {
    inscricaoIPTU?: string | null
    inscricaoBombeiro?: string | null
    metragem?: string | null
    dataCadastro?: Date | string
    classificacao: $Enums.classificacao_enum
    tipologia: $Enums.tipologia_enum
    status: $Enums.status_imovel_enum
    contratolocacao?: contratolocacaoCreateNestedManyWithoutImovelInput
    propriedadeimovel?: propriedadeimovelCreateNestedManyWithoutImovelInput
    memoriacalculo?: memoriacalculoCreateNestedManyWithoutImovelInput
  }

  export type imovelUncheckedCreateWithoutEnderecoInput = {
    id?: number
    inscricaoIPTU?: string | null
    inscricaoBombeiro?: string | null
    metragem?: string | null
    dataCadastro?: Date | string
    classificacao: $Enums.classificacao_enum
    tipologia: $Enums.tipologia_enum
    status: $Enums.status_imovel_enum
    contratolocacao?: contratolocacaoUncheckedCreateNestedManyWithoutImovelInput
    propriedadeimovel?: propriedadeimovelUncheckedCreateNestedManyWithoutImovelInput
    memoriacalculo?: memoriacalculoUncheckedCreateNestedManyWithoutImovelInput
  }

  export type imovelCreateOrConnectWithoutEnderecoInput = {
    where: imovelWhereUniqueInput
    create: XOR<imovelCreateWithoutEnderecoInput, imovelUncheckedCreateWithoutEnderecoInput>
  }

  export type imovelCreateManyEnderecoInputEnvelope = {
    data: imovelCreateManyEnderecoInput | imovelCreateManyEnderecoInput[]
    skipDuplicates?: boolean
  }

  export type imovelUpsertWithWhereUniqueWithoutEnderecoInput = {
    where: imovelWhereUniqueInput
    update: XOR<imovelUpdateWithoutEnderecoInput, imovelUncheckedUpdateWithoutEnderecoInput>
    create: XOR<imovelCreateWithoutEnderecoInput, imovelUncheckedCreateWithoutEnderecoInput>
  }

  export type imovelUpdateWithWhereUniqueWithoutEnderecoInput = {
    where: imovelWhereUniqueInput
    data: XOR<imovelUpdateWithoutEnderecoInput, imovelUncheckedUpdateWithoutEnderecoInput>
  }

  export type imovelUpdateManyWithWhereWithoutEnderecoInput = {
    where: imovelScalarWhereInput
    data: XOR<imovelUpdateManyMutationInput, imovelUncheckedUpdateManyWithoutEnderecoInput>
  }

  export type imovelScalarWhereInput = {
    AND?: imovelScalarWhereInput | imovelScalarWhereInput[]
    OR?: imovelScalarWhereInput[]
    NOT?: imovelScalarWhereInput | imovelScalarWhereInput[]
    id?: IntFilter<"imovel"> | number
    idEndereco?: IntFilter<"imovel"> | number
    inscricaoIPTU?: StringNullableFilter<"imovel"> | string | null
    inscricaoBombeiro?: StringNullableFilter<"imovel"> | string | null
    metragem?: StringNullableFilter<"imovel"> | string | null
    dataCadastro?: DateTimeFilter<"imovel"> | Date | string
    classificacao?: Enumclassificacao_enumFilter<"imovel"> | $Enums.classificacao_enum
    tipologia?: Enumtipologia_enumFilter<"imovel"> | $Enums.tipologia_enum
    status?: Enumstatus_imovel_enumFilter<"imovel"> | $Enums.status_imovel_enum
  }

  export type enderecoCreateWithoutImovelInput = {
    rua: string
    numero?: string | null
    bairro: string
    cidade: string
    estado: string
    cep: string
  }

  export type enderecoUncheckedCreateWithoutImovelInput = {
    id?: number
    rua: string
    numero?: string | null
    bairro: string
    cidade: string
    estado: string
    cep: string
  }

  export type enderecoCreateOrConnectWithoutImovelInput = {
    where: enderecoWhereUniqueInput
    create: XOR<enderecoCreateWithoutImovelInput, enderecoUncheckedCreateWithoutImovelInput>
  }

  export type contratolocacaoCreateWithoutImovelInput = {
    id?: bigint | number
    idLocador: bigint | number
    idLocatario: bigint | number
    dataInicio: Date | string
    dataFim?: Date | string | null
    dataReajuste?: Date | string | null
    valorAluguel: Decimal | DecimalJsLike | number | string
    status?: $Enums.status_contrato_enum
    contratoDigitalizado?: Bytes | null
    comissao: Decimal | DecimalJsLike | number | string
    despesa?: despesaCreateNestedManyWithoutContratolocacaoInput
    reajustecontrato?: reajustecontratoCreateNestedManyWithoutContratolocacaoInput
    memoriacalculo?: memoriacalculoCreateNestedManyWithoutContratolocacaoInput
  }

  export type contratolocacaoUncheckedCreateWithoutImovelInput = {
    id?: bigint | number
    idLocador: bigint | number
    idLocatario: bigint | number
    dataInicio: Date | string
    dataFim?: Date | string | null
    dataReajuste?: Date | string | null
    valorAluguel: Decimal | DecimalJsLike | number | string
    status?: $Enums.status_contrato_enum
    contratoDigitalizado?: Bytes | null
    comissao: Decimal | DecimalJsLike | number | string
    despesa?: despesaUncheckedCreateNestedManyWithoutContratolocacaoInput
    reajustecontrato?: reajustecontratoUncheckedCreateNestedManyWithoutContratolocacaoInput
    memoriacalculo?: memoriacalculoUncheckedCreateNestedManyWithoutContratolocacaoInput
  }

  export type contratolocacaoCreateOrConnectWithoutImovelInput = {
    where: contratolocacaoWhereUniqueInput
    create: XOR<contratolocacaoCreateWithoutImovelInput, contratolocacaoUncheckedCreateWithoutImovelInput>
  }

  export type contratolocacaoCreateManyImovelInputEnvelope = {
    data: contratolocacaoCreateManyImovelInput | contratolocacaoCreateManyImovelInput[]
    skipDuplicates?: boolean
  }

  export type propriedadeimovelCreateWithoutImovelInput = {
    idLocador: bigint | number
    percentualParticipacao: Decimal | DecimalJsLike | number | string
  }

  export type propriedadeimovelUncheckedCreateWithoutImovelInput = {
    id?: number
    idLocador: bigint | number
    percentualParticipacao: Decimal | DecimalJsLike | number | string
  }

  export type propriedadeimovelCreateOrConnectWithoutImovelInput = {
    where: propriedadeimovelWhereUniqueInput
    create: XOR<propriedadeimovelCreateWithoutImovelInput, propriedadeimovelUncheckedCreateWithoutImovelInput>
  }

  export type propriedadeimovelCreateManyImovelInputEnvelope = {
    data: propriedadeimovelCreateManyImovelInput | propriedadeimovelCreateManyImovelInput[]
    skipDuplicates?: boolean
  }

  export type memoriacalculoCreateWithoutImovelInput = {
    competencia: Date | string
    valorAluguelBase: Decimal | DecimalJsLike | number | string
    idContaBancaria?: number | null
    contaDescricao?: string | null
    contaBanco?: string | null
    contaAgencia?: string | null
    contaNumero?: string | null
    contaTipoChavePix?: string | null
    contaChavePix?: string | null
    contaTitular?: string | null
    contaDocumentoTitular?: string | null
    reajusteIndice?: $Enums.indice_reajuste_enum | null
    reajustePercentual?: Decimal | DecimalJsLike | number | string | null
    reajusteValorAnterior?: Decimal | DecimalJsLike | number | string | null
    totalAPagar: Decimal | DecimalJsLike | number | string
    geradoPorUsuarioId: number
    criadoEm?: Date | string
    contratolocacao: contratolocacaoCreateNestedOneWithoutMemoriacalculoInput
    itens?: memoriacalculoitemCreateNestedManyWithoutMemoriacalculoInput
  }

  export type memoriacalculoUncheckedCreateWithoutImovelInput = {
    id?: number
    idContrato: bigint | number
    competencia: Date | string
    valorAluguelBase: Decimal | DecimalJsLike | number | string
    idContaBancaria?: number | null
    contaDescricao?: string | null
    contaBanco?: string | null
    contaAgencia?: string | null
    contaNumero?: string | null
    contaTipoChavePix?: string | null
    contaChavePix?: string | null
    contaTitular?: string | null
    contaDocumentoTitular?: string | null
    reajusteIndice?: $Enums.indice_reajuste_enum | null
    reajustePercentual?: Decimal | DecimalJsLike | number | string | null
    reajusteValorAnterior?: Decimal | DecimalJsLike | number | string | null
    totalAPagar: Decimal | DecimalJsLike | number | string
    geradoPorUsuarioId: number
    criadoEm?: Date | string
    itens?: memoriacalculoitemUncheckedCreateNestedManyWithoutMemoriacalculoInput
  }

  export type memoriacalculoCreateOrConnectWithoutImovelInput = {
    where: memoriacalculoWhereUniqueInput
    create: XOR<memoriacalculoCreateWithoutImovelInput, memoriacalculoUncheckedCreateWithoutImovelInput>
  }

  export type memoriacalculoCreateManyImovelInputEnvelope = {
    data: memoriacalculoCreateManyImovelInput | memoriacalculoCreateManyImovelInput[]
    skipDuplicates?: boolean
  }

  export type enderecoUpsertWithoutImovelInput = {
    update: XOR<enderecoUpdateWithoutImovelInput, enderecoUncheckedUpdateWithoutImovelInput>
    create: XOR<enderecoCreateWithoutImovelInput, enderecoUncheckedCreateWithoutImovelInput>
    where?: enderecoWhereInput
  }

  export type enderecoUpdateToOneWithWhereWithoutImovelInput = {
    where?: enderecoWhereInput
    data: XOR<enderecoUpdateWithoutImovelInput, enderecoUncheckedUpdateWithoutImovelInput>
  }

  export type enderecoUpdateWithoutImovelInput = {
    rua?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
  }

  export type enderecoUncheckedUpdateWithoutImovelInput = {
    id?: IntFieldUpdateOperationsInput | number
    rua?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
  }

  export type contratolocacaoUpsertWithWhereUniqueWithoutImovelInput = {
    where: contratolocacaoWhereUniqueInput
    update: XOR<contratolocacaoUpdateWithoutImovelInput, contratolocacaoUncheckedUpdateWithoutImovelInput>
    create: XOR<contratolocacaoCreateWithoutImovelInput, contratolocacaoUncheckedCreateWithoutImovelInput>
  }

  export type contratolocacaoUpdateWithWhereUniqueWithoutImovelInput = {
    where: contratolocacaoWhereUniqueInput
    data: XOR<contratolocacaoUpdateWithoutImovelInput, contratolocacaoUncheckedUpdateWithoutImovelInput>
  }

  export type contratolocacaoUpdateManyWithWhereWithoutImovelInput = {
    where: contratolocacaoScalarWhereInput
    data: XOR<contratolocacaoUpdateManyMutationInput, contratolocacaoUncheckedUpdateManyWithoutImovelInput>
  }

  export type contratolocacaoScalarWhereInput = {
    AND?: contratolocacaoScalarWhereInput | contratolocacaoScalarWhereInput[]
    OR?: contratolocacaoScalarWhereInput[]
    NOT?: contratolocacaoScalarWhereInput | contratolocacaoScalarWhereInput[]
    id?: BigIntFilter<"contratolocacao"> | bigint | number
    idImovel?: IntFilter<"contratolocacao"> | number
    idLocador?: BigIntFilter<"contratolocacao"> | bigint | number
    idLocatario?: BigIntFilter<"contratolocacao"> | bigint | number
    dataInicio?: DateTimeFilter<"contratolocacao"> | Date | string
    dataFim?: DateTimeNullableFilter<"contratolocacao"> | Date | string | null
    dataReajuste?: DateTimeNullableFilter<"contratolocacao"> | Date | string | null
    valorAluguel?: DecimalFilter<"contratolocacao"> | Decimal | DecimalJsLike | number | string
    status?: Enumstatus_contrato_enumFilter<"contratolocacao"> | $Enums.status_contrato_enum
    contratoDigitalizado?: BytesNullableFilter<"contratolocacao"> | Bytes | null
    comissao?: DecimalFilter<"contratolocacao"> | Decimal | DecimalJsLike | number | string
  }

  export type propriedadeimovelUpsertWithWhereUniqueWithoutImovelInput = {
    where: propriedadeimovelWhereUniqueInput
    update: XOR<propriedadeimovelUpdateWithoutImovelInput, propriedadeimovelUncheckedUpdateWithoutImovelInput>
    create: XOR<propriedadeimovelCreateWithoutImovelInput, propriedadeimovelUncheckedCreateWithoutImovelInput>
  }

  export type propriedadeimovelUpdateWithWhereUniqueWithoutImovelInput = {
    where: propriedadeimovelWhereUniqueInput
    data: XOR<propriedadeimovelUpdateWithoutImovelInput, propriedadeimovelUncheckedUpdateWithoutImovelInput>
  }

  export type propriedadeimovelUpdateManyWithWhereWithoutImovelInput = {
    where: propriedadeimovelScalarWhereInput
    data: XOR<propriedadeimovelUpdateManyMutationInput, propriedadeimovelUncheckedUpdateManyWithoutImovelInput>
  }

  export type propriedadeimovelScalarWhereInput = {
    AND?: propriedadeimovelScalarWhereInput | propriedadeimovelScalarWhereInput[]
    OR?: propriedadeimovelScalarWhereInput[]
    NOT?: propriedadeimovelScalarWhereInput | propriedadeimovelScalarWhereInput[]
    id?: IntFilter<"propriedadeimovel"> | number
    idImovel?: IntFilter<"propriedadeimovel"> | number
    idLocador?: BigIntFilter<"propriedadeimovel"> | bigint | number
    percentualParticipacao?: DecimalFilter<"propriedadeimovel"> | Decimal | DecimalJsLike | number | string
  }

  export type memoriacalculoUpsertWithWhereUniqueWithoutImovelInput = {
    where: memoriacalculoWhereUniqueInput
    update: XOR<memoriacalculoUpdateWithoutImovelInput, memoriacalculoUncheckedUpdateWithoutImovelInput>
    create: XOR<memoriacalculoCreateWithoutImovelInput, memoriacalculoUncheckedCreateWithoutImovelInput>
  }

  export type memoriacalculoUpdateWithWhereUniqueWithoutImovelInput = {
    where: memoriacalculoWhereUniqueInput
    data: XOR<memoriacalculoUpdateWithoutImovelInput, memoriacalculoUncheckedUpdateWithoutImovelInput>
  }

  export type memoriacalculoUpdateManyWithWhereWithoutImovelInput = {
    where: memoriacalculoScalarWhereInput
    data: XOR<memoriacalculoUpdateManyMutationInput, memoriacalculoUncheckedUpdateManyWithoutImovelInput>
  }

  export type memoriacalculoScalarWhereInput = {
    AND?: memoriacalculoScalarWhereInput | memoriacalculoScalarWhereInput[]
    OR?: memoriacalculoScalarWhereInput[]
    NOT?: memoriacalculoScalarWhereInput | memoriacalculoScalarWhereInput[]
    id?: IntFilter<"memoriacalculo"> | number
    idContrato?: BigIntFilter<"memoriacalculo"> | bigint | number
    idImovel?: IntFilter<"memoriacalculo"> | number
    competencia?: DateTimeFilter<"memoriacalculo"> | Date | string
    valorAluguelBase?: DecimalFilter<"memoriacalculo"> | Decimal | DecimalJsLike | number | string
    idContaBancaria?: IntNullableFilter<"memoriacalculo"> | number | null
    contaDescricao?: StringNullableFilter<"memoriacalculo"> | string | null
    contaBanco?: StringNullableFilter<"memoriacalculo"> | string | null
    contaAgencia?: StringNullableFilter<"memoriacalculo"> | string | null
    contaNumero?: StringNullableFilter<"memoriacalculo"> | string | null
    contaTipoChavePix?: StringNullableFilter<"memoriacalculo"> | string | null
    contaChavePix?: StringNullableFilter<"memoriacalculo"> | string | null
    contaTitular?: StringNullableFilter<"memoriacalculo"> | string | null
    contaDocumentoTitular?: StringNullableFilter<"memoriacalculo"> | string | null
    reajusteIndice?: Enumindice_reajuste_enumNullableFilter<"memoriacalculo"> | $Enums.indice_reajuste_enum | null
    reajustePercentual?: DecimalNullableFilter<"memoriacalculo"> | Decimal | DecimalJsLike | number | string | null
    reajusteValorAnterior?: DecimalNullableFilter<"memoriacalculo"> | Decimal | DecimalJsLike | number | string | null
    totalAPagar?: DecimalFilter<"memoriacalculo"> | Decimal | DecimalJsLike | number | string
    geradoPorUsuarioId?: IntFilter<"memoriacalculo"> | number
    criadoEm?: DateTimeFilter<"memoriacalculo"> | Date | string
  }

  export type imovelCreateWithoutPropriedadeimovelInput = {
    inscricaoIPTU?: string | null
    inscricaoBombeiro?: string | null
    metragem?: string | null
    dataCadastro?: Date | string
    classificacao: $Enums.classificacao_enum
    tipologia: $Enums.tipologia_enum
    status: $Enums.status_imovel_enum
    endereco: enderecoCreateNestedOneWithoutImovelInput
    contratolocacao?: contratolocacaoCreateNestedManyWithoutImovelInput
    memoriacalculo?: memoriacalculoCreateNestedManyWithoutImovelInput
  }

  export type imovelUncheckedCreateWithoutPropriedadeimovelInput = {
    id?: number
    idEndereco: number
    inscricaoIPTU?: string | null
    inscricaoBombeiro?: string | null
    metragem?: string | null
    dataCadastro?: Date | string
    classificacao: $Enums.classificacao_enum
    tipologia: $Enums.tipologia_enum
    status: $Enums.status_imovel_enum
    contratolocacao?: contratolocacaoUncheckedCreateNestedManyWithoutImovelInput
    memoriacalculo?: memoriacalculoUncheckedCreateNestedManyWithoutImovelInput
  }

  export type imovelCreateOrConnectWithoutPropriedadeimovelInput = {
    where: imovelWhereUniqueInput
    create: XOR<imovelCreateWithoutPropriedadeimovelInput, imovelUncheckedCreateWithoutPropriedadeimovelInput>
  }

  export type imovelUpsertWithoutPropriedadeimovelInput = {
    update: XOR<imovelUpdateWithoutPropriedadeimovelInput, imovelUncheckedUpdateWithoutPropriedadeimovelInput>
    create: XOR<imovelCreateWithoutPropriedadeimovelInput, imovelUncheckedCreateWithoutPropriedadeimovelInput>
    where?: imovelWhereInput
  }

  export type imovelUpdateToOneWithWhereWithoutPropriedadeimovelInput = {
    where?: imovelWhereInput
    data: XOR<imovelUpdateWithoutPropriedadeimovelInput, imovelUncheckedUpdateWithoutPropriedadeimovelInput>
  }

  export type imovelUpdateWithoutPropriedadeimovelInput = {
    inscricaoIPTU?: NullableStringFieldUpdateOperationsInput | string | null
    inscricaoBombeiro?: NullableStringFieldUpdateOperationsInput | string | null
    metragem?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    classificacao?: Enumclassificacao_enumFieldUpdateOperationsInput | $Enums.classificacao_enum
    tipologia?: Enumtipologia_enumFieldUpdateOperationsInput | $Enums.tipologia_enum
    status?: Enumstatus_imovel_enumFieldUpdateOperationsInput | $Enums.status_imovel_enum
    endereco?: enderecoUpdateOneRequiredWithoutImovelNestedInput
    contratolocacao?: contratolocacaoUpdateManyWithoutImovelNestedInput
    memoriacalculo?: memoriacalculoUpdateManyWithoutImovelNestedInput
  }

  export type imovelUncheckedUpdateWithoutPropriedadeimovelInput = {
    id?: IntFieldUpdateOperationsInput | number
    idEndereco?: IntFieldUpdateOperationsInput | number
    inscricaoIPTU?: NullableStringFieldUpdateOperationsInput | string | null
    inscricaoBombeiro?: NullableStringFieldUpdateOperationsInput | string | null
    metragem?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    classificacao?: Enumclassificacao_enumFieldUpdateOperationsInput | $Enums.classificacao_enum
    tipologia?: Enumtipologia_enumFieldUpdateOperationsInput | $Enums.tipologia_enum
    status?: Enumstatus_imovel_enumFieldUpdateOperationsInput | $Enums.status_imovel_enum
    contratolocacao?: contratolocacaoUncheckedUpdateManyWithoutImovelNestedInput
    memoriacalculo?: memoriacalculoUncheckedUpdateManyWithoutImovelNestedInput
  }

  export type imovelCreateWithoutContratolocacaoInput = {
    inscricaoIPTU?: string | null
    inscricaoBombeiro?: string | null
    metragem?: string | null
    dataCadastro?: Date | string
    classificacao: $Enums.classificacao_enum
    tipologia: $Enums.tipologia_enum
    status: $Enums.status_imovel_enum
    endereco: enderecoCreateNestedOneWithoutImovelInput
    propriedadeimovel?: propriedadeimovelCreateNestedManyWithoutImovelInput
    memoriacalculo?: memoriacalculoCreateNestedManyWithoutImovelInput
  }

  export type imovelUncheckedCreateWithoutContratolocacaoInput = {
    id?: number
    idEndereco: number
    inscricaoIPTU?: string | null
    inscricaoBombeiro?: string | null
    metragem?: string | null
    dataCadastro?: Date | string
    classificacao: $Enums.classificacao_enum
    tipologia: $Enums.tipologia_enum
    status: $Enums.status_imovel_enum
    propriedadeimovel?: propriedadeimovelUncheckedCreateNestedManyWithoutImovelInput
    memoriacalculo?: memoriacalculoUncheckedCreateNestedManyWithoutImovelInput
  }

  export type imovelCreateOrConnectWithoutContratolocacaoInput = {
    where: imovelWhereUniqueInput
    create: XOR<imovelCreateWithoutContratolocacaoInput, imovelUncheckedCreateWithoutContratolocacaoInput>
  }

  export type despesaCreateWithoutContratolocacaoInput = {
    id?: bigint | number
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    tipo: $Enums.tipo_despesa_enum
    dataVencimento: Date | string
    dataPagamento?: Date | string | null
    status?: $Enums.status_despesa_enum
    comprovantePagamento?: Bytes | null
  }

  export type despesaUncheckedCreateWithoutContratolocacaoInput = {
    id?: bigint | number
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    tipo: $Enums.tipo_despesa_enum
    dataVencimento: Date | string
    dataPagamento?: Date | string | null
    status?: $Enums.status_despesa_enum
    comprovantePagamento?: Bytes | null
  }

  export type despesaCreateOrConnectWithoutContratolocacaoInput = {
    where: despesaWhereUniqueInput
    create: XOR<despesaCreateWithoutContratolocacaoInput, despesaUncheckedCreateWithoutContratolocacaoInput>
  }

  export type despesaCreateManyContratolocacaoInputEnvelope = {
    data: despesaCreateManyContratolocacaoInput | despesaCreateManyContratolocacaoInput[]
    skipDuplicates?: boolean
  }

  export type reajustecontratoCreateWithoutContratolocacaoInput = {
    id?: bigint | number
    dataReajuste: Date | string
    indice: $Enums.indice_reajuste_enum
    percentual: Decimal | DecimalJsLike | number | string
    valorAnterior: Decimal | DecimalJsLike | number | string
    valorNovo: Decimal | DecimalJsLike | number | string
    observacao?: string | null
    criadoEm?: Date | string
  }

  export type reajustecontratoUncheckedCreateWithoutContratolocacaoInput = {
    id?: bigint | number
    dataReajuste: Date | string
    indice: $Enums.indice_reajuste_enum
    percentual: Decimal | DecimalJsLike | number | string
    valorAnterior: Decimal | DecimalJsLike | number | string
    valorNovo: Decimal | DecimalJsLike | number | string
    observacao?: string | null
    criadoEm?: Date | string
  }

  export type reajustecontratoCreateOrConnectWithoutContratolocacaoInput = {
    where: reajustecontratoWhereUniqueInput
    create: XOR<reajustecontratoCreateWithoutContratolocacaoInput, reajustecontratoUncheckedCreateWithoutContratolocacaoInput>
  }

  export type reajustecontratoCreateManyContratolocacaoInputEnvelope = {
    data: reajustecontratoCreateManyContratolocacaoInput | reajustecontratoCreateManyContratolocacaoInput[]
    skipDuplicates?: boolean
  }

  export type memoriacalculoCreateWithoutContratolocacaoInput = {
    competencia: Date | string
    valorAluguelBase: Decimal | DecimalJsLike | number | string
    idContaBancaria?: number | null
    contaDescricao?: string | null
    contaBanco?: string | null
    contaAgencia?: string | null
    contaNumero?: string | null
    contaTipoChavePix?: string | null
    contaChavePix?: string | null
    contaTitular?: string | null
    contaDocumentoTitular?: string | null
    reajusteIndice?: $Enums.indice_reajuste_enum | null
    reajustePercentual?: Decimal | DecimalJsLike | number | string | null
    reajusteValorAnterior?: Decimal | DecimalJsLike | number | string | null
    totalAPagar: Decimal | DecimalJsLike | number | string
    geradoPorUsuarioId: number
    criadoEm?: Date | string
    imovel: imovelCreateNestedOneWithoutMemoriacalculoInput
    itens?: memoriacalculoitemCreateNestedManyWithoutMemoriacalculoInput
  }

  export type memoriacalculoUncheckedCreateWithoutContratolocacaoInput = {
    id?: number
    idImovel: number
    competencia: Date | string
    valorAluguelBase: Decimal | DecimalJsLike | number | string
    idContaBancaria?: number | null
    contaDescricao?: string | null
    contaBanco?: string | null
    contaAgencia?: string | null
    contaNumero?: string | null
    contaTipoChavePix?: string | null
    contaChavePix?: string | null
    contaTitular?: string | null
    contaDocumentoTitular?: string | null
    reajusteIndice?: $Enums.indice_reajuste_enum | null
    reajustePercentual?: Decimal | DecimalJsLike | number | string | null
    reajusteValorAnterior?: Decimal | DecimalJsLike | number | string | null
    totalAPagar: Decimal | DecimalJsLike | number | string
    geradoPorUsuarioId: number
    criadoEm?: Date | string
    itens?: memoriacalculoitemUncheckedCreateNestedManyWithoutMemoriacalculoInput
  }

  export type memoriacalculoCreateOrConnectWithoutContratolocacaoInput = {
    where: memoriacalculoWhereUniqueInput
    create: XOR<memoriacalculoCreateWithoutContratolocacaoInput, memoriacalculoUncheckedCreateWithoutContratolocacaoInput>
  }

  export type memoriacalculoCreateManyContratolocacaoInputEnvelope = {
    data: memoriacalculoCreateManyContratolocacaoInput | memoriacalculoCreateManyContratolocacaoInput[]
    skipDuplicates?: boolean
  }

  export type imovelUpsertWithoutContratolocacaoInput = {
    update: XOR<imovelUpdateWithoutContratolocacaoInput, imovelUncheckedUpdateWithoutContratolocacaoInput>
    create: XOR<imovelCreateWithoutContratolocacaoInput, imovelUncheckedCreateWithoutContratolocacaoInput>
    where?: imovelWhereInput
  }

  export type imovelUpdateToOneWithWhereWithoutContratolocacaoInput = {
    where?: imovelWhereInput
    data: XOR<imovelUpdateWithoutContratolocacaoInput, imovelUncheckedUpdateWithoutContratolocacaoInput>
  }

  export type imovelUpdateWithoutContratolocacaoInput = {
    inscricaoIPTU?: NullableStringFieldUpdateOperationsInput | string | null
    inscricaoBombeiro?: NullableStringFieldUpdateOperationsInput | string | null
    metragem?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    classificacao?: Enumclassificacao_enumFieldUpdateOperationsInput | $Enums.classificacao_enum
    tipologia?: Enumtipologia_enumFieldUpdateOperationsInput | $Enums.tipologia_enum
    status?: Enumstatus_imovel_enumFieldUpdateOperationsInput | $Enums.status_imovel_enum
    endereco?: enderecoUpdateOneRequiredWithoutImovelNestedInput
    propriedadeimovel?: propriedadeimovelUpdateManyWithoutImovelNestedInput
    memoriacalculo?: memoriacalculoUpdateManyWithoutImovelNestedInput
  }

  export type imovelUncheckedUpdateWithoutContratolocacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idEndereco?: IntFieldUpdateOperationsInput | number
    inscricaoIPTU?: NullableStringFieldUpdateOperationsInput | string | null
    inscricaoBombeiro?: NullableStringFieldUpdateOperationsInput | string | null
    metragem?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    classificacao?: Enumclassificacao_enumFieldUpdateOperationsInput | $Enums.classificacao_enum
    tipologia?: Enumtipologia_enumFieldUpdateOperationsInput | $Enums.tipologia_enum
    status?: Enumstatus_imovel_enumFieldUpdateOperationsInput | $Enums.status_imovel_enum
    propriedadeimovel?: propriedadeimovelUncheckedUpdateManyWithoutImovelNestedInput
    memoriacalculo?: memoriacalculoUncheckedUpdateManyWithoutImovelNestedInput
  }

  export type despesaUpsertWithWhereUniqueWithoutContratolocacaoInput = {
    where: despesaWhereUniqueInput
    update: XOR<despesaUpdateWithoutContratolocacaoInput, despesaUncheckedUpdateWithoutContratolocacaoInput>
    create: XOR<despesaCreateWithoutContratolocacaoInput, despesaUncheckedCreateWithoutContratolocacaoInput>
  }

  export type despesaUpdateWithWhereUniqueWithoutContratolocacaoInput = {
    where: despesaWhereUniqueInput
    data: XOR<despesaUpdateWithoutContratolocacaoInput, despesaUncheckedUpdateWithoutContratolocacaoInput>
  }

  export type despesaUpdateManyWithWhereWithoutContratolocacaoInput = {
    where: despesaScalarWhereInput
    data: XOR<despesaUpdateManyMutationInput, despesaUncheckedUpdateManyWithoutContratolocacaoInput>
  }

  export type despesaScalarWhereInput = {
    AND?: despesaScalarWhereInput | despesaScalarWhereInput[]
    OR?: despesaScalarWhereInput[]
    NOT?: despesaScalarWhereInput | despesaScalarWhereInput[]
    id?: BigIntFilter<"despesa"> | bigint | number
    idContratoLocacao?: BigIntFilter<"despesa"> | bigint | number
    descricao?: StringFilter<"despesa"> | string
    valor?: DecimalFilter<"despesa"> | Decimal | DecimalJsLike | number | string
    tipo?: Enumtipo_despesa_enumFilter<"despesa"> | $Enums.tipo_despesa_enum
    dataVencimento?: DateTimeFilter<"despesa"> | Date | string
    dataPagamento?: DateTimeNullableFilter<"despesa"> | Date | string | null
    status?: Enumstatus_despesa_enumFilter<"despesa"> | $Enums.status_despesa_enum
    comprovantePagamento?: BytesNullableFilter<"despesa"> | Bytes | null
  }

  export type reajustecontratoUpsertWithWhereUniqueWithoutContratolocacaoInput = {
    where: reajustecontratoWhereUniqueInput
    update: XOR<reajustecontratoUpdateWithoutContratolocacaoInput, reajustecontratoUncheckedUpdateWithoutContratolocacaoInput>
    create: XOR<reajustecontratoCreateWithoutContratolocacaoInput, reajustecontratoUncheckedCreateWithoutContratolocacaoInput>
  }

  export type reajustecontratoUpdateWithWhereUniqueWithoutContratolocacaoInput = {
    where: reajustecontratoWhereUniqueInput
    data: XOR<reajustecontratoUpdateWithoutContratolocacaoInput, reajustecontratoUncheckedUpdateWithoutContratolocacaoInput>
  }

  export type reajustecontratoUpdateManyWithWhereWithoutContratolocacaoInput = {
    where: reajustecontratoScalarWhereInput
    data: XOR<reajustecontratoUpdateManyMutationInput, reajustecontratoUncheckedUpdateManyWithoutContratolocacaoInput>
  }

  export type reajustecontratoScalarWhereInput = {
    AND?: reajustecontratoScalarWhereInput | reajustecontratoScalarWhereInput[]
    OR?: reajustecontratoScalarWhereInput[]
    NOT?: reajustecontratoScalarWhereInput | reajustecontratoScalarWhereInput[]
    id?: BigIntFilter<"reajustecontrato"> | bigint | number
    idContrato?: BigIntFilter<"reajustecontrato"> | bigint | number
    dataReajuste?: DateTimeFilter<"reajustecontrato"> | Date | string
    indice?: Enumindice_reajuste_enumFilter<"reajustecontrato"> | $Enums.indice_reajuste_enum
    percentual?: DecimalFilter<"reajustecontrato"> | Decimal | DecimalJsLike | number | string
    valorAnterior?: DecimalFilter<"reajustecontrato"> | Decimal | DecimalJsLike | number | string
    valorNovo?: DecimalFilter<"reajustecontrato"> | Decimal | DecimalJsLike | number | string
    observacao?: StringNullableFilter<"reajustecontrato"> | string | null
    criadoEm?: DateTimeFilter<"reajustecontrato"> | Date | string
  }

  export type memoriacalculoUpsertWithWhereUniqueWithoutContratolocacaoInput = {
    where: memoriacalculoWhereUniqueInput
    update: XOR<memoriacalculoUpdateWithoutContratolocacaoInput, memoriacalculoUncheckedUpdateWithoutContratolocacaoInput>
    create: XOR<memoriacalculoCreateWithoutContratolocacaoInput, memoriacalculoUncheckedCreateWithoutContratolocacaoInput>
  }

  export type memoriacalculoUpdateWithWhereUniqueWithoutContratolocacaoInput = {
    where: memoriacalculoWhereUniqueInput
    data: XOR<memoriacalculoUpdateWithoutContratolocacaoInput, memoriacalculoUncheckedUpdateWithoutContratolocacaoInput>
  }

  export type memoriacalculoUpdateManyWithWhereWithoutContratolocacaoInput = {
    where: memoriacalculoScalarWhereInput
    data: XOR<memoriacalculoUpdateManyMutationInput, memoriacalculoUncheckedUpdateManyWithoutContratolocacaoInput>
  }

  export type contratolocacaoCreateWithoutReajustecontratoInput = {
    id?: bigint | number
    idLocador: bigint | number
    idLocatario: bigint | number
    dataInicio: Date | string
    dataFim?: Date | string | null
    dataReajuste?: Date | string | null
    valorAluguel: Decimal | DecimalJsLike | number | string
    status?: $Enums.status_contrato_enum
    contratoDigitalizado?: Bytes | null
    comissao: Decimal | DecimalJsLike | number | string
    imovel: imovelCreateNestedOneWithoutContratolocacaoInput
    despesa?: despesaCreateNestedManyWithoutContratolocacaoInput
    memoriacalculo?: memoriacalculoCreateNestedManyWithoutContratolocacaoInput
  }

  export type contratolocacaoUncheckedCreateWithoutReajustecontratoInput = {
    id?: bigint | number
    idImovel: number
    idLocador: bigint | number
    idLocatario: bigint | number
    dataInicio: Date | string
    dataFim?: Date | string | null
    dataReajuste?: Date | string | null
    valorAluguel: Decimal | DecimalJsLike | number | string
    status?: $Enums.status_contrato_enum
    contratoDigitalizado?: Bytes | null
    comissao: Decimal | DecimalJsLike | number | string
    despesa?: despesaUncheckedCreateNestedManyWithoutContratolocacaoInput
    memoriacalculo?: memoriacalculoUncheckedCreateNestedManyWithoutContratolocacaoInput
  }

  export type contratolocacaoCreateOrConnectWithoutReajustecontratoInput = {
    where: contratolocacaoWhereUniqueInput
    create: XOR<contratolocacaoCreateWithoutReajustecontratoInput, contratolocacaoUncheckedCreateWithoutReajustecontratoInput>
  }

  export type contratolocacaoUpsertWithoutReajustecontratoInput = {
    update: XOR<contratolocacaoUpdateWithoutReajustecontratoInput, contratolocacaoUncheckedUpdateWithoutReajustecontratoInput>
    create: XOR<contratolocacaoCreateWithoutReajustecontratoInput, contratolocacaoUncheckedCreateWithoutReajustecontratoInput>
    where?: contratolocacaoWhereInput
  }

  export type contratolocacaoUpdateToOneWithWhereWithoutReajustecontratoInput = {
    where?: contratolocacaoWhereInput
    data: XOR<contratolocacaoUpdateWithoutReajustecontratoInput, contratolocacaoUncheckedUpdateWithoutReajustecontratoInput>
  }

  export type contratolocacaoUpdateWithoutReajustecontratoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idLocador?: BigIntFieldUpdateOperationsInput | bigint | number
    idLocatario?: BigIntFieldUpdateOperationsInput | bigint | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataReajuste?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorAluguel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumstatus_contrato_enumFieldUpdateOperationsInput | $Enums.status_contrato_enum
    contratoDigitalizado?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    comissao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imovel?: imovelUpdateOneRequiredWithoutContratolocacaoNestedInput
    despesa?: despesaUpdateManyWithoutContratolocacaoNestedInput
    memoriacalculo?: memoriacalculoUpdateManyWithoutContratolocacaoNestedInput
  }

  export type contratolocacaoUncheckedUpdateWithoutReajustecontratoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idImovel?: IntFieldUpdateOperationsInput | number
    idLocador?: BigIntFieldUpdateOperationsInput | bigint | number
    idLocatario?: BigIntFieldUpdateOperationsInput | bigint | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataReajuste?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorAluguel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumstatus_contrato_enumFieldUpdateOperationsInput | $Enums.status_contrato_enum
    contratoDigitalizado?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    comissao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    despesa?: despesaUncheckedUpdateManyWithoutContratolocacaoNestedInput
    memoriacalculo?: memoriacalculoUncheckedUpdateManyWithoutContratolocacaoNestedInput
  }

  export type contratolocacaoCreateWithoutMemoriacalculoInput = {
    id?: bigint | number
    idLocador: bigint | number
    idLocatario: bigint | number
    dataInicio: Date | string
    dataFim?: Date | string | null
    dataReajuste?: Date | string | null
    valorAluguel: Decimal | DecimalJsLike | number | string
    status?: $Enums.status_contrato_enum
    contratoDigitalizado?: Bytes | null
    comissao: Decimal | DecimalJsLike | number | string
    imovel: imovelCreateNestedOneWithoutContratolocacaoInput
    despesa?: despesaCreateNestedManyWithoutContratolocacaoInput
    reajustecontrato?: reajustecontratoCreateNestedManyWithoutContratolocacaoInput
  }

  export type contratolocacaoUncheckedCreateWithoutMemoriacalculoInput = {
    id?: bigint | number
    idImovel: number
    idLocador: bigint | number
    idLocatario: bigint | number
    dataInicio: Date | string
    dataFim?: Date | string | null
    dataReajuste?: Date | string | null
    valorAluguel: Decimal | DecimalJsLike | number | string
    status?: $Enums.status_contrato_enum
    contratoDigitalizado?: Bytes | null
    comissao: Decimal | DecimalJsLike | number | string
    despesa?: despesaUncheckedCreateNestedManyWithoutContratolocacaoInput
    reajustecontrato?: reajustecontratoUncheckedCreateNestedManyWithoutContratolocacaoInput
  }

  export type contratolocacaoCreateOrConnectWithoutMemoriacalculoInput = {
    where: contratolocacaoWhereUniqueInput
    create: XOR<contratolocacaoCreateWithoutMemoriacalculoInput, contratolocacaoUncheckedCreateWithoutMemoriacalculoInput>
  }

  export type imovelCreateWithoutMemoriacalculoInput = {
    inscricaoIPTU?: string | null
    inscricaoBombeiro?: string | null
    metragem?: string | null
    dataCadastro?: Date | string
    classificacao: $Enums.classificacao_enum
    tipologia: $Enums.tipologia_enum
    status: $Enums.status_imovel_enum
    endereco: enderecoCreateNestedOneWithoutImovelInput
    contratolocacao?: contratolocacaoCreateNestedManyWithoutImovelInput
    propriedadeimovel?: propriedadeimovelCreateNestedManyWithoutImovelInput
  }

  export type imovelUncheckedCreateWithoutMemoriacalculoInput = {
    id?: number
    idEndereco: number
    inscricaoIPTU?: string | null
    inscricaoBombeiro?: string | null
    metragem?: string | null
    dataCadastro?: Date | string
    classificacao: $Enums.classificacao_enum
    tipologia: $Enums.tipologia_enum
    status: $Enums.status_imovel_enum
    contratolocacao?: contratolocacaoUncheckedCreateNestedManyWithoutImovelInput
    propriedadeimovel?: propriedadeimovelUncheckedCreateNestedManyWithoutImovelInput
  }

  export type imovelCreateOrConnectWithoutMemoriacalculoInput = {
    where: imovelWhereUniqueInput
    create: XOR<imovelCreateWithoutMemoriacalculoInput, imovelUncheckedCreateWithoutMemoriacalculoInput>
  }

  export type memoriacalculoitemCreateWithoutMemoriacalculoInput = {
    idLocador: bigint | number
    nomeLocador: string
    documentoLocador?: string | null
    percentualParticipacao: Decimal | DecimalJsLike | number | string
    valorAluguel: Decimal | DecimalJsLike | number | string
    valorReembolsos?: Decimal | DecimalJsLike | number | string
    valorDescontos?: Decimal | DecimalJsLike | number | string
    baseCalculoIrrf: Decimal | DecimalJsLike | number | string
    valorIrrf: Decimal | DecimalJsLike | number | string
    valorAPagar: Decimal | DecimalJsLike | number | string
    detalhesExtras?: NullableJsonNullValueInput | InputJsonValue
  }

  export type memoriacalculoitemUncheckedCreateWithoutMemoriacalculoInput = {
    id?: number
    idLocador: bigint | number
    nomeLocador: string
    documentoLocador?: string | null
    percentualParticipacao: Decimal | DecimalJsLike | number | string
    valorAluguel: Decimal | DecimalJsLike | number | string
    valorReembolsos?: Decimal | DecimalJsLike | number | string
    valorDescontos?: Decimal | DecimalJsLike | number | string
    baseCalculoIrrf: Decimal | DecimalJsLike | number | string
    valorIrrf: Decimal | DecimalJsLike | number | string
    valorAPagar: Decimal | DecimalJsLike | number | string
    detalhesExtras?: NullableJsonNullValueInput | InputJsonValue
  }

  export type memoriacalculoitemCreateOrConnectWithoutMemoriacalculoInput = {
    where: memoriacalculoitemWhereUniqueInput
    create: XOR<memoriacalculoitemCreateWithoutMemoriacalculoInput, memoriacalculoitemUncheckedCreateWithoutMemoriacalculoInput>
  }

  export type memoriacalculoitemCreateManyMemoriacalculoInputEnvelope = {
    data: memoriacalculoitemCreateManyMemoriacalculoInput | memoriacalculoitemCreateManyMemoriacalculoInput[]
    skipDuplicates?: boolean
  }

  export type contratolocacaoUpsertWithoutMemoriacalculoInput = {
    update: XOR<contratolocacaoUpdateWithoutMemoriacalculoInput, contratolocacaoUncheckedUpdateWithoutMemoriacalculoInput>
    create: XOR<contratolocacaoCreateWithoutMemoriacalculoInput, contratolocacaoUncheckedCreateWithoutMemoriacalculoInput>
    where?: contratolocacaoWhereInput
  }

  export type contratolocacaoUpdateToOneWithWhereWithoutMemoriacalculoInput = {
    where?: contratolocacaoWhereInput
    data: XOR<contratolocacaoUpdateWithoutMemoriacalculoInput, contratolocacaoUncheckedUpdateWithoutMemoriacalculoInput>
  }

  export type contratolocacaoUpdateWithoutMemoriacalculoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idLocador?: BigIntFieldUpdateOperationsInput | bigint | number
    idLocatario?: BigIntFieldUpdateOperationsInput | bigint | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataReajuste?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorAluguel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumstatus_contrato_enumFieldUpdateOperationsInput | $Enums.status_contrato_enum
    contratoDigitalizado?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    comissao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imovel?: imovelUpdateOneRequiredWithoutContratolocacaoNestedInput
    despesa?: despesaUpdateManyWithoutContratolocacaoNestedInput
    reajustecontrato?: reajustecontratoUpdateManyWithoutContratolocacaoNestedInput
  }

  export type contratolocacaoUncheckedUpdateWithoutMemoriacalculoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idImovel?: IntFieldUpdateOperationsInput | number
    idLocador?: BigIntFieldUpdateOperationsInput | bigint | number
    idLocatario?: BigIntFieldUpdateOperationsInput | bigint | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataReajuste?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorAluguel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumstatus_contrato_enumFieldUpdateOperationsInput | $Enums.status_contrato_enum
    contratoDigitalizado?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    comissao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    despesa?: despesaUncheckedUpdateManyWithoutContratolocacaoNestedInput
    reajustecontrato?: reajustecontratoUncheckedUpdateManyWithoutContratolocacaoNestedInput
  }

  export type imovelUpsertWithoutMemoriacalculoInput = {
    update: XOR<imovelUpdateWithoutMemoriacalculoInput, imovelUncheckedUpdateWithoutMemoriacalculoInput>
    create: XOR<imovelCreateWithoutMemoriacalculoInput, imovelUncheckedCreateWithoutMemoriacalculoInput>
    where?: imovelWhereInput
  }

  export type imovelUpdateToOneWithWhereWithoutMemoriacalculoInput = {
    where?: imovelWhereInput
    data: XOR<imovelUpdateWithoutMemoriacalculoInput, imovelUncheckedUpdateWithoutMemoriacalculoInput>
  }

  export type imovelUpdateWithoutMemoriacalculoInput = {
    inscricaoIPTU?: NullableStringFieldUpdateOperationsInput | string | null
    inscricaoBombeiro?: NullableStringFieldUpdateOperationsInput | string | null
    metragem?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    classificacao?: Enumclassificacao_enumFieldUpdateOperationsInput | $Enums.classificacao_enum
    tipologia?: Enumtipologia_enumFieldUpdateOperationsInput | $Enums.tipologia_enum
    status?: Enumstatus_imovel_enumFieldUpdateOperationsInput | $Enums.status_imovel_enum
    endereco?: enderecoUpdateOneRequiredWithoutImovelNestedInput
    contratolocacao?: contratolocacaoUpdateManyWithoutImovelNestedInput
    propriedadeimovel?: propriedadeimovelUpdateManyWithoutImovelNestedInput
  }

  export type imovelUncheckedUpdateWithoutMemoriacalculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idEndereco?: IntFieldUpdateOperationsInput | number
    inscricaoIPTU?: NullableStringFieldUpdateOperationsInput | string | null
    inscricaoBombeiro?: NullableStringFieldUpdateOperationsInput | string | null
    metragem?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    classificacao?: Enumclassificacao_enumFieldUpdateOperationsInput | $Enums.classificacao_enum
    tipologia?: Enumtipologia_enumFieldUpdateOperationsInput | $Enums.tipologia_enum
    status?: Enumstatus_imovel_enumFieldUpdateOperationsInput | $Enums.status_imovel_enum
    contratolocacao?: contratolocacaoUncheckedUpdateManyWithoutImovelNestedInput
    propriedadeimovel?: propriedadeimovelUncheckedUpdateManyWithoutImovelNestedInput
  }

  export type memoriacalculoitemUpsertWithWhereUniqueWithoutMemoriacalculoInput = {
    where: memoriacalculoitemWhereUniqueInput
    update: XOR<memoriacalculoitemUpdateWithoutMemoriacalculoInput, memoriacalculoitemUncheckedUpdateWithoutMemoriacalculoInput>
    create: XOR<memoriacalculoitemCreateWithoutMemoriacalculoInput, memoriacalculoitemUncheckedCreateWithoutMemoriacalculoInput>
  }

  export type memoriacalculoitemUpdateWithWhereUniqueWithoutMemoriacalculoInput = {
    where: memoriacalculoitemWhereUniqueInput
    data: XOR<memoriacalculoitemUpdateWithoutMemoriacalculoInput, memoriacalculoitemUncheckedUpdateWithoutMemoriacalculoInput>
  }

  export type memoriacalculoitemUpdateManyWithWhereWithoutMemoriacalculoInput = {
    where: memoriacalculoitemScalarWhereInput
    data: XOR<memoriacalculoitemUpdateManyMutationInput, memoriacalculoitemUncheckedUpdateManyWithoutMemoriacalculoInput>
  }

  export type memoriacalculoitemScalarWhereInput = {
    AND?: memoriacalculoitemScalarWhereInput | memoriacalculoitemScalarWhereInput[]
    OR?: memoriacalculoitemScalarWhereInput[]
    NOT?: memoriacalculoitemScalarWhereInput | memoriacalculoitemScalarWhereInput[]
    id?: IntFilter<"memoriacalculoitem"> | number
    idMemoriaCalculo?: IntFilter<"memoriacalculoitem"> | number
    idLocador?: BigIntFilter<"memoriacalculoitem"> | bigint | number
    nomeLocador?: StringFilter<"memoriacalculoitem"> | string
    documentoLocador?: StringNullableFilter<"memoriacalculoitem"> | string | null
    percentualParticipacao?: DecimalFilter<"memoriacalculoitem"> | Decimal | DecimalJsLike | number | string
    valorAluguel?: DecimalFilter<"memoriacalculoitem"> | Decimal | DecimalJsLike | number | string
    valorReembolsos?: DecimalFilter<"memoriacalculoitem"> | Decimal | DecimalJsLike | number | string
    valorDescontos?: DecimalFilter<"memoriacalculoitem"> | Decimal | DecimalJsLike | number | string
    baseCalculoIrrf?: DecimalFilter<"memoriacalculoitem"> | Decimal | DecimalJsLike | number | string
    valorIrrf?: DecimalFilter<"memoriacalculoitem"> | Decimal | DecimalJsLike | number | string
    valorAPagar?: DecimalFilter<"memoriacalculoitem"> | Decimal | DecimalJsLike | number | string
    detalhesExtras?: JsonNullableFilter<"memoriacalculoitem">
  }

  export type memoriacalculoCreateWithoutItensInput = {
    competencia: Date | string
    valorAluguelBase: Decimal | DecimalJsLike | number | string
    idContaBancaria?: number | null
    contaDescricao?: string | null
    contaBanco?: string | null
    contaAgencia?: string | null
    contaNumero?: string | null
    contaTipoChavePix?: string | null
    contaChavePix?: string | null
    contaTitular?: string | null
    contaDocumentoTitular?: string | null
    reajusteIndice?: $Enums.indice_reajuste_enum | null
    reajustePercentual?: Decimal | DecimalJsLike | number | string | null
    reajusteValorAnterior?: Decimal | DecimalJsLike | number | string | null
    totalAPagar: Decimal | DecimalJsLike | number | string
    geradoPorUsuarioId: number
    criadoEm?: Date | string
    contratolocacao: contratolocacaoCreateNestedOneWithoutMemoriacalculoInput
    imovel: imovelCreateNestedOneWithoutMemoriacalculoInput
  }

  export type memoriacalculoUncheckedCreateWithoutItensInput = {
    id?: number
    idContrato: bigint | number
    idImovel: number
    competencia: Date | string
    valorAluguelBase: Decimal | DecimalJsLike | number | string
    idContaBancaria?: number | null
    contaDescricao?: string | null
    contaBanco?: string | null
    contaAgencia?: string | null
    contaNumero?: string | null
    contaTipoChavePix?: string | null
    contaChavePix?: string | null
    contaTitular?: string | null
    contaDocumentoTitular?: string | null
    reajusteIndice?: $Enums.indice_reajuste_enum | null
    reajustePercentual?: Decimal | DecimalJsLike | number | string | null
    reajusteValorAnterior?: Decimal | DecimalJsLike | number | string | null
    totalAPagar: Decimal | DecimalJsLike | number | string
    geradoPorUsuarioId: number
    criadoEm?: Date | string
  }

  export type memoriacalculoCreateOrConnectWithoutItensInput = {
    where: memoriacalculoWhereUniqueInput
    create: XOR<memoriacalculoCreateWithoutItensInput, memoriacalculoUncheckedCreateWithoutItensInput>
  }

  export type memoriacalculoUpsertWithoutItensInput = {
    update: XOR<memoriacalculoUpdateWithoutItensInput, memoriacalculoUncheckedUpdateWithoutItensInput>
    create: XOR<memoriacalculoCreateWithoutItensInput, memoriacalculoUncheckedCreateWithoutItensInput>
    where?: memoriacalculoWhereInput
  }

  export type memoriacalculoUpdateToOneWithWhereWithoutItensInput = {
    where?: memoriacalculoWhereInput
    data: XOR<memoriacalculoUpdateWithoutItensInput, memoriacalculoUncheckedUpdateWithoutItensInput>
  }

  export type memoriacalculoUpdateWithoutItensInput = {
    competencia?: DateTimeFieldUpdateOperationsInput | Date | string
    valorAluguelBase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    idContaBancaria?: NullableIntFieldUpdateOperationsInput | number | null
    contaDescricao?: NullableStringFieldUpdateOperationsInput | string | null
    contaBanco?: NullableStringFieldUpdateOperationsInput | string | null
    contaAgencia?: NullableStringFieldUpdateOperationsInput | string | null
    contaNumero?: NullableStringFieldUpdateOperationsInput | string | null
    contaTipoChavePix?: NullableStringFieldUpdateOperationsInput | string | null
    contaChavePix?: NullableStringFieldUpdateOperationsInput | string | null
    contaTitular?: NullableStringFieldUpdateOperationsInput | string | null
    contaDocumentoTitular?: NullableStringFieldUpdateOperationsInput | string | null
    reajusteIndice?: NullableEnumindice_reajuste_enumFieldUpdateOperationsInput | $Enums.indice_reajuste_enum | null
    reajustePercentual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    reajusteValorAnterior?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalAPagar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    geradoPorUsuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    contratolocacao?: contratolocacaoUpdateOneRequiredWithoutMemoriacalculoNestedInput
    imovel?: imovelUpdateOneRequiredWithoutMemoriacalculoNestedInput
  }

  export type memoriacalculoUncheckedUpdateWithoutItensInput = {
    id?: IntFieldUpdateOperationsInput | number
    idContrato?: BigIntFieldUpdateOperationsInput | bigint | number
    idImovel?: IntFieldUpdateOperationsInput | number
    competencia?: DateTimeFieldUpdateOperationsInput | Date | string
    valorAluguelBase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    idContaBancaria?: NullableIntFieldUpdateOperationsInput | number | null
    contaDescricao?: NullableStringFieldUpdateOperationsInput | string | null
    contaBanco?: NullableStringFieldUpdateOperationsInput | string | null
    contaAgencia?: NullableStringFieldUpdateOperationsInput | string | null
    contaNumero?: NullableStringFieldUpdateOperationsInput | string | null
    contaTipoChavePix?: NullableStringFieldUpdateOperationsInput | string | null
    contaChavePix?: NullableStringFieldUpdateOperationsInput | string | null
    contaTitular?: NullableStringFieldUpdateOperationsInput | string | null
    contaDocumentoTitular?: NullableStringFieldUpdateOperationsInput | string | null
    reajusteIndice?: NullableEnumindice_reajuste_enumFieldUpdateOperationsInput | $Enums.indice_reajuste_enum | null
    reajustePercentual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    reajusteValorAnterior?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalAPagar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    geradoPorUsuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contratolocacaoCreateWithoutDespesaInput = {
    id?: bigint | number
    idLocador: bigint | number
    idLocatario: bigint | number
    dataInicio: Date | string
    dataFim?: Date | string | null
    dataReajuste?: Date | string | null
    valorAluguel: Decimal | DecimalJsLike | number | string
    status?: $Enums.status_contrato_enum
    contratoDigitalizado?: Bytes | null
    comissao: Decimal | DecimalJsLike | number | string
    imovel: imovelCreateNestedOneWithoutContratolocacaoInput
    reajustecontrato?: reajustecontratoCreateNestedManyWithoutContratolocacaoInput
    memoriacalculo?: memoriacalculoCreateNestedManyWithoutContratolocacaoInput
  }

  export type contratolocacaoUncheckedCreateWithoutDespesaInput = {
    id?: bigint | number
    idImovel: number
    idLocador: bigint | number
    idLocatario: bigint | number
    dataInicio: Date | string
    dataFim?: Date | string | null
    dataReajuste?: Date | string | null
    valorAluguel: Decimal | DecimalJsLike | number | string
    status?: $Enums.status_contrato_enum
    contratoDigitalizado?: Bytes | null
    comissao: Decimal | DecimalJsLike | number | string
    reajustecontrato?: reajustecontratoUncheckedCreateNestedManyWithoutContratolocacaoInput
    memoriacalculo?: memoriacalculoUncheckedCreateNestedManyWithoutContratolocacaoInput
  }

  export type contratolocacaoCreateOrConnectWithoutDespesaInput = {
    where: contratolocacaoWhereUniqueInput
    create: XOR<contratolocacaoCreateWithoutDespesaInput, contratolocacaoUncheckedCreateWithoutDespesaInput>
  }

  export type contratolocacaoUpsertWithoutDespesaInput = {
    update: XOR<contratolocacaoUpdateWithoutDespesaInput, contratolocacaoUncheckedUpdateWithoutDespesaInput>
    create: XOR<contratolocacaoCreateWithoutDespesaInput, contratolocacaoUncheckedCreateWithoutDespesaInput>
    where?: contratolocacaoWhereInput
  }

  export type contratolocacaoUpdateToOneWithWhereWithoutDespesaInput = {
    where?: contratolocacaoWhereInput
    data: XOR<contratolocacaoUpdateWithoutDespesaInput, contratolocacaoUncheckedUpdateWithoutDespesaInput>
  }

  export type contratolocacaoUpdateWithoutDespesaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idLocador?: BigIntFieldUpdateOperationsInput | bigint | number
    idLocatario?: BigIntFieldUpdateOperationsInput | bigint | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataReajuste?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorAluguel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumstatus_contrato_enumFieldUpdateOperationsInput | $Enums.status_contrato_enum
    contratoDigitalizado?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    comissao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imovel?: imovelUpdateOneRequiredWithoutContratolocacaoNestedInput
    reajustecontrato?: reajustecontratoUpdateManyWithoutContratolocacaoNestedInput
    memoriacalculo?: memoriacalculoUpdateManyWithoutContratolocacaoNestedInput
  }

  export type contratolocacaoUncheckedUpdateWithoutDespesaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idImovel?: IntFieldUpdateOperationsInput | number
    idLocador?: BigIntFieldUpdateOperationsInput | bigint | number
    idLocatario?: BigIntFieldUpdateOperationsInput | bigint | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataReajuste?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorAluguel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumstatus_contrato_enumFieldUpdateOperationsInput | $Enums.status_contrato_enum
    contratoDigitalizado?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    comissao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reajustecontrato?: reajustecontratoUncheckedUpdateManyWithoutContratolocacaoNestedInput
    memoriacalculo?: memoriacalculoUncheckedUpdateManyWithoutContratolocacaoNestedInput
  }

  export type faixairrfCreateWithoutTabelairrfInput = {
    ordem: number
    valorDe: Decimal | DecimalJsLike | number | string
    valorAte?: Decimal | DecimalJsLike | number | string | null
    aliquota: Decimal | DecimalJsLike | number | string
    parcelaADeduzir: Decimal | DecimalJsLike | number | string
  }

  export type faixairrfUncheckedCreateWithoutTabelairrfInput = {
    id?: number
    ordem: number
    valorDe: Decimal | DecimalJsLike | number | string
    valorAte?: Decimal | DecimalJsLike | number | string | null
    aliquota: Decimal | DecimalJsLike | number | string
    parcelaADeduzir: Decimal | DecimalJsLike | number | string
  }

  export type faixairrfCreateOrConnectWithoutTabelairrfInput = {
    where: faixairrfWhereUniqueInput
    create: XOR<faixairrfCreateWithoutTabelairrfInput, faixairrfUncheckedCreateWithoutTabelairrfInput>
  }

  export type faixairrfCreateManyTabelairrfInputEnvelope = {
    data: faixairrfCreateManyTabelairrfInput | faixairrfCreateManyTabelairrfInput[]
    skipDuplicates?: boolean
  }

  export type faixairrfUpsertWithWhereUniqueWithoutTabelairrfInput = {
    where: faixairrfWhereUniqueInput
    update: XOR<faixairrfUpdateWithoutTabelairrfInput, faixairrfUncheckedUpdateWithoutTabelairrfInput>
    create: XOR<faixairrfCreateWithoutTabelairrfInput, faixairrfUncheckedCreateWithoutTabelairrfInput>
  }

  export type faixairrfUpdateWithWhereUniqueWithoutTabelairrfInput = {
    where: faixairrfWhereUniqueInput
    data: XOR<faixairrfUpdateWithoutTabelairrfInput, faixairrfUncheckedUpdateWithoutTabelairrfInput>
  }

  export type faixairrfUpdateManyWithWhereWithoutTabelairrfInput = {
    where: faixairrfScalarWhereInput
    data: XOR<faixairrfUpdateManyMutationInput, faixairrfUncheckedUpdateManyWithoutTabelairrfInput>
  }

  export type faixairrfScalarWhereInput = {
    AND?: faixairrfScalarWhereInput | faixairrfScalarWhereInput[]
    OR?: faixairrfScalarWhereInput[]
    NOT?: faixairrfScalarWhereInput | faixairrfScalarWhereInput[]
    id?: IntFilter<"faixairrf"> | number
    idTabela?: IntFilter<"faixairrf"> | number
    ordem?: IntFilter<"faixairrf"> | number
    valorDe?: DecimalFilter<"faixairrf"> | Decimal | DecimalJsLike | number | string
    valorAte?: DecimalNullableFilter<"faixairrf"> | Decimal | DecimalJsLike | number | string | null
    aliquota?: DecimalFilter<"faixairrf"> | Decimal | DecimalJsLike | number | string
    parcelaADeduzir?: DecimalFilter<"faixairrf"> | Decimal | DecimalJsLike | number | string
  }

  export type tabelairrfCreateWithoutFaixairrfInput = {
    vigenciaInicio: Date | string
    descricao?: string | null
    deducaoDependente: Decimal | DecimalJsLike | number | string
    redutorLimiteIsencao?: Decimal | DecimalJsLike | number | string | null
    redutorLimiteSuperior?: Decimal | DecimalJsLike | number | string | null
    redutorConstante?: Decimal | DecimalJsLike | number | string | null
    redutorCoeficiente?: Decimal | DecimalJsLike | number | string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type tabelairrfUncheckedCreateWithoutFaixairrfInput = {
    id?: number
    vigenciaInicio: Date | string
    descricao?: string | null
    deducaoDependente: Decimal | DecimalJsLike | number | string
    redutorLimiteIsencao?: Decimal | DecimalJsLike | number | string | null
    redutorLimiteSuperior?: Decimal | DecimalJsLike | number | string | null
    redutorConstante?: Decimal | DecimalJsLike | number | string | null
    redutorCoeficiente?: Decimal | DecimalJsLike | number | string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type tabelairrfCreateOrConnectWithoutFaixairrfInput = {
    where: tabelairrfWhereUniqueInput
    create: XOR<tabelairrfCreateWithoutFaixairrfInput, tabelairrfUncheckedCreateWithoutFaixairrfInput>
  }

  export type tabelairrfUpsertWithoutFaixairrfInput = {
    update: XOR<tabelairrfUpdateWithoutFaixairrfInput, tabelairrfUncheckedUpdateWithoutFaixairrfInput>
    create: XOR<tabelairrfCreateWithoutFaixairrfInput, tabelairrfUncheckedCreateWithoutFaixairrfInput>
    where?: tabelairrfWhereInput
  }

  export type tabelairrfUpdateToOneWithWhereWithoutFaixairrfInput = {
    where?: tabelairrfWhereInput
    data: XOR<tabelairrfUpdateWithoutFaixairrfInput, tabelairrfUncheckedUpdateWithoutFaixairrfInput>
  }

  export type tabelairrfUpdateWithoutFaixairrfInput = {
    vigenciaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    deducaoDependente?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    redutorLimiteIsencao?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redutorLimiteSuperior?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redutorConstante?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redutorCoeficiente?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tabelairrfUncheckedUpdateWithoutFaixairrfInput = {
    id?: IntFieldUpdateOperationsInput | number
    vigenciaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    deducaoDependente?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    redutorLimiteIsencao?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redutorLimiteSuperior?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redutorConstante?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    redutorCoeficiente?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type imovelCreateManyEnderecoInput = {
    id?: number
    inscricaoIPTU?: string | null
    inscricaoBombeiro?: string | null
    metragem?: string | null
    dataCadastro?: Date | string
    classificacao: $Enums.classificacao_enum
    tipologia: $Enums.tipologia_enum
    status: $Enums.status_imovel_enum
  }

  export type imovelUpdateWithoutEnderecoInput = {
    inscricaoIPTU?: NullableStringFieldUpdateOperationsInput | string | null
    inscricaoBombeiro?: NullableStringFieldUpdateOperationsInput | string | null
    metragem?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    classificacao?: Enumclassificacao_enumFieldUpdateOperationsInput | $Enums.classificacao_enum
    tipologia?: Enumtipologia_enumFieldUpdateOperationsInput | $Enums.tipologia_enum
    status?: Enumstatus_imovel_enumFieldUpdateOperationsInput | $Enums.status_imovel_enum
    contratolocacao?: contratolocacaoUpdateManyWithoutImovelNestedInput
    propriedadeimovel?: propriedadeimovelUpdateManyWithoutImovelNestedInput
    memoriacalculo?: memoriacalculoUpdateManyWithoutImovelNestedInput
  }

  export type imovelUncheckedUpdateWithoutEnderecoInput = {
    id?: IntFieldUpdateOperationsInput | number
    inscricaoIPTU?: NullableStringFieldUpdateOperationsInput | string | null
    inscricaoBombeiro?: NullableStringFieldUpdateOperationsInput | string | null
    metragem?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    classificacao?: Enumclassificacao_enumFieldUpdateOperationsInput | $Enums.classificacao_enum
    tipologia?: Enumtipologia_enumFieldUpdateOperationsInput | $Enums.tipologia_enum
    status?: Enumstatus_imovel_enumFieldUpdateOperationsInput | $Enums.status_imovel_enum
    contratolocacao?: contratolocacaoUncheckedUpdateManyWithoutImovelNestedInput
    propriedadeimovel?: propriedadeimovelUncheckedUpdateManyWithoutImovelNestedInput
    memoriacalculo?: memoriacalculoUncheckedUpdateManyWithoutImovelNestedInput
  }

  export type imovelUncheckedUpdateManyWithoutEnderecoInput = {
    id?: IntFieldUpdateOperationsInput | number
    inscricaoIPTU?: NullableStringFieldUpdateOperationsInput | string | null
    inscricaoBombeiro?: NullableStringFieldUpdateOperationsInput | string | null
    metragem?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    classificacao?: Enumclassificacao_enumFieldUpdateOperationsInput | $Enums.classificacao_enum
    tipologia?: Enumtipologia_enumFieldUpdateOperationsInput | $Enums.tipologia_enum
    status?: Enumstatus_imovel_enumFieldUpdateOperationsInput | $Enums.status_imovel_enum
  }

  export type contratolocacaoCreateManyImovelInput = {
    id?: bigint | number
    idLocador: bigint | number
    idLocatario: bigint | number
    dataInicio: Date | string
    dataFim?: Date | string | null
    dataReajuste?: Date | string | null
    valorAluguel: Decimal | DecimalJsLike | number | string
    status?: $Enums.status_contrato_enum
    contratoDigitalizado?: Bytes | null
    comissao: Decimal | DecimalJsLike | number | string
  }

  export type propriedadeimovelCreateManyImovelInput = {
    id?: number
    idLocador: bigint | number
    percentualParticipacao: Decimal | DecimalJsLike | number | string
  }

  export type memoriacalculoCreateManyImovelInput = {
    id?: number
    idContrato: bigint | number
    competencia: Date | string
    valorAluguelBase: Decimal | DecimalJsLike | number | string
    idContaBancaria?: number | null
    contaDescricao?: string | null
    contaBanco?: string | null
    contaAgencia?: string | null
    contaNumero?: string | null
    contaTipoChavePix?: string | null
    contaChavePix?: string | null
    contaTitular?: string | null
    contaDocumentoTitular?: string | null
    reajusteIndice?: $Enums.indice_reajuste_enum | null
    reajustePercentual?: Decimal | DecimalJsLike | number | string | null
    reajusteValorAnterior?: Decimal | DecimalJsLike | number | string | null
    totalAPagar: Decimal | DecimalJsLike | number | string
    geradoPorUsuarioId: number
    criadoEm?: Date | string
  }

  export type contratolocacaoUpdateWithoutImovelInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idLocador?: BigIntFieldUpdateOperationsInput | bigint | number
    idLocatario?: BigIntFieldUpdateOperationsInput | bigint | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataReajuste?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorAluguel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumstatus_contrato_enumFieldUpdateOperationsInput | $Enums.status_contrato_enum
    contratoDigitalizado?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    comissao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    despesa?: despesaUpdateManyWithoutContratolocacaoNestedInput
    reajustecontrato?: reajustecontratoUpdateManyWithoutContratolocacaoNestedInput
    memoriacalculo?: memoriacalculoUpdateManyWithoutContratolocacaoNestedInput
  }

  export type contratolocacaoUncheckedUpdateWithoutImovelInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idLocador?: BigIntFieldUpdateOperationsInput | bigint | number
    idLocatario?: BigIntFieldUpdateOperationsInput | bigint | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataReajuste?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorAluguel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumstatus_contrato_enumFieldUpdateOperationsInput | $Enums.status_contrato_enum
    contratoDigitalizado?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    comissao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    despesa?: despesaUncheckedUpdateManyWithoutContratolocacaoNestedInput
    reajustecontrato?: reajustecontratoUncheckedUpdateManyWithoutContratolocacaoNestedInput
    memoriacalculo?: memoriacalculoUncheckedUpdateManyWithoutContratolocacaoNestedInput
  }

  export type contratolocacaoUncheckedUpdateManyWithoutImovelInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idLocador?: BigIntFieldUpdateOperationsInput | bigint | number
    idLocatario?: BigIntFieldUpdateOperationsInput | bigint | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataReajuste?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorAluguel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumstatus_contrato_enumFieldUpdateOperationsInput | $Enums.status_contrato_enum
    contratoDigitalizado?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    comissao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type propriedadeimovelUpdateWithoutImovelInput = {
    idLocador?: BigIntFieldUpdateOperationsInput | bigint | number
    percentualParticipacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type propriedadeimovelUncheckedUpdateWithoutImovelInput = {
    id?: IntFieldUpdateOperationsInput | number
    idLocador?: BigIntFieldUpdateOperationsInput | bigint | number
    percentualParticipacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type propriedadeimovelUncheckedUpdateManyWithoutImovelInput = {
    id?: IntFieldUpdateOperationsInput | number
    idLocador?: BigIntFieldUpdateOperationsInput | bigint | number
    percentualParticipacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type memoriacalculoUpdateWithoutImovelInput = {
    competencia?: DateTimeFieldUpdateOperationsInput | Date | string
    valorAluguelBase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    idContaBancaria?: NullableIntFieldUpdateOperationsInput | number | null
    contaDescricao?: NullableStringFieldUpdateOperationsInput | string | null
    contaBanco?: NullableStringFieldUpdateOperationsInput | string | null
    contaAgencia?: NullableStringFieldUpdateOperationsInput | string | null
    contaNumero?: NullableStringFieldUpdateOperationsInput | string | null
    contaTipoChavePix?: NullableStringFieldUpdateOperationsInput | string | null
    contaChavePix?: NullableStringFieldUpdateOperationsInput | string | null
    contaTitular?: NullableStringFieldUpdateOperationsInput | string | null
    contaDocumentoTitular?: NullableStringFieldUpdateOperationsInput | string | null
    reajusteIndice?: NullableEnumindice_reajuste_enumFieldUpdateOperationsInput | $Enums.indice_reajuste_enum | null
    reajustePercentual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    reajusteValorAnterior?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalAPagar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    geradoPorUsuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    contratolocacao?: contratolocacaoUpdateOneRequiredWithoutMemoriacalculoNestedInput
    itens?: memoriacalculoitemUpdateManyWithoutMemoriacalculoNestedInput
  }

  export type memoriacalculoUncheckedUpdateWithoutImovelInput = {
    id?: IntFieldUpdateOperationsInput | number
    idContrato?: BigIntFieldUpdateOperationsInput | bigint | number
    competencia?: DateTimeFieldUpdateOperationsInput | Date | string
    valorAluguelBase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    idContaBancaria?: NullableIntFieldUpdateOperationsInput | number | null
    contaDescricao?: NullableStringFieldUpdateOperationsInput | string | null
    contaBanco?: NullableStringFieldUpdateOperationsInput | string | null
    contaAgencia?: NullableStringFieldUpdateOperationsInput | string | null
    contaNumero?: NullableStringFieldUpdateOperationsInput | string | null
    contaTipoChavePix?: NullableStringFieldUpdateOperationsInput | string | null
    contaChavePix?: NullableStringFieldUpdateOperationsInput | string | null
    contaTitular?: NullableStringFieldUpdateOperationsInput | string | null
    contaDocumentoTitular?: NullableStringFieldUpdateOperationsInput | string | null
    reajusteIndice?: NullableEnumindice_reajuste_enumFieldUpdateOperationsInput | $Enums.indice_reajuste_enum | null
    reajustePercentual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    reajusteValorAnterior?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalAPagar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    geradoPorUsuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: memoriacalculoitemUncheckedUpdateManyWithoutMemoriacalculoNestedInput
  }

  export type memoriacalculoUncheckedUpdateManyWithoutImovelInput = {
    id?: IntFieldUpdateOperationsInput | number
    idContrato?: BigIntFieldUpdateOperationsInput | bigint | number
    competencia?: DateTimeFieldUpdateOperationsInput | Date | string
    valorAluguelBase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    idContaBancaria?: NullableIntFieldUpdateOperationsInput | number | null
    contaDescricao?: NullableStringFieldUpdateOperationsInput | string | null
    contaBanco?: NullableStringFieldUpdateOperationsInput | string | null
    contaAgencia?: NullableStringFieldUpdateOperationsInput | string | null
    contaNumero?: NullableStringFieldUpdateOperationsInput | string | null
    contaTipoChavePix?: NullableStringFieldUpdateOperationsInput | string | null
    contaChavePix?: NullableStringFieldUpdateOperationsInput | string | null
    contaTitular?: NullableStringFieldUpdateOperationsInput | string | null
    contaDocumentoTitular?: NullableStringFieldUpdateOperationsInput | string | null
    reajusteIndice?: NullableEnumindice_reajuste_enumFieldUpdateOperationsInput | $Enums.indice_reajuste_enum | null
    reajustePercentual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    reajusteValorAnterior?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalAPagar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    geradoPorUsuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type despesaCreateManyContratolocacaoInput = {
    id?: bigint | number
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    tipo: $Enums.tipo_despesa_enum
    dataVencimento: Date | string
    dataPagamento?: Date | string | null
    status?: $Enums.status_despesa_enum
    comprovantePagamento?: Bytes | null
  }

  export type reajustecontratoCreateManyContratolocacaoInput = {
    id?: bigint | number
    dataReajuste: Date | string
    indice: $Enums.indice_reajuste_enum
    percentual: Decimal | DecimalJsLike | number | string
    valorAnterior: Decimal | DecimalJsLike | number | string
    valorNovo: Decimal | DecimalJsLike | number | string
    observacao?: string | null
    criadoEm?: Date | string
  }

  export type memoriacalculoCreateManyContratolocacaoInput = {
    id?: number
    idImovel: number
    competencia: Date | string
    valorAluguelBase: Decimal | DecimalJsLike | number | string
    idContaBancaria?: number | null
    contaDescricao?: string | null
    contaBanco?: string | null
    contaAgencia?: string | null
    contaNumero?: string | null
    contaTipoChavePix?: string | null
    contaChavePix?: string | null
    contaTitular?: string | null
    contaDocumentoTitular?: string | null
    reajusteIndice?: $Enums.indice_reajuste_enum | null
    reajustePercentual?: Decimal | DecimalJsLike | number | string | null
    reajusteValorAnterior?: Decimal | DecimalJsLike | number | string | null
    totalAPagar: Decimal | DecimalJsLike | number | string
    geradoPorUsuarioId: number
    criadoEm?: Date | string
  }

  export type despesaUpdateWithoutContratolocacaoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: Enumtipo_despesa_enumFieldUpdateOperationsInput | $Enums.tipo_despesa_enum
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: Enumstatus_despesa_enumFieldUpdateOperationsInput | $Enums.status_despesa_enum
    comprovantePagamento?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type despesaUncheckedUpdateWithoutContratolocacaoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: Enumtipo_despesa_enumFieldUpdateOperationsInput | $Enums.tipo_despesa_enum
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: Enumstatus_despesa_enumFieldUpdateOperationsInput | $Enums.status_despesa_enum
    comprovantePagamento?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type despesaUncheckedUpdateManyWithoutContratolocacaoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: Enumtipo_despesa_enumFieldUpdateOperationsInput | $Enums.tipo_despesa_enum
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: Enumstatus_despesa_enumFieldUpdateOperationsInput | $Enums.status_despesa_enum
    comprovantePagamento?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type reajustecontratoUpdateWithoutContratolocacaoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    dataReajuste?: DateTimeFieldUpdateOperationsInput | Date | string
    indice?: Enumindice_reajuste_enumFieldUpdateOperationsInput | $Enums.indice_reajuste_enum
    percentual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAnterior?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorNovo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reajustecontratoUncheckedUpdateWithoutContratolocacaoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    dataReajuste?: DateTimeFieldUpdateOperationsInput | Date | string
    indice?: Enumindice_reajuste_enumFieldUpdateOperationsInput | $Enums.indice_reajuste_enum
    percentual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAnterior?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorNovo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reajustecontratoUncheckedUpdateManyWithoutContratolocacaoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    dataReajuste?: DateTimeFieldUpdateOperationsInput | Date | string
    indice?: Enumindice_reajuste_enumFieldUpdateOperationsInput | $Enums.indice_reajuste_enum
    percentual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAnterior?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorNovo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type memoriacalculoUpdateWithoutContratolocacaoInput = {
    competencia?: DateTimeFieldUpdateOperationsInput | Date | string
    valorAluguelBase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    idContaBancaria?: NullableIntFieldUpdateOperationsInput | number | null
    contaDescricao?: NullableStringFieldUpdateOperationsInput | string | null
    contaBanco?: NullableStringFieldUpdateOperationsInput | string | null
    contaAgencia?: NullableStringFieldUpdateOperationsInput | string | null
    contaNumero?: NullableStringFieldUpdateOperationsInput | string | null
    contaTipoChavePix?: NullableStringFieldUpdateOperationsInput | string | null
    contaChavePix?: NullableStringFieldUpdateOperationsInput | string | null
    contaTitular?: NullableStringFieldUpdateOperationsInput | string | null
    contaDocumentoTitular?: NullableStringFieldUpdateOperationsInput | string | null
    reajusteIndice?: NullableEnumindice_reajuste_enumFieldUpdateOperationsInput | $Enums.indice_reajuste_enum | null
    reajustePercentual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    reajusteValorAnterior?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalAPagar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    geradoPorUsuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    imovel?: imovelUpdateOneRequiredWithoutMemoriacalculoNestedInput
    itens?: memoriacalculoitemUpdateManyWithoutMemoriacalculoNestedInput
  }

  export type memoriacalculoUncheckedUpdateWithoutContratolocacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idImovel?: IntFieldUpdateOperationsInput | number
    competencia?: DateTimeFieldUpdateOperationsInput | Date | string
    valorAluguelBase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    idContaBancaria?: NullableIntFieldUpdateOperationsInput | number | null
    contaDescricao?: NullableStringFieldUpdateOperationsInput | string | null
    contaBanco?: NullableStringFieldUpdateOperationsInput | string | null
    contaAgencia?: NullableStringFieldUpdateOperationsInput | string | null
    contaNumero?: NullableStringFieldUpdateOperationsInput | string | null
    contaTipoChavePix?: NullableStringFieldUpdateOperationsInput | string | null
    contaChavePix?: NullableStringFieldUpdateOperationsInput | string | null
    contaTitular?: NullableStringFieldUpdateOperationsInput | string | null
    contaDocumentoTitular?: NullableStringFieldUpdateOperationsInput | string | null
    reajusteIndice?: NullableEnumindice_reajuste_enumFieldUpdateOperationsInput | $Enums.indice_reajuste_enum | null
    reajustePercentual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    reajusteValorAnterior?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalAPagar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    geradoPorUsuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: memoriacalculoitemUncheckedUpdateManyWithoutMemoriacalculoNestedInput
  }

  export type memoriacalculoUncheckedUpdateManyWithoutContratolocacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idImovel?: IntFieldUpdateOperationsInput | number
    competencia?: DateTimeFieldUpdateOperationsInput | Date | string
    valorAluguelBase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    idContaBancaria?: NullableIntFieldUpdateOperationsInput | number | null
    contaDescricao?: NullableStringFieldUpdateOperationsInput | string | null
    contaBanco?: NullableStringFieldUpdateOperationsInput | string | null
    contaAgencia?: NullableStringFieldUpdateOperationsInput | string | null
    contaNumero?: NullableStringFieldUpdateOperationsInput | string | null
    contaTipoChavePix?: NullableStringFieldUpdateOperationsInput | string | null
    contaChavePix?: NullableStringFieldUpdateOperationsInput | string | null
    contaTitular?: NullableStringFieldUpdateOperationsInput | string | null
    contaDocumentoTitular?: NullableStringFieldUpdateOperationsInput | string | null
    reajusteIndice?: NullableEnumindice_reajuste_enumFieldUpdateOperationsInput | $Enums.indice_reajuste_enum | null
    reajustePercentual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    reajusteValorAnterior?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalAPagar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    geradoPorUsuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type memoriacalculoitemCreateManyMemoriacalculoInput = {
    id?: number
    idLocador: bigint | number
    nomeLocador: string
    documentoLocador?: string | null
    percentualParticipacao: Decimal | DecimalJsLike | number | string
    valorAluguel: Decimal | DecimalJsLike | number | string
    valorReembolsos?: Decimal | DecimalJsLike | number | string
    valorDescontos?: Decimal | DecimalJsLike | number | string
    baseCalculoIrrf: Decimal | DecimalJsLike | number | string
    valorIrrf: Decimal | DecimalJsLike | number | string
    valorAPagar: Decimal | DecimalJsLike | number | string
    detalhesExtras?: NullableJsonNullValueInput | InputJsonValue
  }

  export type memoriacalculoitemUpdateWithoutMemoriacalculoInput = {
    idLocador?: BigIntFieldUpdateOperationsInput | bigint | number
    nomeLocador?: StringFieldUpdateOperationsInput | string
    documentoLocador?: NullableStringFieldUpdateOperationsInput | string | null
    percentualParticipacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAluguel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorReembolsos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorDescontos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    baseCalculoIrrf?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorIrrf?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAPagar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detalhesExtras?: NullableJsonNullValueInput | InputJsonValue
  }

  export type memoriacalculoitemUncheckedUpdateWithoutMemoriacalculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idLocador?: BigIntFieldUpdateOperationsInput | bigint | number
    nomeLocador?: StringFieldUpdateOperationsInput | string
    documentoLocador?: NullableStringFieldUpdateOperationsInput | string | null
    percentualParticipacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAluguel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorReembolsos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorDescontos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    baseCalculoIrrf?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorIrrf?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAPagar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detalhesExtras?: NullableJsonNullValueInput | InputJsonValue
  }

  export type memoriacalculoitemUncheckedUpdateManyWithoutMemoriacalculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idLocador?: BigIntFieldUpdateOperationsInput | bigint | number
    nomeLocador?: StringFieldUpdateOperationsInput | string
    documentoLocador?: NullableStringFieldUpdateOperationsInput | string | null
    percentualParticipacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAluguel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorReembolsos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorDescontos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    baseCalculoIrrf?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorIrrf?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAPagar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detalhesExtras?: NullableJsonNullValueInput | InputJsonValue
  }

  export type faixairrfCreateManyTabelairrfInput = {
    id?: number
    ordem: number
    valorDe: Decimal | DecimalJsLike | number | string
    valorAte?: Decimal | DecimalJsLike | number | string | null
    aliquota: Decimal | DecimalJsLike | number | string
    parcelaADeduzir: Decimal | DecimalJsLike | number | string
  }

  export type faixairrfUpdateWithoutTabelairrfInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    valorDe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAte?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aliquota?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    parcelaADeduzir?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type faixairrfUncheckedUpdateWithoutTabelairrfInput = {
    id?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
    valorDe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAte?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aliquota?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    parcelaADeduzir?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type faixairrfUncheckedUpdateManyWithoutTabelairrfInput = {
    id?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
    valorDe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorAte?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aliquota?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    parcelaADeduzir?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}