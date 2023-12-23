
    // Check if the name is already set
    let name = localStorage.getItem("user_name");

    // If the name is not 
    if (!name) {
        name = prompt("Enter your name:");
    
        // Save the name in local storage for future ok
        localStorage.setItem("user_name", name);
    }
    
    // Display the name
    document.querySelector(".name").innerHTML = name;
    
    
      
    
        const inputbox = document.querySelector("#input-box");
        const listcontainer = document.querySelector("#list-container");
    
        function addTask(){
            if(inputbox.value === ''){
                alert("you must write something !");
            }else{
                let li=document.createElement("li");
                li.innerHTML=inputbox.value;
                listcontainer.appendChild(li);
    
                let span= document.createElement("span");
                span.innerHTML = "\u00d7";
                li.appendChild(span);
            }
            inputbox.value= "";
            savedata();
    
    
        }
    
        function click(e){  
            if(e.keycode === 13){
                e.preventDefault();
                document.querySelector(".btn").click();
        }
    }
    
        listcontainer.addEventListener("click",function(e){
            if(e.target.tagName === "LI"){
                e.target.classList.toggle("checked");
                savedata();
            }
            else if(e.target.tagName === "SPAN"){
                e.target.parentElement.remove();
                savedata();
            }
        }, false);
    
        function savedata(){
            localStorage.setItem("data",listcontainer.innerHTML);
        }
    
        function showdata(){
            listcontainer.innerHTML = localStorage.getItem("data");
        }
        showdata();
    