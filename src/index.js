import React from 'react';
import StandardTabs from './tabs';
import RouterTabs from './router-tabs';

import './style.scss';

const ReactTabs = ({tabs, config}) => {

    // Format wrapper classes
    const wrapper = ['react-tabs']
    if ( config.classes && config.classes.length ) {
        config.classes.map(i => wrapper.push(i));
    }

    if ( config.tabAlign ) wrapper.push(config.tabAlign);

    if ( config.layout ) wrapper.push(config.layout);
    // Format wrapper classes end

    // Render tabs
    const withRoutes = tabs.filter(t => t.route && t.route !== '');
    if ( withRoutes && withRoutes.length ) {
        return <RouterTabs wrapper={wrapper} tabs={tabs} />

    } else {
        return <StandardTabs config={config} wrapper={wrapper} tabs={tabs} />
    }
}

export default ReactTabs