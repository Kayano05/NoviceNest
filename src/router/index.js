import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/IndexView.vue')
  },
  {
    path: '/pythonIntroductionView',
    name: 'pythonIntroductionView',
    component: () => import('../views/python/pythonIntroductionView.vue')
  },
  {
    path: '/Acknowledgement',
    name: 'Acknowledgement',
    component: () => import('../views/AcknowledgementView.vue')
  },
  {
    path: '/FutureUpdate',
    name: 'FutureUpdate',
    component: () => import('../views/FutureUpdateView.vue')
  },
  {
    path: '/UpdataLog',
    name: 'UpdataLog',
    component: () => import('../views/UpdataLogView.vue')
  },
  {
    path: '/aboutUs',
    name: 'aboutUs',
    component: () => import('../views/aboutUsView.vue')
  },
  {
    path: '/kayano',
    name: 'kayano',
    component: () => import('../views/personalProfile/kayanoView.vue')
  },
  {
    path: '/javaIntroductionView',
    name: 'javaIntroductionView',
    component: () => import('../views/java/javaIntroductionView.vue')
  },
  {
    path: '/BasicGrammar',
    name: 'pythonBasicGrammar',
    component: () => import('../views/python/BasicGrammar/BasicGrammarView.vue')
  },
  {
    path: '/DataCleaningAndAnalysisView',
    name: 'DataCleaningAndAnalysisView',
    component: () => import('../views/python/DataCleaningAndAnalysis/DataCleaningAndAnalysisView.vue')
  },
  {
    path: '/webDevelopment',
    name: 'pythonWebDevelopment',
    component: () => import('../views/python/webDevelopment/webDevelopmentView.vue')
  },
  {
    path: '/webCrawler',
    name: 'pythonWebCrawler',
    component: () => import('../views/python/webCrawler/webCrawlerView.vue')
  },
  {
    path: '/JavaBasicGrammar',
    name: 'javaBasicGrammar',
    component: () => import('../views/java/BasicGrammar/BasicGrammarView.vue')
  },
  {
    path: '/JavaWebDevelopment',
    name: 'javaWebDevelopment',
    component: () => import('../views/java/webDevelopment/webDevelopmentView.vue')
  },
  {
    path: '/JavaInterview',
    name: 'javaInterview',
    component: () => import('../views/Interview/java/JavaInterView..vue')
  },
  {
    path: '/PythonInterview',
    name: 'pythonInterview',
    component: () => import('../views/Interview/python/PythonInterView.vue')
  },
  {
    path: '/Array',
    name: 'array',
    component: () => import('../views/Algorithm/ArrayView.vue')
  },
  {
    path: '/AsymptoticComplexityAnalysis',
    name: 'asymptoticComplexityAnalysis',
    component: () => import('../views/Algorithm/AsymptoticComplexityAnalysisView.vue')
  },
  {
    path: '/Big-ONotation',
    name: 'bigONotation',
    component: () => import('../views/Algorithm/Big-ONotationView.vue')
  },
  {
    path: '/BinarySearch',
    name: 'binarySearch',
    component: () => import('../views/Algorithm/BinarySearchView.vue')
  },
  {
    path: '/Complexity',
    name: 'complexity',
    component: () => import('../views/Algorithm/ComplexityView.vue')
  },
  {
    path: '/DataStructure',
    name: 'dataStructure',
    component: () => import('../views/Algorithm/DataStructureView.vue')
  },
  {
    path: '/GreedyAlgorithm',
    name: 'greedyAlgorithm',
    component: () => import('../views/Algorithm/GreedyAlgorithmView.vue')
  },
  {
    path: '/Hash',
    name: 'hash',
    component: () => import('../views/Algorithm/HashView.vue')
  },
  {
    path: '/Index',
    name: 'index',
    component: () => import('../views/Algorithm/IndexView.vue')
  },
  {
    path: '/Iteration',
    name: 'iteration',
    component: () => import('../views/Algorithm/IterationView.vue')
  },
  {
    path: '/LinkedList',
    name: 'linkedList',
    component: () => import('../views/Algorithm/LinkedListView.vue')
  },
  {
    path: '/Recursion',
    name: 'recursion',
    component: () => import('../views/Algorithm/RecursionView.vue')
  },
  {
    path: '/Sort',
    name: 'sort',
    component: () => import('../views/Algorithm/SortView.vue')
  },
  {
    path: '/Stack',
    name: 'stack',
    component: () => import('../views/Algorithm/StackView.vue')
  },
  {
    path: '/ElementUIEC',
    name: 'elementUIEC',
    component: () => import('../views/EnvironmentConfiguration/ElementUIECView.vue')
  },
  {
    path: '/GataGripEC',
    name: 'gataGripEC',
    component: () => import('../views/EnvironmentConfiguration/GataGripECView.vue')
  },
  {
    path: '/IntelliJIDEAEC',
    name: 'intelliJIDEAEC',
    component: () => import('../views/EnvironmentConfiguration/IntelliJIDEAECView.vue')
  },
  {
    path: '/JavaEC',
    name: 'javaEC',
    component: () => import('../views/EnvironmentConfiguration/JavaECView.vue')
  },
  {
    path: '/JupyterNotebookEC',
    name: 'jupyterNotebookEC',
    component: () => import('../views/EnvironmentConfiguration/JupyterNotebookECView.vue')
  },
  {
    path: '/MavenEC',
    name: 'mavenEC',
    component: () => import('../views/EnvironmentConfiguration/MavenECView.vue')
  },
  {
    path: '/PythonEC',
    name: 'pythonEC',
    component: () => import('../views/EnvironmentConfiguration/PythonECView.vue')
  },
  {
    path: '/SpringBootWebEC',
    name: 'springBootWebEC',
    component: () => import('../views/EnvironmentConfiguration/SpringBootWebECView.vue')
  },
  {
    path:'/MybatisEC',
    name:'mybatisEC',
    component: () => import('../views/EnvironmentConfiguration/MybatisECView.vue')
  },
  {
    path:'/MySqlEC',
    name:'mySqlEC',
    component: () => import('../views/EnvironmentConfiguration/MySqlECView.vue')
  },
  {
    path:'/NginxEC',
    name:'nginxEC',
    component: () => import('../views/EnvironmentConfiguration/NginxECView.vue')
  },
  {
    path:'/NodejsEC',
    name:'nodejsEC',
    component: () => import('../views/EnvironmentConfiguration/NodejsECView.vue')
  },
  {
    path:'/PycharmEC',
    name:'pycharmEC',
    component: () => import('../views/EnvironmentConfiguration/PycharmECView.vue')
  },
  {
    path:'/PythonEC',
    name:'pythonEC',
    component: () => import('../views/EnvironmentConfiguration/PythonECView.vue')
  },
  {
    path:'/VsCodeEC',
    name:'vscodeEC',
    component: () => import('../views/EnvironmentConfiguration/VScodeECView.vue')
  },
  {
    path:'/VueEC',
    name:'vueEC',
    component: () => import('../views/EnvironmentConfiguration/VueECView.vue')
  },
  {
    path:'/AlgorithmIntroduction',
    name:'algorithmIntroduction',
    component: () => import('../views/Algorithm/AlgorithmIntroductionView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
