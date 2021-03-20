<template>
  <div class="memo">
    <ul class="memos">
      <li v-for="Memo in memos" v-bind:key="Memo">
        <div class="box">
          <div class="title">
            {{ Memo.title }}
          </div>
          <div class="memo">
            {{ Memo.memo }}
          </div>
        </div>
      </li>
    </ul>
    <img id="plus" @click="newMemo" src="@/assets/plus.png" height=35px width=35px>
  </div>
</template>

<script>
const memos = document.getElementsByClassName("memos");

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
      var newBox = document.createElement("li");
      newBox.innerHTML = '<div class="box"><p>asdf</p></div>'
      memos[0].appendChild(newBox);
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
  border: 1px solid;
  border-color: black;
  border-radius: 10px;
  margin: 5px;
  box-shadow: 1px 1px 5px -2px black;
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
</style>