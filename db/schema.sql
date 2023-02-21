DROP DATABASE IF EXISTS employee_team;
CREATE DATABASE employee_team;


USE employee_team;

CREATE TABLE department (
    id INT PRIMARY KEY,
    name VARCHAR(30)
);



CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT 
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);
