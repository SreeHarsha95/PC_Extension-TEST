//Listens to all external calls
  
    chrome.runtime.onMessageExternal.addListener(
        function(request, sender, sendResponse)
     {
       if(request.method == "encrypt"){
        var chars =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz*&-%/!?*+=()";
        var randomstring = '';
        var key = generateKey(50);
        function generateKey(keyLength){   
          for (var i=0; i < keyLength; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum,rnum+1);
              }
        return randomstring}
        var fileCipher = merged.cryptoJS.AES.encrypt(request.fileData,key)
        console.log(fileCipher)
        var privateDataCipher = merged.cryptoJS.AES.encrypt(request.fileData,key)
        chrome.storage.local.get(['public'],function(result){
          if(typeof result !== 'undefined'){
          var publicKey = merged.naclutil.decodeBase64((result.public).toString());}
        })
        chrome.storage.local.get(['private'],function(result){
          if(typeof result !== 'undefined'){
          var privateKey = merged.naclutil.decodeBase64((result.private).toString());}
        })
        //hashGeneration
        //signature
        //PublicKey encryption

        var JSON_Object = {
          file : fileCipher.toString(),
          private : privateDataCipher.toString(),
          assymetricKeyCipher : "xxx",          //PublciKeyEncryption cipher
          hash :   "xxx",                       //One way hash - SHA256
          sign : "xxx"                          //Signature of the hash 

        }
              sendResponse(JSON_Object)

      }

      else if(request.method == "decrypt"){
        //verify PublicKey
        chrome.storage.local.get(['private'],function(result){
          if(typeof result !== 'undefined'){
            var noKeys = "Could not find the keys"
            sendResponse(noKeys)
          }else{
          var privateKey = merged.naclutil.decodeBase64(result.private);
          console.log(privateKey)
          }
        })
        //aes Key decrypt using private Key

        var fileData = merged.cryptoJS.AES.decrypt(key,request.file)
        var privateData = merged.cryptoJS.AES.decrypt(key,request.private)
        
        var JSON_Object = {
          file : fileData,
          private : privateData
        } 

        sendResponse(JSON_Object)
      }
      })
    
        
        

      

  document.getElementById('generateKeys').addEventListener("click", function() {
            const res =  merged.nacl.sign.keyPair();
            console.log(res.publicKey)
            console.log(res.secretKey)
            chrome.storage.local.set({'public' : merged.naclutil.encodeBase64(res.publicKey), 'private' : merged.naclutil.encodeBase64(res.secretKey)},function(){
                console.log('value is set to ' + res )

            })})
     

//}
        


