export class TempUser {
    constructor(raceId, completed, createdAt = new Date()) {
      this.id = TempUser.getNextId(); // Gerador automático de ID
      this.raceId = raceId;
      this.completed = completed;
      this.createdAt = createdAt;
    }
  
    static getNextId() {
      if (!this.nextId) {
        this.nextId = 1;
      }
      return this.nextId++;
    }
  }
  