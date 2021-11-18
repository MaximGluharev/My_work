function toDO () {
    let input = document.querySelector("input[type='text']");

    let ul = document.querySelector("ul.toDoList");

    let clearListToDo = document.querySelector("button.clear");

    function createTodo() {
        let li = document.createElement("li");

        let textSpan = document.createElement("span");
        textSpan.classList.add("todo-text");

        let newTodo = input.value;

        textSpan.append(newTodo);

        let deleteBtn = document.createElement("span");
        deleteBtn.classList.add("delete");
        deleteBtn.innerHTML = '&times';

        ul.appendChild(li).append(textSpan, deleteBtn);

        input.value = "";
        
        deleteToDo(deleteBtn);
      
    }

    createTodo();

    function deleteToDo (element) {
        element.addEventListener("click", (event) => {
            element.parentElement.remove();
            event.stopPropagation();

        });

    };

    ul.addEventListener("click", delAll);
    
    function delAll () {
        ul.innerHTML = "";
        localStorage.removeItem('toDotable', ul.innerHTML);

    }

    clearListToDo.addEventListener("click", delAll);

}



