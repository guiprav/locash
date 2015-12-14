'use strict';

exports.copyKeys = function(dest, src, keys) {
    keys.forEach(function(key) {
        dest[key] = src[key];
    });

    return dest;
};
