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
                <span class="body_title_font">
                  <router-link to="/BasicGrammar" class="router-link-active"
                    >Basic grammar</router-link
                  >
                </span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1" class="body_font">
                  <router-link to="">Hello World</router-link>
                </el-menu-item>
                <el-menu-item index="1-2" class="body_font">
                  <router-link to="">变量</router-link>
                </el-menu-item>
                <el-menu-item index="1-3" class="body_font">
                  <router-link to="">字符串</router-link>
                </el-menu-item>
                <el-menu-item index="1-4" class="body_font">
                  <router-link to="">数</router-link>
                </el-menu-item>
                <el-menu-item index="1-5" class="body_font">
                  <router-link to="">注释</router-link>
                </el-menu-item>
                <el-menu-item index="1-6" class="body_font">
                  <router-link to="">列表</router-link>
                </el-menu-item>
                <el-menu-item index="1-7" class="body_font">
                  <router-link to="">元组</router-link>
                </el-menu-item>
                <el-menu-item index="1-8" class="body_font">
                  <router-link to="">字典</router-link>

                  <!-- <el-menu-item index="1-14" class="body_font">
                  <router-link to=""></router-link>
                </el-menu-item>
                <el-menu-item index="1-15" class="body_font">
                  <router-link to=""></router-link>
                </el-menu-item>
                <el-menu-item index="1-16" class="body_font">
                  <router-link to=""></router-link>
                </el-menu-item>
                <el-menu-item index="1-17" class="body_font">
                  <router-link to=""></router-link>
                </el-menu-item>
                <el-menu-item index="1-18" class="body_font">
                  <router-link to=""></router-link>
                </el-menu-item>
                <el-menu-item index="1-19" class="body_font">
                  <router-link to=""></router-link>
                </el-menu-item>
                <el-menu-item index="1-20" class="body_font">
                  <router-link to=""></router-link>
                </el-menu-item>
                <el-menu-item index="1-21" class="body_font">
                  <router-link to=""></router-link>
                </el-menu-item>
                <el-menu-item index="1-22" class="body_font">
                  <router-link to=""></router-link>
                </el-menu-item>
                <el-menu-item index="1-23" class="body_font">
                  <router-link to=""></router-link>
                </el-menu-item>
                <el-menu-item index="1-24" class="body_font">
                  <router-link to=""></router-link>
                </el-menu-item>
                <el-menu-item index="1-25" class="body_font">
                  <router-link to=""></router-link>
                </el-menu-item>
                <el-menu-item index="1-26" class="body_font">
                  <router-link to=""></router-link>
                </el-menu-item>
                <el-menu-item index="1-27" class="body_font">
                  <router-link to=""></router-link>
                </el-menu-item>
                <el-menu-item index="1-28" class="body_font">
                  <router-link to=""></router-link>
                </el-menu-item>
                <el-menu-item index="1-29" class="body_font">
                  <router-link to=""></router-link>
                </el-menu-item>
                <el-menu-item index="1-30" class="body_font">
                  <router-link to=""></router-link>
                </el-menu-item>
                <el-menu-item index="1-31" class="body_font">
                  <router-link to=""></router-link>
                </el-menu-item>
                <el-menu-item index="1-32" class="body_font">
                  <router-link to=""></router-link>
                </el-menu-item>
                <el-menu-item index="1-33" class="body_font">
                  <router-link to=""></router-link>
                </el-menu-item>
                <el-menu-item index="1-34" class="body_font">
                  <router-link to=""></router-link>
                </el-menu-item>
                <el-menu-item index="1-35" class="body_font">
                  <router-link to=""></router-link>
                </el-menu-item>
                <el-menu-item index="1-36" class="body_font">
                  <router-link to=""></router-link>
                </el-menu-item>
                <el-menu-item index="1-37" class="body_font">
                  <router-link to=""></router-link>
                </el-menu-item>                 -->
                </el-menu-item>
                <el-menu-item index="1-9" class="body_font">
                  <router-link to="">用户输入</router-link>
                </el-menu-item>
                <el-menu-item index="1-10" class="body_font">
                  <router-link to="">if-elif-else</router-link>
                </el-menu-item>
                <el-menu-item index="1-11" class="body_font">
                  <router-link to="">while</router-link>
                </el-menu-item>
                <el-menu-item index="1-12" class="body_font">
                  <router-link to="">函数</router-link>
                </el-menu-item>
                <el-menu-item index="1-13" class="body_font">
                  <router-link to="">类</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
</style>

<script>
</script>