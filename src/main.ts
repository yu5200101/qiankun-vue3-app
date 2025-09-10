import { createApp, type App } from 'vue'
import './style.css'
import AppContainer from './App.vue'
import router from './router'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';


let app: App<Element>;

interface GlobalState {
  theme: 'light' | 'dark';
  language: 'en' | 'zh';
}


const render = (container?: HTMLElement) => {
  app = createApp(AppContainer);
  app.use(router)
  app.mount(container?.querySelector('#app') || '#app');
};

renderWithQiankun({
  mount(props) {
    props.onGlobalStateChange((state: GlobalState, prev: GlobalState) => {
      console.log('子应用收到状态变更：', state.theme);
      console.log(prev, 'prev')
    }, true); // true 表示立即触发一次回调
    props.setGlobalState({ theme: 'dark' });
    props.offGlobalStateChange();
    render(props.container);
  },
  bootstrap() { console.log('子应用启动'); },
  unmount() { app.unmount(); },
  update() { console.log('子应用更新'); } // 补全update方法
})


// 独立运行时直接挂载
if (!qiankunWindow.__POWERED_BY_QIANKUN__) render();
