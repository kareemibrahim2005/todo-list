document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newtask input').value.length == 0){
         alert('Please Enter a Task')


    } else {
        document.querySelector('#task').innerHTML += `
        <div class="tasks">
          <span id="taskname">
            ${document.querySelector('#newtask input').value}
          </span>
       


        <button class="delete">&times
        </button> 
        </div>
        `;
        var current_task = document.querySelectorAll(".delete")
for (let i = 0; i < current_task.length; i++) {
     current_task[i].onclick = function(){
        this.parentNode.remove();
     }
    
}
    }
}
