let {PythonShell} = require('python-shell')
module.exports.downloadFromLinkYoutube  = (req,res) =>{
    let {link} = req.body
    let  options = {
        args: [link]
    }
    let errorMsg =""
        PythonShell.run('test.py', options, function (err,result) {
            errorMsg = result.toString()
            console.log(errorMsg);
            if(errorMsg == "Error link or connection failed" ){
        res.status(200).json({
            success:false,
            message:"URL is not correct !"
        })  
        }else{
        res.status(200).json({
            success:true,
            downloaded:false,
            message:"Waiting For download this video..."
        })  
    }
        });
      
       
}
module.exports.isDownloaded = (req,res) =>{
    let {link} = req.body
    let  options = {
        args: [link]
    }
    PythonShell.run('YoutubeDownload.py', options, function (err,result) {
        console.log(result.toString())
       res.json({
          success:true,
          downloaded:true,
          message:"This download has been completed!"
      })  
      })

}