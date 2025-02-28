new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task done");
    }, 2000)
}).then(() => {
    console.log("Sampla Vishay");
})