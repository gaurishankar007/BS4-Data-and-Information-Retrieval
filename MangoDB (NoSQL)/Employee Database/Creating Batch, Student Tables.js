db.Batch.insertMany([
{
"batchId":1,
"batchName":"27-A"
},
{
"batchId":2,
"batchName":"27-B"
},
{
"batchId":3,
"batchName":"27-C"
},
])


db.Students.insertMany([
{
"stdId":1,
"fname":"Kiran",
"batchId":2
},
{
"stdId":2,
"fname":"Katrina",
"batchId":2
},
{
"stdId":3,
"fname":"Salman",
"batchId":3
}, {
"stdId":4,
"fname":"John",
"batchId":2
},
])

db.Students.find({})
db.Batch.find({})