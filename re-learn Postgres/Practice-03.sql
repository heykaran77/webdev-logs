create table products(
product_id int primary key,
product_name varchar(100),
category text,
price numeric(10,2),
stock_quantity int,
is_available boolean,
added_on date
);

create table orders (
order_id int primary key,
product_id int,
quantity int,
order_date date,
customer_name varchar(50),
payment_method varchar(50),
constraint fk_product
foreign key (product_id)
references products(product_id)
on delete cascade
);

select * from products;
select * from orders;


select o.order_id, o.customer_name, p.product_name, p.price from orders o inner join products p on
o.product_id = p.product_id;

select p.product_name, o.order_id from products p left join orders o on
o.product_id = p.product_id;

select o.order_id, p.product_name, p.category
from
products p left join orders o
on p.product_id = o.product_id
where category = 'Electronics';

select o.order_id, p.product_name, p.price
from products p join orders o
on p.product_id = o.product_id
order by p.price desc;

select p.product_name, count(o.order_id)
from products p left join
orders o
on p.product_id = o.product_id
group by p.product_name;


select p.product_name, sum(o.quantity * p.price) as TOTAL_REVENUE
from products p
left join
orders o
on p.product_id = o.product_id
group by p.product_name;

select p.product_name, sum(o.quantity * p.price) as TOTAL_REVENUE
from products p
left join
orders o
on p.product_id = o.product_id
group by p.product_name
having sum(o.quantity * p.price) > 2000;

select distinct o.customer_name
from orders o
join products p
on o.product_id = p.product_id
where p.category = 'Fitness';