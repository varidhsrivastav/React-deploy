import React,{useState} from 'react'

const Myaccordian =({question, answer, question1, answer1})=>{
    const [show, setShow] = useState(false);
    return(
        <>
            <div className='main-heading'>
            <div  onClick={()=> setShow(!show)}>
            <div className='clickable'>
            <div className="">
            <p> {show?"–":"+"}</p>
            </div>
            <div className=" ">
            <h3>{question1}{question}</h3> 
            </div>
            </div>
            <div className="answers">
            { show && <p>{answer1}{answer}</p>}
            </div>
            </div>
                {/* <p onClick={()=> setShow(!show)}> */}
                {/* if show is true show - or if false then show + */}
                {/* {show?"–":"+"}</p> */}
                {/* <h3>{question}</h3> */}
            </div>
            {/* return value only if the data is true */}  
            
        </>
    )
}

export default Myaccordian