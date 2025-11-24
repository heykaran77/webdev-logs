select * from products where category = 'Clothing';
select category from products group by category;
select category, count(*) from products group by category having count(*) > 1;
select * from products order by name;
select * from products order by price limit 3;
select name as item_name, price as item_price from products;
select distinct category from products;
select * from products;