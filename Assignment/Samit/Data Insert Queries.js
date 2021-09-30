Samit_id = ObjectId()
Nabin_id = ObjectId()
Kapil_id = ObjectId()
Tsering_id = ObjectId()
Shahil_id = ObjectId()
Nishan_id = ObjectId()
db.Customer.insert([
    {
        _id: Samit_id,
        Name: "Samit Raj Mahat",
        Email: "samit002@gmail.com",
        Phone: NumberInt(9849340000),
        Country: "Nepal",
        Registered_Date: Date()
    },
    {
        _id: Nabin_id,
        Name: "Nabin Oli",
        Email: "nabin789@gmail.com",
        Phone: NumberInt(9870147210),
        Country: "Nepal",
        Registered_Date: Date()
    },
    {
        _id: Kapil_id,
        Name: "Kapil Sharma",
        Email: "kapil552@gmail.com",
        Phone: NumberInt(7503907302),
        Country: "India",
        Registered_Date: Date()
    },
    {
        _id: Tsering_id,
        Name: "Tsering Wangchuk Sherpa",
        Email: "Wangchuk228@gmail.com",
        Phone: NumberInt(9895123210),
        Country: "Nepal",
        Registered_Date: Date(),
    },    
    {
        _id: Shahil_id,
        Name: "Shahil Adhikari",
        Email: "shahil009@gmail.com",
        Phone: NumberInt(9852361047),
        Country: "Nepal",
        Registered_Date: Date()
    },
    {
        _id: Nishan_id,
        Name: "Nishan Bhat",
        Email: "Bhat786@gmail.com",
        Phone: NumberInt(9801478963),
        Country: "Nepal",
        Registered_Date: Date()
    },
])
Bhandari_id = ObjectId()
Shankar_id = ObjectId()
Lava_id = ObjectId()
db.Company.insert([
    {     
        _id: Bhandari_id,
        Name: "Bhandari Hardware",
        Email: "Bhandari786@gmail.com",
        Phone: NumberInt(9852147630),
        Country: "Nepal",
        Registered_Date: Date()   
    },
    {      
        _id: Shankar_id,
        Name: "Shankar Pustak Pasal",
        Email: "shankar056@gmail.com",
        Phone: NumberInt(9874563211),
        Country: "Nepal",
        Registered_Date: Date()   
    },
    {      
        _id: Lava_id,
        Name: "Lava Mobile Company",
        Email: "Lava546@gmail.com",
        Phone: NumberInt(7503907302),
        Country: "India",
        Registered_Date: Date()   
    },
])
Munamadan_id = ObjectId()
Karnali_id = ObjectId()
Shireeshko_id = ObjectId()
Asian_id = ObjectId()
Vishal_id = ObjectId()
OPC_id = ObjectId()
Z4_id = ObjectId()
A1200_id = ObjectId()
Z6_id = ObjectId()
db.Product.insert([
    {   
        _id: Munamadan_id,
        Name: "Munamadan",
        Description: "Muna Madan is a Nepali episodic love poem published in 1936 by the poet Laxmi Prasad Devkota. Considered a classic of Nepali literature, Muna Madan remains a popular poem and is taught in schools.",
        Quantity: NumberInt(120),
        Price: "Rs.2500",
        Company_ID: Shankar_id,
        Date: Date()
    },
    {
        _id: Karnali_id,
        Name: "Karnali Bluj",
        Description: "Karnali Blues is book written by Buddhi Sagar and published by FinePrint publication, Nepal. Karnali Blues is a story about a young boy who travels through different phases of his life with his parents. The story's main focus is on the protagonist's father.",
        Quantity: NumberInt(150),
        Price: "Rs.3000",
        Company_ID: Shankar_id,
        Date: Date()
    },
    {
        _id: Shireeshko_id,
        Name: "Shireeshko Fool",
        Description: "Shirishko Phool, published in 1964, is a Nepali language novel by Parijat. It was the author's first and most successful novel. It was awarded the Madan Puraskar in 1965.",
        Quantity: NumberInt(90),
        Price: "Rs.4200",
        Company_ID: Shankar_id,
        Date: Date()
    },  
    {
        _id: Asian_id,
        Name: "Asian paints basket",
        Description: "Asian Paints Ltd is an Indian multinational paint company, headquartered in Mumbai. The company is engaged in the business of manufacturing, selling and distribution of paints, coatings, products related to home decor, bath fittings and providing of related services.",
        Quantity: NumberInt(50),
        Price: "Rs.12000",
        Company_ID: Bhandari_id,
        Date: Date()
    },   
    {
        _id: Vishal_id,
        Name: "Vishal Bulb 15W",
        Description: "Vishal LED Bulbs are an electric light which are widely used in the hotel, home, offices, hospital, shopping mall etc. This LED bulb is last longer and uses only about 10% of the energy than other types of lighting.",
        Quantity: NumberInt(80),
        Price: "Rs.250",
        Company_ID: Bhandari_id,
        Date: Date()
    },     
    {
        _id: OPC_id,
        Name: "OPC Cement Bora",
        Description: "Portland cement is the most common type of cement in general use around the world as a basic ingredient of concrete, mortar, stucco, and non-specialty grout. It was developed from other types of hydraulic lime in England in the early 19th century by Joseph Aspdin, and is usually made from limestone.",
        Quantity: NumberInt(200),
        Price: "Rs.1000",
        Company_ID: Bhandari_id,
        Date: Date()
    },     
    {
        _id: Z4_id,
        Name: "Lava Z4",
        Description: "Lava International is an Indian multinational electronics company that manufactures smartphones, laptops, computer hardwares and consumer electronics. It was founded in 2009 as an offshoot of a telecommunication venture.",
        Quantity: NumberInt(250),
        Price: "Rs.15000",
        Company_ID: Lava_id,
        Date: Date()
    },     
    {
        _id: A1200_id,
        Name: "Lava A1200",
        Description: "Lava International is an Indian multinational electronics company that manufactures smartphones, laptops, computer hardwares and consumer electronics. It was founded in 2009 as an offshoot of a telecommunication venture.",
        Quantity: NumberInt(150),
        Price: "Rs.2000",
        Company_ID: Lava_id,
        Date: Date()
    },     
    {
        _id: Z6_id,
        Name: "Lava Z6",
        Description: "Lava International is an Indian multinational electronics company that manufactures smartphones, laptops, computer hardwares and consumer electronics. It was founded in 2009 as an offshoot of a telecommunication venture.",
        Quantity: NumberInt(175),
        Price: "Rs.18000",
        Company_ID: Lava_id,
        Date: Date()
    },      
])
db.Review.insert([
    {
        Product_ID: Munamadan_id,
        Customer_ID: Samit_id,
        Rating: NumberInt(5),
        Comment: "Very immostional book i have ever read yet."
    },    
    {
        Product_ID: Shireeshko_id,
        Customer_ID: Tsering_id,
        Rating: NumberInt(4),
        Comment: "One of the good books i have ever read yet."
    },
    {
        Product_ID: Asian_id,
        Customer_ID: Kapil_id,
        Rating: NumberInt(4),
        Comment: "Good paint but not as much good as Royal Paint."
    },    
    {
        Product_ID: Vishal_id,
        Customer_ID: Nishan_id,
        Rating: NumberInt(5),
        Comment: "Bes long lasting bulb."
    },
    {
        Product_ID: A1200_id,
        Customer_ID: Shahil_id,
        Rating: NumberInt(5),
        Comment: "Best keypad mobile ever used for calls"
    },    
    {
        Product_ID: Z6_id,
        Customer_ID: Nabin_id,
        Rating: NumberInt(4),
        Comment: "Best smartphone under Rs.20000"
    },
])
db.Shoppint_Cart.insert([        
    {
        Product_ID: Vishal_id,
        Customer_ID: Samit_id,
        Quantity: NumberInt(1),
    },      
    {
        Product_ID: Karnali_id,
        Customer_ID: Nabin_id,
        Quantity: NumberInt(1),
    },      
    {
        Product_ID: OPC_id,
        Customer_ID: Nishan_id,
        Quantity: NumberInt(10),
    },     
    {
        Product_ID: Z4_id,
        Customer_ID: Tsering_id,
        Quantity: NumberInt(1),
    },    
    {
        Product_ID: Z4_id,
        Customer_ID: Kapil_id,
        Quantity: NumberInt(1),
    },       
    {
        Product_ID: Asian_id,
        Customer_ID: Shahil_id,
        Quantity: NumberInt(1),
    },      
])
Order1_id = ObjectId()
Order2_id = ObjectId()
Order3_id = ObjectId()
Order4_id = ObjectId()
Order5_id = ObjectId()
Order6_id = ObjectId()
Order7_id = ObjectId()
Order8_id = ObjectId()
Order9_id = ObjectId()
Order10_id = ObjectId()
Order11_id = ObjectId()
Order12_id = ObjectId()
Order13_id = ObjectId()
db.Order.insert([
    {   
        _id: Order1_id,
        Customer_ID: Samit_id,
        Product_ID: Munamadan_id,
        Quantity: NumberInt(1),
        Status: "Accepted",
        Ordered_Date: Date()
    },
    {     
        _id: Order2_id,  
        Customer_ID: Samit_id,
        Product_ID: A1200_id,
        Quantity: NumberInt(1),
        Status: "Pending",
        Ordered_Date: Date()
    },
    {    
        _id: Order3_id,   
        Customer_ID: Samit_id,
        Product_ID: OPC_id,
        Quantity: NumberInt(15),
        Status: "Pending",
        Ordered_Date: Date()
    },
    {      
        _id: Order4_id, 
        Customer_ID: Tsering_id,
        Product_ID: Shireeshko_id,
        Quantity: NumberInt(1),
        Status: "Acceoted",
        Ordered_Date: Date()
    },
    {   
        _id: Order5_id,    
        Customer_ID: Tsering_id,
        Product_ID: Asian_id,
        Quantity: NumberInt(1),
        Status: "Pending",
        Ordered_Date: Date()
    },    
    {     
        _id: Order6_id,  
        Customer_ID: Kapil_id,
        Product_ID: Asian_id,
        Quantity: NumberInt(5),
        Status: "Accepted",
        Ordered_Date: Date()
    },       
    {      
        _id: Order7_id, 
        Customer_ID: Kapil_id,
        Product_ID: Z6_id,
        Quantity: NumberInt(2),
        Status: "Pending",
        Ordered_Date: Date()
    },     
    {      
        _id: Order8_id, 
        Customer_ID: Nishan_id,
        Product_ID: Vishal_id,
        Quantity: NumberInt(8),
        Status: "Accepted",
        Ordered_Date: Date()
    },      
    {     
        _id: Order9_id,  
        Customer_ID: Nishan_id,
        Product_ID: Munamadan_id,
        Quantity: NumberInt(3),
        Status: "Pending",
        Ordered_Date: Date()
    },       
    {      
        _id: Order10_id, 
        Customer_ID: Shahil_id,
        Product_ID: A1200_id,
        Quantity: NumberInt(2),
        Status: "Accepted",
        Ordered_Date: Date()
    },      
    {    
        _id: Order11_id,   
        Customer_ID: Shahil_id,
        Product_ID: Munamadan_id,
        Quantity: NumberInt(1),
        Status: "Pending",
        Ordered_Date: Date()
    },        
    {      
        _id: Order12_id, 
        Customer_ID: Nabin_id,
        Product_ID: Z6_id,
        Quantity: NumberInt(1),
        Status: "Accepted",
        Ordered_Date: Date()
    },      
    {     
        _id: Order13_id,  
        Customer_ID: Nabin_id,
        Product_ID: Munamadan_id,
        Quantity: NumberInt(2),
        Status: "Pending",
        Ordered_Date: Date()
    },   
])
db.Payment.insert([
    {
        Order_ID: Order1_id,
        Method: "Credit Card",
        Card: NumberInt(378282246310005),
        Amount: "Rs.2500",
        Date: Date()
    },
    {
        Order_ID: Order2_id,
        Method: "Credit Card",
        Card: NumberInt(378282246310005),
        Amount: "Rs.2000",
        Date: Date()
    },
    {
        Order_ID: Order3_id,
        Method: "Credit Card",
        Card: NumberInt(378282246310005),
        Amount: "Rs.15000",
        Date: Date()
    },
    {
        Order_ID: Order4_id,
        Method: "Debit Card",
        Card: NumberInt(123456789765432),
        Amount: "Rs.4200",
        Date: Date()
    },
    {
        Order_ID: Order5_id,
        Method: "Credit Card",
        Card: NumberInt(378282246310005),
        Amount: "Rs.12000",
        Date: Date()
    },
    {
        Order_ID: Order6_id,
        Method: "Credit Card",
        Card: NumberInt(378282246310005),
        Amount: "Rs.60000",
        Date: Date()
    },
    {
        Order_ID: Order7_id,
        Method: "Debit Card",
        Card: NumberInt(123456789765432),
        Amount: "Rs.36000",
        Date: Date()
    },
    {
        Order_ID: Order8_id,
        Method: "Credit Card",
        Card: NumberInt(378282246310005),
        Amount: "Rs.2000",
        Date: Date()
    },
    {
        Order_ID: Order9_id,
        Method: "Credit Card",
        Card: NumberInt(378282246310005),
        Amount: "Rs.7500",
        Date: Date()
    },
    {
        Order_ID: Order10_id,
        Method: "Credit Card",
        Card: NumberInt(378282246310005),
        Amount: "Rs.4000",
        Date: Date()
    },
    {
        Order_ID: Order11_id,
        Method: "Credit Card",
        Card: NumberInt(378282246310005),
        Amount: "Rs.2500",
        Date: Date()
    },
    {
        Order_ID: Order12_id,
        Method: "Credit Card",
        Card: NumberInt(378282246310005),
        Amount: "Rs.18000",
        Date: Date()
    },
    {
        Order_ID: Order13_id,
        Method: "Debit Card",
        Card: NumberInt(123456789765432),
        Amount: "Rs.5000",
        Date: Date()
    },
])
db.Shipping_Address.insert([
    {
        Order_ID: Order1_id,
        Street: "Dillibazar",
        City: "Kathmandu",
        State: "Bagmati Province",
        Zip_Code: NumberInt(44605),
        Contact: NumberInt(9874563210)
    },
    {
        Order_ID: Order2_id,
        Street: "Dillibazar",
        City: "Kathmandu",
        State: "Bagmati Province",
        Zip_Code: NumberInt(44605),
        Contact: NumberInt(9874563210)
    },
    {
        Order_ID: Order3_id,
        Street: "Dillibazar",
        City: "Kathmandu",
        State: "Bagmati Province",
        Zip_Code: NumberInt(44605),
        Contact: NumberInt(9874563210)
    },
    {
        Order_ID: Order4_id,
        Street: "Dillibazar",
        City: "Kathmandu",
        State: "Bagmati Province",
        Zip_Code: NumberInt(44605),
        Contact: NumberInt(9874563210)
    },
    {
        Order_ID: Order5_id,
        Street: "Dillibazar",
        City: "Kathmandu",
        State: "Bagmati Province",
        Zip_Code: NumberInt(44605),
        Contact: NumberInt(9874563210)
    },
    {
        Order_ID: Order6_id,
        Street: "Dillibazar",
        City: "Kathmandu",
        State: "Bagmati Province",
        Zip_Code: NumberInt(44605),
        Contact: NumberInt(9874563210)
    },
    {
        Order_ID: Order7_id,
        Street: "Dillibazar",
        City: "Kathmandu",
        State: "Bagmati Province",
        Zip_Code: NumberInt(44605),
        Contact: NumberInt(9874563210)
    },
    {
        Order_ID: Order8_id,
        Street: "Dillibazar",
        City: "Kathmandu",
        State: "Bagmati Province",
        Zip_Code: NumberInt(44605),
        Contact: NumberInt(9874563210)
    },
    {
        Order_ID: Order9_id,
        Street: "Dillibazar",
        City: "Kathmandu",
        State: "Bagmati Province",
        Zip_Code: NumberInt(44605),
        Contact: NumberInt(9874563210)
    },
    {
        Order_ID: Order10_id,
        Street: "Dillibazar",
        City: "Kathmandu",
        State: "Bagmati Province",
        Zip_Code: NumberInt(44605),
        Contact: NumberInt(9874563210)
    },
    {
        Order_ID: Order11_id,
        Street: "Dillibazar",
        City: "Kathmandu",
        State: "Bagmati Province",
        Zip_Code: NumberInt(44605),
        Contact: NumberInt(9874563210)
    },
    {
        Order_ID: Order12_id,
        Street: "Dillibazar",
        City: "Kathmandu",
        State: "Bagmati Province",
        Zip_Code: NumberInt(44605),
        Contact: NumberInt(9874563210)
    },
    {
        Order_ID: Order13_id,
        Street: "Dillibazar",
        City: "Kathmandu",
        State: "Bagmati Province",
        Zip_Code: NumberInt(44605),
        Contact: NumberInt(9874563210)
    },
])