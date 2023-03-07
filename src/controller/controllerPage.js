import CRUDService from '../services/CRUDService';
/* describe post info to SQL*/
let getPostCRUD = async(req, res) => {
    await CRUDService.createNewUser(req.body);
    let userId = 0;
    let userData = await CRUDService.getUserInfoById(userId);
    let data = await CRUDService.getData();
    return res.render('form.ejs',{
        dataTable: data,
        user: userData,
    });
}
/* describe get page */
let getForm =async(req,res)=>{
    let userId = 0;
    let userData = await CRUDService.getUserInfoById(userId);
    let data = await CRUDService.getData();
    return res.render('form.ejs',{
        dataTable: data,
        user: userData,
    });
}
/* edit */
let getEditCRUD = async(req,res) => {
    let data = await CRUDService.getData();
    let userId = req.query.id;
    let userData = await CRUDService.getUserInfoById(userId);
     return res.render('form.ejs',{
        dataTable: data,
        user: userData,
    });
}

module.exports = {
    getPostCRUD:getPostCRUD,
    getForm:getForm,
    getEditCRUD:getEditCRUD,
}