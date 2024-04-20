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
          <h2 class="h2_font">二分查找</h2>
          <p class="font">
            二分查找是一种在有序数组中查找特定元素的搜索算法。
            该算法的工作原理是，通过不断将数组的中间元素与目标值进行比较，
            将数组分成两个部分，直到找到目标值或确定它不存在于数组中。
          </p>
          <h3 class="h2_font">
            我们先来看一下题目:
          </h3>
          <p class="font">给定一个n个元素有序的（升序）整型数组nums和一个目标值target,
            写一个函数搜索 nums 中的 target,如果目标值存在返回下标,否则返回 -1</p>
          <span style="font-family: Ayuthaya;line-height: 35px">示例如下:</span>
          <span style="font-family: Ayuthaya;line-height: 35px">
            输入: nums = [-1,0,3,5,9,12], target = 9
            <br>
输出: 4
            <br>
解释: 9 出现在 nums 中并且下标为 4
          </span>
          <p class="font">
            我们先捋一下思路。
          </p>
          <p class="font">我们先初始化左指针为left = 0，右指针为
            right = n - 1。
            用这两个指针来分别指向数组的第一个元素和最后一个元素
            (头元素索引为0，末尾元素索引为n-1，即数组长度减1)。
          </p>
          <p class="font">然后我们紧接着计算这个数组的中间索引。我们初始化变量mid = (left + right) / 2
            (注意，python中的整除是//，不是/，因为/是浮点数除法)。</p>
          <p class="font">最后，我们根据nums[mid]与
            target的大小关系来更新left或right，直到找到目标值或left大于right。
          </p>
          <p class="font">若nums[mid] == target,我们就可以直接返回索引。</p>
          <p class="font">如果nums[mid] &lt; target,
            则目标值一定在mid的右侧，所以更新left = mid + 1。</p>
          <p class="font">如果nums[mid] &gt; target,
            则目标值一定在mid的左侧，所以更新right = mid - 1。
          </p>
          <p class="font">当然，这个过程我们要放在while循环中。</p>
          <p class="font">最后，要是没有找到目标值，则直接返回-1。</p>
          <p class="font">接下来，我们看代码。</p>
          <p class="font">
            <pre>
              <code class="python">
                    def search(nums: List[int], target: int) -> int:
                        left, right = 0, len(nums) - 1
                        while left &lt;= right:
                            mid = (left + right) // 2
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
          <span class="font" style="color: red">
            <p class="font">
              在使用二分查找的时候，有几个注意点需要了解一下。
            </p>
            <p class="font">(1)二分查找只能在有序数组中进行，如果数组未排序，那二分查找可能无法返回我们预期的结果。</p>
          </span>
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