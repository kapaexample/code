import bcrypt from 'bcrypt';
import db from '../models/index';
const salt = bcrypt.genSaltSync(10);

/* function create new user */
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
            resolve();
        } catch (e) {
            reject(e);
        }
    })
}
/* function hash password */
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
/* read data user */
let getData = ()=>{
    return new Promise (async(resolve, reject) =>{
        try {
            let users = await db.User.findAll();
            resolve(users);
        } catch (e) {
            reject(e);
        }
    })
}
/* get info user by id */
let getUserInfoById = (userId) =>{
    return new Promise (async(resolve, reject) =>{
        try {
            let user = await db.User.findOne({
                where: { id: userId},
                raw: true
            });
            resolve(user);
        } catch (e) {
            reject(e);
        }
    })
 }

 /* update data user */
let updateUserInfo =(data) =>{
    return new Promise (async(resolve, reject) =>{
        try {
            let user = await db.User.findOne({
                where: { id: data.id},
            });
            user.firstName = data.firstName;
            user.lastName = data.lastName;
            await user.save();
            resolve();
        } catch (e) {
            reject(e);
        }
    })
}
/* delete data user */
let deleteUser = (userId) =>{
    return new Promise (async(resolve, reject) =>{
        try {
            await db.User.destroy({
                where: {
                  id: userId
                }
              });
            resolve();
        } catch (e) {
            reject(e);
        }
    })
}
module.exports = {
    createNewUser:createNewUser,
    getData:getData,
    getUserInfoById:getUserInfoById,
    updateUserInfo:updateUserInfo,
    deleteUser:deleteUser,
}