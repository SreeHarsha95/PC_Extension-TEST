console.log("content is running")

function dataToConsole(){
var private = window.document.getElementById("private");
var file = window.document.getElementById("file");
var recordObj ={
    method : "encrypt",
    privateData : private.value,
    fileData : file.value
}
passData(recordObj);
}

var extensionId = 'aankepbjmnmeegkdakmpadfijncbnbbm'

function passData(browserMessage){
 chrome.runtime.sendMessage(extensionId,browserMessage,function(response){
     console.log("The response is" + response.file)
 });
}