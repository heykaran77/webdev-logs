select count(product_id) as Total_Products from products;

select sum(price) as total_price from products;

select sum(price) from products where category in ('Footwear', 'Furniture');
select round(avg(price),2) from products;
select min(price) from products;
select max(price) from products;

select * from products;