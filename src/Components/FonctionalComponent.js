import { useEffect, useState } from "react";
//rfc
export default function FunctionalComponent(props){
    const [likes,setlikes] = useState(0);
    //console.log(likes);
 const sayHello=()=>{
        console.log("hello from function");
    }
    useEffect(()=>{
        console.log('I m rendering');
        console.log('I m updating');
        return ()=>{console.log('Im unmouting')}
    })
    return (
        <>
        <p>{props.title}</p>
        <button onClick={sayHello}>say hello</button>
<p>{likes}</p>
        <button onClick={()=>setlikes(likes+1)}>likes</button>
        
        </>
    )
}