use('Db_Commons_Data');

db.Col_Company.insertMany(
    [
        {
            'uuid': 'Company_001',
            'createdDate': new Date('2014-03-01T08:00:00Z'),
            'updatedDate': new Date('2014-03-01T08:00:00Z'),
            'name': 'Continente',
            'url': 'http://continente.com',
            'logoUrl': 'http://continente.com',
            'color': 'red',
            'address': {
                'street':'',
                'city':'',
                'state':'',
                'country':'',
                'zip':'',
            },
            'location': {
                'latitude': -123.5465456,
                'longitude': -4325.2342342,
            },
        },
        {
            'uuid': 'Company_002',
            'createdDate': new Date('2014-03-01T08:00:00Z'),
            'updatedDate': new Date('2014-03-01T08:00:00Z'),
            'name': 'Pingo Doce',
            'url': 'http://pingodoce.com',
            'logoUrl': 'http://pingodoce.com/logo.png',
            'color': 'red',
            'address': {
                'street':'',
                'city':'',
                'state':'',
                'country':'',
                'zip':'',
            },
            'location': {
                'latitude': -123.5465456,
                'longitude': -4325.2342342,
            },
        },
    ]
    );


// Run a find command to view items sold on April 4th, 2014.
db.getCollection('Col_Company').find({})