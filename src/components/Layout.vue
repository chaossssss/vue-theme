<template>
  <div class="common-layout" :class="form.option2">
    <el-container>
      <el-header height="100px">Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <div class="main-box">
            <div class="btn-box">
              <el-button>Default</el-button>
              <el-button type="primary">Primary</el-button>
              <el-button type="success">Success</el-button>
              <el-button type="info">Info</el-button>
              <el-button type="warning">Warning</el-button>
              <el-button type="danger">Danger</el-button>
            </div>
            <div class="control-group">
              <el-form :model="form" label-width="120px" label-position="left">
                <el-form-item label="1.切换css文件">
                  <el-radio-group
                    v-model="form.option1"
                    @change="changeOption1"
                  >
                    <el-radio label="light" />
                    <el-radio label="dark" />
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="2.类名切换">
                  <el-radio-group v-model="form.option2">
                    <el-radio label="light" />
                    <el-radio label="dark" />
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="3.css变量+类名切换"> </el-form-item>
              </el-form>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import { ref } from "vue";
const form = ref({});
const changeOption1 = (val) => {
  loadStyle(val);
};

function loadStyle(styleName) {
  let link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = `/${styleName}.css`;
  let head = document.getElementsByTagName("head")[0];
  head.appendChild(link);
}
</script>
<style lang="scss" scoped>
.common-layout {
  :deep(.el-container) {
    height: 100vh;
  }
  .main-box {
    display: flex;
    .btn-box {
      flex: 2;
    }
    .control-group {
      flex: 1;
      border: 1px solid #eee;
      background: #fff;
      padding: 20px;
      box-sizing: border-box;
    }
  }
}
</style>
