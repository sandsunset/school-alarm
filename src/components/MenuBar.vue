<template>
    <div class="menu-bar">
        <ul>
            <li><a class="icon" href="#main"><b>school alarm</b></a></li>
            <li><a href="#home">Home</a></li>
            <li><a href="#schedule">Schedule</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name : 'MenuBar'
}
</script>

<style scoped>
.menu-bar{
    border-bottom: 1px solid;
    border-color: rgba(180, 180, 180, 0.671);
}
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    background-color: rgb(255, 255, 255);
    border-bottom-left-radius: 5;
    border-bottom-right-radius: 5;
}
ul:after{
    content:'';
    display: block;
    clear:both;
}
li a {
    display: block;
    color: rgb(0, 0, 0);
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    float: left;
}
li a:hover:not(.icon) {
    background-color: rgba(241, 241, 241, 0.452);
}
</style>