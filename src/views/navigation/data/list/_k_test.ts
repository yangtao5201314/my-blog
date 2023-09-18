import type { NavList } from '../index';

const list: NavList = [
  {
    icon: 'https://jestjs.io/zh-Hans/img/favicon/favicon.ico',
    name: 'Jest',
    link: 'https://jestjs.io/zh-Hans/',
    iconErrorText: '',
  },
  {
    icon: 'https://mocha.nodejs.cn/favicon.ico',
    name: 'Mocha',
    link: 'https://mocha.nodejs.cn/',
    iconErrorText: '',
  },
  {
    icon: 'https://playwright.nodejs.cn/img/playwright-logo.svg',
    name: 'Playwright',
    link: 'https://playwright.nodejs.cn/',
    iconErrorText: '',
  },
];

const listData = {
  title: '测试库',
  list,
};

export default listData;
