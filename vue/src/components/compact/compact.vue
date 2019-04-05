<template>
<div>
  <h3>去掉数组 [1, 3, 4, null, undefined, NaN, false] 中的null、undefined、NaN</h3>
  <div><span>数组1：</span><span id="arrone">{{arr1}}</span></div>
  <button @click="compact">点击</button>
  <div><span>数组2：</span><span id="arrtwo">{{arr2}}</span></div>
</div>
</template>
<script>
export default {
  name:'compact',
  data(){
    return {
      arr1:[1, 3, 4, null, undefined, NaN, false],
      arr2:''
    }
  },
  methods:{
    compact(arr) {
      var arr=this.arr1;
      this.arr2=arr.filter(item=>parseFloat(item))
      return this.arr2
    }
  }
}
</script>
