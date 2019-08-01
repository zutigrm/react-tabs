import React from 'react'
import Tabs from './tabs'
import Content from './content'

// usage: tabs = [{tab: 'name', route: '/path-to-your/page', component: <Component />}]
// options - config {active: 'tab-name', tabAlign: 'left | right | center', classes: ['class1]}
const RouterTabs = ({tabs, wrapper}) => {

    return(
        <div className={wrapper.join(' ')}>
            <Tabs data={tabs} />
            <Content data={tabs} />
        </div>
    )
}

export default RouterTabs