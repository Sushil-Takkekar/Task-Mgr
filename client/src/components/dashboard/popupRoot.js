import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PopupEditTask from './popupEditTask'
import { popupAction } from '../../actions/popup'
import {
    Popup_AddList
} from '../../actions/types'

const PopupRoot = ({ Lists, PopupStatus, popupAction }) => {

    const [listTitle, setListTitle] = useState('')
    const onInputChange = (e) => {
        setListTitle(e.target.value)
    }

    const onClick_addList = () => {
        popupAction(Popup_AddList, listTitle)
    }
    return (
        <>
            {/* <!-- Popup - Add new list (DO-NOT CHANGE THIS POPUP STATUS LOGIC)--> */}
            { (PopupStatus==='' || PopupStatus==='FAIL') &&
                <>
                    <div id="popup-add-list" className="popup-block popup-overlay">
                        <div className="popup">
                            <h3>Add new list</h3>
                            <a className="close" href="#">&times;</a>
                            <div className="content">
                                <input type="text" placeholder="List name" onChange={onInputChange}/>
                                <button className="btn" onClick={onClick_addList}>Add</button>
                                { (PopupStatus === 'FAIL') &&
                                    <div className="popup-error">
                                        List already exists.
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                

                    {/* <!-- Popup - Add new task --> */}
                    <div id="popup-add-task" className="popup-block popup-overlay">
                        <PopupEditTask type="Add" Lists={Lists} Task={{}} />
                    </div>
                </>
            }
            
            { (PopupStatus==='SUCCESS') &&
                <Redirect to="/dashboard#" />
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        PopupStatus: state.PopupStatus,
        Lists: state.Dashboard.lists
    }
}

export default connect(mapStateToProps, {
    popupAction
})(PopupRoot)