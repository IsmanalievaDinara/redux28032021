import {useState} from 'react'
import * as action from './store/actions/actions'
import {useSelector,useDispatch} from 'react-redux'
import { bindActionCreators } from 'redux'


function Todos(){
    const [value,setValue] = useState("")
    const todos = useSelector((state)=>state.todosReducer)
    
    const handlerOnChange = (v) =>{
        setValue(v)
    }
    const handlerClick = () =>{
        dispatchEvent({type:bindActionCreators.ADDTODO,payload:value})

    }
    return(
        <>
       <div><input value onChange={(e)=>handlerOnChange(e.target.value)}/></div>
       <button onClick={()=>handlerClick()}>add Todo </button>
        {
            todos.map((todo)=>{
                <li key={todo}>{todo}</li>


            })
            
            
        } 
         
         </>
    )
}
export default Todos