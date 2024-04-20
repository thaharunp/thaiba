csnst contentsample='my name is thaharun, Iam creating Dynamic content'


fs.writeFile('example.html',contentssample,(err)=>{

    if(err){
        console.log(err)
            
    }else{
        console.log('file created successfully')
    
    }
    
    
})