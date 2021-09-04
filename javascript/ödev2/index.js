const list = document.getElementById("list");
const toasterClose = document.getElementById("close")
const toast = document.getElementById("liveToast");
const toastInfo = document.getElementById("toast-info");
var tasklist;
if(localStorage.tasklist){
    var tasklist = JSON.parse(window.localStorage.getItem("tasklister"))
}else{
    var tasklist = []
}
console.log(tasklist);
function newElement(){
    const task = document.getElementById("task");
    
    if(task.value !== ""){
        const info = "Item added to list";
        const li = document.createElement("li");
        const spanClose = document.createElement("span");
        li.textContent = task.value;

        li.onclick = (e) =>{
            if(e.currentTarget.classList.contains("checked")){
                e.currentTarget.classList.remove("checked")
            }else{
                e.currentTarget.classList.add("checked")
            }
        }
        
        spanClose.innerHTML = "x"
        spanClose.classList.add("close");
        
        spanClose.onclick = (e) => {
            const index = tasklist.indexOf(e.target.parentElement);
            tasklist.splice(index,1);
            window.localStorage.setItem("tasklister",JSON.stringify(tasklist));
            e.target.parentElement.remove();
        }
        
        li.append(spanClose);
        tasklist.push(li);
        window.localStorage.setItem("tasklister",JSON.stringify(tasklist));
        list.append(li);
        toester(info)
        task.value = "";
    }else{
       const info = "Empty element cannot be added to the list";
       toester(info);
    }
}

function toester(info){
    toast.classList.remove("hide");
    toast.classList.add("show");
    toastInfo.innerHTML = info;
}

toasterClose.onclick = () =>{
    toast.classList.remove("show");
    toast.classList.add("hide");
}


