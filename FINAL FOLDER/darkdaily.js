    const date = document.getElementById("datein");
    const day = document.getElementById("datein");
          day.value = new Date().toISOString().split("T")[0];

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

    let[hour,minute] = entime.split(":");
    hour = parseInt(hour);
 
    let m = hour >= 12 ? "PM":"AM";

  if(hour > 12){
    hour -= 12;
  }
  else if(hour == 0){
    hour = 12;
  }

const actualtime = hour + ":" + minute + " " + m;

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

          show.innerHTML = ` <=== ${endate} ===> <br> ${actualtime} - ${entask}`;

    const controls = document.createElement("div");
          controls.className = "control";

    const ok = document.createElement("button");
          ok.className = "done";
          ok.innerText = "COMPLETE";

          ok.onclick = () => { 
            if(ok.innerText === "COMPLETE"){
            ok.innerText = "COMPLETED";
            ok.style.backgroundColor = "yellowgreen";
            ok.style.color = "black";
            }
            else if(ok.innerText === "COMPLETED"){
            ok.innerText = "COMPLETE";
            ok.style.color = "yellowgreen";
            ok.style.backgroundColor = "black";
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

        document.getElementById("datein").value=new Date().toISOString().split("T")[0];
        document.getElementById("timein").value="";
        document.getElementById("taskin").value=""
}
