

export const Savelocaldata = (key,payload)=>{
    localStorage.setItem(key,JSON.stringify(payload));
}


export const Getlocaldata = (key)=>{
    try{
        let data = localStorage.getItem(key);
        data = JSON.parse(data);
         return data
    }
    catch{
         return undefined
    }
}