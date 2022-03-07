import debounce from '../src/debounce.js'
// import debounce from '../source/debounce.js'
import __stringify from "../src/utils/__stringify";
import sleep from '../src/utils/sleep.js'
import $ from 'jquery'
test('debounce once',async () => {
    document.body.innerHTML =
        '<div>' +
        '  <span id="count">0</span>' +
        '  <button id="button" />' +
        '</div>';
    let handler = debounce((e)=>{ 
        $('#count').text(Number($('#count').text()) + 1) 
        console.log( __stringify(e))
        console.log( __stringify(this))
    }, 500)
    $('#button').on('click', handler)
    for (let i = 0; i < 10; i++) {
        $('#button').click();
    }
    await sleep(1000)
    expect($('#count').text()).toEqual('1');
})
//测试必需时间过了才触发事件
test.skip('debounce check must time gone',async () => {
    document.body.innerHTML =
        '<div>' +
        '  <span id="count">0</span>' +
        '  <button id="button" />' +
        '</div>';
    let handler = debounce(() => { $('#count').text(Number($('#count').text()) + 1) }, 2000)
    $('#button').on('click', handler)
    
   for(let i=0;i<2;i++){
    for (let j = 0; j < 10; j++) {
        $('#button').click();
    }
    await sleep(1000)
    expect($('#count').text()).toEqual(String(i));
    await sleep(1000)
    expect($('#count').text()).toEqual(String(i+1));
   }
})
// 参数类型必须为function
test.skip('debounce args be must FUNC',async () => {
    expect(
        debounce('test', 2000)
    ).toThrow(TypeError);
})

test('debounce args be must FUNC',async () => {
    expect(
        debounce('test', 2000)
    ).toThrow(TypeError);
})