import isObject from '../../source/isObject.js';
var FUNC_ERROR_TEXT = 'Expected a object';
export function isCircularObject(obj) {
    if (!isObject(obj)) {
        throw new TypeError(FUNC_ERROR_TEXT)
    }
    let cache = [], hasCircle = false;
    let hasCircleRef = function(obj){
        let keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            let value = obj[key];
            if (isObject(value)) {
                //如果子对象
                if (cache.indexOf(value) !== -1) {
                    hasCircle = true;
                    break;
                } else {
                    //将子对象放入  
                    cache.push(value);
                    //对子对象进行处理
                    hasCircleRef(value);
                    // 爷爷辈的远亲戚不算循环应用
                    cache.pop();
                }
            }
        }
    }
    hasCircleRef(obj);
    return hasCircle;
}

