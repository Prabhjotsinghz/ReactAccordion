import React, {useState} from 'react'
import { questions } from "./Api";
import MyAccordian from './MyAccordion';
import './accordion.css';

const App = () => {
    const [data, setData] = useState(questions);
    return (
        <>
            <section className="main-div">
                <h1>Frequently Asked Questions </h1>
                
        {
                data.map((curElem) => {
                    return <MyAccordian key={curElem.id} {...curElem} />
                    //here the spread operator is use to pass the the properties of the questions api
                })        
        }
                 </section>
        </>
    )
}

export default App;
