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
              "name": "Bem vindo ao family shared list",
              "isCompleted": false,
              "quantity": 1
      },
      {
              "uuid": "sample2",
              "name": "Sua lista de compras compartilhada",
              "isCompleted": false,
              "quantity": 2
      },
      {
              "uuid": "sample3",
              "name": "Comparilhe com membros da sua familia de forma muito simples",
              "isCompleted": false,
              "quantity": 3
      },
      {
              "uuid": "sample4",
              "name": "Adicione um novo item, altere a quantidade e marque como comprado",
              "isCompleted": false,
              "quantity": 4
      },
      {
              "uuid": "sample5",
              "name": "Deslise para a esquerda para excluir!",
              "isCompleted": false,
              "quantity": 5
      },
      {
              "uuid": "sample6",
              "name": "Aproveite!!!!!",
              "isCompleted": false,
              "quantity": 6
      },
    ];
    
    
    const insertResult = await context.services.get(serviceName).db(uuid).collection(collectionName).insertMany(insertData);
    return {"dataCreated": true}
};
