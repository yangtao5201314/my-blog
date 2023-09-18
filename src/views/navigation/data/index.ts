import { ref } from 'vue';

export interface NavItem {
  icon: string;
  name: string;
  link: string;
  iconErrorText: string;
}

export type NavList = Array<NavItem>;

export interface NavGroup {
  title: string;
  list: NavList;
  isPrivate?: boolean;
}

export type NavData = Array<NavGroup>;

export class NavListGetter {
  // eslint-disable-next-line no-use-before-define
  static navListGetter: NavListGetter = new NavListGetter();

  // 获取 data 所在目录
  getDataPath() {
    return import.meta.glob('./list/*.ts', { eager: true });
  }

  // 获取目录下所有的文件
  getAllData() {
    // 获取 data 所在目录
    const dataDirPath = this.getDataPath() as any;
    // 定义响应式变量
    const completeList = ref<NavData>([]);
    Object.keys(dataDirPath).forEach((data) => {
      // 动态添加数据
      const {
        default: { title, list, isPrivate = false },
      } = dataDirPath[data];
      completeList.value.push({
        title,
        list,
        isPrivate,
      });
    });
    return completeList;
  }
}

export default NavListGetter.navListGetter.getAllData();
