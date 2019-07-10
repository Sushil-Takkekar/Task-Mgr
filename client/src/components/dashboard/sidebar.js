import React, { useState } from 'react'
import { connect } from 'react-redux'
import SidebarTab from './sidebarTab'
import SidebarListTab from './sidebarListTab'
import { popupAction } from '../../actions/popup'
import {
    Popup_EditList
} from '../../actions/types'

const Sidebar = ({ Lists, PopupStatus, popupAction }) => {
    /** get the tasks count for the tabs **/
    const tabs = [
        {
            id: 'ST1',
            tab_name: 'All',
            tab_icon_name: 'filter_none',
            task_count: 2  // this will come from db by applying filter.
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

    /** component state **/
    const [clickedList, setClickedList] = useState({ _id:'', title:''})
    const onInputChange = (e) => {
        setClickedList({ ...clickedList, title: e.target.value})
    }
    /** this function will be called by the edit list button inside 'SidebarListTab'. **/
    const edit_list = (list) => {
        document.getElementById("popup-edit-list").style = "visibility:visible; opacity:1;"
        setClickedList({...clickedList, _id: list._id, title: list.title, count: list.count})
    }
    const onClick_closePopup = () => {
        document.getElementById("popup-edit-list").style = "visibility:hidden; opacity:0;"
    }
    const onClick_updateBtn = () => {
        popupAction(Popup_EditList, clickedList)
    }
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
                        {
                            Lists.map((item) => {
                                return (
                                    <SidebarListTab key={item._id} item={item} edit_list={edit_list} />
                                )
                            })
                        }
                    </div>
                    {/* add new list button */}
                    <div className="add-list">
                        <a href="#popup-add-list"><button className="add-btn">+</button></a>
                    </div>
                </div>
                
                {/* <!-- Edit list --> */}
                { (PopupStatus==='' || PopupStatus==='FAIL') &&
                    <div id="popup-edit-list" className="popup-block popup-overlay">
                        <div className="popup">
                            <h3>Edit list</h3>
                            <a className="close" onClick={onClick_closePopup}>&times;</a>
                            <div className="content">
                                <input type="text" placeholder="List name" value={clickedList.title} onChange={onInputChange}/>
                                <button className="btn" onClick={onClick_updateBtn}>Update</button>
                                { (PopupStatus === 'FAIL') &&
                                    <div className="popup-error">
                                        Something went wrong !
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        Lists : state.Dashboard.lists,
        PopupStatus: state.PopupStatus
    }
}

export default connect(mapStateToProps, {
    popupAction
})(Sidebar)