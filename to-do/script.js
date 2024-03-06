const inp1 = document.getElementById("inp");
const tasks1 =  document.getElementById("tasks");

function addTask()
{
    if(inp1.value =='')
    {
        alert("Please add a task");
    }
    else if(inp1.value == 'hero kaun?')
    {
        alert("Mehul, aur kaun");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inp1.value;
        tasks1.appendChild(li);
        let cross = document.createElement("span");
        cross.innerHTML="\u00d7";
        li.appendChild(cross);
    }
    inp1.value="";
    save();
}

tasks1.addEventListener("click", function(e){
    if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        save();
    }
    else if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        save();
    }
},false);

function save()
{
    localStorage.setItem("things", tasks1.innerHTML);
}

function display()
{
    tasks1.innerHTML = localStorage.getItem("things");
}
display();