db.Employee_Details.find({}).pretty()

// 1. Find all the employee whose first name is "Salman"
db.Employee_Details.find({"FirstName": "Salman"})

// 2. Find all the Employees whose firstName is “salman” and lastName is “Khan”.
db.Employee_Details.find({"FirstName": "Salman", "LastName": "Khan"})
                        // OR
db.Employee_Details.find({
    $and:[
        {"FirstName": "Salman"},
        {"LastName": "Khan"}
    ]
})
                        // OR
db.Employee_Details.find({
    $or:[
        {"FirstName": "Salman"},
        {"LastName": "Kaif"}
    ]
})

// 3. Find all the Employees whose salary is 75000 and 25000.5
db.Employee_Details.find({
    $or: [
    {"Salary": 75000.0},
    {"Salary": 25000.5}
    ]
    })

// 4. Find all the Employees whose salary is less than 75000 
db.Employee_Details.find({
        "Salary": {$lt: 75000.0}
        })
        
// 5. Find all the Employees whose salary is greater than 75000
db.Employee_Details.find({
    "Salary": {$gt: 75000}
    })

// 6. Find all the Employees whose salary is between 20000 and 75000
db.Employee_Details.find({
    $and: [
    {"Salary":{$gte: 20000}},
    {"Salary":{$lte: 75000}}
    ]
    })
    
// 7. Count all the employees
db.Employee_Details.count({})

// 8. Count all the employees with salary more than 25000
db.Employee_Details.count({
    "Salary": {$gt: 25000}
    })
    
// 9. Find the maximum age 
db.Employee_Details.aggregate([
    {$group: {
        _id: null, maxAge: {$max: "$Age"}}
        }
    ])
        
// 9. Find the maximum age in each location
db.Employee_Details.aggregate([
        {$group: {
            _id:"$Address", MaxAge: {$max: '$Age'}}
            }
        ])

// 10. Count the number of employees from each location
db.Employee_Details.aggregate([
    {$group: {
            _id: "$Address", 
            No_of_Employees: {$sum: 1}
            }
    }
])
    
// 11. Count the number of employees in each location with more than 1 employees
db.Employee_Details.aggregate([
    {$group: {_id: "$Address", 
             No_of_Employees: {$sum: 1}
             }},
     {$match: {No_of_Employees: {$gt: 1}}
         }
])
