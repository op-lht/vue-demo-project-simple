/*封装操作localstorage本地存储的方法  模块化基础*/

var storage = {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));//JSON.stringify:将值进行序列化成json字符串
  },
  get(key) {
    return JSON.parse(localStorage.getItem(key));//JSON.parse:将值进行反序列化
  },
  remove(key) {
    localStorage.removeItem(key)
  }
};

export default storage;//将模块暴露出去

/*
  在JavaScript ES6中，export与export default均可用于导出常量、函数、文件、模块等，
  你可以在其它文件或模块中通过import+(常量 | 函数 | 文件 | 模块)名的方式，将其导入，
  以便能够对其进行使用，但在一个文件或模块中，export、import可以有多个，export default仅有一个。
*/
