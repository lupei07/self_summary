<template>
  <div>
    <input type="number" v-model="num1" />
    <select v-model="oper" @change="handleChange">
      <option :value="1">加</option>
      <option :value="2">减</option>
      <option :value="3">乘</option>
      <option :value="4">除</option>
    </select>
    <input type="number" v-model="num2" />
    <button @click="handleOper">等于</button>
    <span>{{ret}}</span>
  </div>
</template>
<script>
import floatOper from "../utils/floatOperation";
export default {
  data() {
    return {
      num1: null,
      num2: null,
      oper: 1,
      ret: null
    };
  },
  components: {},
  methods: {
    handleChange(e) {
      this.oper = Number(e.target.value);
    },
    handleOper() {
      const { oper, num1, num2 } = this;
      switch (oper) {
        case 1:
          this.ret = floatOper.add(num1, num2);
          break;
        case 2:
          this.ret = floatOper.subtract(num1, num2);
          break;
        case 3:
          this.ret = floatOper.multiply(num1, num2);
          break;
        case 4:
          this.ret = floatOper.divide(num1, num2);
          break;
      }
    }
  },
  computed: {}
};
</script>
<style scoped>
</style>