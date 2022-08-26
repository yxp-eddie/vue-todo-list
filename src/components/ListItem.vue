<template>
    <!-- 条目列表 -->
  <div class="list">
    <ul v-if="list.length>0">
      <li v-for="(item,inx) in list" :key="item.id">
        <h4>{{(inx+1)+'、'+item.type}}</h4>
        <div class="list-content">
          <p>{{item.remark}}</p>
          <ul>
            <li v-for="(subItem,index) in item.children" :key="index">
              <el-radio v-model="item.radioValue" :label="subItem.marks">{{subItem.text}}</el-radio>
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <div class="none-list" v-else>暂无数据</div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped >
.list ul {
  text-align: left;
}
.list-content p {
  text-indent: 2em;
}
.list-content li {
  line-height: 24px;
  text-indent: 1em;
}
.none-list{
    text-align: center;

}
</style>
