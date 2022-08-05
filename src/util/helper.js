let pD=function printDate(){
    let today=new Date()
    let dd=today.getDate()
    console.log("Today's date is ==>",dd)
}
module.exports.todayDate=pD;

let pM=function printMonth(){
    let monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let month=new Date()
    let mm=monthName[month.getMonth()]
    console.log("Today's month is ==>",mm)
}
module.exports.todayMonth=pM;

let gBi=function getBatchInfo(){
    console.log("Plutonium, W3D3, the topic for today is Nodejs module system")
}
module.exports.batchInfo=gBi;