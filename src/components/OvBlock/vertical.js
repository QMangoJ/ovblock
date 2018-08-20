/**
 * 按照垂直布局的方式对ovblock进行封装
 * @module OvBlock/vertical
 **/

/**
 * 具体实现{@link iOvblock#interaction}接口
 */
function vertical(style, parentNode) {
  style.parent = ['']
  style.child1 = ['row', 'justify-content-center']
  style.child2 = ['row', 'justify-content-center']
}

export default vertical
