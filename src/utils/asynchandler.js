const asyncHandler = (requestHandler) =>{
    (req,res,next) =>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((err)=>{
            next(err)
        })
    }
}






export {asyncHandler}






// const asyncHandler = (fn) => {
    
//     async (req,res,next,err) =>{
//           try{
//                  await fn(req,res,next)
//           }
//           catch(err){
//             req.status(err.code || 500).json({
//                 success: false,
//                 message: err.message
//             })
//           }
//     }
// }