import React from 'react'; 
const Background =   ({ children }) =>{
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <div style={{ position: "relative", zIndex: 1, background:"red" }}>
            {children}
      </div>
    </div>
  );
}

export default Background;