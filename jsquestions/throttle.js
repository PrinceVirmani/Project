function throttle(fn, delay){
    let lastCall =0;

    return function(...args){
        const now = Date.now();
        if(now - lastCall < delay){
            return;
        }
        lastCall = now;
        return fn(...args);
    }
}

function sendingChatMessage(msg){
    console.log("sending message", msg);
}

const sendMessageWithSlowMode = throttle(sendingChatMessage, 2*1000);


sendMessageWithSlowMode("hello");
sendMessageWithSlowMode("hello again");
sendMessageWithSlowMode("hello third time");
sendMessageWithSlowMode("hello fourth time firse");



// sendingChatMessage("hello");
// sendingChatMessage("hello again");
// sendingChatMessage("hello third time");
// sendingChatMessage("hello fourth time firse");
