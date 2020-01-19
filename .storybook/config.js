import { configure, addDecorator } from '@storybook/react';

// storyファイルはstoriesディレクトリ配下に置くように設定
const req = require.context('../stories', true, /.(story|stories).(ts|js)$/);
function loadStories() { req.keys().forEach(req);
}
configure(loadStories, module);
