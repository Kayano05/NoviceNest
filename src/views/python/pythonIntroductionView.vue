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
          ><el-menu>
            <el-submenu index="1">
              <template slot="title">
                <span class="body_title_font">
                  <router-link
                    to="/pythonIntroductionView"
                    class="router-link-active"
                    >Python</router-link
                  >
                </span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1" class="body_font"
                  ><router-link to="/BasicGrammar" class="router-link-active"
                    >Basic grammar</router-link
                  ></el-menu-item
                >
                <el-menu-item index="1-2" class="body_font"
                  ><router-link to="/DataCleaningAndAnalysisView">
                    Data cleaning and analysis
                  </router-link></el-menu-item
                >
                <el-menu-item index="1-3" class="body_font"
                  ><router-link to="/webDevelopment">
                    web development
                  </router-link></el-menu-item
                >
                <el-menu-item index="1-4" class="body_font"
                  ><router-link to="/webCrawler">
                    web crawler
                  </router-link></el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
          </el-menu></el-aside
        >
        <el-main>
          <h2 class="h2_font">Python的前世今生</h2>
          <p class="font">
            Python是一种广泛使用的高级编程语言，由Guido van
            Rossum于1989年底发明，第一个公开发行版发行于1991年。Python的设计哲学强调代码的可读性和简洁的语法（尤其是使用空格缩进来表示代码块，而不像其他语言使用大括号或关键字）。Python让开发者能够用更少的代码行进行表达，意图是让程序员能够工作得更加高效，以及代码更易于理解和维护。
          </p>
          <h3 class="h2_font">前世：Python的起源与发展</h3>
          <p class="font">
            Python的起源可以追溯到20世纪80年代末，当时Guido van
            Rossum在荷兰的CWI（Centrum Wiskunde &
            Informatica，荷兰数学和计算机科学研究机构）工作。Guido当时参与了一个名为ABC语言的项目，这是一种用于教学编程的语言。尽管ABC语言从未广泛流行，它的一些设计理念对Python产生了深远的影响。
            Guido van
            Rossum在1989年的圣诞节期间开始着手开发Python，他的目标是将ABC语言的优点与他对脚本语言的需求结合起来。他希望这种新的编程语言易于扩展，能够处理异常，并且能够接口到操作系统中的调用。1991年，第一个Python编译器（用C语言编写）诞生，Python
            0.9.0随之发布。
          </p>
          <h3 class="h2_font">今生：Python的流行与演进</h3>
          <p class="font">
            自发布以来，Python迅速在开发者社区中流行起来，其增长得益于多个因素
          </p>
          <ul class="h2_font">
            <li>
              <strong>开放源代码</strong>
              ：Python的源代码可以被任何人自由地使用、研究和改进。
            </li>
            <li>
              <strong>简洁的语法</strong
              >Python的语法设计让编程更加直观和易于学习。
            </li>
            <li>
              <strong>强大的标准库</strong
              >：Python拥有一个庞大的标准库，提供了广泛的模块和功能，无需额外的安装和配置。
            </li>
            <li>
              <strong>社区支持</strong
              >：Python有一个非常活跃和支持性的社区，不断贡献新的模块和改进。
            </li>
            <li>
              <strong>跨平台</strong
              >：Python可以在多种操作系统上运行，这使得它非常适合开发跨平台的应用程序。
            </li>
          </ul>
          <p class="font">
            Python的版本演进经历了多个阶段，其中比较重要的版本包括：
          </p>
          <ul class="h2_font">
            <li>
              <strong>Python 2.x系列</strong>：这个系列的主要版本是Python
              2.0，它在2000年发布，引入了许多重要的特性和改进。
            </li>
            <li>
              <strong>Python 3.x系列</strong>：Python
              3.0，也被称为"Py3K"，是一个重要的更新，它在2008年发布。这个版本引入了一些不向后兼容的改变，旨在修复语言中的一些设计缺陷，并简化某些部分。尽管这个过渡带来了一些挑战，但Python
              3被认为是Python的未来，并且得到了社区的大力支持。
            </li>
          </ul>
          <h2 class="h2_font">Python的应用领域</h2>
          <p class="font">Python因其易用性和多功能性，被广泛应用于多个领域：</p>
          <ul class="h2_font">
            <li>
              <strong>网站开发</strong
              >：Python提供了多个框架，如Django和Flask，用于快速开发复杂的网站。
            </li>
            <li>
              <strong>科学计算和数据分析</strong
              >：Python有NumPy、Pandas等库，用于处理大量的数据并进行复杂的分析。
            </li>
            <li>
              <strong>人工智能和机器学习</strong
              >：Python是机器学习领域最受欢迎的语言之一，有TensorFlow、PyTorch等库支持。
            </li>
            <li>
              <strong>自动化脚本</strong
              >：Python常用于编写自动化脚本，以简化日常任务。
            </li>
            <li>
              <strong>教育</strong
              >：由于其简单性和易读性，Python经常被用作编程教育的入门语言。
            </li>
          </ul>
          <h2 class="h2_font">未来展望</h2>
          <p class="font">
            Python的未来看起来非常光明。随着数据科学、人工智能和机器学习领域的持续增长，Python作为这些领域的主要语言之一，其地位和影响力预计将持续上升。Python社区不断努力改进语言，增加新的特性和性能改进。此外，随着物联网和云计算的兴起，Python在处理大规模数据和构建分布式系统方面的能力，使其成为这些领域的重要工具。
          </p>
          <p class="font">
            总体来说，Python是一种强大而灵活的编程语言，它的设计哲学和开放源代码的精神使它成为了全球范围内广泛使用和喜爱的语言。从其简单的起源到一个拥有庞大生态系统和社区支持的语言，Python的旅程证明了简洁和可读性在编程语言设计中的重要性。随着技术的不断进步，Python无疑将继续在其适用的任何领域中发挥重要作用。
          </p>
          <p class="font">
            现在点击
            <span style="color: aquamarine">此处</span>
            或者前往环境配置中的Pycharm和Python进行开发环境和Python环境配置
          </p>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
@import url("../python/pythonTempCss/h2_font.css");
@import url("../python/pythonTempCss/font.css");
</style>

<script>
</script>
