/* global Promise */
function userReg() {
    return new Promise(function (resolve, reject) {
        window.setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve({
                    msg: '+ registration',
                    id: 1
                });
            }
            else {
                reject({ msg: 'Error' })
            }
        }, 500)
    })
}

function userAuth(id) {
    return new Promise(function (resolve, reject) {
        window.setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve({
                    msg: '+ auth' + id,
                    token: 'askdjaskldjo212klads'
                });
            }
            else {
                reject({ msg: 'Error' })
            }
        }, 500);
    })
}

function userData(token) {
    return new Promise(function (resolve, reject) {
        window.setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve({
                    msg: '+ data by token' + token,
                    data: {
                        id: 1,
                        name: 'some'
                    }
                });
            }
            else {
                reject({ msg: 'Error' })
            }
        }, 500);
    })
}

export { userReg, userData, userAuth }