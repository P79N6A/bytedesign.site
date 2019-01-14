---
title: 关于团队
type: about
layout: pagefull
---


我们这样优秀的人！

{% raw %}

<div id="contributors">
<ul class="contributors">
  <a v-for="item in list"
    class="contributor"
    :href="'https://github.com/' + item.github" target="_blank">
    <img class="contributor__img" :src="'https://github.com/' + item.github + '.png?size=64'" />
    <p v-text="item.github" style="margin: 0;"></p>
  </a>
</ul>
</div>

<style>
.contributor {
  display: inline-block;
  margin: 10px 15px;
  text-align: center;
}
.contributor__img {
  width: 64px;
  height: 64px;
  border-radius: 64px;
}
</style>


<script>
new Vue({
  el: "#contributors",
  data: function() {
    return {
      list: [
        {
          github: 'thirtyjin'
        },{
          github: 'bytedesign'
        },
      ]
    };
  }
})
</script>

{% endraw %}
