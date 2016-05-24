export {memoize};

function memoize(func) {
    var cache = {};
    return function () {
        var key = JSON.stringify(arguments);
        if (!(key in cache)) {
            cache[key] = func.apply(this, arguments);
        }
        return cache[key];
    };
}
