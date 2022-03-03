import { isCircularObject } from "../src/utils/isCircularObject";

test('smoke', () => {
  let foo = {
    name: 'foo',
    bar: {
      name: 'bar',
      baz: {
        name: 'baz',
        aChild: null  //待会让它指向obj.foo
      }
    }
  };
  expect(isCircularObject(foo)).toEqual(false);
  foo.bar.baz.aChild = foo
  expect(isCircularObject(foo)).toEqual(true);
})

test('反例1', () => {
  /* 测试二 */
  var obj = {
    foo: {
      name: 'foo',
      bar: {
        name: 'bar',
        baz: {
          name: 'baz',
          aChild: null
        }
      }
    },
    aaa: {
      name: "test",
      bbb: null
    }
  }
  obj.aaa.bbb = obj.foo;   //  aaa->bbb->bar->baz->aChild->null 不形成环
  expect(isCircularObject(obj)).toEqual(false);
})