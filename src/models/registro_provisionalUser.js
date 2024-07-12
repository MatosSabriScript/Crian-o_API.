export class Newpeople{
    constructor(name, cpf,age){
        this.id = Math.random() * (1000 - 1) + 1;
        this.name = name;
        this.cpf = cpf;
        this.age = age;
    }
}