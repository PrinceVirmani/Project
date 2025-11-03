class MyEventEmitter{
    constructor(){
        // [events] ko [subscribers] ke array pe map karenge
        // [event] :  [listener]
        this.__event_listeners = {
            // 'user:signup': [()=>{}, ()=>{}]
        }
    }
    on(event, listener){
        // register the [listener] for the [event]

        // if not exits then initialize it with an empty array
        if(!this.__event_listeners[event]){
            this.__event_listeners[event] =[];
        }
        this.__event_listeners[event].push(listener);
        return true;

    }
    emit(event, ...args){
        if(!this.__event_listeners[event]){
            return false;
        }

        const listener = this.__event_listeners[event];
        listener.forEach(listener => listener(...args));
    }
    off(event, listener){
        if(!this.__event_listeners[event]){
            return false;
        }
        const index = this.__event_listeners[event].indexOf(listener);

        if(index< 0){
            return false;
        }
        this.__event_listeners[event].splice(index, 1);
        return true;
    }
    once(event, listener){}

}

const e = new MyEventEmitter();

const sendWhatsAppMsg = (username)=>{console.log("Whatsapp to", username);}

e.on("user:signup", (username) => {console.log("user's name is ", username);})
e.on("user:signup", (username) => {console.log("Sending email to ", username);})
// e.on("user:signup", (username) => {console.log("sending whatsapp msg to ", username);})
e.on("user:signup", sendWhatsAppMsg);
e.on("user:logout", (username) => {console.log("user logout", username);})

e.emit("user:signup", "@prince");
e.emit("user:signup", "@princeagain");
e.off("user:signup", sendWhatsAppMsg);
e.emit("user:signup", "@princefirse");
e.emit("user:logout", "@prince");


// constructor 
// on
// emit
// off
// once