import React, { useState } from 'react'
import { connect } from 'react-redux'
import { popupAction } from '../../actions/popup'
import { Popup_AddTask } from '../../actions/types'

const PopupEditTask = ({ type, Lists, Task, popupAction, PopupStatus }) => {
    /** Component state **/
    const formElements = {
        title : '',
        description : '',
        due_date : new Date(),
        list : ''
    }
    const [formData, setFormData] = useState(formElements)
    const onInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const _onFocus = () => {
        document.getElementById('due-date').type='date'
    }

    const onSubmit_addTask = (e) => {
        e.preventDefault()
        popupAction(Popup_AddTask, formData)
    }
    const onSubmit_editTask = () => {

    }

    return (
        <>
            {
                (type === 'Add') ?
                <div className="popup">
                    <h3>Add new Task</h3>
                    <a className="close" href="#">&times;</a>
                    <div className="content">
                        <form onSubmit={onSubmit_addTask}>
                            <input type="text" name="title" placeholder="Title" onChange={onInputChange} required/>
                            <textarea name="description" rows="3" cols="10" placeholder="Description" onChange={onInputChange}></textarea>
                            <input type="text" name="due_date" id="due-date" placeholder="Due date" onFocus={_onFocus} onChange={onInputChange}/>
                            <select name="list" onChange={onInputChange}>
                                <option className="text-disabled" value="none" disabled>Add to List</option>
                                <option value="none">None</option>
                                {
                                    Lists.map(item => {
                                        return <option key={item._id} value={item._id}> {item.title} </option>
                                    })
                                }
                            </select>
                            <input type="submit" className="btn submit-task-btn" value="Add" />
                        </form>
                    </div>
                </div>
                :
                <div className="popup">
                    <h3>Edit Task</h3>
                    <a className="close" href="#">&times;</a>
                    <div className="content">
                        <form onSubmit={onSubmit_editTask}>
                            <input type="text" placeholder="Title" value={Task.title} />
                            <textarea rows="3" cols="10" placeholder="Description">{Task.description}</textarea>
                            <input type="text" id="due-date" placeholder="Due date" onFocus={_onFocus} value={Task.due_date}/>
                            <select name="list">
                                <option value="none">None</option>
                                {
                                    Lists.map(item => {
                                        const selected = item._id==Task.list ? 'selected' : ''
                                        return <option key={item._id} value={item._id} selected={selected}> {item.title} </option>
                                    })
                                }
                            </select>
                            <input type="submit" className="btn submit-task-btn" value="Update" />
                        </form>
                    </div>
                </div>
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        PopupStatus: state.PopupStatus
    }
}

export default connect(mapStateToProps, {
    popupAction
})(PopupEditTask)