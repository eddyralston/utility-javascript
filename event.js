var events = {
    list:{},
    on(name,callback){
        this.list[name]=callback
    },
    send(name,data){
        this.list[name](data)
    }
}