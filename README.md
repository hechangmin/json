#json#

This file creates a JSON property in the global object, if there isn't already one.

##usage##

-----------------
```js
var data = {list : [{
        index : 1,
        user : 'baidu',
        site : '<a href="http://www.baidu.com" target="_blank">http://www.baidu.com</a>'
    },{
        index : 2,
        user : 'qq',
        site : 'http://www.qq.com'
    },{
        index : 3,
        user : 'ali',
        site : "http://www.taobao.com"
    }
]};

var s = JSON.stringify(data)

console.log(s);

var o = JSON.parse(s);

console.dir(o);

```
-----------------
* stringify 
* parse

##License##

Released under the MIT license

_*[hechangmin@gmail.com](mailto://hechangmin@gmail.com)*_
