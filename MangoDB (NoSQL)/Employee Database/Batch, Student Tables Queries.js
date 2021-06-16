// Joining Two Collections {Left Outer Join}
db.Students.aggregate([
    {
        $lookup:{
                from: "Batch",
                localField:"batchId", // Student Collection's batchID
                foreignField:"batchId", // Batch Collection's batchID
                as: "BatchName"
            }
    }
])
    
// Date 
db.Emp.insert({
    "dob": new Date("1990-12-12"), // yyyy-mm-dd
    "doj": new Date("2020-01-01"),
    "insertedDate": Date()
})

db.Emp.find({})