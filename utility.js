var named = (host) => {
    var list = {}
    var els = host.querySelectorAll('[name]')
    for (var i = 0; i < els.length; i++) {
        var nameValue = els[i].getAttribute('name')
        list[nameValue] = els[i]
    }
    return list
}
var setonattri = (host,obj) => {
    var els = host.querySelectorAll('[on]')
    for (var i = 0; i < els.length; i++) {
        var nameValue = els[i].getAttribute('on')
        els[i].addEventListener('click', ()=>{obj.methods[nameValue]()})
    }
}
const html = str => {
    var el = document.createElement('div')
    el.innerHTML = str
    return el.firstElementChild
}
const id = id => document.getElementById(id)

function component(html,func){
    var node = html
    func(named(node))
    return node
}
function button(str){
    var el = html(`<button>${str}</button>`)
    var on = (callback) =>{el.addEventListener('click', callback);return el}
    return {on}
}