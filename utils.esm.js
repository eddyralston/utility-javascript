function ElementUtility(parent){
    return {
    get child (){
        var childObj = {}
        var childs = parent.querySelectorAll('[name]')
        if(childs)childs.forEach(child=>{
            var attr = child.getAttribute('name')
            childObj[attr] = child
        })
        return childObj
    },
    methods(obj){
        var child = this.child
        var buttons = parent.querySelectorAll('[click]')
        if(buttons)buttons.forEach(button=>{
            var attr = button.getAttribute('click')
            button.addEventListener('click',()=>obj[attr](child))
        })
    }
}
}

const html = string => {
    var wrap = document.createElement('div')
    wrap.innerHTML=string
    var element = wrap.firstElementChild
    var $ = ElementUtility(element)
    return {
        element,
        init(callback){
            callback(ElementUtility(element));
            return {element};
        }
    }
}

const id = id => document.getElementById(id)

export {id,html}
