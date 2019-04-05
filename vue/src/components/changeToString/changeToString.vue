<template>
  <div>
    <h3>数组转字符串</h3>
    <div>数组1:<span>{{arr}}</span></div>
    <button @click="changeToString">点击</button>
    <div>字符串：<span class="changeToString">{{str}}</span></div>
  </div>
</template>
<script>
  export default {
    name:'changeToString',
    data(){
      return {
        arr:['abc', 'wer', 'tyu', 'jkl'],
        str:''
      }
    },
    methods: {
      changeToString:function(arr){
        var arr=this.arr;
        this.str=arr.join(',')
        return this.str
      }
    }
  }
</script>
