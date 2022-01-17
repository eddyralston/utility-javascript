const named = (host) => {
    var list = {};var els = host.querySelectorAll('[name]')
    if(els==undefined)return ; 
    for (var i = 0; i < els.length; i++) {
       var nameValue = els[i].getAttribute('name');
       list[nameValue] = els[i]
    }
    return list
}

const id = id => document.getElementById(id)

const html = str => {
   var el = document.createElement('div')
   el.innerHTML = str
   return el.firstElementChild
}

const component = (htmlCB,initCB) =>{
var element = htmlCB()
var child = named(element)
var methods = initCB(child,element)
var click = element.querySelectorAll('[click]')
if(click!=undefined){
    for (var i = 0; i < click.length; i++) {
       var nameValue = click[i].getAttribute('click');
       click[i].addEventListener('click',()=>methods[nameValue](child,element))
    }
}
return element
}

export {component,html,named,id}