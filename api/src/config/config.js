/**
 * Puerto del host
 *  
 */
process.env.PORT = process.env.PORT || 3000;

/**
 * Entorno de desarrollo
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

/**
 * Host de la Base de Datos
 */
process.env.DATABASE_URL = process.env.NODE_ENV === 'dev'? "mongodb://localhost:27017/local" : URL_MONGODB