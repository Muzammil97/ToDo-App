var todoInput = document.getElementById('todoInput')
var listItems = document.getElementById('listItems')
function addItem(){
    if(todoInput.value){
        var liElement = document.createElement('li')
        var liText = document.createTextNode(todoInput.value)
        liElement.appendChild(liText)
        listItems.append(liElement)
        console.log(liElement);
        todoInput.value = ""


        var deletebtn = document.createElement("button")
        var delBtnText = document.createTextNode("Delete");
        deletebtn.appendChild(delBtnText)

        liElement.appendChild(deletebtn)

        deletebtn.setAttribute('onclick' ,'dltItem(this)')



        var editbtn = document.createElement("button")
        var editbtnText = document.createTextNode("Edit");
        editbtn.appendChild(editbtnText)
        
        liElement.appendChild(editbtn)

        editbtn.setAttribute('onclick','editItem(this)')


        // var editbtn = liElement.createElement("button")
        // var editbtnText = liElement.createElement("button")

        // var delBtnElement = document.createElement("button");

        // var delBtnText = document.createTextNode("Delete");

        // delBtnElement.appendChild(delBtnText);

        // liElement.appendChild(delBtnElement);

        // delBtnElement.setAttribute("onclick", "deleteSingleItem(this)");

        // // create edit button liElement

        // var editBtnELement = document.createElement("button");

        // var editBtnText = document.createTextNode("Edit");

        // editBtnELement.appendChild(editBtnText);

        // editBtnELement.setAttribute("onclick", "editItem(this)");

        // liElement.appendChild(editBtnELement);

        // console.log(liElement);

    }
    else{
        alert('item must be filled and not empty')
    }
}

function dltItem(x){
    x.parentNode.remove()

}



function editItem(x){
    var updatedVal = prompt('Enter updated value')
    x.parentNode.firstChild.nodeValue = updatedVal
}
function deleteAll(){
    listItems.innerHTML = ""

}