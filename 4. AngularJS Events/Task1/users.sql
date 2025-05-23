CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    age INT
);

INSERT INTO users (name, email, age) VALUES
('Imran', 'imran@example.com', 25),
('John', 'john@example.com', 30),
('Sara', 'sara@example.com', 28);
