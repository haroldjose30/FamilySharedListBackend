// This function is the endpoint's request handler.
exports = async function({ body}, response) {
  
    const databaseConstants = context.values.get("DATABASE_CONSTANTS");
    const serviceName = databaseConstants.ServiceName
    const dbAccountMain = databaseConstants.Db_Account_Main
    const colAccount = databaseConstants.Col_Account
  
    if (body === undefined) {
      throw new Error(`body has not been set.`);
    }

    const reqBody = JSON.parse(body.text());
    
    if (reqBody === undefined) {
      throw new Error(`reqBody has not been set.`);
    }
    
    const accountUuid = reqBody.accountUuid
    
    if (accountUuid === undefined) {
      throw new Error(`accountUuid has not been set.`);
    }

    //verify if the account exists
    const currentAccountDoc = await context.services
                                    .get(serviceName)
                                    .db(dbAccountMain)
                                    .collection(colAccount)
                                    .findOne({"uuid": accountUuid});

    if (currentAccountDoc === null) {
        throw new Error(`account not found.`);
    }

    const code = reqBody.code
    
    if (code === undefined) {
        throw new Error(`code has not been set.`);
    }

    //verify if the code exists
    const sharedAccountDoc = await context.services
                                    .get(serviceName)
                                    .db(dbAccountMain)
                                    .collection(colAccount)
                                    .findOne({"accountShortCodeForShare": code});

    if (sharedAccountDoc === null) {
        throw new Error(`code not found.`);
    }

    //update current account
    currentAccountDoc.accountsSharedWithMe = [sharedAccountDoc.uuid];
    await context.services
                .get(serviceName)
                .db(dbAccountMain)
                .collection(colAccount)
                .updateOne(
                    {"uuid": accountUuid},
                    { $set: { "accountsSharedWithMe": currentAccountDoc.accountsSharedWithMe } }
                 );

    
    //update shared account
    if (!sharedAccountDoc.myAccountIsSharedWith.includes(accountUuid)) {
      sharedAccountDoc.myAccountIsSharedWith.push(accountUuid); 
    }
    
    await context.services
                .get(serviceName)
                .db(dbAccountMain)
                .collection(colAccount)
                .updateOne(
                    {"uuid": sharedAccountDoc.uuid},
                    { $set: { "myAccountIsSharedWith": sharedAccountDoc.myAccountIsSharedWith } }
                 );
    
    return {"result": true}
};