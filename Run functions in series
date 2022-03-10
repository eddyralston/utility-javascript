
var action = {
    list:{},
    define(name,callback){
        this.list[name]=callback
    },
    run(name,doneCB){
        this.list[name](doneCB)
    }
}
function runner(...method){
    var i = 0
    var loop = () => {
        var name = method[i]
        action.run(name,()=>{
            i++;
            console.log('done:'+name);
            if(i<method.length)loop();
        })
    }
    loop()
}
