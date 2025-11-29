-- CASE Exercise 02
select name, stock,
case when stock > 100 then 'High Stock'
when stock between 30 and 100 then 'Medium Stock'
else 'Low Stock'
end as stock_label from products;