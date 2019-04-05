import Vue from 'vue'
import changeToString from '@/components/changeToString/changeToString.vue'

describe('changeToArray.vue', () => {
  it('should return a str', () => {
    const Constructor = Vue.extend(changeToString)
    const vm = new Constructor().$mount()
    vm.arr=['abc', 'wer', 'tyu', 'jkl','zzz']
    const button=vm.$el.querySelector('button');
    const clickEvent=new window.Event('click');
    button.dispatchEvent(clickEvent);
    vm._watcher.run();
    var str=vm.str
    expect(str).toEqual('abc,wer,tyu,jkl,zzz')
    var str1=vm.$el.querySelector('.changeToString').textContent
    expect(str1).toBe('abc,wer,tyu,jkl,zzz')
  })
})
