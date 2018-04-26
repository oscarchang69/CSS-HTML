# 說明
## 焦點
> 使用純JS控制CSS (Style、Class)   


### 抓出要控制的 DOM 元素
```js
var d = document.querySelector('#mydiv');
```

### 控制 DOM 的 Style
```js
d.style.width = "100px";
d.style.height = "100px";
d.style.backgroundColor = "blue";
//維持原有的style值並加入新的值
d.setAttribute("class", d.getAttribute("class") + " fontBold"); 
```
### 移除 DOM 的 style，並設定 DOM 的 Class
```js
d.removeAttribute("style");
d.className="myStyle"
```


