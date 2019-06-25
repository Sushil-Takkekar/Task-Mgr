import React from 'react'

const SidebarTab = ({item}) => {
    /** Active Sidebar Tab **/
    const Sidebar_activeTab = 'All'  // replace value with 'useSelector(state => state.Sidebar_activeTab);'
    const active = (Sidebar_activeTab === item.tab_name) ? ' active' : ''

    return(
        <>
            <div className={"side-nav-tab" + active}>
                <i className="material-icons">{item.tab_icon_name}</i>
                {item.tab_name}
                <div className="count">{item.task_count}</div>
            </div>
        </>
    )
}

export default SidebarTab