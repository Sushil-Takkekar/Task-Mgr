import React from 'react'

const SidebarListTab = ({item}) => {
    /** Active Sidebar Tab **/
    const Sidebar_activeTab = 'All'  // replace value with 'useSelector(state => state.Sidebar_activeTab);'
    const active = (Sidebar_activeTab === item.list_name) ? ' active' : ''

    return (
        <>
            <div className={"list-tab" + active}>
                <div className="title">
                    <i className="material-icons">menu</i>
                    {item.list_name}
                </div>
                <div className="count">{item.list_task_count}</div>
            </div>
        </>
    )
}

export default SidebarListTab