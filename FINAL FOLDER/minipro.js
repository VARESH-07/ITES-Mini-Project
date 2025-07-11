    const endatee = document.getElementById("datein");
    const today = new Date().toISOString().split("T")[0];
          endatee.setAttribute("min", today);

          const date = document.getElementById("datein");
          const time = document.getElementById("timein");
          const task = document.getElementById("taskin");
      
                date.addEventListener("keydown",function(e){
                  if(e.key == "Enter"){
                    e.preventDefault();
                    time.focus();
                  }
                });
      
                time.addEventListener("keydown",function(e){
                  if(e.key == "Enter"){
                    e.preventDefault();
                    task.focus();
                  }
                });
      
                task.addEventListener("keydown",function(e){
                  if(e.key == "Enter"){
                    e.preventDefault();
                    addtask();
                  }
                })      
 
function addtask(){

    const dislist = document.getElementById("list");
    const today = new Date().toISOString().split("T")[0];
    const endate = document.getElementById("datein").value;
    const entime = document.getElementById("timein").value;
    const entask = document.getElementById("taskin").value.trim();

  if(endate < today){
    alert("ENTER FUTURE TASKS!");
    document.getElementById("datein").value="";
   return;
  }

  if(!entime){
    alert("Enter Time : ");
   return;
  }
    
    const numtasks = document.createElement("div");
              numtasks.className = "inditasks";

    const show = document.createElement("div");
          show.className = "display";

          show.innerHTML = ` <=== ${endate} ===> <br> ${entime} - ${entask}`;

    const controls = document.createElement("div");
          controls.className = "control";

    const ok = document.createElement("button");
          ok.className = "done";
          ok.innerText = "COMPLETE";

          ok.onclick = () => { 
            if(ok.innerText === "COMPLETE"){
            ok.innerText = "COMPLETED";
            ok.style.backgroundColor = "rgb(91, 156, 91)";
            ok.style.color = "white";
            }
            else if(ok.innerText === "COMPLETED"){
            ok.innerText = "COMPLETE";
            ok.style.color = "green";
            ok.style.backgroundColor = "white";
            }
        }

    const old = document.createElement("button");
          old.className = "edit";
          old.innerText = "EDIT";

          old.onclick = () =>  {
                const[oldtime,...taskwords] = show.innerText.split(" - ");
                const oldtask = taskwords.join(" - ");

                const newtask = prompt("Edit Task:",oldtask);

            if(newtask){
                show.innerText = `${oldtime} - ${newtask}`;
            }
          };  

        const no = document.createElement("button");
              no.className = "nope";
              no.innerText = "DELETE";

              no.onclick = () => {
                if(confirm("Delete Task?")){
                    numtasks.remove();
                }
                else{
                    return;
                }
              };

              controls.appendChild(ok);
              controls.appendChild(old);
              controls.appendChild(no);

              numtasks.appendChild(show);
              numtasks.appendChild(controls);

              dislist.appendChild(numtasks);


document.getElementById("datein").value="";
        document.getElementById("timein").value="";
        document.getElementById("taskin").value=""
}
