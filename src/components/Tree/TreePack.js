// 递归函数，遍历对象的各个子节点

function dataPack(tree, index) {
  let n = tree

  // 对单个节点进行打包
  n.child = n.child || [] // 考虑到Tree.vue中的应用逻辑，故加此默认项
  n.selfStyle = n.selfStyle || 'list-group-item list-group-item-action' // 默认值
  n.childStyle = n.childStyle || 'list-group'
  n.isShow = n.isShow || false
  n.index = index

  // 处理子节点的问题
  if (n.child && n.child.length > 0) {
    let tList = []
    for (let m of n.child) {
      tList.push(dataPack(m, tList.length))
    }
    n.child = tList
  } else {
    n.child = []
  }
  return n
}

export default { dataPack }
