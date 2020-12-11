DROP TABLE IF EXISTS class CASCADE;
DROP TABLE IF EXISTS semester;
DROP TABLE IF EXISTS year;
DROP TABLE IF EXISTS study;

CREATE TABLE study (
    id SERIAL PRIMARY KEY NOT NULL,
    degree VARCHAR(100) NOT NULL,
    required VARCHAR(10) NOT NULL,
    completed VARCHAR(10) NOT NULL,
    needed VARCHAR(10) NOT NULL
);

CREATE TABLE semester (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(30)
);

CREATE TABLE year (
    id SERIAL PRIMARY KEY NOT NULL,
    number VARCHAR(10) NOT NULL
);

CREATE TABLE class (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(30) NOT NULL,
    description VARCHAR(100) NOT NULL,
    units INT NOT NULL,
    grade VARCHAR(2),
    term_id INT NOT NULL REFERENCES semester(id),
    year_id INT NOT NULL REFERENCES  year(id),
    study_id INT NOT NULL REFERENCES study(id)
);

INSERT INTO study(degree, required, completed, needed)
    VALUES
        ('Major: Bachelor of Science in Software Engineering', '127.00', '64.00', '63.00'),
        ('Minor: Web Development', '18.00', '3.00', '15.00');

INSERT INTO semester (name)
    VALUES
        ('Fall'),
        ('Spring'),
        ('Summer');

INSERT INTO year (number)
    VALUES
        ('2019-2020'),
        ('2020-2021');

INSERT INTO class (name, description, units, grade, term_id, year_id, study_id)
    VALUES
        ('CSEC 101', 'Fundamentals of Computing Security', 3, 'A', 1, 1, 1),
        ('ISTE 140', 'Web & Mobile I', 3, 'A', 1, 1, 2),
        ('CSCI 141', 'Computer Science', 4, 'A', 1, 1, 1),
        ('CINT 101', 'Computing Exploration Seminar', 1, 'S', 1, 1, 1),
        ('PHIL 202', 'Foundations Moral Philosophy', 3, 'A-', 1, 1, 1),
        ('MATH 182', 'Calculus II', 4, 'A', 1, 1, 1),
        ('YOPS 10', 'RIT 365: RIT Connections', 0, 'S', 1, 1, 1),
        ('MATH 190', 'Discrete Math for Computing', 3, 'A', 2, 1, 1),
        ('CSCI 142', 'Computer Science II', 4, 'A', 2, 1, 1),
        ('SWEN 250', 'Personal Software Engineering', 3, 'A', 2, 1, 1),
        ('ANTH 102', 'Cultural Anthropology', 3, 'A', 2, 1, 1),
        ('FNRT 100', 'Introduction to Visual Arts', 3, 'A', 2, 1, 1),
        ('WFIT 28', 'Cardio, Strength & Core', 0, 'S', 2, 1, 1),
        ('PHYS 211', 'University Physics I', 4, null, 1, 2, 1),
        ('SWEN 344', 'Web Engineering', 3, null, 1, 2, 1),
        ('SWEN 261', 'Introduction to Software Engineering', 3, 'A', 1, 2, 1),
        ('CRIM 110', 'Introduction to Criminal Justice', 3, null, 1, 2, 1),
        ('COMM 253', 'Communication', 3, 'A', 1, 2, 1),
        ('SWEN 99', 'Undergraduate Co-op Seminar', 0, null, 1, 2, 1),
        ('COMM 211', 'Principles of Advertising', 3, null, 2, 2, 1),
        ('PHYS 212', 'University Physics II', 4, null, 2, 2, 1),
        ('STAT 205', 'Applied Statistics', 3, null, 2, 2, 1),
        ('SWEN 256', 'SW Process and Project Manage', 3, null, 2, 2, 1),
        ('SWEN 262', 'Engineering of SW Subsystems', 3, null, 2, 2, 1),
        ('WFIT 55', 'Kickboxing', 0, null, 2, 2, 1);