# 高级编程思维

## vue 遍历数据

1.v-for 可动态遍历函数返回结果，而不必直接遍历初始结果

```html
v-for="(item,index) in searchProducts(qKey)
```

2.vue 全局过滤器

> 只能用于插值表达式或 v-bind 表达式 {{ str | strFormat }} | v-bind:id="str | strFormat"

```javascript

// 全局过滤器
Vue.filter('strFormat',(str)=>{
  return str + '!'
})

// 私有过滤器
// vue实例对象中定义
filters:{
  strFormat:function(str){
    return str + '!'
  }
}

```

3.自定义键盘码别名

```javascript

// 配置键盘码
Vue.config.keyCodes.f2 = 113;

```

4.自定义指令

```javascript

// vue中自定义指令，使用时必须是v-指令名
Vue.directive('focus'/*指令名*/,{
  // el 绑定到元素节点 binding 参数对象
  bind:function(el,binding){
    // binding为指令参数对象，包含指令名、传入参数等
    // 绑定即执行，只执行一次，不适合运用与DOM对象操作中
    // 适用于el静态样式操作
  },
  inserted:function(el){
    // 当绑定元素被渲染到页面时执行，只执行一次，适用于DOM操作
    el.focus() // 适用于el动态方法操作
  },
  updated:function(el){
    // 元素节点更新时触发，可能执行多次
  }
})

```

5.过渡动画

5.1 style样式

> css 样式 + transition 包裹HTML元素

```css

/* 开始、结束 */
.v-enter,
.v-leave-to{
  opacity:0;
}

/* 进入、离开 */
.v-enter-active,
.v-leave-active{
  transition: all 0.8s ease;
}

```

```html

<transition>
  <p>hello</p>
</transition>

```

> transition只能用于静态HTML元素，动态生成的HTML元素必须使用transition-group包裹动画元素，如果使用v-for遍历则必须绑定key

5.2 JS控制动画

```html

<transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
  <div>hello</div>
</transition>

```

```javascript

new Vue({
  el:'#app',
  methods:{
    beforeEnter(el){
      el.style.opacity = 0;
    },
    enter(el,done){
      el.style.transition = "all 1s ease";
      // 必须调用done,done方法是afterEnter函数的引用
      done()
    },
    afterEnter(el){
      console.log(el)
      // 做相应操作
    }
  }
})

```

6.$emit

> 自组建调用接收到到父组件传递到方法

7.$refs

> 访问引用DOM或引用组件，切可访问组件内部数据和方法

```html

<h3 ref="refH"></h3>

```

```javascript

this.$refs.refH

```

## 数组方法

1.findIndex

2.some

## 字符串方法

1.padStart(maxLength,0|'')

> 字符串最大长度不满足是字符串起始位置补冲字符

2.padEnd

> 字符串最大长度不满足是字符串结束位置补冲字符

## git 本地化仓库并链接远程仓储

1. git init 初始化本地项目

2. git status 查看本地项目状态

3. git add * 本地项目添加到 git 暂存池

4. git commit -m "init project" 将本地项目提交到本地 git 仓储

5. 链接远程 git 仓储

6. git remote add origin https://?...?.git 

7. git push -u origin master