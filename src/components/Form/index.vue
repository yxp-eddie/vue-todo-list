<template>
  <!-- 封装elementUi表单 -->
  <el-form
    v-if="model"
    ref="form"
    v-bind="$attrs"
    :model="model"
    :rules="rules"
    :validate-on-rule-change="false"
  >
    <template v-for="item in showOptions">
      <el-form-item :key="item.prop" :label="item.label" :prop="item.prop">
        <template>
          <component :is="`el-${item.type}`" v-model="model[item.prop]" v-bind="item.attrs"/>
        </template>
      </el-form-item>
    </template>
    <!-- 表单按钮插槽 -->
    <el-form-item>
      <slot name="formBtn" :scope="model"/>
    </el-form-item>
  </el-form>
</template>

<script>
// 深拷贝
import cloneDeep from "lodash/cloneDeep";
import debounce from "lodash/debounce";

export default {
  name: "MForm",
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      model: {}
    };
  },
  computed: {
    // 表单需要显示的项
    showOptions() {
      return this.options.filter(op => !op.hide);
    },
    // 验证规则
    rules() {
      const r = {};
      for (let i = 0; i < this.options.length; i++) {
        const op = this.options[i] || {};
        r[op["prop"]] = op.rules;
      }
      return r;
    }
  },

  created() {
    this.init();
  },

  methods: {
    init() {
      this.initForm();
    },

    // 初始化表单获取初始值
    initForm() {
      const m = {};

      // 获取初始model中内容并确定是否需要回调
      for (let i = 0; i < this.options.length; i++) {
        const { value, prop } = this.options[i] || {};
        m[prop] = value;
      }

      this.model = cloneDeep(m);
    },
    // 表单提交
    handleConfirm: debounce(function() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.$emit("save", this.model);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }, 500)
  }
};
</script>