<template>
  <div class="common-layout" :class="form.option2">
    <el-container>
      <el-header :class="form.option3" height="100px">Header</el-header>
      <el-container>
        <el-aside :class="form.option3" width="200px">Aside</el-aside>
        <el-main :class="form.option3">
          <div class="main-box">
            <div class="btn-box">
              <el-button>Default</el-button>
              <el-button type="primary">Primary</el-button>
              <el-button type="success">Success</el-button>
              <el-button type="info">Info</el-button>
              <el-button type="warning">Warning</el-button>
              <el-button type="danger">Danger</el-button>

              <!-- <el-form :model="form" label-width="120px">
                <el-form-item label="Activity name">
                  <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="Activity zone">
                  <el-select
                    v-model="form.region"
                    placeholder="please select your zone"
                  >
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                  </el-select>
                </el-form-item>
                <el-form-item label="Activity time">
                  <el-col :span="11">
                    <el-date-picker
                      v-model="form.date1"
                      type="date"
                      placeholder="Pick a date"
                      style="width: 100%"
                    />
                  </el-col>
                  <el-col :span="2" class="text-center">
                    <span class="text-gray-500">-</span>
                  </el-col>
                  <el-col :span="11">
                    <el-time-picker
                      v-model="form.date2"
                      placeholder="Pick a time"
                      style="width: 100%"
                    />
                  </el-col>
                </el-form-item>
                <el-form-item label="Instant delivery">
                  <el-switch v-model="form.delivery" />
                </el-form-item>
                <el-form-item label="Activity type">
                  <el-checkbox-group v-model="form.type">
                    <el-checkbox label="Online activities" name="type" />
                    <el-checkbox label="Promotion activities" name="type" />
                    <el-checkbox label="Offline activities" name="type" />
                    <el-checkbox label="Simple brand exposure" name="type" />
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="Resources">
                  <el-radio-group v-model="form.resource">
                    <el-radio label="Sponsor" />
                    <el-radio label="Venue" />
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="Activity form">
                  <el-input v-model="form.desc" type="textarea" />
                </el-form-item>
              </el-form> -->
            </div>
            <div class="control-group">
              <el-form :model="form" label-width="160px" label-position="left">
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
                <el-form-item label="3.css变量+类名切换">
                  <el-radio-group v-model="form.option3">
                    <el-radio label="light" />
                    <el-radio label="dark" />
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="4.根元素添加属性">
                  <el-radio-group
                    v-model="form.option4"
                    @change="changeOption4"
                  >
                    <el-radio label="light" />
                    <el-radio label="dark" />
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="5.自定义颜色">
                  <el-color-picker
                    v-model="form.option5"
                    @change="changeOption5"
                  />
                  <div class="color-box">
                    <div
                      class="color-list"
                      v-for="(item, index) in colorList"
                      :key="index"
                    >
                      <div
                        class="color-block"
                        :style="{ background: item }"
                      ></div>
                      <div class="color-text">{{ item }}</div>
                    </div>
                  </div>
                </el-form-item>
                <el-form-item label="6.系统主题">
                  <el-radio-group
                    v-model="form.option6"
                    @change="changeOption6"
                  >
                    <el-radio label="使用" />
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="7.图片主题">
                  <el-image
                    class="image-list"
                    v-for="(item, index) in picList"
                    :key="index"
                    :src="item"
                  />
                </el-form-item>
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
import pic1 from "../assets/1.jpg";
import pic2 from "../assets/2.jpg";
import { calcColor } from "../utils/color.js";
const form = ref({});
const colorList = ref([]);
const picList = ref([pic1, pic2]);
const changeOption1 = (val) => {
  loadStyle(val);
};

const changeOption4 = (val) => {
  window.document.documentElement.setAttribute("data-theme", val);
};

const changeOption5 = (val) => {
  calcColorMethod(val);
};

const changeOption6 = (val) => {
  const scheme = window.matchMedia("(prefers-color-scheme: dark)");
  if (scheme.matches) {
    // 深色模式业务处理代码
    console.log("深色模式");
  } else {
    // 浅色模式业务处理代码
    console.log("浅色模式");
    calcColor();
  }
};

function calcColorMethod(color) {
  let primaryColor = color;
  let assignmentColor1 = calcColor(primaryColor, "white", 0.2);
  let assignmentColor2 = calcColor(primaryColor, "white", 0.4);
  colorList.value = [primaryColor, assignmentColor1, assignmentColor2];
  document
    .getElementsByTagName("body")[0]
    .style.setProperty("--primaryColor", primaryColor);
  document
    .getElementsByTagName("body")[0]
    .style.setProperty("--assignmentColor1", assignmentColor1);
  document
    .getElementsByTagName("body")[0]
    .style.setProperty("--assignmentColor2", assignmentColor2);
}

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
  // :deep(.el-header) {
  //   background: v-bind("form.option5");
  // }
  .color-box {
    padding-top: 20px;
    background: #fff;
  }
  .color-list {
    display: inline-block;
    margin-right: 20px;
  }
  .color-block {
    width: 100px;
    height: 100px;
  }
  .color-text {
    text-align: center;
    color: #000;
    padding-top: 5px;
  }
  .image-list {
    width: 120px;
  }
}
</style>
