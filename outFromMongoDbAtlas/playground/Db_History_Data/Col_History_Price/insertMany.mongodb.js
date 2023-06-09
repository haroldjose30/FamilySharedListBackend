use('Db_History_Data');

db.Db_History_Price.insertMany(
    [
        {
            'accountId': 'Db_Account_002',
            'listId': 'ListId001',
            'itemId': 'ItemId001',
            'name': 'Item 1',
            'prices': [
                {
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
            ]
            
            
        },        
    ]
    );


// Run a find command to view items sold on April 4th, 2014.
db.getCollection('Col_Profile').find({})