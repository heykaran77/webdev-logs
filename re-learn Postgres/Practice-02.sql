select name, price from products where price = (select min(price) from products);

select round(avg(price), 2) as AVG_PRODUCT_PRICE from products where category in ('Furniture', 'Electronics');

select name, stock, price from products where is_available = true and stock > 50 and price != 299 order by price;

select category, max(price) as MAX_PRICE from products group by category;

select distinct upper(category) as UPPER_CATEGORY from products order by UPPER_CATEGORY;

select * from products;