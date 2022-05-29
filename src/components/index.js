import './chess.css';
import { useState } from 'react';
import Chess from './Chess';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Index = ()=>{

    let flag = true;
    const [sizeOfGrid , setGrid] = useState(0);

    const onTextChange = (e) =>{
        
        let myNum = parseInt(e.target.value);
        if(myNum || myNum === 0 || e.target.value === ''){
            console.log(myNum);
            flag = true;
        }
        else{
            toast.error("Enter Valid Number", {
                position : 'top-right'
            });
            flag = false;
            
        }
        setGrid(e.target.value);
    }
    return(
        <>
            <div className="topnav">
                <h2 >Flexible Chess Board</h2>
                <label>Enter Size:  </label>
                <input type="text"  placeholder="Enter Size"
                        name="searchText"
                        value = {sizeOfGrid} onChange = {onTextChange}/>
            </div>
            <div>
                {
                  (flag === true) ? ( <Chess value = {sizeOfGrid}/> ) : null
                }
            </div>
            <ToastContainer></ToastContainer>
        </>
    )
}

export default Index;