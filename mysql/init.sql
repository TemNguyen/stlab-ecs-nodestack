CREATE DATABASE IF NOT EXISTS nodejs;
USE nodejs;
CREATE TABLE employees(
  id VARCHAR(5) PRIMARY KEY,
  full_name TEXT
);
INSERT INTO employees VALUES 
  ('ID001', 'Employee 01'),
  ('ID002', 'Employee 02'),
  ('ID003', 'Employee 03');
