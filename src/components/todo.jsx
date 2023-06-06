import {useState} from 'react'
export const Todo = ({item, onUpdate, onDelete}) => {
  const[isEdit, setIsEdit]=useState(false);
  
  function FormEdit(){
   const [newValue, setNewValue]=useState(item.title);
    function handleSubmit(e){
        e.priventDefautl();
    }
    function handleChange(e){  
        const value=e.target.value;
        setNewValue(value);
     }
    function handleClickUpddateTodo(){
        onUpdate(item.id, newValue);
        setIsEdit(false);
    }

    return ( 
        <form className='todoUpdateForm' onSubmit={handleSubmit}>
        <input type="text" className='todoInput' onChange={handleChange} value={newValue}/>
        <button className='button' onClick={handleClickUpddateTodo}>update</button> 
    </form>
    )
  }
  
  function TodoElement(){
    return  <div className='todoInfo'>  
    {item.title}
    <button onClick={()=>setIsEdit(true)}> Edit </button>
    <button onClick={(e)=>onDelete(item.id)} > Delete </button>
    </div> 
  }
  return (
        <div className='todo'>
            {isEdit ? <FormEdit/> : <TodoElement/>}
            </div>
    );
};

