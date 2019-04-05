<template>
<div>
  <h3>去掉数组 [1, 3, 4, null, undefined, NaN, false] 中的null、undefined、NaN</h3>
  <div><span>数组1：</span><span>[1, 3, 4, null, undefined, NaN, false]</span></div>
  <div><span>数组2：</span><span class="arrTwo">{{compact}}</span></div>
</div>
</template>
<script>
export default {
  name:'compact',
  computed:{
    compact: function () {
      var arr1=[1, 3, 4, null, undefined, NaN, false]
      var arr2=arr1.filter(item=>parseFloat(item))
      return arr2
    }
  }
}
</script>
