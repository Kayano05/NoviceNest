<template>
  <div>
    <el-container>
      <el-header style="height: 100px; background-color: rgb(255, 192, 203)">
        <span
          style="
            font-family: Ayuthaya;
            color: aliceblue;
            font-size: 35px;
            display: flex;
            align-items: center;
            height: 100px;
          "
        >
          <router-link to="/">NoviceNest</router-link>
          <!-- 致谢 -->
          <span style="margin-left: 400px; font-size: 25px; color: aqua">
            <router-link to="/Acknowledgement" class="router-link-active"
              >Acknowledgement</router-link
            >
          </span>
          <!-- 未来更新 -->
          <span style="margin-left: 100px; font-size: 25px; color: aqua">
            <router-link to="/FutureUpdate" class="router-link-active">
              Future update
            </router-link>
          </span>
          <!-- 更新日志 -->
          <span style="margin-left: 100px; font-size: 25px; color: aqua">
            <router-link to="/UpdataLog" class="router-link-active"
              >Updata Log</router-link
            >
          </span>
          <!-- 关于我们 -->
          <span style="margin-left: 100px; font-size: 25px; color: aqua">
            <router-link to="/aboutUs" class="router-link-active"
              >About us</router-link
            > </span
          ><span> </span>
        </span>
      </el-header>
      <el-container>
        <el-aside width="350px">
          <el-menu>
            <el-submenu index="1">
              <template slot="title">
                <span class="body_title_font">前端开发</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1" class="body_font">
                  <router-link to="/kayano"> 茅野あさひ</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <span class="font" style="color: rgb(255, 192, 203);"> <img
            src="../personalProfile/imgs/kayano.png"
            width="150px"
            height="150px"
        
          /> <span style="margin-left: 20px;">要在规矩最多的地方弹奏最自由的声音。</span> </span>
          <h2 class="h2_font">茅野あさひ</h2>
          <p class="font">
            日语专业学生，是本项目的主要负责人，了解Python基础语法，JavaSE，Web开发。在本网站中负责前后端双端开发。在本网站中，主要撰写Python基础语法，Java基础语法，JavaWeb开发，部分算法题，部分环境配置，部分面试题。也负责未来Kotlin页面的撰写与开发。
          </p>
          <p class="font">联系邮箱：Kayano04@outlook.jp</p>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
</script>
<style>
@import url("../personalProfile/pptempCSS/font.css");
@import url("../personalProfile/pptempCSS/h2_font.css");
</style>