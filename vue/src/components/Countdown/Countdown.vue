<template>
  <div>
    <button @click="CountDown" :disabled="disabled">点击</button>
    <div id="time">

    </div>
  </div>
</template>
<script>
export default {
  name:'Countdown',
  data(){
    return {
      time:7200,
      disabled:false,
    }
  },
  methods:{
    CountDown(){
      this.disabled=true
      var that=this
      setInterval(function() {
        if (that.time >= 0) {
          var hours= Math.floor(that.time / 3600)
          var minutes = Math.floor(that.time /60 % 60);
          var seconds = Math.floor(that.time % 60);
          if(parseInt(hours/10)==0) {
            hours='0'+hours
          }
          if(parseInt(minutes/10)==0){
            minutes='0'+minutes
          }
          if(parseInt(seconds/10)==0){
            seconds='0'+seconds
          }

          var msg = "距离结束还有" +'<span>'+hours+'</span>'+"小时"+'<span>'+minutes+'</span>' + "分" +'<span>'+seconds+'</span>' + "秒";
          document.getElementById('time').innerHTML = msg;
          --that.time;
        } else{
          alert("时间到，结束!");
        }
      }, 1000);
    }
  },
}
</script>
<style>
  #time span{
    display: inline-block;
    width: 21px;
    text-align: center;
    background-color: #7f7f7f;
    color: #fff;
    letter-spacing:2px;
  }
</style>
