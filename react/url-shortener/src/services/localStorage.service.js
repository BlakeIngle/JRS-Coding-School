function saveUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
}

function getUser() {
    let value = localStorage.getItem("user");
    let user = JSON.parse(value);
    return user;
}

function removeUser() {
    localStorage.removeItem("user");
}

const ls = {
    saveUser,
    getUser,
    removeUser
}

function useLocalStorage() {
    return ls;
}

export { useLocalStorage }