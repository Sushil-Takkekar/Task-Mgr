import React from 'react'
import { connect } from 'react-redux'
import { activate_SidebarLink } from '../../actions/activeTab'
import { dashboardReq } from '../../actions/dashboard'

const SidebarTab = ({item, Active_SideLink, Tabs_count, activate_SidebarLink, dashboardReq}) => {
    /** Active Sidebar Tab **/
    const active = (Active_SideLink === 'SideLink_'+item.tab_name) ? ' active' : ''
    const reqType = 'Tasks_'+(item.tab_name).toUpperCase()

    /** Set 'All' side-tab to active on first load od Dashboard **/
    if(Active_SideLink === '') {
        activate_SidebarLink('SideLink_All')
    }

    const onTabClick = () => {
        const actionType = 'SideLink_'+item.tab_name
        activate_SidebarLink(actionType)
        dashboardReq(reqType)
    }

    return(
        <>
            <div onClick={onTabClick} className={"side-nav-tab" + active}>
                <i className="material-icons">{item.tab_icon_name}</i>
                {item.tab_name}
                <div className="count">{Tabs_count[item.tab_name]}</div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        Active_SideLink : state.Active_Link.Active_SideLink,
        Tabs_count : state.Dashboard.tabs
    }
}

export default connect(mapStateToProps, {
    activate_SidebarLink,
    dashboardReq
})(SidebarTab)