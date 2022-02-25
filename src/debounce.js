const FUNC_ERROR_TEXT = 'Expected a function';
function debounce(fuc,wait,options){
    let timer;
    return ()=>{
        if(typeof fuc !== 'func'){
            throw new TypeError(FUNC_ERROR_TEXT)
        }
        //如果存在重置，否则直到wait time 流逝触发
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
          fun();
        },wait)
    }
}