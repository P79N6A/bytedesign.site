---
title: 写作格式指南
type: support
order: 3
---

设计规范文档均采用 MarkDown 格式进行撰写，在参与编辑之前请先熟悉 MarkDown 的基础语法。


## 影子图片（图像悬浮切换）

视觉稿默认显示最终效果，鼠标悬浮后图像变为标注稿的效果，鼠标移除后恢复默认态。

<img class="preview-img over-img" alt="overimg 1" description="图片内容描述文字（可选）" src="assets/sketch.png">

<img class="preview-img over-img" alt="overimg 2" description="图片内容描述文字（可选）" src="assets/Demo.png">

<div class="clearfix"></div>

```HTML
<img class="preview-img over-img" alt="overimg 1" description="图片内容描述文字（可选）" src="assets/sketch.png">
<img class="preview-img over-img" alt="overimg 2" description="图片内容描述文字（可选）" src="assets/Demo.png">
```

#### 如何实现：

1. 文档中相应的图像标签 class 中增加 `over-img` 的类名，如代码示例。
2. 在相同目录内放置两个图像文件，文件命名遵循默认图像为 `name.jpg`，悬浮后图像为 `name-over.jpg`，即悬浮图像命名增加`-over`的后缀名即可。
3. 要求两张图像尺寸为等大图像；


## 图文混排

### 左右位置

<img class="preview-img " alt="图片标题（可选）" description="图片内容描述文字（可选）" src="assets/team.png">

默认单张图文混排显示，图片居左，文字居右，默认图片最大宽度为 `50%` 容器宽度减去 `20px`;

<div class="clearfix"></div>

<img class="preview-img right" alt="图片标题（可选）" description="图片内容描述文字（可选）" src="assets/team.png">

右对齐单张图文混排显示，图片居右，文字居左，默认图片最大宽度为 `50%` 容器宽度减去 `20px`;

> 注意，这里引入 HTML 片段进行内容的渲染。
class 必须为 preview-img
alt 将显示为图片标题
description 将显示为图片描述

<div class="clearfix"></div>

``` html
<img class="preview-img " alt="图片标题（可选）" description="图片内容描述文字（可选）" src="assets/team.png">

默认单张图文混排显示，图片居左，文字居右，默认图片最大宽度为 `50%` 容器宽度减去 `20px`;

<div class="clearfix"></div>

<img class="preview-img right" alt="图片标题（可选）" description="图片内容描述文字（可选）" src="assets/team.png">

右对齐单张图文混排显示，图片居右，文字居左，默认图片最大宽度为 `50%` 容器宽度减去 `20px`;
```

---

### 图片对错示例

<img class="preview-img good" alt="正确示例" description="需要在 class 中添加 good 类。" src="assets/team.png">

<img class="preview-img bad" alt="错误示例" description="需要在 class 中添加 bad 类。" src="assets/team.png">

<div class="clearfix"></div>

多图片连续显示，图片不设定宽度，默认图片最大宽度为 `50%` 容器宽度减去 `20px`;

当你需要为一个图示增加正确示意时，需要在 class 中添加类 `good`，同理增加错误示意时，需要在 class 中添加类 `bad`。


``` html
<img class="preview-img good" alt="正确示例" description="需要在 class 中添加 good 类。" src="assets/team.png">

<img class="preview-img bad" alt="错误示例" description="需要在 class 中添加 bad 类。" src="assets/team.png">
```


---


<img class="preview-img right good" width="200px" height="auto" alt="图片标题（可选）" description="图片内容描述文字（可选）" src="assets/team.png">

<img class="preview-img right bad" width="200px" height="auto" alt="图片标题（可选）" description="图片内容描述文字（可选）" src="assets/team.png">


多张图片并排，图片带正确错误提示示意，文字居左，多张图片居右，图片定宽 `200px`；

<div class="clearfix"></div>

<img class="preview-img  good" width="200px" height="auto" alt="图片标题（可选）" description="图片内容描述文字（可选）" src="assets/team.png">

<img class="preview-img  bad" width="200px" height="auto" alt="图片标题（可选）" description="图片内容描述文字（可选）" src="assets/team.png">


多张图片并排，图片带正确错误提示示意，文字居右，多张图片居左，图片定宽 `200px`；

<div class="clearfix"></div>



<img class="preview-img good" width="200px" height="auto" alt="正确示例" description="需要在 class 中添加 good 类。" src="assets/team.png">

<img class="preview-img good" width="200px" height="auto" alt="正确示例" description="需要在 class 中添加 good 类。" src="assets/team.png">

<img class="preview-img good" width="200px" height="auto" alt="正确示例" description="需要在 class 中添加 good 类。" src="assets/team.png">

<img class="preview-img bad" width="200px" height="auto" alt="错误示例" description="需要在 class 中添加 bad 类。" src="assets/team.png">

<img class="preview-img bad" width="200px" height="auto" alt="错误示例" description="需要在 class 中添加 bad 类。" src="assets/team.png">

<img class="preview-img bad" width="200px" height="auto" alt="错误示例" description="需要在 class 中添加 bad 类。" src="assets/team.png">

多张图片顺序排列（默认左对齐），图片定宽 `200px`。

```

<img class="preview-img  good" width="200px" height="auto" alt="图片标题（可选）" description="图片内容描述文字（可选）" src="assets/team.png">

<img class="preview-img  bad" width="200px" height="auto" alt="图片标题（可选）" description="图片内容描述文字（可选）" src="assets/team.png">


多张图片并排，图片带正确错误提示示意，文字居右，多张图片居左，图片定宽 `200px`；

<div class="clearfix"></div>


<img class="preview-img right good" width="200px" height="auto" alt="图片标题（可选）" description="图片内容描述文字（可选）" src="assets/team.png">

<img class="preview-img right bad" width="200px" height="auto" alt="图片标题（可选）" description="图片内容描述文字（可选）" src="assets/team.png">


多张图片并排，图片带正确错误提示示意，文字居左，多张图片居右，图片定宽 `200px`；

<div class="clearfix"></div>

<img class="preview-img good" width="200px" height="auto" alt="正确示例" description="需要在 class 中添加 good 类。" src="assets/team.png">

<img class="preview-img good" width="200px" height="auto" alt="正确示例" description="需要在 class 中添加 good 类。" src="assets/team.png">

<img class="preview-img good" width="200px" height="auto" alt="正确示例" description="需要在 class 中添加 good 类。" src="assets/team.png">

<img class="preview-img bad" width="200px" height="auto" alt="错误示例" description="需要在 class 中添加 bad 类。" src="assets/team.png">

<img class="preview-img bad" width="200px" height="auto" alt="错误示例" description="需要在 class 中添加 bad 类。" src="assets/team.png">

<img class="preview-img bad" width="200px" height="auto" alt="错误示例" description="需要在 class 中添加 bad 类。" src="assets/team.png">

多张图片顺序排列（默认左对齐），图片定宽 `200px`。

```


### 插入图片


![Title](assets/team.png)

Markdown 语法插入图片

```
![Title](assets/team.png)
```

HTML 语法插入图片

``` HTML
<img src="assets/team.png" alt="Title">
```

HTML 语法两列等宽图片：

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

``` HTML
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
```

HTML 语法三列等宽图片：

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

``` HTML
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
```

## 文档标题

```
# 一级标题，
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
##### 六级标题
```

一级标题，默认为页面的标题，一篇文章建议只出现一次；


## 正文段落

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

## 分割线

三个横杠

``` md
---
```

## 信息提示框

<p class="tip">提示信息框，我们的愿景是要做“全球创作与交流平台”。</p>

``` html
<p class="tip">提示信息框，我们的愿景是要做“全球创作与交流平台”。</p>
```

## 引用
> 我们的愿景是要做“全球创作与交流平台”

``` md
> 我们的愿景是要做“全球创作与交流平台”
```

## 列表

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




## 超出常规宽度容器

若要设置超出常规 `760` 宽度的的容器，需要在相应内容块外增加`<div class="fullwidth">...</div>` 标签包裹起来，既可以达到宽度为 `960` 宽度的容器效果；

<div class="fullwidth">
  <img src="assets/team.png" alt="Title">
</div>


```html
<div class="fullwidth">
  <img src="assets/team.png" alt="Title">
</div>
```


## 插入代码

``` html
<!-- html 代码 -->
<a href="http://design.bytedance.net/">Bux Design</a>
```

``` js
// js 代码
var a = bux;
```

## 特殊链接样式

<div class="scrimba"><a href="#" target="_blank" rel="noopener noreferrer">特殊样式链接</a></div>

``` html
<div class="scrimba"><a href="#" target="_blank" rel="noopener noreferrer">特殊样式链接</a></div>
```


## 插入源码并执行

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

##  Inline HTML

Inline <abbr title="Hypertext Markup Language">HTML</abbr> is supported.

```
Inline <abbr title="Hypertext Markup Language">HTML</abbr> is supported.
```

## 任务列表

- [x] This is a complete item
- [ ] This is an incomplete item

```
- [x] This is a complete item
- [ ] This is an incomplete item
```

## 表格

First Header | Second Header | Second Header
------------ | ------------- | -------------
Content from cell 1 | Content from cell 2 | Content from cell 3
Content in the first column | Content in the second column | Content in the Third column

```
First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column
```
