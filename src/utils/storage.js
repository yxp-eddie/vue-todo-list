const storage={
    set(key,value){
        localStorage.setItem(key,JSON.stringify(value))
    },
    get(key){
        let value =  localStorage.getItem(key)
        console.log(value,'valuevalue',!value);
        if(typeof value!==undefined){
            return  JSON.parse(value)
        }
        return   null
    },
    remove(key){
        localStorage.removeItem(key)
    },
}
export default storage