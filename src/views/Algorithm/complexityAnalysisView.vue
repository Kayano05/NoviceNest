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
                >Complexity Analysis
                </router-link
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
          <h2 class="h2_font">复杂度分析</h2>
          <p class="font">
            一般来说，我们遇到一个算法题，我们会有以下两个追求。
          </p>
          <p class="font">(1)寻找该题的一般解。</p>
          <p class="font">(2)在(1)的基础上，尽可能优化自己的算法。</p>
          <p class="font">
            第一点比较好理解，无非就是就是给出一个解，完全可以采用暴力穷举，模拟。
            反正现在计算机的性能十分强大，用来训练AI已经是常事，想必一道算法题还不足以榨干计算机的性能。
            但是，如果这样的话，完全背离了我们学习算法的初衷。
            我们学习算法是为了做出高性能高速率的程序或者是应用，你也不想每次加载网页或者游戏的时候都要等上好几分钟吧。
          </p>
          <h3 class="h2_font">那么，我们用什么标准来判断一个算法的好坏呢？</h3>
          <p class="font">一般来说，我们有两个标准来判断来一个算法的好坏。</p>
          <p class="font">(1)时间复杂度</p>
          <p class="font">(2)空间复杂度</p>
          <p class="font">
            本章节，我们主要讨论时间复杂度，而不着重讨论空间复杂度。原因主要有以下几点。
          </p>
          <p class="font">
            (1)用户体验方面：一般来说，用户对应用的加载时间更敏感，对存储空间的占用不会那么敏感。
          </p>
          <p class="font">
            (2)资源方面：随着存储设备价格的下降，存储空间已经不再是大多数用户的在意点。
            总的来说，与时间相比，空间资源显得更便宜。
          </p>
          <p class="font">那么，接下来我们着重讲一下时间复杂度。</p>
          <h2 class="h2_font">时间复杂度</h2>
          <h3 class="h2_font">什么是时间复杂度？</h3>
          <p class="font">
            顾名思义，时间复杂度就是评判算法运行的速率(并不是程序运行的具体时间)，
            它揭示了数据输入量与运行时间之间的关系。
          </p>
          <p class="font">
            时间复杂度一般用大O符号表示，它表示的是一个函数，这部分我们会专门在一个章节来讨论。
          </p>
          <p class="font">
            那么，我们为什么不直接获取一个程序或者说是一段代码的运行时间呢？
          </p>
          <p class="font">
            实际上，要获得一段代码的准确运行时间有以下几个难点。
          </p>
          <p class="font">
            (1)选择代码运行的平台。不同的平台或者不同的硬件配置会造成代码运行的时间出现出入。
          </p>
          <p class="font">(2)确定每一个代码操作的运行时间。</p>
          <p class="font">(3)加上所有代码运行的时间。</p>
          <p class="font">
            但实际上，这样做是不切合实际的，首先代码不一定只在一个平台运行，例如java的口号“一次编译，到处运行。”</p>
          <p class="font">所以我们用时间复杂度来评估一个算法随输入数据量大小的变化趋势。</p>
          <p class="font">以下是常见的时间复杂度：</p>
          <ul class="h2_font">
            <li><strong>常数时间 O(1):</strong>算法执行的时间不随输入规模 n 的变化而变化。</li>
            <li><strong>对数时间 O(log n):</strong>算法执行时间随输入规模 n 成对数增长，常见于二分搜索等算法。</li>
            <li><strong>线性时间 O(n):</strong>算法执行时间随输入规模 n 线性增长，例如线性搜索。</li>
            <li><strong>线性对数时间 O(n log n):</strong>算法执行时间是 n 与 log n 的乘积，
              常见于快速排序、归并排序等分治算法。
            </li>
            <li><strong>平方时间 O(n^2):</strong>算法执行时间随输入规模 n 的平方增长，例如简单选择排序或冒泡排序。</li>
            <li><strong>立方时间 O(n^3):</strong>算法执行时间随输入规模 n 的立方增长，某些复杂的排序或搜索算法可能具有这种时间复杂度。
            </li>
            <li><strong>指数时间 O(2^n):</strong>算法执行时间随输入规模 n 的指数增长，如暴力搜索算法。</li>
            <li><strong>阶乘时间 O(n!):</strong>算法执行时间是 n 的阶乘，这类算法效率极低，通常用于穷举所有可能性的场景。
            </li>
            <li><strong>次线性时间:</strong>对于某些特定的数据结构和算法，存在亚线性时间复杂度，如 O(sqrt(n)) 或 O(log
              n)，这些算法在大数据集上特别有效。

            </li>
          </ul>
          <p class="font">看下面的例子(例1):</p>
          <p class="font">
              <pre>
                <code class="python">
                  def example_1(n : int):
                      return 1
                </code>
              </pre>
          </p>
          <p class="font">猜测一下，这个函数的时间复杂度是多少？</p>
          <p class="font">显而易见，这个函数的时间复杂度是常数时间时间复杂度。
            因为我们不论传给example_1这个函数的n是多大，函数本身也只是给我们返回一个数字1。</p>
          <p class="font">我们接着看例2</p>
          <p class="font">
            <pre>
              <code class="python">
                def example_2(n : int):
                    for i in range(n):
                        print(i)
                </code>
              </pre>
          </p>
          <p class="font">
            这个函数的时间复杂度是线性时间。
            因为在这个函数中，我们使用了一个for循环，并且这个for循环的循环次数是n。
            所以，这个函数的时间复杂度是O(n)。
          </p>
          <p class="font">
            我们接着看例3
          </p>
          <p class="font">
            <pre>
              <code class="python">
                def example_3(n : int):
                    for i in range(n):
                        for j in range(n):
                            print(i, j)
              </code>
            </pre>
          </p>
          <p class="font">
            这个函数的时间复杂度是平方时间。
            因为在这个函数中，我们使用了两个for循环，并且这两个for循环的循环次数都是n。
            所以，这个函数的时间复杂度是O(n^2)。

          </p>
          <p class="font">接下来看例4</p>
          <p class="font">
            <pre>
              <code class="python">
                def example_4(n : int):
                    for i in range(n):
                        for j in range(n):
                            for k in range(n):
                                print(i, j, k)
              </code>
            </pre>
          </p>
          <p class="font">
            这个函数的时间复杂度是立方时间。
            因为在这个函数中，我们使用了三个for循环，并且这三个for循环的循环次数都是n。
            所以，这个函数的时间复杂度是O(n^3)。
          </p>
          <p class="font">接着我们看例5</p>
          <p class="font">
            <pre>
              <code class="python">
                def example_5(nums : list[int],target : int):
                    left : int  = 0
                    right : int = len(nums) - 1
                    while left &lt;= right:
                        mid : int = (left + right) // 2
                        if nums[mid] == target:
                            return mid
                        elif nums[mid] &lt; target:
                            left = mid + 1
                        else:
                            right = mid - 1
                    return -1
              </code>
            </pre>
          </p>
          <p class="font">这是一个经典的二分查找，他的复杂度是O(log
            n)。其中n是数组的长度。为啥是对数时间复杂度呢？我们将在算法章节下的二分查找那一章具体讲解。</p>

          <p class="font">时间复杂度我们就先说这么多，我们将在后面每个算法的具体讲解中来仔细探讨。</p>
          <p class="font">以下是上面几个例子的java实现。</p>
          <p class="font">
            <pre>
              <code class="java">
                public static int example_1(int n){
                    return 1;
                }
              </code>
            </pre>
            <pre>
              <code class="java">
                public static void example_2(int n){
                    for (int i = 0;i &lt; n; i++){
                      System.out.println(i);
                    }
                }
              </code>
            </pre>
            <pre>
              <code class="java">
                public static void example_3(int n){
                    for (int i = 0;i &lt; n; i++){
                        for (int j = 0;j &lt; n; j++){
                            System.out.println(i + " " + j);
                      }
                    }
                }
              </code>
            </pre>
            <pre>
              <code class="java">
                public static void example_4(int n){
                    for (int i = 0;i &lt; n; i++){
                        for (int j = 0;j &lt; n; j++){
                            for (int k = 0;k &lt; n; k++){
                                System.out.println(i + " " + j + " " + k);
                            }
                        }
                    }
                }
              </code>
            </pre>
            <pre>
              <code class="java">
                public static int example_5(int[] nums, int target){
                    int left = 0;
                    int right = nums.length - 1;
                    while (left &lt;= right){
                        int mid = (left + right) / 2;
                        if (nums[mid] == target){
                            return mid;
                        }else if (nums[mid] &lt; target){
                            left = mid + 1;
                        }else{
                            right = mid - 1;
                        }
                    }
                    return -1;
                }
              </code>
            </pre>
          </p>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
</style>

<script>
import hljs from "highlight.js";
import "highlight.js/styles/a11y-light.css";

export default {
  // Vue的其他选项
  mounted() {
    this.highlightCode();
  },
  methods: {
    highlightCode() {
      // 获取页面上所有的pre元素中的code标签
      document.querySelectorAll("pre code").forEach((block) => {
        // 使用highlight.js来高亮代码块
        // highlightBlock方法会自动根据code标签的class属性来推断语言类型
        hljs.highlightBlock(block);
      });
    },
  },
};
</script>