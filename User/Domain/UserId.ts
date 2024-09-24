export class UserId{
    value: string

    constructor(value: string){
        this.value = value
        this.isValid()
    }

    private isValid(){
        if(this.value.length < 1){
            throw new Error("El id no puede ir vacio")
        }
    }
}