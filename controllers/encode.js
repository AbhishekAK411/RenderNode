import path from "path";

const __dirname = path.resolve();

export const encode = (req,res) =>{
    try{
        return res.sendFile(__dirname + '/public/form.html');
    }catch(err){
        return res.send(err);
    }
}