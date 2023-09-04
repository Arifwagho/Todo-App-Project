var inp = document.getElementById("inp");
var listItem= [];
var list = document.getElementById("list")





function getInputValue() {
    if(inp.value==""){

        alert("Input Filed is Empty")
        return;
    }

    listItem.push(inp.value);
    inp.value = "";
    render();







}
function render() {
    list.innerHTML = "";
    for (var i = 0; i < listItem.length; i++) {
        list.innerHTML += `<li class="listStyle"> ${listItem[i]}  <button  onclick=" editTodo(${i})">Edit </button > <button  onclick=" deleteTodo(${i})"> Delete </button> </li>`;

    }

}
function deleteTodo(indexNum){
    listItem.splice(indexNum,1);
    render();

}
function editTodo(indexNum){
    listItem[indexNum] = prompt("Enter new value");
    render();
}
function deleteAll(){
    listItem = [];
    list.innerHTML = "";
}


