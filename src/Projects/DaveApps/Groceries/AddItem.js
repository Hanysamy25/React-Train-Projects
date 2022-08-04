import React,{useRef} from 'react';

import { FaPlus } from 'react-icons/fa';
import style from './Groceries.module.css';


const AddItem = ({newItem,setNewItem,handelSubmit}) => {
const inputRef=useRef();
  return (
    <>
    <form action="" className={style.addForm} onSubmit={handelSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input 
        type="text"
        autoFocus
        ref={inputRef}
        id='addItem'
        placeholder='Add Item'
        required
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
        />
        <button
        type='submit'
        aria-label='Add Item'
        onClick={()=>inputRef.current.focus()}
        >
            <FaPlus/>
        </button>
    </form>
    </>
  )
}

export default AddItem