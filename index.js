function shout(phrase) {
    return phrase.toUpperCase();
}

function whisper(phrase) {
    return phrase.toLowerCase();
}

function logShout(phrase) {
    console.log(phrase.toUpperCase());
}

function logWhisper(phrase) {
    console.log(phrase.toLowerCase());
}

function sayHiToGrandma(phrase) {
    if(phrase === phrase.toLowerCase()) {
        let response  = "I can't hear you!";
        return response;
    } else if (phrase === phrase.toUpperCase()) {
        let response = 'YES INDEED!';
        return response;
    } else if (phrase === 'I love you, Grandma.') {
        let response = 'I love you, too.';
        return response;
    }
}