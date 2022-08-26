<template>
  <!-- 创建条目自定义表单 -->
  <div class="create-form">
    <el-form ref="form" :model="form" :rules="rules" size="mini" label-width="80px">
      <el-form-item label="题目ID号" prop="id">
        <el-input v-model="form.id"></el-input>
      </el-form-item>
      <el-form-item label="题目类型" prop="type">
        <el-input v-model="form.type"></el-input>
      </el-form-item>
      <el-form-item label="题目描述" prop="remark">
        <el-input type="textarea" v-model="form.remark"></el-input>
      </el-form-item>
      <el-form-item label="选项" prop="children">
        <el-row :gutter="5" v-for="(item,inx) in form.children" :key="inx">
          <el-col :span="2">
            <div class="other-text">分值</div>
          </el-col>
          <el-col :span="4">
            <el-form-item :prop="`children.${inx}.marks`" :rules="rules.marks">
              <el-input v-model="item.marks" placeholder="分值"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :prop="`children.${inx}.text`" :rules="rules.text">
              <el-input v-model="item.text" placeholder="分值文字描述"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-button type="danger" @click="delFrom(inx)">删除</el-button>
          </el-col>
        </el-row>
        <el-button type="primary" @click="handAdd" style="width:100%;">添加选项</el-button>
      </el-form-item>
      <el-form-item class="text-center">
        <el-button type="primary" @click="saveFrom">保存</el-button>
        <el-button @click="cancelCreate">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import storage from "../../utils/storage";
export default {
  name: "CustomForm",
  data() {
    return {
      form: {
        id: "",
        type: "",
        remark: "",
        radioValue: "",
        children: [
          {
            text: "",
            marks: ""
          }
        ]
      },
      rules: {
        id: [{ required: true, message: "必填", trigger: "blur" }],
        type: [{ required: true, message: "必填", trigger: "blur" }],
        remark: [{ required: true, message: "必填", trigger: "blur" }],
        marks: [{ required: true, message: "必填", trigger: "blur" }],
        text: [{ required: true, message: "必填", trigger: "blur" }],
        children: [{ required: true, message: "必填", trigger: "blur" }]
      }
    };
  },
  methods: {
    // 保存条目
    saveFrom() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          const list = storage.get("list") || [];
          const id = list.find(v => v.id === this.form.id)?.id;
          if (id) {
            this.$message("题目ID号不能重复");
            return;
          }

          this.$emit("saveform", this.form);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 取消创建条目
    cancelCreate() {
      this.$emit("update:createFlag", false);
    },
    //添加选项方法
    handAdd() {
      this.form.children.push({
        text: "",
        marks: ""
      });
    },
    //删除方法
    delFrom(inx) {
      if (this.form.children.length === 1) {
        this.$message("至少需要保留一条选项");
        return;
      }
      this.form.children.splice(inx, 1);
    }
  }
};
</script>

<style scoped >
.other-text {
  background: #eee;
  border-radius: 2px;
  text-align: center;
  font-size: 12px;
}
.text-center {
  text-align: center;
}
</style>
