create table students_new (student_id INT, name char(50), age INT, grade char(1));

insert into students_new (student_id, name, age, grade)
values (1,'Karan',21,'A'),
(2,'Ram',23,'A'),
(3,'Elon',43, 'C'),
(4,'Paridhi', 21, 'A'),
(5, 'Kushal', 21, 'C'),
(6,'Prajwal', 21, 'F');

update students_new
set name = 'Yash'
where name = 'Elon';

-- delete from students_new
-- where student_id = 4;

select * from students_new;