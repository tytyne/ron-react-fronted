
export default function authHeader(){
    const user=JSON.parse(localStorage.getItem('user'))
   console.log("check current user",user)
   console.log("display token",user?.token)
    
    if(user){
        return {
            "Authorization": `Bearer ${user?.token}`,
            "Content-Type": "Application/json",
        }
    }else{
         return {
            
         }
    }
    
}

