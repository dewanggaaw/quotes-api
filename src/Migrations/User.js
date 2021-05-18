import db from "../Utils/DB";

export default db.query(`CREATE TABLE if NOT exist users(
    id INT PRIMARY AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    email VARCHAR(40),
)`);
