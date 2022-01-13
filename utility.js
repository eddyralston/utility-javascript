HTMLElement.prototype.on=addEventListener

HTMLElement.prototype.appendJust=function(element){
   this.innerHTML='';   this.append(element)
}

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

const component = (() =>{
   var list = {}
   function define(name,element,callback){
      var comp = {
         host:element,
         child:named(element)
      }
      callback(comp.child,comp.host)
      list[name]=comp
   } 
   function use(name){
      var comp = list[name]
      return comp.host
   }
   return {define,use}
})()

