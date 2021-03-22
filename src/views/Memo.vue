<template>
  <div class="memo">
    <div id="plus">
      <img id="plus" @click="newMemo" src="@/assets/plus.png" height=35px width=35px>
    </div>
    <ul class="memos">
      <li v-for="(memo, index) in memos" :key="index">
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
  </div>
</template>

<script>  
const localStorage = window.localStorage;
var memos = localStorage.getItem('memos');

switch(memos) {
  case null:
    var basicMemo = {title:'제목을 입력하세요!',memo:'메모를 남기세요!'};
    localStorage.setItem('memos', JSON.stringify(basicMemo));
}
export default {
  name: "Memo",
  data() {
    return {
      memos: [
        {title:'title',memo:'memo'},
        {title:'title2',memo:'이건메모2'}
      ]
    }
  },
  methods: {
    newMemo() {
      // const new_memo
      console.log('sans')
    }
  }
}
</script>

<style scoped>
.memo {
  margin: 1%;
  float: left;
}
.box {
  width:200px;
  height:300px;
  background-color: white;
  transition-duration: 0.5s;
  /* border: 1px solid;
  border-color: black; */
  border-radius: 10px;
  margin: 5px;
  box-shadow: 1px 1px 3px 2px #d2d3d6;
}
.box:hover {
  width: 210px;
  height: 310px;
  cursor: pointer;
}
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
  width: 70%;
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