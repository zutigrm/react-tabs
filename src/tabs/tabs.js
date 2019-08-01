import React from 'react'

const Tabs = ({data, active, handleClick}) => {
    
    return(
        <div className="tabs">
            {data.map(item => 
                <div 
                    className={`tab ${item.tab === active ? 'active' : ''}`}
                    onClick={() => handleClick(item.tab)}
                >
                    {item.tab}
                </div>
            )}
        </div>
    )
}

export default Tabs