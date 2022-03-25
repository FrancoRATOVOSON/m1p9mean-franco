
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.11.1
 * Query Engine version: 1a2506facaf1a4727b7c26850735e88ec779dee9
 */
Prisma.prismaVersion = {
  client: "3.11.1",
  engine: "1a2506facaf1a4727b7c26850735e88ec779dee9"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AdminScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  motDePasse: 'motDePasse'
});

exports.Prisma.ClientScalarFieldEnum = makeEnum({
  id: 'id',
  nom: 'nom',
  prenom: 'prenom',
  adresse: 'adresse',
  email: 'email',
  motDePasse: 'motDePasse'
});

exports.Prisma.RestaurantScalarFieldEnum = makeEnum({
  id: 'id',
  nom: 'nom',
  adresse: 'adresse',
  email: 'email',
  motDePasse: 'motDePasse'
});

exports.Prisma.LivreurScalarFieldEnum = makeEnum({
  id: 'id',
  nom: 'nom',
  prenom: 'prenom',
  email: 'email',
  motDePasse: 'motDePasse'
});

exports.Prisma.MenuScalarFieldEnum = makeEnum({
  id: 'id',
  nom: 'nom',
  prix: 'prix',
  visible: 'visible',
  restaurantId: 'restaurantId',
  commandeIds: 'commandeIds'
});

exports.Prisma.CommandeScalarFieldEnum = makeEnum({
  id: 'id',
  date: 'date',
  clientId: 'clientId',
  etat: 'etat',
  livreurId: 'livreurId'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});
exports.Etat = makeEnum({
  ATTENTE: 'ATTENTE',
  LIVREE: 'LIVREE',
  ANNULEE: 'ANNULEE'
});

exports.Prisma.ModelName = makeEnum({
  Admin: 'Admin',
  Client: 'Client',
  Restaurant: 'Restaurant',
  Livreur: 'Livreur',
  Menu: 'Menu',
  Commande: 'Commande'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
