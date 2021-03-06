window.onload = function ()
{
    var container = document.getElementById("container")
    var positivity = document.getElementsByClassName("positivity")[0]

    console.log("calling home")    
    positive()
}

function heal()
{
   fetch('./healing.json')
    .then(res => res.json())
    .then((out) => {
        container.innerHTML = ""
        for(idx in out["quotes"])
        {
            console.log(out["quotes"][idx])
            let div = document.createElement('div')
            div.classList.add("jumbotron")
            div.classList.add("jumbotron-fluid")
            let blockquote = document.createElement('blockquote')
            blockquote.classList.add("blockquote")
            div.appendChild(blockquote)
            let p =  document.createElement('p')
            p.innerHTML = out["quotes"][idx]
            blockquote.appendChild(p)
            container.appendChild(div)
        }
        console.log('Output: ', out);
}).catch(err => console.error(err));    
}


function positive()
{
   fetch('./positivity.json')
    .then(res => res.json())
    .then((out) => {
        container.innerHTML = ""
        for(idx in out["quotes"])
        {
            console.log(out["quotes"][idx])
            let div = document.createElement('div')
            div.classList.add("jumbotron")
            div.classList.add("jumbotron-fluid")
            let blockquote = document.createElement('blockquote')
            blockquote.classList.add("blockquote")
            div.appendChild(blockquote)
            let p =  document.createElement('p')
            p.innerHTML = out["quotes"][idx]
            blockquote.appendChild(p)
            container.appendChild(div)
        }
        console.log('Output: ', out);
}).catch(err => console.error(err));    
}

function success()
{
   fetch('./success.json')
    .then(res => res.json())
    .then((out) => {
        container.innerHTML = ""
        for(idx in out["quotes"])
        {
            console.log(out["quotes"][idx])
            let div = document.createElement('div')
            div.classList.add("jumbotron")
            div.classList.add("jumbotron-fluid")
            let blockquote = document.createElement('blockquote')
            blockquote.classList.add("blockquote")
            div.appendChild(blockquote)
            let p =  document.createElement('p')
            p.innerHTML = out["quotes"][idx]
            blockquote.appendChild(p)
            container.appendChild(div)
        }
        console.log('Output: ', out);
}).catch(err => console.error(err));    
}

function strength()
{
   fetch('./strength.json')
    .then(res => res.json())
    .then((out) => {
        container.innerHTML = ""
        for(idx in out["quotes"])
        {
            console.log(out["quotes"][idx])
            let div = document.createElement('div')
            div.classList.add("jumbotron")
            div.classList.add("jumbotron-fluid")
            let blockquote = document.createElement('blockquote')
            blockquote.classList.add("blockquote")
            div.appendChild(blockquote)
            let p =  document.createElement('p')
            p.innerHTML = out["quotes"][idx]
            blockquote.appendChild(p)
            container.appendChild(div)
        }
        console.log('Output: ', out);
}).catch(err => console.error(err));    
}

function morning()
{
   fetch('./morning.json')
    .then(res => res.json())
    .then((out) => {
        container.innerHTML = ""
        for(idx in out["quotes"])
        {
            console.log(out["quotes"][idx])
            let div = document.createElement('div')
            div.classList.add("jumbotron")
            div.classList.add("jumbotron-fluid")
            let blockquote = document.createElement('blockquote')
            blockquote.classList.add("blockquote")
            div.appendChild(blockquote)
            let p =  document.createElement('p')
            p.innerHTML = out["quotes"][idx]
            blockquote.appendChild(p)
            container.appendChild(div)
        }
        console.log('Output: ', out);
}).catch(err => console.error(err));    
}

function selfworth()
{
   fetch('./selfworth.json')
    .then(res => res.json())
    .then((out) => {
        container.innerHTML = ""
        for(idx in out["quotes"])
        {
            console.log(out["quotes"][idx])
            let div = document.createElement('div')
            div.classList.add("jumbotron")
            div.classList.add("jumbotron-fluid")
            let blockquote = document.createElement('blockquote')
            blockquote.classList.add("blockquote")
            div.appendChild(blockquote)
            let p =  document.createElement('p')
            p.innerHTML = out["quotes"][idx]
            blockquote.appendChild(p)
            container.appendChild(div)
        }
        console.log('Output: ', out);
}).catch(err => console.error(err));    
}

function motivation()
{
   fetch('./motivation.json')
    .then(res => res.json())
    .then((out) => {
        container.innerHTML = ""
        for(idx in out["quotes"])
        {
            console.log(out["quotes"][idx])
            let div = document.createElement('div')
            div.classList.add("jumbotron")
            div.classList.add("jumbotron-fluid")
            let blockquote = document.createElement('blockquote')
            blockquote.classList.add("blockquote")
            div.appendChild(blockquote)
            let p =  document.createElement('p')
            p.innerHTML = out["quotes"][idx]
            blockquote.appendChild(p)
            container.appendChild(div)
        }
        console.log('Output: ', out);
}).catch(err => console.error(err));    
}