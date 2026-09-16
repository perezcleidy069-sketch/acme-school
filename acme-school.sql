CREATE DATABASE acme_school;

USE acme_school;

CREATE TABLE IdentificationTypes(
    id INT PRIMARY KEY AUTO_INCREMENT,
    code VARCHAR(6) NOT NULL,
    name VARCHAR(50) NOT NULL, 
    description VARCHAR(250)
) ENGINE=InnoDB;

CREATE TABLE Cities(
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    code VARCHAR(10) NOT NULL,
    name VARCHAR(100) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE Students(
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    code VARCHAR(14) NOT NULL,
    firstName VARCHAR(60) NOT NULL,
    lastName VARCHAR(60) NOT NULL,
    identificationTypeId INT NOT NULL,
    identificationNumber VARCHAR(16) NOT NULL,
    gender ENUM('M', 'F') NOT NULL,
    birthDate DATETIME NOT NULL,
    email VARCHAR(60) NOT NULL,
    address VARCHAR(100) NOT NULL,
    cityId BIGINT NOT NULL,

    FOREIGN KEY (identificationTypeId) REFERENCES IdentificationTypes(id),
    FOREIGN KEY (cityId) REFERENCES Cities(id)
) ENGINE=InnoDB;

CREATE TABLE Teachers(
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(60) NOT NULL,
    lastName VARCHAR(60) NOT NULL,
    identificationTypeId INT NOT NULL,
    identificationNumber VARCHAR(16) NOT NULL,
    email VARCHAR(100) NOT NULL,

    FOREIGN KEY (identificationTypeId) REFERENCES IdentificationTypes(id)
) ENGINE=InnoDB;

CREATE TABLE Classrooms(
    id INT PRIMARY KEY AUTO_INCREMENT,
    code VARCHAR(10) NOT NULL,
    description VARCHAR(250) NOT NULL,
    capacity INT CHECK(capacity > 0) NOT NULL,
    active BOOLEAN NOT NULL DEFAULT TRUE
) ENGINE=InnoDB;

CREATE TABLE Courses(
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    code VARCHAR(10) NOT NULL,
    description VARCHAR(250),
    intensity INT NOT NULL,
    weight INT NOT NULL,
    active TINYINT NOT NULL DEFAULT TRUE
) ENGINE=InnoDB;

CREATE TABLE CourseSchedules(
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    courseId BIGINT NOT NULL,
    teacherId BIGINT NOT NULL,
    classroomId INT NOT NULL,
    startDate DATETIME NOT NULL,
    endDate DATETIME NOT NULL,
    active BOOLEAN NOT NULL DEFAULT TRUE,

    FOREIGN KEY (courseId) REFERENCES Courses(id),
    FOREIGN KEY (teacherId) REFERENCES Teachers(id),
    FOREIGN KEY (classroomId) REFERENCES Classrooms(id)
) ENGINE=InnoDB;

CREATE TABLE Topics(
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    courseId BIGINT NOT NULL,
    code VARCHAR(10) NOT NULL,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(250) NOT NULL,
    active TINYINT NOT NULL DEFAULT TRUE,

    FOREIGN KEY (courseId) REFERENCES Courses(id)
) ENGINE=InnoDB;

CREATE TABLE Inscriptions(
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    courseScheduleId BIGINT,
    studentId BIGINT NOT NULL,
    registerDate DATETIME NOT NULL,
    active TINYINT NOT NULL,

    FOREIGN KEY (courseScheduleId) REFERENCES CourseSchedules(id),
    FOREIGN KEY (studentId) REFERENCES Students(id)
) ENGINE=InnoDB;

CREATE TABLE Rates(
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    inscriptionId BIGINT NOT NULL,
    rate BIGINT NOT NULL,
    comments VARCHAR(250),

    FOREIGN KEY (inscriptionId) REFERENCES Inscriptions(id)
) ENGINE=InnoDB;