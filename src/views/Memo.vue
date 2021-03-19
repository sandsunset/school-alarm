<template>
  <div class="memo">
    <ul class="memos"></ul>
    <img id="plus" @click="hello" src="@/assets/plus.png" height=35px width=35px>
  </div>
</template>

<script>
const memos = document.getElementsByClassName("memos");
export default {
  name: "Memo",
  methods: {
    hello() {
      var newBox = document.createElement("li");
      newBox.innerHTML = '<div class="box"><p>asdf</p></div><style>.box {width:200px;height:300px;border: 1px solid;border-color: black;border-radius: 10px;margin: 5px}li{float:left;}</style>'
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
ul {
  list-style: none;
  padding: 0;
}
#plus:hover {
  cursor: pointer;
}
</style>