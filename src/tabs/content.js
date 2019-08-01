import React from 'react'

const Content = ({data, active}) => {
    const activeTab = data.filter(item => item.tab === active)
    
    if ( !activeTab.length ) return ''

    return(
        <div className="tab-content">{activeTab[0].component}</div>
    )
}

export default Content