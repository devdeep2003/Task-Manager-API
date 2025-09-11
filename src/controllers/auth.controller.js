export const Login = (req,res)=>{
    const {username} = req.body;

    if(!username){
        res.status(400).json({
            message:"Client error : username is required",
            data : null
        })
    }

    req.session.user = {username};
    res.status(200).json({
        message:"Login successful",
        data: req.session.user
    })
}

export const Logout = (req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            return res.status(500).json({
                message:"Internal server error",
                data:null
            })
        }
        res.status(200).json({
            message:"Logout successful",
            data:null
        })
    })

    req.session.user = null;
    res.status(200).json({
        message:"Logout successful",
        data:null
    })

}