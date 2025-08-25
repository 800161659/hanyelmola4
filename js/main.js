

document.querySelector("#formList").addEventListener("submit",toDoList);
function toDoList(event){
    var user=document.querySelector("#user").value;
    var result=document.querySelector("#result"); //ul

    if(user==""){
        alert("Enter value");
        event.preventDefault();
    }else{
        var myLi=document.createElement("li");
        var text = document.createElement("span");
        myLi.innerHTML=user;
            var delBtn = document.createElement("span");
            delBtn.innerHTML = " 🗑️";
            delBtn.style.cursor = "pointer";
            delBtn.style.marginLeft = "1px";

               delBtn.addEventListener("click", function () {
                myLi.remove();
            });
            myLi.appendChild(text);
            myLi.appendChild(delBtn);
        result.append(myLi);
        document.querySelector("#user").value="";
        event.preventDefault();    // return false;

    }

}