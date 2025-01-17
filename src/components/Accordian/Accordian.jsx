// src/Accordion.js
import React, { useState } from 'react';
import "./Accordian.css"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFunc,setSelectedFunc]=useState(title);
  console.log(content)
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={toggleAccordion}>
        <p>{selectedFunc}</p>
        <div className="accordion-img" >{isOpen ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}</div>
      </div>
      {isOpen && content.map((val)=>{
        return(<div className="accordion-content" onClick={()=>{
            setSelectedFunc(val) 
            setIsOpen(!isOpen)}}>{val}</div>)
      })}
    </div>
  );
};

export default Accordion;
