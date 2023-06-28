import path from "path";

const __dirname = path.resolve();
export const ping = (req,res) =>{
    try{
        return res.sendFile(__dirname + '/public/index.html');
    }catch(err){
        return res.send(err);
    }
}