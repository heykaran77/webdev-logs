-- CASES IN SQL
select * from products;


-- Creates the columns on the go [Temporary]
select name, price,
CASE when price > 1000 then 'Expensive'
	when price between 500 and 1000 then 'Moderate'
	else 'Cheap'
end as price_tag from products;

-- Create Column using ALter
alter table products
add column price_tag text;

update products
set price_tag =
case when price > 1000 then 'Expensive'
when price between 500 and 1000 then 'Moderate'
else 'Cheap'
end;