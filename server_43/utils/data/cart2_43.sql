CREATE TABLE cart2_43 (
    cid int NOT NULL PRIMARY KEY,
    user_id int,
    product_id int,
    quantity int,
    total int DEFAULT 0,
    added_at timestamp DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_1 FOREIGN KEY (user_id) REFERENCES user2_43(uid) on DELETE SET NULL on UPDATE CASCADE,
    CONSTRAINT fk_2 FOREIGN KEY (product_id) REFERENCES shop2_43(pid) on DELETE SET NULL on UPDATE CASCADE
);


INSERT INTO cart2_43 (cid, user_id, product_id, quantity, total, added_at)
VALUES
(1, 213410243, 1, 2, 0, '2023-04-05 10:30:00'),
(2, 213410243, 10, 1, 0, '2023-04-05 11:45:00'),
(3, 213410243, 15, 3, 0, '2023-04-05 12:15:00'),
(4, 213410243, 23, 1, 0, '2023-04-05 13:00:00'),
(5, 213410243, 30, 2, 0, '2023-04-05 14:20:00'),
(6, 1, 1, 1, 0, '2023-04-06 09:10:00'),
(7, 2, 10, 2, 0, '2023-04-06 10:25:00'),
(8, 3, 15, 1, 0, '2023-04-06 11:40:00'),
(9, 4, 23, 1, 0, '2023-04-06 12:55:00'),
(10, 4, 30, 1, 0, '2023-04-06 14:05:00');

SELECT * FROM cart2_43;

select C.user_id, U.uname as user_name, C.product_id, S.pname as product_name, C.quantity, S.price , S.img_url 
from cart2_43 as C, user2_43 as U, shop2_43 as S 
where U.uid = '213410243' and C.user_id = U.uid and C.product_id = S.pid; 