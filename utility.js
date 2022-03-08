const html = string =>{
    var wrap = document.createElement('div')
    wrap.innerHTML=string
    return wrap.firstElementChild
 }

const id = id =>document.getElementById(id)
