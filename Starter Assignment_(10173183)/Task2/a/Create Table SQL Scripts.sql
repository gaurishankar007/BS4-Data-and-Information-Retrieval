create database if not exists the_retro_game_club; 

create table if not exists floor_and_price (
Floor Integer(2) not null primary key,
Price Varchar(5) not null
);

create table if not exists sessions_and_floor (
Session_Number Integer(2) not null primary key,
Session_Day Varchar(10) not null,
Session_Start_Time Varchar(8) not null,
Session_End_Time Varchar(8) not null,
Session_Type Varchar(15) not null,
Floor Integer(2) not null,
FOREIGN KEY (Floor) REFERENCES floor_and_price(Floor) ON DELETE CASCADE ON UPDATE CASCADE
);

create table if not exists sessions_staff_rota (
Staff_ID integer(5) not null primary key auto_increment,
Staff_Name Varchar(35) not null,
Session Integer(2) not null,
Role Varchar(25) not null,
FOREIGN KEY (Session) REFERENCES sessions_and_floor(Session_Number) ON DELETE CASCADE ON UPDATE CASCADE
);

create table if not exists arcade_machine_information (
Machine_Number Integer(2) not null primary key,
Game Varchar(25) not null,
Year Integer(4) not null,
Floor Integer(2) not null,
FOREIGN KEY (Floor) REFERENCES floor_and_price(Floor) ON DELETE CASCADE ON UPDATE CASCADE
);

create table if not exists console_and_quantity (
Console Varchar(25) not null primary key,
Console_Quantity Integer(2) not null
);

create table if not exists games (
Name Varchar(25) not null primary key,
PEGI Varchar(15) not null
);

create table if not exists console_games (
GC_ID integer(5) not null primary key auto_increment,
Game_Name Varchar(25) not null,
Console Varchar(25) not null,
FOREIGN KEY (Game_Name) REFERENCES games(Name) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (Console) REFERENCES console_and_quantity(Console) ON DELETE CASCADE ON UPDATE CASCADE
);

create table if not exists session_consoles (
SC_ID integer(5) not null primary key auto_increment,
Session_Number Integer(2) not null,
Date Varchar(10) not null,
Console Varchar(25) not null,
Quantity Integer(2) not null,
FOREIGN KEY (Session_Number) REFERENCES sessions_and_floor(Session_Number) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (Console) REFERENCES console_and_quantity(Console) ON DELETE CASCADE ON UPDATE CASCADE
);

create table if not exists member_type_and_fees (
Member_Type Varchar(10) not null primary key,
Membership_Fee Varchar(5) not null
);

create table if not exists customers (
Customer_ID integer(10) not null primary key auto_increment,
First_Name Varchar(20) not null,
Surname Varchar(20) not null,
Address Varchar(50) not null,
Date_of_Birth Varchar(10) not null,
Join_Date Varchar(10) not null,
Member_Type Varchar(10) not null,
FOREIGN KEY (Member_Type) REFERENCES member_type_and_fees(Member_Type) ON DELETE CASCADE ON UPDATE CASCADE
);

create table if not exists booking_list (
Booking_ID integer(10) not null primary key auto_increment,
Customer_Name Varchar(35) not null,
Session_Number Integer(2) not null,
Date Varchar(10) not null,
Membership Varchar(1) not null,
Fee Varchar(7) null,
Pre_paid Varchar(10) null,
FOREIGN KEY (Session_Number) REFERENCES sessions_and_floor(Session_Number) ON DELETE CASCADE ON UPDATE CASCADE
);
