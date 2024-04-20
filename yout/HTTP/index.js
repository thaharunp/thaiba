const http=require('http')
const myserver = http.createserver((request,response)=>{
    response.write("welcome to node js")
    response.end()

})
myserver.listen(55000)