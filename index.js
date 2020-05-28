
const onLoad = () => {
    
    let who = ['the dog','my granma','his turtle','my bird'];
    let what = ['eat','pissed','crushed','broked'];
    let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
    
    some_excuse = who[Math.floor(Math.random(0, who.length-1)*10)] + what[Math.floor(Math.random(0, who.length-1)*10)] + when[Math.floor(Math.random(0, who.length-1)*10)];
};

let excuse = document.getElementById('excuse');
document.getElementById("excuse").innerHTML = Math.random();

excuse = onLoad;
console.log(excuse.innerHTML);