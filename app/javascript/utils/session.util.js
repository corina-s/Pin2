export const login = (user) => (
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