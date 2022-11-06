let item = document.querySelector('.item');
let placeholders = document.querySelectorAll('.placeholder')


for(const placeholder of placeholders){
    placeholder.addEventListener('dragover',dragover);
    placeholder.addEventListener('dragenter',dragenter)
    placeholder.addEventListener('dragleave',dragleave)
    placeholder.addEventListener('drop',dragdrop)
}

item.addEventListener("dragstart",dragstart);
item.addEventListener("dragend",dragend);


function dragstart(e){
     e.target.classList.add('hold')
    setTimeout(() =>
        e.target.classList.add('hide'),0)
}

function dragend(e){
  e.target.className ='item'
}
function dragover(event){
    event.preventDefault()
}
function dragenter(event){
   event.target.classList.add('hoverred')
}
function dragleave(event){
    event.target.classList.remove('hoverred')
}
function dragdrop(event){
    event.target.append(item)
    event.target.classList.remove('hoverred')
}





