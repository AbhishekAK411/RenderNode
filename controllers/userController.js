export const register = (req,res) =>{
    try{
        console.log(req.body.username);
        console.log(req.body.email);
        return res.send(`<h1>${req.body.username}, ${req.body.email}, ${req.body.password}</h1>`);
    }catch(err){
        return res.send(err);
    }
}