let gTreeData = {};
let gRoot = {};

// 沿着tPath路径对menu进行控制状态改变
function chageRecursion(menu, index, tPath) {
  //根据索引值改变状态
  if (menu.index !== index) {
    menu.isShow = false;
    return;
  }

  menu.isShow = true;
  //父本被选中，才去检查子项
  if (menu.child && menu.child.length > 0) {
    // 吐出一层索引值
    let index = tPath.pop();
    if (index === undefined) index = -1; // 使用-1 来保证子集全部设置为false

    for (let m of menu.child) {
      chageRecursion(m, index, tPath);
    }
  }
}

// 响应注册的事件
function changeState(e) {
  let root = gRoot; // 获取实例对应的dom
  let idx = e.path.findIndex(val => val === root);

  let tPath = [];
  // 过滤出可控制节点，同时也对应上了this.menu
  for (let i = 0; i <= idx; i++) {
    let el = e.path[i];
    if (el.nodeType && el.nodeType === 1 && el.hasAttribute("data-yje")) {
      tPath.push(parseInt(el.getAttribute("data-yje")));
    }
  }

  // 首先吐出第一层索引值
  let index = tPath.pop();
  if (index === undefined) index = -1; // 使用-1 来保证子集全部设置为false
  // 递归调用，改变状态
  chageRecursion(gTreeData, index, tPath);
}

/** 定义事件主体 */
/* eslint-disable */
let vEvent = {
  inserted: function(el, binding, vnode) {
    if (binding.value === -1) return;
    gRoot = el.parentNode; // 指令添加在了跟组件的child上
    gTreeData = binding.value;
    chageRecursion(gTreeData, 0, []); // 解绑定时，清空控制数组原有内容
    document.addEventListener("mousedown", changeState);
  },
  unbind: function(el, binding, vnode) {
    if (binding.value === -1) return;
    console.log("down");
    document.removeEventListener("mousedown", changeState);
  }
};

export default vEvent;
