export async function Api(url:any ,options={}){
    try{
        const res = await fetch(url ,options)
        const data = await res.json()
        if (!res.ok){
            console.log(data);
            return    
        }
        return data
    }catch(err){
        console.log(err);
        return
    }
}
 