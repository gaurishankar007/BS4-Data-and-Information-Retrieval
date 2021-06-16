insert into console_and_quantity values
('PS1', 3),
('PS2', 2),
('PS4', 3),
('Nintendo Switch', 2),
('X Box 360', 4)
;

insert into games values
('Spiro', 'PG'),
('Crash Bandicoot', 'PG'),
('Legend of Zelda', 'PG'),
('Halo 3', '15')
;

insert into console_games(Game_Name, Console) values
('Spiro', 'PS1'),
('Spiro', 'PS2'),
('Crash Bandicoot', 'PS4'),
('Crash Bandicoot', 'PS2'),
('Legend of Zelda', 'Nintendo Switch'),
('Halo 3', 'X Box 360')
;

insert into session_consoles(Session_Number, Date, Console, Quantity) values
(1, '14/05/2017', 'PS1', '2'),
(2, '14/05/2017', 'PS2', '2')
;

