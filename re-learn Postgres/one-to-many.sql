-- one-to-many relationship

create table students (
student_id serial primary key,
name varchar(50) not null
);

create table marks (
marks_id serial primary key,
student_id int,
sub_name varchar(50),
marks int,
foreign key (student_id) references students(student_id)
);

INSERT INTO students (name) VALUES
('Amit Sharma'),
('Karan Singh'),
('Riya Nair'),
('Sandeep Rao'),
('Meera Joshi');


INSERT INTO marks (student_id, sub_name, marks) VALUES
(1, 'Maths', 82),
(1, 'Science', 91),
(1, 'English', 76),

(2, 'Maths', 95),
(2, 'Science', 89),
(2, 'English', 92),

(3, 'Maths', 67),
(3, 'Science', 74),
(3, 'English', 81),

(4, 'Maths', 88),
(4, 'Science', 79),
(4, 'English', 85),

(5, 'Maths', 90),
(5, 'Science', 94),
(5, 'English', 87);

select * from students;
select * from marks;

select s.name, m.sub_name, m.marks
from students s join marks m on s.student_id = m.student_id;

select s.name, m.sub_name, m.marks
from students s join marks m on s.student_id = m.student_id
where name = 'Riya Nair';

select s.name, m.sub_name, m.marks
from students s join marks m on s.student_id = m.student_id
where marks > 80;

