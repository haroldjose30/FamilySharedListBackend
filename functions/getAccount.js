exports = function(request, response) {
  
  const uuidAccount = request.headers["Account-Id"];
  if (uuidAccount === undefined) {
    throw new Error(`header Account-Id was not defined.`);
  }

  const doc = context.services
    .get("mongodb-atlas")
    .db("Db_Account_Main")
    .collection("Col_Account")
    .findOne(
      {
        "uuid": `${uuidAccount}`
      }
    );
    
  if (!doc) {
    return "doc null"
  }

  return doc
};
