select * from products;
	


create procedure add_product (
p_name varchar(50),
p_sku_code char(8),
p_price numeric(8,2),
p_stock int,
p_is_available boolean,
p_category text
)
language plpgsql
as $$
begin
insert into products (name, sku_code, price, stock, is_available, category)
values (p_name, p_sku_code, p_price, p_stock, p_is_available, p_category);
Raise notice 'Product added successfully';
end;
$$;

call add_product('bottle', 'MX7625TH', 99, 32, true, 'Fitness');

select * from low_stock_products;

update products
set availability_status = 'In Stock'
where product_id = 13;