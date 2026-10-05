class IdentificationTypes{
    constructor(code, name, description){
        this.code=code;
        this.name=name;
        this.description=description
    }

    getDate(){
        return{
            code:this.code,
            name:this.name,
            description:this.description
        }

    }
}

export default IdentificationTypes;
