// 数据增删查
Vue.filter('dateFormata', str => {
  const dt = new Date(str);
  const y = dt.getFullYear();
  const m = dt.getMonth() + 1;
  const d = dt.getDate();
  return `${y}/${m}/${d}`;
});
// 自定义指令
Vue.directive('focus', {
  inserted: function(el) {
    // focus为DOM方法
    el.focus();
  }
});
Vue.directive('color', {
  bind: function(el, binding) {
    // style为DOM静态属性，内存中直接加载到页面
    // el.style.color = 'red';

    el.style.color = binding.value || 'red';
  }
});

const vm = new Vue({
  el: '#app',
  data: {
    products: [{ id: 1, name: '奔驰', cdate: new Date() }],
    id: '',
    name: '',
    qKey: ''
  },
  methods: {
    // 添加产品
    addProducts() {
      console.log(this.id, this.name);
      if (this.id && this.name) {
        const product = {
          id: this.id,
          name: this.name,
          cdate: new Date()
        };
        this.products.push(product);
        this.id = '';
        this.name = '';
      }
    },
    // 查询产品
    // queryProducts() {
    //   const key = this.qKey;
    //   this.products = this.products.filter(item => {
    //     return item.name.indexOf(key) !== -1;
    //   });
    //   console.log(this.products);
    // },
    // 删除产品
    delProduct(id) {
      // this.products.splice(index,1);

      // 根据id查询
      // this.products.some((item, i) => {
      //   if (item.id === id) {
      //     this.products.splice(i, 1);
      //     return true;
      //   }
      // });

      const index = this.products.findIndex(item => {
        return item.id === id;
      });
      this.products.splice(index, 1);
    },
    searchProducts(qKey) {
      // if (this.qKey) {
      //   return this.products.filter(item => {
      //     return item.name.indexOf(this.qKey) != -1;
      //   });
      // } else {
      //   return this.products;
      // }
      return this.products.filter(item => {
        return item.name.includes(qKey);
      });
    }
  },
  // 局部过滤器
  filters: {
    dateStr(str) {
      console.log(str);
      return str;
    }
  },
  // 局部指令
  directives: {
    // 自定义指令为对象
    // 指令名只能以小写命名
    fontweight: {
      bind: function(el, binding) {
        console.log(el);
        el.style.fontWeight = binding.value || 400;
      }
    },
    // 简写
    // 等同于写入bind updated中
    fontsize: function(el, binding) {
      el.style.fontSize = parseInt(binding.value) + 'px';
    }
  }
});
