function addtask(){

    const dislist = document.getElementById("list");

    const entime = document.getElementById("timein").value;
    const entask = document.getElementById("taskin").value.trim();

  if(!entime){
    alert("ENTER THE TIME");
   return;
  }
    
    const numtasks = document.createElement("div");
              numtasks.className = "inditasks";

    const show = document.createElement("div");
          show.className = "display";

          show.innerText = `${entime} - ${entask}`;

    const controls = document.createElement("div");
          controls.className = "control";

    const ok = document.createElement("button");
          ok.className = "done";
          ok.innerText = "COMPLETE";
          ok.style.color = "rgb(63, 113, 63)";

          ok.onclick = () => { 
            if(ok.innerText === "COMPLETE"){
            ok.innerText = "COMPLETED";
            ok.style.backgroundColor = "rgb(91, 156, 91";
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

        document.getElementById("timein").value="";
        document.getElementById("taskin").value=""
}