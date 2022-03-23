class coreEvent {
    constructor(){
        this.eventList = {}
    }
    on(eventName,callback){
        if(this.eventList[eventName] == undefined){
            this.eventList[eventName]=[]
        }
        this.eventList[eventName].push(callback)
    }
    trigger(eventName,data){
        this.eventList[eventName].forEach(event => {
            event(data)
        });
    }
}


const id = id => document.getElementById(id)

const html = string => {
    var wrap = document.createElement('div')
    wrap.innerHTML=string
    return wrap.firstElementChild
}