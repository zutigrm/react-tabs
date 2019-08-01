import React from 'react'

const Content = ({data}) => {
    const activeTab = data.filter(item => window.location.pathname.search(item.route) !== -1);
    
    if ( !activeTab.length ) return '';

    return(
        <div className="tab-content">{activeTab[0].component}</div>
    )
}

export default Content