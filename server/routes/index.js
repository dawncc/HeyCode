const router = require('koa-router')();
const multer = require('koa-multer');//加载koa-multer模块  

router.get('/', async(ctx, next) => {
  await ctx.render('index', {
    title: 'Hey Code!'
  })
})

//文件上传  
//配置  
var storage = multer.diskStorage({  
  //文件保存路径  
  destination: function (req, file, cb) {  
    cb(null, 'public/uploads/')  
  },  
  //修改文件名称  
  filename: function (req, file, cb) {  
    var fileFormat = (file.originalname).split(".");  
    cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);  
  }  
}) 
//加载配置  
var upload = multer({ storage: storage });  
router.post('/upload', upload.single('file'), async(ctx, next) => {
  console.log("upload statrt!");
  console.dir(ctx.req.file);
  ctx.body = {  
    filename: ctx.req.file.filename//返回文件名  
  } 
})

module.exports = router