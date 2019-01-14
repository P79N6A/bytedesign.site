---
title: 关于我们
type: about
layout: pagefull
---

## 关于 ByteDesign

ByteDesign (ByteDance.Design) 是一套 `高效` `活力` `易用` 的设计语言系统，主要服务于字节跳动旗下中台类产品体验设计和技术开发，是 **字节设计语言** 重要的组成部分，主要由商业产品设计团队持续贡献并维护，ByteDesign 主要包括视觉设计规范，交互设计指导，设计工具，设计资源等一系列设计相关内容组成。

作为字节跳动商业产品官方的设计语言系统，ByteDesign 的受众由产品经理、用户体验设计师、前端研发工程师等多个职能角色组成，用于构建具有良好用户体验的商业类产品。ByteDesign 的目标有：提升产品界面一致性和易用的体验，促进设计师和工程师之间协作效率，不断的从各方吸收创新思路并优化迭代，为产品设计提供清晰有效的指导原则和设计规范，从而帮助产品更好达成业务目标，促进整体的用户体验和研发效率。


## 关于团队

![Component Tree](../assets/team.png)

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
  border-radius: 4px;
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
