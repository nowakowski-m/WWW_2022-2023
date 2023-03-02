SELECT orders.*, orderdetails.*, products.productName
FROM orders
LEFT JOIN orderdetails ON orders.orderNumber = orderdetails.orderNumber
INNER JOIN products ON orderdetails.productCode = products.productCode
ORDER BY products.productName DESC;

SELECT * 
FROM orderdetails 
LEFT JOIN orders ON orderdetails.orderNumber = orders.orderNumber 
LEFT JOIN products ON orderdetails.productCode = products.productCode 
WHERE (quantityOrdered > 40) AND orderDate BETWEEN {d '2004-01-01'} AND {d '2004-12-31'}
ORDER BY products.productName DESC;