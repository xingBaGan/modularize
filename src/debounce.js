const FUNC_ERROR_TEXT = 'Expected a function';
function debounce(func, wait, options) {
    let timer;
    return () => {
        if (typeof func !== 'function') {
            throw new TypeError(FUNC_ERROR_TEXT)
        }
        //如果存在重置，否则直到wait time 流逝触发
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func();
        }, wait)
    }
}

export default debounce;