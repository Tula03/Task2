function debounce(func, delay) {
    let timeoutId;

    return function() {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(function() {
            func();
        }, delay);
    };
}

const log = debounce(function() {
    console.log('Hello');
}, 100);

log();
log();
log();