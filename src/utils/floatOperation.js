/**
 * 浮点运算精度问题 (加减乘除)
*/

const floatOper = function () {
    // 判断是否为一个整数
    function isInteger(num) {
        return Math.floor(num) === num
    }

    /**
     * 将浮点数转成整数, 返回整数和倍数 如 3.14 => 314
     * @params floatNum {number} 小数
     * @return {object} {num:314,times:100}
    */
    function toInteger(floatNum) {
        let ret = { times: 1, num: 0 }
        const res = isInteger(floatNum);
        if (res) {
            // 整数
            ret.num = floatNum;
            return ret
        } else {
            // 浮点数
            const str = floatNum + '';
            const RE_DATE = /(\d*).(\d*)/;
            const matchObj = RE_DATE.exec(str); // [3.14,3,14]
            const len = matchObj[2].length;
            const times = Math.pow(10, len);
            ret.num = floatNum * times;
            ret.times = times;
            return ret
        }
    }

    /**
     * 实现加减乘除运算, 确保不丢失精度
     * 思路：把小数放大到整数, 进行运算, 再缩小为小数
     * @params a {number} 运算数字1
     * @params b {number} 运算数字2
     * @params op {string} 运算类型 加减乘除（add/subtract/multiply/divide）
    */
    function operation(a, b, op) {
        const n1 = toInteger(a).num
        const n2 = toInteger(b).num
        const t1 = toInteger(a).times
        const t2 = toInteger(b).times
        const max = t1 > t2 ? t1 : t2
        let result = null
        switch (op) {
            case 'add':
                if (t1 == t2) {
                    result = n1 + n2;
                    return result / max;
                } else if (t1 > t2) {
                    result = n1 + n2 * (t1 / t2);
                    return result / max;
                } else {
                    result = n1 * (t2 / t1) + n2;
                    return result / max;
                }
            case 'subtract':
                if (t1 == t2) {
                    result = n1 - n2;
                    return result / max;
                } else if (t1 > t2) {
                    result = n1 - n2 * (t1 / t2);
                    return result / max;
                } else {
                    result = n1 * (t2 / t1) - n2;
                    return result / max;
                }
            case 'multiply':
                result = (n1 * n2) / (t1 * t2);
                return result;
            case 'divide':
                result = (n1 / n2) * (t2 / t1);
                return result;
        }
        return result
    }

    function add(a, b) {
        return operation(a, b, 'add')
    }
    function subtract(a, b) {
        return operation(a, b, 'subtract')
    }
    function multiply(a, b) {
        return operation(a, b, 'multiply')
    }
    function divide(a, b) {
        return operation(a, b, 'divide')
    }

    return { add: add, subtract: subtract, multiply: multiply, divide: divide }
}();
export default floatOper;