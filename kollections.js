function listOf(...init) {
    let array = init || [];
    let proxy = new Proxy(array, {
        get(target, prop) {
            prop = prop.split(',').map(n => parseInt(n, 10));

            switch (prop.length) {
                case 1:
                    if (!isNaN(prop)) {
                        if (prop < 0) {
                            prop += target.length;
                        }
                    }
                    return target[prop];
                case 2:
                case 3:
                    return target.slice(...prop);
                default:
                    throw new Error('invalid array access');
            }
        }
    });
    return proxy;
}
