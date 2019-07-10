import React from 'react'
import { connect } from 'react-redux'
import { activate_SidebarLink } from '../../actions/activeTab'
import { dashboardReq } from '../../actions/dashboard'

const SidebarListTab = ({item, Active_SideLink, activate_SidebarLink, dashboardReq, edit_list}) => {
    /** Active Sidebar Tab **/
    const active = (Active_SideLink === 'SideLink_'+item.title) ? ' active' : ''

    const onTabClick = () => {
        activate_SidebarLink('SideLink_'+item.title)
        dashboardReq('List_'+item._id)
    }
    const onClickEditBtn = () => {
        edit_list({ _id:item._id, title: item.title, count: item.count })
    }
    return (
        <>
            <div onClick={onTabClick} className={"list-tab" + active}>
                <div className="title">
                    <i className="material-icons">menu</i>
                    {item.title}
                </div>
                <div className="count">
                    <i className="material-icons edit-btn" onClick={onClickEditBtn}>edit</i>
                    {item.count}
                </div>
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