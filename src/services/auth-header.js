export default function authHeader(){
    const user=JSON.parse(localStorage.getItem('user'))
    if(user&&user.token){
        return {'ACCESS_TOKEN_SECRET':user.token}
    }else{
        return {}
    }
}