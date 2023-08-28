CREATE DATABASE IF NOT EXISTS nodejs;
USE nodejs;
CREATE TABLE employees(
  id VARCHAR(5) PRIMARY KEY,
  full_name TEXT
);
INSERT INTO employees VALUES 
  ('ID001', 'Thinh'),
  ('ID002', 'Thanh'),
  ('ID003', 'Hoang');
