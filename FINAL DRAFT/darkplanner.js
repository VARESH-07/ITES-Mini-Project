    const date = document.getElementById("datein");
    const day = document.getElementById("datein");
          day.value = new Date().toISOString().split("T")[0];

    const endatee = document.getElementById("datein");
    const today = new Date().toISOString().split("T")[0];
          endatee.setAttribute("min", today);      

    const time = document.getElementById("timein");
    const task = document.getElementById("taskin");
    const the = document.getElementById("light");

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
          });

function themechange() {
  if(the.innerText === "LIGHT MODE"){
     the.innerText = "DARK MODE";
     the.style.color = "Black";
     the.style.backgroundColor = "White";
  }  

  else{
    the.innerText = "LIGHT MODE";
    the.style.color = "White";
    the.style.backgroundColor = "Black";

  }
              document.body.classList.toggle("lightheme");
        
      const toggleClass = (collection) => {
            for (let el of collection) {
                 el.classList.toggle("lightheme");
            }
      };
        
            toggleClass(document.getElementsByClassName("box"));
            toggleClass(document.getElementsByClassName("lab"));
            toggleClass(document.getElementsByClassName("inditasks"));
            toggleClass(document.getElementsByClassName("taskadd"));
            toggleClass(document.getElementsByClassName("inbox"));
            toggleClass(document.getElementsByClassName("done"));
            toggleClass(document.getElementsByClassName("edit"));
            toggleClass(document.getElementsByClassName("nope"));
            toggleClass(document.getElementsByClassName("desc"));
        
            document.getElementById("list")?.classList.toggle("lightheme");
            document.getElementById("datein")?.classList.toggle("lightheme");
            document.getElementById("timein")?.classList.toggle("lightheme");
            document.getElementById("taskin")?.classList.toggle("lightheme");
            document.getElementById("light").classList.toggle("lightheme");
            document.getElementById("description").classList.toggle("lightheme");
            document.getElementById("daily").classList.toggle("lightheme");
        }
        


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

    const show = document.createElement("div");

          show.innerHTML = ` <=== ${endate} ===> <br> ${entime} - ${entask}`;

    const controls = document.createElement("div");
          controls.className = "control";

    const ok = document.createElement("button");
          ok.innerText = "COMPLETE";

          ok.onclick = () => { 
            if(ok.innerText === "COMPLETE"){
            ok.innerText = "COMPLETED";
            ok.classList.toggle("redone");
            }
            else if(ok.innerText === "COMPLETED"){
            ok.innerText = "COMPLETE";
            ok.classList.toggle("undone");
            }
        }

    const old = document.createElement("button");
          old.innerText = "EDIT";

          old.onclick = () =>  {
                const[oldtime,...taskwords] = show.innerText.split(" - ");
                const oldtask = taskwords.join(" - ");

                const newtime = prompt("Edit Time:",oldtime);
                const newtask = prompt("Edit Task:",oldtask);

            if(newtask){
                show.innerText = `${newtime} - ${newtask}`;
            }
          };  

        const no = document.createElement("button");
              no.innerText = "DELETE";

              no.onclick = () => {
                if(confirm("Delete Task?")){
                    numtasks.remove();
                }
                else{
                    return;
                }
              };

  if(the.innerText === "LIGHT MODE"){
              numtasks.className = "inditasks";
              show.className = "display";
              ok.className = "done";
              old.className = "edit";
              no.className = "nope";
  }
  
  else if(the.innerText === "DARK MODE"){
              numtasks.className = "inditasks lightheme";
              show.className = "display lightheme";
              ok.className = "done lightheme";
              old.className = "edit lightheme";
              no.className = "nope lightheme";
  }

              controls.appendChild(ok);
              controls.appendChild(old);
              controls.appendChild(no);

              numtasks.appendChild(show);
              numtasks.appendChild(controls);

              dislist.appendChild(numtasks);

        document.getElementById("datein").value=new Date().toISOString().split("T")[0];
        document.getElementById("timein").value="";
        document.getElementById("taskin").value="";
}
