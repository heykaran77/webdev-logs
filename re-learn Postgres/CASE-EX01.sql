-- Exercise 01
select * from products;

alter table products
add column availability_status text;

update products
set availability_status = 
CASE when is_available then 'In Stock'
else 'Out of Stock'
end;

update products
set is_available = false
where product_id = 12;