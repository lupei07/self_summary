# self_summary

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### 浮点数计算
js浮点数进行加减乘除计算时,会出现精度问题
```
console.log(0.1 + 0.2);//0.30000000000000004
```
用法:
```
import floatOper from "../utils/floatOperation";
floatOper.subtract(num1, num2);
```
https://blog.csdn.net/qq_33237207/article/details/82109352

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
