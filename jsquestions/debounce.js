function debounce (fn, delay){
    let timerId;
    
    return function(...args){
        clearTimeout(timerId) // cancel the last call 
        timerId=setTimeout(() => {
         fn(...args);   
        }, delay);
    }
}

const search=(query) => {
    console.log("searching for", query);
}

const searchDebounce = debounce(search, 1000);

searchDebounce("h")
searchDebounce("he")
searchDebounce("hel")
searchDebounce("hell")
searchDebounce("hello")

// search("h");
// search("he");
// search("hel");
// search("hell");
// search("hello");
