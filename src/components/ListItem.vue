<template>
  <div class="list">
    <ul>
      <li v-for="(item,inx) in list" :key="item.id">
        <h4>{{(inx+1)+'、'+item.type}}</h4>
        <div class="list-content">
          <p>{{item.remark}}</p>
          <ul>
            <li v-for="subItem in item.children" :key="subItem.marks">
              <el-radio v-model="item.radioValue" :label="subItem.marks">{{subItem.text}}</el-radio>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  components: {},
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
</style>
