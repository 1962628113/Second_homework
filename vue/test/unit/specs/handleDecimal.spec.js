import Vue from 'vue'
import handleDecimal from '@/components/handleDecimal/handleDecimal.vue'

describe('handleDecimal.vue', () => {
  it('should return a correct number', () => {
    const Constructor = Vue.extend(handleDecimal)
    const vm = new Constructor().$mount()
    vm.num=122211.99922
    const button=vm.$el.querySelector('button');
    const clickEvent=new window.Event('click');
    button.dispatchEvent(clickEvent);
    vm._watcher.run();
    var num1=vm.num1
    expect(num1).toEqual('122212.00')
  })
})
