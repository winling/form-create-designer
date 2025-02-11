import {createApp} from 'vue';
import ELEMENT from 'element-plus';
import TDesign from 'tdesign-vue-next';

import 'element-plus/dist/index.css';
import 'tdesign-vue-next/dist/tdesign.css'; // 初始化tdesign样式

// import formCreate from '@form-create/element-ui';
import formCreate from '@form-create/tdesign';

import App from './App.vue';
import FcDesigner from '../src/index';

const app = createApp(App);

app.use(ELEMENT);
app.use(TDesign);

app.use(formCreate);
app.use(FcDesigner);


app.mount('#app')
