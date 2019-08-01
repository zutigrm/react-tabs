import React from 'react'
import Tabs from './tabs'
import Content from './content'

// usage: tabs = [{tab: 'name', component: <Component />}]
// options - config {active: 'tab-name', tabAlign: 'left | right | center', classes: ['class1]}
class StandardTabs extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            active: this.props.config && this.props.config.active ? this.props.config.active : this.props.tabs[0].name,
        }
    }

    setActiveTab = (tab) => {
        this.setState({active: tab})
    }
    
    render() {
        const {tabs, wrapper} = this.props
        const {active} = this.state

        return(
            <div className={wrapper.join(' ')}>
                <Tabs data={tabs} active={this.state.active} handleClick={this.setActiveTab} />
                <Content data={tabs} active={active} />
            </div>
        )
    }
}

export default StandardTabs