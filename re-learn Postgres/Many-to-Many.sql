--Many-2-Many Relationship

create table students (
student_id int primary key,
name varchar(50)
);

insert into students values
(1, 'Karan'),
(2, 'Simon'),
(3, 'Blacky');

create table courses (
course_id int primary key,
course_name varchar(50)
);

insert into courses values
(101, 'Python'),
(102, 'SQL'),
(103, 'C');

create table student_courses(
student_id int,
course_id int,
primary key (student_id, course_id),
foreign key (student_id) references students(student_id),
foreign key (course_id) references courses(course_id)
);

insert into student_courses values
(1, 101),
(1,102),
(2,101),
(2, 103),
(3,101);

--Display student name with the courses they have taken

select s.name, c.course_name
from student_courses sc join students s
on sc.student_id = s.student_id
join
courses c on sc.course_id = c.course_id;

-- Display the courses taken by karan
select c.course_name
from student_courses sc
join students s
on sc.student_id = s.student_id
join courses c
on sc.course_id = c.course_id
where s.name = 'Karan';