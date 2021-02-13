// window methods / objects / properties

//alert
alert('Ohaiyo SErR');

// prompt
const input = prompt();
alert(input);

// confirm
if(confirm('Are u siGUrado? :O')) {
    console.log('YEZ DARLING!');
} else {
    console.log('EDNIH SER HEHE');
}

let value;

// outer height and width
value = window.outerHeight;
value = window.outerWidth;

//Inner height and width
value = window.innerHeight;
value = window.innerWidth;

//scroll points
value = window.scrollX;
value = window.scrollY; 

//location object
value = window.location;
value = window.location.hostname;
value = window.location.port;
value = window.location.href;
value = window.location.search;

//Redirect
window.location.href = 'https://www.netflix.com';

//Reload
window.location.reload();

//Navigation Object
value = window.navigator;
value = window.navigator.appName;
value = window.navigator.appVersion;
value = window.navigator.clipboard;
value = window.navigator.appCodeName;
value = window.navigator.userAgent;
value = window.navigator;
value = window.navigator.platform;
value = window.navigator.vendor;
value = window.navigator.languages;

console.log(value);

console.log(clear);