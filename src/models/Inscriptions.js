class Inscription{
    constructor(courseScheduleId, studentId, registerDate, active){
        this.courseScheduleId=courseScheduleId;
        this.studentId=studentId;
        this.registerDate=registerDate;
        this.active=active;
    }
    getData(){
        return{
            courseScheduleId:this.courseScheduleId,
            studentId:this.studentId,
            registerDate:this.registerDate,
            active:this.active
        };
    }
}

export default Inscription;
