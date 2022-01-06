import React from "react";

function TodoApp(){
    const [state,setState] = React.useState("")
    const [newList,setList] = React.useState([])

    let Todo = (event)=>{
        console.log(event.target.value)
        setState(event.target.value)
    }
    let AddToList = (event)=>{
        console.log(state);
        
        newList.push(state)
        console.log(newList);
        event.preventDefault();
        setState("")
    }
    let deleteItem = (index)=>{
        let indexOfItem = index
        newList.splice(indexOfItem,1)
        setList([...newList])
    }

    return (
         <div className="main">
    <div className="Todo">
        <div className="item">
            <input type="text" value={state} onChange={(event)=>{Todo(event)}} placeholder="Add your task"/>
            <button onClick={AddToList}>ADD ITEM</button>
        </div>
    <div>
        <ol className="ItemList">
            {newList.map((value,index)=>{
                return <li key={value+index}>{value}
                <button onClick={()=>{deleteItem(index)}}>DELETE</button></li>
            }
            )}
        
        </ol>
       </div>
    </div> 
    </div>       
    )}
    export default TodoApp
