
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model CommandeDetails
 * 
 */
export type CommandeDetails = {
  menuId: string
  quantite: number
}

/**
 * Model Admin
 * 
 */
export type Admin = {
  id: string
  email: string
  motDePasse: string
}

/**
 * Model Client
 * 
 */
export type Client = {
  id: string
  nom: string
  prenom: string
  adresse: string
  email: string
  motDePasse: string
}

/**
 * Model Restaurant
 * 
 */
export type Restaurant = {
  id: string
  nom: string
  adresse: string
  email: string
  motDePasse: string
}

/**
 * Model Livreur
 * 
 */
export type Livreur = {
  id: string
  nom: string
  prenom: string
  email: string
  motDePasse: string
}

/**
 * Model Menu
 * 
 */
export type Menu = {
  id: string
  nom: string
  prix: number
  visible: boolean
  restaurantId: string
  commandeIds: string[]
}

/**
 * Model Commande
 * 
 */
export type Commande = {
  details: CommandeDetails[]
  id: string
  date: Date
  clientId: string
  etat: Etat
  livreurId: string | null
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Etat: {
  ATTENTE: 'ATTENTE',
  LIVREE: 'LIVREE',
  ANNULEE: 'ANNULEE'
};

export type Etat = (typeof Etat)[keyof typeof Etat]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;


  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): PrismaPromise<Prisma.JsonObject>;

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<GlobalReject>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<GlobalReject>;

  /**
   * `prisma.restaurant`: Exposes CRUD operations for the **Restaurant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Restaurants
    * const restaurants = await prisma.restaurant.findMany()
    * ```
    */
  get restaurant(): Prisma.RestaurantDelegate<GlobalReject>;

  /**
   * `prisma.livreur`: Exposes CRUD operations for the **Livreur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Livreurs
    * const livreurs = await prisma.livreur.findMany()
    * ```
    */
  get livreur(): Prisma.LivreurDelegate<GlobalReject>;

  /**
   * `prisma.menu`: Exposes CRUD operations for the **Menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menus
    * const menus = await prisma.menu.findMany()
    * ```
    */
  get menu(): Prisma.MenuDelegate<GlobalReject>;

  /**
   * `prisma.commande`: Exposes CRUD operations for the **Commande** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commandes
    * const commandes = await prisma.commande.findMany()
    * ```
    */
  get commande(): Prisma.CommandeDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

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

  /**
   * Prisma Client JS version: 3.11.1
   * Query Engine version: 1a2506facaf1a4727b7c26850735e88ec779dee9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Admin: 'Admin',
    Client: 'Client',
    Restaurant: 'Restaurant',
    Livreur: 'Livreur',
    Menu: 'Menu',
    Commande: 'Commande'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClientCountOutputType
   */


  export type ClientCountOutputType = {
    commandes: number
  }

  export type ClientCountOutputTypeSelect = {
    commandes?: boolean
  }

  export type ClientCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ClientCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ClientCountOutputType
    : S extends undefined
    ? never
    : S extends ClientCountOutputTypeArgs
    ?'include' extends U
    ? ClientCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ClientCountOutputType ? ClientCountOutputType[P] : never
  } 
    : ClientCountOutputType
  : ClientCountOutputType




  // Custom InputTypes

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     * 
    **/
    select?: ClientCountOutputTypeSelect | null
  }



  /**
   * Count Type RestaurantCountOutputType
   */


  export type RestaurantCountOutputType = {
    menus: number
  }

  export type RestaurantCountOutputTypeSelect = {
    menus?: boolean
  }

  export type RestaurantCountOutputTypeGetPayload<
    S extends boolean | null | undefined | RestaurantCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? RestaurantCountOutputType
    : S extends undefined
    ? never
    : S extends RestaurantCountOutputTypeArgs
    ?'include' extends U
    ? RestaurantCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof RestaurantCountOutputType ? RestaurantCountOutputType[P] : never
  } 
    : RestaurantCountOutputType
  : RestaurantCountOutputType




  // Custom InputTypes

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RestaurantCountOutputType
     * 
    **/
    select?: RestaurantCountOutputTypeSelect | null
  }



  /**
   * Count Type LivreurCountOutputType
   */


  export type LivreurCountOutputType = {
    livraisons: number
  }

  export type LivreurCountOutputTypeSelect = {
    livraisons?: boolean
  }

  export type LivreurCountOutputTypeGetPayload<
    S extends boolean | null | undefined | LivreurCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? LivreurCountOutputType
    : S extends undefined
    ? never
    : S extends LivreurCountOutputTypeArgs
    ?'include' extends U
    ? LivreurCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof LivreurCountOutputType ? LivreurCountOutputType[P] : never
  } 
    : LivreurCountOutputType
  : LivreurCountOutputType




  // Custom InputTypes

  /**
   * LivreurCountOutputType without action
   */
  export type LivreurCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the LivreurCountOutputType
     * 
    **/
    select?: LivreurCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model CommandeDetails
   */





  export type CommandeDetailsSelect = {
    menuId?: boolean
    quantite?: boolean
  }

  export type CommandeDetailsGetPayload<
    S extends boolean | null | undefined | CommandeDetailsArgs,
    U = keyof S
      > = S extends true
        ? CommandeDetails
    : S extends undefined
    ? never
    : S extends CommandeDetailsArgs
    ?'include' extends U
    ? CommandeDetails 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof CommandeDetails ? CommandeDetails[P] : never
  } 
    : CommandeDetails
  : CommandeDetails



  export interface CommandeDetailsDelegate<GlobalRejectSettings> {





  }

  /**
   * The delegate class that acts as a "Promise-like" for CommandeDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CommandeDetailsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * CommandeDetails without action
   */
  export type CommandeDetailsArgs = {
    /**
     * Select specific fields to fetch from the CommandeDetails
     * 
    **/
    select?: CommandeDetailsSelect | null
  }



  /**
   * Model Admin
   */


  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    email: string | null
    motDePasse: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    email: string | null
    motDePasse: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    motDePasse: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    motDePasse?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    motDePasse?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    motDePasse?: true
    _all?: true
  }

  export type AdminAggregateArgs = {
    /**
     * Filter which Admin to aggregate.
     * 
    **/
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     * 
    **/
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs = {
    where?: AdminWhereInput
    orderBy?: Enumerable<AdminOrderByWithAggregationInput>
    by: Array<AdminScalarFieldEnum>
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }


  export type AdminGroupByOutputType = {
    id: string
    email: string
    motDePasse: string
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect = {
    id?: boolean
    email?: boolean
    motDePasse?: boolean
  }

  export type AdminGetPayload<
    S extends boolean | null | undefined | AdminArgs,
    U = keyof S
      > = S extends true
        ? Admin
    : S extends undefined
    ? never
    : S extends AdminArgs | AdminFindManyArgs
    ?'include' extends U
    ? Admin 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Admin ? Admin[P] : never
  } 
    : Admin
  : Admin


  type AdminCountArgs = Merge<
    Omit<AdminFindManyArgs, 'select' | 'include'> & {
      select?: AdminCountAggregateInputType | true
    }
  >

  export interface AdminDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AdminFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AdminFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Admin'> extends True ? CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>> : CheckSelect<T, Prisma__AdminClient<Admin | null >, Prisma__AdminClient<AdminGetPayload<T> | null >>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AdminFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AdminFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Admin'> extends True ? CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>> : CheckSelect<T, Prisma__AdminClient<Admin | null >, Prisma__AdminClient<AdminGetPayload<T> | null >>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AdminFindManyArgs>(
      args?: SelectSubset<T, AdminFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Admin>>, PrismaPromise<Array<AdminGetPayload<T>>>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
    **/
    create<T extends AdminCreateArgs>(
      args: SelectSubset<T, AdminCreateArgs>
    ): CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>>

    /**
     * Create many Admins.
     *     @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     *     @example
     *     // Create many Admins
     *     const admin = await prisma.admin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AdminCreateManyArgs>(
      args?: SelectSubset<T, AdminCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
    **/
    delete<T extends AdminDeleteArgs>(
      args: SelectSubset<T, AdminDeleteArgs>
    ): CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AdminUpdateArgs>(
      args: SelectSubset<T, AdminUpdateArgs>
    ): CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AdminDeleteManyArgs>(
      args?: SelectSubset<T, AdminDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AdminUpdateManyArgs>(
      args: SelectSubset<T, AdminUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
    **/
    upsert<T extends AdminUpsertArgs>(
      args: SelectSubset<T, AdminUpsertArgs>
    ): CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>>

    /**
     * Find zero or more Admins that matches the filter.
     * @param {AdminFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const admin = await prisma.admin.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: AdminFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Admin.
     * @param {AdminAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const admin = await prisma.admin.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: AdminAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AdminClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Throw an Error if a Admin can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Admin to fetch.
     * 
    **/
    where: AdminWhereUniqueInput
  }


  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Throw an Error if a Admin can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Admin to fetch.
     * 
    **/
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     * 
    **/
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     * 
    **/
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     * 
    **/
    distinct?: Enumerable<AdminScalarFieldEnum>
  }


  /**
   * Admin findMany
   */
  export type AdminFindManyArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Filter, which Admins to fetch.
     * 
    **/
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     * 
    **/
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     * 
    **/
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AdminScalarFieldEnum>
  }


  /**
   * Admin create
   */
  export type AdminCreateArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * The data needed to create a Admin.
     * 
    **/
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }


  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs = {
    /**
     * The data used to create many Admins.
     * 
    **/
    data: Enumerable<AdminCreateManyInput>
  }


  /**
   * Admin update
   */
  export type AdminUpdateArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * The data needed to update a Admin.
     * 
    **/
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     * 
    **/
    where: AdminWhereUniqueInput
  }


  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs = {
    /**
     * The data used to update Admins.
     * 
    **/
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     * 
    **/
    where?: AdminWhereInput
  }


  /**
   * Admin upsert
   */
  export type AdminUpsertArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * The filter to search for the Admin to update in case it exists.
     * 
    **/
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     * 
    **/
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }


  /**
   * Admin delete
   */
  export type AdminDeleteArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Filter which Admin to delete.
     * 
    **/
    where: AdminWhereUniqueInput
  }


  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs = {
    /**
     * Filter which Admins to delete
     * 
    **/
    where?: AdminWhereInput
  }


  /**
   * Admin findRaw
   */
  export type AdminFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Admin aggregateRaw
   */
  export type AdminAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Admin without action
   */
  export type AdminArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
  }



  /**
   * Model Client
   */


  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    nom: string | null
    prenom: string | null
    adresse: string | null
    email: string | null
    motDePasse: string | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    prenom: string | null
    adresse: string | null
    email: string | null
    motDePasse: string | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    nom: number
    prenom: number
    adresse: number
    email: number
    motDePasse: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    adresse?: true
    email?: true
    motDePasse?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    adresse?: true
    email?: true
    motDePasse?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    adresse?: true
    email?: true
    motDePasse?: true
    _all?: true
  }

  export type ClientAggregateArgs = {
    /**
     * Filter which Client to aggregate.
     * 
    **/
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     * 
    **/
    orderBy?: Enumerable<ClientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs = {
    where?: ClientWhereInput
    orderBy?: Enumerable<ClientOrderByWithAggregationInput>
    by: Array<ClientScalarFieldEnum>
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }


  export type ClientGroupByOutputType = {
    id: string
    nom: string
    prenom: string
    adresse: string
    email: string
    motDePasse: string
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect = {
    id?: boolean
    nom?: boolean
    prenom?: boolean
    adresse?: boolean
    email?: boolean
    motDePasse?: boolean
    commandes?: boolean | CommandeFindManyArgs
    _count?: boolean | ClientCountOutputTypeArgs
  }

  export type ClientInclude = {
    commandes?: boolean | CommandeFindManyArgs
    _count?: boolean | ClientCountOutputTypeArgs
  }

  export type ClientGetPayload<
    S extends boolean | null | undefined | ClientArgs,
    U = keyof S
      > = S extends true
        ? Client
    : S extends undefined
    ? never
    : S extends ClientArgs | ClientFindManyArgs
    ?'include' extends U
    ? Client  & {
    [P in TrueKeys<S['include']>]:
        P extends 'commandes' ? Array < CommandeGetPayload<S['include'][P]>>  :
        P extends '_count' ? ClientCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'commandes' ? Array < CommandeGetPayload<S['select'][P]>>  :
        P extends '_count' ? ClientCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Client ? Client[P] : never
  } 
    : Client
  : Client


  type ClientCountArgs = Merge<
    Omit<ClientFindManyArgs, 'select' | 'include'> & {
      select?: ClientCountAggregateInputType | true
    }
  >

  export interface ClientDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClientFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ClientFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Client'> extends True ? CheckSelect<T, Prisma__ClientClient<Client>, Prisma__ClientClient<ClientGetPayload<T>>> : CheckSelect<T, Prisma__ClientClient<Client | null >, Prisma__ClientClient<ClientGetPayload<T> | null >>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClientFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ClientFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Client'> extends True ? CheckSelect<T, Prisma__ClientClient<Client>, Prisma__ClientClient<ClientGetPayload<T>>> : CheckSelect<T, Prisma__ClientClient<Client | null >, Prisma__ClientClient<ClientGetPayload<T> | null >>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClientFindManyArgs>(
      args?: SelectSubset<T, ClientFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Client>>, PrismaPromise<Array<ClientGetPayload<T>>>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
    **/
    create<T extends ClientCreateArgs>(
      args: SelectSubset<T, ClientCreateArgs>
    ): CheckSelect<T, Prisma__ClientClient<Client>, Prisma__ClientClient<ClientGetPayload<T>>>

    /**
     * Create many Clients.
     *     @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     *     @example
     *     // Create many Clients
     *     const client = await prisma.client.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClientCreateManyArgs>(
      args?: SelectSubset<T, ClientCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
    **/
    delete<T extends ClientDeleteArgs>(
      args: SelectSubset<T, ClientDeleteArgs>
    ): CheckSelect<T, Prisma__ClientClient<Client>, Prisma__ClientClient<ClientGetPayload<T>>>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClientUpdateArgs>(
      args: SelectSubset<T, ClientUpdateArgs>
    ): CheckSelect<T, Prisma__ClientClient<Client>, Prisma__ClientClient<ClientGetPayload<T>>>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClientDeleteManyArgs>(
      args?: SelectSubset<T, ClientDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClientUpdateManyArgs>(
      args: SelectSubset<T, ClientUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
    **/
    upsert<T extends ClientUpsertArgs>(
      args: SelectSubset<T, ClientUpsertArgs>
    ): CheckSelect<T, Prisma__ClientClient<Client>, Prisma__ClientClient<ClientGetPayload<T>>>

    /**
     * Find zero or more Clients that matches the filter.
     * @param {ClientFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const client = await prisma.client.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ClientFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Client.
     * @param {ClientAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const client = await prisma.client.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ClientAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ClientClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    commandes<T extends CommandeFindManyArgs = {}>(args?: Subset<T, CommandeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Commande>>, PrismaPromise<Array<CommandeGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Client
     * 
    **/
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClientInclude | null
    /**
     * Throw an Error if a Client can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Client to fetch.
     * 
    **/
    where: ClientWhereUniqueInput
  }


  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Client
     * 
    **/
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClientInclude | null
    /**
     * Throw an Error if a Client can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Client to fetch.
     * 
    **/
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     * 
    **/
    orderBy?: Enumerable<ClientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     * 
    **/
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     * 
    **/
    distinct?: Enumerable<ClientScalarFieldEnum>
  }


  /**
   * Client findMany
   */
  export type ClientFindManyArgs = {
    /**
     * Select specific fields to fetch from the Client
     * 
    **/
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClientInclude | null
    /**
     * Filter, which Clients to fetch.
     * 
    **/
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     * 
    **/
    orderBy?: Enumerable<ClientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     * 
    **/
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ClientScalarFieldEnum>
  }


  /**
   * Client create
   */
  export type ClientCreateArgs = {
    /**
     * Select specific fields to fetch from the Client
     * 
    **/
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClientInclude | null
    /**
     * The data needed to create a Client.
     * 
    **/
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }


  /**
   * Client createMany
   */
  export type ClientCreateManyArgs = {
    /**
     * The data used to create many Clients.
     * 
    **/
    data: Enumerable<ClientCreateManyInput>
  }


  /**
   * Client update
   */
  export type ClientUpdateArgs = {
    /**
     * Select specific fields to fetch from the Client
     * 
    **/
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClientInclude | null
    /**
     * The data needed to update a Client.
     * 
    **/
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     * 
    **/
    where: ClientWhereUniqueInput
  }


  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs = {
    /**
     * The data used to update Clients.
     * 
    **/
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     * 
    **/
    where?: ClientWhereInput
  }


  /**
   * Client upsert
   */
  export type ClientUpsertArgs = {
    /**
     * Select specific fields to fetch from the Client
     * 
    **/
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClientInclude | null
    /**
     * The filter to search for the Client to update in case it exists.
     * 
    **/
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     * 
    **/
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }


  /**
   * Client delete
   */
  export type ClientDeleteArgs = {
    /**
     * Select specific fields to fetch from the Client
     * 
    **/
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClientInclude | null
    /**
     * Filter which Client to delete.
     * 
    **/
    where: ClientWhereUniqueInput
  }


  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs = {
    /**
     * Filter which Clients to delete
     * 
    **/
    where?: ClientWhereInput
  }


  /**
   * Client findRaw
   */
  export type ClientFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Client aggregateRaw
   */
  export type ClientAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Client without action
   */
  export type ClientArgs = {
    /**
     * Select specific fields to fetch from the Client
     * 
    **/
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClientInclude | null
  }



  /**
   * Model Restaurant
   */


  export type AggregateRestaurant = {
    _count: RestaurantCountAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  export type RestaurantMinAggregateOutputType = {
    id: string | null
    nom: string | null
    adresse: string | null
    email: string | null
    motDePasse: string | null
  }

  export type RestaurantMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    adresse: string | null
    email: string | null
    motDePasse: string | null
  }

  export type RestaurantCountAggregateOutputType = {
    id: number
    nom: number
    adresse: number
    email: number
    motDePasse: number
    _all: number
  }


  export type RestaurantMinAggregateInputType = {
    id?: true
    nom?: true
    adresse?: true
    email?: true
    motDePasse?: true
  }

  export type RestaurantMaxAggregateInputType = {
    id?: true
    nom?: true
    adresse?: true
    email?: true
    motDePasse?: true
  }

  export type RestaurantCountAggregateInputType = {
    id?: true
    nom?: true
    adresse?: true
    email?: true
    motDePasse?: true
    _all?: true
  }

  export type RestaurantAggregateArgs = {
    /**
     * Filter which Restaurant to aggregate.
     * 
    **/
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     * 
    **/
    orderBy?: Enumerable<RestaurantOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Restaurants
    **/
    _count?: true | RestaurantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantMaxAggregateInputType
  }

  export type GetRestaurantAggregateType<T extends RestaurantAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurant[P]>
      : GetScalarType<T[P], AggregateRestaurant[P]>
  }




  export type RestaurantGroupByArgs = {
    where?: RestaurantWhereInput
    orderBy?: Enumerable<RestaurantOrderByWithAggregationInput>
    by: Array<RestaurantScalarFieldEnum>
    having?: RestaurantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantCountAggregateInputType | true
    _min?: RestaurantMinAggregateInputType
    _max?: RestaurantMaxAggregateInputType
  }


  export type RestaurantGroupByOutputType = {
    id: string
    nom: string
    adresse: string
    email: string
    motDePasse: string
    _count: RestaurantCountAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  type GetRestaurantGroupByPayload<T extends RestaurantGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RestaurantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestaurantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
        }
      >
    >


  export type RestaurantSelect = {
    id?: boolean
    nom?: boolean
    adresse?: boolean
    email?: boolean
    motDePasse?: boolean
    menus?: boolean | MenuFindManyArgs
    _count?: boolean | RestaurantCountOutputTypeArgs
  }

  export type RestaurantInclude = {
    menus?: boolean | MenuFindManyArgs
    _count?: boolean | RestaurantCountOutputTypeArgs
  }

  export type RestaurantGetPayload<
    S extends boolean | null | undefined | RestaurantArgs,
    U = keyof S
      > = S extends true
        ? Restaurant
    : S extends undefined
    ? never
    : S extends RestaurantArgs | RestaurantFindManyArgs
    ?'include' extends U
    ? Restaurant  & {
    [P in TrueKeys<S['include']>]:
        P extends 'menus' ? Array < MenuGetPayload<S['include'][P]>>  :
        P extends '_count' ? RestaurantCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'menus' ? Array < MenuGetPayload<S['select'][P]>>  :
        P extends '_count' ? RestaurantCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Restaurant ? Restaurant[P] : never
  } 
    : Restaurant
  : Restaurant


  type RestaurantCountArgs = Merge<
    Omit<RestaurantFindManyArgs, 'select' | 'include'> & {
      select?: RestaurantCountAggregateInputType | true
    }
  >

  export interface RestaurantDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Restaurant that matches the filter.
     * @param {RestaurantFindUniqueArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RestaurantFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RestaurantFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Restaurant'> extends True ? CheckSelect<T, Prisma__RestaurantClient<Restaurant>, Prisma__RestaurantClient<RestaurantGetPayload<T>>> : CheckSelect<T, Prisma__RestaurantClient<Restaurant | null >, Prisma__RestaurantClient<RestaurantGetPayload<T> | null >>

    /**
     * Find the first Restaurant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindFirstArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RestaurantFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RestaurantFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Restaurant'> extends True ? CheckSelect<T, Prisma__RestaurantClient<Restaurant>, Prisma__RestaurantClient<RestaurantGetPayload<T>>> : CheckSelect<T, Prisma__RestaurantClient<Restaurant | null >, Prisma__RestaurantClient<RestaurantGetPayload<T> | null >>

    /**
     * Find zero or more Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restaurants
     * const restaurants = await prisma.restaurant.findMany()
     * 
     * // Get first 10 Restaurants
     * const restaurants = await prisma.restaurant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RestaurantFindManyArgs>(
      args?: SelectSubset<T, RestaurantFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Restaurant>>, PrismaPromise<Array<RestaurantGetPayload<T>>>>

    /**
     * Create a Restaurant.
     * @param {RestaurantCreateArgs} args - Arguments to create a Restaurant.
     * @example
     * // Create one Restaurant
     * const Restaurant = await prisma.restaurant.create({
     *   data: {
     *     // ... data to create a Restaurant
     *   }
     * })
     * 
    **/
    create<T extends RestaurantCreateArgs>(
      args: SelectSubset<T, RestaurantCreateArgs>
    ): CheckSelect<T, Prisma__RestaurantClient<Restaurant>, Prisma__RestaurantClient<RestaurantGetPayload<T>>>

    /**
     * Create many Restaurants.
     *     @param {RestaurantCreateManyArgs} args - Arguments to create many Restaurants.
     *     @example
     *     // Create many Restaurants
     *     const restaurant = await prisma.restaurant.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RestaurantCreateManyArgs>(
      args?: SelectSubset<T, RestaurantCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Restaurant.
     * @param {RestaurantDeleteArgs} args - Arguments to delete one Restaurant.
     * @example
     * // Delete one Restaurant
     * const Restaurant = await prisma.restaurant.delete({
     *   where: {
     *     // ... filter to delete one Restaurant
     *   }
     * })
     * 
    **/
    delete<T extends RestaurantDeleteArgs>(
      args: SelectSubset<T, RestaurantDeleteArgs>
    ): CheckSelect<T, Prisma__RestaurantClient<Restaurant>, Prisma__RestaurantClient<RestaurantGetPayload<T>>>

    /**
     * Update one Restaurant.
     * @param {RestaurantUpdateArgs} args - Arguments to update one Restaurant.
     * @example
     * // Update one Restaurant
     * const restaurant = await prisma.restaurant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RestaurantUpdateArgs>(
      args: SelectSubset<T, RestaurantUpdateArgs>
    ): CheckSelect<T, Prisma__RestaurantClient<Restaurant>, Prisma__RestaurantClient<RestaurantGetPayload<T>>>

    /**
     * Delete zero or more Restaurants.
     * @param {RestaurantDeleteManyArgs} args - Arguments to filter Restaurants to delete.
     * @example
     * // Delete a few Restaurants
     * const { count } = await prisma.restaurant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RestaurantDeleteManyArgs>(
      args?: SelectSubset<T, RestaurantDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restaurants
     * const restaurant = await prisma.restaurant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RestaurantUpdateManyArgs>(
      args: SelectSubset<T, RestaurantUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Restaurant.
     * @param {RestaurantUpsertArgs} args - Arguments to update or create a Restaurant.
     * @example
     * // Update or create a Restaurant
     * const restaurant = await prisma.restaurant.upsert({
     *   create: {
     *     // ... data to create a Restaurant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restaurant we want to update
     *   }
     * })
    **/
    upsert<T extends RestaurantUpsertArgs>(
      args: SelectSubset<T, RestaurantUpsertArgs>
    ): CheckSelect<T, Prisma__RestaurantClient<Restaurant>, Prisma__RestaurantClient<RestaurantGetPayload<T>>>

    /**
     * Find zero or more Restaurants that matches the filter.
     * @param {RestaurantFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const restaurant = await prisma.restaurant.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: RestaurantFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Restaurant.
     * @param {RestaurantAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const restaurant = await prisma.restaurant.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: RestaurantAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantCountArgs} args - Arguments to filter Restaurants to count.
     * @example
     * // Count the number of Restaurants
     * const count = await prisma.restaurant.count({
     *   where: {
     *     // ... the filter for the Restaurants we want to count
     *   }
     * })
    **/
    count<T extends RestaurantCountArgs>(
      args?: Subset<T, RestaurantCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RestaurantAggregateArgs>(args: Subset<T, RestaurantAggregateArgs>): PrismaPromise<GetRestaurantAggregateType<T>>

    /**
     * Group by Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantGroupByArgs} args - Group by arguments.
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
      T extends RestaurantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestaurantGroupByArgs['orderBy'] }
        : { orderBy?: RestaurantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RestaurantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Restaurant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RestaurantClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    menus<T extends MenuFindManyArgs = {}>(args?: Subset<T, MenuFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Menu>>, PrismaPromise<Array<MenuGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Restaurant findUnique
   */
  export type RestaurantFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Restaurant
     * 
    **/
    select?: RestaurantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RestaurantInclude | null
    /**
     * Throw an Error if a Restaurant can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Restaurant to fetch.
     * 
    **/
    where: RestaurantWhereUniqueInput
  }


  /**
   * Restaurant findFirst
   */
  export type RestaurantFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Restaurant
     * 
    **/
    select?: RestaurantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RestaurantInclude | null
    /**
     * Throw an Error if a Restaurant can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Restaurant to fetch.
     * 
    **/
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     * 
    **/
    orderBy?: Enumerable<RestaurantOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     * 
    **/
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     * 
    **/
    distinct?: Enumerable<RestaurantScalarFieldEnum>
  }


  /**
   * Restaurant findMany
   */
  export type RestaurantFindManyArgs = {
    /**
     * Select specific fields to fetch from the Restaurant
     * 
    **/
    select?: RestaurantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RestaurantInclude | null
    /**
     * Filter, which Restaurants to fetch.
     * 
    **/
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     * 
    **/
    orderBy?: Enumerable<RestaurantOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Restaurants.
     * 
    **/
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RestaurantScalarFieldEnum>
  }


  /**
   * Restaurant create
   */
  export type RestaurantCreateArgs = {
    /**
     * Select specific fields to fetch from the Restaurant
     * 
    **/
    select?: RestaurantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RestaurantInclude | null
    /**
     * The data needed to create a Restaurant.
     * 
    **/
    data: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>
  }


  /**
   * Restaurant createMany
   */
  export type RestaurantCreateManyArgs = {
    /**
     * The data used to create many Restaurants.
     * 
    **/
    data: Enumerable<RestaurantCreateManyInput>
  }


  /**
   * Restaurant update
   */
  export type RestaurantUpdateArgs = {
    /**
     * Select specific fields to fetch from the Restaurant
     * 
    **/
    select?: RestaurantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RestaurantInclude | null
    /**
     * The data needed to update a Restaurant.
     * 
    **/
    data: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>
    /**
     * Choose, which Restaurant to update.
     * 
    **/
    where: RestaurantWhereUniqueInput
  }


  /**
   * Restaurant updateMany
   */
  export type RestaurantUpdateManyArgs = {
    /**
     * The data used to update Restaurants.
     * 
    **/
    data: XOR<RestaurantUpdateManyMutationInput, RestaurantUncheckedUpdateManyInput>
    /**
     * Filter which Restaurants to update
     * 
    **/
    where?: RestaurantWhereInput
  }


  /**
   * Restaurant upsert
   */
  export type RestaurantUpsertArgs = {
    /**
     * Select specific fields to fetch from the Restaurant
     * 
    **/
    select?: RestaurantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RestaurantInclude | null
    /**
     * The filter to search for the Restaurant to update in case it exists.
     * 
    **/
    where: RestaurantWhereUniqueInput
    /**
     * In case the Restaurant found by the `where` argument doesn't exist, create a new Restaurant with this data.
     * 
    **/
    create: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>
    /**
     * In case the Restaurant was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>
  }


  /**
   * Restaurant delete
   */
  export type RestaurantDeleteArgs = {
    /**
     * Select specific fields to fetch from the Restaurant
     * 
    **/
    select?: RestaurantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RestaurantInclude | null
    /**
     * Filter which Restaurant to delete.
     * 
    **/
    where: RestaurantWhereUniqueInput
  }


  /**
   * Restaurant deleteMany
   */
  export type RestaurantDeleteManyArgs = {
    /**
     * Filter which Restaurants to delete
     * 
    **/
    where?: RestaurantWhereInput
  }


  /**
   * Restaurant findRaw
   */
  export type RestaurantFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Restaurant aggregateRaw
   */
  export type RestaurantAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Restaurant without action
   */
  export type RestaurantArgs = {
    /**
     * Select specific fields to fetch from the Restaurant
     * 
    **/
    select?: RestaurantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RestaurantInclude | null
  }



  /**
   * Model Livreur
   */


  export type AggregateLivreur = {
    _count: LivreurCountAggregateOutputType | null
    _min: LivreurMinAggregateOutputType | null
    _max: LivreurMaxAggregateOutputType | null
  }

  export type LivreurMinAggregateOutputType = {
    id: string | null
    nom: string | null
    prenom: string | null
    email: string | null
    motDePasse: string | null
  }

  export type LivreurMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    prenom: string | null
    email: string | null
    motDePasse: string | null
  }

  export type LivreurCountAggregateOutputType = {
    id: number
    nom: number
    prenom: number
    email: number
    motDePasse: number
    _all: number
  }


  export type LivreurMinAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    motDePasse?: true
  }

  export type LivreurMaxAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    motDePasse?: true
  }

  export type LivreurCountAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    motDePasse?: true
    _all?: true
  }

  export type LivreurAggregateArgs = {
    /**
     * Filter which Livreur to aggregate.
     * 
    **/
    where?: LivreurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livreurs to fetch.
     * 
    **/
    orderBy?: Enumerable<LivreurOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: LivreurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livreurs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livreurs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Livreurs
    **/
    _count?: true | LivreurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LivreurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LivreurMaxAggregateInputType
  }

  export type GetLivreurAggregateType<T extends LivreurAggregateArgs> = {
        [P in keyof T & keyof AggregateLivreur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLivreur[P]>
      : GetScalarType<T[P], AggregateLivreur[P]>
  }




  export type LivreurGroupByArgs = {
    where?: LivreurWhereInput
    orderBy?: Enumerable<LivreurOrderByWithAggregationInput>
    by: Array<LivreurScalarFieldEnum>
    having?: LivreurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LivreurCountAggregateInputType | true
    _min?: LivreurMinAggregateInputType
    _max?: LivreurMaxAggregateInputType
  }


  export type LivreurGroupByOutputType = {
    id: string
    nom: string
    prenom: string
    email: string
    motDePasse: string
    _count: LivreurCountAggregateOutputType | null
    _min: LivreurMinAggregateOutputType | null
    _max: LivreurMaxAggregateOutputType | null
  }

  type GetLivreurGroupByPayload<T extends LivreurGroupByArgs> = PrismaPromise<
    Array<
      PickArray<LivreurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LivreurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LivreurGroupByOutputType[P]>
            : GetScalarType<T[P], LivreurGroupByOutputType[P]>
        }
      >
    >


  export type LivreurSelect = {
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    motDePasse?: boolean
    livraisons?: boolean | CommandeFindManyArgs
    _count?: boolean | LivreurCountOutputTypeArgs
  }

  export type LivreurInclude = {
    livraisons?: boolean | CommandeFindManyArgs
    _count?: boolean | LivreurCountOutputTypeArgs
  }

  export type LivreurGetPayload<
    S extends boolean | null | undefined | LivreurArgs,
    U = keyof S
      > = S extends true
        ? Livreur
    : S extends undefined
    ? never
    : S extends LivreurArgs | LivreurFindManyArgs
    ?'include' extends U
    ? Livreur  & {
    [P in TrueKeys<S['include']>]:
        P extends 'livraisons' ? Array < CommandeGetPayload<S['include'][P]>>  :
        P extends '_count' ? LivreurCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'livraisons' ? Array < CommandeGetPayload<S['select'][P]>>  :
        P extends '_count' ? LivreurCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Livreur ? Livreur[P] : never
  } 
    : Livreur
  : Livreur


  type LivreurCountArgs = Merge<
    Omit<LivreurFindManyArgs, 'select' | 'include'> & {
      select?: LivreurCountAggregateInputType | true
    }
  >

  export interface LivreurDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Livreur that matches the filter.
     * @param {LivreurFindUniqueArgs} args - Arguments to find a Livreur
     * @example
     * // Get one Livreur
     * const livreur = await prisma.livreur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LivreurFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LivreurFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Livreur'> extends True ? CheckSelect<T, Prisma__LivreurClient<Livreur>, Prisma__LivreurClient<LivreurGetPayload<T>>> : CheckSelect<T, Prisma__LivreurClient<Livreur | null >, Prisma__LivreurClient<LivreurGetPayload<T> | null >>

    /**
     * Find the first Livreur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivreurFindFirstArgs} args - Arguments to find a Livreur
     * @example
     * // Get one Livreur
     * const livreur = await prisma.livreur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LivreurFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LivreurFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Livreur'> extends True ? CheckSelect<T, Prisma__LivreurClient<Livreur>, Prisma__LivreurClient<LivreurGetPayload<T>>> : CheckSelect<T, Prisma__LivreurClient<Livreur | null >, Prisma__LivreurClient<LivreurGetPayload<T> | null >>

    /**
     * Find zero or more Livreurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivreurFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Livreurs
     * const livreurs = await prisma.livreur.findMany()
     * 
     * // Get first 10 Livreurs
     * const livreurs = await prisma.livreur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const livreurWithIdOnly = await prisma.livreur.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LivreurFindManyArgs>(
      args?: SelectSubset<T, LivreurFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Livreur>>, PrismaPromise<Array<LivreurGetPayload<T>>>>

    /**
     * Create a Livreur.
     * @param {LivreurCreateArgs} args - Arguments to create a Livreur.
     * @example
     * // Create one Livreur
     * const Livreur = await prisma.livreur.create({
     *   data: {
     *     // ... data to create a Livreur
     *   }
     * })
     * 
    **/
    create<T extends LivreurCreateArgs>(
      args: SelectSubset<T, LivreurCreateArgs>
    ): CheckSelect<T, Prisma__LivreurClient<Livreur>, Prisma__LivreurClient<LivreurGetPayload<T>>>

    /**
     * Create many Livreurs.
     *     @param {LivreurCreateManyArgs} args - Arguments to create many Livreurs.
     *     @example
     *     // Create many Livreurs
     *     const livreur = await prisma.livreur.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LivreurCreateManyArgs>(
      args?: SelectSubset<T, LivreurCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Livreur.
     * @param {LivreurDeleteArgs} args - Arguments to delete one Livreur.
     * @example
     * // Delete one Livreur
     * const Livreur = await prisma.livreur.delete({
     *   where: {
     *     // ... filter to delete one Livreur
     *   }
     * })
     * 
    **/
    delete<T extends LivreurDeleteArgs>(
      args: SelectSubset<T, LivreurDeleteArgs>
    ): CheckSelect<T, Prisma__LivreurClient<Livreur>, Prisma__LivreurClient<LivreurGetPayload<T>>>

    /**
     * Update one Livreur.
     * @param {LivreurUpdateArgs} args - Arguments to update one Livreur.
     * @example
     * // Update one Livreur
     * const livreur = await prisma.livreur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LivreurUpdateArgs>(
      args: SelectSubset<T, LivreurUpdateArgs>
    ): CheckSelect<T, Prisma__LivreurClient<Livreur>, Prisma__LivreurClient<LivreurGetPayload<T>>>

    /**
     * Delete zero or more Livreurs.
     * @param {LivreurDeleteManyArgs} args - Arguments to filter Livreurs to delete.
     * @example
     * // Delete a few Livreurs
     * const { count } = await prisma.livreur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LivreurDeleteManyArgs>(
      args?: SelectSubset<T, LivreurDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Livreurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivreurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Livreurs
     * const livreur = await prisma.livreur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LivreurUpdateManyArgs>(
      args: SelectSubset<T, LivreurUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Livreur.
     * @param {LivreurUpsertArgs} args - Arguments to update or create a Livreur.
     * @example
     * // Update or create a Livreur
     * const livreur = await prisma.livreur.upsert({
     *   create: {
     *     // ... data to create a Livreur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Livreur we want to update
     *   }
     * })
    **/
    upsert<T extends LivreurUpsertArgs>(
      args: SelectSubset<T, LivreurUpsertArgs>
    ): CheckSelect<T, Prisma__LivreurClient<Livreur>, Prisma__LivreurClient<LivreurGetPayload<T>>>

    /**
     * Find zero or more Livreurs that matches the filter.
     * @param {LivreurFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const livreur = await prisma.livreur.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: LivreurFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Livreur.
     * @param {LivreurAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const livreur = await prisma.livreur.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: LivreurAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Livreurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivreurCountArgs} args - Arguments to filter Livreurs to count.
     * @example
     * // Count the number of Livreurs
     * const count = await prisma.livreur.count({
     *   where: {
     *     // ... the filter for the Livreurs we want to count
     *   }
     * })
    **/
    count<T extends LivreurCountArgs>(
      args?: Subset<T, LivreurCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LivreurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Livreur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivreurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LivreurAggregateArgs>(args: Subset<T, LivreurAggregateArgs>): PrismaPromise<GetLivreurAggregateType<T>>

    /**
     * Group by Livreur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivreurGroupByArgs} args - Group by arguments.
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
      T extends LivreurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LivreurGroupByArgs['orderBy'] }
        : { orderBy?: LivreurGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, LivreurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLivreurGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Livreur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LivreurClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    livraisons<T extends CommandeFindManyArgs = {}>(args?: Subset<T, CommandeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Commande>>, PrismaPromise<Array<CommandeGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Livreur findUnique
   */
  export type LivreurFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Livreur
     * 
    **/
    select?: LivreurSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LivreurInclude | null
    /**
     * Throw an Error if a Livreur can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Livreur to fetch.
     * 
    **/
    where: LivreurWhereUniqueInput
  }


  /**
   * Livreur findFirst
   */
  export type LivreurFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Livreur
     * 
    **/
    select?: LivreurSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LivreurInclude | null
    /**
     * Throw an Error if a Livreur can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Livreur to fetch.
     * 
    **/
    where?: LivreurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livreurs to fetch.
     * 
    **/
    orderBy?: Enumerable<LivreurOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Livreurs.
     * 
    **/
    cursor?: LivreurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livreurs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livreurs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Livreurs.
     * 
    **/
    distinct?: Enumerable<LivreurScalarFieldEnum>
  }


  /**
   * Livreur findMany
   */
  export type LivreurFindManyArgs = {
    /**
     * Select specific fields to fetch from the Livreur
     * 
    **/
    select?: LivreurSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LivreurInclude | null
    /**
     * Filter, which Livreurs to fetch.
     * 
    **/
    where?: LivreurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livreurs to fetch.
     * 
    **/
    orderBy?: Enumerable<LivreurOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Livreurs.
     * 
    **/
    cursor?: LivreurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livreurs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livreurs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<LivreurScalarFieldEnum>
  }


  /**
   * Livreur create
   */
  export type LivreurCreateArgs = {
    /**
     * Select specific fields to fetch from the Livreur
     * 
    **/
    select?: LivreurSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LivreurInclude | null
    /**
     * The data needed to create a Livreur.
     * 
    **/
    data: XOR<LivreurCreateInput, LivreurUncheckedCreateInput>
  }


  /**
   * Livreur createMany
   */
  export type LivreurCreateManyArgs = {
    /**
     * The data used to create many Livreurs.
     * 
    **/
    data: Enumerable<LivreurCreateManyInput>
  }


  /**
   * Livreur update
   */
  export type LivreurUpdateArgs = {
    /**
     * Select specific fields to fetch from the Livreur
     * 
    **/
    select?: LivreurSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LivreurInclude | null
    /**
     * The data needed to update a Livreur.
     * 
    **/
    data: XOR<LivreurUpdateInput, LivreurUncheckedUpdateInput>
    /**
     * Choose, which Livreur to update.
     * 
    **/
    where: LivreurWhereUniqueInput
  }


  /**
   * Livreur updateMany
   */
  export type LivreurUpdateManyArgs = {
    /**
     * The data used to update Livreurs.
     * 
    **/
    data: XOR<LivreurUpdateManyMutationInput, LivreurUncheckedUpdateManyInput>
    /**
     * Filter which Livreurs to update
     * 
    **/
    where?: LivreurWhereInput
  }


  /**
   * Livreur upsert
   */
  export type LivreurUpsertArgs = {
    /**
     * Select specific fields to fetch from the Livreur
     * 
    **/
    select?: LivreurSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LivreurInclude | null
    /**
     * The filter to search for the Livreur to update in case it exists.
     * 
    **/
    where: LivreurWhereUniqueInput
    /**
     * In case the Livreur found by the `where` argument doesn't exist, create a new Livreur with this data.
     * 
    **/
    create: XOR<LivreurCreateInput, LivreurUncheckedCreateInput>
    /**
     * In case the Livreur was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<LivreurUpdateInput, LivreurUncheckedUpdateInput>
  }


  /**
   * Livreur delete
   */
  export type LivreurDeleteArgs = {
    /**
     * Select specific fields to fetch from the Livreur
     * 
    **/
    select?: LivreurSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LivreurInclude | null
    /**
     * Filter which Livreur to delete.
     * 
    **/
    where: LivreurWhereUniqueInput
  }


  /**
   * Livreur deleteMany
   */
  export type LivreurDeleteManyArgs = {
    /**
     * Filter which Livreurs to delete
     * 
    **/
    where?: LivreurWhereInput
  }


  /**
   * Livreur findRaw
   */
  export type LivreurFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Livreur aggregateRaw
   */
  export type LivreurAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Livreur without action
   */
  export type LivreurArgs = {
    /**
     * Select specific fields to fetch from the Livreur
     * 
    **/
    select?: LivreurSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LivreurInclude | null
  }



  /**
   * Model Menu
   */


  export type AggregateMenu = {
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  export type MenuAvgAggregateOutputType = {
    prix: number | null
  }

  export type MenuSumAggregateOutputType = {
    prix: number | null
  }

  export type MenuMinAggregateOutputType = {
    id: string | null
    nom: string | null
    prix: number | null
    visible: boolean | null
    restaurantId: string | null
  }

  export type MenuMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    prix: number | null
    visible: boolean | null
    restaurantId: string | null
  }

  export type MenuCountAggregateOutputType = {
    id: number
    nom: number
    prix: number
    visible: number
    restaurantId: number
    commandeIds: number
    _all: number
  }


  export type MenuAvgAggregateInputType = {
    prix?: true
  }

  export type MenuSumAggregateInputType = {
    prix?: true
  }

  export type MenuMinAggregateInputType = {
    id?: true
    nom?: true
    prix?: true
    visible?: true
    restaurantId?: true
  }

  export type MenuMaxAggregateInputType = {
    id?: true
    nom?: true
    prix?: true
    visible?: true
    restaurantId?: true
  }

  export type MenuCountAggregateInputType = {
    id?: true
    nom?: true
    prix?: true
    visible?: true
    restaurantId?: true
    commandeIds?: true
    _all?: true
  }

  export type MenuAggregateArgs = {
    /**
     * Filter which Menu to aggregate.
     * 
    **/
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     * 
    **/
    orderBy?: Enumerable<MenuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Menus
    **/
    _count?: true | MenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuMaxAggregateInputType
  }

  export type GetMenuAggregateType<T extends MenuAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu[P]>
      : GetScalarType<T[P], AggregateMenu[P]>
  }




  export type MenuGroupByArgs = {
    where?: MenuWhereInput
    orderBy?: Enumerable<MenuOrderByWithAggregationInput>
    by: Array<MenuScalarFieldEnum>
    having?: MenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuCountAggregateInputType | true
    _avg?: MenuAvgAggregateInputType
    _sum?: MenuSumAggregateInputType
    _min?: MenuMinAggregateInputType
    _max?: MenuMaxAggregateInputType
  }


  export type MenuGroupByOutputType = {
    id: string
    nom: string
    prix: number
    visible: boolean
    restaurantId: string
    commandeIds: string[]
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  type GetMenuGroupByPayload<T extends MenuGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuGroupByOutputType[P]>
            : GetScalarType<T[P], MenuGroupByOutputType[P]>
        }
      >
    >


  export type MenuSelect = {
    id?: boolean
    nom?: boolean
    prix?: boolean
    visible?: boolean
    restaurantId?: boolean
    restaurant?: boolean | RestaurantArgs
    commandeIds?: boolean
  }

  export type MenuInclude = {
    restaurant?: boolean | RestaurantArgs
  }

  export type MenuGetPayload<
    S extends boolean | null | undefined | MenuArgs,
    U = keyof S
      > = S extends true
        ? Menu
    : S extends undefined
    ? never
    : S extends MenuArgs | MenuFindManyArgs
    ?'include' extends U
    ? Menu  & {
    [P in TrueKeys<S['include']>]:
        P extends 'restaurant' ? RestaurantGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'restaurant' ? RestaurantGetPayload<S['select'][P]> :  P extends keyof Menu ? Menu[P] : never
  } 
    : Menu
  : Menu


  type MenuCountArgs = Merge<
    Omit<MenuFindManyArgs, 'select' | 'include'> & {
      select?: MenuCountAggregateInputType | true
    }
  >

  export interface MenuDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Menu that matches the filter.
     * @param {MenuFindUniqueArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MenuFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MenuFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Menu'> extends True ? CheckSelect<T, Prisma__MenuClient<Menu>, Prisma__MenuClient<MenuGetPayload<T>>> : CheckSelect<T, Prisma__MenuClient<Menu | null >, Prisma__MenuClient<MenuGetPayload<T> | null >>

    /**
     * Find the first Menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MenuFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MenuFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Menu'> extends True ? CheckSelect<T, Prisma__MenuClient<Menu>, Prisma__MenuClient<MenuGetPayload<T>>> : CheckSelect<T, Prisma__MenuClient<Menu | null >, Prisma__MenuClient<MenuGetPayload<T> | null >>

    /**
     * Find zero or more Menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menus
     * const menus = await prisma.menu.findMany()
     * 
     * // Get first 10 Menus
     * const menus = await prisma.menu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuWithIdOnly = await prisma.menu.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MenuFindManyArgs>(
      args?: SelectSubset<T, MenuFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Menu>>, PrismaPromise<Array<MenuGetPayload<T>>>>

    /**
     * Create a Menu.
     * @param {MenuCreateArgs} args - Arguments to create a Menu.
     * @example
     * // Create one Menu
     * const Menu = await prisma.menu.create({
     *   data: {
     *     // ... data to create a Menu
     *   }
     * })
     * 
    **/
    create<T extends MenuCreateArgs>(
      args: SelectSubset<T, MenuCreateArgs>
    ): CheckSelect<T, Prisma__MenuClient<Menu>, Prisma__MenuClient<MenuGetPayload<T>>>

    /**
     * Create many Menus.
     *     @param {MenuCreateManyArgs} args - Arguments to create many Menus.
     *     @example
     *     // Create many Menus
     *     const menu = await prisma.menu.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MenuCreateManyArgs>(
      args?: SelectSubset<T, MenuCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Menu.
     * @param {MenuDeleteArgs} args - Arguments to delete one Menu.
     * @example
     * // Delete one Menu
     * const Menu = await prisma.menu.delete({
     *   where: {
     *     // ... filter to delete one Menu
     *   }
     * })
     * 
    **/
    delete<T extends MenuDeleteArgs>(
      args: SelectSubset<T, MenuDeleteArgs>
    ): CheckSelect<T, Prisma__MenuClient<Menu>, Prisma__MenuClient<MenuGetPayload<T>>>

    /**
     * Update one Menu.
     * @param {MenuUpdateArgs} args - Arguments to update one Menu.
     * @example
     * // Update one Menu
     * const menu = await prisma.menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MenuUpdateArgs>(
      args: SelectSubset<T, MenuUpdateArgs>
    ): CheckSelect<T, Prisma__MenuClient<Menu>, Prisma__MenuClient<MenuGetPayload<T>>>

    /**
     * Delete zero or more Menus.
     * @param {MenuDeleteManyArgs} args - Arguments to filter Menus to delete.
     * @example
     * // Delete a few Menus
     * const { count } = await prisma.menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MenuDeleteManyArgs>(
      args?: SelectSubset<T, MenuDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MenuUpdateManyArgs>(
      args: SelectSubset<T, MenuUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Menu.
     * @param {MenuUpsertArgs} args - Arguments to update or create a Menu.
     * @example
     * // Update or create a Menu
     * const menu = await prisma.menu.upsert({
     *   create: {
     *     // ... data to create a Menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu we want to update
     *   }
     * })
    **/
    upsert<T extends MenuUpsertArgs>(
      args: SelectSubset<T, MenuUpsertArgs>
    ): CheckSelect<T, Prisma__MenuClient<Menu>, Prisma__MenuClient<MenuGetPayload<T>>>

    /**
     * Find zero or more Menus that matches the filter.
     * @param {MenuFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const menu = await prisma.menu.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: MenuFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Menu.
     * @param {MenuAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const menu = await prisma.menu.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: MenuAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCountArgs} args - Arguments to filter Menus to count.
     * @example
     * // Count the number of Menus
     * const count = await prisma.menu.count({
     *   where: {
     *     // ... the filter for the Menus we want to count
     *   }
     * })
    **/
    count<T extends MenuCountArgs>(
      args?: Subset<T, MenuCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MenuAggregateArgs>(args: Subset<T, MenuAggregateArgs>): PrismaPromise<GetMenuAggregateType<T>>

    /**
     * Group by Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupByArgs} args - Group by arguments.
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
      T extends MenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuGroupByArgs['orderBy'] }
        : { orderBy?: MenuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MenuClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    restaurant<T extends RestaurantArgs = {}>(args?: Subset<T, RestaurantArgs>): CheckSelect<T, Prisma__RestaurantClient<Restaurant | null >, Prisma__RestaurantClient<RestaurantGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Menu findUnique
   */
  export type MenuFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Menu
     * 
    **/
    select?: MenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MenuInclude | null
    /**
     * Throw an Error if a Menu can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Menu to fetch.
     * 
    **/
    where: MenuWhereUniqueInput
  }


  /**
   * Menu findFirst
   */
  export type MenuFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Menu
     * 
    **/
    select?: MenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MenuInclude | null
    /**
     * Throw an Error if a Menu can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Menu to fetch.
     * 
    **/
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     * 
    **/
    orderBy?: Enumerable<MenuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     * 
    **/
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     * 
    **/
    distinct?: Enumerable<MenuScalarFieldEnum>
  }


  /**
   * Menu findMany
   */
  export type MenuFindManyArgs = {
    /**
     * Select specific fields to fetch from the Menu
     * 
    **/
    select?: MenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MenuInclude | null
    /**
     * Filter, which Menus to fetch.
     * 
    **/
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     * 
    **/
    orderBy?: Enumerable<MenuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Menus.
     * 
    **/
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MenuScalarFieldEnum>
  }


  /**
   * Menu create
   */
  export type MenuCreateArgs = {
    /**
     * Select specific fields to fetch from the Menu
     * 
    **/
    select?: MenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MenuInclude | null
    /**
     * The data needed to create a Menu.
     * 
    **/
    data: XOR<MenuCreateInput, MenuUncheckedCreateInput>
  }


  /**
   * Menu createMany
   */
  export type MenuCreateManyArgs = {
    /**
     * The data used to create many Menus.
     * 
    **/
    data: Enumerable<MenuCreateManyInput>
  }


  /**
   * Menu update
   */
  export type MenuUpdateArgs = {
    /**
     * Select specific fields to fetch from the Menu
     * 
    **/
    select?: MenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MenuInclude | null
    /**
     * The data needed to update a Menu.
     * 
    **/
    data: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
    /**
     * Choose, which Menu to update.
     * 
    **/
    where: MenuWhereUniqueInput
  }


  /**
   * Menu updateMany
   */
  export type MenuUpdateManyArgs = {
    /**
     * The data used to update Menus.
     * 
    **/
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyInput>
    /**
     * Filter which Menus to update
     * 
    **/
    where?: MenuWhereInput
  }


  /**
   * Menu upsert
   */
  export type MenuUpsertArgs = {
    /**
     * Select specific fields to fetch from the Menu
     * 
    **/
    select?: MenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MenuInclude | null
    /**
     * The filter to search for the Menu to update in case it exists.
     * 
    **/
    where: MenuWhereUniqueInput
    /**
     * In case the Menu found by the `where` argument doesn't exist, create a new Menu with this data.
     * 
    **/
    create: XOR<MenuCreateInput, MenuUncheckedCreateInput>
    /**
     * In case the Menu was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
  }


  /**
   * Menu delete
   */
  export type MenuDeleteArgs = {
    /**
     * Select specific fields to fetch from the Menu
     * 
    **/
    select?: MenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MenuInclude | null
    /**
     * Filter which Menu to delete.
     * 
    **/
    where: MenuWhereUniqueInput
  }


  /**
   * Menu deleteMany
   */
  export type MenuDeleteManyArgs = {
    /**
     * Filter which Menus to delete
     * 
    **/
    where?: MenuWhereInput
  }


  /**
   * Menu findRaw
   */
  export type MenuFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Menu aggregateRaw
   */
  export type MenuAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Menu without action
   */
  export type MenuArgs = {
    /**
     * Select specific fields to fetch from the Menu
     * 
    **/
    select?: MenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MenuInclude | null
  }



  /**
   * Model Commande
   */


  export type AggregateCommande = {
    _count: CommandeCountAggregateOutputType | null
    _min: CommandeMinAggregateOutputType | null
    _max: CommandeMaxAggregateOutputType | null
  }

  export type CommandeMinAggregateOutputType = {
    id: string | null
    date: Date | null
    clientId: string | null
    etat: Etat | null
    livreurId: string | null
  }

  export type CommandeMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    clientId: string | null
    etat: Etat | null
    livreurId: string | null
  }

  export type CommandeCountAggregateOutputType = {
    id: number
    date: number
    clientId: number
    etat: number
    livreurId: number
    _all: number
  }


  export type CommandeMinAggregateInputType = {
    id?: true
    date?: true
    clientId?: true
    etat?: true
    livreurId?: true
  }

  export type CommandeMaxAggregateInputType = {
    id?: true
    date?: true
    clientId?: true
    etat?: true
    livreurId?: true
  }

  export type CommandeCountAggregateInputType = {
    id?: true
    date?: true
    clientId?: true
    etat?: true
    livreurId?: true
    _all?: true
  }

  export type CommandeAggregateArgs = {
    /**
     * Filter which Commande to aggregate.
     * 
    **/
    where?: CommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commandes to fetch.
     * 
    **/
    orderBy?: Enumerable<CommandeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commandes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commandes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Commandes
    **/
    _count?: true | CommandeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommandeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommandeMaxAggregateInputType
  }

  export type GetCommandeAggregateType<T extends CommandeAggregateArgs> = {
        [P in keyof T & keyof AggregateCommande]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommande[P]>
      : GetScalarType<T[P], AggregateCommande[P]>
  }




  export type CommandeGroupByArgs = {
    where?: CommandeWhereInput
    orderBy?: Enumerable<CommandeOrderByWithAggregationInput>
    by: Array<CommandeScalarFieldEnum>
    having?: CommandeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommandeCountAggregateInputType | true
    _min?: CommandeMinAggregateInputType
    _max?: CommandeMaxAggregateInputType
  }


  export type CommandeGroupByOutputType = {
    id: string
    date: Date
    clientId: string
    etat: Etat
    livreurId: string | null
    _count: CommandeCountAggregateOutputType | null
    _min: CommandeMinAggregateOutputType | null
    _max: CommandeMaxAggregateOutputType | null
  }

  type GetCommandeGroupByPayload<T extends CommandeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CommandeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommandeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommandeGroupByOutputType[P]>
            : GetScalarType<T[P], CommandeGroupByOutputType[P]>
        }
      >
    >


  export type CommandeSelect = {
    details?: boolean | CommandeDetailsArgs
    id?: boolean
    date?: boolean
    clientId?: boolean
    client?: boolean | ClientArgs
    etat?: boolean
    livreurId?: boolean
    livreur?: boolean | LivreurArgs
  }

  export type CommandeInclude = {
    client?: boolean | ClientArgs
    livreur?: boolean | LivreurArgs
  }

  export type CommandeGetPayload<
    S extends boolean | null | undefined | CommandeArgs,
    U = keyof S
      > = S extends true
        ? Commande
    : S extends undefined
    ? never
    : S extends CommandeArgs | CommandeFindManyArgs
    ?'include' extends U
    ? Commande  & {
    [P in TrueKeys<S['include']>]:
        P extends 'details' ? Array < CommandeDetailsGetPayload<S['include'][P]>>  :
        P extends 'client' ? ClientGetPayload<S['include'][P]> :
        P extends 'livreur' ? LivreurGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'details' ? Array < CommandeDetailsGetPayload<S['select'][P]>>  :
        P extends 'client' ? ClientGetPayload<S['select'][P]> :
        P extends 'livreur' ? LivreurGetPayload<S['select'][P]> | null :  P extends keyof Commande ? Commande[P] : never
  } 
    : Commande
  : Commande


  type CommandeCountArgs = Merge<
    Omit<CommandeFindManyArgs, 'select' | 'include'> & {
      select?: CommandeCountAggregateInputType | true
    }
  >

  export interface CommandeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Commande that matches the filter.
     * @param {CommandeFindUniqueArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommandeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CommandeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Commande'> extends True ? CheckSelect<T, Prisma__CommandeClient<Commande>, Prisma__CommandeClient<CommandeGetPayload<T>>> : CheckSelect<T, Prisma__CommandeClient<Commande | null >, Prisma__CommandeClient<CommandeGetPayload<T> | null >>

    /**
     * Find the first Commande that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeFindFirstArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommandeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CommandeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Commande'> extends True ? CheckSelect<T, Prisma__CommandeClient<Commande>, Prisma__CommandeClient<CommandeGetPayload<T>>> : CheckSelect<T, Prisma__CommandeClient<Commande | null >, Prisma__CommandeClient<CommandeGetPayload<T> | null >>

    /**
     * Find zero or more Commandes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commandes
     * const commandes = await prisma.commande.findMany()
     * 
     * // Get first 10 Commandes
     * const commandes = await prisma.commande.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commandeWithIdOnly = await prisma.commande.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommandeFindManyArgs>(
      args?: SelectSubset<T, CommandeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Commande>>, PrismaPromise<Array<CommandeGetPayload<T>>>>

    /**
     * Create a Commande.
     * @param {CommandeCreateArgs} args - Arguments to create a Commande.
     * @example
     * // Create one Commande
     * const Commande = await prisma.commande.create({
     *   data: {
     *     // ... data to create a Commande
     *   }
     * })
     * 
    **/
    create<T extends CommandeCreateArgs>(
      args: SelectSubset<T, CommandeCreateArgs>
    ): CheckSelect<T, Prisma__CommandeClient<Commande>, Prisma__CommandeClient<CommandeGetPayload<T>>>

    /**
     * Create many Commandes.
     *     @param {CommandeCreateManyArgs} args - Arguments to create many Commandes.
     *     @example
     *     // Create many Commandes
     *     const commande = await prisma.commande.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommandeCreateManyArgs>(
      args?: SelectSubset<T, CommandeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Commande.
     * @param {CommandeDeleteArgs} args - Arguments to delete one Commande.
     * @example
     * // Delete one Commande
     * const Commande = await prisma.commande.delete({
     *   where: {
     *     // ... filter to delete one Commande
     *   }
     * })
     * 
    **/
    delete<T extends CommandeDeleteArgs>(
      args: SelectSubset<T, CommandeDeleteArgs>
    ): CheckSelect<T, Prisma__CommandeClient<Commande>, Prisma__CommandeClient<CommandeGetPayload<T>>>

    /**
     * Update one Commande.
     * @param {CommandeUpdateArgs} args - Arguments to update one Commande.
     * @example
     * // Update one Commande
     * const commande = await prisma.commande.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommandeUpdateArgs>(
      args: SelectSubset<T, CommandeUpdateArgs>
    ): CheckSelect<T, Prisma__CommandeClient<Commande>, Prisma__CommandeClient<CommandeGetPayload<T>>>

    /**
     * Delete zero or more Commandes.
     * @param {CommandeDeleteManyArgs} args - Arguments to filter Commandes to delete.
     * @example
     * // Delete a few Commandes
     * const { count } = await prisma.commande.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommandeDeleteManyArgs>(
      args?: SelectSubset<T, CommandeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commandes
     * const commande = await prisma.commande.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommandeUpdateManyArgs>(
      args: SelectSubset<T, CommandeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Commande.
     * @param {CommandeUpsertArgs} args - Arguments to update or create a Commande.
     * @example
     * // Update or create a Commande
     * const commande = await prisma.commande.upsert({
     *   create: {
     *     // ... data to create a Commande
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commande we want to update
     *   }
     * })
    **/
    upsert<T extends CommandeUpsertArgs>(
      args: SelectSubset<T, CommandeUpsertArgs>
    ): CheckSelect<T, Prisma__CommandeClient<Commande>, Prisma__CommandeClient<CommandeGetPayload<T>>>

    /**
     * Find zero or more Commandes that matches the filter.
     * @param {CommandeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const commande = await prisma.commande.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: CommandeFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Commande.
     * @param {CommandeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const commande = await prisma.commande.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: CommandeAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Commandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeCountArgs} args - Arguments to filter Commandes to count.
     * @example
     * // Count the number of Commandes
     * const count = await prisma.commande.count({
     *   where: {
     *     // ... the filter for the Commandes we want to count
     *   }
     * })
    **/
    count<T extends CommandeCountArgs>(
      args?: Subset<T, CommandeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommandeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Commande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommandeAggregateArgs>(args: Subset<T, CommandeAggregateArgs>): PrismaPromise<GetCommandeAggregateType<T>>

    /**
     * Group by Commande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeGroupByArgs} args - Group by arguments.
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
      T extends CommandeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommandeGroupByArgs['orderBy'] }
        : { orderBy?: CommandeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CommandeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommandeGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Commande.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CommandeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    details<T extends CommandeDetailsArgs = {}>(args?: Subset<T, CommandeDetailsArgs>): CheckSelect<T, PrismaPromise<Array<CommandeDetails>>, PrismaPromise<Array<CommandeDetailsGetPayload<T>>>>;

    client<T extends ClientArgs = {}>(args?: Subset<T, ClientArgs>): CheckSelect<T, Prisma__ClientClient<Client | null >, Prisma__ClientClient<ClientGetPayload<T> | null >>;

    livreur<T extends LivreurArgs = {}>(args?: Subset<T, LivreurArgs>): CheckSelect<T, Prisma__LivreurClient<Livreur | null >, Prisma__LivreurClient<LivreurGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Commande findUnique
   */
  export type CommandeFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Commande
     * 
    **/
    select?: CommandeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommandeInclude | null
    /**
     * Throw an Error if a Commande can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Commande to fetch.
     * 
    **/
    where: CommandeWhereUniqueInput
  }


  /**
   * Commande findFirst
   */
  export type CommandeFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Commande
     * 
    **/
    select?: CommandeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommandeInclude | null
    /**
     * Throw an Error if a Commande can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Commande to fetch.
     * 
    **/
    where?: CommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commandes to fetch.
     * 
    **/
    orderBy?: Enumerable<CommandeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commandes.
     * 
    **/
    cursor?: CommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commandes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commandes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commandes.
     * 
    **/
    distinct?: Enumerable<CommandeScalarFieldEnum>
  }


  /**
   * Commande findMany
   */
  export type CommandeFindManyArgs = {
    /**
     * Select specific fields to fetch from the Commande
     * 
    **/
    select?: CommandeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommandeInclude | null
    /**
     * Filter, which Commandes to fetch.
     * 
    **/
    where?: CommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commandes to fetch.
     * 
    **/
    orderBy?: Enumerable<CommandeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Commandes.
     * 
    **/
    cursor?: CommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commandes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commandes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CommandeScalarFieldEnum>
  }


  /**
   * Commande create
   */
  export type CommandeCreateArgs = {
    /**
     * Select specific fields to fetch from the Commande
     * 
    **/
    select?: CommandeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommandeInclude | null
    /**
     * The data needed to create a Commande.
     * 
    **/
    data: XOR<CommandeCreateInput, CommandeUncheckedCreateInput>
  }


  /**
   * Commande createMany
   */
  export type CommandeCreateManyArgs = {
    /**
     * The data used to create many Commandes.
     * 
    **/
    data: Enumerable<CommandeCreateManyInput>
  }


  /**
   * Commande update
   */
  export type CommandeUpdateArgs = {
    /**
     * Select specific fields to fetch from the Commande
     * 
    **/
    select?: CommandeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommandeInclude | null
    /**
     * The data needed to update a Commande.
     * 
    **/
    data: XOR<CommandeUpdateInput, CommandeUncheckedUpdateInput>
    /**
     * Choose, which Commande to update.
     * 
    **/
    where: CommandeWhereUniqueInput
  }


  /**
   * Commande updateMany
   */
  export type CommandeUpdateManyArgs = {
    /**
     * The data used to update Commandes.
     * 
    **/
    data: XOR<CommandeUpdateManyMutationInput, CommandeUncheckedUpdateManyInput>
    /**
     * Filter which Commandes to update
     * 
    **/
    where?: CommandeWhereInput
  }


  /**
   * Commande upsert
   */
  export type CommandeUpsertArgs = {
    /**
     * Select specific fields to fetch from the Commande
     * 
    **/
    select?: CommandeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommandeInclude | null
    /**
     * The filter to search for the Commande to update in case it exists.
     * 
    **/
    where: CommandeWhereUniqueInput
    /**
     * In case the Commande found by the `where` argument doesn't exist, create a new Commande with this data.
     * 
    **/
    create: XOR<CommandeCreateInput, CommandeUncheckedCreateInput>
    /**
     * In case the Commande was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CommandeUpdateInput, CommandeUncheckedUpdateInput>
  }


  /**
   * Commande delete
   */
  export type CommandeDeleteArgs = {
    /**
     * Select specific fields to fetch from the Commande
     * 
    **/
    select?: CommandeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommandeInclude | null
    /**
     * Filter which Commande to delete.
     * 
    **/
    where: CommandeWhereUniqueInput
  }


  /**
   * Commande deleteMany
   */
  export type CommandeDeleteManyArgs = {
    /**
     * Filter which Commandes to delete
     * 
    **/
    where?: CommandeWhereInput
  }


  /**
   * Commande findRaw
   */
  export type CommandeFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Commande aggregateRaw
   */
  export type CommandeAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Commande without action
   */
  export type CommandeArgs = {
    /**
     * Select specific fields to fetch from the Commande
     * 
    **/
    select?: CommandeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommandeInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    motDePasse: 'motDePasse'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    prenom: 'prenom',
    adresse: 'adresse',
    email: 'email',
    motDePasse: 'motDePasse'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const RestaurantScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    adresse: 'adresse',
    email: 'email',
    motDePasse: 'motDePasse'
  };

  export type RestaurantScalarFieldEnum = (typeof RestaurantScalarFieldEnum)[keyof typeof RestaurantScalarFieldEnum]


  export const LivreurScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    prenom: 'prenom',
    email: 'email',
    motDePasse: 'motDePasse'
  };

  export type LivreurScalarFieldEnum = (typeof LivreurScalarFieldEnum)[keyof typeof LivreurScalarFieldEnum]


  export const MenuScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    prix: 'prix',
    visible: 'visible',
    restaurantId: 'restaurantId',
    commandeIds: 'commandeIds'
  };

  export type MenuScalarFieldEnum = (typeof MenuScalarFieldEnum)[keyof typeof MenuScalarFieldEnum]


  export const CommandeScalarFieldEnum: {
    id: 'id',
    date: 'date',
    clientId: 'clientId',
    etat: 'etat',
    livreurId: 'livreurId'
  };

  export type CommandeScalarFieldEnum = (typeof CommandeScalarFieldEnum)[keyof typeof CommandeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: Enumerable<AdminWhereInput>
    OR?: Enumerable<AdminWhereInput>
    NOT?: Enumerable<AdminWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    motDePasse?: StringFilter | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
  }

  export type AdminWhereUniqueInput = {
    id?: string
  }

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AdminScalarWhereWithAggregatesInput>
    OR?: Enumerable<AdminScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AdminScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    motDePasse?: StringWithAggregatesFilter | string
  }

  export type ClientWhereInput = {
    AND?: Enumerable<ClientWhereInput>
    OR?: Enumerable<ClientWhereInput>
    NOT?: Enumerable<ClientWhereInput>
    id?: StringFilter | string
    nom?: StringFilter | string
    prenom?: StringFilter | string
    adresse?: StringFilter | string
    email?: StringFilter | string
    motDePasse?: StringFilter | string
    commandes?: CommandeListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    adresse?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    commandes?: CommandeOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = {
    id?: string
  }

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    adresse?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ClientScalarWhereWithAggregatesInput>
    OR?: Enumerable<ClientScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ClientScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    nom?: StringWithAggregatesFilter | string
    prenom?: StringWithAggregatesFilter | string
    adresse?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    motDePasse?: StringWithAggregatesFilter | string
  }

  export type RestaurantWhereInput = {
    AND?: Enumerable<RestaurantWhereInput>
    OR?: Enumerable<RestaurantWhereInput>
    NOT?: Enumerable<RestaurantWhereInput>
    id?: StringFilter | string
    nom?: StringFilter | string
    adresse?: StringFilter | string
    email?: StringFilter | string
    motDePasse?: StringFilter | string
    menus?: MenuListRelationFilter
  }

  export type RestaurantOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    adresse?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    menus?: MenuOrderByRelationAggregateInput
  }

  export type RestaurantWhereUniqueInput = {
    id?: string
  }

  export type RestaurantOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    adresse?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    _count?: RestaurantCountOrderByAggregateInput
    _max?: RestaurantMaxOrderByAggregateInput
    _min?: RestaurantMinOrderByAggregateInput
  }

  export type RestaurantScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RestaurantScalarWhereWithAggregatesInput>
    OR?: Enumerable<RestaurantScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RestaurantScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    nom?: StringWithAggregatesFilter | string
    adresse?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    motDePasse?: StringWithAggregatesFilter | string
  }

  export type LivreurWhereInput = {
    AND?: Enumerable<LivreurWhereInput>
    OR?: Enumerable<LivreurWhereInput>
    NOT?: Enumerable<LivreurWhereInput>
    id?: StringFilter | string
    nom?: StringFilter | string
    prenom?: StringFilter | string
    email?: StringFilter | string
    motDePasse?: StringFilter | string
    livraisons?: CommandeListRelationFilter
  }

  export type LivreurOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    livraisons?: CommandeOrderByRelationAggregateInput
  }

  export type LivreurWhereUniqueInput = {
    id?: string
  }

  export type LivreurOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    _count?: LivreurCountOrderByAggregateInput
    _max?: LivreurMaxOrderByAggregateInput
    _min?: LivreurMinOrderByAggregateInput
  }

  export type LivreurScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LivreurScalarWhereWithAggregatesInput>
    OR?: Enumerable<LivreurScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LivreurScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    nom?: StringWithAggregatesFilter | string
    prenom?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    motDePasse?: StringWithAggregatesFilter | string
  }

  export type MenuWhereInput = {
    AND?: Enumerable<MenuWhereInput>
    OR?: Enumerable<MenuWhereInput>
    NOT?: Enumerable<MenuWhereInput>
    id?: StringFilter | string
    nom?: StringFilter | string
    prix?: IntFilter | number
    visible?: BoolFilter | boolean
    restaurantId?: StringFilter | string
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
    commandeIds?: StringNullableListFilter
  }

  export type MenuOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    prix?: SortOrder
    visible?: SortOrder
    restaurantId?: SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
    commandeIds?: SortOrder
  }

  export type MenuWhereUniqueInput = {
    id?: string
  }

  export type MenuOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    prix?: SortOrder
    visible?: SortOrder
    restaurantId?: SortOrder
    commandeIds?: SortOrder
    _count?: MenuCountOrderByAggregateInput
    _avg?: MenuAvgOrderByAggregateInput
    _max?: MenuMaxOrderByAggregateInput
    _min?: MenuMinOrderByAggregateInput
    _sum?: MenuSumOrderByAggregateInput
  }

  export type MenuScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MenuScalarWhereWithAggregatesInput>
    OR?: Enumerable<MenuScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MenuScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    nom?: StringWithAggregatesFilter | string
    prix?: IntWithAggregatesFilter | number
    visible?: BoolWithAggregatesFilter | boolean
    restaurantId?: StringWithAggregatesFilter | string
    commandeIds?: StringNullableListFilter
  }

  export type CommandeWhereInput = {
    AND?: Enumerable<CommandeWhereInput>
    OR?: Enumerable<CommandeWhereInput>
    NOT?: Enumerable<CommandeWhereInput>
    details?: XOR<CommandeDetailsCompositeListFilter, Enumerable<CommandeDetailsObjectEqualityInput>>
    id?: StringFilter | string
    date?: DateTimeFilter | Date | string
    clientId?: StringFilter | string
    client?: XOR<ClientRelationFilter, ClientWhereInput>
    etat?: EnumEtatFilter | Etat
    livreurId?: StringNullableFilter | string | null
    livreur?: XOR<LivreurRelationFilter, LivreurWhereInput> | null
  }

  export type CommandeOrderByWithRelationInput = {
    details?: CommandeDetailsOrderByCompositeAggregateInput
    id?: SortOrder
    date?: SortOrder
    clientId?: SortOrder
    client?: ClientOrderByWithRelationInput
    etat?: SortOrder
    livreurId?: SortOrder
    livreur?: LivreurOrderByWithRelationInput
  }

  export type CommandeWhereUniqueInput = {
    id?: string
  }

  export type CommandeOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    clientId?: SortOrder
    etat?: SortOrder
    livreurId?: SortOrder
    _count?: CommandeCountOrderByAggregateInput
    _max?: CommandeMaxOrderByAggregateInput
    _min?: CommandeMinOrderByAggregateInput
  }

  export type CommandeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CommandeScalarWhereWithAggregatesInput>
    OR?: Enumerable<CommandeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CommandeScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    date?: DateTimeWithAggregatesFilter | Date | string
    clientId?: StringWithAggregatesFilter | string
    etat?: EnumEtatWithAggregatesFilter | Etat
    livreurId?: StringNullableWithAggregatesFilter | string | null
  }

  export type AdminCreateInput = {
    id?: string
    email: string
    motDePasse: string
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    email: string
    motDePasse: string
  }

  export type AdminUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateManyInput = {
    id?: string
    email: string
    motDePasse: string
  }

  export type AdminUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
  }

  export type ClientCreateInput = {
    id?: string
    nom: string
    prenom: string
    adresse: string
    email: string
    motDePasse: string
    commandes?: CommandeCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    nom: string
    prenom: string
    adresse: string
    email: string
    motDePasse: string
    commandes?: CommandeUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    commandes?: CommandeUpdateManyWithoutClientInput
  }

  export type ClientUncheckedUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    commandes?: CommandeUncheckedUpdateManyWithoutClientInput
  }

  export type ClientCreateManyInput = {
    id?: string
    nom: string
    prenom: string
    adresse: string
    email: string
    motDePasse: string
  }

  export type ClientUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
  }

  export type ClientUncheckedUpdateManyInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
  }

  export type RestaurantCreateInput = {
    id?: string
    nom: string
    adresse: string
    email: string
    motDePasse: string
    menus?: MenuCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateInput = {
    id?: string
    nom: string
    adresse: string
    email: string
    motDePasse: string
    menus?: MenuUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    menus?: MenuUpdateManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    menus?: MenuUncheckedUpdateManyWithoutRestaurantInput
  }

  export type RestaurantCreateManyInput = {
    id?: string
    nom: string
    adresse: string
    email: string
    motDePasse: string
  }

  export type RestaurantUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
  }

  export type RestaurantUncheckedUpdateManyInput = {
    nom?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
  }

  export type LivreurCreateInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    motDePasse: string
    livraisons?: CommandeCreateNestedManyWithoutLivreurInput
  }

  export type LivreurUncheckedCreateInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    motDePasse: string
    livraisons?: CommandeUncheckedCreateNestedManyWithoutLivreurInput
  }

  export type LivreurUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    livraisons?: CommandeUpdateManyWithoutLivreurInput
  }

  export type LivreurUncheckedUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    livraisons?: CommandeUncheckedUpdateManyWithoutLivreurInput
  }

  export type LivreurCreateManyInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    motDePasse: string
  }

  export type LivreurUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
  }

  export type LivreurUncheckedUpdateManyInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
  }

  export type MenuCreateInput = {
    id?: string
    nom: string
    prix: number
    visible?: boolean
    restaurant: RestaurantCreateNestedOneWithoutMenusInput
    commandeIds?: MenuCreatecommandeIdsInput | Enumerable<string>
  }

  export type MenuUncheckedCreateInput = {
    id?: string
    nom: string
    prix: number
    visible?: boolean
    restaurantId: string
    commandeIds?: MenuCreatecommandeIdsInput | Enumerable<string>
  }

  export type MenuUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prix?: IntFieldUpdateOperationsInput | number
    visible?: BoolFieldUpdateOperationsInput | boolean
    restaurant?: RestaurantUpdateOneRequiredWithoutMenusInput
    commandeIds?: MenuUpdatecommandeIdsInput | Enumerable<string>
  }

  export type MenuUncheckedUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prix?: IntFieldUpdateOperationsInput | number
    visible?: BoolFieldUpdateOperationsInput | boolean
    restaurantId?: StringFieldUpdateOperationsInput | string
    commandeIds?: MenuUpdatecommandeIdsInput | Enumerable<string>
  }

  export type MenuCreateManyInput = {
    id?: string
    nom: string
    prix: number
    visible?: boolean
    restaurantId: string
    commandeIds?: MenuCreatecommandeIdsInput | Enumerable<string>
  }

  export type MenuUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prix?: IntFieldUpdateOperationsInput | number
    visible?: BoolFieldUpdateOperationsInput | boolean
    commandeIds?: MenuUpdatecommandeIdsInput | Enumerable<string>
  }

  export type MenuUncheckedUpdateManyInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prix?: IntFieldUpdateOperationsInput | number
    visible?: BoolFieldUpdateOperationsInput | boolean
    restaurantId?: StringFieldUpdateOperationsInput | string
    commandeIds?: MenuUpdatecommandeIdsInput | Enumerable<string>
  }

  export type CommandeCreateInput = {
    details?: XOR<CommandeDetailsListCreateEnvelopeInput, Enumerable<CommandeDetailsCreateInput>>
    id?: string
    date: Date | string
    client: ClientCreateNestedOneWithoutCommandesInput
    etat?: Etat
    livreur?: LivreurCreateNestedOneWithoutLivraisonsInput
  }

  export type CommandeUncheckedCreateInput = {
    details?: XOR<CommandeDetailsListCreateEnvelopeInput, Enumerable<CommandeDetailsCreateInput>>
    id?: string
    date: Date | string
    clientId: string
    etat?: Etat
    livreurId?: string | null
  }

  export type CommandeUpdateInput = {
    details?: XOR<CommandeDetailsListUpdateEnvelopeInput, Enumerable<CommandeDetailsCreateInput>>
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutCommandesInput
    etat?: EnumEtatFieldUpdateOperationsInput | Etat
    livreur?: LivreurUpdateOneWithoutLivraisonsInput
  }

  export type CommandeUncheckedUpdateInput = {
    details?: XOR<CommandeDetailsListUpdateEnvelopeInput, Enumerable<CommandeDetailsCreateInput>>
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    etat?: EnumEtatFieldUpdateOperationsInput | Etat
    livreurId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommandeCreateManyInput = {
    details?: XOR<CommandeDetailsListCreateEnvelopeInput, Enumerable<CommandeDetailsCreateInput>>
    id?: string
    date: Date | string
    clientId: string
    etat?: Etat
    livreurId?: string | null
  }

  export type CommandeUpdateManyMutationInput = {
    details?: XOR<CommandeDetailsListUpdateEnvelopeInput, Enumerable<CommandeDetailsCreateInput>>
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    etat?: EnumEtatFieldUpdateOperationsInput | Etat
  }

  export type CommandeUncheckedUpdateManyInput = {
    details?: XOR<CommandeDetailsListUpdateEnvelopeInput, Enumerable<CommandeDetailsCreateInput>>
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    etat?: EnumEtatFieldUpdateOperationsInput | Etat
    livreurId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type CommandeListRelationFilter = {
    every?: CommandeWhereInput
    some?: CommandeWhereInput
    none?: CommandeWhereInput
  }

  export type CommandeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    adresse?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    adresse?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    adresse?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
  }

  export type MenuListRelationFilter = {
    every?: MenuWhereInput
    some?: MenuWhereInput
    none?: MenuWhereInput
  }

  export type MenuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RestaurantCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    adresse?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
  }

  export type RestaurantMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    adresse?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
  }

  export type RestaurantMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    adresse?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
  }

  export type LivreurCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
  }

  export type LivreurMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
  }

  export type LivreurMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type RestaurantRelationFilter = {
    is?: RestaurantWhereInput
    isNot?: RestaurantWhereInput
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type MenuCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prix?: SortOrder
    visible?: SortOrder
    restaurantId?: SortOrder
    commandeIds?: SortOrder
  }

  export type MenuAvgOrderByAggregateInput = {
    prix?: SortOrder
  }

  export type MenuMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prix?: SortOrder
    visible?: SortOrder
    restaurantId?: SortOrder
  }

  export type MenuMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prix?: SortOrder
    visible?: SortOrder
    restaurantId?: SortOrder
  }

  export type MenuSumOrderByAggregateInput = {
    prix?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type CommandeDetailsCompositeListFilter = {
    equals?: Enumerable<CommandeDetailsObjectEqualityInput>
    every?: CommandeDetailsWhereInput
    some?: CommandeDetailsWhereInput
    none?: CommandeDetailsWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type CommandeDetailsObjectEqualityInput = {
    menuId: string
    quantite: number
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type ClientRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type EnumEtatFilter = {
    equals?: Etat
    in?: Enumerable<Etat>
    notIn?: Enumerable<Etat>
    not?: NestedEnumEtatFilter | Etat
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type LivreurRelationFilter = {
    is?: LivreurWhereInput | null
    isNot?: LivreurWhereInput | null
  }

  export type CommandeDetailsOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type CommandeCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    clientId?: SortOrder
    etat?: SortOrder
    livreurId?: SortOrder
  }

  export type CommandeMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    clientId?: SortOrder
    etat?: SortOrder
    livreurId?: SortOrder
  }

  export type CommandeMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    clientId?: SortOrder
    etat?: SortOrder
    livreurId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type EnumEtatWithAggregatesFilter = {
    equals?: Etat
    in?: Enumerable<Etat>
    notIn?: Enumerable<Etat>
    not?: NestedEnumEtatWithAggregatesFilter | Etat
    _count?: NestedIntFilter
    _min?: NestedEnumEtatFilter
    _max?: NestedEnumEtatFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CommandeCreateNestedManyWithoutClientInput = {
    create?: XOR<Enumerable<CommandeCreateWithoutClientInput>, Enumerable<CommandeUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<CommandeCreateOrConnectWithoutClientInput>
    createMany?: CommandeCreateManyClientInputEnvelope
    connect?: Enumerable<CommandeWhereUniqueInput>
  }

  export type CommandeUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<Enumerable<CommandeCreateWithoutClientInput>, Enumerable<CommandeUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<CommandeCreateOrConnectWithoutClientInput>
    createMany?: CommandeCreateManyClientInputEnvelope
    connect?: Enumerable<CommandeWhereUniqueInput>
  }

  export type CommandeUpdateManyWithoutClientInput = {
    create?: XOR<Enumerable<CommandeCreateWithoutClientInput>, Enumerable<CommandeUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<CommandeCreateOrConnectWithoutClientInput>
    upsert?: Enumerable<CommandeUpsertWithWhereUniqueWithoutClientInput>
    createMany?: CommandeCreateManyClientInputEnvelope
    set?: Enumerable<CommandeWhereUniqueInput>
    disconnect?: Enumerable<CommandeWhereUniqueInput>
    delete?: Enumerable<CommandeWhereUniqueInput>
    connect?: Enumerable<CommandeWhereUniqueInput>
    update?: Enumerable<CommandeUpdateWithWhereUniqueWithoutClientInput>
    updateMany?: Enumerable<CommandeUpdateManyWithWhereWithoutClientInput>
    deleteMany?: Enumerable<CommandeScalarWhereInput>
  }

  export type CommandeUncheckedUpdateManyWithoutClientInput = {
    create?: XOR<Enumerable<CommandeCreateWithoutClientInput>, Enumerable<CommandeUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<CommandeCreateOrConnectWithoutClientInput>
    upsert?: Enumerable<CommandeUpsertWithWhereUniqueWithoutClientInput>
    createMany?: CommandeCreateManyClientInputEnvelope
    set?: Enumerable<CommandeWhereUniqueInput>
    disconnect?: Enumerable<CommandeWhereUniqueInput>
    delete?: Enumerable<CommandeWhereUniqueInput>
    connect?: Enumerable<CommandeWhereUniqueInput>
    update?: Enumerable<CommandeUpdateWithWhereUniqueWithoutClientInput>
    updateMany?: Enumerable<CommandeUpdateManyWithWhereWithoutClientInput>
    deleteMany?: Enumerable<CommandeScalarWhereInput>
  }

  export type MenuCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<Enumerable<MenuCreateWithoutRestaurantInput>, Enumerable<MenuUncheckedCreateWithoutRestaurantInput>>
    connectOrCreate?: Enumerable<MenuCreateOrConnectWithoutRestaurantInput>
    createMany?: MenuCreateManyRestaurantInputEnvelope
    connect?: Enumerable<MenuWhereUniqueInput>
  }

  export type MenuUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<Enumerable<MenuCreateWithoutRestaurantInput>, Enumerable<MenuUncheckedCreateWithoutRestaurantInput>>
    connectOrCreate?: Enumerable<MenuCreateOrConnectWithoutRestaurantInput>
    createMany?: MenuCreateManyRestaurantInputEnvelope
    connect?: Enumerable<MenuWhereUniqueInput>
  }

  export type MenuUpdateManyWithoutRestaurantInput = {
    create?: XOR<Enumerable<MenuCreateWithoutRestaurantInput>, Enumerable<MenuUncheckedCreateWithoutRestaurantInput>>
    connectOrCreate?: Enumerable<MenuCreateOrConnectWithoutRestaurantInput>
    upsert?: Enumerable<MenuUpsertWithWhereUniqueWithoutRestaurantInput>
    createMany?: MenuCreateManyRestaurantInputEnvelope
    set?: Enumerable<MenuWhereUniqueInput>
    disconnect?: Enumerable<MenuWhereUniqueInput>
    delete?: Enumerable<MenuWhereUniqueInput>
    connect?: Enumerable<MenuWhereUniqueInput>
    update?: Enumerable<MenuUpdateWithWhereUniqueWithoutRestaurantInput>
    updateMany?: Enumerable<MenuUpdateManyWithWhereWithoutRestaurantInput>
    deleteMany?: Enumerable<MenuScalarWhereInput>
  }

  export type MenuUncheckedUpdateManyWithoutRestaurantInput = {
    create?: XOR<Enumerable<MenuCreateWithoutRestaurantInput>, Enumerable<MenuUncheckedCreateWithoutRestaurantInput>>
    connectOrCreate?: Enumerable<MenuCreateOrConnectWithoutRestaurantInput>
    upsert?: Enumerable<MenuUpsertWithWhereUniqueWithoutRestaurantInput>
    createMany?: MenuCreateManyRestaurantInputEnvelope
    set?: Enumerable<MenuWhereUniqueInput>
    disconnect?: Enumerable<MenuWhereUniqueInput>
    delete?: Enumerable<MenuWhereUniqueInput>
    connect?: Enumerable<MenuWhereUniqueInput>
    update?: Enumerable<MenuUpdateWithWhereUniqueWithoutRestaurantInput>
    updateMany?: Enumerable<MenuUpdateManyWithWhereWithoutRestaurantInput>
    deleteMany?: Enumerable<MenuScalarWhereInput>
  }

  export type CommandeCreateNestedManyWithoutLivreurInput = {
    create?: XOR<Enumerable<CommandeCreateWithoutLivreurInput>, Enumerable<CommandeUncheckedCreateWithoutLivreurInput>>
    connectOrCreate?: Enumerable<CommandeCreateOrConnectWithoutLivreurInput>
    createMany?: CommandeCreateManyLivreurInputEnvelope
    connect?: Enumerable<CommandeWhereUniqueInput>
  }

  export type CommandeUncheckedCreateNestedManyWithoutLivreurInput = {
    create?: XOR<Enumerable<CommandeCreateWithoutLivreurInput>, Enumerable<CommandeUncheckedCreateWithoutLivreurInput>>
    connectOrCreate?: Enumerable<CommandeCreateOrConnectWithoutLivreurInput>
    createMany?: CommandeCreateManyLivreurInputEnvelope
    connect?: Enumerable<CommandeWhereUniqueInput>
  }

  export type CommandeUpdateManyWithoutLivreurInput = {
    create?: XOR<Enumerable<CommandeCreateWithoutLivreurInput>, Enumerable<CommandeUncheckedCreateWithoutLivreurInput>>
    connectOrCreate?: Enumerable<CommandeCreateOrConnectWithoutLivreurInput>
    upsert?: Enumerable<CommandeUpsertWithWhereUniqueWithoutLivreurInput>
    createMany?: CommandeCreateManyLivreurInputEnvelope
    set?: Enumerable<CommandeWhereUniqueInput>
    disconnect?: Enumerable<CommandeWhereUniqueInput>
    delete?: Enumerable<CommandeWhereUniqueInput>
    connect?: Enumerable<CommandeWhereUniqueInput>
    update?: Enumerable<CommandeUpdateWithWhereUniqueWithoutLivreurInput>
    updateMany?: Enumerable<CommandeUpdateManyWithWhereWithoutLivreurInput>
    deleteMany?: Enumerable<CommandeScalarWhereInput>
  }

  export type CommandeUncheckedUpdateManyWithoutLivreurInput = {
    create?: XOR<Enumerable<CommandeCreateWithoutLivreurInput>, Enumerable<CommandeUncheckedCreateWithoutLivreurInput>>
    connectOrCreate?: Enumerable<CommandeCreateOrConnectWithoutLivreurInput>
    upsert?: Enumerable<CommandeUpsertWithWhereUniqueWithoutLivreurInput>
    createMany?: CommandeCreateManyLivreurInputEnvelope
    set?: Enumerable<CommandeWhereUniqueInput>
    disconnect?: Enumerable<CommandeWhereUniqueInput>
    delete?: Enumerable<CommandeWhereUniqueInput>
    connect?: Enumerable<CommandeWhereUniqueInput>
    update?: Enumerable<CommandeUpdateWithWhereUniqueWithoutLivreurInput>
    updateMany?: Enumerable<CommandeUpdateManyWithWhereWithoutLivreurInput>
    deleteMany?: Enumerable<CommandeScalarWhereInput>
  }

  export type RestaurantCreateNestedOneWithoutMenusInput = {
    create?: XOR<RestaurantCreateWithoutMenusInput, RestaurantUncheckedCreateWithoutMenusInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutMenusInput
    connect?: RestaurantWhereUniqueInput
  }

  export type MenuCreatecommandeIdsInput = {
    set: Enumerable<string>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RestaurantUpdateOneRequiredWithoutMenusInput = {
    create?: XOR<RestaurantCreateWithoutMenusInput, RestaurantUncheckedCreateWithoutMenusInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutMenusInput
    upsert?: RestaurantUpsertWithoutMenusInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<RestaurantUpdateWithoutMenusInput, RestaurantUncheckedUpdateWithoutMenusInput>
  }

  export type MenuUpdatecommandeIdsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type CommandeDetailsListCreateEnvelopeInput = {
    set?: Enumerable<CommandeDetailsCreateInput>
  }

  export type CommandeDetailsCreateInput = {
    menuId: string
    quantite: number
  }

  export type ClientCreateNestedOneWithoutCommandesInput = {
    create?: XOR<ClientCreateWithoutCommandesInput, ClientUncheckedCreateWithoutCommandesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutCommandesInput
    connect?: ClientWhereUniqueInput
  }

  export type LivreurCreateNestedOneWithoutLivraisonsInput = {
    create?: XOR<LivreurCreateWithoutLivraisonsInput, LivreurUncheckedCreateWithoutLivraisonsInput>
    connectOrCreate?: LivreurCreateOrConnectWithoutLivraisonsInput
    connect?: LivreurWhereUniqueInput
  }

  export type CommandeDetailsListUpdateEnvelopeInput = {
    set?: Enumerable<CommandeDetailsCreateInput>
    push?: Enumerable<CommandeDetailsCreateInput>
    updateMany?: CommandeDetailsUpdateManyInput
    deleteMany?: CommandeDetailsDeleteManyInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClientUpdateOneRequiredWithoutCommandesInput = {
    create?: XOR<ClientCreateWithoutCommandesInput, ClientUncheckedCreateWithoutCommandesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutCommandesInput
    upsert?: ClientUpsertWithoutCommandesInput
    connect?: ClientWhereUniqueInput
    update?: XOR<ClientUpdateWithoutCommandesInput, ClientUncheckedUpdateWithoutCommandesInput>
  }

  export type EnumEtatFieldUpdateOperationsInput = {
    set?: Etat
  }

  export type LivreurUpdateOneWithoutLivraisonsInput = {
    create?: XOR<LivreurCreateWithoutLivraisonsInput, LivreurUncheckedCreateWithoutLivraisonsInput>
    connectOrCreate?: LivreurCreateOrConnectWithoutLivraisonsInput
    upsert?: LivreurUpsertWithoutLivraisonsInput
    disconnect?: boolean
    delete?: boolean
    connect?: LivreurWhereUniqueInput
    update?: XOR<LivreurUpdateWithoutLivraisonsInput, LivreurUncheckedUpdateWithoutLivraisonsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type CommandeDetailsWhereInput = {
    AND?: Enumerable<CommandeDetailsWhereInput>
    OR?: Enumerable<CommandeDetailsWhereInput>
    NOT?: Enumerable<CommandeDetailsWhereInput>
    menuId?: StringFilter | string
    quantite?: IntFilter | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedEnumEtatFilter = {
    equals?: Etat
    in?: Enumerable<Etat>
    notIn?: Enumerable<Etat>
    not?: NestedEnumEtatFilter | Etat
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedEnumEtatWithAggregatesFilter = {
    equals?: Etat
    in?: Enumerable<Etat>
    notIn?: Enumerable<Etat>
    not?: NestedEnumEtatWithAggregatesFilter | Etat
    _count?: NestedIntFilter
    _min?: NestedEnumEtatFilter
    _max?: NestedEnumEtatFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
    isSet?: boolean
  }

  export type CommandeCreateWithoutClientInput = {
    details?: XOR<CommandeDetailsListCreateEnvelopeInput, Enumerable<CommandeDetailsCreateInput>>
    id?: string
    date: Date | string
    etat?: Etat
    livreur?: LivreurCreateNestedOneWithoutLivraisonsInput
  }

  export type CommandeUncheckedCreateWithoutClientInput = {
    details?: XOR<CommandeDetailsListCreateEnvelopeInput, Enumerable<CommandeDetailsCreateInput>>
    id?: string
    date: Date | string
    etat?: Etat
    livreurId?: string | null
  }

  export type CommandeCreateOrConnectWithoutClientInput = {
    where: CommandeWhereUniqueInput
    create: XOR<CommandeCreateWithoutClientInput, CommandeUncheckedCreateWithoutClientInput>
  }

  export type CommandeCreateManyClientInputEnvelope = {
    data: Enumerable<CommandeCreateManyClientInput>
  }

  export type CommandeUpsertWithWhereUniqueWithoutClientInput = {
    where: CommandeWhereUniqueInput
    update: XOR<CommandeUpdateWithoutClientInput, CommandeUncheckedUpdateWithoutClientInput>
    create: XOR<CommandeCreateWithoutClientInput, CommandeUncheckedCreateWithoutClientInput>
  }

  export type CommandeUpdateWithWhereUniqueWithoutClientInput = {
    where: CommandeWhereUniqueInput
    data: XOR<CommandeUpdateWithoutClientInput, CommandeUncheckedUpdateWithoutClientInput>
  }

  export type CommandeUpdateManyWithWhereWithoutClientInput = {
    where: CommandeScalarWhereInput
    data: XOR<CommandeUpdateManyMutationInput, CommandeUncheckedUpdateManyWithoutCommandesInput>
  }

  export type CommandeScalarWhereInput = {
    AND?: Enumerable<CommandeScalarWhereInput>
    OR?: Enumerable<CommandeScalarWhereInput>
    NOT?: Enumerable<CommandeScalarWhereInput>
    id?: StringFilter | string
    date?: DateTimeFilter | Date | string
    clientId?: StringFilter | string
    etat?: EnumEtatFilter | Etat
    livreurId?: StringNullableFilter | string | null
  }

  export type MenuCreateWithoutRestaurantInput = {
    id?: string
    nom: string
    prix: number
    visible?: boolean
    commandeIds?: MenuCreatecommandeIdsInput | Enumerable<string>
  }

  export type MenuUncheckedCreateWithoutRestaurantInput = {
    id?: string
    nom: string
    prix: number
    visible?: boolean
    commandeIds?: MenuCreatecommandeIdsInput | Enumerable<string>
  }

  export type MenuCreateOrConnectWithoutRestaurantInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutRestaurantInput, MenuUncheckedCreateWithoutRestaurantInput>
  }

  export type MenuCreateManyRestaurantInputEnvelope = {
    data: Enumerable<MenuCreateManyRestaurantInput>
  }

  export type MenuUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: MenuWhereUniqueInput
    update: XOR<MenuUpdateWithoutRestaurantInput, MenuUncheckedUpdateWithoutRestaurantInput>
    create: XOR<MenuCreateWithoutRestaurantInput, MenuUncheckedCreateWithoutRestaurantInput>
  }

  export type MenuUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: MenuWhereUniqueInput
    data: XOR<MenuUpdateWithoutRestaurantInput, MenuUncheckedUpdateWithoutRestaurantInput>
  }

  export type MenuUpdateManyWithWhereWithoutRestaurantInput = {
    where: MenuScalarWhereInput
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyWithoutMenusInput>
  }

  export type MenuScalarWhereInput = {
    AND?: Enumerable<MenuScalarWhereInput>
    OR?: Enumerable<MenuScalarWhereInput>
    NOT?: Enumerable<MenuScalarWhereInput>
    id?: StringFilter | string
    nom?: StringFilter | string
    prix?: IntFilter | number
    visible?: BoolFilter | boolean
    restaurantId?: StringFilter | string
    commandeIds?: StringNullableListFilter
  }

  export type CommandeCreateWithoutLivreurInput = {
    details?: XOR<CommandeDetailsListCreateEnvelopeInput, Enumerable<CommandeDetailsCreateInput>>
    id?: string
    date: Date | string
    client: ClientCreateNestedOneWithoutCommandesInput
    etat?: Etat
  }

  export type CommandeUncheckedCreateWithoutLivreurInput = {
    details?: XOR<CommandeDetailsListCreateEnvelopeInput, Enumerable<CommandeDetailsCreateInput>>
    id?: string
    date: Date | string
    clientId: string
    etat?: Etat
  }

  export type CommandeCreateOrConnectWithoutLivreurInput = {
    where: CommandeWhereUniqueInput
    create: XOR<CommandeCreateWithoutLivreurInput, CommandeUncheckedCreateWithoutLivreurInput>
  }

  export type CommandeCreateManyLivreurInputEnvelope = {
    data: Enumerable<CommandeCreateManyLivreurInput>
  }

  export type CommandeUpsertWithWhereUniqueWithoutLivreurInput = {
    where: CommandeWhereUniqueInput
    update: XOR<CommandeUpdateWithoutLivreurInput, CommandeUncheckedUpdateWithoutLivreurInput>
    create: XOR<CommandeCreateWithoutLivreurInput, CommandeUncheckedCreateWithoutLivreurInput>
  }

  export type CommandeUpdateWithWhereUniqueWithoutLivreurInput = {
    where: CommandeWhereUniqueInput
    data: XOR<CommandeUpdateWithoutLivreurInput, CommandeUncheckedUpdateWithoutLivreurInput>
  }

  export type CommandeUpdateManyWithWhereWithoutLivreurInput = {
    where: CommandeScalarWhereInput
    data: XOR<CommandeUpdateManyMutationInput, CommandeUncheckedUpdateManyWithoutLivraisonsInput>
  }

  export type RestaurantCreateWithoutMenusInput = {
    id?: string
    nom: string
    adresse: string
    email: string
    motDePasse: string
  }

  export type RestaurantUncheckedCreateWithoutMenusInput = {
    id?: string
    nom: string
    adresse: string
    email: string
    motDePasse: string
  }

  export type RestaurantCreateOrConnectWithoutMenusInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutMenusInput, RestaurantUncheckedCreateWithoutMenusInput>
  }

  export type RestaurantUpsertWithoutMenusInput = {
    update: XOR<RestaurantUpdateWithoutMenusInput, RestaurantUncheckedUpdateWithoutMenusInput>
    create: XOR<RestaurantCreateWithoutMenusInput, RestaurantUncheckedCreateWithoutMenusInput>
  }

  export type RestaurantUpdateWithoutMenusInput = {
    nom?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
  }

  export type RestaurantUncheckedUpdateWithoutMenusInput = {
    nom?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
  }

  export type ClientCreateWithoutCommandesInput = {
    id?: string
    nom: string
    prenom: string
    adresse: string
    email: string
    motDePasse: string
  }

  export type ClientUncheckedCreateWithoutCommandesInput = {
    id?: string
    nom: string
    prenom: string
    adresse: string
    email: string
    motDePasse: string
  }

  export type ClientCreateOrConnectWithoutCommandesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutCommandesInput, ClientUncheckedCreateWithoutCommandesInput>
  }

  export type LivreurCreateWithoutLivraisonsInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    motDePasse: string
  }

  export type LivreurUncheckedCreateWithoutLivraisonsInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    motDePasse: string
  }

  export type LivreurCreateOrConnectWithoutLivraisonsInput = {
    where: LivreurWhereUniqueInput
    create: XOR<LivreurCreateWithoutLivraisonsInput, LivreurUncheckedCreateWithoutLivraisonsInput>
  }

  export type CommandeDetailsUpdateManyInput = {
    where: CommandeDetailsWhereInput
    data: CommandeDetailsUpdateInput
  }

  export type CommandeDetailsDeleteManyInput = {
    where: CommandeDetailsWhereInput
  }

  export type ClientUpsertWithoutCommandesInput = {
    update: XOR<ClientUpdateWithoutCommandesInput, ClientUncheckedUpdateWithoutCommandesInput>
    create: XOR<ClientCreateWithoutCommandesInput, ClientUncheckedCreateWithoutCommandesInput>
  }

  export type ClientUpdateWithoutCommandesInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
  }

  export type ClientUncheckedUpdateWithoutCommandesInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
  }

  export type LivreurUpsertWithoutLivraisonsInput = {
    update: XOR<LivreurUpdateWithoutLivraisonsInput, LivreurUncheckedUpdateWithoutLivraisonsInput>
    create: XOR<LivreurCreateWithoutLivraisonsInput, LivreurUncheckedCreateWithoutLivraisonsInput>
  }

  export type LivreurUpdateWithoutLivraisonsInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
  }

  export type LivreurUncheckedUpdateWithoutLivraisonsInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
  }

  export type CommandeCreateManyClientInput = {
    details?: XOR<CommandeDetailsListCreateEnvelopeInput, Enumerable<CommandeDetailsCreateInput>>
    id?: string
    date: Date | string
    etat?: Etat
    livreurId?: string | null
  }

  export type CommandeUpdateWithoutClientInput = {
    details?: XOR<CommandeDetailsListUpdateEnvelopeInput, Enumerable<CommandeDetailsCreateInput>>
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    etat?: EnumEtatFieldUpdateOperationsInput | Etat
    livreur?: LivreurUpdateOneWithoutLivraisonsInput
  }

  export type CommandeUncheckedUpdateWithoutClientInput = {
    details?: XOR<CommandeDetailsListUpdateEnvelopeInput, Enumerable<CommandeDetailsCreateInput>>
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    etat?: EnumEtatFieldUpdateOperationsInput | Etat
    livreurId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommandeUncheckedUpdateManyWithoutCommandesInput = {
    details?: XOR<CommandeDetailsListUpdateEnvelopeInput, Enumerable<CommandeDetailsCreateInput>>
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    etat?: EnumEtatFieldUpdateOperationsInput | Etat
    livreurId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MenuCreateManyRestaurantInput = {
    id?: string
    nom: string
    prix: number
    visible?: boolean
    commandeIds?: MenuCreatecommandeIdsInput | Enumerable<string>
  }

  export type MenuUpdateWithoutRestaurantInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prix?: IntFieldUpdateOperationsInput | number
    visible?: BoolFieldUpdateOperationsInput | boolean
    commandeIds?: MenuUpdatecommandeIdsInput | Enumerable<string>
  }

  export type MenuUncheckedUpdateWithoutRestaurantInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prix?: IntFieldUpdateOperationsInput | number
    visible?: BoolFieldUpdateOperationsInput | boolean
    commandeIds?: MenuUpdatecommandeIdsInput | Enumerable<string>
  }

  export type MenuUncheckedUpdateManyWithoutMenusInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prix?: IntFieldUpdateOperationsInput | number
    visible?: BoolFieldUpdateOperationsInput | boolean
    commandeIds?: MenuUpdatecommandeIdsInput | Enumerable<string>
  }

  export type CommandeCreateManyLivreurInput = {
    details?: XOR<CommandeDetailsListCreateEnvelopeInput, Enumerable<CommandeDetailsCreateInput>>
    id?: string
    date: Date | string
    clientId: string
    etat?: Etat
  }

  export type CommandeUpdateWithoutLivreurInput = {
    details?: XOR<CommandeDetailsListUpdateEnvelopeInput, Enumerable<CommandeDetailsCreateInput>>
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutCommandesInput
    etat?: EnumEtatFieldUpdateOperationsInput | Etat
  }

  export type CommandeUncheckedUpdateWithoutLivreurInput = {
    details?: XOR<CommandeDetailsListUpdateEnvelopeInput, Enumerable<CommandeDetailsCreateInput>>
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    etat?: EnumEtatFieldUpdateOperationsInput | Etat
  }

  export type CommandeUncheckedUpdateManyWithoutLivraisonsInput = {
    details?: XOR<CommandeDetailsListUpdateEnvelopeInput, Enumerable<CommandeDetailsCreateInput>>
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    etat?: EnumEtatFieldUpdateOperationsInput | Etat
  }

  export type CommandeDetailsUpdateInput = {
    menuId?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
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
  export const dmmf: runtime.DMMF.Document;
}