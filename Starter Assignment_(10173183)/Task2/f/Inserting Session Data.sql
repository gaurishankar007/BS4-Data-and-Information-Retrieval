insert into sessions_and_floor values
(1, 'Sunday', '11am', '6pm', 'Freeplay', 1),
(2, 'Sunday', '11am', '6pm', 'Freeplay', 2),
(3, 'Saturday', '11am', '6pm', 'Freeplay', 1),
(4, 'Monday', '6pm', '9pm', 'Special', 2)
;

insert into booking_list(Customer_Name, Session_Number, Date, Membership, Fee, Pre_paid) values
('Martin Abed', 1, '14/05/2017', 'Y', null, null),
('Jessica Jones', 1, '14/05/2017', 'N', '£10', 'N'),
('Kylie Manson', 1, '14/05/2017', 'Y', '£9.00', 'Y'),
('Sarah Shaw', 1, '21/05/2017', 'N', '£10', 'N'),
('Cj Marley', 2, '14/05/2017', 'Y', '£4.50', 'N'),
('Cj Marley', 4, '06/05/2017', 'Y', '£4.50', 'Y')
;

