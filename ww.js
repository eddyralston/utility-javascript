onmessage=e=>{
    var t1 = performance.now()
    var result = e.data.num1 ** e.data.num2 ** e.data.num3
    var t2 = performance.now()
    var delay = t2 - t1
    postMessage({result,delay});
}