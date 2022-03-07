import __stringify from "../src/utils/__stringify";

test('smock',()=>{
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
      foo.bar.baz.aChild = foo
      console.log(__stringify(foo));
})