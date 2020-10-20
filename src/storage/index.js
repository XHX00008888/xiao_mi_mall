// 虽然sessionStorage有自己的api，但功能不强，于是自己封装一个
const STORAGE_KEY = 'mall'
export default { // 利用es6模块话的导出方式，因为这是项目本身内的代码，在nodejs环境中运行，而有些地方使用commonjs，是因为那是在构建项目时用的代码，适用于webpack打包
  // 存储值
  setItem(key, value, module_name) {
    if (module_name) {
      let val = this.getItem(module_name);
      val[key] = value;
      this.setItem(module_name, val);
    } else {
      let val = this.getStorage();
      val[key] = value;
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
  },
  // 获取某一个模块下面的属性user下面的userName
  getItem(key, module_name) {
    if (module_name) {
      let val = this.getItem(module_name);
      if (val) return val[key];
    }
    return this.getStorage()[key];
  },
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
  },
  clear(key, module_name) {
    let val = this.getStorage();
    if (module_name) {
      if (!val[module_name]) return;
      delete val[module_name][key];
    } else {
      delete val[key];
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
  }
}