<template>
  <div class="memo">
    <ul class="category">
      <li v-for="(category, index) in categories" :key="index">
        <div class="category-layout">
          <img id="plus" @click="newMemo(category)" src="@/assets/plus.png" height=34px width=34px>
          <h2>{{ category }}</h2>
        </div>
        <ul class="memos">
        <li v-for="(memo, index) in memos[category]" :key="index">
          <div class="box">
            <div class="title">
              <input class="input" v-model="memo.title" :placeholder="memo.title">
            </div>
            <div class="memo">
              {{ memo.memo }}
            </div>
          </div>
        </li>
        </ul>
      </li>
      </ul>
  </div>
</template>

<script>  
const localStorage = window.localStorage;
var memos = localStorage.getItem('memos');
var category = localStorage.getItem('categories');

switch(memos) {
  case null:
    var basicMemo = {국어:[{title:'title',memo:'memo'},{title:'asdf',memo:'asdf'}],수학:[{title:'title3',memo:'memo2'}]}
    localStorage.setItem('memos', JSON.stringify(basicMemo));
}
switch(category) {
  case null:
    var categories = ['국어','수학'];
    localStorage.setItem('categories', JSON.stringify(categories));
}
export default {
  name: "Memo",
  data() {
    return {
      memos: JSON.parse(localStorage.getItem('memos')),
      categories: JSON.parse(localStorage.getItem('categories'))
    }
  },
  methods: {
    newMemo: function(category) {
      const memo = {title:'제목',memo:'메모'};
      this.memos[category].push(memo);
      const Memos = JSON.parse(localStorage.getItem('memos'));
      Memos[category].push(memo);
      localStorage.setItem('memos', JSON.stringify(Memos));
    },
    newCategory: function() {
      const category = ['이름을 입력하세요'];
      this.categories.push(category);
      const categories = JSON.parse(localStorage.getItem('categories'));
      categories['categories'].push(category);
      localStorage.setItem('categories', JSON.stringify(categories));
    },
    sans: function() {
      console.log(this.memos.수학)
    }
  }
}
</script>

<style scoped>
.memo {
  margin: 1%;
  float: left;
}
h2 {
  margin-bottom: 6px;
  margin-left: 5px;
}
.category-layout {
  border-bottom: 1px solid black;
  width: 98vw;
  text-align: left;
}
@keyframes fadein {
    from {
        opacity:0.4;
    }
    to {
        opacity:1;
    }
}
.box {
  width:200px;
  height:300px;
  background-color: white;
  transition-duration: 0.45s;
  animation: fadein 1.2s;
  border-radius: 10px;
  padding-top: 10px;
  margin: 5px;
  margin-top: 10px;
  box-shadow: 10px 10px 20px 1px rgb(0 0 0 / 5%);
}
/* .box:hover {
  box-shadow: 5px 5px 20px 1px rgb(0 0 0 / 17%);
  margin-top: 3px;
  margin-bottom: 11px;
  margin-left: 3px;
  margin-right: 8px;
} */
.title {
  position: relative;
  padding-top: 5px;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  border-bottom: 1px solid;
  border-bottom-color: rgb(102, 99, 102);
}
.input {
  width: 100%;
  text-align: center;
  font-size: 100%;
  border: 0;
}
li {
  float:left;
}
ul {
  list-style: none;
  padding: 0;
}
#plus:hover {
  cursor: pointer;
}
#plus {
  float: right;
}
</style>