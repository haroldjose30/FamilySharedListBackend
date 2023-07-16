exports = async function(arg){
  console.log("Function_Test arg:", arg);
  // This default function will get a value and find a document in MongoDB
  // To see plenty more examples of what you can do with functions see: 
  // https://www.mongodb.com/docs/atlas/app-services/functions/

  var findResult;
  try {
    // Find the name of the MongoDB service you want to use (see "Linked Data Sources" tab)
    const databaseConstants = context.values.get("DATABASE_CONSTANTS");
    const serviceName = databaseConstants.ServiceName
    const dbName = databaseConstants.Db_Account_Main
    const collName = databaseConstants.Col_Account
  
    // Get a collection from the context
    var collection = context.services.get(serviceName).db(dbName).collection(collName);

    // Execute a Find in MongoDB 
    findResult = await collection.find({})

  } catch(err) {
    console.log("Error occurred while executing findOne:", err.message);

    return { error: err.message };
  }

  // To call other named functions:
  // var result = context.functions.execute("function_name", arg1, arg2);

  return findResult;
};