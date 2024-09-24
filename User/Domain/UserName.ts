export class UserName {
    value: string

    constructor(value: string){
        this.value = value
        this.isValid()
    }

    private isValid(){
        if(this.value.length < 2){
            throw new Error("El nombre debe tener minimo 2 caracteres")
        }
    }
}