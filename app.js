window.onload = function ()
{
    var container = document.getElementById("container")
    var positivity = document.getElementsByClassName("positivity")[0]

    console.log("calling home")    
    home()
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


function home()
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

function positivity()
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

function life()
{
   fetch('./life.json')
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