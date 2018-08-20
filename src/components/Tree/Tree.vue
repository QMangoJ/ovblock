 <template>
  <div :data-yje='tree.index'
       :class='tree.selfStyle'
       @click="showm(rootTree)">
    {{tree.name}}
    <div v-if="tree.isShow"
         :class="tree.childStyle"
         v-Location
         v-Event="rootTree">
      <tree v-for="d in tree.child"
            :key="d.index"
            :tree="d"
            :rootTree="-1">
      </tree>
    </div>
  </div>
</template>
 
<script>
/** 该组件的目的主要是实现组件的递归 参考：https://segmentfault.com/q/1010000008438636 */
import Location from "./vLocation"; // 位置关系采用指令来实现
import Event from "./vEvent"; // 事件监听与绑定采用指令来实现
export default {
  directives: { Location, Event },
  props: ["tree", "rootTree"],
  name: "tree",
  methods: {
    showm(m) {
      if (m === -1) return;
      m.isShow = true;
    }
  }
};
</script>

<style scoped lang="scss">
.yje-bg {
  position: relative;
  background-color: chartreuse;
}
</style>
