import isObject from '../../source/isObject.js';
export default function __stringify(obj){
    var cache = [];
    return JSON.stringify(obj,function(key,value){
        //如果循环引用直接，返回
       if(isObject(value)){
            if(cache.indexOf(value)!=-1){
                return `circle ref!`;
            }
            cache.push(value);
       }
        return value;
    },4)
}