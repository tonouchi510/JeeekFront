import { configure, addDecorator } from '@storybook/react';
import '../src/styles/semantic.min.css'; import '../src/index.css';
// storyファイルはstoriesディレクトリ配下に置くように設定
const req = require.context('../stories', true, /.(story|stories).tsx$/);
function loadStories() { req.keys().forEach(req);
}
configure(loadStories, module);