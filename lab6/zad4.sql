SELECT country from customers where country = 'USA';
SELECT orderNumber, orderDate, comments from orders where orderDate BETWEEN {d '2003-01-01'} AND {d '2003-12-31'};  
SELECT * from products WHERE productVendor LIKE 'S%';