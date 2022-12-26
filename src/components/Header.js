import React from "react";

function Header({handleToggleDarkMode}){
    return(
        <div className="header">
            <h1>Sticky Notes</h1>
            <button onClick={()=> 
                handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
            }
            className="button">Toggle Mode</button>
        </div>
    );
};

export default Header;