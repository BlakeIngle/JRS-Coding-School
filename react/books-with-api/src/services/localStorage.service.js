exports.saveUser = (user) => {
    const value = JSON.stringify(user);
    localStorage.setItem('user', value);
}

exports.getActiveUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}

exports.removeActiveUser = () => {
    localStorage.removeItem('user');
}