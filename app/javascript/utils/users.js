export const getUsers = () => {
    return $.ajax({
        method: 'GET',
        url: '/users'
    })
};

export const getSingleUser = userId => (
    $.ajax({
        method: 'GET',
        url: `/users/${userId}`
    })
);