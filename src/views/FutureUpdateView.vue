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
                  未来期愿
                </span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1" class="body_font">
                  <router-link to="/FUkotlin">Kotlin</router-link>
                </el-menu-item>
                <el-menu-item index="1-2" class="body_font">
                  <router-link to="/FUswift">Swift</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <p class="font">这是一个未来愿景的规划页面。我们收集了部分用户对未来功能的期望，并在这里展示出来。
            我们已经或者会在未来开展在本页面提到的规划。左边侧边栏是未来规划的名称，右边是具体内容。</p>
          <p class="font">
            Kotlin和Swift的专栏内容也已经提上了日程。还有什么愿景欢迎在
            <router-link to="/aboutUs" class="router-link-active">About Us</router-link>
            页面进行反馈。
          </p>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>

</style>

<script>

</script>