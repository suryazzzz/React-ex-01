import React,{useState} from 'react'
const FunctionalCount = () => {
    const [count,setCount] = useState(0)
    const handleClick = () =>{
        setCount(count+1)
    }
    const handledecrease = () =>{
        setCount(count-1)
    }
   
    return(
    <>
    <div className="Score">
     <h1>Counter:{count}</h1>
     <button onClick={() => handleClick()}>Increse</button><br></br>
     <br></br>
    {count !==0 && <button onClick={() => handledecrease()}>Decrese</button>}
    <br></br><br></br>

        </div>
        <div class ="slide">
            <h1>Department of CT-PG</h1>
            <h1>PO1</h1>

<h4>Computational knowledge: Apply knowledge of mathematics and computing to the abstraction and conceptualization of computing models from defined problems and requirements.</h4>

<h1>PO2</h1>

<h4>Problem analysis: Identify, formulate and solve complex computing problems reaching substantiated conclusions using fundamental principles of mathematics and computer science.</h4>

<h1>PO3</h1>

Design/development of solutions: Design solutions for well defined computing problems and design systems components or processes that meet the specified needs with appropriate consideration for public health and safety, cultural, societal and environmental considerations

<h1>PO4</h1>

Conduct investigations of complex computing problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data and synthesis of the information to provide valid conclusions.

<h1>PO5</h1>

Modern tool usage: Create, select and apply appropriate techniques, resources, and computing technologies necessary for computing practices.
Professional Ethics: Understand and practice professional ethics in multidisciplinary environments.Life-long learning: Recognize the need for and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.

  </div>
    </>
    );
}
 
export default FunctionalCount;
