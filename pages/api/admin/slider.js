
import multer from 'multer';
import nc from 'next-connect';

export const config = {
    api: {
        bodyParser : false,
    }
} 
const upload = multer({
    storage: multer.diskStorage({
        destination: function(req,file,cb){
            cb(null,"uploads/")
        },
        filename: function(req,file,cb){
            cb(null,new Date().getTime()+"-"+file.originalname)
        }
    })
})

const handler = nc({
    onError: (err, req, res) => {
      console.error(err.stack);
      res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
      res.status(404).end("Page is not found");
    },
  })
  .use(upload.single('image'))
  .post((req,res)=>{
    res.status(200).json({file: req.file})
  })
export default handler