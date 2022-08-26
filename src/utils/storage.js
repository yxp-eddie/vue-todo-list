const storage={
    set(){
        localStorage.setItem(key,JSON.stringify(value))
    },
    get(){
        return JSON.parse(localStorage.getItem(key))
    },
    remove(){
        localStorage.setItem(key)
    },
}