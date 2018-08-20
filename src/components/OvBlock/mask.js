/**
 * 定义ovblock对外呈现的接口模块，定义相关用法
 * @interface iOvblock
 */
/**
 * 定义交互接口，用来传入交互定制所需的句柄
 * @function
 * @name iOvblock#interaction
 * @param {object} style ovblock的引用，用来定义 父框和两个子框的样式，位置
 * @param {Vnode} parentNode 父框的引用，用来绑定事件等
 * @return null
 */

/**
 * 按照mask的方式定义概览块
 * 外部引用
 * - 图片不动
 * - 事件触发后，文字展示到图片上，形成蒙版的效果。
 * - 事件的触发可以是悬浮，点击
 * @module OvBlock/mask
 */

/**
 * 具体实现{@link iOvblock#interaction}接口
 */
function mask(style, parentNode) {
  style.parent = ['row', 'justify-content-center', 'position-relative']
  style.child1 = ['col-4', 'position-absolute']
  style.child2 = ['col-4', 'position-absolute', 'd-none']

  let d = 'd-none'

  parentNode.onclick = () => {
    d = d === 'd-none' ? 'd-block' : 'd-none'
    style.child2 = ['col-4', 'position-absolute', d]
  }
}

export default mask
