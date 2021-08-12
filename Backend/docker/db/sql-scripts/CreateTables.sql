
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);


INSERT INTO usuarios
(id, nombre)
VALUES
(1, 'TestNombre1'),
(2, 'TestNombre2');
