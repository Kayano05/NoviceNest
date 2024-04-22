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
          <h4 class="h2_font">二分查找有递归实现和迭代实现，因其内存空间使用的不同，以及代码的可读性与维护性，我们
            更青睐迭代实现，所以接下来我们先学习迭代二分查找。
          </h4>
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
          <p class="font">以下是java示例:</p>
          <p class="font">
          <pre>
            <code class="java">
              public int BinarySearch(int[] nums, int target) {
                  int left = 0;
                  int right = nums.length - 1;
                  while (left &lt;= right) {
                      int mid = left + (right - left) / 2;
                      if (nums[mid] == target) {
                          return mid;
                      } else if (nums[mid] &lt; target) {
                          left = mid + 1;
                      } else {
                          right = mid - 1;
                      }
                  }
                  return -1;
              }

            </code>
          </pre>
          </p>
          <span class="font" style="color: red">
            <p class="font">
              在使用二分查找的时候，有几个注意点需要了解一下。
            </p>
            <p class="font">(1)二分查找只能在有序数组中进行，如果数组未排序，那二分查找可能无法返回我们预期的结果。</p>
            <p class="font">(2)如果先进行排序，再进行二分查找，也是不可行的。因为在进行排序后，数组的原索引已经发生了变化，这个时候我
            们再通过二分查找得到的索引并不是我们预期的索引。
            </p>
          </span>
          <h3 class="h2_font">二分查找的递归实现</h3>
          <p class="font">
            二分查找的递归实现与迭代实现类似，只是递归实现需要多写一个递归函数。
          </p>
          <p class="font">
            <pre>
              <code class="python">
                    def binary_search(nums, left, right, target):
                        if right &gt;= left:
                            mid = (right + left) // 2
                            if nums[mid] == target:
                                return mid
                            elif nums[mid] > target:
                                return binary_search(nums,left,mid - 1,target)
                            else:
                                return binary_search(nums, mid + 1, right, target)
                        else:
                            return -1
              </code>
            </pre>
          </p>
          <h4 class="font">
            在我们解释这个递归实现之前，我们先来学习(复习)一下什么是递归。
          </h4>
          <p class="font">
            递归是一种解决问题的方法，它通过将问题分解为更小的子问题来解决。
            递归通常涉及函数<span style="color: #7b00ff">调用自身</span>来解决这些子问题，直到达到基本情况，
            即问题变得足够小以直接解决。递归是一种强大的编程技术，
            可以简化代码并解决复杂的问题。
          </p>
          <p class="font">
            递归的实现需要一个基本情况和一个递归情况。基本情况是问题变得足够小以直接解决的情况，
            而递归情况是问题分解为更小的子问题的情况。递归函数应该在每次递归时解决一个子问题，
            直到基本情况被满足。
          </p>
          <h4 class="font">我们通过一个例子来具体了解一下递归。</h4>
          <p class="font">
            我们希望获取第7个斐波那契数字，那我我们就需要获取第6个和第5个斐波那契数字，而
            当我们需要获取第6和第5个斐波那契数字时，又需要获取更小的斐波那契数字。直到我们获取了
            第一个斐波那契数字1，我们就能一层一层的往上返回答案。
            <br>
            这基本上就是递归。
          </p>
          <h4 class="font">接下来，我们来看二分查找的递归实现</h4>
          <p class="font">
          <pre>
            <code class="python">
              def binary_search(nums, left, right, target):
                  if right &gt;= left:
                      mid = (right + left) // 2
                      if nums[mid] == target:
                          return mid
                      elif nums[mid] &gt; target:
                          return binary_search(nums,left,mid - 1,target)
                      else:
                          return binary_search(nums, mid + 1, right, target)
                  else:
                      return -1
            </code>
          </pre>
          </p>
          <p class="font">以下是递归二分查找的java实现</p>
          <p class="font">
          <pre>
            <code class="java">
              public static int recursiveBinarySearch(int[] nums, int target, int left, int right) {
                  if (left &lt;= right) {
                      int mid = (left + right) / 2;
                      if (nums[mid] == target) return mid;
                      else if (nums[mid] &lt; target) return recursiveBinarySearch(nums, target, mid + 1, right);
                      else return recursiveBinarySearch(nums, target, left, mid - 1);
                  }
                  return -1;
              }
            </code>
          </pre>
          </p>
          <p class="font">我们来详细解释一下:</p>
          <p class="font">本函数接受四个参数:一个数组，左指针，右指针，目标值。</p>
          <p class="font">我们先初始化二分成立的条件:左指针小于或等于右指针，如果不满足这个条件，说明要查找的元素
            不在数组内，直接返回-1。
          </p>
          <p class="font">接着我们初始化中间索引mid，并在if语句中开始判断nums[mid]与target的大小关系。</p>
          <p class="font">如果nums[mid]等于target，说明mid就是我们要找的索引，
            直接返回mid就行，这一点跟二分查找的迭代实现如出一辙。
          </p>
          <p class="font">如果nums[mid]&gt;taeget，我们直接更新right的值为mid + 1，并把四个参数同样参入这个函数，并返回自身。
            这样实现了函数的自调用。
          </p>
          <p class="font">如果nums[mid]&lt;taeget，我们直接更新left的值为mid -
            1，并把四个参数同样参入这个函数，并返回自身。</p>
          <p class="font">现在你可能对二分查找的递归实现有了一个初步了解。但我们一般不推荐使用递归。
            <span style="color: red">递归会使用栈空间，可能会引起栈溢出错误，而迭代不会。另外迭代版本会比递归版本速度更快。
            还有一些原因是代码编写习惯和代码的可维护性差异。</span>
          </p>
          <h4 class="font">看到这里，相信你已经简单入门了二分查找，但这并不是二分查找的全部，你可能会在其他地方遇见更难的二分
          查找算法，但其核心思想却都大差不差。</h4>
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