create database if not exists customer_order;

create table if not exists customer (
ID integer primary key auto_increment,
Name varchar(35) not null,
Address varchar(50) 
);

create table if not exists item (
ID integer primary key auto_increment,
Name varchar(35) not null,
Price varchar(10)
);

Create table if not exists orders (
Order_No integer primary key, 
Account_No integer not null,
Customer_ID integer not null,
Date varchar(10) not null,
Total_Price varchar(10) not null,
Foreign key (Customer_ID) references customer(ID) on delete cascade on update cascade
);

Create table if not exists order_item (
Order_Item_ID integer primary key auto_increment,
Order_No integer not null,
Item_ID integer not null,
Quantity integer not null,
Foreign key (Order_No) references Orders(Order_No) on delete cascade on update cascade,
Foreign key (Item_ID) references item(ID) on delete cascade on update cascade
);

insert into customer(Name, Address) values 
("Diasy's Cafe", '27 Bay'),
("Smiths", '12 Dee View, Aberdeen'),
("Sally's Snacks", '3 High Street Banchory'),
("Tasty Bite", '17 Wood Place, insch')
;

insert into item(Name, Price) values
('Bakewell Trat', '0.15'),
('Danish Pastry', '0.2'),
('Apple Pie', '0.15'),
('Butteries', '0.2'),
('Cherry Pie', '0.18'),
('Steak Pie', '0.5'),
('Maringue Pie', '0.2')
;

insert into orders(Order_No, Account_No, Customer_ID, Date, Total_Price) values
(7823, 178, 1, '16/7', '12.35'),
(4633, 526, 2, '16/7', '24'),
(2276, 167, 3, '17/7', '56.5'),
(1788, 32, 4, '18/7', '7.5')
;

insert into order_item(Order_No, Item_ID, Quantity) values
(7823, 1, 20),
(7823, 2, 13),
(7823, 3, 45),
(4633, 4, 120),
(2276, 3, 130),
(2276, 5, 100),
(2276, 6, 30),
(2276, 7, 20),
(1788, 3, 15),
(1788, 2, 50)
;

select * from orders;

select * from orders where Order_No=7823;

select * from orders where Order_No=7823 and Date='16/7';

select * from orders where Order_No=7823 or Date='16/7';

Update customer set Name="Kiran's Cafe" where Name="Daisy's Cafe";

select orders.Order_NO, orders.Account_No, orders.Customer_ID, orders.Date, orders.Total_Price from Item inner join order_item on order_item.Item_ID=item.ID 
inner join orders on orders.Order_No=order_item.Order_No where item.Name="Apple Pie";

Update item set Name='Bakewell Trats', Date='17/7' where Name='Bakewell Trat';

Update item set Name='Black Forest' where Name='Apple pie';

delete from orders where Order_No=4633; 

select * from orders order by Order_No asc;

select count(*) as "Total Orders" from orders;

