import React from 'react'
import { connect } from 'react-redux'
import { activate_SidebarLink } from '../../actions/activeTab'
import { dashboardReq } from '../../actions/dashboard'

const SidebarListTab = ({item, Active_SideLink, activate_SidebarLink, dashboardReq}) => {
    /** Active Sidebar Tab **/
    const active = (Active_SideLink === 'SideLink_'+item.title) ? ' active' : ''

    const onTabClick = () => {
        activate_SidebarLink('SideLink_'+item.title)
        dashboardReq('List_'+item._id)
    }

    return (
        <>
            <div onClick={onTabClick} className={"list-tab" + active}>
                <div className="title">
                    <i className="material-icons">menu</i>
                    {item.title}
                </div>
                <div className="count">{item.count}</div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        Active_SideLink : state.Active_Link.Active_SideLink
    }
}

export default connect(mapStateToProps, {
    activate_SidebarLink,
    dashboardReq
})(SidebarListTab)