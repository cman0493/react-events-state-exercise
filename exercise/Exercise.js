import { useState } from 'react';
function Exercise(){
    const [num, setNum] = useState(1);
const addNum = () => setNum
return(
    //1e
<div>
    <button onCLick={() => alert('Congrats! YOU HAVE CLICKED THE BUTTON.')} >Click Here</button>
<button onClick={() => addNum}>STATE</button>
<h1>{num +1}</h1>
</div>
)
}
export default Exercise;