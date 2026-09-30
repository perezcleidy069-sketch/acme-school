class Course{
    constructor(code, description, intensity, weight, active){
        this.code=code;
        this.description=description;
        this.intensity=intensity;
        this.weight=weight;
        this.active=active
    }
    getData(){
        return{
            code:this.code,
            description:this.description,
            intensity:this.intensity,
            weight:this.weight,
            active:this.active
        };
    }
}

export default Course;