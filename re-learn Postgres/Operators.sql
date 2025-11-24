-- Clauses w/ Operators

select * from products where category = 'Furniture';
select * from products where category != 'Electronics';
select * from products where price > 1000;
select * from products where price < 1000 and category = 'Electronics';
select * from products where price between 100 and 500;
select * from products where price > 100 and price < 500;
select * from products where category in ('Electronics', 'Furniture', 'Clothing');
select * from products where sku_code like '_S%'; -- Second Letter is S
select * from products where sku_code like '%L%'; -- Contains L at start, end or b/w
select * from products where sku_code like 'S%'; -- Starts with S
select * from products where not category = 'Electronics'; --All products except electronics