import { defineStore } from "pinia";

export const userStore = defineStore("user", {
	state: () => {
		return {
			iphone: "18642366666",
			name: "ddd",

			/** 虚拟一个复杂数据 **/
			obj: {
				title: "我是复杂的引用对象",
				list: [
					{ name: "小明今天高考要加油", age: 18 },
					{ name: "小红高考加油哈", age: 17 },
				],
				person: {
					stock: { code: 1021 },
					money: 100,
				},
			},
		};
	},
	getters: {
		getIphone(state) {
			console.log("可以看见被打印次数，鉴证这个是懒计算属性");
			return `${state.iphone}`;
		},
		getFunMethod(state) {
			return (_name) => _name === state.name;
		},
	},
	actions: {
	  async	interiorChangeFun() {
			await new Promise((resolve, reject) => {
				 setTimeout(()=>{
					 console.log("天然支持异步，等5s在改变")
					 resolve()
				 },500)
			})
			this.obj.title = "内部定义方法，暴露给外部使用好处是哪部数据得到了保护";
		},
	},
});
