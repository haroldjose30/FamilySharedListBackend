// This function is the endpoint's request handler.
exports = async function ({ body }, response) {

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
                return { "dataCreated": false }
        }

        const insertData = [
                {
                        "uuid": "lesson01",
                        "name": "01: Bem vindo ao tutorial Family List!",
                        "isCompleted": false,
                        "isCompletedDate": null,
                        "isPrioritized": false,
                        "quantity": 1,
                        "price": 1.0,
                        "product": {
                                "code": "lesson01",
                                "imageFrontSmallUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson01.png",
                                "imageFrontUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson01.png",
                                "imageUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson01.png",
                                "productName": "lesson01"
                        }
                },
                {
                        "uuid": "lesson02",
                        "name": "02: Clique na imagem p/ ampliar, arraste p/ esquerda para excluir!",
                        "isCompleted": false,
                        "isCompletedDate": null,
                        "isPrioritized": false,
                        "quantity": 2,
                        "price": 1.0,
                        "product": {
                                "code": "lesson02",
                                "imageFrontSmallUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson02.png",
                                "imageFrontUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson02.png",
                                "imageUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson02.png",
                                "productName": "lesson02"
                        }
                },
                {
                        "uuid": "lesson03",
                        "name": "03: Adicione um item usando as opções no final da página!",
                        "isCompleted": false,
                        "isCompletedDate": null,
                        "isPrioritized": false,
                        "quantity": 3,
                        "price": 1.0,
                        "product": {
                                "code": "lesson03",
                                "imageFrontSmallUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson03.png",
                                "imageFrontUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson03.png",
                                "imageUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson03.png",
                                "productName": "lesson03"
                        }
                },
                {
                        "uuid": "lesson04",
                        "name": "04: Para alterar a quantidade basta clicar no - ou +",
                        "isCompleted": false,
                        "isCompletedDate": null,
                        "isPrioritized": false,
                        "quantity": 4,
                        "price": 1.0,
                        "product": {
                                "code": "lesson04",
                                "imageFrontSmallUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson04.png",
                                "imageFrontUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson04.png",
                                "imageUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson04.png",
                                "productName": "lesson04"
                        }
                },
                {
                        "uuid": "lesson05",
                        "name": "05: Clique no 'carrinho de compras', depois clique em 'Priorizado'",
                        "isCompleted": false,
                        "isCompletedDate": null,
                        "isPrioritized": false,
                        "quantity": 5,
                        "price": 1.0,
                        "product": {
                                "code": "lesson05",
                                "imageFrontSmallUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson05.png",
                                "imageFrontUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson05.png",
                                "imageUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson05.png",
                                "productName": "lesson05"
                        }
                },
                {
                        "uuid": "lesson06",
                        "name": "06: Pressione e segure sobre o nome para alterar!",
                        "isCompleted": false,
                        "isCompletedDate": null,
                        "isPrioritized": true,
                        "quantity": 6,
                        "price": 1.0,
                        "product": {
                                "code": "lesson06",
                                "imageFrontSmallUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson06.png",
                                "imageFrontUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson06.png",
                                "imageUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson06.png",
                                "productName": "lesson06"
                        }
                },
                {
                        "uuid": "lesson07",
                        "name": "07: Faça o mesmo com o preço. Poderá conferir no caixa o valor total!",
                        "isCompleted": false,
                        "isCompletedDate": null,
                        "isPrioritized": true,
                        "quantity": 7,
                        "price": 1.0,
                        "product": {
                                "code": "lesson07",
                                "imageFrontSmallUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson07.png",
                                "imageFrontUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson07.png",
                                "imageUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson07.png",
                                "productName": "lesson07"
                        }
                },
                {
                        "uuid": "lesson08",
                        "name": "08: Clique no 'check' e depois em 'Comprado' para ver os itens adquiridos!",
                        "isCompleted": false,
                        "isCompletedDate": null,
                        "isPrioritized": true,
                        "quantity": 8,
                        "price": 1.0,
                        "product": {
                                "code": "lesson08",
                                "imageFrontSmallUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson08.png",
                                "imageFrontUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson08.png",
                                "imageUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson08.png",
                                "productName": "lesson08"
                        }
                },
                {
                        "uuid": "lesson09",
                        "name": "09: Ler o QRCode adicionará imagem e descrição ao item",
                        "isCompleted": true,
                        "isCompletedDate": "2024-04-14T10:46:00.522593",
                        "isPrioritized": false,
                        "quantity": 9,
                        "price": 1.0,
                        "product": {
                                "code": "lesson09",
                                "imageFrontSmallUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson09.png",
                                "imageFrontUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson09.png",
                                "imageUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson09.png",
                                "productName": "lesson09"
                        }
                },
                {
                        "uuid": "lesson10",
                        "name": "10: Seu código pode ser compartilhado no meu 'engrenagem' e em 'Compartilhar minha conta'",
                        "isCompleted": true,
                        "isCompletedDate": "2024-04-14T10:46:00.522593",
                        "isPrioritized": false,
                        "quantity": 10,
                        "price": 1.0,
                        "product": {
                                "code": "lesson10",
                                "imageFrontSmallUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson10.png",
                                "imageFrontUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson10.png",
                                "imageUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson10.png",
                                "productName": "lesson10"
                        }
                },
                {
                        "uuid": "lesson11",
                        "name": "11: Para acessar outra lista basta digitar o código da conta desejada!",
                        "isCompleted": true,
                        "isCompletedDate": "2024-04-14T10:46:00.522593",
                        "isPrioritized": false,
                        "quantity": 11,
                        "price": 1.0,
                        "product": {
                                "code": "lesson11",
                                "imageFrontSmallUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson11.png",
                                "imageFrontUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson11.png",
                                "imageUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson11.png",
                                "productName": "lesson11"
                        }
                },
                {
                        "uuid": "lesson12",
                        "name": "12: Existe uma opção de inclusão rápida ao clicar no ícone de lista+!",
                        "isCompleted": true,
                        "isCompletedDate": "2024-01-10T10:46:00.522593",
                        "isPrioritized": false,
                        "quantity": 12,
                        "price": 1.0,
                        "product": {
                                "code": "lesson12",
                                "imageFrontSmallUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson12.png",
                                "imageFrontUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson12.png",
                                "imageUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson12.png",
                                "productName": "lesson12"
                        }
                },
                {
                        "uuid": "lesson13",
                        "name": "13: Concluimos o tutorial! Agora é só usar com a família!",
                        "isCompleted": true,
                        "isCompletedDate": "2024-01-10T10:46:00.522593",
                        "isPrioritized": false,
                        "quantity": 13,
                        "price": 1.0,
                        "product": null
                },
                
        ];


        const insertResult = await context.services.get(serviceName).db(uuid).collection(collectionName).insertMany(insertData);
        return { "dataCreated": true }
};
