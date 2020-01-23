export const passwordCoding = (password) => {
    let f = '';
    for (let c = 0; c < password.length; c++) {
        f += String.fromCharCode(password.charCodeAt(c) ^ (1 + (password.length - c)
            % 32));
    }
    return f;
};