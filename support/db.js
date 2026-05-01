import pgPromise from "pg-promise";

const pgp = pgPromise();
//montando string de conexao usando PostgreSQL: postgresql://<seuUsuario>:<suaSenha>@<nomedocontainer:<porta>/<nomeDoBancoDeDados> 
const db = pgp('postgresql://dba:dba@paybank-db:5432/UserDB');

export async function obterCodigo2FA(cpf) {

    ////old
    // const query = `
    //     SELECT code
    //     FROM public."TwoFactorCode"
    //     ORDER BY id
    //     DESC LIMIT 1;
    // `
    
    const query = `
        SELECT t.code
        FROM public."TwoFactorCode" t
        JOIN public."User" u ON u."id" = t."userId"
        WHERE u."cpf" = '${cpf}'
        ORDER BY t.id DESC
        LIMIT 1;
    `

    const result = await db.oneOrNone(query);
    return result.code   
}

