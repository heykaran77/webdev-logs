select * from products;

--Create a view for see the electronic items
create view electronics_item as
select product_id, name, price, stock
from products
where category = 'Electronics';

--Using the view
select * from electronics_item;

--Create a low stock products view
create view low_stock_products as
select product_id, name, category, stock
from products
where stock < 40;

select * from low_stock_products;