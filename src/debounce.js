const FUNC_ERROR_TEXT = 'Expected a function';
/**
 * 
 * @param {function} func 需要控制的事件
 * @param {Number} wait 流逝时间
 * @param {Boolean} leading 是否一开始就执行
 * @returns 经过控制的函数
 */
// debounce 的调用者，确实是undefined
function debounce(func, wait, leading = false) {
    if (typeof func !== 'function') {
        throw new TypeError(FUNC_ERROR_TEXT)
    }
    let timer,result;
    return function(e){
        // 获取事件的参数
        let args  = e;   
        //如果存在重置，否则直到wait time 流逝触发
        if (timer) {
            clearTimeout(timer)
        }
        // setTimeout 的调用者为window,但是这里是用箭头函数，绑定的是外部this
        timer = setTimeout(()=>{
            //将包裹函数的this 传递给 invoker
            result = func.call(this,args);
        }, wait)
        return result;
    }
}

export default debounce;