<template>
  <div>
    <el-container>
      <el-header style="height: 100px; background-color: black">
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
        >
          <el-menu>
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
                <el-menu-item index="1-1" class="body_font">
                  <router-link to="/BasicGrammar">Basic grammar</router-link>
                </el-menu-item>
                <el-menu-item index="1-2" class="body_font">
                  <router-link to="/DataCleaningAndAnalysisView">
                    Data cleaning and analysis
                  </router-link>
                </el-menu-item>
                <el-menu-item index="1-3" class="body_font">
                  <router-link to="/webDevelopment">
                    web development
                  </router-link>
                </el-menu-item>
                <el-menu-item index="1-4" class="body_font">
                  <router-link to="/webCrawler"> web crawler</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
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
                <el-menu-item index="2-1" class="body_font">
                  <router-link to="/JavaBasicGrammar">
                    Basic grammar
                  </router-link>
                </el-menu-item>

                <el-menu-item index="2-2" class="body_font">
                  <router-link to="/JavaWebDevelopment">
                    web development
                  </router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <span class="body_title_font">Interview</span>
              </template>
              <el-menu-item index="3-1" class="body_font">
                <router-link to="/PythonInterview">Python</router-link>
              </el-menu-item>
              <el-menu-item index="3-2" class="body_font">
                <router-link to="/JavaInterview">Java</router-link>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <span class="body_title_font">
                  <router-link to="/AlgorithmIntroduction" class="router-link-active">
                    Algorithm
                  </router-link>
                </span>
              </template>
              <el-menu-item index="4-1" class="body_font">
                <router-link to="/complexityAnalysis"> Complexity analysis
                </router-link>
              </el-menu-item>
              <el-menu-item index="4-2" class="body_font">
                <router-link to="/AsymptoticComplexityAnalysis">
                  Asymptotic Complexity Analysis
                </router-link>
              </el-menu-item>
              <el-menu-item index="4-3" class="body_font">
                <router-link to="/Complexity"> Complexity</router-link>
              </el-menu-item>
              <el-menu-item index="4-4" class="body_font">
                <router-link to="/Iteration"> Iteration</router-link>
              </el-menu-item>
              <el-menu-item index="4-5" class="body_font">
                <router-link to="/Recursion"> Recursion</router-link>
              </el-menu-item>
              <el-menu-item index="4-6" class="body_font">
                <router-link to="/Big-ONotation"> Big-O notation</router-link>
              </el-menu-item>
              <!-- 静态初始化数组，动态初始化数组 -->
              <el-menu-item index="4-7" class="body_font">
                <router-link to="/Array"> Array</router-link>
              </el-menu-item>
              <el-menu-item index="4-8" class="body_font">
                <router-link to="/Index">Index</router-link>
              </el-menu-item>
              <el-menu-item index="4-9" class="body_font">
                <router-link to="/LinkedList"> Linked List</router-link>
              </el-menu-item>
              <el-menu-item index="4-10" class="body_font">
                <router-link to="/Stack"> Stack</router-link>
              </el-menu-item>
              <!-- 哈希函数，哈希冲突，负载因子 -->
              <el-menu-item index="4-11" class="body_font">
                <router-link to="/Hash">Hash</router-link>
              </el-menu-item>
              <el-menu-item index="4-12" class="body_font">
                <router-link to="/BinarySearch">Binary Search</router-link>
              </el-menu-item>
              <!-- 选择，冒泡，插入，快速，归并 -->
              <el-menu-item index="4-13" class="body_font">
                <router-link to="/Sort">Sort</router-link>
              </el-menu-item>
              <el-menu-item index="4-14" class="body_font">
                <router-link to="/GreedyAlgorithm">
                  Greedy Algorithm
                </router-link>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <span class="body_title_font">
                  <router-link to="/Environment Configuration" class="router-link-active">
                  Environment Configuration</router-link>
                </span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="5-1" class="body_font">
                  <router-link to="/PythonEC"> Python</router-link>
                </el-menu-item>

                <el-menu-item index="5-2" class="body_font">Java</el-menu-item>
                <el-menu-item index="5-3" class="body_font"
                >VsCode
                </el-menu-item
                >
                <el-menu-item index="5-4" class="body_font"
                >IntelliJ IDEA
                </el-menu-item
                >
                <el-menu-item index="5-5" class="body_font"
                >Pycharm
                </el-menu-item
                >
                <el-menu-item index="5-6" class="body_font"
                >GataGrip
                </el-menu-item
                >
                <el-menu-item index="5-7" class="body_font">Vue</el-menu-item>
                <el-menu-item index="5-8" class="body_font"
                >Element UI
                </el-menu-item
                >
                <el-menu-item index="5-9" class="body_font"
                >Nodejs
                </el-menu-item
                >
                <el-menu-item index="5-10" class="body_font"
                >Nginx
                </el-menu-item
                >
                <el-menu-item index="5-11" class="body_font"
                >Jupyter NoteBook
                </el-menu-item
                >
                <el-menu-item index="5-12" class="body_font"
                >Maven
                </el-menu-item
                >
                <el-menu-item index="5-13" class="body_font"
                >Springboot web
                </el-menu-item
                >
                <el-menu-item index="5-14" class="body_font"
                >MySql
                </el-menu-item
                >
                <el-menu-item index="5-15" class="body_font"
                >Mybatis
                </el-menu-item
                >
                <!-- <el-menu-item index="5-16" class="body_font"
                  >Mybatis</el-menu-item
                > -->
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <h2 style="font-family: Ayuthaya">欢迎来到新手窝</h2>
          <p class="font" style="color: red">
            在阅读本网站之前，请全屏使用浏览器，以免造成部分页面显示不全。
          </p>
          <p class="font">
            本网站旨在为编程自学者提供基础教学以及主流技术栈的使用，包括但不限于Python，Java，面试题，算法，环境配置。语言相关的技术栈在该语言导航栏下(例如：Java的技术栈Maven在Java导航栏下的Web
            development下的Maven)。
          </p>
          <p class="font">
            我们的宗旨是:
            "能看，能写，能吹"。"能看"，是指看得懂代码，"能写"，就是能独立的写出代码，"能吹"，在面试官面前吹得出来。
          </p>
          <p class="font">
            在正式学习编程语言之前，我们有必要先了解一下什么是编程语言。
          </p>
          <span class="h2_font"
          ><strong>编程与编程语言：</strong>理解计算机世界的桥梁
          </span>
          <ul style="font-family: Ayuthaya; line-height: 35px">
            <li>
              <strong>编程概述:</strong
              >编程，即编写程序，是一种将人类思维和需求转化为计算机可执行指令的过程。它是计算机科学的核心，也是连接人类与计算机世界的桥梁。通过编程，我们可以指挥计算机完成各种任务，如数据处理、图像识别、自动化控制等。编程不仅是一项技术活动，更是一种创造性思维和问题解决能力的体现。
              编程的历史可以追溯到20世纪40年代，当时的程序员们使用机器语言编写程序，这是一种直接操作计算机硬件的语言。随着计算机技术的发展，编程语言不断进化，从低级语言到高级语言，从过程式编程到面向对象编程，编程技术也在不断进步，为开发者提供了更多便捷和高效的工具。
            </li>
            <li>
              <strong>编程语言的重要性:</strong
              >编程语言是编程的基础，它定义了如何表达算法和逻辑。每种编程语言都有自己独特的语法、关键字和结构，这些元素组合在一起，构成了程序员与计算机交流的“语言”。编程语言的重要性体现在以下几个方面：
              <p>
                1.提高开发效率：高级编程语言的出现，使得程序员可以用更接近自然语言的代码来编写程序，大大提高了开发效率。
              </p>
              <p>
                2.简化问题求解：编程语言提供了一系列抽象层，帮助程序员将复杂问题分解为简单模块，从而简化问题求解过程。
              </p>
              <p>
                3.促进技术进步：编程语言的发展推动了计算机相关技术的进步，如操作系统、数据库、网络通信等。
              </p>
              <p>
                4.丰富应用领域：编程语言的多样性使得计算机技术可以应用于各个领域，如科学研究、工业生产、教育培训等。
              </p>
            </li>
            <li>
              <strong>编程语言的分类:</strong
              >编程语言有多种分类方法，常见的有按层次分类、按编程范式分类和按应用领域分类。
              <p class="font">按层次分类：</p>
              <p class="font">
                （1）低级语言：接近计算机硬件的语言，如机器语言和汇编语言。它们直接与计算机的硬件架构相关，难以理解和编写，但执行效率高。
              </p>
              <p class="font">
                （2）高级语言：更接近人类语言的编程语言，如Python、Java、C++等。它们易于理解和编写，通常需要通过编译器或解释器转换为机器语言。
              </p>
              <p class="font">
                （3）标记语言：用于标记电子文档中的文本，如HTML、XML。它们主要用于数据展示和样式定义，而不是执行程序逻辑。
              </p>
              <p class="font">按编程范式分类:</p>
              <p class="font">
                （1）过程式编程语言：以过程为中心，将程序划分为一系列的函数或过程，如C、Pascal、Fortran等。
              </p>
              <p class="font">
                （2）面向对象编程语言：以对象为中心，将数据和操作数据的方法封装在一起，如Java、C++、Python等。
              </p>
              <p class="font">
                （3）函数式编程语言：强调使用函数来处理数据，如Haskell、Erlang、Scala等。
              </p>
              <p class="font">
                （4）逻辑编程语言：基于形式逻辑，通过推理来解决问题，如Prolog。
              </p>
              <p class="font">按应用领域分类：</p>
              <p class="font">
                （1）通用编程语言：适用于多种应用领域的编程语言，如Python、Java、C++等。
              </p>
              <p class="font">
                （2）专用编程语言：针对特定应用领域设计的编程语言，如SQL（数据库查询语言）、MATLAB（数学计算语言）等。
              </p>
            </li>
            <li>
              <strong>编程语言的发展趋势:</strong
              >随着计算机技术的不断进步，编程语言也在不断发展。以下是一些编程语言的发展趋势：
            </li>
            <p class="font">
              高级化：编程语言将越来越接近自然语言，使编程更加容易和理解。
            </p>
            <p class="font">
              集成化：编程语言将集成更多的功能和库，为开发者提供更多便捷的工具。
            </p>
            <p class="font">
              多范式：编程语言将支持多种编程范式，如面向对象、函数式、逻辑式等，以满足不同应用需求。
            </p>
            <p class="font">
              安全性：编程语言将更加注重安全性，提供更多的安全特性和机制，以防止漏洞和攻击。
            </p>
            <p class="font">
              并发与并行：随着多核处理器和分布式计算的发展，编程语言将更好地支持并发和并行编程。
            </p>
            <p class="font">
              适应性：编程语言将更好地适应不同平台和设备，如移动设备、云计算平台等。
            </p>
          </ul>
          <p class="font">
            总之，编程和编程语言是计算机科学的基础，它们为人类与计算机世界搭建了沟通的桥梁。随着技术的不断进步，编程语言将继续发展，为开发者提供更多便捷和高效的工具，助力计算机技术的创新与应用。
          </p>
          <p class="font">
            本网站的所有超链接都进行了下划线隐藏和继承父元素颜色，当您看到一些您觉得可能是超链接的文字，完全可以尝试点击该文字。
          </p>
          <p class="font">
            本网站的后端开发均使用jetbrains公司旗下的各类IDE。前端开发均使用VScode。
          </p>
          <P class="font">
            <a
                href="https://github.com/Kayano05/NoviceNestWeb"
                target="_blank"
                class="router-link-active"
                style="color: skyblue"
            >本网站已经在GitHub上开源</a
            >
          </P>
          <p class="font">
            <span
            >请点击此处查看本网站的<span style="color: red">,版权信息</span>
              <span style="color: red">,隐私政策</span>
              <span style="color: red">,免责声明。</span>
            </span>
          </p>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
@import url(../CSS/font.css);
@import url(../CSS/title.css);
@import url(../CSS/body_font.css);
@import url(../CSS/body_title_font.css);
@import url(../CSS/router-link-active.css);
@import url(../CSS/h2_font.css);
</style>

<script>
</script>