export const login = user => (
    loginCall(user).then((data, status, xhr) => {
        const accessToken = xhr.getResponseHeader("access-token");
        const client = xhr.getResponseHeader("client");
        const uid = xhr.getResponseHeader("uid");
        const expiry = xhr.getResponseHeader("expiry");
        
        const session ={client, uid, expiry, accessToken}
        user = {...data.data,...session}
        debugger
        console.log("login user", user)
        return user
    }, err => err.responseJSON
    )
);

export const loginCall = (user) => (
    $.ajax({
        method: 'POST',
        url: '/auth/sign_in',
        data: user
    })
    
);
// {
//     "username": "Ria",
//     "email": "r@r.com",
//     "password": "ria123",
//     "provider": "email",
//     "uid": "r@r.com"
//   }

export const signup = user => (
    $.ajax({
        method: 'POST',
        url: '/auth/sign_up',
        data: { user }
    })
);

export const logout = ()=> (
    $.ajax({
        method: 'DELETE',
        url: 'auth/sign_out',
    })
)