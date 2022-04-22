function AppRouter () {
    this.routes = {}
    this.on = function (path,callback){
        this.routes[path] = callback
    }
    this.check = function (){

        var hash = '/'+window.location.hash.substring(1)
        console.log(hash)
        hash.replaceAll(Regex,function(){
            var path = arguments[1]
            var query = arguments[2]
            console.log(path,query)
        })
        this.routes[hash]()
    }
    this.href = function(path){
        window.location.hash=path
    }
}

var router = new AppRouter()
router.on('/',function(self){
    document.body.innerHTML+='index page'
})
router.on('/main',function(self){
    document.getElementById('app').innerHTML+='main page'+self
    })
window.addEventListener('load', ()=>router.check());
window.addEventListener('hashchange', ()=>router.check());
