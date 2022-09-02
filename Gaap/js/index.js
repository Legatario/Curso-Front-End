const prev = document.querySelector('.previun');
const next = document.querySelector('.next');
const c1 = document.querySelector('#c1');
const c2 = document.querySelector('#c2');
const c3 = document.querySelector('#c3');
const artigo1 = document.getElementById('artigo1');
const artigo2 = document.getElementById('artigo2')
const artigo3 = document.getElementById('artigo3')
let a = 0

artigo2.style.display = 'none';
artigo3.style.display = 'none';

prev.addEventListener("click",function(){
    a -= 1;
    modific();
    principal();
});

next.addEventListener("click",function(){
    a += 1;
    modific();
    principal();
});

function modific(){
    switch(a){
        case -1:
            a = 2;
            break;
        case 3:
            a = 0;
            break;   
    }
}

function principal(){
    switch(a){
        case 0:
            c1.classList.add("first");
            artigo1.style.display = 'block';
            artigo2.style.display = 'none';
            artigo3.style.display = 'none';

            if(c2.classList.contains("first")){
                c2.classList.remove("first");
            }
            if(c3.classList.contains("first")){
                c3.classList.remove("first");
            }
            break;
        case 1:
            c2.classList.add("first");
            artigo1.style.display = 'none';
            artigo2.style.display = 'block';
            artigo3.style.display = 'none';

            if(c1.classList.contains("first")){
                c1.classList.remove("first");
            }
            if(c3.classList.contains("first")){
                c3.classList.remove("first");
            }
            break;
        case 2:
            c3.classList.add("first");
            artigo1.style.display = 'none';
            artigo2.style.display = 'none';
            artigo3.style.display = 'block';

            if(c1.classList.contains("first")){
                c1.classList.remove("first");
            }
            if(c2.classList.contains("first")){
                c2.classList.remove("first");
            }
            break;         
    }
}