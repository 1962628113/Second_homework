<template>
  <div>
    <h3>实现保留两位小数并向上收的函数</h3>
    <button @click="handleDecimal">点击</button>
    <div>原先的数字：<span>{{num}}</span></div>
    <div>保存后的数字：<span>{{num1}}</span></div>
  </div>
</template>
<script>
  export default {
    name:'handleDecimal',
    data(){
      return {
        num:119.999,
        num1:''
      }
    },
    methods:{
      handleDecimal(num){
        num=this.num;
        if (num % 1 == 0) {
          this.num1=num.toFixed(2)
          return num.toFixed(2)
        }
        if (num * 10 % 1 == 0) {
          this.num1=num.toFixed(2)
          return num.toFixed(2)

        }
        if(num*100%1==0){
          this.num1=num.toFixed(2)
          return num.toFixed(2)
        }
        else {
          var number = num * 100;
          var number1 = Math.floor(number)
          var a = Math.floor(number1 / 100)
          var b = Math.floor(number1 / 10 % 10)
          var c = Math.floor(number1 % 10)
          c = c + 1
          if (c == 10) {
            c = 0;
            b = b + 1;
            if (b == 10) {
              b = 0;
              a = a + 1
            }
          }
          var z = (a * 100 + b * 10 + c * 1);
          this.num1=(z / 100).toFixed(2)
          return (z / 100).toFixed(2)
        }
      }
    }
  }
</script>
