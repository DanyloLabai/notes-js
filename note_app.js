const inputEl = document.getElementById("title");
const createbtn = document.getElementById("create");
const listEl = document.getElementById("list");

const notes = [
    {
        title: "Do all homework",
        completed: false,
    },
    {
        title: "Write a letter",
        completed: true,
    },
];

function render (){
    listEl.innerHTML= "";
    for(let i = 0 ; i < notes.length; i ++){
        listEl.insertAdjacentHTML("beforeend", getListt(notes[i],i) );
    }
}

render();

createbtn.onclick = function(){
    if(inputEl.value.length == 0){
        return;
    }
    const newNote = {
        title:  inputEl.value,
        completed: false,
    }
    notes.push(newNote);
    render();
    inputEl.value = "" ;  
}

listEl.onclick = function (event){
    if(event.target.dataset.index){
        const index = Number(event.target.dataset.index);
        const type = event.target.dataset.type;
        if(type === "togle"){
            notes[index].completed =!  notes[index].completed ;
        }
        else if (type === "remove")
        {
            notes.splice(index , 1);
        }
        render();
    }
}

function getListt (notes,index){
    return `   <li class="list-group-item">
         <span class="${notes.completed ? "completed" : ""}">${notes.title}</span>
         <span>
             <span class="btn-${notes.completed ? "warning" : "success" }" data-index="${index}" data-type="togle">&check;</span>
              <span class="btn-danger"data-index="${index}" data-type="remove">&times;</span>
         </span>
        </li>`
}
