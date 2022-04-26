
let myBtn = Array.from(document.getElementsByClassName('key'));
let displayer = document.getElementById('display');

function clicking() {
    console.log('clicked');
}

myBtn.map( button => {
    button.addEventListener('click', (e) => {
        console.log(button.innerText);
        displayer.value += e.target.innerText;    
    })
});

let delData = document.getElementById('backSpace');

function deleteData() {
    displayer.value = displayer.value.slice(0, -1);
}

delData.addEventListener('click', deleteData);

let clearData = document.getElementById('clearD'); 

function clearD() {
    displayer.value = null;
    console.log("cleardddd")
}

clearData.addEventListener('click', clearD);

let enterBtn = document.getElementById('enter'); 

function enterK() {
    displayer.value += '\n';
    console.log("sowa ta3 mok");
}

enterBtn.addEventListener('click', enterK);


let spaceBtn = document.getElementById('space')

function addSpace() {
    displayer.value = displayer.value + ' ';
    console.log('space');
}

spaceBtn.addEventListener('click', addSpace)

function copyText() {
    let displayer = document.getElementById('display');
    displayer.select();
    displayer.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(displayer.value);
    alert("Copied")
}

let copyBtn = document.getElementById('copy')

copyBtn.addEventListener('click', copyText)

function youTube() {
    window.open('https://www.youtube.com/results?search_query=' + displayer.value, "_blank").focus()
}

let ytBtn = document.getElementById('ytube');

ytBtn.addEventListener('click', youTube);

function googleIt() {
    window.open('https://www.google.com/search?q=' + displayer.value, "_blank").focus()
}

let GBtn = document.getElementById('google');

GBtn.addEventListener('click', googleIt);









