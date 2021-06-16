db.getCollection("Customer_Order").insert({
    OrderNo: NumberInt(7823),
    AccountNo: NumberInt(178),
    CustomerName: "Daisy's Cafe",
    Address: "27 Bay Drive, Cove",
    Date: "16/7",
    Items: [
        {Name: "Bakewell Trat", Quantity: NumberInt(20), Price: 0.15},
        {Name: "Danish Pastry", Quantity: NumberInt(13), Price: 0.20},
        {Name: "Apple Pie", Quantity: NumberInt(45), Price: 0.15}
        
    ],
    TotalCost: 12.35
})

db.Customer_Order.insert([
    {
        OrderNo: NumberInt(4633),
        AccountNO: NumberInt(526),
        CustomerName: "Smiths",
        Address: "12 Dee View, Aberdeen",
        Date: "16/7",
        Items: {
            Name: "Butteries",
            Quantity: NumberInt(120),
            Price: 0.20
        },
        TotalCost: 24.00
    },
    {
        OrderNo: NumberInt(2276),
        AccountNO: NumberInt(167),
        CustomerName: "Sally's Snacks",
        Address: "13 High Street, Banchory",
        Date: "17/7",
        Items: [
            {
                Name: "Apple Pie",
                Quantity: NumberInt(130),
                Price: 0.15  
            },
            {
                Name: "Cherry Pie",
                Quantity: NumberInt(100),
                Price: 0.18  
            },
            {
                Name: "Steak Pie",
                Quantity: NumberInt(30),
                Price: 0.50  
            },
            {
                Name: "Maringue Pie",
                Quantity: NumberInt(20),
                Price: 0.20  
            }
        ],
        TotalCost: 56.50
    },
    {
        OrderNo: NumberInt(1788),
        AccountNO: NumberInt(032),
        CustomerName: "Tasty Bite",
        Address: "17 Wood Place Insch",
        Date: "18/7",
        Items: [
            {
                Name: "Apple Pie",
                Quantity: NumberInt(15),
                Price: 0.15  
            },
            {
                Name: "Danish Pastry",
                Quantity: NumberInt(50),
                Price: 0.20  
            }
        ],
        TotalCost: 7.50
    },
        
])

db.getCollection("Customer_Order").find({})

db.Customer_Order.find({})