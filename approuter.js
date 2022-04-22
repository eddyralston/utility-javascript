class Router{
    constructor(){
    this.routes = {}
    }
    on(path,callback){
        this.routes[path] = callback
    }
    check(){
        var hash = '/'+window.location.hash.substring(1)
        var hash = hash.replaceAll('$','][$').replaceAll('?','][?').replaceAll('&','][&').split('][')
        var activeRoute = null
        var paramsObj = {}
        var flagsArr = []
        hash.forEach(params => {
            var type = params[0]
            if(type=='/')activeRoute = this.routes[hash[0]]
            if(type=='$')flagsArr.push(params.substr(1))
            if(type=='?'){
                var KeyValue = params.substr(1).split('=')
                var key = KeyValue[0]
                var value = KeyValue[1]
                paramsObj[key]=value
            }

        });
        activeRoute({params:paramsObj,flags:flagsArr})
    }
    open(path,{params,flags}){
        var url = path
        for (i in params) url+='?'+i+'='+params
        flags.forEach(flag=>url+='$'+flag)
        window.location.hash=url
    }
}

window.addEventListener('load', ()=>router.check());
window.addEventListener('hashchange', ()=>router.check());
const element = (tag,prop)=>{
    var el = document.createElement(tag)
    if(prop){
        for (props in prop){
            el[props] = prop[props]
        }
    }
    return el
}
function html(string){
    var el = element('div',{innerHTML:string})
    return el.firstElementChild;
}
function ShadowElement(callback){
var host = element('div')
host.attachShadow({mode:'open'})
var shadowRoot = host.shadowRoot
callback(shadowRoot)
return host
}

