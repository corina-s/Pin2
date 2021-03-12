export const login = user => (
    $.ajax({
        method: 'POST',
        url: '/users/sign_in',
        data: { user } 
    })
);

export const signup = user => (
    $.ajax({
        method: 'POST',
        url: '/users/sign_up',
        data: { user }
    })
);

export const logout = ()=> (
    $.ajax({
        method: 'DELETE',
        url: 'users/sign_out',
    })
)