export function checkName(name) {
    return (
        /^[A-Za-z ]+$/
    ).test(name);
}

export function checkEmail(email) {
    return (
        /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/
    ).test(email);
}

export function checkPassword(password) {
    return (
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_\-+=:;"'.,<>?()[\]{}|\/\\])[a-zA-Z0-9!@#$%^&*_\-+=:;"'.,<>?()[\]{}|\/\\]{8,20}$/
    ).test(password);
}