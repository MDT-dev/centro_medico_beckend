
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PatientProfile
 * 
 */
export type PatientProfile = $Result.DefaultSelection<Prisma.$PatientProfilePayload>
/**
 * Model DoctorProfile
 * 
 */
export type DoctorProfile = $Result.DefaultSelection<Prisma.$DoctorProfilePayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model PatientRecord
 * 
 */
export type PatientRecord = $Result.DefaultSelection<Prisma.$PatientRecordPayload>
/**
 * Model Prescription
 * 
 */
export type Prescription = $Result.DefaultSelection<Prisma.$PrescriptionPayload>
/**
 * Model DoctorAvailability
 * 
 */
export type DoctorAvailability = $Result.DefaultSelection<Prisma.$DoctorAvailabilityPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Medication
 * 
 */
export type Medication = $Result.DefaultSelection<Prisma.$MedicationPayload>
/**
 * Model Inventory
 * 
 */
export type Inventory = $Result.DefaultSelection<Prisma.$InventoryPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  GERENTE: 'GERENTE',
  MEDICO: 'MEDICO',
  RECEPCIONISTA: 'RECEPCIONISTA',
  PACIENTE: 'PACIENTE'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const AppointmentStatus: {
  SCHEDULED: 'SCHEDULED',
  CONFIRMED: 'CONFIRMED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  NO_SHOW: 'NO_SHOW'
};

export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus]


export const PrescriptionStatus: {
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type PrescriptionStatus = (typeof PrescriptionStatus)[keyof typeof PrescriptionStatus]


export const InvoiceStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  OVERDUE: 'OVERDUE',
  CANCELLED: 'CANCELLED'
};

export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type AppointmentStatus = $Enums.AppointmentStatus

export const AppointmentStatus: typeof $Enums.AppointmentStatus

export type PrescriptionStatus = $Enums.PrescriptionStatus

export const PrescriptionStatus: typeof $Enums.PrescriptionStatus

export type InvoiceStatus = $Enums.InvoiceStatus

export const InvoiceStatus: typeof $Enums.InvoiceStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patientProfile`: Exposes CRUD operations for the **PatientProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PatientProfiles
    * const patientProfiles = await prisma.patientProfile.findMany()
    * ```
    */
  get patientProfile(): Prisma.PatientProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctorProfile`: Exposes CRUD operations for the **DoctorProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoctorProfiles
    * const doctorProfiles = await prisma.doctorProfile.findMany()
    * ```
    */
  get doctorProfile(): Prisma.DoctorProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patientRecord`: Exposes CRUD operations for the **PatientRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PatientRecords
    * const patientRecords = await prisma.patientRecord.findMany()
    * ```
    */
  get patientRecord(): Prisma.PatientRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prescription`: Exposes CRUD operations for the **Prescription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prescriptions
    * const prescriptions = await prisma.prescription.findMany()
    * ```
    */
  get prescription(): Prisma.PrescriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctorAvailability`: Exposes CRUD operations for the **DoctorAvailability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoctorAvailabilities
    * const doctorAvailabilities = await prisma.doctorAvailability.findMany()
    * ```
    */
  get doctorAvailability(): Prisma.DoctorAvailabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medication`: Exposes CRUD operations for the **Medication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medications
    * const medications = await prisma.medication.findMany()
    * ```
    */
  get medication(): Prisma.MedicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **Inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.InventoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
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
    User: 'User',
    PatientProfile: 'PatientProfile',
    DoctorProfile: 'DoctorProfile',
    Appointment: 'Appointment',
    PatientRecord: 'PatientRecord',
    Prescription: 'Prescription',
    DoctorAvailability: 'DoctorAvailability',
    Invoice: 'Invoice',
    Payment: 'Payment',
    Medication: 'Medication',
    Inventory: 'Inventory',
    AuditLog: 'AuditLog'
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
      modelProps: "user" | "patientProfile" | "doctorProfile" | "appointment" | "patientRecord" | "prescription" | "doctorAvailability" | "invoice" | "payment" | "medication" | "inventory" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PatientProfile: {
        payload: Prisma.$PatientProfilePayload<ExtArgs>
        fields: Prisma.PatientProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientProfilePayload>
          }
          findFirst: {
            args: Prisma.PatientProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientProfilePayload>
          }
          findMany: {
            args: Prisma.PatientProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientProfilePayload>[]
          }
          create: {
            args: Prisma.PatientProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientProfilePayload>
          }
          createMany: {
            args: Prisma.PatientProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientProfilePayload>[]
          }
          delete: {
            args: Prisma.PatientProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientProfilePayload>
          }
          update: {
            args: Prisma.PatientProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientProfilePayload>
          }
          deleteMany: {
            args: Prisma.PatientProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientProfilePayload>[]
          }
          upsert: {
            args: Prisma.PatientProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientProfilePayload>
          }
          aggregate: {
            args: Prisma.PatientProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatientProfile>
          }
          groupBy: {
            args: Prisma.PatientProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientProfileCountArgs<ExtArgs>
            result: $Utils.Optional<PatientProfileCountAggregateOutputType> | number
          }
        }
      }
      DoctorProfile: {
        payload: Prisma.$DoctorProfilePayload<ExtArgs>
        fields: Prisma.DoctorProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>
          }
          findFirst: {
            args: Prisma.DoctorProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>
          }
          findMany: {
            args: Prisma.DoctorProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>[]
          }
          create: {
            args: Prisma.DoctorProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>
          }
          createMany: {
            args: Prisma.DoctorProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>[]
          }
          delete: {
            args: Prisma.DoctorProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>
          }
          update: {
            args: Prisma.DoctorProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>
          }
          deleteMany: {
            args: Prisma.DoctorProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>[]
          }
          upsert: {
            args: Prisma.DoctorProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>
          }
          aggregate: {
            args: Prisma.DoctorProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctorProfile>
          }
          groupBy: {
            args: Prisma.DoctorProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorProfileCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorProfileCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      PatientRecord: {
        payload: Prisma.$PatientRecordPayload<ExtArgs>
        fields: Prisma.PatientRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientRecordPayload>
          }
          findFirst: {
            args: Prisma.PatientRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientRecordPayload>
          }
          findMany: {
            args: Prisma.PatientRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientRecordPayload>[]
          }
          create: {
            args: Prisma.PatientRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientRecordPayload>
          }
          createMany: {
            args: Prisma.PatientRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientRecordPayload>[]
          }
          delete: {
            args: Prisma.PatientRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientRecordPayload>
          }
          update: {
            args: Prisma.PatientRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientRecordPayload>
          }
          deleteMany: {
            args: Prisma.PatientRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientRecordPayload>[]
          }
          upsert: {
            args: Prisma.PatientRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientRecordPayload>
          }
          aggregate: {
            args: Prisma.PatientRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatientRecord>
          }
          groupBy: {
            args: Prisma.PatientRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientRecordCountArgs<ExtArgs>
            result: $Utils.Optional<PatientRecordCountAggregateOutputType> | number
          }
        }
      }
      Prescription: {
        payload: Prisma.$PrescriptionPayload<ExtArgs>
        fields: Prisma.PrescriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrescriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrescriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          findFirst: {
            args: Prisma.PrescriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrescriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          findMany: {
            args: Prisma.PrescriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>[]
          }
          create: {
            args: Prisma.PrescriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          createMany: {
            args: Prisma.PrescriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrescriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>[]
          }
          delete: {
            args: Prisma.PrescriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          update: {
            args: Prisma.PrescriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          deleteMany: {
            args: Prisma.PrescriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrescriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrescriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>[]
          }
          upsert: {
            args: Prisma.PrescriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          aggregate: {
            args: Prisma.PrescriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrescription>
          }
          groupBy: {
            args: Prisma.PrescriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrescriptionCountArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionCountAggregateOutputType> | number
          }
        }
      }
      DoctorAvailability: {
        payload: Prisma.$DoctorAvailabilityPayload<ExtArgs>
        fields: Prisma.DoctorAvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorAvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorAvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>
          }
          findFirst: {
            args: Prisma.DoctorAvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorAvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>
          }
          findMany: {
            args: Prisma.DoctorAvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>[]
          }
          create: {
            args: Prisma.DoctorAvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>
          }
          createMany: {
            args: Prisma.DoctorAvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorAvailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>[]
          }
          delete: {
            args: Prisma.DoctorAvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>
          }
          update: {
            args: Prisma.DoctorAvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.DoctorAvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorAvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorAvailabilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>[]
          }
          upsert: {
            args: Prisma.DoctorAvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>
          }
          aggregate: {
            args: Prisma.DoctorAvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctorAvailability>
          }
          groupBy: {
            args: Prisma.DoctorAvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorAvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorAvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorAvailabilityCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Medication: {
        payload: Prisma.$MedicationPayload<ExtArgs>
        fields: Prisma.MedicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          findFirst: {
            args: Prisma.MedicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          findMany: {
            args: Prisma.MedicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          create: {
            args: Prisma.MedicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          createMany: {
            args: Prisma.MedicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          delete: {
            args: Prisma.MedicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          update: {
            args: Prisma.MedicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          deleteMany: {
            args: Prisma.MedicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          upsert: {
            args: Prisma.MedicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          aggregate: {
            args: Prisma.MedicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedication>
          }
          groupBy: {
            args: Prisma.MedicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicationCountArgs<ExtArgs>
            result: $Utils.Optional<MedicationCountAggregateOutputType> | number
          }
        }
      }
      Inventory: {
        payload: Prisma.$InventoryPayload<ExtArgs>
        fields: Prisma.InventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findFirst: {
            args: Prisma.InventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findMany: {
            args: Prisma.InventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          create: {
            args: Prisma.InventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          createMany: {
            args: Prisma.InventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          delete: {
            args: Prisma.InventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          update: {
            args: Prisma.InventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          deleteMany: {
            args: Prisma.InventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          upsert: {
            args: Prisma.InventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory>
          }
          groupBy: {
            args: Prisma.InventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
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
    user?: UserOmit
    patientProfile?: PatientProfileOmit
    doctorProfile?: DoctorProfileOmit
    appointment?: AppointmentOmit
    patientRecord?: PatientRecordOmit
    prescription?: PrescriptionOmit
    doctorAvailability?: DoctorAvailabilityOmit
    invoice?: InvoiceOmit
    payment?: PaymentOmit
    medication?: MedicationOmit
    inventory?: InventoryOmit
    auditLog?: AuditLogOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    appointmentsAsDoctor: number
    appointmentsAsPatient: number
    logs: number
    invoices: number
    patientRecords: number
    prescriptionsAsDoctor: number
    prescriptionsAsPatient: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointmentsAsDoctor?: boolean | UserCountOutputTypeCountAppointmentsAsDoctorArgs
    appointmentsAsPatient?: boolean | UserCountOutputTypeCountAppointmentsAsPatientArgs
    logs?: boolean | UserCountOutputTypeCountLogsArgs
    invoices?: boolean | UserCountOutputTypeCountInvoicesArgs
    patientRecords?: boolean | UserCountOutputTypeCountPatientRecordsArgs
    prescriptionsAsDoctor?: boolean | UserCountOutputTypeCountPrescriptionsAsDoctorArgs
    prescriptionsAsPatient?: boolean | UserCountOutputTypeCountPrescriptionsAsPatientArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppointmentsAsDoctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppointmentsAsPatientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPatientRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientRecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPrescriptionsAsDoctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPrescriptionsAsPatientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
  }


  /**
   * Count Type PatientProfileCountOutputType
   */

  export type PatientProfileCountOutputType = {
    records: number
  }

  export type PatientProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    records?: boolean | PatientProfileCountOutputTypeCountRecordsArgs
  }

  // Custom InputTypes
  /**
   * PatientProfileCountOutputType without action
   */
  export type PatientProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientProfileCountOutputType
     */
    select?: PatientProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientProfileCountOutputType without action
   */
  export type PatientProfileCountOutputTypeCountRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientRecordWhereInput
  }


  /**
   * Count Type DoctorProfileCountOutputType
   */

  export type DoctorProfileCountOutputType = {
    availability: number
  }

  export type DoctorProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availability?: boolean | DoctorProfileCountOutputTypeCountAvailabilityArgs
  }

  // Custom InputTypes
  /**
   * DoctorProfileCountOutputType without action
   */
  export type DoctorProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfileCountOutputType
     */
    select?: DoctorProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorProfileCountOutputType without action
   */
  export type DoctorProfileCountOutputTypeCountAvailabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorAvailabilityWhereInput
  }


  /**
   * Count Type AppointmentCountOutputType
   */

  export type AppointmentCountOutputType = {
    invoices: number
    records: number
    prescriptions: number
  }

  export type AppointmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | AppointmentCountOutputTypeCountInvoicesArgs
    records?: boolean | AppointmentCountOutputTypeCountRecordsArgs
    prescriptions?: boolean | AppointmentCountOutputTypeCountPrescriptionsArgs
  }

  // Custom InputTypes
  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentCountOutputType
     */
    select?: AppointmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }

  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeCountRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientRecordWhereInput
  }

  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeCountPrescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
  }


  /**
   * Count Type InvoiceCountOutputType
   */

  export type InvoiceCountOutputType = {
    payments: number
  }

  export type InvoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | InvoiceCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceCountOutputType
     */
    select?: InvoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type MedicationCountOutputType
   */

  export type MedicationCountOutputType = {
    inventories: number
  }

  export type MedicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventories?: boolean | MedicationCountOutputTypeCountInventoriesArgs
  }

  // Custom InputTypes
  /**
   * MedicationCountOutputType without action
   */
  export type MedicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationCountOutputType
     */
    select?: MedicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicationCountOutputType without action
   */
  export type MedicationCountOutputTypeCountInventoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    phone: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    phone?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    phone?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    phone?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone: string | null
    role: $Enums.UserRole
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appointmentsAsDoctor?: boolean | User$appointmentsAsDoctorArgs<ExtArgs>
    appointmentsAsPatient?: boolean | User$appointmentsAsPatientArgs<ExtArgs>
    logs?: boolean | User$logsArgs<ExtArgs>
    doctorProfile?: boolean | User$doctorProfileArgs<ExtArgs>
    invoices?: boolean | User$invoicesArgs<ExtArgs>
    patientProfile?: boolean | User$patientProfileArgs<ExtArgs>
    patientRecords?: boolean | User$patientRecordsArgs<ExtArgs>
    prescriptionsAsDoctor?: boolean | User$prescriptionsAsDoctorArgs<ExtArgs>
    prescriptionsAsPatient?: boolean | User$prescriptionsAsPatientArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "phone" | "role" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointmentsAsDoctor?: boolean | User$appointmentsAsDoctorArgs<ExtArgs>
    appointmentsAsPatient?: boolean | User$appointmentsAsPatientArgs<ExtArgs>
    logs?: boolean | User$logsArgs<ExtArgs>
    doctorProfile?: boolean | User$doctorProfileArgs<ExtArgs>
    invoices?: boolean | User$invoicesArgs<ExtArgs>
    patientProfile?: boolean | User$patientProfileArgs<ExtArgs>
    patientRecords?: boolean | User$patientRecordsArgs<ExtArgs>
    prescriptionsAsDoctor?: boolean | User$prescriptionsAsDoctorArgs<ExtArgs>
    prescriptionsAsPatient?: boolean | User$prescriptionsAsPatientArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      appointmentsAsDoctor: Prisma.$AppointmentPayload<ExtArgs>[]
      appointmentsAsPatient: Prisma.$AppointmentPayload<ExtArgs>[]
      logs: Prisma.$AuditLogPayload<ExtArgs>[]
      doctorProfile: Prisma.$DoctorProfilePayload<ExtArgs> | null
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
      patientProfile: Prisma.$PatientProfilePayload<ExtArgs> | null
      patientRecords: Prisma.$PatientRecordPayload<ExtArgs>[]
      prescriptionsAsDoctor: Prisma.$PrescriptionPayload<ExtArgs>[]
      prescriptionsAsPatient: Prisma.$PrescriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      firstName: string
      lastName: string
      phone: string | null
      role: $Enums.UserRole
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointmentsAsDoctor<T extends User$appointmentsAsDoctorArgs<ExtArgs> = {}>(args?: Subset<T, User$appointmentsAsDoctorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appointmentsAsPatient<T extends User$appointmentsAsPatientArgs<ExtArgs> = {}>(args?: Subset<T, User$appointmentsAsPatientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logs<T extends User$logsArgs<ExtArgs> = {}>(args?: Subset<T, User$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    doctorProfile<T extends User$doctorProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$doctorProfileArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    invoices<T extends User$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, User$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    patientProfile<T extends User$patientProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$patientProfileArgs<ExtArgs>>): Prisma__PatientProfileClient<$Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    patientRecords<T extends User$patientRecordsArgs<ExtArgs> = {}>(args?: Subset<T, User$patientRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prescriptionsAsDoctor<T extends User$prescriptionsAsDoctorArgs<ExtArgs> = {}>(args?: Subset<T, User$prescriptionsAsDoctorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prescriptionsAsPatient<T extends User$prescriptionsAsPatientArgs<ExtArgs> = {}>(args?: Subset<T, User$prescriptionsAsPatientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.appointmentsAsDoctor
   */
  export type User$appointmentsAsDoctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * User.appointmentsAsPatient
   */
  export type User$appointmentsAsPatientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * User.logs
   */
  export type User$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User.doctorProfile
   */
  export type User$doctorProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    where?: DoctorProfileWhereInput
  }

  /**
   * User.invoices
   */
  export type User$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * User.patientProfile
   */
  export type User$patientProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientProfile
     */
    select?: PatientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientProfile
     */
    omit?: PatientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientProfileInclude<ExtArgs> | null
    where?: PatientProfileWhereInput
  }

  /**
   * User.patientRecords
   */
  export type User$patientRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientRecord
     */
    select?: PatientRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientRecord
     */
    omit?: PatientRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientRecordInclude<ExtArgs> | null
    where?: PatientRecordWhereInput
    orderBy?: PatientRecordOrderByWithRelationInput | PatientRecordOrderByWithRelationInput[]
    cursor?: PatientRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientRecordScalarFieldEnum | PatientRecordScalarFieldEnum[]
  }

  /**
   * User.prescriptionsAsDoctor
   */
  export type User$prescriptionsAsDoctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    cursor?: PrescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * User.prescriptionsAsPatient
   */
  export type User$prescriptionsAsPatientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    cursor?: PrescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model PatientProfile
   */

  export type AggregatePatientProfile = {
    _count: PatientProfileCountAggregateOutputType | null
    _min: PatientProfileMinAggregateOutputType | null
    _max: PatientProfileMaxAggregateOutputType | null
  }

  export type PatientProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    birthDate: Date | null
    gender: string | null
    address: string | null
    bloodType: string | null
    allergies: string | null
    createdAt: Date | null
  }

  export type PatientProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    birthDate: Date | null
    gender: string | null
    address: string | null
    bloodType: string | null
    allergies: string | null
    createdAt: Date | null
  }

  export type PatientProfileCountAggregateOutputType = {
    id: number
    userId: number
    birthDate: number
    gender: number
    address: number
    bloodType: number
    allergies: number
    createdAt: number
    _all: number
  }


  export type PatientProfileMinAggregateInputType = {
    id?: true
    userId?: true
    birthDate?: true
    gender?: true
    address?: true
    bloodType?: true
    allergies?: true
    createdAt?: true
  }

  export type PatientProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    birthDate?: true
    gender?: true
    address?: true
    bloodType?: true
    allergies?: true
    createdAt?: true
  }

  export type PatientProfileCountAggregateInputType = {
    id?: true
    userId?: true
    birthDate?: true
    gender?: true
    address?: true
    bloodType?: true
    allergies?: true
    createdAt?: true
    _all?: true
  }

  export type PatientProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientProfile to aggregate.
     */
    where?: PatientProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientProfiles to fetch.
     */
    orderBy?: PatientProfileOrderByWithRelationInput | PatientProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PatientProfiles
    **/
    _count?: true | PatientProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientProfileMaxAggregateInputType
  }

  export type GetPatientProfileAggregateType<T extends PatientProfileAggregateArgs> = {
        [P in keyof T & keyof AggregatePatientProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatientProfile[P]>
      : GetScalarType<T[P], AggregatePatientProfile[P]>
  }




  export type PatientProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientProfileWhereInput
    orderBy?: PatientProfileOrderByWithAggregationInput | PatientProfileOrderByWithAggregationInput[]
    by: PatientProfileScalarFieldEnum[] | PatientProfileScalarFieldEnum
    having?: PatientProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientProfileCountAggregateInputType | true
    _min?: PatientProfileMinAggregateInputType
    _max?: PatientProfileMaxAggregateInputType
  }

  export type PatientProfileGroupByOutputType = {
    id: string
    userId: string
    birthDate: Date | null
    gender: string | null
    address: string | null
    bloodType: string | null
    allergies: string | null
    createdAt: Date
    _count: PatientProfileCountAggregateOutputType | null
    _min: PatientProfileMinAggregateOutputType | null
    _max: PatientProfileMaxAggregateOutputType | null
  }

  type GetPatientProfileGroupByPayload<T extends PatientProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientProfileGroupByOutputType[P]>
            : GetScalarType<T[P], PatientProfileGroupByOutputType[P]>
        }
      >
    >


  export type PatientProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    birthDate?: boolean
    gender?: boolean
    address?: boolean
    bloodType?: boolean
    allergies?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    records?: boolean | PatientProfile$recordsArgs<ExtArgs>
    _count?: boolean | PatientProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientProfile"]>

  export type PatientProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    birthDate?: boolean
    gender?: boolean
    address?: boolean
    bloodType?: boolean
    allergies?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientProfile"]>

  export type PatientProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    birthDate?: boolean
    gender?: boolean
    address?: boolean
    bloodType?: boolean
    allergies?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientProfile"]>

  export type PatientProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    birthDate?: boolean
    gender?: boolean
    address?: boolean
    bloodType?: boolean
    allergies?: boolean
    createdAt?: boolean
  }

  export type PatientProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "birthDate" | "gender" | "address" | "bloodType" | "allergies" | "createdAt", ExtArgs["result"]["patientProfile"]>
  export type PatientProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    records?: boolean | PatientProfile$recordsArgs<ExtArgs>
    _count?: boolean | PatientProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PatientProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PatientProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PatientProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      records: Prisma.$PatientRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      birthDate: Date | null
      gender: string | null
      address: string | null
      bloodType: string | null
      allergies: string | null
      createdAt: Date
    }, ExtArgs["result"]["patientProfile"]>
    composites: {}
  }

  type PatientProfileGetPayload<S extends boolean | null | undefined | PatientProfileDefaultArgs> = $Result.GetResult<Prisma.$PatientProfilePayload, S>

  type PatientProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientProfileCountAggregateInputType | true
    }

  export interface PatientProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PatientProfile'], meta: { name: 'PatientProfile' } }
    /**
     * Find zero or one PatientProfile that matches the filter.
     * @param {PatientProfileFindUniqueArgs} args - Arguments to find a PatientProfile
     * @example
     * // Get one PatientProfile
     * const patientProfile = await prisma.patientProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientProfileFindUniqueArgs>(args: SelectSubset<T, PatientProfileFindUniqueArgs<ExtArgs>>): Prisma__PatientProfileClient<$Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PatientProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientProfileFindUniqueOrThrowArgs} args - Arguments to find a PatientProfile
     * @example
     * // Get one PatientProfile
     * const patientProfile = await prisma.patientProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientProfileClient<$Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatientProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientProfileFindFirstArgs} args - Arguments to find a PatientProfile
     * @example
     * // Get one PatientProfile
     * const patientProfile = await prisma.patientProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientProfileFindFirstArgs>(args?: SelectSubset<T, PatientProfileFindFirstArgs<ExtArgs>>): Prisma__PatientProfileClient<$Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatientProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientProfileFindFirstOrThrowArgs} args - Arguments to find a PatientProfile
     * @example
     * // Get one PatientProfile
     * const patientProfile = await prisma.patientProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientProfileClient<$Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PatientProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PatientProfiles
     * const patientProfiles = await prisma.patientProfile.findMany()
     * 
     * // Get first 10 PatientProfiles
     * const patientProfiles = await prisma.patientProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientProfileWithIdOnly = await prisma.patientProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientProfileFindManyArgs>(args?: SelectSubset<T, PatientProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PatientProfile.
     * @param {PatientProfileCreateArgs} args - Arguments to create a PatientProfile.
     * @example
     * // Create one PatientProfile
     * const PatientProfile = await prisma.patientProfile.create({
     *   data: {
     *     // ... data to create a PatientProfile
     *   }
     * })
     * 
     */
    create<T extends PatientProfileCreateArgs>(args: SelectSubset<T, PatientProfileCreateArgs<ExtArgs>>): Prisma__PatientProfileClient<$Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PatientProfiles.
     * @param {PatientProfileCreateManyArgs} args - Arguments to create many PatientProfiles.
     * @example
     * // Create many PatientProfiles
     * const patientProfile = await prisma.patientProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientProfileCreateManyArgs>(args?: SelectSubset<T, PatientProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PatientProfiles and returns the data saved in the database.
     * @param {PatientProfileCreateManyAndReturnArgs} args - Arguments to create many PatientProfiles.
     * @example
     * // Create many PatientProfiles
     * const patientProfile = await prisma.patientProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PatientProfiles and only return the `id`
     * const patientProfileWithIdOnly = await prisma.patientProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PatientProfile.
     * @param {PatientProfileDeleteArgs} args - Arguments to delete one PatientProfile.
     * @example
     * // Delete one PatientProfile
     * const PatientProfile = await prisma.patientProfile.delete({
     *   where: {
     *     // ... filter to delete one PatientProfile
     *   }
     * })
     * 
     */
    delete<T extends PatientProfileDeleteArgs>(args: SelectSubset<T, PatientProfileDeleteArgs<ExtArgs>>): Prisma__PatientProfileClient<$Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PatientProfile.
     * @param {PatientProfileUpdateArgs} args - Arguments to update one PatientProfile.
     * @example
     * // Update one PatientProfile
     * const patientProfile = await prisma.patientProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientProfileUpdateArgs>(args: SelectSubset<T, PatientProfileUpdateArgs<ExtArgs>>): Prisma__PatientProfileClient<$Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PatientProfiles.
     * @param {PatientProfileDeleteManyArgs} args - Arguments to filter PatientProfiles to delete.
     * @example
     * // Delete a few PatientProfiles
     * const { count } = await prisma.patientProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientProfileDeleteManyArgs>(args?: SelectSubset<T, PatientProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatientProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PatientProfiles
     * const patientProfile = await prisma.patientProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientProfileUpdateManyArgs>(args: SelectSubset<T, PatientProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatientProfiles and returns the data updated in the database.
     * @param {PatientProfileUpdateManyAndReturnArgs} args - Arguments to update many PatientProfiles.
     * @example
     * // Update many PatientProfiles
     * const patientProfile = await prisma.patientProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PatientProfiles and only return the `id`
     * const patientProfileWithIdOnly = await prisma.patientProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatientProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PatientProfile.
     * @param {PatientProfileUpsertArgs} args - Arguments to update or create a PatientProfile.
     * @example
     * // Update or create a PatientProfile
     * const patientProfile = await prisma.patientProfile.upsert({
     *   create: {
     *     // ... data to create a PatientProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PatientProfile we want to update
     *   }
     * })
     */
    upsert<T extends PatientProfileUpsertArgs>(args: SelectSubset<T, PatientProfileUpsertArgs<ExtArgs>>): Prisma__PatientProfileClient<$Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PatientProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientProfileCountArgs} args - Arguments to filter PatientProfiles to count.
     * @example
     * // Count the number of PatientProfiles
     * const count = await prisma.patientProfile.count({
     *   where: {
     *     // ... the filter for the PatientProfiles we want to count
     *   }
     * })
    **/
    count<T extends PatientProfileCountArgs>(
      args?: Subset<T, PatientProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PatientProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientProfileAggregateArgs>(args: Subset<T, PatientProfileAggregateArgs>): Prisma.PrismaPromise<GetPatientProfileAggregateType<T>>

    /**
     * Group by PatientProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientProfileGroupByArgs} args - Group by arguments.
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
      T extends PatientProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientProfileGroupByArgs['orderBy'] }
        : { orderBy?: PatientProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PatientProfile model
   */
  readonly fields: PatientProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PatientProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    records<T extends PatientProfile$recordsArgs<ExtArgs> = {}>(args?: Subset<T, PatientProfile$recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PatientProfile model
   */
  interface PatientProfileFieldRefs {
    readonly id: FieldRef<"PatientProfile", 'String'>
    readonly userId: FieldRef<"PatientProfile", 'String'>
    readonly birthDate: FieldRef<"PatientProfile", 'DateTime'>
    readonly gender: FieldRef<"PatientProfile", 'String'>
    readonly address: FieldRef<"PatientProfile", 'String'>
    readonly bloodType: FieldRef<"PatientProfile", 'String'>
    readonly allergies: FieldRef<"PatientProfile", 'String'>
    readonly createdAt: FieldRef<"PatientProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PatientProfile findUnique
   */
  export type PatientProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientProfile
     */
    select?: PatientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientProfile
     */
    omit?: PatientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientProfileInclude<ExtArgs> | null
    /**
     * Filter, which PatientProfile to fetch.
     */
    where: PatientProfileWhereUniqueInput
  }

  /**
   * PatientProfile findUniqueOrThrow
   */
  export type PatientProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientProfile
     */
    select?: PatientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientProfile
     */
    omit?: PatientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientProfileInclude<ExtArgs> | null
    /**
     * Filter, which PatientProfile to fetch.
     */
    where: PatientProfileWhereUniqueInput
  }

  /**
   * PatientProfile findFirst
   */
  export type PatientProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientProfile
     */
    select?: PatientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientProfile
     */
    omit?: PatientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientProfileInclude<ExtArgs> | null
    /**
     * Filter, which PatientProfile to fetch.
     */
    where?: PatientProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientProfiles to fetch.
     */
    orderBy?: PatientProfileOrderByWithRelationInput | PatientProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientProfiles.
     */
    cursor?: PatientProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientProfiles.
     */
    distinct?: PatientProfileScalarFieldEnum | PatientProfileScalarFieldEnum[]
  }

  /**
   * PatientProfile findFirstOrThrow
   */
  export type PatientProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientProfile
     */
    select?: PatientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientProfile
     */
    omit?: PatientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientProfileInclude<ExtArgs> | null
    /**
     * Filter, which PatientProfile to fetch.
     */
    where?: PatientProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientProfiles to fetch.
     */
    orderBy?: PatientProfileOrderByWithRelationInput | PatientProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientProfiles.
     */
    cursor?: PatientProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientProfiles.
     */
    distinct?: PatientProfileScalarFieldEnum | PatientProfileScalarFieldEnum[]
  }

  /**
   * PatientProfile findMany
   */
  export type PatientProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientProfile
     */
    select?: PatientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientProfile
     */
    omit?: PatientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientProfileInclude<ExtArgs> | null
    /**
     * Filter, which PatientProfiles to fetch.
     */
    where?: PatientProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientProfiles to fetch.
     */
    orderBy?: PatientProfileOrderByWithRelationInput | PatientProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PatientProfiles.
     */
    cursor?: PatientProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientProfiles.
     */
    skip?: number
    distinct?: PatientProfileScalarFieldEnum | PatientProfileScalarFieldEnum[]
  }

  /**
   * PatientProfile create
   */
  export type PatientProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientProfile
     */
    select?: PatientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientProfile
     */
    omit?: PatientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a PatientProfile.
     */
    data: XOR<PatientProfileCreateInput, PatientProfileUncheckedCreateInput>
  }

  /**
   * PatientProfile createMany
   */
  export type PatientProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PatientProfiles.
     */
    data: PatientProfileCreateManyInput | PatientProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PatientProfile createManyAndReturn
   */
  export type PatientProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientProfile
     */
    select?: PatientProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PatientProfile
     */
    omit?: PatientProfileOmit<ExtArgs> | null
    /**
     * The data used to create many PatientProfiles.
     */
    data: PatientProfileCreateManyInput | PatientProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatientProfile update
   */
  export type PatientProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientProfile
     */
    select?: PatientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientProfile
     */
    omit?: PatientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a PatientProfile.
     */
    data: XOR<PatientProfileUpdateInput, PatientProfileUncheckedUpdateInput>
    /**
     * Choose, which PatientProfile to update.
     */
    where: PatientProfileWhereUniqueInput
  }

  /**
   * PatientProfile updateMany
   */
  export type PatientProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PatientProfiles.
     */
    data: XOR<PatientProfileUpdateManyMutationInput, PatientProfileUncheckedUpdateManyInput>
    /**
     * Filter which PatientProfiles to update
     */
    where?: PatientProfileWhereInput
    /**
     * Limit how many PatientProfiles to update.
     */
    limit?: number
  }

  /**
   * PatientProfile updateManyAndReturn
   */
  export type PatientProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientProfile
     */
    select?: PatientProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PatientProfile
     */
    omit?: PatientProfileOmit<ExtArgs> | null
    /**
     * The data used to update PatientProfiles.
     */
    data: XOR<PatientProfileUpdateManyMutationInput, PatientProfileUncheckedUpdateManyInput>
    /**
     * Filter which PatientProfiles to update
     */
    where?: PatientProfileWhereInput
    /**
     * Limit how many PatientProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatientProfile upsert
   */
  export type PatientProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientProfile
     */
    select?: PatientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientProfile
     */
    omit?: PatientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the PatientProfile to update in case it exists.
     */
    where: PatientProfileWhereUniqueInput
    /**
     * In case the PatientProfile found by the `where` argument doesn't exist, create a new PatientProfile with this data.
     */
    create: XOR<PatientProfileCreateInput, PatientProfileUncheckedCreateInput>
    /**
     * In case the PatientProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientProfileUpdateInput, PatientProfileUncheckedUpdateInput>
  }

  /**
   * PatientProfile delete
   */
  export type PatientProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientProfile
     */
    select?: PatientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientProfile
     */
    omit?: PatientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientProfileInclude<ExtArgs> | null
    /**
     * Filter which PatientProfile to delete.
     */
    where: PatientProfileWhereUniqueInput
  }

  /**
   * PatientProfile deleteMany
   */
  export type PatientProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientProfiles to delete
     */
    where?: PatientProfileWhereInput
    /**
     * Limit how many PatientProfiles to delete.
     */
    limit?: number
  }

  /**
   * PatientProfile.records
   */
  export type PatientProfile$recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientRecord
     */
    select?: PatientRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientRecord
     */
    omit?: PatientRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientRecordInclude<ExtArgs> | null
    where?: PatientRecordWhereInput
    orderBy?: PatientRecordOrderByWithRelationInput | PatientRecordOrderByWithRelationInput[]
    cursor?: PatientRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientRecordScalarFieldEnum | PatientRecordScalarFieldEnum[]
  }

  /**
   * PatientProfile without action
   */
  export type PatientProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientProfile
     */
    select?: PatientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientProfile
     */
    omit?: PatientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientProfileInclude<ExtArgs> | null
  }


  /**
   * Model DoctorProfile
   */

  export type AggregateDoctorProfile = {
    _count: DoctorProfileCountAggregateOutputType | null
    _min: DoctorProfileMinAggregateOutputType | null
    _max: DoctorProfileMaxAggregateOutputType | null
  }

  export type DoctorProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    crm: string | null
    specialization: string | null
    bio: string | null
    createdAt: Date | null
  }

  export type DoctorProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    crm: string | null
    specialization: string | null
    bio: string | null
    createdAt: Date | null
  }

  export type DoctorProfileCountAggregateOutputType = {
    id: number
    userId: number
    crm: number
    specialization: number
    bio: number
    createdAt: number
    _all: number
  }


  export type DoctorProfileMinAggregateInputType = {
    id?: true
    userId?: true
    crm?: true
    specialization?: true
    bio?: true
    createdAt?: true
  }

  export type DoctorProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    crm?: true
    specialization?: true
    bio?: true
    createdAt?: true
  }

  export type DoctorProfileCountAggregateInputType = {
    id?: true
    userId?: true
    crm?: true
    specialization?: true
    bio?: true
    createdAt?: true
    _all?: true
  }

  export type DoctorProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorProfile to aggregate.
     */
    where?: DoctorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorProfiles to fetch.
     */
    orderBy?: DoctorProfileOrderByWithRelationInput | DoctorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoctorProfiles
    **/
    _count?: true | DoctorProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorProfileMaxAggregateInputType
  }

  export type GetDoctorProfileAggregateType<T extends DoctorProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctorProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctorProfile[P]>
      : GetScalarType<T[P], AggregateDoctorProfile[P]>
  }




  export type DoctorProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorProfileWhereInput
    orderBy?: DoctorProfileOrderByWithAggregationInput | DoctorProfileOrderByWithAggregationInput[]
    by: DoctorProfileScalarFieldEnum[] | DoctorProfileScalarFieldEnum
    having?: DoctorProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorProfileCountAggregateInputType | true
    _min?: DoctorProfileMinAggregateInputType
    _max?: DoctorProfileMaxAggregateInputType
  }

  export type DoctorProfileGroupByOutputType = {
    id: string
    userId: string
    crm: string
    specialization: string
    bio: string | null
    createdAt: Date
    _count: DoctorProfileCountAggregateOutputType | null
    _min: DoctorProfileMinAggregateOutputType | null
    _max: DoctorProfileMaxAggregateOutputType | null
  }

  type GetDoctorProfileGroupByPayload<T extends DoctorProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorProfileGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorProfileGroupByOutputType[P]>
        }
      >
    >


  export type DoctorProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    crm?: boolean
    specialization?: boolean
    bio?: boolean
    createdAt?: boolean
    availability?: boolean | DoctorProfile$availabilityArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | DoctorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorProfile"]>

  export type DoctorProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    crm?: boolean
    specialization?: boolean
    bio?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorProfile"]>

  export type DoctorProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    crm?: boolean
    specialization?: boolean
    bio?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorProfile"]>

  export type DoctorProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    crm?: boolean
    specialization?: boolean
    bio?: boolean
    createdAt?: boolean
  }

  export type DoctorProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "crm" | "specialization" | "bio" | "createdAt", ExtArgs["result"]["doctorProfile"]>
  export type DoctorProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availability?: boolean | DoctorProfile$availabilityArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | DoctorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DoctorProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DoctorProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DoctorProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoctorProfile"
    objects: {
      availability: Prisma.$DoctorAvailabilityPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      crm: string
      specialization: string
      bio: string | null
      createdAt: Date
    }, ExtArgs["result"]["doctorProfile"]>
    composites: {}
  }

  type DoctorProfileGetPayload<S extends boolean | null | undefined | DoctorProfileDefaultArgs> = $Result.GetResult<Prisma.$DoctorProfilePayload, S>

  type DoctorProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorProfileCountAggregateInputType | true
    }

  export interface DoctorProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoctorProfile'], meta: { name: 'DoctorProfile' } }
    /**
     * Find zero or one DoctorProfile that matches the filter.
     * @param {DoctorProfileFindUniqueArgs} args - Arguments to find a DoctorProfile
     * @example
     * // Get one DoctorProfile
     * const doctorProfile = await prisma.doctorProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorProfileFindUniqueArgs>(args: SelectSubset<T, DoctorProfileFindUniqueArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DoctorProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorProfileFindUniqueOrThrowArgs} args - Arguments to find a DoctorProfile
     * @example
     * // Get one DoctorProfile
     * const doctorProfile = await prisma.doctorProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorProfileFindFirstArgs} args - Arguments to find a DoctorProfile
     * @example
     * // Get one DoctorProfile
     * const doctorProfile = await prisma.doctorProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorProfileFindFirstArgs>(args?: SelectSubset<T, DoctorProfileFindFirstArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorProfileFindFirstOrThrowArgs} args - Arguments to find a DoctorProfile
     * @example
     * // Get one DoctorProfile
     * const doctorProfile = await prisma.doctorProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DoctorProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoctorProfiles
     * const doctorProfiles = await prisma.doctorProfile.findMany()
     * 
     * // Get first 10 DoctorProfiles
     * const doctorProfiles = await prisma.doctorProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorProfileWithIdOnly = await prisma.doctorProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorProfileFindManyArgs>(args?: SelectSubset<T, DoctorProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DoctorProfile.
     * @param {DoctorProfileCreateArgs} args - Arguments to create a DoctorProfile.
     * @example
     * // Create one DoctorProfile
     * const DoctorProfile = await prisma.doctorProfile.create({
     *   data: {
     *     // ... data to create a DoctorProfile
     *   }
     * })
     * 
     */
    create<T extends DoctorProfileCreateArgs>(args: SelectSubset<T, DoctorProfileCreateArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DoctorProfiles.
     * @param {DoctorProfileCreateManyArgs} args - Arguments to create many DoctorProfiles.
     * @example
     * // Create many DoctorProfiles
     * const doctorProfile = await prisma.doctorProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorProfileCreateManyArgs>(args?: SelectSubset<T, DoctorProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DoctorProfiles and returns the data saved in the database.
     * @param {DoctorProfileCreateManyAndReturnArgs} args - Arguments to create many DoctorProfiles.
     * @example
     * // Create many DoctorProfiles
     * const doctorProfile = await prisma.doctorProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DoctorProfiles and only return the `id`
     * const doctorProfileWithIdOnly = await prisma.doctorProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DoctorProfile.
     * @param {DoctorProfileDeleteArgs} args - Arguments to delete one DoctorProfile.
     * @example
     * // Delete one DoctorProfile
     * const DoctorProfile = await prisma.doctorProfile.delete({
     *   where: {
     *     // ... filter to delete one DoctorProfile
     *   }
     * })
     * 
     */
    delete<T extends DoctorProfileDeleteArgs>(args: SelectSubset<T, DoctorProfileDeleteArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DoctorProfile.
     * @param {DoctorProfileUpdateArgs} args - Arguments to update one DoctorProfile.
     * @example
     * // Update one DoctorProfile
     * const doctorProfile = await prisma.doctorProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorProfileUpdateArgs>(args: SelectSubset<T, DoctorProfileUpdateArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DoctorProfiles.
     * @param {DoctorProfileDeleteManyArgs} args - Arguments to filter DoctorProfiles to delete.
     * @example
     * // Delete a few DoctorProfiles
     * const { count } = await prisma.doctorProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorProfileDeleteManyArgs>(args?: SelectSubset<T, DoctorProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoctorProfiles
     * const doctorProfile = await prisma.doctorProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorProfileUpdateManyArgs>(args: SelectSubset<T, DoctorProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorProfiles and returns the data updated in the database.
     * @param {DoctorProfileUpdateManyAndReturnArgs} args - Arguments to update many DoctorProfiles.
     * @example
     * // Update many DoctorProfiles
     * const doctorProfile = await prisma.doctorProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DoctorProfiles and only return the `id`
     * const doctorProfileWithIdOnly = await prisma.doctorProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DoctorProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DoctorProfile.
     * @param {DoctorProfileUpsertArgs} args - Arguments to update or create a DoctorProfile.
     * @example
     * // Update or create a DoctorProfile
     * const doctorProfile = await prisma.doctorProfile.upsert({
     *   create: {
     *     // ... data to create a DoctorProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoctorProfile we want to update
     *   }
     * })
     */
    upsert<T extends DoctorProfileUpsertArgs>(args: SelectSubset<T, DoctorProfileUpsertArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DoctorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorProfileCountArgs} args - Arguments to filter DoctorProfiles to count.
     * @example
     * // Count the number of DoctorProfiles
     * const count = await prisma.doctorProfile.count({
     *   where: {
     *     // ... the filter for the DoctorProfiles we want to count
     *   }
     * })
    **/
    count<T extends DoctorProfileCountArgs>(
      args?: Subset<T, DoctorProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoctorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorProfileAggregateArgs>(args: Subset<T, DoctorProfileAggregateArgs>): Prisma.PrismaPromise<GetDoctorProfileAggregateType<T>>

    /**
     * Group by DoctorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorProfileGroupByArgs} args - Group by arguments.
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
      T extends DoctorProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorProfileGroupByArgs['orderBy'] }
        : { orderBy?: DoctorProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoctorProfile model
   */
  readonly fields: DoctorProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoctorProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    availability<T extends DoctorProfile$availabilityArgs<ExtArgs> = {}>(args?: Subset<T, DoctorProfile$availabilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DoctorProfile model
   */
  interface DoctorProfileFieldRefs {
    readonly id: FieldRef<"DoctorProfile", 'String'>
    readonly userId: FieldRef<"DoctorProfile", 'String'>
    readonly crm: FieldRef<"DoctorProfile", 'String'>
    readonly specialization: FieldRef<"DoctorProfile", 'String'>
    readonly bio: FieldRef<"DoctorProfile", 'String'>
    readonly createdAt: FieldRef<"DoctorProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DoctorProfile findUnique
   */
  export type DoctorProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * Filter, which DoctorProfile to fetch.
     */
    where: DoctorProfileWhereUniqueInput
  }

  /**
   * DoctorProfile findUniqueOrThrow
   */
  export type DoctorProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * Filter, which DoctorProfile to fetch.
     */
    where: DoctorProfileWhereUniqueInput
  }

  /**
   * DoctorProfile findFirst
   */
  export type DoctorProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * Filter, which DoctorProfile to fetch.
     */
    where?: DoctorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorProfiles to fetch.
     */
    orderBy?: DoctorProfileOrderByWithRelationInput | DoctorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorProfiles.
     */
    cursor?: DoctorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorProfiles.
     */
    distinct?: DoctorProfileScalarFieldEnum | DoctorProfileScalarFieldEnum[]
  }

  /**
   * DoctorProfile findFirstOrThrow
   */
  export type DoctorProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * Filter, which DoctorProfile to fetch.
     */
    where?: DoctorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorProfiles to fetch.
     */
    orderBy?: DoctorProfileOrderByWithRelationInput | DoctorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorProfiles.
     */
    cursor?: DoctorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorProfiles.
     */
    distinct?: DoctorProfileScalarFieldEnum | DoctorProfileScalarFieldEnum[]
  }

  /**
   * DoctorProfile findMany
   */
  export type DoctorProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * Filter, which DoctorProfiles to fetch.
     */
    where?: DoctorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorProfiles to fetch.
     */
    orderBy?: DoctorProfileOrderByWithRelationInput | DoctorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoctorProfiles.
     */
    cursor?: DoctorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorProfiles.
     */
    skip?: number
    distinct?: DoctorProfileScalarFieldEnum | DoctorProfileScalarFieldEnum[]
  }

  /**
   * DoctorProfile create
   */
  export type DoctorProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a DoctorProfile.
     */
    data: XOR<DoctorProfileCreateInput, DoctorProfileUncheckedCreateInput>
  }

  /**
   * DoctorProfile createMany
   */
  export type DoctorProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoctorProfiles.
     */
    data: DoctorProfileCreateManyInput | DoctorProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoctorProfile createManyAndReturn
   */
  export type DoctorProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * The data used to create many DoctorProfiles.
     */
    data: DoctorProfileCreateManyInput | DoctorProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorProfile update
   */
  export type DoctorProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a DoctorProfile.
     */
    data: XOR<DoctorProfileUpdateInput, DoctorProfileUncheckedUpdateInput>
    /**
     * Choose, which DoctorProfile to update.
     */
    where: DoctorProfileWhereUniqueInput
  }

  /**
   * DoctorProfile updateMany
   */
  export type DoctorProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoctorProfiles.
     */
    data: XOR<DoctorProfileUpdateManyMutationInput, DoctorProfileUncheckedUpdateManyInput>
    /**
     * Filter which DoctorProfiles to update
     */
    where?: DoctorProfileWhereInput
    /**
     * Limit how many DoctorProfiles to update.
     */
    limit?: number
  }

  /**
   * DoctorProfile updateManyAndReturn
   */
  export type DoctorProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * The data used to update DoctorProfiles.
     */
    data: XOR<DoctorProfileUpdateManyMutationInput, DoctorProfileUncheckedUpdateManyInput>
    /**
     * Filter which DoctorProfiles to update
     */
    where?: DoctorProfileWhereInput
    /**
     * Limit how many DoctorProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorProfile upsert
   */
  export type DoctorProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the DoctorProfile to update in case it exists.
     */
    where: DoctorProfileWhereUniqueInput
    /**
     * In case the DoctorProfile found by the `where` argument doesn't exist, create a new DoctorProfile with this data.
     */
    create: XOR<DoctorProfileCreateInput, DoctorProfileUncheckedCreateInput>
    /**
     * In case the DoctorProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorProfileUpdateInput, DoctorProfileUncheckedUpdateInput>
  }

  /**
   * DoctorProfile delete
   */
  export type DoctorProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * Filter which DoctorProfile to delete.
     */
    where: DoctorProfileWhereUniqueInput
  }

  /**
   * DoctorProfile deleteMany
   */
  export type DoctorProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorProfiles to delete
     */
    where?: DoctorProfileWhereInput
    /**
     * Limit how many DoctorProfiles to delete.
     */
    limit?: number
  }

  /**
   * DoctorProfile.availability
   */
  export type DoctorProfile$availabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    where?: DoctorAvailabilityWhereInput
    orderBy?: DoctorAvailabilityOrderByWithRelationInput | DoctorAvailabilityOrderByWithRelationInput[]
    cursor?: DoctorAvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorAvailabilityScalarFieldEnum | DoctorAvailabilityScalarFieldEnum[]
  }

  /**
   * DoctorProfile without action
   */
  export type DoctorProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    startTime: Date | null
    endTime: Date | null
    status: $Enums.AppointmentStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    patientId: string | null
    doctorId: string | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    startTime: Date | null
    endTime: Date | null
    status: $Enums.AppointmentStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    patientId: string | null
    doctorId: string | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    startTime: number
    endTime: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    patientId: number
    doctorId: number
    _all: number
  }


  export type AppointmentMinAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    patientId?: true
    doctorId?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    patientId?: true
    doctorId?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    patientId?: true
    doctorId?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    startTime: Date
    endTime: Date
    status: $Enums.AppointmentStatus
    notes: string | null
    createdAt: Date
    updatedAt: Date
    patientId: string
    doctorId: string
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patientId?: boolean
    doctorId?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
    invoices?: boolean | Appointment$invoicesArgs<ExtArgs>
    records?: boolean | Appointment$recordsArgs<ExtArgs>
    prescriptions?: boolean | Appointment$prescriptionsArgs<ExtArgs>
    _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patientId?: boolean
    doctorId?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patientId?: boolean
    doctorId?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patientId?: boolean
    doctorId?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startTime" | "endTime" | "status" | "notes" | "createdAt" | "updatedAt" | "patientId" | "doctorId", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
    invoices?: boolean | Appointment$invoicesArgs<ExtArgs>
    records?: boolean | Appointment$recordsArgs<ExtArgs>
    prescriptions?: boolean | Appointment$prescriptionsArgs<ExtArgs>
    _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      doctor: Prisma.$UserPayload<ExtArgs>
      patient: Prisma.$UserPayload<ExtArgs>
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
      records: Prisma.$PatientRecordPayload<ExtArgs>[]
      prescriptions: Prisma.$PrescriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      startTime: Date
      endTime: Date
      status: $Enums.AppointmentStatus
      notes: string | null
      createdAt: Date
      updatedAt: Date
      patientId: string
      doctorId: string
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patient<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invoices<T extends Appointment$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    records<T extends Appointment$recordsArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prescriptions<T extends Appointment$prescriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$prescriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'String'>
    readonly startTime: FieldRef<"Appointment", 'DateTime'>
    readonly endTime: FieldRef<"Appointment", 'DateTime'>
    readonly status: FieldRef<"Appointment", 'AppointmentStatus'>
    readonly notes: FieldRef<"Appointment", 'String'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
    readonly updatedAt: FieldRef<"Appointment", 'DateTime'>
    readonly patientId: FieldRef<"Appointment", 'String'>
    readonly doctorId: FieldRef<"Appointment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment.invoices
   */
  export type Appointment$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Appointment.records
   */
  export type Appointment$recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientRecord
     */
    select?: PatientRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientRecord
     */
    omit?: PatientRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientRecordInclude<ExtArgs> | null
    where?: PatientRecordWhereInput
    orderBy?: PatientRecordOrderByWithRelationInput | PatientRecordOrderByWithRelationInput[]
    cursor?: PatientRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientRecordScalarFieldEnum | PatientRecordScalarFieldEnum[]
  }

  /**
   * Appointment.prescriptions
   */
  export type Appointment$prescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    cursor?: PrescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model PatientRecord
   */

  export type AggregatePatientRecord = {
    _count: PatientRecordCountAggregateOutputType | null
    _avg: PatientRecordAvgAggregateOutputType | null
    _sum: PatientRecordSumAggregateOutputType | null
    _min: PatientRecordMinAggregateOutputType | null
    _max: PatientRecordMaxAggregateOutputType | null
  }

  export type PatientRecordAvgAggregateOutputType = {
    temperature: number | null
    weight: number | null
    height: number | null
  }

  export type PatientRecordSumAggregateOutputType = {
    temperature: number | null
    weight: number | null
    height: number | null
  }

  export type PatientRecordMinAggregateOutputType = {
    id: string | null
    diagnosis: string | null
    notes: string | null
    temperature: number | null
    weight: number | null
    height: number | null
    createdAt: Date | null
    patientId: string | null
    appointmentId: string | null
    patientProfileId: string | null
  }

  export type PatientRecordMaxAggregateOutputType = {
    id: string | null
    diagnosis: string | null
    notes: string | null
    temperature: number | null
    weight: number | null
    height: number | null
    createdAt: Date | null
    patientId: string | null
    appointmentId: string | null
    patientProfileId: string | null
  }

  export type PatientRecordCountAggregateOutputType = {
    id: number
    diagnosis: number
    notes: number
    labResults: number
    attachments: number
    temperature: number
    weight: number
    height: number
    createdAt: number
    patientId: number
    appointmentId: number
    patientProfileId: number
    _all: number
  }


  export type PatientRecordAvgAggregateInputType = {
    temperature?: true
    weight?: true
    height?: true
  }

  export type PatientRecordSumAggregateInputType = {
    temperature?: true
    weight?: true
    height?: true
  }

  export type PatientRecordMinAggregateInputType = {
    id?: true
    diagnosis?: true
    notes?: true
    temperature?: true
    weight?: true
    height?: true
    createdAt?: true
    patientId?: true
    appointmentId?: true
    patientProfileId?: true
  }

  export type PatientRecordMaxAggregateInputType = {
    id?: true
    diagnosis?: true
    notes?: true
    temperature?: true
    weight?: true
    height?: true
    createdAt?: true
    patientId?: true
    appointmentId?: true
    patientProfileId?: true
  }

  export type PatientRecordCountAggregateInputType = {
    id?: true
    diagnosis?: true
    notes?: true
    labResults?: true
    attachments?: true
    temperature?: true
    weight?: true
    height?: true
    createdAt?: true
    patientId?: true
    appointmentId?: true
    patientProfileId?: true
    _all?: true
  }

  export type PatientRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientRecord to aggregate.
     */
    where?: PatientRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientRecords to fetch.
     */
    orderBy?: PatientRecordOrderByWithRelationInput | PatientRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PatientRecords
    **/
    _count?: true | PatientRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientRecordMaxAggregateInputType
  }

  export type GetPatientRecordAggregateType<T extends PatientRecordAggregateArgs> = {
        [P in keyof T & keyof AggregatePatientRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatientRecord[P]>
      : GetScalarType<T[P], AggregatePatientRecord[P]>
  }




  export type PatientRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientRecordWhereInput
    orderBy?: PatientRecordOrderByWithAggregationInput | PatientRecordOrderByWithAggregationInput[]
    by: PatientRecordScalarFieldEnum[] | PatientRecordScalarFieldEnum
    having?: PatientRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientRecordCountAggregateInputType | true
    _avg?: PatientRecordAvgAggregateInputType
    _sum?: PatientRecordSumAggregateInputType
    _min?: PatientRecordMinAggregateInputType
    _max?: PatientRecordMaxAggregateInputType
  }

  export type PatientRecordGroupByOutputType = {
    id: string
    diagnosis: string | null
    notes: string | null
    labResults: JsonValue | null
    attachments: JsonValue | null
    temperature: number | null
    weight: number | null
    height: number | null
    createdAt: Date
    patientId: string
    appointmentId: string
    patientProfileId: string | null
    _count: PatientRecordCountAggregateOutputType | null
    _avg: PatientRecordAvgAggregateOutputType | null
    _sum: PatientRecordSumAggregateOutputType | null
    _min: PatientRecordMinAggregateOutputType | null
    _max: PatientRecordMaxAggregateOutputType | null
  }

  type GetPatientRecordGroupByPayload<T extends PatientRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientRecordGroupByOutputType[P]>
            : GetScalarType<T[P], PatientRecordGroupByOutputType[P]>
        }
      >
    >


  export type PatientRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diagnosis?: boolean
    notes?: boolean
    labResults?: boolean
    attachments?: boolean
    temperature?: boolean
    weight?: boolean
    height?: boolean
    createdAt?: boolean
    patientId?: boolean
    appointmentId?: boolean
    patientProfileId?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
    patientProfile?: boolean | PatientRecord$patientProfileArgs<ExtArgs>
  }, ExtArgs["result"]["patientRecord"]>

  export type PatientRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diagnosis?: boolean
    notes?: boolean
    labResults?: boolean
    attachments?: boolean
    temperature?: boolean
    weight?: boolean
    height?: boolean
    createdAt?: boolean
    patientId?: boolean
    appointmentId?: boolean
    patientProfileId?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
    patientProfile?: boolean | PatientRecord$patientProfileArgs<ExtArgs>
  }, ExtArgs["result"]["patientRecord"]>

  export type PatientRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diagnosis?: boolean
    notes?: boolean
    labResults?: boolean
    attachments?: boolean
    temperature?: boolean
    weight?: boolean
    height?: boolean
    createdAt?: boolean
    patientId?: boolean
    appointmentId?: boolean
    patientProfileId?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
    patientProfile?: boolean | PatientRecord$patientProfileArgs<ExtArgs>
  }, ExtArgs["result"]["patientRecord"]>

  export type PatientRecordSelectScalar = {
    id?: boolean
    diagnosis?: boolean
    notes?: boolean
    labResults?: boolean
    attachments?: boolean
    temperature?: boolean
    weight?: boolean
    height?: boolean
    createdAt?: boolean
    patientId?: boolean
    appointmentId?: boolean
    patientProfileId?: boolean
  }

  export type PatientRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "diagnosis" | "notes" | "labResults" | "attachments" | "temperature" | "weight" | "height" | "createdAt" | "patientId" | "appointmentId" | "patientProfileId", ExtArgs["result"]["patientRecord"]>
  export type PatientRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
    patientProfile?: boolean | PatientRecord$patientProfileArgs<ExtArgs>
  }
  export type PatientRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
    patientProfile?: boolean | PatientRecord$patientProfileArgs<ExtArgs>
  }
  export type PatientRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
    patientProfile?: boolean | PatientRecord$patientProfileArgs<ExtArgs>
  }

  export type $PatientRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PatientRecord"
    objects: {
      appointment: Prisma.$AppointmentPayload<ExtArgs>
      patient: Prisma.$UserPayload<ExtArgs>
      patientProfile: Prisma.$PatientProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      diagnosis: string | null
      notes: string | null
      labResults: Prisma.JsonValue | null
      attachments: Prisma.JsonValue | null
      temperature: number | null
      weight: number | null
      height: number | null
      createdAt: Date
      patientId: string
      appointmentId: string
      patientProfileId: string | null
    }, ExtArgs["result"]["patientRecord"]>
    composites: {}
  }

  type PatientRecordGetPayload<S extends boolean | null | undefined | PatientRecordDefaultArgs> = $Result.GetResult<Prisma.$PatientRecordPayload, S>

  type PatientRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientRecordCountAggregateInputType | true
    }

  export interface PatientRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PatientRecord'], meta: { name: 'PatientRecord' } }
    /**
     * Find zero or one PatientRecord that matches the filter.
     * @param {PatientRecordFindUniqueArgs} args - Arguments to find a PatientRecord
     * @example
     * // Get one PatientRecord
     * const patientRecord = await prisma.patientRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientRecordFindUniqueArgs>(args: SelectSubset<T, PatientRecordFindUniqueArgs<ExtArgs>>): Prisma__PatientRecordClient<$Result.GetResult<Prisma.$PatientRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PatientRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientRecordFindUniqueOrThrowArgs} args - Arguments to find a PatientRecord
     * @example
     * // Get one PatientRecord
     * const patientRecord = await prisma.patientRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientRecordClient<$Result.GetResult<Prisma.$PatientRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatientRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientRecordFindFirstArgs} args - Arguments to find a PatientRecord
     * @example
     * // Get one PatientRecord
     * const patientRecord = await prisma.patientRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientRecordFindFirstArgs>(args?: SelectSubset<T, PatientRecordFindFirstArgs<ExtArgs>>): Prisma__PatientRecordClient<$Result.GetResult<Prisma.$PatientRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatientRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientRecordFindFirstOrThrowArgs} args - Arguments to find a PatientRecord
     * @example
     * // Get one PatientRecord
     * const patientRecord = await prisma.patientRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientRecordClient<$Result.GetResult<Prisma.$PatientRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PatientRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PatientRecords
     * const patientRecords = await prisma.patientRecord.findMany()
     * 
     * // Get first 10 PatientRecords
     * const patientRecords = await prisma.patientRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientRecordWithIdOnly = await prisma.patientRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientRecordFindManyArgs>(args?: SelectSubset<T, PatientRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PatientRecord.
     * @param {PatientRecordCreateArgs} args - Arguments to create a PatientRecord.
     * @example
     * // Create one PatientRecord
     * const PatientRecord = await prisma.patientRecord.create({
     *   data: {
     *     // ... data to create a PatientRecord
     *   }
     * })
     * 
     */
    create<T extends PatientRecordCreateArgs>(args: SelectSubset<T, PatientRecordCreateArgs<ExtArgs>>): Prisma__PatientRecordClient<$Result.GetResult<Prisma.$PatientRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PatientRecords.
     * @param {PatientRecordCreateManyArgs} args - Arguments to create many PatientRecords.
     * @example
     * // Create many PatientRecords
     * const patientRecord = await prisma.patientRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientRecordCreateManyArgs>(args?: SelectSubset<T, PatientRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PatientRecords and returns the data saved in the database.
     * @param {PatientRecordCreateManyAndReturnArgs} args - Arguments to create many PatientRecords.
     * @example
     * // Create many PatientRecords
     * const patientRecord = await prisma.patientRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PatientRecords and only return the `id`
     * const patientRecordWithIdOnly = await prisma.patientRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PatientRecord.
     * @param {PatientRecordDeleteArgs} args - Arguments to delete one PatientRecord.
     * @example
     * // Delete one PatientRecord
     * const PatientRecord = await prisma.patientRecord.delete({
     *   where: {
     *     // ... filter to delete one PatientRecord
     *   }
     * })
     * 
     */
    delete<T extends PatientRecordDeleteArgs>(args: SelectSubset<T, PatientRecordDeleteArgs<ExtArgs>>): Prisma__PatientRecordClient<$Result.GetResult<Prisma.$PatientRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PatientRecord.
     * @param {PatientRecordUpdateArgs} args - Arguments to update one PatientRecord.
     * @example
     * // Update one PatientRecord
     * const patientRecord = await prisma.patientRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientRecordUpdateArgs>(args: SelectSubset<T, PatientRecordUpdateArgs<ExtArgs>>): Prisma__PatientRecordClient<$Result.GetResult<Prisma.$PatientRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PatientRecords.
     * @param {PatientRecordDeleteManyArgs} args - Arguments to filter PatientRecords to delete.
     * @example
     * // Delete a few PatientRecords
     * const { count } = await prisma.patientRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientRecordDeleteManyArgs>(args?: SelectSubset<T, PatientRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatientRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PatientRecords
     * const patientRecord = await prisma.patientRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientRecordUpdateManyArgs>(args: SelectSubset<T, PatientRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatientRecords and returns the data updated in the database.
     * @param {PatientRecordUpdateManyAndReturnArgs} args - Arguments to update many PatientRecords.
     * @example
     * // Update many PatientRecords
     * const patientRecord = await prisma.patientRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PatientRecords and only return the `id`
     * const patientRecordWithIdOnly = await prisma.patientRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatientRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PatientRecord.
     * @param {PatientRecordUpsertArgs} args - Arguments to update or create a PatientRecord.
     * @example
     * // Update or create a PatientRecord
     * const patientRecord = await prisma.patientRecord.upsert({
     *   create: {
     *     // ... data to create a PatientRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PatientRecord we want to update
     *   }
     * })
     */
    upsert<T extends PatientRecordUpsertArgs>(args: SelectSubset<T, PatientRecordUpsertArgs<ExtArgs>>): Prisma__PatientRecordClient<$Result.GetResult<Prisma.$PatientRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PatientRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientRecordCountArgs} args - Arguments to filter PatientRecords to count.
     * @example
     * // Count the number of PatientRecords
     * const count = await prisma.patientRecord.count({
     *   where: {
     *     // ... the filter for the PatientRecords we want to count
     *   }
     * })
    **/
    count<T extends PatientRecordCountArgs>(
      args?: Subset<T, PatientRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PatientRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientRecordAggregateArgs>(args: Subset<T, PatientRecordAggregateArgs>): Prisma.PrismaPromise<GetPatientRecordAggregateType<T>>

    /**
     * Group by PatientRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientRecordGroupByArgs} args - Group by arguments.
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
      T extends PatientRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientRecordGroupByArgs['orderBy'] }
        : { orderBy?: PatientRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PatientRecord model
   */
  readonly fields: PatientRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PatientRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointment<T extends AppointmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentDefaultArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patient<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patientProfile<T extends PatientRecord$patientProfileArgs<ExtArgs> = {}>(args?: Subset<T, PatientRecord$patientProfileArgs<ExtArgs>>): Prisma__PatientProfileClient<$Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PatientRecord model
   */
  interface PatientRecordFieldRefs {
    readonly id: FieldRef<"PatientRecord", 'String'>
    readonly diagnosis: FieldRef<"PatientRecord", 'String'>
    readonly notes: FieldRef<"PatientRecord", 'String'>
    readonly labResults: FieldRef<"PatientRecord", 'Json'>
    readonly attachments: FieldRef<"PatientRecord", 'Json'>
    readonly temperature: FieldRef<"PatientRecord", 'Float'>
    readonly weight: FieldRef<"PatientRecord", 'Float'>
    readonly height: FieldRef<"PatientRecord", 'Float'>
    readonly createdAt: FieldRef<"PatientRecord", 'DateTime'>
    readonly patientId: FieldRef<"PatientRecord", 'String'>
    readonly appointmentId: FieldRef<"PatientRecord", 'String'>
    readonly patientProfileId: FieldRef<"PatientRecord", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PatientRecord findUnique
   */
  export type PatientRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientRecord
     */
    select?: PatientRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientRecord
     */
    omit?: PatientRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientRecordInclude<ExtArgs> | null
    /**
     * Filter, which PatientRecord to fetch.
     */
    where: PatientRecordWhereUniqueInput
  }

  /**
   * PatientRecord findUniqueOrThrow
   */
  export type PatientRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientRecord
     */
    select?: PatientRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientRecord
     */
    omit?: PatientRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientRecordInclude<ExtArgs> | null
    /**
     * Filter, which PatientRecord to fetch.
     */
    where: PatientRecordWhereUniqueInput
  }

  /**
   * PatientRecord findFirst
   */
  export type PatientRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientRecord
     */
    select?: PatientRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientRecord
     */
    omit?: PatientRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientRecordInclude<ExtArgs> | null
    /**
     * Filter, which PatientRecord to fetch.
     */
    where?: PatientRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientRecords to fetch.
     */
    orderBy?: PatientRecordOrderByWithRelationInput | PatientRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientRecords.
     */
    cursor?: PatientRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientRecords.
     */
    distinct?: PatientRecordScalarFieldEnum | PatientRecordScalarFieldEnum[]
  }

  /**
   * PatientRecord findFirstOrThrow
   */
  export type PatientRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientRecord
     */
    select?: PatientRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientRecord
     */
    omit?: PatientRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientRecordInclude<ExtArgs> | null
    /**
     * Filter, which PatientRecord to fetch.
     */
    where?: PatientRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientRecords to fetch.
     */
    orderBy?: PatientRecordOrderByWithRelationInput | PatientRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientRecords.
     */
    cursor?: PatientRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientRecords.
     */
    distinct?: PatientRecordScalarFieldEnum | PatientRecordScalarFieldEnum[]
  }

  /**
   * PatientRecord findMany
   */
  export type PatientRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientRecord
     */
    select?: PatientRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientRecord
     */
    omit?: PatientRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientRecordInclude<ExtArgs> | null
    /**
     * Filter, which PatientRecords to fetch.
     */
    where?: PatientRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientRecords to fetch.
     */
    orderBy?: PatientRecordOrderByWithRelationInput | PatientRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PatientRecords.
     */
    cursor?: PatientRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientRecords.
     */
    skip?: number
    distinct?: PatientRecordScalarFieldEnum | PatientRecordScalarFieldEnum[]
  }

  /**
   * PatientRecord create
   */
  export type PatientRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientRecord
     */
    select?: PatientRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientRecord
     */
    omit?: PatientRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a PatientRecord.
     */
    data: XOR<PatientRecordCreateInput, PatientRecordUncheckedCreateInput>
  }

  /**
   * PatientRecord createMany
   */
  export type PatientRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PatientRecords.
     */
    data: PatientRecordCreateManyInput | PatientRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PatientRecord createManyAndReturn
   */
  export type PatientRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientRecord
     */
    select?: PatientRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PatientRecord
     */
    omit?: PatientRecordOmit<ExtArgs> | null
    /**
     * The data used to create many PatientRecords.
     */
    data: PatientRecordCreateManyInput | PatientRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatientRecord update
   */
  export type PatientRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientRecord
     */
    select?: PatientRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientRecord
     */
    omit?: PatientRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a PatientRecord.
     */
    data: XOR<PatientRecordUpdateInput, PatientRecordUncheckedUpdateInput>
    /**
     * Choose, which PatientRecord to update.
     */
    where: PatientRecordWhereUniqueInput
  }

  /**
   * PatientRecord updateMany
   */
  export type PatientRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PatientRecords.
     */
    data: XOR<PatientRecordUpdateManyMutationInput, PatientRecordUncheckedUpdateManyInput>
    /**
     * Filter which PatientRecords to update
     */
    where?: PatientRecordWhereInput
    /**
     * Limit how many PatientRecords to update.
     */
    limit?: number
  }

  /**
   * PatientRecord updateManyAndReturn
   */
  export type PatientRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientRecord
     */
    select?: PatientRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PatientRecord
     */
    omit?: PatientRecordOmit<ExtArgs> | null
    /**
     * The data used to update PatientRecords.
     */
    data: XOR<PatientRecordUpdateManyMutationInput, PatientRecordUncheckedUpdateManyInput>
    /**
     * Filter which PatientRecords to update
     */
    where?: PatientRecordWhereInput
    /**
     * Limit how many PatientRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatientRecord upsert
   */
  export type PatientRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientRecord
     */
    select?: PatientRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientRecord
     */
    omit?: PatientRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the PatientRecord to update in case it exists.
     */
    where: PatientRecordWhereUniqueInput
    /**
     * In case the PatientRecord found by the `where` argument doesn't exist, create a new PatientRecord with this data.
     */
    create: XOR<PatientRecordCreateInput, PatientRecordUncheckedCreateInput>
    /**
     * In case the PatientRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientRecordUpdateInput, PatientRecordUncheckedUpdateInput>
  }

  /**
   * PatientRecord delete
   */
  export type PatientRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientRecord
     */
    select?: PatientRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientRecord
     */
    omit?: PatientRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientRecordInclude<ExtArgs> | null
    /**
     * Filter which PatientRecord to delete.
     */
    where: PatientRecordWhereUniqueInput
  }

  /**
   * PatientRecord deleteMany
   */
  export type PatientRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientRecords to delete
     */
    where?: PatientRecordWhereInput
    /**
     * Limit how many PatientRecords to delete.
     */
    limit?: number
  }

  /**
   * PatientRecord.patientProfile
   */
  export type PatientRecord$patientProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientProfile
     */
    select?: PatientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientProfile
     */
    omit?: PatientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientProfileInclude<ExtArgs> | null
    where?: PatientProfileWhereInput
  }

  /**
   * PatientRecord without action
   */
  export type PatientRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientRecord
     */
    select?: PatientRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientRecord
     */
    omit?: PatientRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientRecordInclude<ExtArgs> | null
  }


  /**
   * Model Prescription
   */

  export type AggregatePrescription = {
    _count: PrescriptionCountAggregateOutputType | null
    _min: PrescriptionMinAggregateOutputType | null
    _max: PrescriptionMaxAggregateOutputType | null
  }

  export type PrescriptionMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    doctorId: string | null
    appointmentId: string | null
    notes: string | null
    status: $Enums.PrescriptionStatus | null
    createdAt: Date | null
  }

  export type PrescriptionMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    doctorId: string | null
    appointmentId: string | null
    notes: string | null
    status: $Enums.PrescriptionStatus | null
    createdAt: Date | null
  }

  export type PrescriptionCountAggregateOutputType = {
    id: number
    patientId: number
    doctorId: number
    appointmentId: number
    medications: number
    notes: number
    status: number
    createdAt: number
    _all: number
  }


  export type PrescriptionMinAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    appointmentId?: true
    notes?: true
    status?: true
    createdAt?: true
  }

  export type PrescriptionMaxAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    appointmentId?: true
    notes?: true
    status?: true
    createdAt?: true
  }

  export type PrescriptionCountAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    appointmentId?: true
    medications?: true
    notes?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type PrescriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prescription to aggregate.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prescriptions
    **/
    _count?: true | PrescriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrescriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrescriptionMaxAggregateInputType
  }

  export type GetPrescriptionAggregateType<T extends PrescriptionAggregateArgs> = {
        [P in keyof T & keyof AggregatePrescription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrescription[P]>
      : GetScalarType<T[P], AggregatePrescription[P]>
  }




  export type PrescriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithAggregationInput | PrescriptionOrderByWithAggregationInput[]
    by: PrescriptionScalarFieldEnum[] | PrescriptionScalarFieldEnum
    having?: PrescriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrescriptionCountAggregateInputType | true
    _min?: PrescriptionMinAggregateInputType
    _max?: PrescriptionMaxAggregateInputType
  }

  export type PrescriptionGroupByOutputType = {
    id: string
    patientId: string
    doctorId: string
    appointmentId: string | null
    medications: JsonValue
    notes: string | null
    status: $Enums.PrescriptionStatus
    createdAt: Date
    _count: PrescriptionCountAggregateOutputType | null
    _min: PrescriptionMinAggregateOutputType | null
    _max: PrescriptionMaxAggregateOutputType | null
  }

  type GetPrescriptionGroupByPayload<T extends PrescriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrescriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrescriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrescriptionGroupByOutputType[P]>
            : GetScalarType<T[P], PrescriptionGroupByOutputType[P]>
        }
      >
    >


  export type PrescriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    appointmentId?: boolean
    medications?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    appointment?: boolean | Prescription$appointmentArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type PrescriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    appointmentId?: boolean
    medications?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    appointment?: boolean | Prescription$appointmentArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type PrescriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    appointmentId?: boolean
    medications?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    appointment?: boolean | Prescription$appointmentArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type PrescriptionSelectScalar = {
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    appointmentId?: boolean
    medications?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type PrescriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "doctorId" | "appointmentId" | "medications" | "notes" | "status" | "createdAt", ExtArgs["result"]["prescription"]>
  export type PrescriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | Prescription$appointmentArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PrescriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | Prescription$appointmentArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PrescriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | Prescription$appointmentArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PrescriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prescription"
    objects: {
      appointment: Prisma.$AppointmentPayload<ExtArgs> | null
      doctor: Prisma.$UserPayload<ExtArgs>
      patient: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      doctorId: string
      appointmentId: string | null
      medications: Prisma.JsonValue
      notes: string | null
      status: $Enums.PrescriptionStatus
      createdAt: Date
    }, ExtArgs["result"]["prescription"]>
    composites: {}
  }

  type PrescriptionGetPayload<S extends boolean | null | undefined | PrescriptionDefaultArgs> = $Result.GetResult<Prisma.$PrescriptionPayload, S>

  type PrescriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrescriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrescriptionCountAggregateInputType | true
    }

  export interface PrescriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prescription'], meta: { name: 'Prescription' } }
    /**
     * Find zero or one Prescription that matches the filter.
     * @param {PrescriptionFindUniqueArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrescriptionFindUniqueArgs>(args: SelectSubset<T, PrescriptionFindUniqueArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prescription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrescriptionFindUniqueOrThrowArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrescriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, PrescriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prescription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindFirstArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrescriptionFindFirstArgs>(args?: SelectSubset<T, PrescriptionFindFirstArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prescription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindFirstOrThrowArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrescriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, PrescriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prescriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prescriptions
     * const prescriptions = await prisma.prescription.findMany()
     * 
     * // Get first 10 Prescriptions
     * const prescriptions = await prisma.prescription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrescriptionFindManyArgs>(args?: SelectSubset<T, PrescriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prescription.
     * @param {PrescriptionCreateArgs} args - Arguments to create a Prescription.
     * @example
     * // Create one Prescription
     * const Prescription = await prisma.prescription.create({
     *   data: {
     *     // ... data to create a Prescription
     *   }
     * })
     * 
     */
    create<T extends PrescriptionCreateArgs>(args: SelectSubset<T, PrescriptionCreateArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prescriptions.
     * @param {PrescriptionCreateManyArgs} args - Arguments to create many Prescriptions.
     * @example
     * // Create many Prescriptions
     * const prescription = await prisma.prescription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrescriptionCreateManyArgs>(args?: SelectSubset<T, PrescriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prescriptions and returns the data saved in the database.
     * @param {PrescriptionCreateManyAndReturnArgs} args - Arguments to create many Prescriptions.
     * @example
     * // Create many Prescriptions
     * const prescription = await prisma.prescription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prescriptions and only return the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrescriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, PrescriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prescription.
     * @param {PrescriptionDeleteArgs} args - Arguments to delete one Prescription.
     * @example
     * // Delete one Prescription
     * const Prescription = await prisma.prescription.delete({
     *   where: {
     *     // ... filter to delete one Prescription
     *   }
     * })
     * 
     */
    delete<T extends PrescriptionDeleteArgs>(args: SelectSubset<T, PrescriptionDeleteArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prescription.
     * @param {PrescriptionUpdateArgs} args - Arguments to update one Prescription.
     * @example
     * // Update one Prescription
     * const prescription = await prisma.prescription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrescriptionUpdateArgs>(args: SelectSubset<T, PrescriptionUpdateArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prescriptions.
     * @param {PrescriptionDeleteManyArgs} args - Arguments to filter Prescriptions to delete.
     * @example
     * // Delete a few Prescriptions
     * const { count } = await prisma.prescription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrescriptionDeleteManyArgs>(args?: SelectSubset<T, PrescriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prescriptions
     * const prescription = await prisma.prescription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrescriptionUpdateManyArgs>(args: SelectSubset<T, PrescriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prescriptions and returns the data updated in the database.
     * @param {PrescriptionUpdateManyAndReturnArgs} args - Arguments to update many Prescriptions.
     * @example
     * // Update many Prescriptions
     * const prescription = await prisma.prescription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prescriptions and only return the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PrescriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, PrescriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prescription.
     * @param {PrescriptionUpsertArgs} args - Arguments to update or create a Prescription.
     * @example
     * // Update or create a Prescription
     * const prescription = await prisma.prescription.upsert({
     *   create: {
     *     // ... data to create a Prescription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prescription we want to update
     *   }
     * })
     */
    upsert<T extends PrescriptionUpsertArgs>(args: SelectSubset<T, PrescriptionUpsertArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionCountArgs} args - Arguments to filter Prescriptions to count.
     * @example
     * // Count the number of Prescriptions
     * const count = await prisma.prescription.count({
     *   where: {
     *     // ... the filter for the Prescriptions we want to count
     *   }
     * })
    **/
    count<T extends PrescriptionCountArgs>(
      args?: Subset<T, PrescriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrescriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrescriptionAggregateArgs>(args: Subset<T, PrescriptionAggregateArgs>): Prisma.PrismaPromise<GetPrescriptionAggregateType<T>>

    /**
     * Group by Prescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionGroupByArgs} args - Group by arguments.
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
      T extends PrescriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrescriptionGroupByArgs['orderBy'] }
        : { orderBy?: PrescriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrescriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrescriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prescription model
   */
  readonly fields: PrescriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prescription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrescriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointment<T extends Prescription$appointmentArgs<ExtArgs> = {}>(args?: Subset<T, Prescription$appointmentArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    doctor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patient<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Prescription model
   */
  interface PrescriptionFieldRefs {
    readonly id: FieldRef<"Prescription", 'String'>
    readonly patientId: FieldRef<"Prescription", 'String'>
    readonly doctorId: FieldRef<"Prescription", 'String'>
    readonly appointmentId: FieldRef<"Prescription", 'String'>
    readonly medications: FieldRef<"Prescription", 'Json'>
    readonly notes: FieldRef<"Prescription", 'String'>
    readonly status: FieldRef<"Prescription", 'PrescriptionStatus'>
    readonly createdAt: FieldRef<"Prescription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Prescription findUnique
   */
  export type PrescriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription findUniqueOrThrow
   */
  export type PrescriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription findFirst
   */
  export type PrescriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prescriptions.
     */
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription findFirstOrThrow
   */
  export type PrescriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prescriptions.
     */
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription findMany
   */
  export type PrescriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescriptions to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription create
   */
  export type PrescriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Prescription.
     */
    data: XOR<PrescriptionCreateInput, PrescriptionUncheckedCreateInput>
  }

  /**
   * Prescription createMany
   */
  export type PrescriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prescriptions.
     */
    data: PrescriptionCreateManyInput | PrescriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prescription createManyAndReturn
   */
  export type PrescriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Prescriptions.
     */
    data: PrescriptionCreateManyInput | PrescriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prescription update
   */
  export type PrescriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Prescription.
     */
    data: XOR<PrescriptionUpdateInput, PrescriptionUncheckedUpdateInput>
    /**
     * Choose, which Prescription to update.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription updateMany
   */
  export type PrescriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prescriptions.
     */
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyInput>
    /**
     * Filter which Prescriptions to update
     */
    where?: PrescriptionWhereInput
    /**
     * Limit how many Prescriptions to update.
     */
    limit?: number
  }

  /**
   * Prescription updateManyAndReturn
   */
  export type PrescriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * The data used to update Prescriptions.
     */
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyInput>
    /**
     * Filter which Prescriptions to update
     */
    where?: PrescriptionWhereInput
    /**
     * Limit how many Prescriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prescription upsert
   */
  export type PrescriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Prescription to update in case it exists.
     */
    where: PrescriptionWhereUniqueInput
    /**
     * In case the Prescription found by the `where` argument doesn't exist, create a new Prescription with this data.
     */
    create: XOR<PrescriptionCreateInput, PrescriptionUncheckedCreateInput>
    /**
     * In case the Prescription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrescriptionUpdateInput, PrescriptionUncheckedUpdateInput>
  }

  /**
   * Prescription delete
   */
  export type PrescriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter which Prescription to delete.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription deleteMany
   */
  export type PrescriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prescriptions to delete
     */
    where?: PrescriptionWhereInput
    /**
     * Limit how many Prescriptions to delete.
     */
    limit?: number
  }

  /**
   * Prescription.appointment
   */
  export type Prescription$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
  }

  /**
   * Prescription without action
   */
  export type PrescriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
  }


  /**
   * Model DoctorAvailability
   */

  export type AggregateDoctorAvailability = {
    _count: DoctorAvailabilityCountAggregateOutputType | null
    _avg: DoctorAvailabilityAvgAggregateOutputType | null
    _sum: DoctorAvailabilitySumAggregateOutputType | null
    _min: DoctorAvailabilityMinAggregateOutputType | null
    _max: DoctorAvailabilityMaxAggregateOutputType | null
  }

  export type DoctorAvailabilityAvgAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type DoctorAvailabilitySumAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type DoctorAvailabilityMinAggregateOutputType = {
    id: string | null
    doctorId: string | null
    dayOfWeek: number | null
    startTime: string | null
    endTime: string | null
  }

  export type DoctorAvailabilityMaxAggregateOutputType = {
    id: string | null
    doctorId: string | null
    dayOfWeek: number | null
    startTime: string | null
    endTime: string | null
  }

  export type DoctorAvailabilityCountAggregateOutputType = {
    id: number
    doctorId: number
    dayOfWeek: number
    startTime: number
    endTime: number
    _all: number
  }


  export type DoctorAvailabilityAvgAggregateInputType = {
    dayOfWeek?: true
  }

  export type DoctorAvailabilitySumAggregateInputType = {
    dayOfWeek?: true
  }

  export type DoctorAvailabilityMinAggregateInputType = {
    id?: true
    doctorId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
  }

  export type DoctorAvailabilityMaxAggregateInputType = {
    id?: true
    doctorId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
  }

  export type DoctorAvailabilityCountAggregateInputType = {
    id?: true
    doctorId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    _all?: true
  }

  export type DoctorAvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorAvailability to aggregate.
     */
    where?: DoctorAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorAvailabilities to fetch.
     */
    orderBy?: DoctorAvailabilityOrderByWithRelationInput | DoctorAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoctorAvailabilities
    **/
    _count?: true | DoctorAvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorAvailabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorAvailabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorAvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorAvailabilityMaxAggregateInputType
  }

  export type GetDoctorAvailabilityAggregateType<T extends DoctorAvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctorAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctorAvailability[P]>
      : GetScalarType<T[P], AggregateDoctorAvailability[P]>
  }




  export type DoctorAvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorAvailabilityWhereInput
    orderBy?: DoctorAvailabilityOrderByWithAggregationInput | DoctorAvailabilityOrderByWithAggregationInput[]
    by: DoctorAvailabilityScalarFieldEnum[] | DoctorAvailabilityScalarFieldEnum
    having?: DoctorAvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorAvailabilityCountAggregateInputType | true
    _avg?: DoctorAvailabilityAvgAggregateInputType
    _sum?: DoctorAvailabilitySumAggregateInputType
    _min?: DoctorAvailabilityMinAggregateInputType
    _max?: DoctorAvailabilityMaxAggregateInputType
  }

  export type DoctorAvailabilityGroupByOutputType = {
    id: string
    doctorId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    _count: DoctorAvailabilityCountAggregateOutputType | null
    _avg: DoctorAvailabilityAvgAggregateOutputType | null
    _sum: DoctorAvailabilitySumAggregateOutputType | null
    _min: DoctorAvailabilityMinAggregateOutputType | null
    _max: DoctorAvailabilityMaxAggregateOutputType | null
  }

  type GetDoctorAvailabilityGroupByPayload<T extends DoctorAvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorAvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorAvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorAvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorAvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type DoctorAvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorAvailability"]>

  export type DoctorAvailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorAvailability"]>

  export type DoctorAvailabilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorAvailability"]>

  export type DoctorAvailabilitySelectScalar = {
    id?: boolean
    doctorId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
  }

  export type DoctorAvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "doctorId" | "dayOfWeek" | "startTime" | "endTime", ExtArgs["result"]["doctorAvailability"]>
  export type DoctorAvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
  }
  export type DoctorAvailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
  }
  export type DoctorAvailabilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
  }

  export type $DoctorAvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoctorAvailability"
    objects: {
      doctor: Prisma.$DoctorProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      doctorId: string
      dayOfWeek: number
      startTime: string
      endTime: string
    }, ExtArgs["result"]["doctorAvailability"]>
    composites: {}
  }

  type DoctorAvailabilityGetPayload<S extends boolean | null | undefined | DoctorAvailabilityDefaultArgs> = $Result.GetResult<Prisma.$DoctorAvailabilityPayload, S>

  type DoctorAvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorAvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorAvailabilityCountAggregateInputType | true
    }

  export interface DoctorAvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoctorAvailability'], meta: { name: 'DoctorAvailability' } }
    /**
     * Find zero or one DoctorAvailability that matches the filter.
     * @param {DoctorAvailabilityFindUniqueArgs} args - Arguments to find a DoctorAvailability
     * @example
     * // Get one DoctorAvailability
     * const doctorAvailability = await prisma.doctorAvailability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorAvailabilityFindUniqueArgs>(args: SelectSubset<T, DoctorAvailabilityFindUniqueArgs<ExtArgs>>): Prisma__DoctorAvailabilityClient<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DoctorAvailability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorAvailabilityFindUniqueOrThrowArgs} args - Arguments to find a DoctorAvailability
     * @example
     * // Get one DoctorAvailability
     * const doctorAvailability = await prisma.doctorAvailability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorAvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorAvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorAvailabilityClient<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorAvailability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAvailabilityFindFirstArgs} args - Arguments to find a DoctorAvailability
     * @example
     * // Get one DoctorAvailability
     * const doctorAvailability = await prisma.doctorAvailability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorAvailabilityFindFirstArgs>(args?: SelectSubset<T, DoctorAvailabilityFindFirstArgs<ExtArgs>>): Prisma__DoctorAvailabilityClient<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorAvailability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAvailabilityFindFirstOrThrowArgs} args - Arguments to find a DoctorAvailability
     * @example
     * // Get one DoctorAvailability
     * const doctorAvailability = await prisma.doctorAvailability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorAvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorAvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorAvailabilityClient<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DoctorAvailabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoctorAvailabilities
     * const doctorAvailabilities = await prisma.doctorAvailability.findMany()
     * 
     * // Get first 10 DoctorAvailabilities
     * const doctorAvailabilities = await prisma.doctorAvailability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorAvailabilityWithIdOnly = await prisma.doctorAvailability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorAvailabilityFindManyArgs>(args?: SelectSubset<T, DoctorAvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DoctorAvailability.
     * @param {DoctorAvailabilityCreateArgs} args - Arguments to create a DoctorAvailability.
     * @example
     * // Create one DoctorAvailability
     * const DoctorAvailability = await prisma.doctorAvailability.create({
     *   data: {
     *     // ... data to create a DoctorAvailability
     *   }
     * })
     * 
     */
    create<T extends DoctorAvailabilityCreateArgs>(args: SelectSubset<T, DoctorAvailabilityCreateArgs<ExtArgs>>): Prisma__DoctorAvailabilityClient<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DoctorAvailabilities.
     * @param {DoctorAvailabilityCreateManyArgs} args - Arguments to create many DoctorAvailabilities.
     * @example
     * // Create many DoctorAvailabilities
     * const doctorAvailability = await prisma.doctorAvailability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorAvailabilityCreateManyArgs>(args?: SelectSubset<T, DoctorAvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DoctorAvailabilities and returns the data saved in the database.
     * @param {DoctorAvailabilityCreateManyAndReturnArgs} args - Arguments to create many DoctorAvailabilities.
     * @example
     * // Create many DoctorAvailabilities
     * const doctorAvailability = await prisma.doctorAvailability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DoctorAvailabilities and only return the `id`
     * const doctorAvailabilityWithIdOnly = await prisma.doctorAvailability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorAvailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorAvailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DoctorAvailability.
     * @param {DoctorAvailabilityDeleteArgs} args - Arguments to delete one DoctorAvailability.
     * @example
     * // Delete one DoctorAvailability
     * const DoctorAvailability = await prisma.doctorAvailability.delete({
     *   where: {
     *     // ... filter to delete one DoctorAvailability
     *   }
     * })
     * 
     */
    delete<T extends DoctorAvailabilityDeleteArgs>(args: SelectSubset<T, DoctorAvailabilityDeleteArgs<ExtArgs>>): Prisma__DoctorAvailabilityClient<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DoctorAvailability.
     * @param {DoctorAvailabilityUpdateArgs} args - Arguments to update one DoctorAvailability.
     * @example
     * // Update one DoctorAvailability
     * const doctorAvailability = await prisma.doctorAvailability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorAvailabilityUpdateArgs>(args: SelectSubset<T, DoctorAvailabilityUpdateArgs<ExtArgs>>): Prisma__DoctorAvailabilityClient<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DoctorAvailabilities.
     * @param {DoctorAvailabilityDeleteManyArgs} args - Arguments to filter DoctorAvailabilities to delete.
     * @example
     * // Delete a few DoctorAvailabilities
     * const { count } = await prisma.doctorAvailability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorAvailabilityDeleteManyArgs>(args?: SelectSubset<T, DoctorAvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoctorAvailabilities
     * const doctorAvailability = await prisma.doctorAvailability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorAvailabilityUpdateManyArgs>(args: SelectSubset<T, DoctorAvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorAvailabilities and returns the data updated in the database.
     * @param {DoctorAvailabilityUpdateManyAndReturnArgs} args - Arguments to update many DoctorAvailabilities.
     * @example
     * // Update many DoctorAvailabilities
     * const doctorAvailability = await prisma.doctorAvailability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DoctorAvailabilities and only return the `id`
     * const doctorAvailabilityWithIdOnly = await prisma.doctorAvailability.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DoctorAvailabilityUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorAvailabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DoctorAvailability.
     * @param {DoctorAvailabilityUpsertArgs} args - Arguments to update or create a DoctorAvailability.
     * @example
     * // Update or create a DoctorAvailability
     * const doctorAvailability = await prisma.doctorAvailability.upsert({
     *   create: {
     *     // ... data to create a DoctorAvailability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoctorAvailability we want to update
     *   }
     * })
     */
    upsert<T extends DoctorAvailabilityUpsertArgs>(args: SelectSubset<T, DoctorAvailabilityUpsertArgs<ExtArgs>>): Prisma__DoctorAvailabilityClient<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DoctorAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAvailabilityCountArgs} args - Arguments to filter DoctorAvailabilities to count.
     * @example
     * // Count the number of DoctorAvailabilities
     * const count = await prisma.doctorAvailability.count({
     *   where: {
     *     // ... the filter for the DoctorAvailabilities we want to count
     *   }
     * })
    **/
    count<T extends DoctorAvailabilityCountArgs>(
      args?: Subset<T, DoctorAvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorAvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoctorAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorAvailabilityAggregateArgs>(args: Subset<T, DoctorAvailabilityAggregateArgs>): Prisma.PrismaPromise<GetDoctorAvailabilityAggregateType<T>>

    /**
     * Group by DoctorAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAvailabilityGroupByArgs} args - Group by arguments.
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
      T extends DoctorAvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorAvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: DoctorAvailabilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorAvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoctorAvailability model
   */
  readonly fields: DoctorAvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoctorAvailability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorAvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends DoctorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorProfileDefaultArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DoctorAvailability model
   */
  interface DoctorAvailabilityFieldRefs {
    readonly id: FieldRef<"DoctorAvailability", 'String'>
    readonly doctorId: FieldRef<"DoctorAvailability", 'String'>
    readonly dayOfWeek: FieldRef<"DoctorAvailability", 'Int'>
    readonly startTime: FieldRef<"DoctorAvailability", 'String'>
    readonly endTime: FieldRef<"DoctorAvailability", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DoctorAvailability findUnique
   */
  export type DoctorAvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which DoctorAvailability to fetch.
     */
    where: DoctorAvailabilityWhereUniqueInput
  }

  /**
   * DoctorAvailability findUniqueOrThrow
   */
  export type DoctorAvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which DoctorAvailability to fetch.
     */
    where: DoctorAvailabilityWhereUniqueInput
  }

  /**
   * DoctorAvailability findFirst
   */
  export type DoctorAvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which DoctorAvailability to fetch.
     */
    where?: DoctorAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorAvailabilities to fetch.
     */
    orderBy?: DoctorAvailabilityOrderByWithRelationInput | DoctorAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorAvailabilities.
     */
    cursor?: DoctorAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorAvailabilities.
     */
    distinct?: DoctorAvailabilityScalarFieldEnum | DoctorAvailabilityScalarFieldEnum[]
  }

  /**
   * DoctorAvailability findFirstOrThrow
   */
  export type DoctorAvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which DoctorAvailability to fetch.
     */
    where?: DoctorAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorAvailabilities to fetch.
     */
    orderBy?: DoctorAvailabilityOrderByWithRelationInput | DoctorAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorAvailabilities.
     */
    cursor?: DoctorAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorAvailabilities.
     */
    distinct?: DoctorAvailabilityScalarFieldEnum | DoctorAvailabilityScalarFieldEnum[]
  }

  /**
   * DoctorAvailability findMany
   */
  export type DoctorAvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which DoctorAvailabilities to fetch.
     */
    where?: DoctorAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorAvailabilities to fetch.
     */
    orderBy?: DoctorAvailabilityOrderByWithRelationInput | DoctorAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoctorAvailabilities.
     */
    cursor?: DoctorAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorAvailabilities.
     */
    skip?: number
    distinct?: DoctorAvailabilityScalarFieldEnum | DoctorAvailabilityScalarFieldEnum[]
  }

  /**
   * DoctorAvailability create
   */
  export type DoctorAvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a DoctorAvailability.
     */
    data: XOR<DoctorAvailabilityCreateInput, DoctorAvailabilityUncheckedCreateInput>
  }

  /**
   * DoctorAvailability createMany
   */
  export type DoctorAvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoctorAvailabilities.
     */
    data: DoctorAvailabilityCreateManyInput | DoctorAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoctorAvailability createManyAndReturn
   */
  export type DoctorAvailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * The data used to create many DoctorAvailabilities.
     */
    data: DoctorAvailabilityCreateManyInput | DoctorAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorAvailability update
   */
  export type DoctorAvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a DoctorAvailability.
     */
    data: XOR<DoctorAvailabilityUpdateInput, DoctorAvailabilityUncheckedUpdateInput>
    /**
     * Choose, which DoctorAvailability to update.
     */
    where: DoctorAvailabilityWhereUniqueInput
  }

  /**
   * DoctorAvailability updateMany
   */
  export type DoctorAvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoctorAvailabilities.
     */
    data: XOR<DoctorAvailabilityUpdateManyMutationInput, DoctorAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which DoctorAvailabilities to update
     */
    where?: DoctorAvailabilityWhereInput
    /**
     * Limit how many DoctorAvailabilities to update.
     */
    limit?: number
  }

  /**
   * DoctorAvailability updateManyAndReturn
   */
  export type DoctorAvailabilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * The data used to update DoctorAvailabilities.
     */
    data: XOR<DoctorAvailabilityUpdateManyMutationInput, DoctorAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which DoctorAvailabilities to update
     */
    where?: DoctorAvailabilityWhereInput
    /**
     * Limit how many DoctorAvailabilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorAvailability upsert
   */
  export type DoctorAvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the DoctorAvailability to update in case it exists.
     */
    where: DoctorAvailabilityWhereUniqueInput
    /**
     * In case the DoctorAvailability found by the `where` argument doesn't exist, create a new DoctorAvailability with this data.
     */
    create: XOR<DoctorAvailabilityCreateInput, DoctorAvailabilityUncheckedCreateInput>
    /**
     * In case the DoctorAvailability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorAvailabilityUpdateInput, DoctorAvailabilityUncheckedUpdateInput>
  }

  /**
   * DoctorAvailability delete
   */
  export type DoctorAvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * Filter which DoctorAvailability to delete.
     */
    where: DoctorAvailabilityWhereUniqueInput
  }

  /**
   * DoctorAvailability deleteMany
   */
  export type DoctorAvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorAvailabilities to delete
     */
    where?: DoctorAvailabilityWhereInput
    /**
     * Limit how many DoctorAvailabilities to delete.
     */
    limit?: number
  }

  /**
   * DoctorAvailability without action
   */
  export type DoctorAvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type InvoiceSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: string | null
    invoiceNumber: string | null
    patientId: string | null
    appointmentId: string | null
    amount: Decimal | null
    status: $Enums.InvoiceStatus | null
    dueDate: Date | null
    createdAt: Date | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: string | null
    invoiceNumber: string | null
    patientId: string | null
    appointmentId: string | null
    amount: Decimal | null
    status: $Enums.InvoiceStatus | null
    dueDate: Date | null
    createdAt: Date | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    invoiceNumber: number
    patientId: number
    appointmentId: number
    amount: number
    status: number
    dueDate: number
    createdAt: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    amount?: true
  }

  export type InvoiceSumAggregateInputType = {
    amount?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    invoiceNumber?: true
    patientId?: true
    appointmentId?: true
    amount?: true
    status?: true
    dueDate?: true
    createdAt?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    invoiceNumber?: true
    patientId?: true
    appointmentId?: true
    amount?: true
    status?: true
    dueDate?: true
    createdAt?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    invoiceNumber?: true
    patientId?: true
    appointmentId?: true
    amount?: true
    status?: true
    dueDate?: true
    createdAt?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: string
    invoiceNumber: string
    patientId: string
    appointmentId: string | null
    amount: Decimal
    status: $Enums.InvoiceStatus
    dueDate: Date
    createdAt: Date
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceNumber?: boolean
    patientId?: boolean
    appointmentId?: boolean
    amount?: boolean
    status?: boolean
    dueDate?: boolean
    createdAt?: boolean
    appointment?: boolean | Invoice$appointmentArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
    payments?: boolean | Invoice$paymentsArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceNumber?: boolean
    patientId?: boolean
    appointmentId?: boolean
    amount?: boolean
    status?: boolean
    dueDate?: boolean
    createdAt?: boolean
    appointment?: boolean | Invoice$appointmentArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceNumber?: boolean
    patientId?: boolean
    appointmentId?: boolean
    amount?: boolean
    status?: boolean
    dueDate?: boolean
    createdAt?: boolean
    appointment?: boolean | Invoice$appointmentArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    id?: boolean
    invoiceNumber?: boolean
    patientId?: boolean
    appointmentId?: boolean
    amount?: boolean
    status?: boolean
    dueDate?: boolean
    createdAt?: boolean
  }

  export type InvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoiceNumber" | "patientId" | "appointmentId" | "amount" | "status" | "dueDate" | "createdAt", ExtArgs["result"]["invoice"]>
  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | Invoice$appointmentArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
    payments?: boolean | Invoice$paymentsArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | Invoice$appointmentArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | Invoice$appointmentArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      appointment: Prisma.$AppointmentPayload<ExtArgs> | null
      patient: Prisma.$UserPayload<ExtArgs>
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invoiceNumber: string
      patientId: string
      appointmentId: string | null
      amount: Prisma.Decimal
      status: $Enums.InvoiceStatus
      dueDate: Date
      createdAt: Date
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {InvoiceUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
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
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointment<T extends Invoice$appointmentArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$appointmentArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    patient<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends Invoice$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Invoice model
   */
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'String'>
    readonly invoiceNumber: FieldRef<"Invoice", 'String'>
    readonly patientId: FieldRef<"Invoice", 'String'>
    readonly appointmentId: FieldRef<"Invoice", 'String'>
    readonly amount: FieldRef<"Invoice", 'Decimal'>
    readonly status: FieldRef<"Invoice", 'InvoiceStatus'>
    readonly dueDate: FieldRef<"Invoice", 'DateTime'>
    readonly createdAt: FieldRef<"Invoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoice updateManyAndReturn
   */
  export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoice.appointment
   */
  export type Invoice$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
  }

  /**
   * Invoice.payments
   */
  export type Invoice$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    amount: Decimal | null
    method: string | null
    createdAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    amount: Decimal | null
    method: string | null
    createdAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    invoiceId: number
    amount: number
    method: number
    createdAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    invoiceId?: true
    amount?: true
    method?: true
    createdAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    invoiceId?: true
    amount?: true
    method?: true
    createdAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    invoiceId?: true
    amount?: true
    method?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    invoiceId: string
    amount: Decimal
    method: string
    createdAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    amount?: boolean
    method?: boolean
    createdAt?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    amount?: boolean
    method?: boolean
    createdAt?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    amount?: boolean
    method?: boolean
    createdAt?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    invoiceId?: boolean
    amount?: boolean
    method?: boolean
    createdAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoiceId" | "amount" | "method" | "createdAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      invoice: Prisma.$InvoicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invoiceId: string
      amount: Prisma.Decimal
      method: string
      createdAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoice<T extends InvoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvoiceDefaultArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly invoiceId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly method: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Medication
   */

  export type AggregateMedication = {
    _count: MedicationCountAggregateOutputType | null
    _min: MedicationMinAggregateOutputType | null
    _max: MedicationMaxAggregateOutputType | null
  }

  export type MedicationMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type MedicationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type MedicationCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type MedicationMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type MedicationMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type MedicationCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type MedicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medication to aggregate.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medications
    **/
    _count?: true | MedicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicationMaxAggregateInputType
  }

  export type GetMedicationAggregateType<T extends MedicationAggregateArgs> = {
        [P in keyof T & keyof AggregateMedication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedication[P]>
      : GetScalarType<T[P], AggregateMedication[P]>
  }




  export type MedicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationWhereInput
    orderBy?: MedicationOrderByWithAggregationInput | MedicationOrderByWithAggregationInput[]
    by: MedicationScalarFieldEnum[] | MedicationScalarFieldEnum
    having?: MedicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicationCountAggregateInputType | true
    _min?: MedicationMinAggregateInputType
    _max?: MedicationMaxAggregateInputType
  }

  export type MedicationGroupByOutputType = {
    id: string
    name: string
    description: string | null
    _count: MedicationCountAggregateOutputType | null
    _min: MedicationMinAggregateOutputType | null
    _max: MedicationMaxAggregateOutputType | null
  }

  type GetMedicationGroupByPayload<T extends MedicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicationGroupByOutputType[P]>
            : GetScalarType<T[P], MedicationGroupByOutputType[P]>
        }
      >
    >


  export type MedicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    inventories?: boolean | Medication$inventoriesArgs<ExtArgs>
    _count?: boolean | MedicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type MedicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["medication"]>
  export type MedicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventories?: boolean | Medication$inventoriesArgs<ExtArgs>
    _count?: boolean | MedicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MedicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MedicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medication"
    objects: {
      inventories: Prisma.$InventoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
    }, ExtArgs["result"]["medication"]>
    composites: {}
  }

  type MedicationGetPayload<S extends boolean | null | undefined | MedicationDefaultArgs> = $Result.GetResult<Prisma.$MedicationPayload, S>

  type MedicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicationCountAggregateInputType | true
    }

  export interface MedicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medication'], meta: { name: 'Medication' } }
    /**
     * Find zero or one Medication that matches the filter.
     * @param {MedicationFindUniqueArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicationFindUniqueArgs>(args: SelectSubset<T, MedicationFindUniqueArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicationFindUniqueOrThrowArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicationFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindFirstArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicationFindFirstArgs>(args?: SelectSubset<T, MedicationFindFirstArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindFirstOrThrowArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicationFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medications
     * const medications = await prisma.medication.findMany()
     * 
     * // Get first 10 Medications
     * const medications = await prisma.medication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicationWithIdOnly = await prisma.medication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicationFindManyArgs>(args?: SelectSubset<T, MedicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medication.
     * @param {MedicationCreateArgs} args - Arguments to create a Medication.
     * @example
     * // Create one Medication
     * const Medication = await prisma.medication.create({
     *   data: {
     *     // ... data to create a Medication
     *   }
     * })
     * 
     */
    create<T extends MedicationCreateArgs>(args: SelectSubset<T, MedicationCreateArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medications.
     * @param {MedicationCreateManyArgs} args - Arguments to create many Medications.
     * @example
     * // Create many Medications
     * const medication = await prisma.medication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicationCreateManyArgs>(args?: SelectSubset<T, MedicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medications and returns the data saved in the database.
     * @param {MedicationCreateManyAndReturnArgs} args - Arguments to create many Medications.
     * @example
     * // Create many Medications
     * const medication = await prisma.medication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medications and only return the `id`
     * const medicationWithIdOnly = await prisma.medication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicationCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medication.
     * @param {MedicationDeleteArgs} args - Arguments to delete one Medication.
     * @example
     * // Delete one Medication
     * const Medication = await prisma.medication.delete({
     *   where: {
     *     // ... filter to delete one Medication
     *   }
     * })
     * 
     */
    delete<T extends MedicationDeleteArgs>(args: SelectSubset<T, MedicationDeleteArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medication.
     * @param {MedicationUpdateArgs} args - Arguments to update one Medication.
     * @example
     * // Update one Medication
     * const medication = await prisma.medication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicationUpdateArgs>(args: SelectSubset<T, MedicationUpdateArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medications.
     * @param {MedicationDeleteManyArgs} args - Arguments to filter Medications to delete.
     * @example
     * // Delete a few Medications
     * const { count } = await prisma.medication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicationDeleteManyArgs>(args?: SelectSubset<T, MedicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medications
     * const medication = await prisma.medication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicationUpdateManyArgs>(args: SelectSubset<T, MedicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medications and returns the data updated in the database.
     * @param {MedicationUpdateManyAndReturnArgs} args - Arguments to update many Medications.
     * @example
     * // Update many Medications
     * const medication = await prisma.medication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medications and only return the `id`
     * const medicationWithIdOnly = await prisma.medication.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedicationUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medication.
     * @param {MedicationUpsertArgs} args - Arguments to update or create a Medication.
     * @example
     * // Update or create a Medication
     * const medication = await prisma.medication.upsert({
     *   create: {
     *     // ... data to create a Medication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medication we want to update
     *   }
     * })
     */
    upsert<T extends MedicationUpsertArgs>(args: SelectSubset<T, MedicationUpsertArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationCountArgs} args - Arguments to filter Medications to count.
     * @example
     * // Count the number of Medications
     * const count = await prisma.medication.count({
     *   where: {
     *     // ... the filter for the Medications we want to count
     *   }
     * })
    **/
    count<T extends MedicationCountArgs>(
      args?: Subset<T, MedicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicationAggregateArgs>(args: Subset<T, MedicationAggregateArgs>): Prisma.PrismaPromise<GetMedicationAggregateType<T>>

    /**
     * Group by Medication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationGroupByArgs} args - Group by arguments.
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
      T extends MedicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicationGroupByArgs['orderBy'] }
        : { orderBy?: MedicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medication model
   */
  readonly fields: MedicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventories<T extends Medication$inventoriesArgs<ExtArgs> = {}>(args?: Subset<T, Medication$inventoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Medication model
   */
  interface MedicationFieldRefs {
    readonly id: FieldRef<"Medication", 'String'>
    readonly name: FieldRef<"Medication", 'String'>
    readonly description: FieldRef<"Medication", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Medication findUnique
   */
  export type MedicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication findUniqueOrThrow
   */
  export type MedicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication findFirst
   */
  export type MedicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medications.
     */
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication findFirstOrThrow
   */
  export type MedicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medications.
     */
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication findMany
   */
  export type MedicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medications to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication create
   */
  export type MedicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Medication.
     */
    data: XOR<MedicationCreateInput, MedicationUncheckedCreateInput>
  }

  /**
   * Medication createMany
   */
  export type MedicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medications.
     */
    data: MedicationCreateManyInput | MedicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medication createManyAndReturn
   */
  export type MedicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * The data used to create many Medications.
     */
    data: MedicationCreateManyInput | MedicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medication update
   */
  export type MedicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Medication.
     */
    data: XOR<MedicationUpdateInput, MedicationUncheckedUpdateInput>
    /**
     * Choose, which Medication to update.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication updateMany
   */
  export type MedicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medications.
     */
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyInput>
    /**
     * Filter which Medications to update
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to update.
     */
    limit?: number
  }

  /**
   * Medication updateManyAndReturn
   */
  export type MedicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * The data used to update Medications.
     */
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyInput>
    /**
     * Filter which Medications to update
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to update.
     */
    limit?: number
  }

  /**
   * Medication upsert
   */
  export type MedicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Medication to update in case it exists.
     */
    where: MedicationWhereUniqueInput
    /**
     * In case the Medication found by the `where` argument doesn't exist, create a new Medication with this data.
     */
    create: XOR<MedicationCreateInput, MedicationUncheckedCreateInput>
    /**
     * In case the Medication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicationUpdateInput, MedicationUncheckedUpdateInput>
  }

  /**
   * Medication delete
   */
  export type MedicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter which Medication to delete.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication deleteMany
   */
  export type MedicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medications to delete
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to delete.
     */
    limit?: number
  }

  /**
   * Medication.inventories
   */
  export type Medication$inventoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    cursor?: InventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Medication without action
   */
  export type MedicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
  }


  /**
   * Model Inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryAvgAggregateOutputType = {
    quantity: number | null
  }

  export type InventorySumAggregateOutputType = {
    quantity: number | null
  }

  export type InventoryMinAggregateOutputType = {
    id: string | null
    medicationId: string | null
    quantity: number | null
    batchNumber: string | null
    expirationDate: Date | null
    createdAt: Date | null
  }

  export type InventoryMaxAggregateOutputType = {
    id: string | null
    medicationId: string | null
    quantity: number | null
    batchNumber: string | null
    expirationDate: Date | null
    createdAt: Date | null
  }

  export type InventoryCountAggregateOutputType = {
    id: number
    medicationId: number
    quantity: number
    batchNumber: number
    expirationDate: number
    createdAt: number
    _all: number
  }


  export type InventoryAvgAggregateInputType = {
    quantity?: true
  }

  export type InventorySumAggregateInputType = {
    quantity?: true
  }

  export type InventoryMinAggregateInputType = {
    id?: true
    medicationId?: true
    quantity?: true
    batchNumber?: true
    expirationDate?: true
    createdAt?: true
  }

  export type InventoryMaxAggregateInputType = {
    id?: true
    medicationId?: true
    quantity?: true
    batchNumber?: true
    expirationDate?: true
    createdAt?: true
  }

  export type InventoryCountAggregateInputType = {
    id?: true
    medicationId?: true
    quantity?: true
    batchNumber?: true
    expirationDate?: true
    createdAt?: true
    _all?: true
  }

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventory to aggregate.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type InventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithAggregationInput | InventoryOrderByWithAggregationInput[]
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum
    having?: InventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _avg?: InventoryAvgAggregateInputType
    _sum?: InventorySumAggregateInputType
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }

  export type InventoryGroupByOutputType = {
    id: string
    medicationId: string
    quantity: number
    batchNumber: string | null
    expirationDate: Date | null
    createdAt: Date
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends InventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type InventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicationId?: boolean
    quantity?: boolean
    batchNumber?: boolean
    expirationDate?: boolean
    createdAt?: boolean
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicationId?: boolean
    quantity?: boolean
    batchNumber?: boolean
    expirationDate?: boolean
    createdAt?: boolean
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicationId?: boolean
    quantity?: boolean
    batchNumber?: boolean
    expirationDate?: boolean
    createdAt?: boolean
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectScalar = {
    id?: boolean
    medicationId?: boolean
    quantity?: boolean
    batchNumber?: boolean
    expirationDate?: boolean
    createdAt?: boolean
  }

  export type InventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "medicationId" | "quantity" | "batchNumber" | "expirationDate" | "createdAt", ExtArgs["result"]["inventory"]>
  export type InventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }
  export type InventoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }
  export type InventoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }

  export type $InventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inventory"
    objects: {
      medication: Prisma.$MedicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      medicationId: string
      quantity: number
      batchNumber: string | null
      expirationDate: Date | null
      createdAt: Date
    }, ExtArgs["result"]["inventory"]>
    composites: {}
  }

  type InventoryGetPayload<S extends boolean | null | undefined | InventoryDefaultArgs> = $Result.GetResult<Prisma.$InventoryPayload, S>

  type InventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryCountAggregateInputType | true
    }

  export interface InventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inventory'], meta: { name: 'Inventory' } }
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {InventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryFindUniqueArgs>(args: SelectSubset<T, InventoryFindUniqueArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryFindFirstArgs>(args?: SelectSubset<T, InventoryFindFirstArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryWithIdOnly = await prisma.inventory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryFindManyArgs>(args?: SelectSubset<T, InventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventory.
     * @param {InventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
     */
    create<T extends InventoryCreateArgs>(args: SelectSubset<T, InventoryCreateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventories.
     * @param {InventoryCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryCreateManyArgs>(args?: SelectSubset<T, InventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inventories and returns the data saved in the database.
     * @param {InventoryCreateManyAndReturnArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inventories and only return the `id`
     * const inventoryWithIdOnly = await prisma.inventory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inventory.
     * @param {InventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
     */
    delete<T extends InventoryDeleteArgs>(args: SelectSubset<T, InventoryDeleteArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventory.
     * @param {InventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryUpdateArgs>(args: SelectSubset<T, InventoryUpdateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventories.
     * @param {InventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryDeleteManyArgs>(args?: SelectSubset<T, InventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryUpdateManyArgs>(args: SelectSubset<T, InventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories and returns the data updated in the database.
     * @param {InventoryUpdateManyAndReturnArgs} args - Arguments to update many Inventories.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inventories and only return the `id`
     * const inventoryWithIdOnly = await prisma.inventory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InventoryUpdateManyAndReturnArgs>(args: SelectSubset<T, InventoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inventory.
     * @param {InventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     */
    upsert<T extends InventoryUpsertArgs>(args: SelectSubset<T, InventoryUpsertArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends InventoryCountArgs>(
      args?: Subset<T, InventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryGroupByArgs} args - Group by arguments.
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
      T extends InventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryGroupByArgs['orderBy'] }
        : { orderBy?: InventoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inventory model
   */
  readonly fields: InventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medication<T extends MedicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicationDefaultArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Inventory model
   */
  interface InventoryFieldRefs {
    readonly id: FieldRef<"Inventory", 'String'>
    readonly medicationId: FieldRef<"Inventory", 'String'>
    readonly quantity: FieldRef<"Inventory", 'Int'>
    readonly batchNumber: FieldRef<"Inventory", 'String'>
    readonly expirationDate: FieldRef<"Inventory", 'DateTime'>
    readonly createdAt: FieldRef<"Inventory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Inventory findUnique
   */
  export type InventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findUniqueOrThrow
   */
  export type InventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findFirst
   */
  export type InventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findFirstOrThrow
   */
  export type InventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findMany
   */
  export type InventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventories to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory create
   */
  export type InventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Inventory.
     */
    data: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
  }

  /**
   * Inventory createMany
   */
  export type InventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inventory createManyAndReturn
   */
  export type InventoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inventory update
   */
  export type InventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Inventory.
     */
    data: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
    /**
     * Choose, which Inventory to update.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory updateMany
   */
  export type InventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to update.
     */
    limit?: number
  }

  /**
   * Inventory updateManyAndReturn
   */
  export type InventoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inventory upsert
   */
  export type InventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Inventory to update in case it exists.
     */
    where: InventoryWhereUniqueInput
    /**
     * In case the Inventory found by the `where` argument doesn't exist, create a new Inventory with this data.
     */
    create: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
    /**
     * In case the Inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
  }

  /**
   * Inventory delete
   */
  export type InventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter which Inventory to delete.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory deleteMany
   */
  export type InventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventories to delete
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to delete.
     */
    limit?: number
  }

  /**
   * Inventory without action
   */
  export type InventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    entity: number
    entityId: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entity?: true
    entityId?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entity?: true
    entityId?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entity?: true
    entityId?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    userId: string
    action: string
    entity: string
    entityId: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "entity" | "entityId" | "createdAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      action: string
      entity: string
      entityId: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly userId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entity: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PatientProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    birthDate: 'birthDate',
    gender: 'gender',
    address: 'address',
    bloodType: 'bloodType',
    allergies: 'allergies',
    createdAt: 'createdAt'
  };

  export type PatientProfileScalarFieldEnum = (typeof PatientProfileScalarFieldEnum)[keyof typeof PatientProfileScalarFieldEnum]


  export const DoctorProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    crm: 'crm',
    specialization: 'specialization',
    bio: 'bio',
    createdAt: 'createdAt'
  };

  export type DoctorProfileScalarFieldEnum = (typeof DoctorProfileScalarFieldEnum)[keyof typeof DoctorProfileScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    startTime: 'startTime',
    endTime: 'endTime',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    patientId: 'patientId',
    doctorId: 'doctorId'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const PatientRecordScalarFieldEnum: {
    id: 'id',
    diagnosis: 'diagnosis',
    notes: 'notes',
    labResults: 'labResults',
    attachments: 'attachments',
    temperature: 'temperature',
    weight: 'weight',
    height: 'height',
    createdAt: 'createdAt',
    patientId: 'patientId',
    appointmentId: 'appointmentId',
    patientProfileId: 'patientProfileId'
  };

  export type PatientRecordScalarFieldEnum = (typeof PatientRecordScalarFieldEnum)[keyof typeof PatientRecordScalarFieldEnum]


  export const PrescriptionScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    doctorId: 'doctorId',
    appointmentId: 'appointmentId',
    medications: 'medications',
    notes: 'notes',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type PrescriptionScalarFieldEnum = (typeof PrescriptionScalarFieldEnum)[keyof typeof PrescriptionScalarFieldEnum]


  export const DoctorAvailabilityScalarFieldEnum: {
    id: 'id',
    doctorId: 'doctorId',
    dayOfWeek: 'dayOfWeek',
    startTime: 'startTime',
    endTime: 'endTime'
  };

  export type DoctorAvailabilityScalarFieldEnum = (typeof DoctorAvailabilityScalarFieldEnum)[keyof typeof DoctorAvailabilityScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    invoiceNumber: 'invoiceNumber',
    patientId: 'patientId',
    appointmentId: 'appointmentId',
    amount: 'amount',
    status: 'status',
    dueDate: 'dueDate',
    createdAt: 'createdAt'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    invoiceId: 'invoiceId',
    amount: 'amount',
    method: 'method',
    createdAt: 'createdAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const MedicationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type MedicationScalarFieldEnum = (typeof MedicationScalarFieldEnum)[keyof typeof MedicationScalarFieldEnum]


  export const InventoryScalarFieldEnum: {
    id: 'id',
    medicationId: 'medicationId',
    quantity: 'quantity',
    batchNumber: 'batchNumber',
    expirationDate: 'expirationDate',
    createdAt: 'createdAt'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    entity: 'entity',
    entityId: 'entityId',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


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


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AppointmentStatus'
   */
  export type EnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus'>
    


  /**
   * Reference to a field of type 'AppointmentStatus[]'
   */
  export type ListEnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'PrescriptionStatus'
   */
  export type EnumPrescriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrescriptionStatus'>
    


  /**
   * Reference to a field of type 'PrescriptionStatus[]'
   */
  export type ListEnumPrescriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrescriptionStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'InvoiceStatus'
   */
  export type EnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus'>
    


  /**
   * Reference to a field of type 'InvoiceStatus[]'
   */
  export type ListEnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    appointmentsAsDoctor?: AppointmentListRelationFilter
    appointmentsAsPatient?: AppointmentListRelationFilter
    logs?: AuditLogListRelationFilter
    doctorProfile?: XOR<DoctorProfileNullableScalarRelationFilter, DoctorProfileWhereInput> | null
    invoices?: InvoiceListRelationFilter
    patientProfile?: XOR<PatientProfileNullableScalarRelationFilter, PatientProfileWhereInput> | null
    patientRecords?: PatientRecordListRelationFilter
    prescriptionsAsDoctor?: PrescriptionListRelationFilter
    prescriptionsAsPatient?: PrescriptionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appointmentsAsDoctor?: AppointmentOrderByRelationAggregateInput
    appointmentsAsPatient?: AppointmentOrderByRelationAggregateInput
    logs?: AuditLogOrderByRelationAggregateInput
    doctorProfile?: DoctorProfileOrderByWithRelationInput
    invoices?: InvoiceOrderByRelationAggregateInput
    patientProfile?: PatientProfileOrderByWithRelationInput
    patientRecords?: PatientRecordOrderByRelationAggregateInput
    prescriptionsAsDoctor?: PrescriptionOrderByRelationAggregateInput
    prescriptionsAsPatient?: PrescriptionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    appointmentsAsDoctor?: AppointmentListRelationFilter
    appointmentsAsPatient?: AppointmentListRelationFilter
    logs?: AuditLogListRelationFilter
    doctorProfile?: XOR<DoctorProfileNullableScalarRelationFilter, DoctorProfileWhereInput> | null
    invoices?: InvoiceListRelationFilter
    patientProfile?: XOR<PatientProfileNullableScalarRelationFilter, PatientProfileWhereInput> | null
    patientRecords?: PatientRecordListRelationFilter
    prescriptionsAsDoctor?: PrescriptionListRelationFilter
    prescriptionsAsPatient?: PrescriptionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PatientProfileWhereInput = {
    AND?: PatientProfileWhereInput | PatientProfileWhereInput[]
    OR?: PatientProfileWhereInput[]
    NOT?: PatientProfileWhereInput | PatientProfileWhereInput[]
    id?: StringFilter<"PatientProfile"> | string
    userId?: StringFilter<"PatientProfile"> | string
    birthDate?: DateTimeNullableFilter<"PatientProfile"> | Date | string | null
    gender?: StringNullableFilter<"PatientProfile"> | string | null
    address?: StringNullableFilter<"PatientProfile"> | string | null
    bloodType?: StringNullableFilter<"PatientProfile"> | string | null
    allergies?: StringNullableFilter<"PatientProfile"> | string | null
    createdAt?: DateTimeFilter<"PatientProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    records?: PatientRecordListRelationFilter
  }

  export type PatientProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    birthDate?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    bloodType?: SortOrderInput | SortOrder
    allergies?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    records?: PatientRecordOrderByRelationAggregateInput
  }

  export type PatientProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: PatientProfileWhereInput | PatientProfileWhereInput[]
    OR?: PatientProfileWhereInput[]
    NOT?: PatientProfileWhereInput | PatientProfileWhereInput[]
    birthDate?: DateTimeNullableFilter<"PatientProfile"> | Date | string | null
    gender?: StringNullableFilter<"PatientProfile"> | string | null
    address?: StringNullableFilter<"PatientProfile"> | string | null
    bloodType?: StringNullableFilter<"PatientProfile"> | string | null
    allergies?: StringNullableFilter<"PatientProfile"> | string | null
    createdAt?: DateTimeFilter<"PatientProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    records?: PatientRecordListRelationFilter
  }, "id" | "userId">

  export type PatientProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    birthDate?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    bloodType?: SortOrderInput | SortOrder
    allergies?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PatientProfileCountOrderByAggregateInput
    _max?: PatientProfileMaxOrderByAggregateInput
    _min?: PatientProfileMinOrderByAggregateInput
  }

  export type PatientProfileScalarWhereWithAggregatesInput = {
    AND?: PatientProfileScalarWhereWithAggregatesInput | PatientProfileScalarWhereWithAggregatesInput[]
    OR?: PatientProfileScalarWhereWithAggregatesInput[]
    NOT?: PatientProfileScalarWhereWithAggregatesInput | PatientProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PatientProfile"> | string
    userId?: StringWithAggregatesFilter<"PatientProfile"> | string
    birthDate?: DateTimeNullableWithAggregatesFilter<"PatientProfile"> | Date | string | null
    gender?: StringNullableWithAggregatesFilter<"PatientProfile"> | string | null
    address?: StringNullableWithAggregatesFilter<"PatientProfile"> | string | null
    bloodType?: StringNullableWithAggregatesFilter<"PatientProfile"> | string | null
    allergies?: StringNullableWithAggregatesFilter<"PatientProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PatientProfile"> | Date | string
  }

  export type DoctorProfileWhereInput = {
    AND?: DoctorProfileWhereInput | DoctorProfileWhereInput[]
    OR?: DoctorProfileWhereInput[]
    NOT?: DoctorProfileWhereInput | DoctorProfileWhereInput[]
    id?: StringFilter<"DoctorProfile"> | string
    userId?: StringFilter<"DoctorProfile"> | string
    crm?: StringFilter<"DoctorProfile"> | string
    specialization?: StringFilter<"DoctorProfile"> | string
    bio?: StringNullableFilter<"DoctorProfile"> | string | null
    createdAt?: DateTimeFilter<"DoctorProfile"> | Date | string
    availability?: DoctorAvailabilityListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DoctorProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    crm?: SortOrder
    specialization?: SortOrder
    bio?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    availability?: DoctorAvailabilityOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type DoctorProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    crm?: string
    AND?: DoctorProfileWhereInput | DoctorProfileWhereInput[]
    OR?: DoctorProfileWhereInput[]
    NOT?: DoctorProfileWhereInput | DoctorProfileWhereInput[]
    specialization?: StringFilter<"DoctorProfile"> | string
    bio?: StringNullableFilter<"DoctorProfile"> | string | null
    createdAt?: DateTimeFilter<"DoctorProfile"> | Date | string
    availability?: DoctorAvailabilityListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId" | "crm">

  export type DoctorProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    crm?: SortOrder
    specialization?: SortOrder
    bio?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DoctorProfileCountOrderByAggregateInput
    _max?: DoctorProfileMaxOrderByAggregateInput
    _min?: DoctorProfileMinOrderByAggregateInput
  }

  export type DoctorProfileScalarWhereWithAggregatesInput = {
    AND?: DoctorProfileScalarWhereWithAggregatesInput | DoctorProfileScalarWhereWithAggregatesInput[]
    OR?: DoctorProfileScalarWhereWithAggregatesInput[]
    NOT?: DoctorProfileScalarWhereWithAggregatesInput | DoctorProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DoctorProfile"> | string
    userId?: StringWithAggregatesFilter<"DoctorProfile"> | string
    crm?: StringWithAggregatesFilter<"DoctorProfile"> | string
    specialization?: StringWithAggregatesFilter<"DoctorProfile"> | string
    bio?: StringNullableWithAggregatesFilter<"DoctorProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DoctorProfile"> | Date | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: StringFilter<"Appointment"> | string
    startTime?: DateTimeFilter<"Appointment"> | Date | string
    endTime?: DateTimeFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    notes?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    patientId?: StringFilter<"Appointment"> | string
    doctorId?: StringFilter<"Appointment"> | string
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    patient?: XOR<UserScalarRelationFilter, UserWhereInput>
    invoices?: InvoiceListRelationFilter
    records?: PatientRecordListRelationFilter
    prescriptions?: PrescriptionListRelationFilter
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    doctor?: UserOrderByWithRelationInput
    patient?: UserOrderByWithRelationInput
    invoices?: InvoiceOrderByRelationAggregateInput
    records?: PatientRecordOrderByRelationAggregateInput
    prescriptions?: PrescriptionOrderByRelationAggregateInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    startTime?: DateTimeFilter<"Appointment"> | Date | string
    endTime?: DateTimeFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    notes?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    patientId?: StringFilter<"Appointment"> | string
    doctorId?: StringFilter<"Appointment"> | string
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    patient?: XOR<UserScalarRelationFilter, UserWhereInput>
    invoices?: InvoiceListRelationFilter
    records?: PatientRecordListRelationFilter
    prescriptions?: PrescriptionListRelationFilter
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Appointment"> | string
    startTime?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusWithAggregatesFilter<"Appointment"> | $Enums.AppointmentStatus
    notes?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    patientId?: StringWithAggregatesFilter<"Appointment"> | string
    doctorId?: StringWithAggregatesFilter<"Appointment"> | string
  }

  export type PatientRecordWhereInput = {
    AND?: PatientRecordWhereInput | PatientRecordWhereInput[]
    OR?: PatientRecordWhereInput[]
    NOT?: PatientRecordWhereInput | PatientRecordWhereInput[]
    id?: StringFilter<"PatientRecord"> | string
    diagnosis?: StringNullableFilter<"PatientRecord"> | string | null
    notes?: StringNullableFilter<"PatientRecord"> | string | null
    labResults?: JsonNullableFilter<"PatientRecord">
    attachments?: JsonNullableFilter<"PatientRecord">
    temperature?: FloatNullableFilter<"PatientRecord"> | number | null
    weight?: FloatNullableFilter<"PatientRecord"> | number | null
    height?: FloatNullableFilter<"PatientRecord"> | number | null
    createdAt?: DateTimeFilter<"PatientRecord"> | Date | string
    patientId?: StringFilter<"PatientRecord"> | string
    appointmentId?: StringFilter<"PatientRecord"> | string
    patientProfileId?: StringNullableFilter<"PatientRecord"> | string | null
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
    patient?: XOR<UserScalarRelationFilter, UserWhereInput>
    patientProfile?: XOR<PatientProfileNullableScalarRelationFilter, PatientProfileWhereInput> | null
  }

  export type PatientRecordOrderByWithRelationInput = {
    id?: SortOrder
    diagnosis?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    labResults?: SortOrderInput | SortOrder
    attachments?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    patientId?: SortOrder
    appointmentId?: SortOrder
    patientProfileId?: SortOrderInput | SortOrder
    appointment?: AppointmentOrderByWithRelationInput
    patient?: UserOrderByWithRelationInput
    patientProfile?: PatientProfileOrderByWithRelationInput
  }

  export type PatientRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PatientRecordWhereInput | PatientRecordWhereInput[]
    OR?: PatientRecordWhereInput[]
    NOT?: PatientRecordWhereInput | PatientRecordWhereInput[]
    diagnosis?: StringNullableFilter<"PatientRecord"> | string | null
    notes?: StringNullableFilter<"PatientRecord"> | string | null
    labResults?: JsonNullableFilter<"PatientRecord">
    attachments?: JsonNullableFilter<"PatientRecord">
    temperature?: FloatNullableFilter<"PatientRecord"> | number | null
    weight?: FloatNullableFilter<"PatientRecord"> | number | null
    height?: FloatNullableFilter<"PatientRecord"> | number | null
    createdAt?: DateTimeFilter<"PatientRecord"> | Date | string
    patientId?: StringFilter<"PatientRecord"> | string
    appointmentId?: StringFilter<"PatientRecord"> | string
    patientProfileId?: StringNullableFilter<"PatientRecord"> | string | null
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
    patient?: XOR<UserScalarRelationFilter, UserWhereInput>
    patientProfile?: XOR<PatientProfileNullableScalarRelationFilter, PatientProfileWhereInput> | null
  }, "id">

  export type PatientRecordOrderByWithAggregationInput = {
    id?: SortOrder
    diagnosis?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    labResults?: SortOrderInput | SortOrder
    attachments?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    patientId?: SortOrder
    appointmentId?: SortOrder
    patientProfileId?: SortOrderInput | SortOrder
    _count?: PatientRecordCountOrderByAggregateInput
    _avg?: PatientRecordAvgOrderByAggregateInput
    _max?: PatientRecordMaxOrderByAggregateInput
    _min?: PatientRecordMinOrderByAggregateInput
    _sum?: PatientRecordSumOrderByAggregateInput
  }

  export type PatientRecordScalarWhereWithAggregatesInput = {
    AND?: PatientRecordScalarWhereWithAggregatesInput | PatientRecordScalarWhereWithAggregatesInput[]
    OR?: PatientRecordScalarWhereWithAggregatesInput[]
    NOT?: PatientRecordScalarWhereWithAggregatesInput | PatientRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PatientRecord"> | string
    diagnosis?: StringNullableWithAggregatesFilter<"PatientRecord"> | string | null
    notes?: StringNullableWithAggregatesFilter<"PatientRecord"> | string | null
    labResults?: JsonNullableWithAggregatesFilter<"PatientRecord">
    attachments?: JsonNullableWithAggregatesFilter<"PatientRecord">
    temperature?: FloatNullableWithAggregatesFilter<"PatientRecord"> | number | null
    weight?: FloatNullableWithAggregatesFilter<"PatientRecord"> | number | null
    height?: FloatNullableWithAggregatesFilter<"PatientRecord"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"PatientRecord"> | Date | string
    patientId?: StringWithAggregatesFilter<"PatientRecord"> | string
    appointmentId?: StringWithAggregatesFilter<"PatientRecord"> | string
    patientProfileId?: StringNullableWithAggregatesFilter<"PatientRecord"> | string | null
  }

  export type PrescriptionWhereInput = {
    AND?: PrescriptionWhereInput | PrescriptionWhereInput[]
    OR?: PrescriptionWhereInput[]
    NOT?: PrescriptionWhereInput | PrescriptionWhereInput[]
    id?: StringFilter<"Prescription"> | string
    patientId?: StringFilter<"Prescription"> | string
    doctorId?: StringFilter<"Prescription"> | string
    appointmentId?: StringNullableFilter<"Prescription"> | string | null
    medications?: JsonFilter<"Prescription">
    notes?: StringNullableFilter<"Prescription"> | string | null
    status?: EnumPrescriptionStatusFilter<"Prescription"> | $Enums.PrescriptionStatus
    createdAt?: DateTimeFilter<"Prescription"> | Date | string
    appointment?: XOR<AppointmentNullableScalarRelationFilter, AppointmentWhereInput> | null
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    patient?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PrescriptionOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    appointmentId?: SortOrderInput | SortOrder
    medications?: SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    appointment?: AppointmentOrderByWithRelationInput
    doctor?: UserOrderByWithRelationInput
    patient?: UserOrderByWithRelationInput
  }

  export type PrescriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PrescriptionWhereInput | PrescriptionWhereInput[]
    OR?: PrescriptionWhereInput[]
    NOT?: PrescriptionWhereInput | PrescriptionWhereInput[]
    patientId?: StringFilter<"Prescription"> | string
    doctorId?: StringFilter<"Prescription"> | string
    appointmentId?: StringNullableFilter<"Prescription"> | string | null
    medications?: JsonFilter<"Prescription">
    notes?: StringNullableFilter<"Prescription"> | string | null
    status?: EnumPrescriptionStatusFilter<"Prescription"> | $Enums.PrescriptionStatus
    createdAt?: DateTimeFilter<"Prescription"> | Date | string
    appointment?: XOR<AppointmentNullableScalarRelationFilter, AppointmentWhereInput> | null
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    patient?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PrescriptionOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    appointmentId?: SortOrderInput | SortOrder
    medications?: SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: PrescriptionCountOrderByAggregateInput
    _max?: PrescriptionMaxOrderByAggregateInput
    _min?: PrescriptionMinOrderByAggregateInput
  }

  export type PrescriptionScalarWhereWithAggregatesInput = {
    AND?: PrescriptionScalarWhereWithAggregatesInput | PrescriptionScalarWhereWithAggregatesInput[]
    OR?: PrescriptionScalarWhereWithAggregatesInput[]
    NOT?: PrescriptionScalarWhereWithAggregatesInput | PrescriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Prescription"> | string
    patientId?: StringWithAggregatesFilter<"Prescription"> | string
    doctorId?: StringWithAggregatesFilter<"Prescription"> | string
    appointmentId?: StringNullableWithAggregatesFilter<"Prescription"> | string | null
    medications?: JsonWithAggregatesFilter<"Prescription">
    notes?: StringNullableWithAggregatesFilter<"Prescription"> | string | null
    status?: EnumPrescriptionStatusWithAggregatesFilter<"Prescription"> | $Enums.PrescriptionStatus
    createdAt?: DateTimeWithAggregatesFilter<"Prescription"> | Date | string
  }

  export type DoctorAvailabilityWhereInput = {
    AND?: DoctorAvailabilityWhereInput | DoctorAvailabilityWhereInput[]
    OR?: DoctorAvailabilityWhereInput[]
    NOT?: DoctorAvailabilityWhereInput | DoctorAvailabilityWhereInput[]
    id?: StringFilter<"DoctorAvailability"> | string
    doctorId?: StringFilter<"DoctorAvailability"> | string
    dayOfWeek?: IntFilter<"DoctorAvailability"> | number
    startTime?: StringFilter<"DoctorAvailability"> | string
    endTime?: StringFilter<"DoctorAvailability"> | string
    doctor?: XOR<DoctorProfileScalarRelationFilter, DoctorProfileWhereInput>
  }

  export type DoctorAvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    doctor?: DoctorProfileOrderByWithRelationInput
  }

  export type DoctorAvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DoctorAvailabilityWhereInput | DoctorAvailabilityWhereInput[]
    OR?: DoctorAvailabilityWhereInput[]
    NOT?: DoctorAvailabilityWhereInput | DoctorAvailabilityWhereInput[]
    doctorId?: StringFilter<"DoctorAvailability"> | string
    dayOfWeek?: IntFilter<"DoctorAvailability"> | number
    startTime?: StringFilter<"DoctorAvailability"> | string
    endTime?: StringFilter<"DoctorAvailability"> | string
    doctor?: XOR<DoctorProfileScalarRelationFilter, DoctorProfileWhereInput>
  }, "id">

  export type DoctorAvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    _count?: DoctorAvailabilityCountOrderByAggregateInput
    _avg?: DoctorAvailabilityAvgOrderByAggregateInput
    _max?: DoctorAvailabilityMaxOrderByAggregateInput
    _min?: DoctorAvailabilityMinOrderByAggregateInput
    _sum?: DoctorAvailabilitySumOrderByAggregateInput
  }

  export type DoctorAvailabilityScalarWhereWithAggregatesInput = {
    AND?: DoctorAvailabilityScalarWhereWithAggregatesInput | DoctorAvailabilityScalarWhereWithAggregatesInput[]
    OR?: DoctorAvailabilityScalarWhereWithAggregatesInput[]
    NOT?: DoctorAvailabilityScalarWhereWithAggregatesInput | DoctorAvailabilityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DoctorAvailability"> | string
    doctorId?: StringWithAggregatesFilter<"DoctorAvailability"> | string
    dayOfWeek?: IntWithAggregatesFilter<"DoctorAvailability"> | number
    startTime?: StringWithAggregatesFilter<"DoctorAvailability"> | string
    endTime?: StringWithAggregatesFilter<"DoctorAvailability"> | string
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: StringFilter<"Invoice"> | string
    invoiceNumber?: StringFilter<"Invoice"> | string
    patientId?: StringFilter<"Invoice"> | string
    appointmentId?: StringNullableFilter<"Invoice"> | string | null
    amount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    dueDate?: DateTimeFilter<"Invoice"> | Date | string
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    appointment?: XOR<AppointmentNullableScalarRelationFilter, AppointmentWhereInput> | null
    patient?: XOR<UserScalarRelationFilter, UserWhereInput>
    payments?: PaymentListRelationFilter
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    invoiceNumber?: SortOrder
    patientId?: SortOrder
    appointmentId?: SortOrderInput | SortOrder
    amount?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    appointment?: AppointmentOrderByWithRelationInput
    patient?: UserOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    invoiceNumber?: string
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    patientId?: StringFilter<"Invoice"> | string
    appointmentId?: StringNullableFilter<"Invoice"> | string | null
    amount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    dueDate?: DateTimeFilter<"Invoice"> | Date | string
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    appointment?: XOR<AppointmentNullableScalarRelationFilter, AppointmentWhereInput> | null
    patient?: XOR<UserScalarRelationFilter, UserWhereInput>
    payments?: PaymentListRelationFilter
  }, "id" | "invoiceNumber">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceNumber?: SortOrder
    patientId?: SortOrder
    appointmentId?: SortOrderInput | SortOrder
    amount?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invoice"> | string
    invoiceNumber?: StringWithAggregatesFilter<"Invoice"> | string
    patientId?: StringWithAggregatesFilter<"Invoice"> | string
    appointmentId?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    amount?: DecimalWithAggregatesFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    status?: EnumInvoiceStatusWithAggregatesFilter<"Invoice"> | $Enums.InvoiceStatus
    dueDate?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    invoiceId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    method?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    invoice?: InvoiceOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    invoiceId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    method?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    invoiceId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    method?: StringWithAggregatesFilter<"Payment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type MedicationWhereInput = {
    AND?: MedicationWhereInput | MedicationWhereInput[]
    OR?: MedicationWhereInput[]
    NOT?: MedicationWhereInput | MedicationWhereInput[]
    id?: StringFilter<"Medication"> | string
    name?: StringFilter<"Medication"> | string
    description?: StringNullableFilter<"Medication"> | string | null
    inventories?: InventoryListRelationFilter
  }

  export type MedicationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    inventories?: InventoryOrderByRelationAggregateInput
  }

  export type MedicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicationWhereInput | MedicationWhereInput[]
    OR?: MedicationWhereInput[]
    NOT?: MedicationWhereInput | MedicationWhereInput[]
    name?: StringFilter<"Medication"> | string
    description?: StringNullableFilter<"Medication"> | string | null
    inventories?: InventoryListRelationFilter
  }, "id">

  export type MedicationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: MedicationCountOrderByAggregateInput
    _max?: MedicationMaxOrderByAggregateInput
    _min?: MedicationMinOrderByAggregateInput
  }

  export type MedicationScalarWhereWithAggregatesInput = {
    AND?: MedicationScalarWhereWithAggregatesInput | MedicationScalarWhereWithAggregatesInput[]
    OR?: MedicationScalarWhereWithAggregatesInput[]
    NOT?: MedicationScalarWhereWithAggregatesInput | MedicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Medication"> | string
    name?: StringWithAggregatesFilter<"Medication"> | string
    description?: StringNullableWithAggregatesFilter<"Medication"> | string | null
  }

  export type InventoryWhereInput = {
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    id?: StringFilter<"Inventory"> | string
    medicationId?: StringFilter<"Inventory"> | string
    quantity?: IntFilter<"Inventory"> | number
    batchNumber?: StringNullableFilter<"Inventory"> | string | null
    expirationDate?: DateTimeNullableFilter<"Inventory"> | Date | string | null
    createdAt?: DateTimeFilter<"Inventory"> | Date | string
    medication?: XOR<MedicationScalarRelationFilter, MedicationWhereInput>
  }

  export type InventoryOrderByWithRelationInput = {
    id?: SortOrder
    medicationId?: SortOrder
    quantity?: SortOrder
    batchNumber?: SortOrderInput | SortOrder
    expirationDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    medication?: MedicationOrderByWithRelationInput
  }

  export type InventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    medicationId?: StringFilter<"Inventory"> | string
    quantity?: IntFilter<"Inventory"> | number
    batchNumber?: StringNullableFilter<"Inventory"> | string | null
    expirationDate?: DateTimeNullableFilter<"Inventory"> | Date | string | null
    createdAt?: DateTimeFilter<"Inventory"> | Date | string
    medication?: XOR<MedicationScalarRelationFilter, MedicationWhereInput>
  }, "id">

  export type InventoryOrderByWithAggregationInput = {
    id?: SortOrder
    medicationId?: SortOrder
    quantity?: SortOrder
    batchNumber?: SortOrderInput | SortOrder
    expirationDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: InventoryCountOrderByAggregateInput
    _avg?: InventoryAvgOrderByAggregateInput
    _max?: InventoryMaxOrderByAggregateInput
    _min?: InventoryMinOrderByAggregateInput
    _sum?: InventorySumOrderByAggregateInput
  }

  export type InventoryScalarWhereWithAggregatesInput = {
    AND?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    OR?: InventoryScalarWhereWithAggregatesInput[]
    NOT?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Inventory"> | string
    medicationId?: StringWithAggregatesFilter<"Inventory"> | string
    quantity?: IntWithAggregatesFilter<"Inventory"> | number
    batchNumber?: StringNullableWithAggregatesFilter<"Inventory"> | string | null
    expirationDate?: DateTimeNullableWithAggregatesFilter<"Inventory"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Inventory"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    userId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    userId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    userId?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entity?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentsAsDoctor?: AppointmentCreateNestedManyWithoutDoctorInput
    appointmentsAsPatient?: AppointmentCreateNestedManyWithoutPatientInput
    logs?: AuditLogCreateNestedManyWithoutUserInput
    doctorProfile?: DoctorProfileCreateNestedOneWithoutUserInput
    invoices?: InvoiceCreateNestedManyWithoutPatientInput
    patientProfile?: PatientProfileCreateNestedOneWithoutUserInput
    patientRecords?: PatientRecordCreateNestedManyWithoutPatientInput
    prescriptionsAsDoctor?: PrescriptionCreateNestedManyWithoutDoctorInput
    prescriptionsAsPatient?: PrescriptionCreateNestedManyWithoutPatientInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentsAsDoctor?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    appointmentsAsPatient?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    logs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    doctorProfile?: DoctorProfileUncheckedCreateNestedOneWithoutUserInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutPatientInput
    patientProfile?: PatientProfileUncheckedCreateNestedOneWithoutUserInput
    patientRecords?: PatientRecordUncheckedCreateNestedManyWithoutPatientInput
    prescriptionsAsDoctor?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
    prescriptionsAsPatient?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentsAsDoctor?: AppointmentUpdateManyWithoutDoctorNestedInput
    appointmentsAsPatient?: AppointmentUpdateManyWithoutPatientNestedInput
    logs?: AuditLogUpdateManyWithoutUserNestedInput
    doctorProfile?: DoctorProfileUpdateOneWithoutUserNestedInput
    invoices?: InvoiceUpdateManyWithoutPatientNestedInput
    patientProfile?: PatientProfileUpdateOneWithoutUserNestedInput
    patientRecords?: PatientRecordUpdateManyWithoutPatientNestedInput
    prescriptionsAsDoctor?: PrescriptionUpdateManyWithoutDoctorNestedInput
    prescriptionsAsPatient?: PrescriptionUpdateManyWithoutPatientNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentsAsDoctor?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    appointmentsAsPatient?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    logs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    doctorProfile?: DoctorProfileUncheckedUpdateOneWithoutUserNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutPatientNestedInput
    patientProfile?: PatientProfileUncheckedUpdateOneWithoutUserNestedInput
    patientRecords?: PatientRecordUncheckedUpdateManyWithoutPatientNestedInput
    prescriptionsAsDoctor?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptionsAsPatient?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientProfileCreateInput = {
    id?: string
    birthDate?: Date | string | null
    gender?: string | null
    address?: string | null
    bloodType?: string | null
    allergies?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPatientProfileInput
    records?: PatientRecordCreateNestedManyWithoutPatientProfileInput
  }

  export type PatientProfileUncheckedCreateInput = {
    id?: string
    userId: string
    birthDate?: Date | string | null
    gender?: string | null
    address?: string | null
    bloodType?: string | null
    allergies?: string | null
    createdAt?: Date | string
    records?: PatientRecordUncheckedCreateNestedManyWithoutPatientProfileInput
  }

  export type PatientProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodType?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientProfileNestedInput
    records?: PatientRecordUpdateManyWithoutPatientProfileNestedInput
  }

  export type PatientProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodType?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: PatientRecordUncheckedUpdateManyWithoutPatientProfileNestedInput
  }

  export type PatientProfileCreateManyInput = {
    id?: string
    userId: string
    birthDate?: Date | string | null
    gender?: string | null
    address?: string | null
    bloodType?: string | null
    allergies?: string | null
    createdAt?: Date | string
  }

  export type PatientProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodType?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodType?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorProfileCreateInput = {
    id?: string
    crm: string
    specialization: string
    bio?: string | null
    createdAt?: Date | string
    availability?: DoctorAvailabilityCreateNestedManyWithoutDoctorInput
    user: UserCreateNestedOneWithoutDoctorProfileInput
  }

  export type DoctorProfileUncheckedCreateInput = {
    id?: string
    userId: string
    crm: string
    specialization: string
    bio?: string | null
    createdAt?: Date | string
    availability?: DoctorAvailabilityUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    crm?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: DoctorAvailabilityUpdateManyWithoutDoctorNestedInput
    user?: UserUpdateOneRequiredWithoutDoctorProfileNestedInput
  }

  export type DoctorProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    crm?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: DoctorAvailabilityUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorProfileCreateManyInput = {
    id?: string
    userId: string
    crm: string
    specialization: string
    bio?: string | null
    createdAt?: Date | string
  }

  export type DoctorProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    crm?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    crm?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: UserCreateNestedOneWithoutAppointmentsAsDoctorInput
    patient: UserCreateNestedOneWithoutAppointmentsAsPatientInput
    invoices?: InvoiceCreateNestedManyWithoutAppointmentInput
    records?: PatientRecordCreateNestedManyWithoutAppointmentInput
    prescriptions?: PrescriptionCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patientId: string
    doctorId: string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutAppointmentInput
    records?: PatientRecordUncheckedCreateNestedManyWithoutAppointmentInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: UserUpdateOneRequiredWithoutAppointmentsAsDoctorNestedInput
    patient?: UserUpdateOneRequiredWithoutAppointmentsAsPatientNestedInput
    invoices?: InvoiceUpdateManyWithoutAppointmentNestedInput
    records?: PatientRecordUpdateManyWithoutAppointmentNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    invoices?: InvoiceUncheckedUpdateManyWithoutAppointmentNestedInput
    records?: PatientRecordUncheckedUpdateManyWithoutAppointmentNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentCreateManyInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patientId: string
    doctorId: string
  }

  export type AppointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
  }

  export type PatientRecordCreateInput = {
    id?: string
    diagnosis?: string | null
    notes?: string | null
    labResults?: NullableJsonNullValueInput | InputJsonValue
    attachments?: NullableJsonNullValueInput | InputJsonValue
    temperature?: number | null
    weight?: number | null
    height?: number | null
    createdAt?: Date | string
    appointment: AppointmentCreateNestedOneWithoutRecordsInput
    patient: UserCreateNestedOneWithoutPatientRecordsInput
    patientProfile?: PatientProfileCreateNestedOneWithoutRecordsInput
  }

  export type PatientRecordUncheckedCreateInput = {
    id?: string
    diagnosis?: string | null
    notes?: string | null
    labResults?: NullableJsonNullValueInput | InputJsonValue
    attachments?: NullableJsonNullValueInput | InputJsonValue
    temperature?: number | null
    weight?: number | null
    height?: number | null
    createdAt?: Date | string
    patientId: string
    appointmentId: string
    patientProfileId?: string | null
  }

  export type PatientRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    labResults?: NullableJsonNullValueInput | InputJsonValue
    attachments?: NullableJsonNullValueInput | InputJsonValue
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneRequiredWithoutRecordsNestedInput
    patient?: UserUpdateOneRequiredWithoutPatientRecordsNestedInput
    patientProfile?: PatientProfileUpdateOneWithoutRecordsNestedInput
  }

  export type PatientRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    labResults?: NullableJsonNullValueInput | InputJsonValue
    attachments?: NullableJsonNullValueInput | InputJsonValue
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    patientProfileId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PatientRecordCreateManyInput = {
    id?: string
    diagnosis?: string | null
    notes?: string | null
    labResults?: NullableJsonNullValueInput | InputJsonValue
    attachments?: NullableJsonNullValueInput | InputJsonValue
    temperature?: number | null
    weight?: number | null
    height?: number | null
    createdAt?: Date | string
    patientId: string
    appointmentId: string
    patientProfileId?: string | null
  }

  export type PatientRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    labResults?: NullableJsonNullValueInput | InputJsonValue
    attachments?: NullableJsonNullValueInput | InputJsonValue
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    labResults?: NullableJsonNullValueInput | InputJsonValue
    attachments?: NullableJsonNullValueInput | InputJsonValue
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    patientProfileId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrescriptionCreateInput = {
    id?: string
    medications: JsonNullValueInput | InputJsonValue
    notes?: string | null
    status?: $Enums.PrescriptionStatus
    createdAt?: Date | string
    appointment?: AppointmentCreateNestedOneWithoutPrescriptionsInput
    doctor: UserCreateNestedOneWithoutPrescriptionsAsDoctorInput
    patient: UserCreateNestedOneWithoutPrescriptionsAsPatientInput
  }

  export type PrescriptionUncheckedCreateInput = {
    id?: string
    patientId: string
    doctorId: string
    appointmentId?: string | null
    medications: JsonNullValueInput | InputJsonValue
    notes?: string | null
    status?: $Enums.PrescriptionStatus
    createdAt?: Date | string
  }

  export type PrescriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    medications?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneWithoutPrescriptionsNestedInput
    doctor?: UserUpdateOneRequiredWithoutPrescriptionsAsDoctorNestedInput
    patient?: UserUpdateOneRequiredWithoutPrescriptionsAsPatientNestedInput
  }

  export type PrescriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    medications?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionCreateManyInput = {
    id?: string
    patientId: string
    doctorId: string
    appointmentId?: string | null
    medications: JsonNullValueInput | InputJsonValue
    notes?: string | null
    status?: $Enums.PrescriptionStatus
    createdAt?: Date | string
  }

  export type PrescriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    medications?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    medications?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorAvailabilityCreateInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    doctor: DoctorProfileCreateNestedOneWithoutAvailabilityInput
  }

  export type DoctorAvailabilityUncheckedCreateInput = {
    id?: string
    doctorId: string
    dayOfWeek: number
    startTime: string
    endTime: string
  }

  export type DoctorAvailabilityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    doctor?: DoctorProfileUpdateOneRequiredWithoutAvailabilityNestedInput
  }

  export type DoctorAvailabilityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorAvailabilityCreateManyInput = {
    id?: string
    doctorId: string
    dayOfWeek: number
    startTime: string
    endTime: string
  }

  export type DoctorAvailabilityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorAvailabilityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type InvoiceCreateInput = {
    id?: string
    invoiceNumber: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.InvoiceStatus
    dueDate: Date | string
    createdAt?: Date | string
    appointment?: AppointmentCreateNestedOneWithoutInvoicesInput
    patient: UserCreateNestedOneWithoutInvoicesInput
    payments?: PaymentCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: string
    invoiceNumber: string
    patientId: string
    appointmentId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.InvoiceStatus
    dueDate: Date | string
    createdAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneWithoutInvoicesNestedInput
    patient?: UserUpdateOneRequiredWithoutInvoicesNestedInput
    payments?: PaymentUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceCreateManyInput = {
    id?: string
    invoiceNumber: string
    patientId: string
    appointmentId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.InvoiceStatus
    dueDate: Date | string
    createdAt?: Date | string
  }

  export type InvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    method: string
    createdAt?: Date | string
    invoice: InvoiceCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    invoiceId: string
    amount: Decimal | DecimalJsLike | number | string
    method: string
    createdAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    invoiceId: string
    amount: Decimal | DecimalJsLike | number | string
    method: string
    createdAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationCreateInput = {
    id?: string
    name: string
    description?: string | null
    inventories?: InventoryCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    inventories?: InventoryUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    inventories?: InventoryUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    inventories?: InventoryUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationCreateManyInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type MedicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryCreateInput = {
    id?: string
    quantity: number
    batchNumber?: string | null
    expirationDate?: Date | string | null
    createdAt?: Date | string
    medication: MedicationCreateNestedOneWithoutInventoriesInput
  }

  export type InventoryUncheckedCreateInput = {
    id?: string
    medicationId: string
    quantity: number
    batchNumber?: string | null
    expirationDate?: Date | string | null
    createdAt?: Date | string
  }

  export type InventoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    batchNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medication?: MedicationUpdateOneRequiredWithoutInventoriesNestedInput
  }

  export type InventoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    batchNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCreateManyInput = {
    id?: string
    medicationId: string
    quantity: number
    batchNumber?: string | null
    expirationDate?: Date | string | null
    createdAt?: Date | string
  }

  export type InventoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    batchNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    batchNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    entity: string
    entityId?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    userId: string
    action: string
    entity: string
    entityId?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    userId: string
    action: string
    entity: string
    entityId?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type DoctorProfileNullableScalarRelationFilter = {
    is?: DoctorProfileWhereInput | null
    isNot?: DoctorProfileWhereInput | null
  }

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type PatientProfileNullableScalarRelationFilter = {
    is?: PatientProfileWhereInput | null
    isNot?: PatientProfileWhereInput | null
  }

  export type PatientRecordListRelationFilter = {
    every?: PatientRecordWhereInput
    some?: PatientRecordWhereInput
    none?: PatientRecordWhereInput
  }

  export type PrescriptionListRelationFilter = {
    every?: PrescriptionWhereInput
    some?: PrescriptionWhereInput
    none?: PrescriptionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrescriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PatientProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    birthDate?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    bloodType?: SortOrder
    allergies?: SortOrder
    createdAt?: SortOrder
  }

  export type PatientProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    birthDate?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    bloodType?: SortOrder
    allergies?: SortOrder
    createdAt?: SortOrder
  }

  export type PatientProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    birthDate?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    bloodType?: SortOrder
    allergies?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DoctorAvailabilityListRelationFilter = {
    every?: DoctorAvailabilityWhereInput
    some?: DoctorAvailabilityWhereInput
    none?: DoctorAvailabilityWhereInput
  }

  export type DoctorAvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    crm?: SortOrder
    specialization?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
  }

  export type DoctorProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    crm?: SortOrder
    specialization?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
  }

  export type DoctorProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    crm?: SortOrder
    specialization?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
  }

  export type EnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type AppointmentScalarRelationFilter = {
    is?: AppointmentWhereInput
    isNot?: AppointmentWhereInput
  }

  export type PatientRecordCountOrderByAggregateInput = {
    id?: SortOrder
    diagnosis?: SortOrder
    notes?: SortOrder
    labResults?: SortOrder
    attachments?: SortOrder
    temperature?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
    patientId?: SortOrder
    appointmentId?: SortOrder
    patientProfileId?: SortOrder
  }

  export type PatientRecordAvgOrderByAggregateInput = {
    temperature?: SortOrder
    weight?: SortOrder
    height?: SortOrder
  }

  export type PatientRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    diagnosis?: SortOrder
    notes?: SortOrder
    temperature?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
    patientId?: SortOrder
    appointmentId?: SortOrder
    patientProfileId?: SortOrder
  }

  export type PatientRecordMinOrderByAggregateInput = {
    id?: SortOrder
    diagnosis?: SortOrder
    notes?: SortOrder
    temperature?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
    patientId?: SortOrder
    appointmentId?: SortOrder
    patientProfileId?: SortOrder
  }

  export type PatientRecordSumOrderByAggregateInput = {
    temperature?: SortOrder
    weight?: SortOrder
    height?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumPrescriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PrescriptionStatus | EnumPrescriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PrescriptionStatus[] | ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrescriptionStatus[] | ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPrescriptionStatusFilter<$PrismaModel> | $Enums.PrescriptionStatus
  }

  export type AppointmentNullableScalarRelationFilter = {
    is?: AppointmentWhereInput | null
    isNot?: AppointmentWhereInput | null
  }

  export type PrescriptionCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    appointmentId?: SortOrder
    medications?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PrescriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    appointmentId?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PrescriptionMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    appointmentId?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumPrescriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrescriptionStatus | EnumPrescriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PrescriptionStatus[] | ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrescriptionStatus[] | ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPrescriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.PrescriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrescriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumPrescriptionStatusFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DoctorProfileScalarRelationFilter = {
    is?: DoctorProfileWhereInput
    isNot?: DoctorProfileWhereInput
  }

  export type DoctorAvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type DoctorAvailabilityAvgOrderByAggregateInput = {
    dayOfWeek?: SortOrder
  }

  export type DoctorAvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type DoctorAvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type DoctorAvailabilitySumOrderByAggregateInput = {
    dayOfWeek?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceNumber?: SortOrder
    patientId?: SortOrder
    appointmentId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceNumber?: SortOrder
    patientId?: SortOrder
    appointmentId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceNumber?: SortOrder
    patientId?: SortOrder
    appointmentId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
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

  export type EnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
  }

  export type InvoiceScalarRelationFilter = {
    is?: InvoiceWhereInput
    isNot?: InvoiceWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type InventoryListRelationFilter = {
    every?: InventoryWhereInput
    some?: InventoryWhereInput
    none?: InventoryWhereInput
  }

  export type InventoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type MedicationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type MedicationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type MedicationScalarRelationFilter = {
    is?: MedicationWhereInput
    isNot?: MedicationWhereInput
  }

  export type InventoryCountOrderByAggregateInput = {
    id?: SortOrder
    medicationId?: SortOrder
    quantity?: SortOrder
    batchNumber?: SortOrder
    expirationDate?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type InventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    medicationId?: SortOrder
    quantity?: SortOrder
    batchNumber?: SortOrder
    expirationDate?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryMinOrderByAggregateInput = {
    id?: SortOrder
    medicationId?: SortOrder
    quantity?: SortOrder
    batchNumber?: SortOrder
    expirationDate?: SortOrder
    createdAt?: SortOrder
  }

  export type InventorySumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
  }

  export type AppointmentCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type DoctorProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorProfileCreateWithoutUserInput, DoctorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutUserInput
    connect?: DoctorProfileWhereUniqueInput
  }

  export type InvoiceCreateNestedManyWithoutPatientInput = {
    create?: XOR<InvoiceCreateWithoutPatientInput, InvoiceUncheckedCreateWithoutPatientInput> | InvoiceCreateWithoutPatientInput[] | InvoiceUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutPatientInput | InvoiceCreateOrConnectWithoutPatientInput[]
    createMany?: InvoiceCreateManyPatientInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type PatientProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientProfileCreateWithoutUserInput, PatientProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientProfileCreateOrConnectWithoutUserInput
    connect?: PatientProfileWhereUniqueInput
  }

  export type PatientRecordCreateNestedManyWithoutPatientInput = {
    create?: XOR<PatientRecordCreateWithoutPatientInput, PatientRecordUncheckedCreateWithoutPatientInput> | PatientRecordCreateWithoutPatientInput[] | PatientRecordUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientRecordCreateOrConnectWithoutPatientInput | PatientRecordCreateOrConnectWithoutPatientInput[]
    createMany?: PatientRecordCreateManyPatientInputEnvelope
    connect?: PatientRecordWhereUniqueInput | PatientRecordWhereUniqueInput[]
  }

  export type PrescriptionCreateNestedManyWithoutDoctorInput = {
    create?: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput> | PrescriptionCreateWithoutDoctorInput[] | PrescriptionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutDoctorInput | PrescriptionCreateOrConnectWithoutDoctorInput[]
    createMany?: PrescriptionCreateManyDoctorInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type PrescriptionCreateNestedManyWithoutPatientInput = {
    create?: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput> | PrescriptionCreateWithoutPatientInput[] | PrescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientInput | PrescriptionCreateOrConnectWithoutPatientInput[]
    createMany?: PrescriptionCreateManyPatientInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type DoctorProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorProfileCreateWithoutUserInput, DoctorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutUserInput
    connect?: DoctorProfileWhereUniqueInput
  }

  export type InvoiceUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<InvoiceCreateWithoutPatientInput, InvoiceUncheckedCreateWithoutPatientInput> | InvoiceCreateWithoutPatientInput[] | InvoiceUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutPatientInput | InvoiceCreateOrConnectWithoutPatientInput[]
    createMany?: InvoiceCreateManyPatientInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type PatientProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientProfileCreateWithoutUserInput, PatientProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientProfileCreateOrConnectWithoutUserInput
    connect?: PatientProfileWhereUniqueInput
  }

  export type PatientRecordUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<PatientRecordCreateWithoutPatientInput, PatientRecordUncheckedCreateWithoutPatientInput> | PatientRecordCreateWithoutPatientInput[] | PatientRecordUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientRecordCreateOrConnectWithoutPatientInput | PatientRecordCreateOrConnectWithoutPatientInput[]
    createMany?: PatientRecordCreateManyPatientInputEnvelope
    connect?: PatientRecordWhereUniqueInput | PatientRecordWhereUniqueInput[]
  }

  export type PrescriptionUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput> | PrescriptionCreateWithoutDoctorInput[] | PrescriptionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutDoctorInput | PrescriptionCreateOrConnectWithoutDoctorInput[]
    createMany?: PrescriptionCreateManyDoctorInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type PrescriptionUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput> | PrescriptionCreateWithoutPatientInput[] | PrescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientInput | PrescriptionCreateOrConnectWithoutPatientInput[]
    createMany?: PrescriptionCreateManyPatientInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AppointmentUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientInput | AppointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientInput | AppointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientInput | AppointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type DoctorProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorProfileCreateWithoutUserInput, DoctorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutUserInput
    upsert?: DoctorProfileUpsertWithoutUserInput
    disconnect?: DoctorProfileWhereInput | boolean
    delete?: DoctorProfileWhereInput | boolean
    connect?: DoctorProfileWhereUniqueInput
    update?: XOR<XOR<DoctorProfileUpdateToOneWithWhereWithoutUserInput, DoctorProfileUpdateWithoutUserInput>, DoctorProfileUncheckedUpdateWithoutUserInput>
  }

  export type InvoiceUpdateManyWithoutPatientNestedInput = {
    create?: XOR<InvoiceCreateWithoutPatientInput, InvoiceUncheckedCreateWithoutPatientInput> | InvoiceCreateWithoutPatientInput[] | InvoiceUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutPatientInput | InvoiceCreateOrConnectWithoutPatientInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutPatientInput | InvoiceUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: InvoiceCreateManyPatientInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutPatientInput | InvoiceUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutPatientInput | InvoiceUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type PatientProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientProfileCreateWithoutUserInput, PatientProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientProfileCreateOrConnectWithoutUserInput
    upsert?: PatientProfileUpsertWithoutUserInput
    disconnect?: PatientProfileWhereInput | boolean
    delete?: PatientProfileWhereInput | boolean
    connect?: PatientProfileWhereUniqueInput
    update?: XOR<XOR<PatientProfileUpdateToOneWithWhereWithoutUserInput, PatientProfileUpdateWithoutUserInput>, PatientProfileUncheckedUpdateWithoutUserInput>
  }

  export type PatientRecordUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PatientRecordCreateWithoutPatientInput, PatientRecordUncheckedCreateWithoutPatientInput> | PatientRecordCreateWithoutPatientInput[] | PatientRecordUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientRecordCreateOrConnectWithoutPatientInput | PatientRecordCreateOrConnectWithoutPatientInput[]
    upsert?: PatientRecordUpsertWithWhereUniqueWithoutPatientInput | PatientRecordUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PatientRecordCreateManyPatientInputEnvelope
    set?: PatientRecordWhereUniqueInput | PatientRecordWhereUniqueInput[]
    disconnect?: PatientRecordWhereUniqueInput | PatientRecordWhereUniqueInput[]
    delete?: PatientRecordWhereUniqueInput | PatientRecordWhereUniqueInput[]
    connect?: PatientRecordWhereUniqueInput | PatientRecordWhereUniqueInput[]
    update?: PatientRecordUpdateWithWhereUniqueWithoutPatientInput | PatientRecordUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PatientRecordUpdateManyWithWhereWithoutPatientInput | PatientRecordUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PatientRecordScalarWhereInput | PatientRecordScalarWhereInput[]
  }

  export type PrescriptionUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput> | PrescriptionCreateWithoutDoctorInput[] | PrescriptionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutDoctorInput | PrescriptionCreateOrConnectWithoutDoctorInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutDoctorInput | PrescriptionUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: PrescriptionCreateManyDoctorInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutDoctorInput | PrescriptionUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutDoctorInput | PrescriptionUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type PrescriptionUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput> | PrescriptionCreateWithoutPatientInput[] | PrescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientInput | PrescriptionCreateOrConnectWithoutPatientInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutPatientInput | PrescriptionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PrescriptionCreateManyPatientInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutPatientInput | PrescriptionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutPatientInput | PrescriptionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientInput | AppointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientInput | AppointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientInput | AppointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type DoctorProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorProfileCreateWithoutUserInput, DoctorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutUserInput
    upsert?: DoctorProfileUpsertWithoutUserInput
    disconnect?: DoctorProfileWhereInput | boolean
    delete?: DoctorProfileWhereInput | boolean
    connect?: DoctorProfileWhereUniqueInput
    update?: XOR<XOR<DoctorProfileUpdateToOneWithWhereWithoutUserInput, DoctorProfileUpdateWithoutUserInput>, DoctorProfileUncheckedUpdateWithoutUserInput>
  }

  export type InvoiceUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<InvoiceCreateWithoutPatientInput, InvoiceUncheckedCreateWithoutPatientInput> | InvoiceCreateWithoutPatientInput[] | InvoiceUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutPatientInput | InvoiceCreateOrConnectWithoutPatientInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutPatientInput | InvoiceUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: InvoiceCreateManyPatientInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutPatientInput | InvoiceUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutPatientInput | InvoiceUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type PatientProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientProfileCreateWithoutUserInput, PatientProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientProfileCreateOrConnectWithoutUserInput
    upsert?: PatientProfileUpsertWithoutUserInput
    disconnect?: PatientProfileWhereInput | boolean
    delete?: PatientProfileWhereInput | boolean
    connect?: PatientProfileWhereUniqueInput
    update?: XOR<XOR<PatientProfileUpdateToOneWithWhereWithoutUserInput, PatientProfileUpdateWithoutUserInput>, PatientProfileUncheckedUpdateWithoutUserInput>
  }

  export type PatientRecordUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PatientRecordCreateWithoutPatientInput, PatientRecordUncheckedCreateWithoutPatientInput> | PatientRecordCreateWithoutPatientInput[] | PatientRecordUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientRecordCreateOrConnectWithoutPatientInput | PatientRecordCreateOrConnectWithoutPatientInput[]
    upsert?: PatientRecordUpsertWithWhereUniqueWithoutPatientInput | PatientRecordUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PatientRecordCreateManyPatientInputEnvelope
    set?: PatientRecordWhereUniqueInput | PatientRecordWhereUniqueInput[]
    disconnect?: PatientRecordWhereUniqueInput | PatientRecordWhereUniqueInput[]
    delete?: PatientRecordWhereUniqueInput | PatientRecordWhereUniqueInput[]
    connect?: PatientRecordWhereUniqueInput | PatientRecordWhereUniqueInput[]
    update?: PatientRecordUpdateWithWhereUniqueWithoutPatientInput | PatientRecordUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PatientRecordUpdateManyWithWhereWithoutPatientInput | PatientRecordUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PatientRecordScalarWhereInput | PatientRecordScalarWhereInput[]
  }

  export type PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput> | PrescriptionCreateWithoutDoctorInput[] | PrescriptionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutDoctorInput | PrescriptionCreateOrConnectWithoutDoctorInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutDoctorInput | PrescriptionUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: PrescriptionCreateManyDoctorInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutDoctorInput | PrescriptionUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutDoctorInput | PrescriptionUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type PrescriptionUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput> | PrescriptionCreateWithoutPatientInput[] | PrescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientInput | PrescriptionCreateOrConnectWithoutPatientInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutPatientInput | PrescriptionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PrescriptionCreateManyPatientInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutPatientInput | PrescriptionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutPatientInput | PrescriptionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPatientProfileInput = {
    create?: XOR<UserCreateWithoutPatientProfileInput, UserUncheckedCreateWithoutPatientProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientProfileInput
    connect?: UserWhereUniqueInput
  }

  export type PatientRecordCreateNestedManyWithoutPatientProfileInput = {
    create?: XOR<PatientRecordCreateWithoutPatientProfileInput, PatientRecordUncheckedCreateWithoutPatientProfileInput> | PatientRecordCreateWithoutPatientProfileInput[] | PatientRecordUncheckedCreateWithoutPatientProfileInput[]
    connectOrCreate?: PatientRecordCreateOrConnectWithoutPatientProfileInput | PatientRecordCreateOrConnectWithoutPatientProfileInput[]
    createMany?: PatientRecordCreateManyPatientProfileInputEnvelope
    connect?: PatientRecordWhereUniqueInput | PatientRecordWhereUniqueInput[]
  }

  export type PatientRecordUncheckedCreateNestedManyWithoutPatientProfileInput = {
    create?: XOR<PatientRecordCreateWithoutPatientProfileInput, PatientRecordUncheckedCreateWithoutPatientProfileInput> | PatientRecordCreateWithoutPatientProfileInput[] | PatientRecordUncheckedCreateWithoutPatientProfileInput[]
    connectOrCreate?: PatientRecordCreateOrConnectWithoutPatientProfileInput | PatientRecordCreateOrConnectWithoutPatientProfileInput[]
    createMany?: PatientRecordCreateManyPatientProfileInputEnvelope
    connect?: PatientRecordWhereUniqueInput | PatientRecordWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutPatientProfileNestedInput = {
    create?: XOR<UserCreateWithoutPatientProfileInput, UserUncheckedCreateWithoutPatientProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientProfileInput
    upsert?: UserUpsertWithoutPatientProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPatientProfileInput, UserUpdateWithoutPatientProfileInput>, UserUncheckedUpdateWithoutPatientProfileInput>
  }

  export type PatientRecordUpdateManyWithoutPatientProfileNestedInput = {
    create?: XOR<PatientRecordCreateWithoutPatientProfileInput, PatientRecordUncheckedCreateWithoutPatientProfileInput> | PatientRecordCreateWithoutPatientProfileInput[] | PatientRecordUncheckedCreateWithoutPatientProfileInput[]
    connectOrCreate?: PatientRecordCreateOrConnectWithoutPatientProfileInput | PatientRecordCreateOrConnectWithoutPatientProfileInput[]
    upsert?: PatientRecordUpsertWithWhereUniqueWithoutPatientProfileInput | PatientRecordUpsertWithWhereUniqueWithoutPatientProfileInput[]
    createMany?: PatientRecordCreateManyPatientProfileInputEnvelope
    set?: PatientRecordWhereUniqueInput | PatientRecordWhereUniqueInput[]
    disconnect?: PatientRecordWhereUniqueInput | PatientRecordWhereUniqueInput[]
    delete?: PatientRecordWhereUniqueInput | PatientRecordWhereUniqueInput[]
    connect?: PatientRecordWhereUniqueInput | PatientRecordWhereUniqueInput[]
    update?: PatientRecordUpdateWithWhereUniqueWithoutPatientProfileInput | PatientRecordUpdateWithWhereUniqueWithoutPatientProfileInput[]
    updateMany?: PatientRecordUpdateManyWithWhereWithoutPatientProfileInput | PatientRecordUpdateManyWithWhereWithoutPatientProfileInput[]
    deleteMany?: PatientRecordScalarWhereInput | PatientRecordScalarWhereInput[]
  }

  export type PatientRecordUncheckedUpdateManyWithoutPatientProfileNestedInput = {
    create?: XOR<PatientRecordCreateWithoutPatientProfileInput, PatientRecordUncheckedCreateWithoutPatientProfileInput> | PatientRecordCreateWithoutPatientProfileInput[] | PatientRecordUncheckedCreateWithoutPatientProfileInput[]
    connectOrCreate?: PatientRecordCreateOrConnectWithoutPatientProfileInput | PatientRecordCreateOrConnectWithoutPatientProfileInput[]
    upsert?: PatientRecordUpsertWithWhereUniqueWithoutPatientProfileInput | PatientRecordUpsertWithWhereUniqueWithoutPatientProfileInput[]
    createMany?: PatientRecordCreateManyPatientProfileInputEnvelope
    set?: PatientRecordWhereUniqueInput | PatientRecordWhereUniqueInput[]
    disconnect?: PatientRecordWhereUniqueInput | PatientRecordWhereUniqueInput[]
    delete?: PatientRecordWhereUniqueInput | PatientRecordWhereUniqueInput[]
    connect?: PatientRecordWhereUniqueInput | PatientRecordWhereUniqueInput[]
    update?: PatientRecordUpdateWithWhereUniqueWithoutPatientProfileInput | PatientRecordUpdateWithWhereUniqueWithoutPatientProfileInput[]
    updateMany?: PatientRecordUpdateManyWithWhereWithoutPatientProfileInput | PatientRecordUpdateManyWithWhereWithoutPatientProfileInput[]
    deleteMany?: PatientRecordScalarWhereInput | PatientRecordScalarWhereInput[]
  }

  export type DoctorAvailabilityCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorAvailabilityCreateWithoutDoctorInput, DoctorAvailabilityUncheckedCreateWithoutDoctorInput> | DoctorAvailabilityCreateWithoutDoctorInput[] | DoctorAvailabilityUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorAvailabilityCreateOrConnectWithoutDoctorInput | DoctorAvailabilityCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorAvailabilityCreateManyDoctorInputEnvelope
    connect?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutDoctorProfileInput = {
    create?: XOR<UserCreateWithoutDoctorProfileInput, UserUncheckedCreateWithoutDoctorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorProfileInput
    connect?: UserWhereUniqueInput
  }

  export type DoctorAvailabilityUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorAvailabilityCreateWithoutDoctorInput, DoctorAvailabilityUncheckedCreateWithoutDoctorInput> | DoctorAvailabilityCreateWithoutDoctorInput[] | DoctorAvailabilityUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorAvailabilityCreateOrConnectWithoutDoctorInput | DoctorAvailabilityCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorAvailabilityCreateManyDoctorInputEnvelope
    connect?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
  }

  export type DoctorAvailabilityUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorAvailabilityCreateWithoutDoctorInput, DoctorAvailabilityUncheckedCreateWithoutDoctorInput> | DoctorAvailabilityCreateWithoutDoctorInput[] | DoctorAvailabilityUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorAvailabilityCreateOrConnectWithoutDoctorInput | DoctorAvailabilityCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorAvailabilityUpsertWithWhereUniqueWithoutDoctorInput | DoctorAvailabilityUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorAvailabilityCreateManyDoctorInputEnvelope
    set?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
    disconnect?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
    delete?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
    connect?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
    update?: DoctorAvailabilityUpdateWithWhereUniqueWithoutDoctorInput | DoctorAvailabilityUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorAvailabilityUpdateManyWithWhereWithoutDoctorInput | DoctorAvailabilityUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorAvailabilityScalarWhereInput | DoctorAvailabilityScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutDoctorProfileNestedInput = {
    create?: XOR<UserCreateWithoutDoctorProfileInput, UserUncheckedCreateWithoutDoctorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorProfileInput
    upsert?: UserUpsertWithoutDoctorProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDoctorProfileInput, UserUpdateWithoutDoctorProfileInput>, UserUncheckedUpdateWithoutDoctorProfileInput>
  }

  export type DoctorAvailabilityUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorAvailabilityCreateWithoutDoctorInput, DoctorAvailabilityUncheckedCreateWithoutDoctorInput> | DoctorAvailabilityCreateWithoutDoctorInput[] | DoctorAvailabilityUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorAvailabilityCreateOrConnectWithoutDoctorInput | DoctorAvailabilityCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorAvailabilityUpsertWithWhereUniqueWithoutDoctorInput | DoctorAvailabilityUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorAvailabilityCreateManyDoctorInputEnvelope
    set?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
    disconnect?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
    delete?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
    connect?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
    update?: DoctorAvailabilityUpdateWithWhereUniqueWithoutDoctorInput | DoctorAvailabilityUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorAvailabilityUpdateManyWithWhereWithoutDoctorInput | DoctorAvailabilityUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorAvailabilityScalarWhereInput | DoctorAvailabilityScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAppointmentsAsDoctorInput = {
    create?: XOR<UserCreateWithoutAppointmentsAsDoctorInput, UserUncheckedCreateWithoutAppointmentsAsDoctorInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsAsDoctorInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAppointmentsAsPatientInput = {
    create?: XOR<UserCreateWithoutAppointmentsAsPatientInput, UserUncheckedCreateWithoutAppointmentsAsPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsAsPatientInput
    connect?: UserWhereUniqueInput
  }

  export type InvoiceCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<InvoiceCreateWithoutAppointmentInput, InvoiceUncheckedCreateWithoutAppointmentInput> | InvoiceCreateWithoutAppointmentInput[] | InvoiceUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutAppointmentInput | InvoiceCreateOrConnectWithoutAppointmentInput[]
    createMany?: InvoiceCreateManyAppointmentInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type PatientRecordCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<PatientRecordCreateWithoutAppointmentInput, PatientRecordUncheckedCreateWithoutAppointmentInput> | PatientRecordCreateWithoutAppointmentInput[] | PatientRecordUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: PatientRecordCreateOrConnectWithoutAppointmentInput | PatientRecordCreateOrConnectWithoutAppointmentInput[]
    createMany?: PatientRecordCreateManyAppointmentInputEnvelope
    connect?: PatientRecordWhereUniqueInput | PatientRecordWhereUniqueInput[]
  }

  export type PrescriptionCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<PrescriptionCreateWithoutAppointmentInput, PrescriptionUncheckedCreateWithoutAppointmentInput> | PrescriptionCreateWithoutAppointmentInput[] | PrescriptionUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutAppointmentInput | PrescriptionCreateOrConnectWithoutAppointmentInput[]
    createMany?: PrescriptionCreateManyAppointmentInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<InvoiceCreateWithoutAppointmentInput, InvoiceUncheckedCreateWithoutAppointmentInput> | InvoiceCreateWithoutAppointmentInput[] | InvoiceUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutAppointmentInput | InvoiceCreateOrConnectWithoutAppointmentInput[]
    createMany?: InvoiceCreateManyAppointmentInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type PatientRecordUncheckedCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<PatientRecordCreateWithoutAppointmentInput, PatientRecordUncheckedCreateWithoutAppointmentInput> | PatientRecordCreateWithoutAppointmentInput[] | PatientRecordUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: PatientRecordCreateOrConnectWithoutAppointmentInput | PatientRecordCreateOrConnectWithoutAppointmentInput[]
    createMany?: PatientRecordCreateManyAppointmentInputEnvelope
    connect?: PatientRecordWhereUniqueInput | PatientRecordWhereUniqueInput[]
  }

  export type PrescriptionUncheckedCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<PrescriptionCreateWithoutAppointmentInput, PrescriptionUncheckedCreateWithoutAppointmentInput> | PrescriptionCreateWithoutAppointmentInput[] | PrescriptionUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutAppointmentInput | PrescriptionCreateOrConnectWithoutAppointmentInput[]
    createMany?: PrescriptionCreateManyAppointmentInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type EnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentStatus
  }

  export type UserUpdateOneRequiredWithoutAppointmentsAsDoctorNestedInput = {
    create?: XOR<UserCreateWithoutAppointmentsAsDoctorInput, UserUncheckedCreateWithoutAppointmentsAsDoctorInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsAsDoctorInput
    upsert?: UserUpsertWithoutAppointmentsAsDoctorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAppointmentsAsDoctorInput, UserUpdateWithoutAppointmentsAsDoctorInput>, UserUncheckedUpdateWithoutAppointmentsAsDoctorInput>
  }

  export type UserUpdateOneRequiredWithoutAppointmentsAsPatientNestedInput = {
    create?: XOR<UserCreateWithoutAppointmentsAsPatientInput, UserUncheckedCreateWithoutAppointmentsAsPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsAsPatientInput
    upsert?: UserUpsertWithoutAppointmentsAsPatientInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAppointmentsAsPatientInput, UserUpdateWithoutAppointmentsAsPatientInput>, UserUncheckedUpdateWithoutAppointmentsAsPatientInput>
  }

  export type InvoiceUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<InvoiceCreateWithoutAppointmentInput, InvoiceUncheckedCreateWithoutAppointmentInput> | InvoiceCreateWithoutAppointmentInput[] | InvoiceUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutAppointmentInput | InvoiceCreateOrConnectWithoutAppointmentInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutAppointmentInput | InvoiceUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: InvoiceCreateManyAppointmentInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutAppointmentInput | InvoiceUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutAppointmentInput | InvoiceUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type PatientRecordUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<PatientRecordCreateWithoutAppointmentInput, PatientRecordUncheckedCreateWithoutAppointmentInput> | PatientRecordCreateWithoutAppointmentInput[] | PatientRecordUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: PatientRecordCreateOrConnectWithoutAppointmentInput | PatientRecordCreateOrConnectWithoutAppointmentInput[]
    upsert?: PatientRecordUpsertWithWhereUniqueWithoutAppointmentInput | PatientRecordUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: PatientRecordCreateManyAppointmentInputEnvelope
    set?: PatientRecordWhereUniqueInput | PatientRecordWhereUniqueInput[]
    disconnect?: PatientRecordWhereUniqueInput | PatientRecordWhereUniqueInput[]
    delete?: PatientRecordWhereUniqueInput | PatientRecordWhereUniqueInput[]
    connect?: PatientRecordWhereUniqueInput | PatientRecordWhereUniqueInput[]
    update?: PatientRecordUpdateWithWhereUniqueWithoutAppointmentInput | PatientRecordUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: PatientRecordUpdateManyWithWhereWithoutAppointmentInput | PatientRecordUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: PatientRecordScalarWhereInput | PatientRecordScalarWhereInput[]
  }

  export type PrescriptionUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<PrescriptionCreateWithoutAppointmentInput, PrescriptionUncheckedCreateWithoutAppointmentInput> | PrescriptionCreateWithoutAppointmentInput[] | PrescriptionUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutAppointmentInput | PrescriptionCreateOrConnectWithoutAppointmentInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutAppointmentInput | PrescriptionUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: PrescriptionCreateManyAppointmentInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutAppointmentInput | PrescriptionUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutAppointmentInput | PrescriptionUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<InvoiceCreateWithoutAppointmentInput, InvoiceUncheckedCreateWithoutAppointmentInput> | InvoiceCreateWithoutAppointmentInput[] | InvoiceUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutAppointmentInput | InvoiceCreateOrConnectWithoutAppointmentInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutAppointmentInput | InvoiceUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: InvoiceCreateManyAppointmentInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutAppointmentInput | InvoiceUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutAppointmentInput | InvoiceUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type PatientRecordUncheckedUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<PatientRecordCreateWithoutAppointmentInput, PatientRecordUncheckedCreateWithoutAppointmentInput> | PatientRecordCreateWithoutAppointmentInput[] | PatientRecordUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: PatientRecordCreateOrConnectWithoutAppointmentInput | PatientRecordCreateOrConnectWithoutAppointmentInput[]
    upsert?: PatientRecordUpsertWithWhereUniqueWithoutAppointmentInput | PatientRecordUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: PatientRecordCreateManyAppointmentInputEnvelope
    set?: PatientRecordWhereUniqueInput | PatientRecordWhereUniqueInput[]
    disconnect?: PatientRecordWhereUniqueInput | PatientRecordWhereUniqueInput[]
    delete?: PatientRecordWhereUniqueInput | PatientRecordWhereUniqueInput[]
    connect?: PatientRecordWhereUniqueInput | PatientRecordWhereUniqueInput[]
    update?: PatientRecordUpdateWithWhereUniqueWithoutAppointmentInput | PatientRecordUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: PatientRecordUpdateManyWithWhereWithoutAppointmentInput | PatientRecordUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: PatientRecordScalarWhereInput | PatientRecordScalarWhereInput[]
  }

  export type PrescriptionUncheckedUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<PrescriptionCreateWithoutAppointmentInput, PrescriptionUncheckedCreateWithoutAppointmentInput> | PrescriptionCreateWithoutAppointmentInput[] | PrescriptionUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutAppointmentInput | PrescriptionCreateOrConnectWithoutAppointmentInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutAppointmentInput | PrescriptionUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: PrescriptionCreateManyAppointmentInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutAppointmentInput | PrescriptionUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutAppointmentInput | PrescriptionUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type AppointmentCreateNestedOneWithoutRecordsInput = {
    create?: XOR<AppointmentCreateWithoutRecordsInput, AppointmentUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutRecordsInput
    connect?: AppointmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPatientRecordsInput = {
    create?: XOR<UserCreateWithoutPatientRecordsInput, UserUncheckedCreateWithoutPatientRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type PatientProfileCreateNestedOneWithoutRecordsInput = {
    create?: XOR<PatientProfileCreateWithoutRecordsInput, PatientProfileUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: PatientProfileCreateOrConnectWithoutRecordsInput
    connect?: PatientProfileWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AppointmentUpdateOneRequiredWithoutRecordsNestedInput = {
    create?: XOR<AppointmentCreateWithoutRecordsInput, AppointmentUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutRecordsInput
    upsert?: AppointmentUpsertWithoutRecordsInput
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutRecordsInput, AppointmentUpdateWithoutRecordsInput>, AppointmentUncheckedUpdateWithoutRecordsInput>
  }

  export type UserUpdateOneRequiredWithoutPatientRecordsNestedInput = {
    create?: XOR<UserCreateWithoutPatientRecordsInput, UserUncheckedCreateWithoutPatientRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientRecordsInput
    upsert?: UserUpsertWithoutPatientRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPatientRecordsInput, UserUpdateWithoutPatientRecordsInput>, UserUncheckedUpdateWithoutPatientRecordsInput>
  }

  export type PatientProfileUpdateOneWithoutRecordsNestedInput = {
    create?: XOR<PatientProfileCreateWithoutRecordsInput, PatientProfileUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: PatientProfileCreateOrConnectWithoutRecordsInput
    upsert?: PatientProfileUpsertWithoutRecordsInput
    disconnect?: PatientProfileWhereInput | boolean
    delete?: PatientProfileWhereInput | boolean
    connect?: PatientProfileWhereUniqueInput
    update?: XOR<XOR<PatientProfileUpdateToOneWithWhereWithoutRecordsInput, PatientProfileUpdateWithoutRecordsInput>, PatientProfileUncheckedUpdateWithoutRecordsInput>
  }

  export type AppointmentCreateNestedOneWithoutPrescriptionsInput = {
    create?: XOR<AppointmentCreateWithoutPrescriptionsInput, AppointmentUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutPrescriptionsInput
    connect?: AppointmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPrescriptionsAsDoctorInput = {
    create?: XOR<UserCreateWithoutPrescriptionsAsDoctorInput, UserUncheckedCreateWithoutPrescriptionsAsDoctorInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrescriptionsAsDoctorInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPrescriptionsAsPatientInput = {
    create?: XOR<UserCreateWithoutPrescriptionsAsPatientInput, UserUncheckedCreateWithoutPrescriptionsAsPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrescriptionsAsPatientInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPrescriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.PrescriptionStatus
  }

  export type AppointmentUpdateOneWithoutPrescriptionsNestedInput = {
    create?: XOR<AppointmentCreateWithoutPrescriptionsInput, AppointmentUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutPrescriptionsInput
    upsert?: AppointmentUpsertWithoutPrescriptionsInput
    disconnect?: AppointmentWhereInput | boolean
    delete?: AppointmentWhereInput | boolean
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutPrescriptionsInput, AppointmentUpdateWithoutPrescriptionsInput>, AppointmentUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type UserUpdateOneRequiredWithoutPrescriptionsAsDoctorNestedInput = {
    create?: XOR<UserCreateWithoutPrescriptionsAsDoctorInput, UserUncheckedCreateWithoutPrescriptionsAsDoctorInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrescriptionsAsDoctorInput
    upsert?: UserUpsertWithoutPrescriptionsAsDoctorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPrescriptionsAsDoctorInput, UserUpdateWithoutPrescriptionsAsDoctorInput>, UserUncheckedUpdateWithoutPrescriptionsAsDoctorInput>
  }

  export type UserUpdateOneRequiredWithoutPrescriptionsAsPatientNestedInput = {
    create?: XOR<UserCreateWithoutPrescriptionsAsPatientInput, UserUncheckedCreateWithoutPrescriptionsAsPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrescriptionsAsPatientInput
    upsert?: UserUpsertWithoutPrescriptionsAsPatientInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPrescriptionsAsPatientInput, UserUpdateWithoutPrescriptionsAsPatientInput>, UserUncheckedUpdateWithoutPrescriptionsAsPatientInput>
  }

  export type DoctorProfileCreateNestedOneWithoutAvailabilityInput = {
    create?: XOR<DoctorProfileCreateWithoutAvailabilityInput, DoctorProfileUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutAvailabilityInput
    connect?: DoctorProfileWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DoctorProfileUpdateOneRequiredWithoutAvailabilityNestedInput = {
    create?: XOR<DoctorProfileCreateWithoutAvailabilityInput, DoctorProfileUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutAvailabilityInput
    upsert?: DoctorProfileUpsertWithoutAvailabilityInput
    connect?: DoctorProfileWhereUniqueInput
    update?: XOR<XOR<DoctorProfileUpdateToOneWithWhereWithoutAvailabilityInput, DoctorProfileUpdateWithoutAvailabilityInput>, DoctorProfileUncheckedUpdateWithoutAvailabilityInput>
  }

  export type AppointmentCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<AppointmentCreateWithoutInvoicesInput, AppointmentUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutInvoicesInput
    connect?: AppointmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvoicesInput
    connect?: UserWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
    createMany?: PaymentCreateManyInvoiceInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
    createMany?: PaymentCreateManyInvoiceInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumInvoiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvoiceStatus
  }

  export type AppointmentUpdateOneWithoutInvoicesNestedInput = {
    create?: XOR<AppointmentCreateWithoutInvoicesInput, AppointmentUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutInvoicesInput
    upsert?: AppointmentUpsertWithoutInvoicesInput
    disconnect?: AppointmentWhereInput | boolean
    delete?: AppointmentWhereInput | boolean
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutInvoicesInput, AppointmentUpdateWithoutInvoicesInput>, AppointmentUncheckedUpdateWithoutInvoicesInput>
  }

  export type UserUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvoicesInput
    upsert?: UserUpsertWithoutInvoicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvoicesInput, UserUpdateWithoutInvoicesInput>, UserUncheckedUpdateWithoutInvoicesInput>
  }

  export type PaymentUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutInvoiceInput | PaymentUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: PaymentCreateManyInvoiceInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutInvoiceInput | PaymentUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutInvoiceInput | PaymentUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutInvoiceInput | PaymentUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: PaymentCreateManyInvoiceInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutInvoiceInput | PaymentUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutInvoiceInput | PaymentUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type InvoiceCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutPaymentsInput
    connect?: InvoiceWhereUniqueInput
  }

  export type InvoiceUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutPaymentsInput
    upsert?: InvoiceUpsertWithoutPaymentsInput
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutPaymentsInput, InvoiceUpdateWithoutPaymentsInput>, InvoiceUncheckedUpdateWithoutPaymentsInput>
  }

  export type InventoryCreateNestedManyWithoutMedicationInput = {
    create?: XOR<InventoryCreateWithoutMedicationInput, InventoryUncheckedCreateWithoutMedicationInput> | InventoryCreateWithoutMedicationInput[] | InventoryUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutMedicationInput | InventoryCreateOrConnectWithoutMedicationInput[]
    createMany?: InventoryCreateManyMedicationInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type InventoryUncheckedCreateNestedManyWithoutMedicationInput = {
    create?: XOR<InventoryCreateWithoutMedicationInput, InventoryUncheckedCreateWithoutMedicationInput> | InventoryCreateWithoutMedicationInput[] | InventoryUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutMedicationInput | InventoryCreateOrConnectWithoutMedicationInput[]
    createMany?: InventoryCreateManyMedicationInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type InventoryUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<InventoryCreateWithoutMedicationInput, InventoryUncheckedCreateWithoutMedicationInput> | InventoryCreateWithoutMedicationInput[] | InventoryUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutMedicationInput | InventoryCreateOrConnectWithoutMedicationInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutMedicationInput | InventoryUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: InventoryCreateManyMedicationInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutMedicationInput | InventoryUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutMedicationInput | InventoryUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type InventoryUncheckedUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<InventoryCreateWithoutMedicationInput, InventoryUncheckedCreateWithoutMedicationInput> | InventoryCreateWithoutMedicationInput[] | InventoryUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutMedicationInput | InventoryCreateOrConnectWithoutMedicationInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutMedicationInput | InventoryUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: InventoryCreateManyMedicationInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutMedicationInput | InventoryUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutMedicationInput | InventoryUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type MedicationCreateNestedOneWithoutInventoriesInput = {
    create?: XOR<MedicationCreateWithoutInventoriesInput, MedicationUncheckedCreateWithoutInventoriesInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutInventoriesInput
    connect?: MedicationWhereUniqueInput
  }

  export type MedicationUpdateOneRequiredWithoutInventoriesNestedInput = {
    create?: XOR<MedicationCreateWithoutInventoriesInput, MedicationUncheckedCreateWithoutInventoriesInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutInventoriesInput
    upsert?: MedicationUpsertWithoutInventoriesInput
    connect?: MedicationWhereUniqueInput
    update?: XOR<XOR<MedicationUpdateToOneWithWhereWithoutInventoriesInput, MedicationUpdateWithoutInventoriesInput>, MedicationUncheckedUpdateWithoutInventoriesInput>
  }

  export type UserCreateNestedOneWithoutLogsInput = {
    create?: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogsInput
    upsert?: UserUpsertWithoutLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLogsInput, UserUpdateWithoutLogsInput>, UserUncheckedUpdateWithoutLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumPrescriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PrescriptionStatus | EnumPrescriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PrescriptionStatus[] | ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrescriptionStatus[] | ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPrescriptionStatusFilter<$PrismaModel> | $Enums.PrescriptionStatus
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumPrescriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrescriptionStatus | EnumPrescriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PrescriptionStatus[] | ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrescriptionStatus[] | ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPrescriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.PrescriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrescriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumPrescriptionStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
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

  export type NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
  }

  export type AppointmentCreateWithoutDoctorInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: UserCreateNestedOneWithoutAppointmentsAsPatientInput
    invoices?: InvoiceCreateNestedManyWithoutAppointmentInput
    records?: PatientRecordCreateNestedManyWithoutAppointmentInput
    prescriptions?: PrescriptionCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutDoctorInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patientId: string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutAppointmentInput
    records?: PatientRecordUncheckedCreateNestedManyWithoutAppointmentInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentCreateManyDoctorInputEnvelope = {
    data: AppointmentCreateManyDoctorInput | AppointmentCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutPatientInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: UserCreateNestedOneWithoutAppointmentsAsDoctorInput
    invoices?: InvoiceCreateNestedManyWithoutAppointmentInput
    records?: PatientRecordCreateNestedManyWithoutAppointmentInput
    prescriptions?: PrescriptionCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutPatientInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorId: string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutAppointmentInput
    records?: PatientRecordUncheckedCreateNestedManyWithoutAppointmentInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentCreateManyPatientInputEnvelope = {
    data: AppointmentCreateManyPatientInput | AppointmentCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutUserInput = {
    id?: string
    action: string
    entity: string
    entityId?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutUserInput = {
    id?: string
    action: string
    entity: string
    entityId?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DoctorProfileCreateWithoutUserInput = {
    id?: string
    crm: string
    specialization: string
    bio?: string | null
    createdAt?: Date | string
    availability?: DoctorAvailabilityCreateNestedManyWithoutDoctorInput
  }

  export type DoctorProfileUncheckedCreateWithoutUserInput = {
    id?: string
    crm: string
    specialization: string
    bio?: string | null
    createdAt?: Date | string
    availability?: DoctorAvailabilityUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorProfileCreateOrConnectWithoutUserInput = {
    where: DoctorProfileWhereUniqueInput
    create: XOR<DoctorProfileCreateWithoutUserInput, DoctorProfileUncheckedCreateWithoutUserInput>
  }

  export type InvoiceCreateWithoutPatientInput = {
    id?: string
    invoiceNumber: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.InvoiceStatus
    dueDate: Date | string
    createdAt?: Date | string
    appointment?: AppointmentCreateNestedOneWithoutInvoicesInput
    payments?: PaymentCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutPatientInput = {
    id?: string
    invoiceNumber: string
    appointmentId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.InvoiceStatus
    dueDate: Date | string
    createdAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutPatientInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutPatientInput, InvoiceUncheckedCreateWithoutPatientInput>
  }

  export type InvoiceCreateManyPatientInputEnvelope = {
    data: InvoiceCreateManyPatientInput | InvoiceCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type PatientProfileCreateWithoutUserInput = {
    id?: string
    birthDate?: Date | string | null
    gender?: string | null
    address?: string | null
    bloodType?: string | null
    allergies?: string | null
    createdAt?: Date | string
    records?: PatientRecordCreateNestedManyWithoutPatientProfileInput
  }

  export type PatientProfileUncheckedCreateWithoutUserInput = {
    id?: string
    birthDate?: Date | string | null
    gender?: string | null
    address?: string | null
    bloodType?: string | null
    allergies?: string | null
    createdAt?: Date | string
    records?: PatientRecordUncheckedCreateNestedManyWithoutPatientProfileInput
  }

  export type PatientProfileCreateOrConnectWithoutUserInput = {
    where: PatientProfileWhereUniqueInput
    create: XOR<PatientProfileCreateWithoutUserInput, PatientProfileUncheckedCreateWithoutUserInput>
  }

  export type PatientRecordCreateWithoutPatientInput = {
    id?: string
    diagnosis?: string | null
    notes?: string | null
    labResults?: NullableJsonNullValueInput | InputJsonValue
    attachments?: NullableJsonNullValueInput | InputJsonValue
    temperature?: number | null
    weight?: number | null
    height?: number | null
    createdAt?: Date | string
    appointment: AppointmentCreateNestedOneWithoutRecordsInput
    patientProfile?: PatientProfileCreateNestedOneWithoutRecordsInput
  }

  export type PatientRecordUncheckedCreateWithoutPatientInput = {
    id?: string
    diagnosis?: string | null
    notes?: string | null
    labResults?: NullableJsonNullValueInput | InputJsonValue
    attachments?: NullableJsonNullValueInput | InputJsonValue
    temperature?: number | null
    weight?: number | null
    height?: number | null
    createdAt?: Date | string
    appointmentId: string
    patientProfileId?: string | null
  }

  export type PatientRecordCreateOrConnectWithoutPatientInput = {
    where: PatientRecordWhereUniqueInput
    create: XOR<PatientRecordCreateWithoutPatientInput, PatientRecordUncheckedCreateWithoutPatientInput>
  }

  export type PatientRecordCreateManyPatientInputEnvelope = {
    data: PatientRecordCreateManyPatientInput | PatientRecordCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type PrescriptionCreateWithoutDoctorInput = {
    id?: string
    medications: JsonNullValueInput | InputJsonValue
    notes?: string | null
    status?: $Enums.PrescriptionStatus
    createdAt?: Date | string
    appointment?: AppointmentCreateNestedOneWithoutPrescriptionsInput
    patient: UserCreateNestedOneWithoutPrescriptionsAsPatientInput
  }

  export type PrescriptionUncheckedCreateWithoutDoctorInput = {
    id?: string
    patientId: string
    appointmentId?: string | null
    medications: JsonNullValueInput | InputJsonValue
    notes?: string | null
    status?: $Enums.PrescriptionStatus
    createdAt?: Date | string
  }

  export type PrescriptionCreateOrConnectWithoutDoctorInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput>
  }

  export type PrescriptionCreateManyDoctorInputEnvelope = {
    data: PrescriptionCreateManyDoctorInput | PrescriptionCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type PrescriptionCreateWithoutPatientInput = {
    id?: string
    medications: JsonNullValueInput | InputJsonValue
    notes?: string | null
    status?: $Enums.PrescriptionStatus
    createdAt?: Date | string
    appointment?: AppointmentCreateNestedOneWithoutPrescriptionsInput
    doctor: UserCreateNestedOneWithoutPrescriptionsAsDoctorInput
  }

  export type PrescriptionUncheckedCreateWithoutPatientInput = {
    id?: string
    doctorId: string
    appointmentId?: string | null
    medications: JsonNullValueInput | InputJsonValue
    notes?: string | null
    status?: $Enums.PrescriptionStatus
    createdAt?: Date | string
  }

  export type PrescriptionCreateOrConnectWithoutPatientInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput>
  }

  export type PrescriptionCreateManyPatientInputEnvelope = {
    data: PrescriptionCreateManyPatientInput | PrescriptionCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentUpsertWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutDoctorInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutDoctorInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: StringFilter<"Appointment"> | string
    startTime?: DateTimeFilter<"Appointment"> | Date | string
    endTime?: DateTimeFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    notes?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    patientId?: StringFilter<"Appointment"> | string
    doctorId?: StringFilter<"Appointment"> | string
  }

  export type AppointmentUpsertWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutPatientInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutPatientInput>
  }

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    userId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type DoctorProfileUpsertWithoutUserInput = {
    update: XOR<DoctorProfileUpdateWithoutUserInput, DoctorProfileUncheckedUpdateWithoutUserInput>
    create: XOR<DoctorProfileCreateWithoutUserInput, DoctorProfileUncheckedCreateWithoutUserInput>
    where?: DoctorProfileWhereInput
  }

  export type DoctorProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: DoctorProfileWhereInput
    data: XOR<DoctorProfileUpdateWithoutUserInput, DoctorProfileUncheckedUpdateWithoutUserInput>
  }

  export type DoctorProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    crm?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: DoctorAvailabilityUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    crm?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: DoctorAvailabilityUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type InvoiceUpsertWithWhereUniqueWithoutPatientInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutPatientInput, InvoiceUncheckedUpdateWithoutPatientInput>
    create: XOR<InvoiceCreateWithoutPatientInput, InvoiceUncheckedCreateWithoutPatientInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutPatientInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutPatientInput, InvoiceUncheckedUpdateWithoutPatientInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutPatientInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutPatientInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    id?: StringFilter<"Invoice"> | string
    invoiceNumber?: StringFilter<"Invoice"> | string
    patientId?: StringFilter<"Invoice"> | string
    appointmentId?: StringNullableFilter<"Invoice"> | string | null
    amount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    dueDate?: DateTimeFilter<"Invoice"> | Date | string
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
  }

  export type PatientProfileUpsertWithoutUserInput = {
    update: XOR<PatientProfileUpdateWithoutUserInput, PatientProfileUncheckedUpdateWithoutUserInput>
    create: XOR<PatientProfileCreateWithoutUserInput, PatientProfileUncheckedCreateWithoutUserInput>
    where?: PatientProfileWhereInput
  }

  export type PatientProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: PatientProfileWhereInput
    data: XOR<PatientProfileUpdateWithoutUserInput, PatientProfileUncheckedUpdateWithoutUserInput>
  }

  export type PatientProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodType?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: PatientRecordUpdateManyWithoutPatientProfileNestedInput
  }

  export type PatientProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodType?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: PatientRecordUncheckedUpdateManyWithoutPatientProfileNestedInput
  }

  export type PatientRecordUpsertWithWhereUniqueWithoutPatientInput = {
    where: PatientRecordWhereUniqueInput
    update: XOR<PatientRecordUpdateWithoutPatientInput, PatientRecordUncheckedUpdateWithoutPatientInput>
    create: XOR<PatientRecordCreateWithoutPatientInput, PatientRecordUncheckedCreateWithoutPatientInput>
  }

  export type PatientRecordUpdateWithWhereUniqueWithoutPatientInput = {
    where: PatientRecordWhereUniqueInput
    data: XOR<PatientRecordUpdateWithoutPatientInput, PatientRecordUncheckedUpdateWithoutPatientInput>
  }

  export type PatientRecordUpdateManyWithWhereWithoutPatientInput = {
    where: PatientRecordScalarWhereInput
    data: XOR<PatientRecordUpdateManyMutationInput, PatientRecordUncheckedUpdateManyWithoutPatientInput>
  }

  export type PatientRecordScalarWhereInput = {
    AND?: PatientRecordScalarWhereInput | PatientRecordScalarWhereInput[]
    OR?: PatientRecordScalarWhereInput[]
    NOT?: PatientRecordScalarWhereInput | PatientRecordScalarWhereInput[]
    id?: StringFilter<"PatientRecord"> | string
    diagnosis?: StringNullableFilter<"PatientRecord"> | string | null
    notes?: StringNullableFilter<"PatientRecord"> | string | null
    labResults?: JsonNullableFilter<"PatientRecord">
    attachments?: JsonNullableFilter<"PatientRecord">
    temperature?: FloatNullableFilter<"PatientRecord"> | number | null
    weight?: FloatNullableFilter<"PatientRecord"> | number | null
    height?: FloatNullableFilter<"PatientRecord"> | number | null
    createdAt?: DateTimeFilter<"PatientRecord"> | Date | string
    patientId?: StringFilter<"PatientRecord"> | string
    appointmentId?: StringFilter<"PatientRecord"> | string
    patientProfileId?: StringNullableFilter<"PatientRecord"> | string | null
  }

  export type PrescriptionUpsertWithWhereUniqueWithoutDoctorInput = {
    where: PrescriptionWhereUniqueInput
    update: XOR<PrescriptionUpdateWithoutDoctorInput, PrescriptionUncheckedUpdateWithoutDoctorInput>
    create: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput>
  }

  export type PrescriptionUpdateWithWhereUniqueWithoutDoctorInput = {
    where: PrescriptionWhereUniqueInput
    data: XOR<PrescriptionUpdateWithoutDoctorInput, PrescriptionUncheckedUpdateWithoutDoctorInput>
  }

  export type PrescriptionUpdateManyWithWhereWithoutDoctorInput = {
    where: PrescriptionScalarWhereInput
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyWithoutDoctorInput>
  }

  export type PrescriptionScalarWhereInput = {
    AND?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
    OR?: PrescriptionScalarWhereInput[]
    NOT?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
    id?: StringFilter<"Prescription"> | string
    patientId?: StringFilter<"Prescription"> | string
    doctorId?: StringFilter<"Prescription"> | string
    appointmentId?: StringNullableFilter<"Prescription"> | string | null
    medications?: JsonFilter<"Prescription">
    notes?: StringNullableFilter<"Prescription"> | string | null
    status?: EnumPrescriptionStatusFilter<"Prescription"> | $Enums.PrescriptionStatus
    createdAt?: DateTimeFilter<"Prescription"> | Date | string
  }

  export type PrescriptionUpsertWithWhereUniqueWithoutPatientInput = {
    where: PrescriptionWhereUniqueInput
    update: XOR<PrescriptionUpdateWithoutPatientInput, PrescriptionUncheckedUpdateWithoutPatientInput>
    create: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput>
  }

  export type PrescriptionUpdateWithWhereUniqueWithoutPatientInput = {
    where: PrescriptionWhereUniqueInput
    data: XOR<PrescriptionUpdateWithoutPatientInput, PrescriptionUncheckedUpdateWithoutPatientInput>
  }

  export type PrescriptionUpdateManyWithWhereWithoutPatientInput = {
    where: PrescriptionScalarWhereInput
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyWithoutPatientInput>
  }

  export type UserCreateWithoutPatientProfileInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentsAsDoctor?: AppointmentCreateNestedManyWithoutDoctorInput
    appointmentsAsPatient?: AppointmentCreateNestedManyWithoutPatientInput
    logs?: AuditLogCreateNestedManyWithoutUserInput
    doctorProfile?: DoctorProfileCreateNestedOneWithoutUserInput
    invoices?: InvoiceCreateNestedManyWithoutPatientInput
    patientRecords?: PatientRecordCreateNestedManyWithoutPatientInput
    prescriptionsAsDoctor?: PrescriptionCreateNestedManyWithoutDoctorInput
    prescriptionsAsPatient?: PrescriptionCreateNestedManyWithoutPatientInput
  }

  export type UserUncheckedCreateWithoutPatientProfileInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentsAsDoctor?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    appointmentsAsPatient?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    logs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    doctorProfile?: DoctorProfileUncheckedCreateNestedOneWithoutUserInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutPatientInput
    patientRecords?: PatientRecordUncheckedCreateNestedManyWithoutPatientInput
    prescriptionsAsDoctor?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
    prescriptionsAsPatient?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type UserCreateOrConnectWithoutPatientProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPatientProfileInput, UserUncheckedCreateWithoutPatientProfileInput>
  }

  export type PatientRecordCreateWithoutPatientProfileInput = {
    id?: string
    diagnosis?: string | null
    notes?: string | null
    labResults?: NullableJsonNullValueInput | InputJsonValue
    attachments?: NullableJsonNullValueInput | InputJsonValue
    temperature?: number | null
    weight?: number | null
    height?: number | null
    createdAt?: Date | string
    appointment: AppointmentCreateNestedOneWithoutRecordsInput
    patient: UserCreateNestedOneWithoutPatientRecordsInput
  }

  export type PatientRecordUncheckedCreateWithoutPatientProfileInput = {
    id?: string
    diagnosis?: string | null
    notes?: string | null
    labResults?: NullableJsonNullValueInput | InputJsonValue
    attachments?: NullableJsonNullValueInput | InputJsonValue
    temperature?: number | null
    weight?: number | null
    height?: number | null
    createdAt?: Date | string
    patientId: string
    appointmentId: string
  }

  export type PatientRecordCreateOrConnectWithoutPatientProfileInput = {
    where: PatientRecordWhereUniqueInput
    create: XOR<PatientRecordCreateWithoutPatientProfileInput, PatientRecordUncheckedCreateWithoutPatientProfileInput>
  }

  export type PatientRecordCreateManyPatientProfileInputEnvelope = {
    data: PatientRecordCreateManyPatientProfileInput | PatientRecordCreateManyPatientProfileInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPatientProfileInput = {
    update: XOR<UserUpdateWithoutPatientProfileInput, UserUncheckedUpdateWithoutPatientProfileInput>
    create: XOR<UserCreateWithoutPatientProfileInput, UserUncheckedCreateWithoutPatientProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPatientProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPatientProfileInput, UserUncheckedUpdateWithoutPatientProfileInput>
  }

  export type UserUpdateWithoutPatientProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentsAsDoctor?: AppointmentUpdateManyWithoutDoctorNestedInput
    appointmentsAsPatient?: AppointmentUpdateManyWithoutPatientNestedInput
    logs?: AuditLogUpdateManyWithoutUserNestedInput
    doctorProfile?: DoctorProfileUpdateOneWithoutUserNestedInput
    invoices?: InvoiceUpdateManyWithoutPatientNestedInput
    patientRecords?: PatientRecordUpdateManyWithoutPatientNestedInput
    prescriptionsAsDoctor?: PrescriptionUpdateManyWithoutDoctorNestedInput
    prescriptionsAsPatient?: PrescriptionUpdateManyWithoutPatientNestedInput
  }

  export type UserUncheckedUpdateWithoutPatientProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentsAsDoctor?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    appointmentsAsPatient?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    logs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    doctorProfile?: DoctorProfileUncheckedUpdateOneWithoutUserNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutPatientNestedInput
    patientRecords?: PatientRecordUncheckedUpdateManyWithoutPatientNestedInput
    prescriptionsAsDoctor?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptionsAsPatient?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientRecordUpsertWithWhereUniqueWithoutPatientProfileInput = {
    where: PatientRecordWhereUniqueInput
    update: XOR<PatientRecordUpdateWithoutPatientProfileInput, PatientRecordUncheckedUpdateWithoutPatientProfileInput>
    create: XOR<PatientRecordCreateWithoutPatientProfileInput, PatientRecordUncheckedCreateWithoutPatientProfileInput>
  }

  export type PatientRecordUpdateWithWhereUniqueWithoutPatientProfileInput = {
    where: PatientRecordWhereUniqueInput
    data: XOR<PatientRecordUpdateWithoutPatientProfileInput, PatientRecordUncheckedUpdateWithoutPatientProfileInput>
  }

  export type PatientRecordUpdateManyWithWhereWithoutPatientProfileInput = {
    where: PatientRecordScalarWhereInput
    data: XOR<PatientRecordUpdateManyMutationInput, PatientRecordUncheckedUpdateManyWithoutPatientProfileInput>
  }

  export type DoctorAvailabilityCreateWithoutDoctorInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
  }

  export type DoctorAvailabilityUncheckedCreateWithoutDoctorInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
  }

  export type DoctorAvailabilityCreateOrConnectWithoutDoctorInput = {
    where: DoctorAvailabilityWhereUniqueInput
    create: XOR<DoctorAvailabilityCreateWithoutDoctorInput, DoctorAvailabilityUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorAvailabilityCreateManyDoctorInputEnvelope = {
    data: DoctorAvailabilityCreateManyDoctorInput | DoctorAvailabilityCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutDoctorProfileInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentsAsDoctor?: AppointmentCreateNestedManyWithoutDoctorInput
    appointmentsAsPatient?: AppointmentCreateNestedManyWithoutPatientInput
    logs?: AuditLogCreateNestedManyWithoutUserInput
    invoices?: InvoiceCreateNestedManyWithoutPatientInput
    patientProfile?: PatientProfileCreateNestedOneWithoutUserInput
    patientRecords?: PatientRecordCreateNestedManyWithoutPatientInput
    prescriptionsAsDoctor?: PrescriptionCreateNestedManyWithoutDoctorInput
    prescriptionsAsPatient?: PrescriptionCreateNestedManyWithoutPatientInput
  }

  export type UserUncheckedCreateWithoutDoctorProfileInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentsAsDoctor?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    appointmentsAsPatient?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    logs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutPatientInput
    patientProfile?: PatientProfileUncheckedCreateNestedOneWithoutUserInput
    patientRecords?: PatientRecordUncheckedCreateNestedManyWithoutPatientInput
    prescriptionsAsDoctor?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
    prescriptionsAsPatient?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type UserCreateOrConnectWithoutDoctorProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDoctorProfileInput, UserUncheckedCreateWithoutDoctorProfileInput>
  }

  export type DoctorAvailabilityUpsertWithWhereUniqueWithoutDoctorInput = {
    where: DoctorAvailabilityWhereUniqueInput
    update: XOR<DoctorAvailabilityUpdateWithoutDoctorInput, DoctorAvailabilityUncheckedUpdateWithoutDoctorInput>
    create: XOR<DoctorAvailabilityCreateWithoutDoctorInput, DoctorAvailabilityUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorAvailabilityUpdateWithWhereUniqueWithoutDoctorInput = {
    where: DoctorAvailabilityWhereUniqueInput
    data: XOR<DoctorAvailabilityUpdateWithoutDoctorInput, DoctorAvailabilityUncheckedUpdateWithoutDoctorInput>
  }

  export type DoctorAvailabilityUpdateManyWithWhereWithoutDoctorInput = {
    where: DoctorAvailabilityScalarWhereInput
    data: XOR<DoctorAvailabilityUpdateManyMutationInput, DoctorAvailabilityUncheckedUpdateManyWithoutDoctorInput>
  }

  export type DoctorAvailabilityScalarWhereInput = {
    AND?: DoctorAvailabilityScalarWhereInput | DoctorAvailabilityScalarWhereInput[]
    OR?: DoctorAvailabilityScalarWhereInput[]
    NOT?: DoctorAvailabilityScalarWhereInput | DoctorAvailabilityScalarWhereInput[]
    id?: StringFilter<"DoctorAvailability"> | string
    doctorId?: StringFilter<"DoctorAvailability"> | string
    dayOfWeek?: IntFilter<"DoctorAvailability"> | number
    startTime?: StringFilter<"DoctorAvailability"> | string
    endTime?: StringFilter<"DoctorAvailability"> | string
  }

  export type UserUpsertWithoutDoctorProfileInput = {
    update: XOR<UserUpdateWithoutDoctorProfileInput, UserUncheckedUpdateWithoutDoctorProfileInput>
    create: XOR<UserCreateWithoutDoctorProfileInput, UserUncheckedCreateWithoutDoctorProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDoctorProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDoctorProfileInput, UserUncheckedUpdateWithoutDoctorProfileInput>
  }

  export type UserUpdateWithoutDoctorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentsAsDoctor?: AppointmentUpdateManyWithoutDoctorNestedInput
    appointmentsAsPatient?: AppointmentUpdateManyWithoutPatientNestedInput
    logs?: AuditLogUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUpdateManyWithoutPatientNestedInput
    patientProfile?: PatientProfileUpdateOneWithoutUserNestedInput
    patientRecords?: PatientRecordUpdateManyWithoutPatientNestedInput
    prescriptionsAsDoctor?: PrescriptionUpdateManyWithoutDoctorNestedInput
    prescriptionsAsPatient?: PrescriptionUpdateManyWithoutPatientNestedInput
  }

  export type UserUncheckedUpdateWithoutDoctorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentsAsDoctor?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    appointmentsAsPatient?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    logs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutPatientNestedInput
    patientProfile?: PatientProfileUncheckedUpdateOneWithoutUserNestedInput
    patientRecords?: PatientRecordUncheckedUpdateManyWithoutPatientNestedInput
    prescriptionsAsDoctor?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptionsAsPatient?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type UserCreateWithoutAppointmentsAsDoctorInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentsAsPatient?: AppointmentCreateNestedManyWithoutPatientInput
    logs?: AuditLogCreateNestedManyWithoutUserInput
    doctorProfile?: DoctorProfileCreateNestedOneWithoutUserInput
    invoices?: InvoiceCreateNestedManyWithoutPatientInput
    patientProfile?: PatientProfileCreateNestedOneWithoutUserInput
    patientRecords?: PatientRecordCreateNestedManyWithoutPatientInput
    prescriptionsAsDoctor?: PrescriptionCreateNestedManyWithoutDoctorInput
    prescriptionsAsPatient?: PrescriptionCreateNestedManyWithoutPatientInput
  }

  export type UserUncheckedCreateWithoutAppointmentsAsDoctorInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentsAsPatient?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    logs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    doctorProfile?: DoctorProfileUncheckedCreateNestedOneWithoutUserInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutPatientInput
    patientProfile?: PatientProfileUncheckedCreateNestedOneWithoutUserInput
    patientRecords?: PatientRecordUncheckedCreateNestedManyWithoutPatientInput
    prescriptionsAsDoctor?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
    prescriptionsAsPatient?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type UserCreateOrConnectWithoutAppointmentsAsDoctorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppointmentsAsDoctorInput, UserUncheckedCreateWithoutAppointmentsAsDoctorInput>
  }

  export type UserCreateWithoutAppointmentsAsPatientInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentsAsDoctor?: AppointmentCreateNestedManyWithoutDoctorInput
    logs?: AuditLogCreateNestedManyWithoutUserInput
    doctorProfile?: DoctorProfileCreateNestedOneWithoutUserInput
    invoices?: InvoiceCreateNestedManyWithoutPatientInput
    patientProfile?: PatientProfileCreateNestedOneWithoutUserInput
    patientRecords?: PatientRecordCreateNestedManyWithoutPatientInput
    prescriptionsAsDoctor?: PrescriptionCreateNestedManyWithoutDoctorInput
    prescriptionsAsPatient?: PrescriptionCreateNestedManyWithoutPatientInput
  }

  export type UserUncheckedCreateWithoutAppointmentsAsPatientInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentsAsDoctor?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    logs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    doctorProfile?: DoctorProfileUncheckedCreateNestedOneWithoutUserInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutPatientInput
    patientProfile?: PatientProfileUncheckedCreateNestedOneWithoutUserInput
    patientRecords?: PatientRecordUncheckedCreateNestedManyWithoutPatientInput
    prescriptionsAsDoctor?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
    prescriptionsAsPatient?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type UserCreateOrConnectWithoutAppointmentsAsPatientInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppointmentsAsPatientInput, UserUncheckedCreateWithoutAppointmentsAsPatientInput>
  }

  export type InvoiceCreateWithoutAppointmentInput = {
    id?: string
    invoiceNumber: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.InvoiceStatus
    dueDate: Date | string
    createdAt?: Date | string
    patient: UserCreateNestedOneWithoutInvoicesInput
    payments?: PaymentCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutAppointmentInput = {
    id?: string
    invoiceNumber: string
    patientId: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.InvoiceStatus
    dueDate: Date | string
    createdAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutAppointmentInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutAppointmentInput, InvoiceUncheckedCreateWithoutAppointmentInput>
  }

  export type InvoiceCreateManyAppointmentInputEnvelope = {
    data: InvoiceCreateManyAppointmentInput | InvoiceCreateManyAppointmentInput[]
    skipDuplicates?: boolean
  }

  export type PatientRecordCreateWithoutAppointmentInput = {
    id?: string
    diagnosis?: string | null
    notes?: string | null
    labResults?: NullableJsonNullValueInput | InputJsonValue
    attachments?: NullableJsonNullValueInput | InputJsonValue
    temperature?: number | null
    weight?: number | null
    height?: number | null
    createdAt?: Date | string
    patient: UserCreateNestedOneWithoutPatientRecordsInput
    patientProfile?: PatientProfileCreateNestedOneWithoutRecordsInput
  }

  export type PatientRecordUncheckedCreateWithoutAppointmentInput = {
    id?: string
    diagnosis?: string | null
    notes?: string | null
    labResults?: NullableJsonNullValueInput | InputJsonValue
    attachments?: NullableJsonNullValueInput | InputJsonValue
    temperature?: number | null
    weight?: number | null
    height?: number | null
    createdAt?: Date | string
    patientId: string
    patientProfileId?: string | null
  }

  export type PatientRecordCreateOrConnectWithoutAppointmentInput = {
    where: PatientRecordWhereUniqueInput
    create: XOR<PatientRecordCreateWithoutAppointmentInput, PatientRecordUncheckedCreateWithoutAppointmentInput>
  }

  export type PatientRecordCreateManyAppointmentInputEnvelope = {
    data: PatientRecordCreateManyAppointmentInput | PatientRecordCreateManyAppointmentInput[]
    skipDuplicates?: boolean
  }

  export type PrescriptionCreateWithoutAppointmentInput = {
    id?: string
    medications: JsonNullValueInput | InputJsonValue
    notes?: string | null
    status?: $Enums.PrescriptionStatus
    createdAt?: Date | string
    doctor: UserCreateNestedOneWithoutPrescriptionsAsDoctorInput
    patient: UserCreateNestedOneWithoutPrescriptionsAsPatientInput
  }

  export type PrescriptionUncheckedCreateWithoutAppointmentInput = {
    id?: string
    patientId: string
    doctorId: string
    medications: JsonNullValueInput | InputJsonValue
    notes?: string | null
    status?: $Enums.PrescriptionStatus
    createdAt?: Date | string
  }

  export type PrescriptionCreateOrConnectWithoutAppointmentInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutAppointmentInput, PrescriptionUncheckedCreateWithoutAppointmentInput>
  }

  export type PrescriptionCreateManyAppointmentInputEnvelope = {
    data: PrescriptionCreateManyAppointmentInput | PrescriptionCreateManyAppointmentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAppointmentsAsDoctorInput = {
    update: XOR<UserUpdateWithoutAppointmentsAsDoctorInput, UserUncheckedUpdateWithoutAppointmentsAsDoctorInput>
    create: XOR<UserCreateWithoutAppointmentsAsDoctorInput, UserUncheckedCreateWithoutAppointmentsAsDoctorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAppointmentsAsDoctorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAppointmentsAsDoctorInput, UserUncheckedUpdateWithoutAppointmentsAsDoctorInput>
  }

  export type UserUpdateWithoutAppointmentsAsDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentsAsPatient?: AppointmentUpdateManyWithoutPatientNestedInput
    logs?: AuditLogUpdateManyWithoutUserNestedInput
    doctorProfile?: DoctorProfileUpdateOneWithoutUserNestedInput
    invoices?: InvoiceUpdateManyWithoutPatientNestedInput
    patientProfile?: PatientProfileUpdateOneWithoutUserNestedInput
    patientRecords?: PatientRecordUpdateManyWithoutPatientNestedInput
    prescriptionsAsDoctor?: PrescriptionUpdateManyWithoutDoctorNestedInput
    prescriptionsAsPatient?: PrescriptionUpdateManyWithoutPatientNestedInput
  }

  export type UserUncheckedUpdateWithoutAppointmentsAsDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentsAsPatient?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    logs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    doctorProfile?: DoctorProfileUncheckedUpdateOneWithoutUserNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutPatientNestedInput
    patientProfile?: PatientProfileUncheckedUpdateOneWithoutUserNestedInput
    patientRecords?: PatientRecordUncheckedUpdateManyWithoutPatientNestedInput
    prescriptionsAsDoctor?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptionsAsPatient?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type UserUpsertWithoutAppointmentsAsPatientInput = {
    update: XOR<UserUpdateWithoutAppointmentsAsPatientInput, UserUncheckedUpdateWithoutAppointmentsAsPatientInput>
    create: XOR<UserCreateWithoutAppointmentsAsPatientInput, UserUncheckedCreateWithoutAppointmentsAsPatientInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAppointmentsAsPatientInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAppointmentsAsPatientInput, UserUncheckedUpdateWithoutAppointmentsAsPatientInput>
  }

  export type UserUpdateWithoutAppointmentsAsPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentsAsDoctor?: AppointmentUpdateManyWithoutDoctorNestedInput
    logs?: AuditLogUpdateManyWithoutUserNestedInput
    doctorProfile?: DoctorProfileUpdateOneWithoutUserNestedInput
    invoices?: InvoiceUpdateManyWithoutPatientNestedInput
    patientProfile?: PatientProfileUpdateOneWithoutUserNestedInput
    patientRecords?: PatientRecordUpdateManyWithoutPatientNestedInput
    prescriptionsAsDoctor?: PrescriptionUpdateManyWithoutDoctorNestedInput
    prescriptionsAsPatient?: PrescriptionUpdateManyWithoutPatientNestedInput
  }

  export type UserUncheckedUpdateWithoutAppointmentsAsPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentsAsDoctor?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    logs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    doctorProfile?: DoctorProfileUncheckedUpdateOneWithoutUserNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutPatientNestedInput
    patientProfile?: PatientProfileUncheckedUpdateOneWithoutUserNestedInput
    patientRecords?: PatientRecordUncheckedUpdateManyWithoutPatientNestedInput
    prescriptionsAsDoctor?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptionsAsPatient?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type InvoiceUpsertWithWhereUniqueWithoutAppointmentInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutAppointmentInput, InvoiceUncheckedUpdateWithoutAppointmentInput>
    create: XOR<InvoiceCreateWithoutAppointmentInput, InvoiceUncheckedCreateWithoutAppointmentInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutAppointmentInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutAppointmentInput, InvoiceUncheckedUpdateWithoutAppointmentInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutAppointmentInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutAppointmentInput>
  }

  export type PatientRecordUpsertWithWhereUniqueWithoutAppointmentInput = {
    where: PatientRecordWhereUniqueInput
    update: XOR<PatientRecordUpdateWithoutAppointmentInput, PatientRecordUncheckedUpdateWithoutAppointmentInput>
    create: XOR<PatientRecordCreateWithoutAppointmentInput, PatientRecordUncheckedCreateWithoutAppointmentInput>
  }

  export type PatientRecordUpdateWithWhereUniqueWithoutAppointmentInput = {
    where: PatientRecordWhereUniqueInput
    data: XOR<PatientRecordUpdateWithoutAppointmentInput, PatientRecordUncheckedUpdateWithoutAppointmentInput>
  }

  export type PatientRecordUpdateManyWithWhereWithoutAppointmentInput = {
    where: PatientRecordScalarWhereInput
    data: XOR<PatientRecordUpdateManyMutationInput, PatientRecordUncheckedUpdateManyWithoutAppointmentInput>
  }

  export type PrescriptionUpsertWithWhereUniqueWithoutAppointmentInput = {
    where: PrescriptionWhereUniqueInput
    update: XOR<PrescriptionUpdateWithoutAppointmentInput, PrescriptionUncheckedUpdateWithoutAppointmentInput>
    create: XOR<PrescriptionCreateWithoutAppointmentInput, PrescriptionUncheckedCreateWithoutAppointmentInput>
  }

  export type PrescriptionUpdateWithWhereUniqueWithoutAppointmentInput = {
    where: PrescriptionWhereUniqueInput
    data: XOR<PrescriptionUpdateWithoutAppointmentInput, PrescriptionUncheckedUpdateWithoutAppointmentInput>
  }

  export type PrescriptionUpdateManyWithWhereWithoutAppointmentInput = {
    where: PrescriptionScalarWhereInput
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyWithoutAppointmentInput>
  }

  export type AppointmentCreateWithoutRecordsInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: UserCreateNestedOneWithoutAppointmentsAsDoctorInput
    patient: UserCreateNestedOneWithoutAppointmentsAsPatientInput
    invoices?: InvoiceCreateNestedManyWithoutAppointmentInput
    prescriptions?: PrescriptionCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutRecordsInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patientId: string
    doctorId: string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutAppointmentInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutRecordsInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutRecordsInput, AppointmentUncheckedCreateWithoutRecordsInput>
  }

  export type UserCreateWithoutPatientRecordsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentsAsDoctor?: AppointmentCreateNestedManyWithoutDoctorInput
    appointmentsAsPatient?: AppointmentCreateNestedManyWithoutPatientInput
    logs?: AuditLogCreateNestedManyWithoutUserInput
    doctorProfile?: DoctorProfileCreateNestedOneWithoutUserInput
    invoices?: InvoiceCreateNestedManyWithoutPatientInput
    patientProfile?: PatientProfileCreateNestedOneWithoutUserInput
    prescriptionsAsDoctor?: PrescriptionCreateNestedManyWithoutDoctorInput
    prescriptionsAsPatient?: PrescriptionCreateNestedManyWithoutPatientInput
  }

  export type UserUncheckedCreateWithoutPatientRecordsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentsAsDoctor?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    appointmentsAsPatient?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    logs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    doctorProfile?: DoctorProfileUncheckedCreateNestedOneWithoutUserInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutPatientInput
    patientProfile?: PatientProfileUncheckedCreateNestedOneWithoutUserInput
    prescriptionsAsDoctor?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
    prescriptionsAsPatient?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type UserCreateOrConnectWithoutPatientRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPatientRecordsInput, UserUncheckedCreateWithoutPatientRecordsInput>
  }

  export type PatientProfileCreateWithoutRecordsInput = {
    id?: string
    birthDate?: Date | string | null
    gender?: string | null
    address?: string | null
    bloodType?: string | null
    allergies?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPatientProfileInput
  }

  export type PatientProfileUncheckedCreateWithoutRecordsInput = {
    id?: string
    userId: string
    birthDate?: Date | string | null
    gender?: string | null
    address?: string | null
    bloodType?: string | null
    allergies?: string | null
    createdAt?: Date | string
  }

  export type PatientProfileCreateOrConnectWithoutRecordsInput = {
    where: PatientProfileWhereUniqueInput
    create: XOR<PatientProfileCreateWithoutRecordsInput, PatientProfileUncheckedCreateWithoutRecordsInput>
  }

  export type AppointmentUpsertWithoutRecordsInput = {
    update: XOR<AppointmentUpdateWithoutRecordsInput, AppointmentUncheckedUpdateWithoutRecordsInput>
    create: XOR<AppointmentCreateWithoutRecordsInput, AppointmentUncheckedCreateWithoutRecordsInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutRecordsInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutRecordsInput, AppointmentUncheckedUpdateWithoutRecordsInput>
  }

  export type AppointmentUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: UserUpdateOneRequiredWithoutAppointmentsAsDoctorNestedInput
    patient?: UserUpdateOneRequiredWithoutAppointmentsAsPatientNestedInput
    invoices?: InvoiceUpdateManyWithoutAppointmentNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    invoices?: InvoiceUncheckedUpdateManyWithoutAppointmentNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type UserUpsertWithoutPatientRecordsInput = {
    update: XOR<UserUpdateWithoutPatientRecordsInput, UserUncheckedUpdateWithoutPatientRecordsInput>
    create: XOR<UserCreateWithoutPatientRecordsInput, UserUncheckedCreateWithoutPatientRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPatientRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPatientRecordsInput, UserUncheckedUpdateWithoutPatientRecordsInput>
  }

  export type UserUpdateWithoutPatientRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentsAsDoctor?: AppointmentUpdateManyWithoutDoctorNestedInput
    appointmentsAsPatient?: AppointmentUpdateManyWithoutPatientNestedInput
    logs?: AuditLogUpdateManyWithoutUserNestedInput
    doctorProfile?: DoctorProfileUpdateOneWithoutUserNestedInput
    invoices?: InvoiceUpdateManyWithoutPatientNestedInput
    patientProfile?: PatientProfileUpdateOneWithoutUserNestedInput
    prescriptionsAsDoctor?: PrescriptionUpdateManyWithoutDoctorNestedInput
    prescriptionsAsPatient?: PrescriptionUpdateManyWithoutPatientNestedInput
  }

  export type UserUncheckedUpdateWithoutPatientRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentsAsDoctor?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    appointmentsAsPatient?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    logs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    doctorProfile?: DoctorProfileUncheckedUpdateOneWithoutUserNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutPatientNestedInput
    patientProfile?: PatientProfileUncheckedUpdateOneWithoutUserNestedInput
    prescriptionsAsDoctor?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptionsAsPatient?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientProfileUpsertWithoutRecordsInput = {
    update: XOR<PatientProfileUpdateWithoutRecordsInput, PatientProfileUncheckedUpdateWithoutRecordsInput>
    create: XOR<PatientProfileCreateWithoutRecordsInput, PatientProfileUncheckedCreateWithoutRecordsInput>
    where?: PatientProfileWhereInput
  }

  export type PatientProfileUpdateToOneWithWhereWithoutRecordsInput = {
    where?: PatientProfileWhereInput
    data: XOR<PatientProfileUpdateWithoutRecordsInput, PatientProfileUncheckedUpdateWithoutRecordsInput>
  }

  export type PatientProfileUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodType?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientProfileNestedInput
  }

  export type PatientProfileUncheckedUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodType?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateWithoutPrescriptionsInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: UserCreateNestedOneWithoutAppointmentsAsDoctorInput
    patient: UserCreateNestedOneWithoutAppointmentsAsPatientInput
    invoices?: InvoiceCreateNestedManyWithoutAppointmentInput
    records?: PatientRecordCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutPrescriptionsInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patientId: string
    doctorId: string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutAppointmentInput
    records?: PatientRecordUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutPrescriptionsInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutPrescriptionsInput, AppointmentUncheckedCreateWithoutPrescriptionsInput>
  }

  export type UserCreateWithoutPrescriptionsAsDoctorInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentsAsDoctor?: AppointmentCreateNestedManyWithoutDoctorInput
    appointmentsAsPatient?: AppointmentCreateNestedManyWithoutPatientInput
    logs?: AuditLogCreateNestedManyWithoutUserInput
    doctorProfile?: DoctorProfileCreateNestedOneWithoutUserInput
    invoices?: InvoiceCreateNestedManyWithoutPatientInput
    patientProfile?: PatientProfileCreateNestedOneWithoutUserInput
    patientRecords?: PatientRecordCreateNestedManyWithoutPatientInput
    prescriptionsAsPatient?: PrescriptionCreateNestedManyWithoutPatientInput
  }

  export type UserUncheckedCreateWithoutPrescriptionsAsDoctorInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentsAsDoctor?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    appointmentsAsPatient?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    logs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    doctorProfile?: DoctorProfileUncheckedCreateNestedOneWithoutUserInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutPatientInput
    patientProfile?: PatientProfileUncheckedCreateNestedOneWithoutUserInput
    patientRecords?: PatientRecordUncheckedCreateNestedManyWithoutPatientInput
    prescriptionsAsPatient?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type UserCreateOrConnectWithoutPrescriptionsAsDoctorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPrescriptionsAsDoctorInput, UserUncheckedCreateWithoutPrescriptionsAsDoctorInput>
  }

  export type UserCreateWithoutPrescriptionsAsPatientInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentsAsDoctor?: AppointmentCreateNestedManyWithoutDoctorInput
    appointmentsAsPatient?: AppointmentCreateNestedManyWithoutPatientInput
    logs?: AuditLogCreateNestedManyWithoutUserInput
    doctorProfile?: DoctorProfileCreateNestedOneWithoutUserInput
    invoices?: InvoiceCreateNestedManyWithoutPatientInput
    patientProfile?: PatientProfileCreateNestedOneWithoutUserInput
    patientRecords?: PatientRecordCreateNestedManyWithoutPatientInput
    prescriptionsAsDoctor?: PrescriptionCreateNestedManyWithoutDoctorInput
  }

  export type UserUncheckedCreateWithoutPrescriptionsAsPatientInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentsAsDoctor?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    appointmentsAsPatient?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    logs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    doctorProfile?: DoctorProfileUncheckedCreateNestedOneWithoutUserInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutPatientInput
    patientProfile?: PatientProfileUncheckedCreateNestedOneWithoutUserInput
    patientRecords?: PatientRecordUncheckedCreateNestedManyWithoutPatientInput
    prescriptionsAsDoctor?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type UserCreateOrConnectWithoutPrescriptionsAsPatientInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPrescriptionsAsPatientInput, UserUncheckedCreateWithoutPrescriptionsAsPatientInput>
  }

  export type AppointmentUpsertWithoutPrescriptionsInput = {
    update: XOR<AppointmentUpdateWithoutPrescriptionsInput, AppointmentUncheckedUpdateWithoutPrescriptionsInput>
    create: XOR<AppointmentCreateWithoutPrescriptionsInput, AppointmentUncheckedCreateWithoutPrescriptionsInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutPrescriptionsInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutPrescriptionsInput, AppointmentUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type AppointmentUpdateWithoutPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: UserUpdateOneRequiredWithoutAppointmentsAsDoctorNestedInput
    patient?: UserUpdateOneRequiredWithoutAppointmentsAsPatientNestedInput
    invoices?: InvoiceUpdateManyWithoutAppointmentNestedInput
    records?: PatientRecordUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    invoices?: InvoiceUncheckedUpdateManyWithoutAppointmentNestedInput
    records?: PatientRecordUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type UserUpsertWithoutPrescriptionsAsDoctorInput = {
    update: XOR<UserUpdateWithoutPrescriptionsAsDoctorInput, UserUncheckedUpdateWithoutPrescriptionsAsDoctorInput>
    create: XOR<UserCreateWithoutPrescriptionsAsDoctorInput, UserUncheckedCreateWithoutPrescriptionsAsDoctorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPrescriptionsAsDoctorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPrescriptionsAsDoctorInput, UserUncheckedUpdateWithoutPrescriptionsAsDoctorInput>
  }

  export type UserUpdateWithoutPrescriptionsAsDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentsAsDoctor?: AppointmentUpdateManyWithoutDoctorNestedInput
    appointmentsAsPatient?: AppointmentUpdateManyWithoutPatientNestedInput
    logs?: AuditLogUpdateManyWithoutUserNestedInput
    doctorProfile?: DoctorProfileUpdateOneWithoutUserNestedInput
    invoices?: InvoiceUpdateManyWithoutPatientNestedInput
    patientProfile?: PatientProfileUpdateOneWithoutUserNestedInput
    patientRecords?: PatientRecordUpdateManyWithoutPatientNestedInput
    prescriptionsAsPatient?: PrescriptionUpdateManyWithoutPatientNestedInput
  }

  export type UserUncheckedUpdateWithoutPrescriptionsAsDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentsAsDoctor?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    appointmentsAsPatient?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    logs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    doctorProfile?: DoctorProfileUncheckedUpdateOneWithoutUserNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutPatientNestedInput
    patientProfile?: PatientProfileUncheckedUpdateOneWithoutUserNestedInput
    patientRecords?: PatientRecordUncheckedUpdateManyWithoutPatientNestedInput
    prescriptionsAsPatient?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type UserUpsertWithoutPrescriptionsAsPatientInput = {
    update: XOR<UserUpdateWithoutPrescriptionsAsPatientInput, UserUncheckedUpdateWithoutPrescriptionsAsPatientInput>
    create: XOR<UserCreateWithoutPrescriptionsAsPatientInput, UserUncheckedCreateWithoutPrescriptionsAsPatientInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPrescriptionsAsPatientInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPrescriptionsAsPatientInput, UserUncheckedUpdateWithoutPrescriptionsAsPatientInput>
  }

  export type UserUpdateWithoutPrescriptionsAsPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentsAsDoctor?: AppointmentUpdateManyWithoutDoctorNestedInput
    appointmentsAsPatient?: AppointmentUpdateManyWithoutPatientNestedInput
    logs?: AuditLogUpdateManyWithoutUserNestedInput
    doctorProfile?: DoctorProfileUpdateOneWithoutUserNestedInput
    invoices?: InvoiceUpdateManyWithoutPatientNestedInput
    patientProfile?: PatientProfileUpdateOneWithoutUserNestedInput
    patientRecords?: PatientRecordUpdateManyWithoutPatientNestedInput
    prescriptionsAsDoctor?: PrescriptionUpdateManyWithoutDoctorNestedInput
  }

  export type UserUncheckedUpdateWithoutPrescriptionsAsPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentsAsDoctor?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    appointmentsAsPatient?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    logs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    doctorProfile?: DoctorProfileUncheckedUpdateOneWithoutUserNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutPatientNestedInput
    patientProfile?: PatientProfileUncheckedUpdateOneWithoutUserNestedInput
    patientRecords?: PatientRecordUncheckedUpdateManyWithoutPatientNestedInput
    prescriptionsAsDoctor?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorProfileCreateWithoutAvailabilityInput = {
    id?: string
    crm: string
    specialization: string
    bio?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutDoctorProfileInput
  }

  export type DoctorProfileUncheckedCreateWithoutAvailabilityInput = {
    id?: string
    userId: string
    crm: string
    specialization: string
    bio?: string | null
    createdAt?: Date | string
  }

  export type DoctorProfileCreateOrConnectWithoutAvailabilityInput = {
    where: DoctorProfileWhereUniqueInput
    create: XOR<DoctorProfileCreateWithoutAvailabilityInput, DoctorProfileUncheckedCreateWithoutAvailabilityInput>
  }

  export type DoctorProfileUpsertWithoutAvailabilityInput = {
    update: XOR<DoctorProfileUpdateWithoutAvailabilityInput, DoctorProfileUncheckedUpdateWithoutAvailabilityInput>
    create: XOR<DoctorProfileCreateWithoutAvailabilityInput, DoctorProfileUncheckedCreateWithoutAvailabilityInput>
    where?: DoctorProfileWhereInput
  }

  export type DoctorProfileUpdateToOneWithWhereWithoutAvailabilityInput = {
    where?: DoctorProfileWhereInput
    data: XOR<DoctorProfileUpdateWithoutAvailabilityInput, DoctorProfileUncheckedUpdateWithoutAvailabilityInput>
  }

  export type DoctorProfileUpdateWithoutAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    crm?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDoctorProfileNestedInput
  }

  export type DoctorProfileUncheckedUpdateWithoutAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    crm?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateWithoutInvoicesInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: UserCreateNestedOneWithoutAppointmentsAsDoctorInput
    patient: UserCreateNestedOneWithoutAppointmentsAsPatientInput
    records?: PatientRecordCreateNestedManyWithoutAppointmentInput
    prescriptions?: PrescriptionCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutInvoicesInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patientId: string
    doctorId: string
    records?: PatientRecordUncheckedCreateNestedManyWithoutAppointmentInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutInvoicesInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutInvoicesInput, AppointmentUncheckedCreateWithoutInvoicesInput>
  }

  export type UserCreateWithoutInvoicesInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentsAsDoctor?: AppointmentCreateNestedManyWithoutDoctorInput
    appointmentsAsPatient?: AppointmentCreateNestedManyWithoutPatientInput
    logs?: AuditLogCreateNestedManyWithoutUserInput
    doctorProfile?: DoctorProfileCreateNestedOneWithoutUserInput
    patientProfile?: PatientProfileCreateNestedOneWithoutUserInput
    patientRecords?: PatientRecordCreateNestedManyWithoutPatientInput
    prescriptionsAsDoctor?: PrescriptionCreateNestedManyWithoutDoctorInput
    prescriptionsAsPatient?: PrescriptionCreateNestedManyWithoutPatientInput
  }

  export type UserUncheckedCreateWithoutInvoicesInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentsAsDoctor?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    appointmentsAsPatient?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    logs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    doctorProfile?: DoctorProfileUncheckedCreateNestedOneWithoutUserInput
    patientProfile?: PatientProfileUncheckedCreateNestedOneWithoutUserInput
    patientRecords?: PatientRecordUncheckedCreateNestedManyWithoutPatientInput
    prescriptionsAsDoctor?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
    prescriptionsAsPatient?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type UserCreateOrConnectWithoutInvoicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
  }

  export type PaymentCreateWithoutInvoiceInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    method: string
    createdAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutInvoiceInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    method: string
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutInvoiceInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput>
  }

  export type PaymentCreateManyInvoiceInputEnvelope = {
    data: PaymentCreateManyInvoiceInput | PaymentCreateManyInvoiceInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentUpsertWithoutInvoicesInput = {
    update: XOR<AppointmentUpdateWithoutInvoicesInput, AppointmentUncheckedUpdateWithoutInvoicesInput>
    create: XOR<AppointmentCreateWithoutInvoicesInput, AppointmentUncheckedCreateWithoutInvoicesInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutInvoicesInput, AppointmentUncheckedUpdateWithoutInvoicesInput>
  }

  export type AppointmentUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: UserUpdateOneRequiredWithoutAppointmentsAsDoctorNestedInput
    patient?: UserUpdateOneRequiredWithoutAppointmentsAsPatientNestedInput
    records?: PatientRecordUpdateManyWithoutAppointmentNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    records?: PatientRecordUncheckedUpdateManyWithoutAppointmentNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type UserUpsertWithoutInvoicesInput = {
    update: XOR<UserUpdateWithoutInvoicesInput, UserUncheckedUpdateWithoutInvoicesInput>
    create: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvoicesInput, UserUncheckedUpdateWithoutInvoicesInput>
  }

  export type UserUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentsAsDoctor?: AppointmentUpdateManyWithoutDoctorNestedInput
    appointmentsAsPatient?: AppointmentUpdateManyWithoutPatientNestedInput
    logs?: AuditLogUpdateManyWithoutUserNestedInput
    doctorProfile?: DoctorProfileUpdateOneWithoutUserNestedInput
    patientProfile?: PatientProfileUpdateOneWithoutUserNestedInput
    patientRecords?: PatientRecordUpdateManyWithoutPatientNestedInput
    prescriptionsAsDoctor?: PrescriptionUpdateManyWithoutDoctorNestedInput
    prescriptionsAsPatient?: PrescriptionUpdateManyWithoutPatientNestedInput
  }

  export type UserUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentsAsDoctor?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    appointmentsAsPatient?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    logs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    doctorProfile?: DoctorProfileUncheckedUpdateOneWithoutUserNestedInput
    patientProfile?: PatientProfileUncheckedUpdateOneWithoutUserNestedInput
    patientRecords?: PatientRecordUncheckedUpdateManyWithoutPatientNestedInput
    prescriptionsAsDoctor?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptionsAsPatient?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutInvoiceInput, PaymentUncheckedUpdateWithoutInvoiceInput>
    create: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutInvoiceInput, PaymentUncheckedUpdateWithoutInvoiceInput>
  }

  export type PaymentUpdateManyWithWhereWithoutInvoiceInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    invoiceId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    method?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type InvoiceCreateWithoutPaymentsInput = {
    id?: string
    invoiceNumber: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.InvoiceStatus
    dueDate: Date | string
    createdAt?: Date | string
    appointment?: AppointmentCreateNestedOneWithoutInvoicesInput
    patient: UserCreateNestedOneWithoutInvoicesInput
  }

  export type InvoiceUncheckedCreateWithoutPaymentsInput = {
    id?: string
    invoiceNumber: string
    patientId: string
    appointmentId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.InvoiceStatus
    dueDate: Date | string
    createdAt?: Date | string
  }

  export type InvoiceCreateOrConnectWithoutPaymentsInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
  }

  export type InvoiceUpsertWithoutPaymentsInput = {
    update: XOR<InvoiceUpdateWithoutPaymentsInput, InvoiceUncheckedUpdateWithoutPaymentsInput>
    create: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutPaymentsInput, InvoiceUncheckedUpdateWithoutPaymentsInput>
  }

  export type InvoiceUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneWithoutInvoicesNestedInput
    patient?: UserUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCreateWithoutMedicationInput = {
    id?: string
    quantity: number
    batchNumber?: string | null
    expirationDate?: Date | string | null
    createdAt?: Date | string
  }

  export type InventoryUncheckedCreateWithoutMedicationInput = {
    id?: string
    quantity: number
    batchNumber?: string | null
    expirationDate?: Date | string | null
    createdAt?: Date | string
  }

  export type InventoryCreateOrConnectWithoutMedicationInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutMedicationInput, InventoryUncheckedCreateWithoutMedicationInput>
  }

  export type InventoryCreateManyMedicationInputEnvelope = {
    data: InventoryCreateManyMedicationInput | InventoryCreateManyMedicationInput[]
    skipDuplicates?: boolean
  }

  export type InventoryUpsertWithWhereUniqueWithoutMedicationInput = {
    where: InventoryWhereUniqueInput
    update: XOR<InventoryUpdateWithoutMedicationInput, InventoryUncheckedUpdateWithoutMedicationInput>
    create: XOR<InventoryCreateWithoutMedicationInput, InventoryUncheckedCreateWithoutMedicationInput>
  }

  export type InventoryUpdateWithWhereUniqueWithoutMedicationInput = {
    where: InventoryWhereUniqueInput
    data: XOR<InventoryUpdateWithoutMedicationInput, InventoryUncheckedUpdateWithoutMedicationInput>
  }

  export type InventoryUpdateManyWithWhereWithoutMedicationInput = {
    where: InventoryScalarWhereInput
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyWithoutMedicationInput>
  }

  export type InventoryScalarWhereInput = {
    AND?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
    OR?: InventoryScalarWhereInput[]
    NOT?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
    id?: StringFilter<"Inventory"> | string
    medicationId?: StringFilter<"Inventory"> | string
    quantity?: IntFilter<"Inventory"> | number
    batchNumber?: StringNullableFilter<"Inventory"> | string | null
    expirationDate?: DateTimeNullableFilter<"Inventory"> | Date | string | null
    createdAt?: DateTimeFilter<"Inventory"> | Date | string
  }

  export type MedicationCreateWithoutInventoriesInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type MedicationUncheckedCreateWithoutInventoriesInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type MedicationCreateOrConnectWithoutInventoriesInput = {
    where: MedicationWhereUniqueInput
    create: XOR<MedicationCreateWithoutInventoriesInput, MedicationUncheckedCreateWithoutInventoriesInput>
  }

  export type MedicationUpsertWithoutInventoriesInput = {
    update: XOR<MedicationUpdateWithoutInventoriesInput, MedicationUncheckedUpdateWithoutInventoriesInput>
    create: XOR<MedicationCreateWithoutInventoriesInput, MedicationUncheckedCreateWithoutInventoriesInput>
    where?: MedicationWhereInput
  }

  export type MedicationUpdateToOneWithWhereWithoutInventoriesInput = {
    where?: MedicationWhereInput
    data: XOR<MedicationUpdateWithoutInventoriesInput, MedicationUncheckedUpdateWithoutInventoriesInput>
  }

  export type MedicationUpdateWithoutInventoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicationUncheckedUpdateWithoutInventoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutLogsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentsAsDoctor?: AppointmentCreateNestedManyWithoutDoctorInput
    appointmentsAsPatient?: AppointmentCreateNestedManyWithoutPatientInput
    doctorProfile?: DoctorProfileCreateNestedOneWithoutUserInput
    invoices?: InvoiceCreateNestedManyWithoutPatientInput
    patientProfile?: PatientProfileCreateNestedOneWithoutUserInput
    patientRecords?: PatientRecordCreateNestedManyWithoutPatientInput
    prescriptionsAsDoctor?: PrescriptionCreateNestedManyWithoutDoctorInput
    prescriptionsAsPatient?: PrescriptionCreateNestedManyWithoutPatientInput
  }

  export type UserUncheckedCreateWithoutLogsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentsAsDoctor?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    appointmentsAsPatient?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    doctorProfile?: DoctorProfileUncheckedCreateNestedOneWithoutUserInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutPatientInput
    patientProfile?: PatientProfileUncheckedCreateNestedOneWithoutUserInput
    patientRecords?: PatientRecordUncheckedCreateNestedManyWithoutPatientInput
    prescriptionsAsDoctor?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
    prescriptionsAsPatient?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type UserCreateOrConnectWithoutLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
  }

  export type UserUpsertWithoutLogsInput = {
    update: XOR<UserUpdateWithoutLogsInput, UserUncheckedUpdateWithoutLogsInput>
    create: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLogsInput, UserUncheckedUpdateWithoutLogsInput>
  }

  export type UserUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentsAsDoctor?: AppointmentUpdateManyWithoutDoctorNestedInput
    appointmentsAsPatient?: AppointmentUpdateManyWithoutPatientNestedInput
    doctorProfile?: DoctorProfileUpdateOneWithoutUserNestedInput
    invoices?: InvoiceUpdateManyWithoutPatientNestedInput
    patientProfile?: PatientProfileUpdateOneWithoutUserNestedInput
    patientRecords?: PatientRecordUpdateManyWithoutPatientNestedInput
    prescriptionsAsDoctor?: PrescriptionUpdateManyWithoutDoctorNestedInput
    prescriptionsAsPatient?: PrescriptionUpdateManyWithoutPatientNestedInput
  }

  export type UserUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentsAsDoctor?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    appointmentsAsPatient?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    doctorProfile?: DoctorProfileUncheckedUpdateOneWithoutUserNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutPatientNestedInput
    patientProfile?: PatientProfileUncheckedUpdateOneWithoutUserNestedInput
    patientRecords?: PatientRecordUncheckedUpdateManyWithoutPatientNestedInput
    prescriptionsAsDoctor?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptionsAsPatient?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type AppointmentCreateManyDoctorInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patientId: string
  }

  export type AppointmentCreateManyPatientInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorId: string
  }

  export type AuditLogCreateManyUserInput = {
    id?: string
    action: string
    entity: string
    entityId?: string | null
    createdAt?: Date | string
  }

  export type InvoiceCreateManyPatientInput = {
    id?: string
    invoiceNumber: string
    appointmentId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.InvoiceStatus
    dueDate: Date | string
    createdAt?: Date | string
  }

  export type PatientRecordCreateManyPatientInput = {
    id?: string
    diagnosis?: string | null
    notes?: string | null
    labResults?: NullableJsonNullValueInput | InputJsonValue
    attachments?: NullableJsonNullValueInput | InputJsonValue
    temperature?: number | null
    weight?: number | null
    height?: number | null
    createdAt?: Date | string
    appointmentId: string
    patientProfileId?: string | null
  }

  export type PrescriptionCreateManyDoctorInput = {
    id?: string
    patientId: string
    appointmentId?: string | null
    medications: JsonNullValueInput | InputJsonValue
    notes?: string | null
    status?: $Enums.PrescriptionStatus
    createdAt?: Date | string
  }

  export type PrescriptionCreateManyPatientInput = {
    id?: string
    doctorId: string
    appointmentId?: string | null
    medications: JsonNullValueInput | InputJsonValue
    notes?: string | null
    status?: $Enums.PrescriptionStatus
    createdAt?: Date | string
  }

  export type AppointmentUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: UserUpdateOneRequiredWithoutAppointmentsAsPatientNestedInput
    invoices?: InvoiceUpdateManyWithoutAppointmentNestedInput
    records?: PatientRecordUpdateManyWithoutAppointmentNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientId?: StringFieldUpdateOperationsInput | string
    invoices?: InvoiceUncheckedUpdateManyWithoutAppointmentNestedInput
    records?: PatientRecordUncheckedUpdateManyWithoutAppointmentNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientId?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: UserUpdateOneRequiredWithoutAppointmentsAsDoctorNestedInput
    invoices?: InvoiceUpdateManyWithoutAppointmentNestedInput
    records?: PatientRecordUpdateManyWithoutAppointmentNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: StringFieldUpdateOperationsInput | string
    invoices?: InvoiceUncheckedUpdateManyWithoutAppointmentNestedInput
    records?: PatientRecordUncheckedUpdateManyWithoutAppointmentNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: StringFieldUpdateOperationsInput | string
  }

  export type AuditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneWithoutInvoicesNestedInput
    payments?: PaymentUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientRecordUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    labResults?: NullableJsonNullValueInput | InputJsonValue
    attachments?: NullableJsonNullValueInput | InputJsonValue
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneRequiredWithoutRecordsNestedInput
    patientProfile?: PatientProfileUpdateOneWithoutRecordsNestedInput
  }

  export type PatientRecordUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    labResults?: NullableJsonNullValueInput | InputJsonValue
    attachments?: NullableJsonNullValueInput | InputJsonValue
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    patientProfileId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PatientRecordUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    labResults?: NullableJsonNullValueInput | InputJsonValue
    attachments?: NullableJsonNullValueInput | InputJsonValue
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    patientProfileId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrescriptionUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    medications?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneWithoutPrescriptionsNestedInput
    patient?: UserUpdateOneRequiredWithoutPrescriptionsAsPatientNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    medications?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    medications?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    medications?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneWithoutPrescriptionsNestedInput
    doctor?: UserUpdateOneRequiredWithoutPrescriptionsAsDoctorNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    medications?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    medications?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientRecordCreateManyPatientProfileInput = {
    id?: string
    diagnosis?: string | null
    notes?: string | null
    labResults?: NullableJsonNullValueInput | InputJsonValue
    attachments?: NullableJsonNullValueInput | InputJsonValue
    temperature?: number | null
    weight?: number | null
    height?: number | null
    createdAt?: Date | string
    patientId: string
    appointmentId: string
  }

  export type PatientRecordUpdateWithoutPatientProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    labResults?: NullableJsonNullValueInput | InputJsonValue
    attachments?: NullableJsonNullValueInput | InputJsonValue
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneRequiredWithoutRecordsNestedInput
    patient?: UserUpdateOneRequiredWithoutPatientRecordsNestedInput
  }

  export type PatientRecordUncheckedUpdateWithoutPatientProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    labResults?: NullableJsonNullValueInput | InputJsonValue
    attachments?: NullableJsonNullValueInput | InputJsonValue
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
  }

  export type PatientRecordUncheckedUpdateManyWithoutPatientProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    labResults?: NullableJsonNullValueInput | InputJsonValue
    attachments?: NullableJsonNullValueInput | InputJsonValue
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorAvailabilityCreateManyDoctorInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
  }

  export type DoctorAvailabilityUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorAvailabilityUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorAvailabilityUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type InvoiceCreateManyAppointmentInput = {
    id?: string
    invoiceNumber: string
    patientId: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.InvoiceStatus
    dueDate: Date | string
    createdAt?: Date | string
  }

  export type PatientRecordCreateManyAppointmentInput = {
    id?: string
    diagnosis?: string | null
    notes?: string | null
    labResults?: NullableJsonNullValueInput | InputJsonValue
    attachments?: NullableJsonNullValueInput | InputJsonValue
    temperature?: number | null
    weight?: number | null
    height?: number | null
    createdAt?: Date | string
    patientId: string
    patientProfileId?: string | null
  }

  export type PrescriptionCreateManyAppointmentInput = {
    id?: string
    patientId: string
    doctorId: string
    medications: JsonNullValueInput | InputJsonValue
    notes?: string | null
    status?: $Enums.PrescriptionStatus
    createdAt?: Date | string
  }

  export type InvoiceUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: UserUpdateOneRequiredWithoutInvoicesNestedInput
    payments?: PaymentUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateManyWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientRecordUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    labResults?: NullableJsonNullValueInput | InputJsonValue
    attachments?: NullableJsonNullValueInput | InputJsonValue
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: UserUpdateOneRequiredWithoutPatientRecordsNestedInput
    patientProfile?: PatientProfileUpdateOneWithoutRecordsNestedInput
  }

  export type PatientRecordUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    labResults?: NullableJsonNullValueInput | InputJsonValue
    attachments?: NullableJsonNullValueInput | InputJsonValue
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientId?: StringFieldUpdateOperationsInput | string
    patientProfileId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PatientRecordUncheckedUpdateManyWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    labResults?: NullableJsonNullValueInput | InputJsonValue
    attachments?: NullableJsonNullValueInput | InputJsonValue
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientId?: StringFieldUpdateOperationsInput | string
    patientProfileId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrescriptionUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    medications?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: UserUpdateOneRequiredWithoutPrescriptionsAsDoctorNestedInput
    patient?: UserUpdateOneRequiredWithoutPrescriptionsAsPatientNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    medications?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionUncheckedUpdateManyWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    medications?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInvoiceInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    method: string
    createdAt?: Date | string
  }

  export type PaymentUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCreateManyMedicationInput = {
    id?: string
    quantity: number
    batchNumber?: string | null
    expirationDate?: Date | string | null
    createdAt?: Date | string
  }

  export type InventoryUpdateWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    batchNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryUncheckedUpdateWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    batchNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryUncheckedUpdateManyWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    batchNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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