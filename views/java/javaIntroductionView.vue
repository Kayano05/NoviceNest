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
        <el-aside width="350px"
          ><el-menu
            ><el-submenu index="2">
              <template slot="title">
                <span class="body_title_font">
                  <router-link
                    to="/javaIntroductionView"
                    class="router-link-active"
                    >Java</router-link
                  >
                </span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1" class="body_font"
                  >Basic grammar</el-menu-item
                >

                <el-menu-item index="2-2" class="body_font"
                  >web development</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu></el-menu
          >
        </el-aside>
        <el-main>
          <h2 class="h2_font">Java的前世今生</h2>
          <p class="font">
            Java是一种广泛使用的高级编程语言，由James Gosling于1991年在Sun
            Microsystems公司领导的小组中开发，第一个公开发行版Java
            1.0于1995年发布。Java的设计哲学强调代码的跨平台性、对象导向和稳健性。Java让开发者能够编写一次代码，在任何支持Java的平台上运行，意图是让程序员能够工作得更加高效，以及代码更易于理解和维护。
          </p>
          <h3 class="h2_font">前世：Java的起源与发展</h3>
          <p class="font">
            Java的起源可以追溯到20世纪90年代初，当时James Gosling在Sun
            Microsystems工作。最初，Java的开发目标是用于交互式电视，但是随着市场的变化，这个目标转变了。1991年，Green项目启动，旨在开发一种新的编程语言，用于消费电子产品。Oak是Java的前身，但是由于商标问题，最终被命名为Java。1995年，Java
            1.0发布，迅速在开发者社区中流行起来。
          </p>
          <h3 class="h2_font">今生：Java的流行与演进</h3>
          <p class="font">
            自发布以来，Java迅速在开发者社区中流行起来，其增长得益于多个因素：
          </p>
          <ul class="h2_font">
            <li>
              <strong>跨平台性</strong>
              ：Java的口号是"一次编写，到处运行"，这意味着Java可以在任何支持Java虚拟机（JVM）的平台上运行。
            </li>
            <li>
              <strong>对象导向</strong>
              ：Java是一种纯粹的面向对象编程语言，这使得编程更加模块化和易于维护。
            </li>
            <li>
              <strong>稳健性</strong>
              ：Java的强类型机制和异常处理使得程序更加健壮和安全。
            </li>
            <li>
              <strong>标准库</strong>
              ：Java拥有一个庞大的标准库，提供了广泛的API，无需额外的安装和配置。
            </li>
            <li>
              <strong>社区支持</strong>
              ：Java有一个非常活跃和支持性的社区，不断贡献新的框架和工具。
            </li>
          </ul>
          <p class="font">
            Java的版本演进经历了多个阶段，其中比较重要的版本包括：
          </p>
          <ul class="h2_font">
            <li>
              <strong>Java 1.0</strong>
              ：这个版本标志着Java的正式发布，提供了基础的语言特性和库。
            </li>
            <li>
              <strong>Java 2 Standard Edition (J2SE)</strong>
              ：这个版本在1998年发布，引入了许多重要的特性和改进，包括JavaBeans和集合框架。
            </li>
            <li>
              <strong>Java Platform Enterprise Edition (J2EE)</strong>
              ：这个版本在1999年发布，为大型企业级应用提供了支持。
            </li>
            <li>
              <strong>Java 5.0</strong>
              ：这个版本在2004年发布，引入了泛型、枚举和自动装箱等特性。
            </li>
            <li>
              <strong>Java 8</strong>
              ：这个版本在2014年发布，是Java历史上最重要的更新之一，引入了Lambda表达式和Stream
              API。
            </li>
            <li>
              <strong>Java 9及以后</strong>
              ：Java
              9引入了模块化系统，随后的版本继续引入了新的语言特性和性能改进。
            </li>
          </ul>
          <h2 class="h2_font">Java的应用领域</h2>
          <p class="font">
            Java因其跨平台性、对象导向和稳健性，被广泛应用于多个领域：
          </p>
          <ul class="h2_font">
            <li>
              <strong>企业级应用</strong>
              ：Java是开发大型企业级应用的首选语言，有Spring和Hibernate等框架支持。
            </li>
            <li>
              <strong>Android应用开发</strong>
              ：Java是Android平台的主要开发语言，用于开发Android应用。
            </li>
            <li>
              <strong>大数据处理</strong>
              ：Java有Hadoop和Spark等框架，用于处理大量的数据。
            </li>
            <li>
              <strong>云计算</strong>
              ：Java在云计算领域也有广泛的应用，如开发云服务和管理云资源。
            </li>
            <li>
              <strong>教育</strong
              >：Java是许多计算机科学和编程课程的主要教学语言，适合初学者学习编程。
            </li>
          </ul>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
</script>

<style>
</style>