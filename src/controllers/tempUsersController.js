 import { TempUser } from "../models/registro_provisionalUser.js";

 let tempUsers= [];

// C- CREATE
export const getTempUsers = (raceNumber,statusComplemented,createdAt) => {
    const newUser = new TempUser (raceNumber,statusComplemented,createdAt);
    tempUsers.push(newUser);
    return newUser;
}

export const returnPeople =()=> {
    return tempUsers;
}


