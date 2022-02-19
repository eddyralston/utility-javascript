const SC = (function(){
const html = string =>{
    var wrap = document.createElement('div')
    wrap.innerHTML=string
    return wrap.firstElementChild
 }
const template = (callbackString) => {
    const data = (data) => {
        var parsedHTML = callbackString(data);
        return html(parsedHTML)
    }
    return {data}
 }
const button = (HTMLstring,callback) => {
    var element = html(HTMLstring)
    element.addEventListener('click',callback)
    return element
 }
const form = (HTMLstring,submitCallback) => {
    var element = html(HTMLstring)
    var data = {}
    element.querySelectorAll('input, textarea').forEach(child=>{
        var nameValue = child.getAttribute('name')
        child.setAttribute('placeholder',nameValue)
        child.addEventListener('input',()=>{data[nameValue]=child.value})
    })
    element.querySelector('button').addEventListener('click',()=>{
        submitCallback(data)
    })
    return element
}
const section = (callback) => {
    var host = document.createElement('section')
    const add = (elements) => {
        if (Array.isArray(elements)){
            elements.forEach(element=>{host.append(element)})
        } else {
            host.append(elements)
        }
    }
    callback(add,host)
    return host
}
const id = id =>document.getElementById(id)
return {html,template,button,form,section,id}
})()