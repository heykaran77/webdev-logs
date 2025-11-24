create table user_data (
id serial primary key,
email text unique not null,
name varchar(50) not null,
age smallint check (age>=18),
created_at timestamp default now()
);

insert into user_data (email, name, age) values
('devkaran.codes@gmail.com', 'Karan Singh V', 19),
('heykaran77@gmail.com', 'Hey Karan', 23);

select * from user_data;