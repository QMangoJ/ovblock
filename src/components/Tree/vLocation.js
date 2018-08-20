let vLocation = {
  inserted: function(el, binding, vnode) {
    // console.log("vnode", vnode);
    // console.log("parent", vnode.elm.parentNode);
    let tParent = vnode.elm.parentNode;
    // console.log("offsetWidth", parent.offsetWidth);
    el.style.position = "absolute";
    el.style.top = "0px";
    el.style.left = `${tParent.offsetWidth}px`;
    // let w = vnode.elm.offsetWidth; // 获取当前元素的宽
    // let h = (w * Number(binding.value)) / 100; // 按照宽高比计算元素的高
    // el.style.height = h + "px"; // 对元素进行实际赋值
  }
};

export default vLocation;
