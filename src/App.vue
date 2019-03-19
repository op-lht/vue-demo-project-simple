<template>
  <!--vue的模板里边所有的内容要被一个本节点包含起来-->
  <div id="app">
    <v-home style="text-align: center"></v-home>
    <v-news style="text-align: center"></v-news>
    <input type="text" v-model="todo" @keyup.enter="doAdd($event)"/>
    <button @click="doAdd()">+增加</button>
    <button @click="getdata()">请求数据</button>
    <hr>
    <h2>进行中</h2>
    <ul>
      <li v-for="(item,index) in list" v-if="!item.finished">
        <input type="checkbox" v-model="item.finished" @change="saveList()"/>
        {{item.title}}-----
        <button @click="removeData(index)">-删除</button>
      </li>
    </ul>
    <h2>已完成</h2>
    <ul>
      <li v-for="(item,index) in list" v-if="item.finished" :class="{'finished':item.finished}">
        <input type="checkbox" v-model="item.finished" @change="saveList()"/>
        {{item.title}}-----
        <button @click="removeData(index)">-删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import Storage from './model/storage'
  import home from './components/Home.vue'; //引入一个vue组件  引入后需要在components中注册 然后在模板中使用
  import news from './components/News.vue';
  import Axios from 'axios';

  export default {
    name: 'app',
    components: {//'v-hello':hello的形式 hello=='hello':hello
      'v-home': home,
      'v-news': news
    },
    data() {
      return {
        todo: '',
        list: []
      }
    },
    methods: {
      doAdd(e) {
        //获取添加文本框中的数据
        this.list.push({
          title: this.todo,
          finished: false
        });
        //对list数据进行缓存
        Storage.set('list', this.list);
      },
      removeData(index) {
        this.list.splice(index, 1);
        //对list数据进行缓存
        Storage.set('list', this.list);
      },
      saveList() {
        Storage.set('list', this.list);
      },
      getdata() {
        var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
        Axios.get(api).then((response) => {
          console.log(response)
        }).catch((error) => {
          console.log(error)
        });
      }
    }, mounted() {//是一个生命周期函数，装配完成
      var list = Storage.get('list');
      if (list) {//判断list存在不存在
        this.list = list;
      }
    }
  }
</script>

<style>
  .finished {
    background: darkgreen;
  }

</style>
