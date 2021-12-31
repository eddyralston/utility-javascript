const named = (host) => {
    var list = {}
    var els = host.querySelectorAll('[name]')
    for (var i = 0; i < els.length; i++) {
        var nameValue = els[i].getAttribute('name')
        list[nameValue] = els[i]
    }
    return list
}

const html = str => {
    var el = document.createElement('div')
    el.innerHTML = str
    return el.firstElementChild
}
const id = id => document.getElementById(id)

