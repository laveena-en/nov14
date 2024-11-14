export default {
	myVar1: [],
	myVar2: {},
	async myFun1 () {
		const data = await Query1.run();
		return data;
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}