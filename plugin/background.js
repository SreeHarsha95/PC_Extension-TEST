chrome.browserAction.onClicked.addListener(setup)
function setup(){
    noCanvas();
    chrome.runtime.onMessageExternal.addListener(
        function(request, sendResponse)
     {
        var chars =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz*&-%/!?*+=()";
          var randomstring = '';
          var key = generateKey(50);
          function generateKey(keyLength){   
          for (var i=0; i < keyLength; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum,rnum+1);
              }
          return randomstring
               var documentDataCipher = merged.cryptoJS.AES.encrypt(request.fileData,key)
      chrome.storage.local.get(['public'],function(result){
          var publicKey = JSON.parse(userPubKey);
          merged.
      })
    
        console.log(request.privateData)
        

         })

    document.getElementById('generateKeys').addEventListener("click", function() {
            let res =  merged.nacl.box.keyPair();
            console.log(res.publicKey)
            console.log(res.secretKey)
            chrome.storage.local.set({'public' : JSON.stringify(res.publicKey), 'private' : JSON.stringify(res.secretKey)},function(){
                console.log('value is set to ' + res )

            })})
     
    
}
        


