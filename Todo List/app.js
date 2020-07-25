var list= document.getElementById("list")

function Add(){
   var todoItem=document.getElementById("todoItem")
   var li= document.createElement("li")
   var liText=document.createTextNode(todoItem.value)


   var delBtn=document.createElement("button")
   var delText=document.createTextNode("Delete")
   delBtn.setAttribute("onClick","Delete(this)")
   delBtn.appendChild(delText)


   
   var editBtn=document.createElement("button")
   var editText=document.createTextNode("Edit")
   editBtn.setAttribute("onClick","Edit(this)")
   editBtn.appendChild(editText)


   
   li.appendChild(liText)
   li.appendChild(delBtn) 
   li.appendChild(editBtn) 
   


   list.appendChild(li)
  
   todoItem.value=""

}

function Delete(x){
   x.parentNode.remove()
    
}

function Edit(x){
    var chg= prompt("Enter Edit Value",x.parentNode.firstChild.nodeValue)
   
    x.parentNode.firstChild.nodeValue=chg


     
 }

 function deleteAll(){

    list.innerHTML=""
 }