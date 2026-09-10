import * as readline from 'readline/promises';

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


class IdentificationType{
    constructor(id, code, name, description){
        this.id=id;
        this.code=code;
        this.name=name;
        this.description=description;
    }
}

class Teacher{

    constructor(id, firstName, lastName, identificationTypeId, identificationNumber, email ) {
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.identificationType=identificationType;
        this.identificationNumber=identificationNumber;
        this.email=email;
    }
}

class City{
    constructor(id, code, name){
        this.id=id;
        this.code=code;
        this.name=name;
    }
}

class Student{
    constructor(id, code, fistName, lastName, identificationType, identificationNumber, gender, birthdate, email, address, cityId){
        this.id=id;
        this.code=code;
        this.fistName=fistName;
        this.lastName=lastName;
        this.identificationType=identificationType;
        this.identificationNumber=identificationNumber;
        this.gender=gender;
        this.birthdate=birthdate;
        this.email=email;
        this.address=address;
        this.cityId=cityId;

    }
}

class Classroom{
    constructor(id, code, description, capacity, active){
        this.id=id;
        this.code=code;
        this.description=description;
        this.capacity= capacity;
        this.active=active;
    }
}

class CourseSchedule{
    constructor(id, courseId, teacherId, classroomId, startDate, endDate, active){
        this.id=id;
        this.courseId=courseId;
        this.teacherId=teacherId;
        this.classroomId=classroomId;
        this.startDate=startDate;
        this.endDate=endDate;
        this.active=active;
    }
}

class Course{
    #id=0;
    #code='000';
    #description='No description';
    #intensity=0;
    #weight=0;
    #active=false;
    constructor(id, code, description, intensity, weight, active){
        this.id=id;
        this.code=code;
        this.description=description;
        this.intensity=intensity;
        this.weight=weight;
        this.active=active;
    }
}

class Topic{
    constructor(id, courseId, code, title, description, active){
        this.id=id;
        this.courseId=courseId;
        this.code=code;
        this.title=title;
        this.description=description;
        this.active=active;
    }
}
class Inscription{
    constructor(id, courseSchedule, studentId, registerDate, active){
        this.id=id;
        this.courseSchedule=courseSchedule;
        this.studentId=studentId;
        this.registerDate=registerDate;
        this.active=active;
    }

}

class Rate{
    constructor(id, inscriptionId, rate, comments){
        this.id=id;
        this.inscriptionId=inscriptionId;
        this.rate=rate;
        this.comments=comments;
    }
}


let opc='1';
const courses=[];

while(opc !== '0'){
    console.log("*".repeat(20)+ 'Management of ACME SCHOOL'+ "*".repeat(20));  
    console.log("1. add identification type");
    console.log("2. Add teacher");
    console.log("3. Add city");
    console.log("4. Add student");
    console.log("5. Add classroom");
    console.log("6. Add course");
    console.log("7. Add course schedule");
    console.log("8. Add topic");
    console.log("9. Add inscription");
    console.log("10. Add rate");
    console.log("11. List courses");
    console.log("12. List teachers");
    console.log("13. List students");
    console.log("14. List classrooms");
    console.log("15. List course schedules");
    console.log("16. List topics");
    console.log("17. List inscriptions");
    console.log("18. List rates");
    console.log("0. Exit");

    opc = await rl.question('Select an option: ');

    switch (opc){
        case '1': await addTeacher();
            break;
        default:
            console.log('Invalid option. Please select a valid option.');
    }

const teachers=[];
    function addTeacher(){
        console.clear();
        console.log("*".repeat(20)+ 'Managemente of ACME SCHOOL'+ "*".repeat(20));
        console.log("==================== Add Teacher ====================");
        const id=await rl.question(' Enter teacher ID:');
        const firstName = await rl.question(' Enter teacher first name: ');
        const lastName = await rl.question(' Enter teacher last name: ');
        const identificationTypeId= await rl.question(' Enter teacher ');
        const identificationNumber = await rl.question(' Enter teacher identification number: ');
        const email = await rl.question(' Enter teacher email: ');
        teachers.push(new Teacher(id, firstName, lastName, identificationTypeId, identificationNumber, email));
        console.log(' Teacher added successfully!');
    }