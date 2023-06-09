use('Db_History_Data');

db.Db_History_Purchase.insertMany(
    [
        {
            'accountId': 'Db_Account_002',
            'listId': 'ListId001',
            'itemId': 'ItemId001',
            'name': 'Item 1',
            'purchased': [
                {
                    'company': {
                        "uuid": "id001",
                        "name": "Continente",
                        "color": "red",
                    },
                    'purchasedDate': new Date('2014-03-01T08:00:00Z'),
                    'quantity': 2,
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
db.getCollection('Db_History_Purchase').find({})