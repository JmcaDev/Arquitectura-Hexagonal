import { User } from "../../Domain/User";
import { UserRepository } from "../../Domain/UserRepository";

export class UserGetAll{
    constructor(private repository: UserRepository){}

    async run(): Promise<User[]>{
        return this.repository.getAll()
    }
}