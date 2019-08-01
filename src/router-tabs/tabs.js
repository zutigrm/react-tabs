import React from 'react'

const RouterTabs = ({data}) => {
    return(
        <div className="tabs">
            {data.map(item => {
                const currentTab = window.location.pathname.search(item.route) !== -1;
                return(
                    <div className={currentTab ? 'tab active' : 'tab'}>
                        <a 
                            onClick={() => window.location.replace(item.route)}
                            className="elt-link"
                        >
                            {item.tab}
                        </a>
                    </div>
                )
            })}
        </div>
    )
}

export default RouterTabs