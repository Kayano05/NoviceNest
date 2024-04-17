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
                  前端开发
                </span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1" class="body_font">
                    <router-link to="/kayano">
                        茅野あさひ
                    </router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <h2 class="h2_font">这是一个关于我们开发团队的页面</h2>
          <p class="font">
            本页面是开发团队的页面，不直接参与全项目但对项目有包括但不限于建议，修改，纠错的人员在<span>AcknowledgementView</span>页面
          </p>
          <p class="font">
            项目从2023年年末初步立项，2024年正式开始进行开发工作。自项目立项到正式开发，开发者都非常少，至2024年4月12日一直都是<span>茅野あさひ</span>独立开发。
          </p>
          <p class="font"></p>
          <p class="font"></p>
          <p class="font"></p>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
</script>

<style>
@import url(../CSS/font.css);
@import url(../CSS/title.css);
@import url(../CSS/body_font.css);
@import url(../CSS/body_title_font.css);
@import url(../CSS/router-link-active.css);
@import url(../CSS/h2_font.css);
</style>