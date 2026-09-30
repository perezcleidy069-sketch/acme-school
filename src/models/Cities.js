class Cities{
    constructor(code, name){
        this.code=code;
        this.name=name

    }
    getData(){
        return{
            code:this.code,
            name:this.name
        }
    }
}

export default Cities;