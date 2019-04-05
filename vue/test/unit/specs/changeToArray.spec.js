import Vue from 'vue'
import changeToArray from '@/components/changeToArray/changeToArray.vue'

function replace(str){
  str=str.replace(/[\r\n]/g, "")
  str=str.replace(/\s+/g, "")
  return str
}
function watch(){

}
describe('changeToArray.vue', () => {
  it('should return a array', () => {
    const Constructor = Vue.extend(changeToArray)
    const vm = new Constructor().$mount()
    vm.str='abc;wer;tyu;jkl;zz;'
    const button=vm.$el.querySelector('button');
    const clickEvent=new window.Event('click');
    button.dispatchEvent(clickEvent);
    vm._watcher.run();
    var arr=vm.arr
    expect(arr).toEqual(['abc','wer','tyu','jkl','zz'])
  })
})
