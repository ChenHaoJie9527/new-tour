<template>
  <div>
    <el-form ref="elForm" :model="formData" :rules="rules" size="small" label-width="100px"
      label-position="top">
      <el-form-item label="单行文本" prop="field101">
        <el-input v-model="formData.field101" placeholder="请输入单行文本" clearable :style="{width: '100%'}">
        </el-input>
      </el-form-item>
      <el-form-item label="计数器" prop="field103">
        <el-input-number v-model="formData.field103" placeholder="计数器"></el-input-number>
      </el-form-item>
      <el-form-item label="密码" prop="field102">
        <el-input v-model="formData.field102" placeholder="请输入密码" clearable show-password
          :style="{width: '100%'}"></el-input>
      </el-form-item>
      <el-form-item label="时间选择" prop="field104">
        <el-time-picker v-model="formData.field104" format="HH:mm:ss" value-format="HH:mm:ss"
          :picker-options='{"selectableRange":"00:00:00-23:59:59"}' :style="{width: '100%'}"
          placeholder="请选择时间选择" clearable></el-time-picker>
      </el-form-item>
      <el-form-item label="颜色选择" prop="field105" required>
        <el-color-picker v-model="formData.field105" size="medium"></el-color-picker>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      formData: {
        field101: undefined,
        field103: 0,
        field102: undefined,
        field104: '23:38:32',
        field105: null,
      },
      rules: {
        field101: [{
          required: true,
          message: '请输入单行文本',
          trigger: 'blur'
        }],
        field103: [{
          required: true,
          message: '计数器',
          trigger: 'blur'
        }],
        field102: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }],
        field104: [{
          required: true,
          message: '请选择时间选择',
          trigger: 'change'
        }],
      },
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    submitForm() {
      this.$refs['elForm'].validate(valid => {
        if (!valid) return
        // TODO 提交表单
      })
    },
    resetForm() {
      this.$refs['elForm'].resetFields()
    },
  }
}

</script>
<style>
</style>
