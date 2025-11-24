create table products (
product_id serial primary key,
name varchar(50) not null,
sku_code char(8) unique not null check (char_length(sku_code) = 8),
price numeric(8,2) default 0 check (price >= 0),
stock int default 0 check (stock >=0),
is_available boolean default true,
category text not null,
added_on date default current_date,
last_updated timestamp default now() 
);

INSERT INTO products (name, sku_code, price, stock, is_available, category) VALUES
('Sony WH-1000XM5 Headphones', 'SNYH1005', 349, 120, true, 'Electronics'),
('Nike Air Zoom Pegasus 41', 'NKP41SHO', 129, 60, true, 'Footwear'),
('Samsung 55" 4K Smart TV', 'SMTV55U4', 699, 42, true, 'Electronics'),
('IKEA Markus Office Chair', 'IKMRKCHA', 199, 35, true, 'Furniture'),
('Adidas Men Running Jacket', 'ADRNJKT1', 89, 75, true, 'Clothing'),
('Logitech MX Master 4 Mouse', 'LTMXM004', 119, 150, true, 'Electronics'),
('Puma Sports Backpack', 'PMSPKB01', 59, 200, true, 'Accessories'),
('ASUS ROG Strix G16', 'ASG16LPT', 1499, 25, true, 'Electronics'),
('Levi’s Slim Fit Jeans', 'LVSJN401', 69, 95, true, 'Clothing'),
('Apple Watch Series 10', 'APWCHS10', 399, 50, true, 'Wearables'),
('Woodland Leather Wallet', 'WDLWL001', 39, 180, true, 'Accessories');


select * from products;