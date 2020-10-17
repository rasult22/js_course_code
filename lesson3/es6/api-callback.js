
function userReg(onSuccess, onError){
    window.setTimeout(()=>{
        if(Math.random() > 0.2){
            onSuccess({
                msg: '+ registration',
                id: 1
            });
        }
        else{
            onError({msg:'Error'})
        }
    }, 500)
}

function userAuth(id, onSuccess, onError){
    window.setTimeout(() => {
        if(Math.random() > 0.2){
            onSuccess({
                msg: '+ auth' + id,
                token:'askdjaskldjo212klads'
            }); 
        }
        else{
            onError({msg:'Error'})
        }
    }, 500);
}

function userData(token, onSuccess, onError){
    window.setTimeout(() => {
        if(Math.random() > 0.2){
            onSuccess({
                msg: '+ data by token' + token,
                data:{
                    id: 1,
                    name: 'some'
                }
            }); 
        }
        else{
            onError({msg:'Error'})
        }
    }, 500);
}

export {userReg,userData, userAuth}