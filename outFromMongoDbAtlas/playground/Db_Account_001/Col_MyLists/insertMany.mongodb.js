use('Db_Account_002');

//List types: grocery/wishlist/clothe
//Grocery Item Status: outStock/lowStock/inStock
//wishlist Item Status: todo/done
//Clothes Item Status: todo/done

db.Col_MyLists.insertMany([
    //GROCERY
    {
        'uuid': 'ListId001',
        'createdDate': new Date('2014-03-01T08:00:00Z'),
        'updatedDate': new Date('2014-03-01T08:00:00Z'),
        'name': 'Mercado',
        'type': 'grocery',
        'items': [
            {
                'uuid': 'ItemId001',
                'createdDate': new Date('2014-03-01T08:00:00Z'),
                'updatedDate': new Date('2014-03-01T08:00:00Z'),
                'name': 'Item 1',
                'status': 'outStock',
                'icon': "iconName",
                'quantity': 2,
                'prices': [
                    {
                        'uuid': 'PriceId001',
                        'company': {
                            "uuid": "id001",
                            "name": "Continente",
                            "color": "red",
                        },
                        'price': 2.21,
                        'priceUpdatedDate': new Date('2014-03-01T08:00:00Z'),
                        'location': {
                            "latitude": -122.374733333222222,
                            "longitude": -122.374733333222222,
                        },
                    },
                    {
                        'uuid': 'PriceId002',
                        'company': null,
                        'price': 2.21,
                        'priceUpdatedDate': new Date('2014-03-01T08:00:00Z'),
                        'location': null,
                    },
                ]
            },
        ],
    },
    //WISHLIST
    {
        'uuid': 'ListId002',
        'createdDate': new Date('2014-03-01T08:00:00Z'),
        'updatedDate': new Date('2014-03-01T08:00:00Z'),
        'name': 'Desejos',
        'type': 'wishlist',
        'items': [
            {
                'uuid': 'ItemId001',
                'createdDate': new Date('2014-03-01T08:00:00Z'),
                'updatedDate': new Date('2014-03-01T08:00:00Z'),
                'name': 'Desejo 1',
                'status': 'todo',
                'icon': "iconName",
                'links': [
                    {
                        'uuid': 'LinkId002',
                        'link': "http://sample.com/sample1",
                        'company': {
                            "uuid": "id001",
                            "name": "Worten",
                            "color": "red",
                        },
                        'price': 2.21,
                        'priceUpdatedDate': new Date('2014-03-01T08:00:00Z'),                        
                    },
                    {
                        'uuid': 'LinkId002',
                        'link': "http://sample.com/sample2",
                        'company': null,
                        'price': 2.21,
                        'priceUpdatedDate': new Date('2014-03-01T08:00:00Z'),
                    },
                ]
            },
        ],
    },
    //CLOTHING
    {
        'uuid': 'ListId003',
        'createdDate': new Date('2014-03-01T08:00:00Z'),
        'updatedDate': new Date('2014-03-01T08:00:00Z'),
        'name': 'Roupas',
        'type': 'clothing',
        'items': [
            {
                'uuid': 'ItemId001',
                'createdDate': new Date('2014-03-01T08:00:00Z'),
                'updatedDate': new Date('2014-03-01T08:00:00Z'),
                'name': 'Roupa 1',
                'icon': "iconName",
                'quantity': 2,
                'links': [
                    {
                        'uuid': 'LinkId001',
                        'link': "http://sample.com/sample1",
                        'company': {
                            "uuid": "id001",
                            "name": "Worten",
                            "color": "red",
                        },
                        'price': 2.21,
                        'priceUpdatedDate': new Date('2014-03-01T08:00:00Z'),
                    },
                    {
                        'uuid': 'LinkId002',
                        'link': "http://sample.com/sample2",
                        'company': null,
                        'price': 2.21,
                        'priceUpdatedDate': new Date('2014-03-01T08:00:00Z'),
                    },
                ]
            },
        ],
    },
]);


// Run a find command to view items sold on April 4th, 2014.
db.getCollection('Col_MyLists').find({})