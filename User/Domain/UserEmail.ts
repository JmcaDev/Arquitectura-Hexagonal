export class UserEmail {
    value: string

    constructor(value: string){
        this.value = value
        this.isValid()
    }

    private isValid(){
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!regex.test(this.value)){
            throw new Error("El email ingresado no es valido")
        }
    }
}