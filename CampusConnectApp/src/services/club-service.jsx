import { myAxios } from "./helper";

export const signUp=(club)=>{
    return myAxios
        .post('/api/club/register',club)    
        .then((response)=>response.json())
}