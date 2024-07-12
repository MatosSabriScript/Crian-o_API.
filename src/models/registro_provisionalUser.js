 export class TempUser {
  static Idgeration = 0
  constructor (raceNumber,statusComplemented,createdAt){
    this.id = ++TempUser.Idgeration
    this.raceNumber=raceNumber
    this.statusComplemented= statusComplemented
    this.createdAt=createdAt
  }
}



