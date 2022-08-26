<template>
  <div id="app">
    <div class="content">
      <div class="warp">
        <!-- 搜索表单 -->
        <m-form inline size="mini" label-width="70px" :options="searchFromOp">
          <template #formBtn="{scope}">
            <el-form-item>
              <el-button type="primary" @click="searchList(scope)">查询</el-button>
              <el-button type="primary" @click="createList">创建条目</el-button>
            </el-form-item>
          </template>
        </m-form>
        <!-- 创建条目 -->
        <transition name="slide-fade">
          <CustomForm v-if="createFlag" @saveform="saveForm" :createFlag.sync="createFlag"></CustomForm>
        </transition>

        <!-- 题目列表 -->
        <listItem :list="list"></listItem>
      </div>
    </div>
  </div>
</template>

<script>
import listItem from "./components/ListItem";
import MForm from "./components/Form";
import CustomForm from "./components/CustomForm";
import storage from "./utils/storage";

const allList = [
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
        text: "B、优秀",
        marks: "16分"
      },
      {
        text: "C、良好",
        marks: "12分"
      },
      {
        text: "D、一般",
        marks: "8分"
      },
      
    ]
  },
  {
    type: "稳定成长",
    remark: "1)稳定成长的人",
    radioValue: "",
    children: [
      {
        text: "A、卓越",
        marks: "20分"
      },
      {
        text: "B、优秀",
        marks: "16分"
      },
      {
        text: "C、良好",
        marks: "12分"
      },
      {
        text: "D、一般",
        marks: "8分"
      }
    ]
  },
  {
    type: "团结友爱",
    remark: "1)团结友爱的人",
    radioValue: "",
    children: [
      {
        text: "A、卓越",
        marks: "20分"
      },
      {
        text: "B、优秀",
        marks: "16分"
      },
      {
        text: "C、良好",
        marks: "12分"
      },
      {
        text: "D、一般",
        marks: "8分"
      }
    ]
  }
];

export default {
  name: "App",
  components: {
    listItem,
    MForm,
    CustomForm
  },
  data() {
    return {
      createFlag: false,
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
      //题目列表
      list: []
    };
  },
  created() {
    // 先从缓存中获取数据，如无数据则取前端静态数据
    const list = storage.get("list");
    if (list) {
      this.list = list;
    } else {
      this.list = allList;

      storage.set("list", allList);
    }
  },

  methods: {
    // 保存条目
    saveForm(form) {
      let list = storage.get("list") || [];
      list.unshift(form);
      storage.set("list", list);
      this.searchList();
      this.createFlag = false;
    },
    // 搜索题目
    searchList(row) {
      const list = storage.get("list") || allList;
      if (row) {
        const { type, remark } = row;
        if (type || remark) {
          this.list = list.filter(i => {
            return i.type.includes(type) && i.remark.includes(remark);
          });
          return
        }
      }
      this.list = list;
    },
    // 创建条目
    createList() {
      this.createFlag = true;
    }
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
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s;
  /* cubic-bezier(1.0, 0.5, 0.8, 1.0) */
  transform: translateX(100px);
  opacity: 0;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(500px);
  opacity: 0;
}
</style>
