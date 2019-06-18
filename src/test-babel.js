class UserInfo{
    constructor(){
  
    }
    sayHi(){
      console.log("hi, haha");
    }
  }
  new UserInfo().sayHi();
  const obj = {
    foo: {
      bar: {
        baz() {
          return 42;
        },
      },
    },
  };
  
const baz = obj?.foo?.bar?.baz(); // 42
alert(baz);
  