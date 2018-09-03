let instances = [];

export const register = compoment => instances.push(compoment);

export const unregister = compoment => instances.splice(instances.findIndex(compoment), 1);

export const pushState = path => {
    window.history.pushState({}, '', path);
    instances.forEach(instance => instance.forceUpdate());
}

export const replaceState = path => {
    window.history.replaceState({}, '', path);
    instances.forEach(instance => instance.forceUpdate());
}
