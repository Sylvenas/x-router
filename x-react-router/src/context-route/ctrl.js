export const pushState = path => {
    window.history.pushState({}, '', path);
}

export const replaceState = path => {
    window.history.replaceState({}, '', path);
}
