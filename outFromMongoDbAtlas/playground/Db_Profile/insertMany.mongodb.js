use('Db_Profile');

db.Col_Profile.insertMany(
    [
        {
            'uuid': 'Db_Account_001',
            'createdDate': new Date('2014-03-01T08:00:00Z'),
            'updatedDate': new Date('2014-03-01T08:00:00Z'),
            'name': 'Harold Jose',
            'email': 'haroldbarros@gmail.com',
            'password': '123456789',
            'shareMyAccountWith': [
                "Db_Account_002"
            ],
            
        },
        {
            'uuid': 'Db_Account_002',
            'createdDate': new Date('2014-03-01T08:00:00Z'),
            'updatedDate': new Date('2014-03-01T08:00:00Z'),
            'name': 'Rochelle Luciane',
            'email': 'rrochellee@gmail.com',
            'password': '123456789',
            'shareMyAccountWith': [],
            'accountSharedWithMe': [
                "Db_Account_001"
            ],
        },
        {
            'uuid': 'Db_Account_003',
            'createdDate': new Date('2014-03-01T08:00:00Z'),
            'updatedDate': new Date('2014-03-01T08:00:00Z'),
            'name': 'Guest',
            'email': '',
            'password': '',
        },
    ]
    );


// Run a find command to view items sold on April 4th, 2014.
db.getCollection('Col_Profile').find({})