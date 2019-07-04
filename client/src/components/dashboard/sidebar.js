import React from 'react'
import { connect } from 'react-redux'
import SidebarTab from './sidebarTab'
import SidebarListTab from './sidebarListTab'

const Sidebar = ({ Lists }) => {
    /** get the tasks count for the tabs **/
    const tabs = [
        {
            id: 'ST1',
            tab_name: 'All',
            tab_icon_name: 'filter_none',
            task_count: 2  // this will come from db by applying filter. Use 'useSelector(state => state.userData);'
        },
        {
            id: 'ST2',
            tab_name: 'Today',
            tab_icon_name: 'today',
            task_count: 1  // this will come from db by applying filter
        },
        {
            id: 'ST3',
            tab_name: 'Weekly',
            tab_icon_name: 'date_range',
            task_count: 2  // this will come from db by applying filter
        },
        {
            id: 'ST4',
            tab_name: 'Completed',
            tab_icon_name: 'done_all',
            task_count: 0  // this will come from db by applying filter
        }
    ]

    return (
        <>
            <div className="side-nav">
                {/* Show Sidebar fix tabs */}
                {
                    tabs.map((item) => {
                        return (
                            <SidebarTab key={item.id} item={item} />
                        )
                    })
                }
                
                <hr />

                <div className="list-container">
                    <div className="heading">
                        Lists
                    </div>
                    <div className="list-items">
                        {/* Show Sidebar List tabs */}
                        {
                            Lists.map((item) => {
                                return (
                                    <SidebarListTab key={item._id} item={item} />
                                )
                            })
                        }
                    </div>
                    <div className="add-list">
                        <a href="#popup-add-list"><button className="add-btn">+</button></a>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        Lists : state.Dashboard.lists
    }
}

export default connect(mapStateToProps, {

})(Sidebar)