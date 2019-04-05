<template>
  <div>
    <h3>第一题:let与var的区别</h3>
    <li><p>作用范围不同：let作用于代码块中即{}，var作用于函数中</p></li>
    <li><p>声明提升区别：let声明的变量不会提升,var声明的变量会提升到作用域的头部</p></li>
    <li><p>重复声明区别： let不允许在相同作用域内重复声明,var可以在相同作用域内重复声明</p></li>
    <h3>第二题:for in、for of、forEach、map的区别</h3>
    <li><p>使用for in会遍历数组所有的可枚举属性，包括原型,遍历的是键名。适用于对象</p></li>
    <li><p>for of遍历的只是数组内的元素值，而不包括数组的原型属性方法和属性</p></li>
    <li><p>forEach()方法对数组的每一个元素执行一次提供的函数。</p></li>
    <li><p>map()方法创建一个新数组，其结果是该数组都执行一次函数，原函数保持不变</p></li>
    <h3>第三题:push，unshift的区别，pop和shift的区别，slice的作用和splice的作用</h3>
    <li><p>push()方法将一个或多个元素添加到数组的末尾，返回该数组的长度</p></li>
    <li><p>unift()方法将一个或多个元素添加到数组的末尾</p></li>
    <li><p>pop()方法从数组中删除最后一个元素,返回该元素的值</p></li>
    <li><p>shift()方法从数组中删除第一个元素</p></li>
    <li><p>slice()方法返回一个新的数组对象，不会改变原数组</p></li>
    <li><p>splice()方法通过删除或替换现有元素来修改数组,并以数组形式返回被修改的内容,会改变原数组</p></li>
    <h3>第四题:export与import的作用</h3>
    <li><p>export命令定义了模块(可以是文件、模块)的对外接口, import用于在一个模块中加载另一个含有export接口的模块</p></li>
  </div>
</template>
<script>
export default {
  name: 'Topfour'
}
</script>
<style scoped>
li {
  list-style: none;
}
</style>
