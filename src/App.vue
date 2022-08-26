<template>
  <div id="app">
    <div class="content">
      <div class="warp">
        <!-- 搜索表单 -->
        <m-form inline size="mini" label-width="70px"  :options="searchFromOp">
          <template #formBtn="{scope}">
            <el-button type="primary" @click="searchList(scope)">查询</el-button>
            <el-button type="primary" @click="createList">创建条目</el-button>
          </template>
        </m-form>
        <!-- 创建条目 -->
        <m-form
          ref="form"
          size="mini"
          label-width="80px"
          :options="fromOp"
          @save="saveForm"
        />
        <!-- 题目列表 -->
        <listItem :list="list"></listItem>
      </div>
    </div>
  </div>
</template>

<script>
import listItem from "./components/ListItem";
import MForm from "./components/Form";


export default {
  name: "App",
  components: {
    listItem,
    MForm
  },
  data() {
    return {
      //搜索表单
      searchFromOp: [
        {
          type: "input",
          value: "",
          label: "题目类型",
          prop: "type",
          attrs: {
            style: {
              width: "180px"
            },
            clearable: true,
            placeholder: "题目类型"
          }
        },
        {
          type: "input",
          value: "",
          label: "题目描述",
          prop: "remark",
          attrs: {
            style: {
              width: "180px"
            },
            clearable: true,
            placeholder: "题目描述"
          }
        }
      ],
      //创建条目表单
      fromOp: [
        {
          type: "input",
          value: "",
          label: "题目ID号",
          prop: "id",
          rules: [
            {
              required: true,
              message: "必填"
            }
          ],
          attrs: {
            style: {},
            clearable: true,
            placeholder: "请输入ID号"
          }
        },
        {
          type: "input",
          value: "",
          label: "题目类型",
          prop: "type",
          rules: [
            {
              required: true,
              message: "必填"
            }
          ],
          attrs: {
            style: {},
            clearable: true,
            placeholder: "请输入类型"
          }
        },
        {
          type: "input",
          value: "",
          label: "题目描述",
          prop: "remark",
          rules: [
            {
              required: true,
              message: "必填"
            }
          ],
          attrs: {
            type: "textarea",
            style: {},
            clearable: true,
            placeholder: "请输入描述"
          }
        }
      ],
      //题目列表
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
  mounted() {},
  methods: {
    saveForm() {},
    searchList(row) {
      console.log(row);
    },
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

</style>
