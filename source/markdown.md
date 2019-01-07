---
title: 写作格式指南
type: support
order: 3
---

设计规范文档均采用 MarkDown 格式进行撰写，在参与编辑之前请先熟悉 MarkDown 的基础语法。


---


### 文档标题

```
# 一级标题，
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
##### 六级标题
```

一级标题，默认为页面的标题，一篇文章建议只出现一次；


### 正文段落

北京字节跳动科技有限公司成立于2012年3月，是最早把人工智能技术大规模应用于信息分发的公司之一。添加链接[我是链接](#)，加粗 **我是加粗的** 效果，斜体效果  _italic_ ，中文不建议使用斜体，添加小标签 `我是小标签` 的效果；
没有间隔的第二段，我们的愿景是要做“全球创作与交流平台”。

北京字节跳动科技有限公司成立于2012年3月，是最早把人工智能技术大规模应用于信息分发的公司之一。

``` md
北京字节跳动科技有限公司成立于2012年3月，是最早把人工智能技术大规模应用于信息分发的公司之一。添加链接[我是链接](#)，加粗 **我是加粗的** 效果，斜体效果  _italic_ ，中文不建议使用斜体，添加小标签 `我是小标签` 的效果；
没有间隔的第二段，我们的愿景是要做“全球创作与交流平台”。

北京字节跳动科技有限公司成立于2012年3月，是最早把人工智能技术大规模应用于信息分发的公司之一。
```

<a href="https://www.google.com/" target="_blank">浏览器新标签打开 Google</a>

``` html
<a href="https://www.google.com/" target="_blank">浏览器新标签打开 Google</a>
```

### 分割线
---
``` md
---
```

### 信息提示框

<p class="tip">提示信息框，我们的愿景是要做“全球创作与交流平台”。</p>

``` html
<p class="tip">提示信息框，我们的愿景是要做“全球创作与交流平台”。</p>
```

### 引用
> 我们的愿景是要做“全球创作与交流平台”

``` md
> 我们的愿景是要做“全球创作与交流平台”
```

### 无序列表


{% raw %}
<div class="row">
  <div class="col">
{% endraw %}
- 无序列表
- 无序列表
- 无序列表
- 默认一级列表
  - 二级缩进列表
  - 二级缩进列表
- 无序列表
- 无序列表
{% raw %}
  </div>
  <div class="col">
{% endraw %}
``` md
- 无序列表
- 无序列表
- 无序列表
- 默认一级列表
  - 二级缩进列表
  - 二级缩进列表
- 无序列表
- 无序列表
```
{% raw %}
  </div>
</div>
{% endraw %}



### 顺序列表:

{% raw %}
<div class="row">
  <div class="col">
{% endraw %}
  1. 水果
  2. 植物
  3. 蔬菜
    1. 番茄
    2. 胡萝卜
    3. 白菜
{% raw %}
  </div>
  <div class="col">
{% endraw %}
  ``` md
    1. 水果
    2. 植物
    3. 蔬菜
      1. 番茄
      2. 胡萝卜
      3. 白菜
  ```
{% raw %}
  </div>
</div>
{% endraw %}



### 图文混排

<img class="preview-img" align="right" alt="静态对比示例" description="用不同颜色点，来表明不同状态。" src="assets/team.png">

北京字节跳动科技有限公司成立于2012年3月，是最早把人工智能技术大规模应用于信息分发的公司之一。添加链接[我是链接](#)，加粗 **我是加粗的** 效果，斜体效果  _italic_ ，中文不建议使用斜体，添加小标签 `我是小标签` 的效果；

```
注意，这里引入 HTML 片段进行内容的渲染。
class 必须为 preview-img
alt 将显示为图片标题
description 将显示为图片描述
```

<div class="clearfix"></div>

``` html
<img class="preview-img" align="right" alt="静态对比示例" description="用不同颜色点，来表明不同状态。" src="assets/team.png">

北京字节跳动科技有限公司成立于2012年3月，是最早把人工智能技术大规模应用于信息分发的公司之一。添加链接[我是链接](#)，加粗 **我是加粗的** 效果，斜体效果  _italic_ ，中文不建议使用斜体，添加小标签 `我是小标签` 的效果；

没有间隔的第二段，我们的愿景是要做“全球创作与交流平台”。
```

<div class="clearfix"></div>

<img class="preview-img good" align="right" alt="正确示例" description="需要在 class 中添加 good 类。" src="assets/team.png">

当你需要为一个图示增加正确示意时，需要在 class 中添加类 `good`，如代码所示。

<div class="clearfix"></div>

<img class="preview-img bad" align="right" alt="错误示例" description="需要在 class 中添加 bad 类。" src="assets/team.png">
同理增加错误示意时，需要在 class 中添加类 `bad`。


<div class="clearfix"></div>

``` html
<img class="preview-img good" align="right" alt="静态对比示例" description="用不同颜色点，来表明不同状态。" src="assets/team.png">
<img class="preview-img bad" align="right" alt="错误示例" description="需要在 class 中添加 bad 类。" src="assets/team.png">
```


---

### 超出常规宽度容器

若要设置超出常规（760）宽度的的容器，需要在相应内容块外增加`<div class="fullwidth">...</div>` 标签包裹起来，既可以达到宽度为 960 宽度的容器效果；

<div class="fullwidth">
  <img src="assets/team.png" alt="Title">
</div>


```html
<div class="fullwidth">
  <img src="assets/team.png" alt="Title">
</div>
```

---



### 插入图片

Markdown 语法插入图片

![Component Tree](assets/team.png)

两列等宽图片：

{% raw %}
  <div class="row">
    <div class="col">
      <img src="assets/team.png" alt="Title">
    </div>
    <div class="col">
      <img src="assets/team.png" alt="Title">
    </div>
  </div>
{% endraw %}

三列等宽图片：

{% raw %}
  <div class="row">
    <div class="col">
      <img src="assets/team.png" alt="Title">
    </div>
    <div class="col">
      <img src="assets/team.png" alt="Title">
    </div>
    <div class="col">
      <img src="assets/team.png" alt="Title">
    </div>
  </div>
{% endraw %}



### 插入代码

``` html
<!-- html 代码 -->
<a href="http://design.bytedance.net/">Bux Design</a>
```

``` js
// js 代码
var a = bux;
```

### 特殊链接样式

<div class="scrimba"><a href="#" target="_blank" rel="noopener noreferrer">特殊样式链接</a></div>

``` html
<div class="scrimba"><a href="#" target="_blank" rel="noopener noreferrer">特殊样式链接</a></div>
```


### 插入源码并执行

{% raw %}
<div id="app" class="demo">
  {{ message }}
</div>
<script>
var app = new Vue({
  el: '#app',
  data: {
    message: '原始代码运行效果!'
  }
})
</script>
{% endraw %}

```
{% raw %}
<div id="app" class="demo">
  {{ message }}
</div>
<script>
var app = new Vue({
  el: '#app',
  data: {
    message: '原始代码运行效果!'
  }
})
</script>
{% endraw %}
```

###  Inline HTML

Inline <abbr title="Hypertext Markup Language">HTML</abbr> is supported.

```
Inline <abbr title="Hypertext Markup Language">HTML</abbr> is supported.
```

### 任务列表

- [x] This is a complete item
- [ ] This is an incomplete item

```
- [x] This is a complete item
- [ ] This is an incomplete item
```

### 表格

First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column

```
First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column
```
