// import throttle from "../source/throttle";

export default function throttle(fn, wait) {
    if (typeof func !== 'function') {
        throw new TypeError(FUNC_ERROR_TEXT)
    }
    let timer;
    // 如果不存在该就调用
    return function(e) {
        let args = e;
        //如果不存在就弄个，否则什么都不处理
        if (!timer)
            timer = setTimeout(()=>{
                fn.call(this,args)
                timer = null;
            }, wait)
    }
}