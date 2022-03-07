// import throttle from '../source/throttle.js'
import throttle from '../src/throttle.js'
import $ from 'jquery'
import sleep from '../src/utils/sleep.js'
test('smock', async () => {
    document.body.innerHTML =
        '<div>' +
        '  <span id="count">0</span>' +
        '  <button id="button" />' +
        '</div>';
    // let handler = throttle((e) => {
    //     $('#count').text(Number($('#count').text()) + 1)
    // }, 100,{leading:false,trailing:true})
    let handler = throttle((e) => {
        $('#count').text(Number($('#count').text()) + 1)
    }, 100)
    $('#button').on('click', handler)
    for(let i=0;i<100;i++){
        // 0 second 点击一次
        $('#button').click();
        await sleep(10);
    }
    // $('#button').click();
    expect($('#count').text()).toEqual('10');
})
test('param', async () => {
    document.body.innerHTML =
        '<div>' +
        '  <span id="count">0</span>' +
        '  <button id="button" />' +
        '</div>';
    // 防抖节流不能用箭头函数，否则this 的指向会出问题
    let handler = throttle(function(e){
        $('#count').text(Number($('#count').text()) + 1)
        console.log('e',e,'target',this)
    }, 100)
    $('#button').on('click', handler)
    $('#button').click();
    await sleep(1000);
    expect($('#count').text()).toEqual('1');
})