// This function is the endpoint's request handler.
exports = async function({ body}, response) {
  
    const serviceName = "FAMILYSHAREDLISTBACKEND0"
    const collectionName = "Col_MyLists"
  
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

    const doc = await context.services.get(serviceName).db(uuid).collection(collectionName).findOne();
    if (doc !== null) {
     return {"dataCreated": false}
    }
    
    const insertData = [
      {
              "uuid": "sample1",
              "name": "Bem vindo ao family share list",
              "isCompleted": false,
              "quantity": 1
      },
      {
              "uuid": "sample2",
              "name": "deslize o item para o lado para excluir",
              "isCompleted": false,
              "quantity": 1
      }
    ];
    
    
    const insertResult = await context.services.get(serviceName).db(uuid).collection(collectionName).insertMany(insertData);
    return {"dataCreated": true}
};
