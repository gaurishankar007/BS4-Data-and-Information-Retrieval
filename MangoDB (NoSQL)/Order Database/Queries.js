//1 Find all the details in order collection

db.Customer_Order.find({})





//2 Find the details of Order no 7823

db.Customer_Order.find(



{"OrderNo":7823}



)



//3 Find the details of Order no 7823 and Date 16/7

db.Customer_Order.find(

{

 $and: [

    {"OrderNo":7823},



    {"Date":"16/7"}

    ]  

 }

)



 //4 Find the details of Order no 7823 or Date 17/7

db.Customer_Order.find(

{ $or: [



    {"OrderNo":7823},



    {"Date":"17/7"}



    ]   



 }



)

 

 //5  Update customer name from Daisy�s Cafe to Kiran�s Cafe

 db.Customer_Order.updateOne(



 {"OrderNO" : 7823,},



 {"$set":{"CustomerName" : "Kiran's Cafe",}}



 )



 //6 Find all the orders which contains �Bakewell Trat� item

 db.Customer_Order.find({

    "Items.Name": "Bakewell Trat"

})



//6 Find all the orders which contains �Apple Pie� item

 db.Customer_Order.find({

    "Items.Name": "Apple Pie"

})







//7 update itemName" : "Bakewell Trat" to "Bakewell Trats and date to 17/7 from order number 7823

db.Customer_Order.update(

    {"OrderNo": 7823},

    {$set: {"Date": "17/7", "Items.0.Name": "Bakewell Trats"}}

)



//8 Update itemName" : "Apple Pie" to �Black Forest� from order number 7823

db.Customer_Order.update(

    {"OrderNo": 7823},

    {$set: {"Items.2.Name": "Black Forest"}}

)



//8 Upadate Danish Pastry to Danish Pastries from order no 7823 if it contains

db.Customer_Order.update(

    {"OrderNo": 7823, "Items.Name": "Danish Pastry"},

    {$set: {"Items.$.Name": "Danish Pastries"}}

    

)



//8 Upadate all Apple Pie to Apple pie

db.Customer_Order.updateMany(

    {"Items.Name": "Apple Pie"},

    {$set: {"Items.$.Name": "Apple Pies"}}

)



//8 Change the price of Apple Pies from 0.15 to 0.20

db.Customer_Order.update(

    {"Items.Name": "Apple Pies"},

    {$set: {"Items.$.Price": 0.20}}

)



//9 Delete the order no 4633

db.Customer_Order.remove(

    {"OrderNo": 4633}

)



//10 Display all the orders in ascending order

db.Customer_Order.find({}).sort({

    "OrderNo": 1

})



//10 Display all the orders in descending order

db.Customer_Order.find({}).sort({

    "OrderNo": -1

})



//11 Count the number of order

db.Customer_Order.find({}).count()



//12 Find all the order which has Danish Pastry

db.Customer_Order.find(

    {"Items.Name": "Danish Pastry"}

)

            

//13 Delete itemName :�Bakewell Trat� from Order No: 7823

db.Customer_Order.update(

    {"OrderNo": 7823},

    {$pull: {"Items": {"Name": "Bakewell Trats"}}}

)





//13 insert another item into Order No 7823 

db.Customer_Order.update(

    {"OrderNo": 7823},

    {$push: {"Items": {"Name": "Hajmola", "Quantity": NumberInt(11), "Price": 0.18}}}

)
 



