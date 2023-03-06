// Frequently ask Question sto e so dropdowns

import React, { useState } from 'react';
import "./FAQ.scss";

const DropdownSection = ({ title, content, contentTwo, isActive, handleClick }) => {
  return ( 
    <div className={`dropdown-section ${isActive ? 'active' : ''}`} onClick={handleClick}>
      <h3 className="dropdown-title bg-lime text-white size-20">{title}</h3>
      <div className="dropdown-content bg-white">
        {isActive && <p className="size-20 text-black">{content}</p>}
        {isActive && <p className="size-20 text-black">{contentTwo}</p>}
      </div>
     
    </div>
  );
};

const Dropdowns = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownClick = (index) => {
    setActiveDropdown(index === activeDropdown ? null : index);
  };

  return (
    <div className="dropdowns-container bg-grey-300">
        <h1 className="faq-title text-black size-40">Frequently Asked Questions</h1>
      <DropdownSection
        title="What are the ingredients in GREEN&LEAN?"
        content="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam."
        contentTwo="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        isActive={activeDropdown === 1}
        handleClick={() => handleDropdownClick(1)}
      />
      <DropdownSection
        title="What are the ingredients in GREEN&LEAN?"
        content="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam."
        contentTwo="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        isActive={activeDropdown === 2}
        handleClick={() => handleDropdownClick(2)}
      />
      <DropdownSection
        title="How many servings per pouch?"
        content="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam."
        contentTwo="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        isActive={activeDropdown === 3}
        handleClick={() => handleDropdownClick(3)}
      />
      <DropdownSection
        title="Is there any dairy, gluten, or soy?"
        content="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam."
        contentTwo="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        isActive={activeDropdown === 4}
        handleClick={() => handleDropdownClick(4)}
      />
      <DropdownSection
        title="Will GREEN&LEAN upset my stomach?"
        content="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam."
        contentTwo="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        isActive={activeDropdown === 5}
        handleClick={() => handleDropdownClick(5)}
      />
    </div>
  );
};

export default Dropdowns;


// import React, { useState } from 'react';

// const DropdownSection = ({ title, content, isActive, handleClick }) => (
//   <div className={`dropdown-section ${isActive ? 'active' : ''}`} onClick={handleClick}>
//     <h3>{title}</h3>
//     {isActive && <p>{content}</p>}
//   </div>
// );

// const Dropdowns = (props) => {
//     console.log(props)
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const handleDropdownClick = (index) => {
//     setActiveDropdown(index === activeDropdown ? null : index);
//   };

//   return (
//     <div className="dropdowns-container">
//       {[1, 2, 3, 4, 5].map((index) => (
//         <DropdownSection
//           key={index}
//           title={`Dropdown ${index}`}
//           content={`More info about dropdown ${index}`}
//           isActive={activeDropdown === index}
//           handleClick={() => handleDropdownClick(index)}
//         />
//       ))}
//     </div>
//   );
// };

// export default Dropdowns;
