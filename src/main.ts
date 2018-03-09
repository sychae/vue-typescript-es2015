import Vue from 'vue';
import HelloComponent from './kdmt/component/Hello.vue';

(window as any).app_o = {

};

window.console.log( (window as any).app_o );
new Vue({
  template: `
    <div>a
      <img src="@/assets/logo.png">
      <div>Hello {{name}}!</div>
      Name: <input type="text" v-model="name">
      <hello-component :name="name" :initialEnthusiasm="5" />
    </div>
  `,
  data: {
    name: 'World',
  },
  components: {
    HelloComponent,
  },
}).$mount('#app');
