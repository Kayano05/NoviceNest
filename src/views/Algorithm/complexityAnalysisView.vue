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
        >
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
                <router-link to="/complexityAnalysis">Complexity Analysis</router-link>
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
        </el-aside
        >
        <el-main>
          <h2 class="h2_font">复杂度分析</h2>
          <p class="font">一般来说，我们遇到一个算法题，我们会有以下两个追求。</p>
          <p class="font">(1)寻找该题的一般解。</p>
          <p class="font">(2)在(1)的基础上，尽可能优化自己的算法。</p>
          <p class="font">第一点比较好理解，无非就是就是给出一个解，完全可以采用暴力穷举，模拟。
            反正现在计算机的性能十分强大，用来训练AI已经是常事，想必一道算法题还不足以榨干计算机的性能。
            但是，如果这样的话，完全背离了我们学习算法的初衷。
            我们学习算法是为了做出高性能高速率的程序或者是应用，你也不想每次加载网页或者游戏的时候都要等上好几分钟吧。
          </p>
          <h3 class="h2_font">那么，我们用什么标准来判断一个算法的好坏呢？</h3>
          <p class="font">一般来说，我们有两个标准来判断来一个算法的好坏。</p>
          <p class="font">(1)时间复杂度</p>
          <p class="font">(2)空间复杂度</p>
          <p class="font">本章节，我们主要讨论时间复杂度，而不着重讨论空间复杂度。原因主要有以下几点。</p>
          <p class="font">(1)用户体验方面：一般来说，用户对应用的加载时间更敏感，对存储空间的占用不会那么敏感。</p>
          <p class="font">(2)资源方面：随着存储设备价格的下降，存储空间已经不再是大多数用户的在意点。
            总的来说，与时间相比，空间资源显得更便宜。</p>
          <p class="font">那么，接下来我们着重讲一下时间复杂度。</p>
          <h2 class="h2_font">时间复杂度</h2>
          <h3 class="h2_font">什么是时间复杂度？</h3>
          <p class="font">顾名思义，时间复杂度就是评判算法运行的速率(并不是程序运行的具体时间)。</p>
          <p class="font"></p>
          <p class="font"></p>
          <p class="font"></p>
          <p class="font"></p>
          <p class="font"></p>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
</style>

<script>
</script>