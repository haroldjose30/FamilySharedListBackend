exports = function(request, response) {
  
  return request
  const uuidAccount = request.headers["uuid-account"];
  if (uuidAccount === undefined) {
    throw new Error(`header uuid-account was not defined.`);
  }

  // Querying a mongodb service:
   const doc = context.services
   .get("mongodb-atlas")
   .db("Db_Account_Main")
   .collection("Col_Account")
   .findOne();

  return doc
};
