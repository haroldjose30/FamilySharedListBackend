// This function is the endpoint's request handler.
exports = function({ body}, response) {
  
  
    if (body === undefined) {
      throw new Error(`uuid was not defined.`);
    }

    const reqBody = JSON.parse(body.text());
    
    if (reqBody === undefined) {
      throw new Error(`uuid was not defined.`);
    }
    
    const uuid = reqBody.uuid
    
    if (uuid === undefined) {
      throw new Error(`uuid was not defined.`);
    }
      
    const myList = context
    .services
    .get("FAMILYSHAREDLISTBACKEND0")
    .db(uuid)
    .collection("Col_MyLists")

    
    if (myList === undefined) {
     return `inserted new data: ${uuid}`
    }
    
    return `listCount: ${myList} uuid:${uuid}`
   

  //collection.insertOne(fullDocument)
  //  .then(result => console.log(`Successfully inserted item with _id: ${result.insertedId}`))
  //  .catch(err => console.error(`Failed to insert item: ${err}`));

    // You can use 'context' to interact with other application features.
    // Accessing a value:
    // var x = context.values.get("value_name");

    // Querying a mongodb service:
    // const doc = context.services.get("mongodb-atlas").db("dbname").collection("coll_name").findOne();

    // Calling a function:
    // const result = context.functions.execute("function_name", arg1, arg2);

    // The return value of the function is sent as the response back to the client
    // when the "Respond with Result" setting is set.
};
