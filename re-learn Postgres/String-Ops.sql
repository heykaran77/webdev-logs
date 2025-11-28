select upper(name) from products;
select lower(name) from products;

select distinct length(sku_code) from products;

select name, lower(substring(sku_code, 1,2)) from products;

select left(sku_code, 3) from products;
select right(sku_code, 3) from products;

-- Concat
select concat(name, ' ', category) from products;
select concat_ws(': ', name, category, price) from products;

-- Trim & Replace
select trim('          this is heykaran77        ');
select name, replace(sku_code, left(sku_code, 2), 'IND') from products;