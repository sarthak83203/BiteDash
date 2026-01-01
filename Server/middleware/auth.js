import jwt from "jsonwebtoken"  //used for authentication.....
//converting token in to userId
const authMiddleware=async (req,res)=>{
    const {token}=req.headers; //taking token from headers
    if(!token){
        return res.json({
            success:false,
            message:"Not authorized login agian",
        })
    }
    try{
        //decoding that token
        const  token_decode=jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId=token_decode.id;
        next();
    }catch(err){
        console.log(err);
        return res.json({
            success:false,
            message:"Error",

        })

    }


}
export default authMiddleware;