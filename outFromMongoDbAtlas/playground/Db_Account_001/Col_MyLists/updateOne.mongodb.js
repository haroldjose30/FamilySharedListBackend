use('Db_Account_001');

//update a main property by ObjectId
// db.Col_MyLists.updateOne(
//     { _id: ObjectId('648259da10dff321172261f4')},
//     { $set: { "name": "Mercado" } }
// );

//update a main property by uuid
// db.Col_MyLists.updateOne(
//     { uuid: "ListId001"},
//     { $set: { "name": "Mercado1" } }
// );

//update a item from an inner array by uuid
// db.Col_MyLists.updateOne(
//     {
//         "uuid": "ListId001",
//         "items": {
//             "$elemMatch": {
//                 "uuid": "ItemId001"
//             }
//         }
//     },
//     { "$set": { 
//         "items.$[outer].name": "Batata Palha"
//     } },
//     { "arrayFilters": [
//         { "outer.uuid": "ItemId001" },
//     ] }, (err, result) => {
//     if (err) {
//         console.log('Error updating service: ' + err);
//         res.send({'error':'An error has occurred'});
//     } else {
//         console.log(result)
//     }
// });

//update a item from second level inner array by uuid
db.Col_MyLists.updateOne(
    {
        "uuid": "ListId001",
        "items": {
            "$elemMatch": {
                "uuid": "ItemId001",
                "prices.uuid": "PriceId002"
            }
        }
    },
    { "$set": { 
        "items.$[outer].prices.$[inner].price": 25.59
    } },
    { "arrayFilters": [
        { "outer.uuid": "ItemId001" },
        { "inner.uuid": "PriceId002" },
    ] }, (err, result) => {
    if (err) {
        console.log('Error updating service: ' + err);
        res.send({'error':'An error has occurred'});
    } else {
        console.log(result)
    }
});