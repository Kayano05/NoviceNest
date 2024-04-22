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
            <el-submenu index="4">
              <template slot="title">
                <span class="body_title_font"
                  ><router-link
                    to="/AlgorithmIntroduction"
                    class="router-link-active"
                  >
                    Algorithm
                  </router-link></span
                >
              </template>
              <el-menu-item index="4-1" class="body_font">
                <router-link to="/complexityAnalysis"
                  >complexity analysis</router-link
                >
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
          </el-menu>
        </el-aside>
        <el-main>
          <h2 class="h2_font">什么是算法？</h2>
          <p class="font">
            在正式学习算法前，我们先来了解一下什么是算法，我们将从两个方面来了解算法。
          </p>
          <p class="font">首先我们先来看一下比较学术的说法</p>
          <p class="font">
            算法是一系列精确定义的、用于解决特定问题的操作步骤。在计算机科学中，算法是解决问题和执行计算的核心。一个有效的算法通常具有以下特点：
          </p>
          <ul class="h2_font">
            <li>
              <strong>有穷性（Finiteness）：</strong
              >算法必须在有限步骤之后结束，而不是无限循环。
            </li>
            <li>
              <strong>明确性（Definiteness）：</strong
              >算法的每一步都必须有明确的定义，不允许有歧义。
            </li>
            <li>
              <strong> 有效性（Effectiveness）：</strong
              >算法中的操作必须是可行的，也就是说，在有限的时间内能够完成。
            </li>
            <li>
              <strong>输入（Input）：</strong
              >一个算法可以有零个或多个输入，这些输入是算法开始前已知的数据。
            </li>
            <li>
              <strong>输出（Output）：</strong
              >算法至少有一个输出，这个输出是算法执行完毕后的结果。
            </li>
          </ul>
          <p class="font">
            算法可以用于各种不同的任务，比如排序数据、搜索特定项、处理图形问题、执行数学计算等。在设计算法时，通常会考虑以下几个方面的性能指标：
          </p>
          <ul>
            <li><strong>时间复杂度：</strong>评估算法执行所需时间的量度。</li>
            <li>
              <strong>空间复杂度：</strong>评估算法执行所需存储空间的量度。
            </li>
            <li><strong>效率：</strong>算法完成任务的快慢。</li>
            <li>
              <strong>可读性和可维护性：</strong
              >算法代码是否容易理解，是否容易修改和调试。
            </li>
          </ul>
          <p class="font">
            算法可以用伪代码、流程图或任何一种编程语言来表示。在计算机科学中，研究算法的性能和效率是算法理论（Algorithmics）的一部分，它对于软件开发和解决复杂问题至关重要。
          </p>
          <p class="font">那我们接着看比较通俗的解释。</p>
          <p class="font">
            算法简单来说，就是解决问题的一系列步骤。例如做菜菜谱上的一系列步骤，就是一道菜的算法。
          </p>
          <h2 class="h2_font">那我们为什么要学习算法呢？</h2>
          <p class="font">我想从算法的几个作用来谈为什么要学习算法。</p>
          <ul>
            <li>
              <strong>算法是进入大厂的必备能力：</strong
              >大家所熟知的大厂：腾讯，字节跳动，美团，百度等等都需要有算法能力。
            </li>
            <li>
              <strong>算法是一个高性能高价值系统的必备基础：</strong
              >一个好的算法在效率，可维护性，可拓展性，准确性，可靠性上都有不错的表现。
            </li>
            <li>
              <strong>算法也是升职加薪的必备能力：</strong
              >IT这个行业本就是不断变化更新的行业，如果没有扎实的算法基础，就很难成为高阶程序员。
            </li>
            <li>
              <strong>算法的薪资要远远高于开发岗：</strong
              >大厂的算法岗年薪在40w到无上限，而普通开发岗大概在40w封顶。
            </li>
          </ul>
          <p class="font">
            如果你早就扎根于IT行业，或者已经学习了很久的IT，那你一定听过一句话，就是：“算法是程序的灵魂。”
          </p>
          <span style="color: chartreuse; font-family: Ayuthaya"
            >本网站均采用LeetCode算法题来示例说明。</span
          >

          <span style="font-family: Ayuthaya; color: red"
            >请至少具备一种语言的编程基础，能够简单阅读和编写简单代码。
            本章节将采取Python，Java两种代码来演示(java代码的函数将采取静态方法)。</span
          >
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
</script>

<style>
</style>