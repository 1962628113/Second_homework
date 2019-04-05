import Vue from 'vue'
import compact from '@/components/compact/compact.vue'

function replace(str){
  str=str.replace(/[\r\n]/g, "")
  str=str.replace(/\s+/g, "")
  return str
}
function watch(){

}
describe('compact.vue', () => {
  it('should return a array cotain number', () => {
    const Constructor = Vue.extend(compact)
    const vm = new Constructor().$mount()
    vm.arr1=[1, 3, 4, null, undefined, NaN, false,5,6]
    const button=vm.$el.querySelector('button');
    const clickEvent=new window.Event('click');
    button.dispatchEvent(clickEvent);
    vm._watcher.run();
    const arr2=vm.$el.querySelector('#arrtwo').textContent
    expect(replace(arr2)).toBe('[1,3,4,5,6]')
  })
})
