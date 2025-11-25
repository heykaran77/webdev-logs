select count(product_id) as Total_Products from products;

select sum(price) as total_price from products;

select sum(price) from products where category in ('Footwear', 'Furniture');

select * from products;