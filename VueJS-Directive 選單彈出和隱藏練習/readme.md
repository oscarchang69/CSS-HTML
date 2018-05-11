## 滑鼠點選按鈕，顯示選單
### 選單收回的方式
* 點選按鈕
* 點選按鈕和選單以外的視窗 (使用Directive控制)


> directive於bind鉤子函式中，利用contains來判斷點選的範圍有沒有包含main區塊的內容。如果
> 包含(按鈕或是選單)就回傳false，不做任何事情。如果未包含表示滑鼠點選選單以外的區域，則執行handleClose函式

#### 完整的directive如下圖
[myimg]:rm01.png "我的圖片"

![myimg]

> handleClose函式寫在vue的方法中
```js
var app = new Vue({
    el: '#app',
    data:{
        show:false
    },
    methods:{
        handleClose:function(){
            this.show=false;
        }
    }

});
```

---

<a href="https://codepen.io/oscarchang69/pen/MGrygr" target="_blank">
[ 線上展示 ]
</a>


