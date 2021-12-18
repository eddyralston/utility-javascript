

var slash = (function (){

    var nameAttribute=(host)=>{
        var list = {}
        var els = host.querySelectorAll('[name]')
        for (var i=0;i<els.length;i++){
            var nameValue = els[i].getAttribute('name')
            list[nameValue]=els[i]
        }
        return list
    }
    var clickMethods = (obj) => {
        var click = host.querySelectorAll('[click]')
        if(click){for (var i=0;i<click.length;i++){
            var method = click[i].getAttribute('click')
            click[i].addEventListener('click', obj[method])
        }}
    }
    function select(host){
        var methods = {
            set(child){host.innerHTML='';host.append(child)},
            add(child){host.append(child)},
            remove(child){ if(child) host.removeChild(child); else host.remove() },
            replace(child,oldchild){host.replaceChild(child,oldchild)},
            loop(cb){for (var i=0;i<host.length;i++){cb(host[i])}},
            getText(url){fetch(url).then(res => res.text().then(res => host.innerHTML=res))},
            name:nameAttribute(host),
            clickMethods:clickMethods,
            style:{
                active(className){
                    var parent = host.children
                    var childloop=(callback)=>{for (var i=0;i<parent.length;i++){callback(parent[i])}}
                    var clear=()=>{childloop(el=>el.classList.remove(className))}
                    childloop(el=>el.addEventListener('click',()=>{clear();el.classList.add(className)}))}
                }
            }
    return methods
    }
       
    

    return {
        select
    }
})();


const id = id => document.getElementById(id)

const $ = host => slash.select(host)

const $id = host => slash.slash(document.getElementById(host))

const html = str => {
    var el = document.createElement('div')
    el.innerHTML = str
    return el.firstElementChild
}
