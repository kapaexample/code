import CRUDService from '../services/CRUDService';
let getFormPage = (req, res) => {
    res.render('form');
}

let getPostCRUD = async(req, res) => {
    let massage = await CRUDService.createNewUser(req.body);
    console.log(massage);
    return res.send('created successfully');
}
let getDisplay = async(req, res) => {
    let data = await CRUDService.displayUser();
    return res.render('display.ejs',{
        dataTable:data
    });
}


module.exports = {
    getFormPage:getFormPage,
    getPostCRUD:getPostCRUD,
    getDisplay:getDisplay,
}