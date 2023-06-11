exports = function(request, response) {
  
  const uuidAccount = request.headers["UUID-ACCOUNT"];
  if (uuidAccount === undefined) {
    throw new Error(`header UUID-ACCOUNT was not defined.`);
  }

  // Querying a mongodb service:
   const doc = context.services
   .get("mongodb-atlas")
   .db("Db_Account_Main")
   .collection("Col_Account")
   .findOne();

  return doc
};
