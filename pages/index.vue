<template>
  <div class="app">
    <Header></Header>
    <div class="main">
      <div class="sidebar">
        <a href="#aboutFrontEnd">关于前端</a>
        <a href="#documentation">重要文档</a>
        <a href="#UIFramework">UI框架</a>
        <a href="#design">设计</a>
        <a href="#tools">工具</a>
        <a href="#AI">AI</a>
        <a href="#cloudPlatform">云平台</a>
        <a href="#networkSecurity">网络安全</a>
        <a href="#study">自学神器</a>
        <a href="#games">游戏资源</a>
        <a href="#other">其他</a>
      </div>
      <div class="sidebar_right">
        <div id="aboutFrontEnd">
          <div style="margin-bottom: 10px;font-weight: 700">关于前端</div>
          <div style="display: flex;flex-wrap: wrap;gap: 10px">
            <a class="main_item" v-for="item in data1" :key="item.id" :data-title="item.description" :href="item.url"
              target="_blank">
              <div class="ico" :style="'background-image: url(' + item.ico + ')'"></div>
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>
        <div id="documentation">
          <div style="margin-bottom: 10px;font-weight: 700">重要文档</div>
          <div style="display: flex;flex-wrap: wrap;gap: 10px">
            <a class="main_item" v-for="item in data9" :key="item.id" :data-title="item.description" :href="item.url"
              target="_blank">
              <div class="ico" :style="'background-image: url(' + item.ico + ')'"></div>
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>
        <div id="UIFramework">
          <div style="margin-bottom: 10px;font-weight: 700">UI框架</div>
          <div style="display: flex;flex-wrap: wrap;gap: 10px">
            <a class="main_item" v-for="item in data8" :key="item.id" :data-title="item.description" :href="item.url"
              target="_blank">
              <div class="ico" :style="'background-image: url(' + item.ico + ')'"></div>
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>
        <div id="design">
          <div style="margin-bottom: 10px;font-weight: 700">设计</div>
          <div style="display: flex;flex-wrap: wrap;gap: 10px">
            <a class="main_item" v-for="item in data6" :key="item.id" :data-title="item.description" :href="item.url"
              target="_blank">
              <div class="ico" :style="'background-image: url(' + item.ico + ')'"></div>
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>
        <div id="tools">
          <div style="margin-bottom: 10px;font-weight: 700">工具</div>
          <div style="display: flex;flex-wrap: wrap;gap: 10px">
            <a class="main_item" v-for="item in data2" :key="item.id" :data-title="item.description" :href="item.url"
              target="_blank">
              <div class="ico" :style="'background-image: url(' + item.ico + ')'"></div>
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>
        <div id="AI">
          <div style="margin-bottom: 10px;font-weight: 700">AI</div>
          <div style="display: flex;flex-wrap: wrap;gap: 10px">
            <a class="main_item" v-for="item in data7" :key="item.id" :data-title="item.description" :href="item.url"
              target="_blank">
              <div class="ico" :style="'background-image: url(' + item.ico + ')'"></div>
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>
        <div id="cloudPlatform">
          <div style="margin-bottom: 10px;font-weight: 700">云平台</div>
          <div style="display: flex;flex-wrap: wrap;gap: 10px">
            <a class="main_item" v-for="item in data3" :key="item.id" :data-title="item.description" :href="item.url"
              target="_blank">
              <div class="ico" :style="'background-image: url(' + item.ico + ')'"></div>
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>
        <div id="networkSecurity">
          <div style="margin-bottom: 10px;font-weight: 700">网络安全</div>
          <div style="display: flex;flex-wrap: wrap;gap: 10px">
            <a class="main_item" v-for="item in data4" :key="item.id" :data-title="item.description" :href="item.url"
              target="_blank">
              <div class="ico" :style="'background-image: url(' + item.ico + ')'"></div>
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>
        <div id="study">
          <div style="margin-bottom: 10px;font-weight: 700">自学神器</div>
          <div style="display: flex;flex-wrap: wrap;gap: 10px">
            <a class="main_item" v-for="item in data10" :key="item.id" :data-title="item.description" :href="item.url"
              target="_blank">
              <div class="ico" :style="'background-image: url(' + item.ico + ')'"></div>
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>
        <div id="games">
          <div style="margin-bottom: 10px;font-weight: 700">游戏资源</div>
          <div style="display: flex;flex-wrap: wrap;gap: 10px">
            <a class="main_item" v-for="item in data11" :key="item.id" :data-title="item.description" :href="item.url"
              target="_blank">
              <div class="ico" :style="'background-image: url(' + item.ico + ')'"></div>
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>
        <div id="other">
          <div style="margin-bottom: 10px;font-weight: 700">其他</div>
          <div style="display: flex;flex-wrap: wrap;gap: 10px">
            <a class="main_item" v-for="item in data5" :key="item.id" :data-title="item.description" :href="item.url"
              target="_blank">
              <div class="ico" :style="'background-image: url(' + item.ico + ')'"></div>
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer>
    <div class="frLink">
      <div class="title">友链</div>
      <a href="https://icp.gov.moe/?keyword=20240061" target="_blank">
        <img src="https://icp.gov.moe/favicon.ico" alt="萌国ICP备案">
        <span>萌ICP备20240061号</span>
      </a>
      <a href="https://nuxt.com.cn/" target="_blank">
        <img src="https://nuxt.com.cn/icon.png" alt="nuxt框架">
        <span>nuxt框架</span>
      </a>
      <a href="https://ziyuan.baidu.com/dailysubmit/index" target="_blank">
        <img src="https://ziyuan.baidu.com/favicon.ico" alt="百度收录">
        <span>百度收录</span>
      </a>
    </div>
    <div class="abInfo">
      <div class="title">个人信息</div>
      <div class="abinfo_item">
        <span>站长</span>
        <span>lazychild</span>
      </div>
      <div class="abinfo_item">
        <span>个人博客</span>
        <span>https://asdgjsad.github.io/</span>
      </div>
      <div class="abinfo_item">
        <span>联系方式</span>
        <span>17347187569</span>
      </div>
      <div class="abinfo_item">
        <span>邮箱</span>
        <span>17347187569@163.com</span>
      </div>
    </div>
    <div class="staWeb">
      <div class="title">站点信息</div>
      <div>本站已经运行:<span style="letter-spacing: 2px;margin-left: 5px;">{{ webTime }}</span></div>
      <div>本站总访问量<span id="busuanzi_value_site_pv"
          style="padding: 2px 5px;background-color: #bdbdbd;border-radius: 2px;color: white;margin: 4px;"></span>次</div>
      <div>本站访客数<span id="busuanzi_value_site_uv"
          style="padding: 2px 5px;background-color: #bdbdbd;border-radius: 2px;color: white;margin: 4px;"></span>人次</div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { type Ref, ref, computed } from "vue"
import { type webDataArr } from "~/types/webData";
import Header from "~/components/Header.vue";

// 判断图片链接是否有效
function isLink(src: string) {
  return new Promise((resolve, reject) => {
    let img = new Image(0, 0)

    img.src = src
    img.addEventListener('load', () => {
      resolve(true)
    })
    img.addEventListener('error', () => {
      resolve(false)
    })
  })
}
let webTime: Ref<string> = ref("")

if (process.client) {
  // 不断更新网站显示时间
  setInterval(() => {
    webTime.value = webTimeFcn()
  }, 1000)
}

// 统计网站运行时间
function webTimeFcn() {
  // 创建网站的时间2024.5.12
  const startTimeDate = new Date(2024, 4, 12, 13, 14, 52)
  // 获取当前时间
  var now = new Date();
  // 计算时间差，单位为毫秒
  var uptimeMs = now.getTime() - startTimeDate.getTime();
  // 计算天数
  var days = Math.floor(uptimeMs / (1000 * 60 * 60 * 24));
  uptimeMs -= days * (1000 * 60 * 60 * 24);
  // 计算小时数
  var hours = Math.floor(uptimeMs / (1000 * 60 * 60));
  uptimeMs -= hours * (1000 * 60 * 60);
  // 计算分钟数
  var minutes = Math.floor(uptimeMs / (1000 * 60));
  uptimeMs -= minutes * (1000 * 60);
  // 计算秒数
  var seconds = Math.floor(uptimeMs / 1000);
  return `${days}天${hours}时${minutes}分${seconds}秒`;
}
// 关于前端
const data1: Ref<webDataArr> = ref([])
// 工具
const data2: Ref<webDataArr> = ref([])
// 云平台
const data3: Ref<webDataArr> = ref([])
// 网络安全
const data4: Ref<webDataArr> = ref([])
// 其他
const data5: Ref<webDataArr> = ref([])
// 设计
const data6: Ref<webDataArr> = ref([])
// AI
const data7: Ref<webDataArr> = ref([])
// ui框架
const data8: Ref<webDataArr> = ref([])
// 重要文档
const data9: Ref<webDataArr> = ref([])
// 自学神器
const data10: Ref<webDataArr> = ref([])
// 游戏
const data11: Ref<webDataArr> = ref([])
fetch("/json/webData.json").then(res => res.json()).then(res => {
  // 关于前端
  data1.value = res.aboutFrontEnd
  for (let item of data1.value) {
    isLink(item.ico).then(res => {
      if (!res) {
        item.ico = '/replace.svg'
      }
    })
  }
  // 工具
  data2.value = res.tools
  for (let item of data2.value) {
    isLink(item.ico).then(res => {
      if (!res) {
        item.ico = '/replace.svg'
      }
    })
  }
  // 云平台
  data3.value = res.cloudPlatform
  for (let item of data3.value) {
    isLink(item.ico).then(res => {
      if (!res) {
        item.ico = '/replace.svg'
      }
    })
  }
  // 网络安全
  data4.value = res.networkSecurity
  for (let item of data4.value) {
    isLink(item.ico).then(res => {
      if (!res) {
        item.ico = '/replace.svg'
      }
    })
  }
  // 其他
  data5.value = res.other
  for (let item of data5.value) {
    isLink(item.ico).then(res => {
      if (!res) {
        item.ico = '/replace.svg'
      }
    })
  }
  // 设计
  data6.value = res.design
  for (let item of data6.value) {
    isLink(item.ico).then(res => {
      if (!res) {
        item.ico = '/replace.svg'
      }
    })
  }
  // AI
  data7.value = res.AI
  for (let item of data7.value) {
    isLink(item.ico).then(res => {
      if (!res) {
        item.ico = '/replace.svg'
      }
    })
  }
  // ui框架
  data8.value = res.UIFramework
  for (let item of data8.value) {
    isLink(item.ico).then(res => {
      if (!res) {
        item.ico = '/replace.svg'
      }
    })
  }
  // 重要文档
  data9.value = res.documentation
  for (let item of data9.value) {
    isLink(item.ico).then(res => {
      if (!res) {
        item.ico = '/replace.svg'
      }
    })
  }
  // 自学神器
  data10.value = res.study
  for (let item of data10.value) {
    isLink(item.ico).then(res => {
      if (!res) {
        item.ico = '/replace.svg'
      }
    })
  }
  // 游戏
  data11.value = res.games
  for (let item of data11.value) {
    isLink(item.ico).then(res => {
      if (!res) {
        item.ico = '/replace.svg'
      }
    })
  }
})
</script>

<style scoped>
.staWeb div {
  margin-bottom: 10px;
}

.main {
  width: 100%;
  flex: 1;
  display: flex;
  gap: 20px;
}

.sidebar {
  width: 120px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 12px;
}

.sidebar>a {
  cursor: pointer;
  transition: all 200ms;
  text-decoration: none;
  color: black;
}

.sidebar>a:hover {
  color: #3e68f1;
}

.sidebar_right {
  width: 97%;
  height: 100%;
  padding-left: 120px;
  padding-top: 50px;
  padding-bottom: 20px;
  box-sizing: border-box;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

@media screen and (max-width: 550px) {
  .sidebar {
    display: none;
  }

  .sidebar_right {
    padding-left: 0;
    margin: 0 auto;
  }

  .main_item {
    width: 40% !important;
  }
}

.sidebar_right>div {
  width: 100%;
  background-color: white;
  border-radius: 4px;
  padding: 50px 40px;
  box-sizing: border-box;
}

.main_item {
  width: 18%;
  padding: 3px;
  display: flex;
  gap: 2px;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  position: relative;
  transition: all 200ms;
  font-size: 16px;
  text-decoration: none;
  color: black;
}

.main_item span {
  width: 80%;
  padding: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.main_item span:hover {
  width: fit-content;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.main_item:hover::before {
  content: attr(data-title);
  position: absolute;
  background: #231e1e;
  color: white;
  padding: 2px 8px;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  white-space: nowrap;
}

.ico {
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

footer {
  background-color: #f3f3f3;
  padding: 20px 10px;
  font-size: 12px;
  width: 95vw;
  display: flex;
  gap: 60px;
  padding-left: 150px;
  box-sizing: border-box;
}

@media screen and (max-width: 550px){
  footer{
    padding-left: 0;
  }
}

.frLink>a {
  display: flex;
  gap: 5px;
  align-items: center;
  margin-bottom: 5px;
  text-decoration-line: none;
  color: black;
}

.frLink img {
  width: 17px;
}

footer .title {
  font-size: 12px;
  margin-bottom: 10px;
  padding: 4px 6px;
  background-color: #231e1e;
  color: white;
  border-radius: 3px;
  width: fit-content;
}

.abinfo_item>span:nth-child(1) {
  margin-right: 10px;
  color: gray;
  width: 60px;
  display: inline-block;
  text-align: justify;
  text-align-last: justify;
}
</style>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>