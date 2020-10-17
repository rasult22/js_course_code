//import * as BadAPI from './api-callback';
import * as PromiseAPI from './api-promise';

window.addEventListener('load', function(){

    /*
    BadAPI.userReg((res)=>{
        console.log(res)
        BadAPI.userAuth(res.id, (resAuth)=>{
            console.log(resAuth) 
            BadAPI.userData(resAuth.token, (resData)=>{
                console.log(resData)
            }, (error)=>{
                console.error(error);
            })
        }, (error) =>{
            console.error(error.msg)
        })
    }, (e)=>{
        console.error(e.msg)
    })*/


    PromiseAPI.userReg().then((res)=>{
        console.log(res)
        return PromiseAPI.userAuth(res.id)
    })
    .then((res)=>{
        console.log(res)
        return PromiseAPI.userData(res.token)
    })
    .then((res)=>{
        console.log(res)
    })
    .catch((e)=>{
        console.error(e.msg)
    })
})
  

