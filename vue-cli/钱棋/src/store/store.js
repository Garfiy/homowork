export default {
    num: 1,
    changeNum(num) {
        // console.log(num);
        this.num = num
    },
    dataObj: [],
    submitData(data) {
        this.dataObj.push(data);
    },
    removeData(index) {
        this.dataObj.splice(index, 1);
    }
}