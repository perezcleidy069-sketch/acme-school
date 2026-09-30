class Topic{
    constructor(courseId, code, title, description, active){
        this.courseId=courseId;
        this.code=code;
        this.title=title;
        this.description=description;
        this.active=active
    }
    getData(){
        return{
            courseId:this.courseId,
            code:this.code,
            title:this.title,
            description:this.description,
            active:this.active
        }
    }
}

export default Topic;