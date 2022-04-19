var el = (element,obj) => {
    var el = document.createElement(element);
    for ( prop in obj ){
        el[prop] = obj[prop];
    }
    return el
}

var DOM = (()=>{
    const core = new Worker('ww.js');

    var num1 = el('input',{type:'number'});
    var num2 = el('input',{type:'number'});
    var num3 = el('input',{type:'number'});
    var send = el('button',{textContent:'Send',
        onclick:()=>{
            core.postMessage({
                num1:num1.value,
                num2:num2.value,
                num3:num3.value
            })
        }
    });
    var preview = el('div',{textContent:'0'});

    document.body.append(num1,num2,num3,send,preview)

core.onmessage = function(e) {
    console.log(e.data)
    preview.innerText='result:'+e.data.result+'<br>'+'delay:'+e.data.delay+'ms'
}


    
})()

