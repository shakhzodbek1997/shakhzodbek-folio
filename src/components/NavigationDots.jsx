import React from "react";

const NavaigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "skills", "portfolio", "testimonials", "contact"].map((item, index) => (
        <a 
            href={`#${item}`}
            key={item+index}
            className="app__navigation-dot"
            style={active === item ? {backgroundColor: '#313bac'} : { }}
        > </a>
      ))}
    </div>
  );
};

export default NavaigationDots;
