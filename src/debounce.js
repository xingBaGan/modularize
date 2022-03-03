const FUNC_ERROR_TEXT = 'Expected a function';
/**
 * 
 * @param {function} func 需要控制的事件
 * @param {Number} wait 流逝时间
 * @param {Boolean} leading 是否一开始就执行
 * @returns 经过控制的函数
 */
function debounce(func, wait, leading = false) {
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