class CourseSchedule{
    constructor(courseId, teacherId, classroomId, startDate, endDate){
        this.courseId=courseId;
        this.teacherId=teacherId;
        this.classroomId=classroomId;
        this.startDate=startDate;
        this.endDate=endDate
    }
    getData(){
        return{
            courseId:this.courseId,
            teacherId:this.teacherId,
            classroomId:this.classroomId,
            startDate:this.startDate,
            endDate:this.endDate

        };

    }
}

export default CourseSchedule;