export const setCookie = (name, value, age) => {
    document.cookie = `${name}=${value};max-age=${age};path=/`;
};

export const getCookie = (name) => {
    const matches = document.cookie.match(new RegExp(
        '(?:^|; )' + name.replace(/([$?*|{}\]\\^])/g, '\\$1') + '=([^;]*)'
    ));
    return matches ? decodeURIComponent(matches[1]) : null;
};
