<template>
  <div id="app">
    <div class="content">
      <div class="warp">
        <el-form :inline="true" :model="form" size="mini">
          <el-form-item label="题目类型">
            <el-input v-model="form.type" placeholder="题目类型"></el-input>
          </el-form-item>
          <el-form-item label="题目描述">
            <el-input v-model="form.remark" placeholder="题目描述"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="searchList">查询</el-button>
            <el-button type="primary" @click="createList">创建条目</el-button>
          </el-form-item>
        </el-form>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
  },
  data() {
    return {
      form: {
        type: "",
        remark: ""
      },
      list: [
        {
          type: "变革创新",
          remark: "1)有危机意识，能够敏锐发现组织，项目中存在问题和潜在的风险",
          radioValue: "",
          children: [
            {
              text: "A、卓越",
              marks: "20分"
            },
            {
              text: "A、卓越",
              marks: "16分"
            },
            {
              text: "A、卓越",
              marks: "12分"
            },
            {
              text: "A、卓越",
              marks: "10分"
            },
            {
              text: "A、卓越",
              marks: "5分",
              value: ""
            }
          ]
        }
      ]
    };
  },
  mounted() {

  },
  methods: {
    searchList() {},
    createList() {}
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.search-form .ul {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
ul {
  padding: 10px;
}
li {
  list-style: none;
}
.content {
  margin: 0 auto;
  width: 800px;
}
.warp {
  text-align: left;
}
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
