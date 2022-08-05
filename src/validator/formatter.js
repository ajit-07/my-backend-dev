const hString="      FuNCtion UP      "
let tr=function toTrim(){
    let result=hString.trim()
    console.log("Trimmed string is ==>",result)
}
module.exports.trimedString=tr;
 let lowercase=function changeToLowerCase(){
     let result2=hString.trim().toLowerCase()
     console.log("string converted to lower case is==>",result2)
 }
 module.exports.lowercase=lowercase;
 let uppercase=function changeToUpperCase(){
     let result3=hString.trim().toUpperCase()
     console.log("string converted to upper case is==>",result3)
 }
 module.exports.uppercase=uppercase