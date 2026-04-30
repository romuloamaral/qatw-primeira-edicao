import pgPromise from "pg-promise";

const pgp = pgPromise();
//montando string de conexao usando PostgreSQL: postgresql://<seuUsuario>:<suaSenha>@<nomedocontainer:<porta>/<nomeDoBancoDeDados> 
const db = pgp('postgresql://dba:dba@paybank-db:5432/UserDB');

export async function obterCodigo2FA() {

    const query = 'SELECT code FROM public."TwoFactorCode" ORDER BY id DESC LIMIT 1;'

    const result = await db.oneOrNone(query);
    return result.code
    
}