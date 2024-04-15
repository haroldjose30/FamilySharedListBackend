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
                        "name": "01: Bem vindo ao tutorial Family List! Seu app de lista de compras compartilhada com a sua família!",
                        "isCompleted": false,
                        "isCompletedDate": null,
                        "isPrioritized": false,
                        "quantity": 1,
                        "price": 0,
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
                        "name": "02: Clique na imagem para ampliar, em seguida arraste p/ esquerda e remova cada tutorial aprendido!",
                        "isCompleted": false,
                        "isCompletedDate": null,
                        "isPrioritized": false,
                        "quantity": 1,
                        "price": 0,
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
                        "name": "03: Experimente Adicionar um item pela decrição ou qrcode usando as opções no final da tela!",
                        "isCompleted": false,
                        "isCompletedDate": null,
                        "isPrioritized": false,
                        "quantity": 1,
                        "price": 0,
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
                        "name": "04: Vamos alterar quantidade do item adicionado? é muito simples basta clicar no - ou +",
                        "isCompleted": false,
                        "isCompletedDate": null,
                        "isPrioritized": false,
                        "quantity": 1,
                        "price": 0,
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
                        "name": "05: Clique no 'carrinho de compras' para enviar para a aba Priorizado. Depois clique na aba corespondente!",
                        "isCompleted": false,
                        "isCompletedDate": null,
                        "isPrioritized": false,
                        "quantity": 1,
                        "price": 0,
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
                        "quantity": 1,
                        "price": 0,
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
                        "name": "07: Faça o mesmo para informar o preço, pressione e segure sobre, e poderá conferir no caixa o valor total!",
                        "isCompleted": false,
                        "isCompletedDate": null,
                        "isPrioritized": true,
                        "quantity": 1,
                        "price": 0,
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
                        "name": "08: Clique no 'check' e depois na aba 'comprado' para ver os itens que já foram adquiridos!",
                        "isCompleted": false,
                        "isCompletedDate": null,
                        "isPrioritized": true,
                        "quantity": 1,
                        "price": 0,
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
                        "name": "09: Use o QRCode para complementar os dados do produto esta função adicionará imagem e descrição.",
                        "isCompleted": true,
                        "isCompletedDate": "2024-04-14T10:46:00.522593",
                        "isPrioritized": false,
                        "quantity": 1,
                        "price": 2.55,
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
                        "name": "10: Compartilhe sua lista com familiares! Clique no ícone de configurações depois em 'Compartilhar minha conta'!",
                        "isCompleted": true,
                        "isCompletedDate": "2024-04-14T10:46:00.522593",
                        "isPrioritized": false,
                        "quantity": 1,
                        "price": 1.95,
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
                        "name": "11: Para acessar uma lista de outro familiar basta digitar o código da conta!",
                        "isCompleted": true,
                        "isCompletedDate": "2024-04-14T10:46:00.522593",
                        "isPrioritized": false,
                        "quantity": 1,
                        "price": 3.25,
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
                        "name": "12: Experimente a opção de inclusão rápida de itens, basta clicar no ícone de lista no canto superior direito!",
                        "isCompleted": true,
                        "isCompletedDate": "2024-01-10T10:46:00.522593",
                        "isPrioritized": false,
                        "quantity": 1,
                        "price": 3.61,
                        "product": {
                                "code": "lesson12",
                                "imageFrontSmallUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson12.png",
                                "imageFrontUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson12.png",
                                "imageUrl": "https://haroldjose.dev/images/projects/familylist/lessons/lesson12.png",
                                "productName": "lesson12"
                        }
                },
                
        ];


        const insertResult = await context.services.get(serviceName).db(uuid).collection(collectionName).insertMany(insertData);
        return { "dataCreated": true }
};
