<template>
  <div>
    <h3>字符串转数组</h3>
    <div>字符串：<span>{{str}}</span></div>
    <button @click="changeToArray">点击</button>
    <div>数组：<span class="changeToArray">{{arr}}</span></div>
  </div>
</template>
<script>
export default {
  name:'changeToArray',
  data(){
    return {
      str:'abc;wer;tyu;jkl;',
      arr:[]
    }
  },
  methods:{
    changeToArray:function(str){
      var length=this.str.length
      var newstr=this.str.substring(0,length-1)
      this.arr=newstr.split(';')
      return this.arr
    }
  }
}
</script>
