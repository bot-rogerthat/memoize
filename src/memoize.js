export {memoize};

function memoize(func) {
    var cache = {};
    return function () {
        var key = keyGen(arguments);
        if (!(key in cache)) {
            cache[key] = func.apply(this, arguments);
        }
        return cache[key];
    };
}
function keyGen(value) {
    var h = "";
    if (value.length > 0) {
        for (var i = 0; i < value.length; i++) {
            h += 31 * i + value[i];
        }
    }
    return h;
}
