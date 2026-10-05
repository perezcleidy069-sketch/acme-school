class Classroom{
    constructor(code, description, capacity, active){
        this.code=code;
        this.description=description;
        this.capacity=capacity;
        this.active=active

    }

    getDate(){
        return{
            code:this.code,
            description:this.description,
            capacity:this.capacity,
            active:this.active
        }
    }
}

export default Classroom;