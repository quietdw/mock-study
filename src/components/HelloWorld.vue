<template>
  <div class="hello">
    <p>{{ environment() }}</p>
    <button @click="handleClick1">获取数据1</button>
    <button @click="handleClick2">获取数据2</button>
    <button @click="handleClick3">获取数据3</button>
    <ul v-if="!loading">
      <li v-for="({ title, content, createdTime }, index) in newsList" :key="index">
        <h3>{{ title }}</h3>
        <p>
          {{ content }}
        </p>
        <p>{{ createdTime }}</p>
      </li>
    </ul>
    <p v-else>加载中...</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data() {
    return {
      newsList: [],
      loading: false
    }
  },
  methods: {
    handleClick1() {
      this.loading = true
      axios.get('/mock/test1').then(res => {
        this.newsList = res.data
        this.loading = false
      })
    },
    handleClick2() {
      this.loading = true
      axios.get('http://127.0.0.1:9082/mock/test2').then(res => {
        console.log(res)
        this.newsList = res.data
        this.loading = false
      })
    },
    handleClick3() {
      this.loading = true
      axios.get('/mock/test3').then(res => {
        this.newsList = res.data
        this.loading = false
      })
    },
    environment() {
      return process.env.NODE_ENV
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
