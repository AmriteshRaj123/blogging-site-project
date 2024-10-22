const autherModel1 = require("../model/authorModel")

const createAuthor = async (req, res)=>{
    try{
    const data  = req.body;
    const addAuthor = await authorModel1.create(data);
     res.status(201).send({status:true, message:addAuthor})

    }catch(error){
        console.log(error)
        return res.status(500).send({staus:false,message:error.message})
    }

}