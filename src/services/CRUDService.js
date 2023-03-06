import bcrypt from 'bcrypt';
import db from '../models/index';
const salt = bcrypt.genSaltSync(10);


let createNewUser = async(data) =>{
    return new Promise (async(resolve, reject) =>{
        try {
           let hashPasswordUserFromBcrypt = await hashPasswordUser(data.password);
           await db.User.create({
            email: data.email,
            password: hashPasswordUserFromBcrypt,
            firstName: data.firstName,
            lastName: data.lastName,
           });
            resolve('created user');
        } catch (e) {
            reject(e);
        }
    })
}
let hashPasswordUser = (password) =>{
    return new Promise (async(resolve, reject) =>{
        try {
            let hash = await bcrypt.hashSync(password, salt);
            
            resolve(hash);
        } catch (e) {
            reject(e);
        }
    })
}

let displayUser = () =>{
    return new Promise (async(resolve, reject) =>{
        try {
            let data = await db.User.findAll();
            
            resolve(data);
        } catch (e) {
            reject(e);
        }
    })
}


module.exports = {
    createNewUser:createNewUser,
    displayUser:displayUser,
}