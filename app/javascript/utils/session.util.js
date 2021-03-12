export const login = user => (
    $.ajax({
        method: 'POST',
        url: '/auth/sign_in',
        data: { user } 
    })
);

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