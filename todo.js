let todoList=[
    {
        item:'go to jym',
        dueDate: '02/10/2024'
    },
    {
        item:'go to office',
        dueDate:'10/06/2024'
    }
];

displayItems();

function addTodo(){
    let inputElement=document.getElementById("todo-input");
    let dateElement=document.getElementById("todo-date");
    let todoItem=inputElement.value;
    let todoDate=dateElement.value;
    todoList.push({item:todoItem,dueDate:todoDate});
    inputElement.value='';
    dateElement.value='';
    displayItems();
}

function displayItems(){
    let containerElement=document.querySelector('.todo-container');
    let newHtml='';
    for(let i=0;i<todoList.length;i++){
        //let item=todoList[i].item;
        //let dueDate=todoList[i].dueDate;
        let{item,dueDate}=todoList[i]; 
       newHtml+= `
       <span>${item}</span>
       <span>${dueDate}</span>
       <button class="btn-delete" onclick="todoList.splice(${i},1);displayItems();">delete</button>
       `;
    }
    containerElement.innerHTML=newHtml;
}