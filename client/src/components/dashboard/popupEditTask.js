import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { popupAction } from '../../actions/popup'
import { Popup_AddTask } from '../../actions/types'

const PopupEditTask = ({ type, Lists, currTask, popupAction }) => {
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

    const task_obj = {
        _id: '',
        title: '',
        description: '',
        due_date: new Date(),
        list: ''
    }
    const [Task, setTask] = useState(task_obj)
    useEffect(() => {
        if(currTask !== undefined) {
            console.log(currTask._id)
            setTask({
                ...Task,
                _id : currTask._id,
                title: currTask.title,
                description: currTask.description,
                due_date: currTask.due_date,
                list: currTask.list
            })
            console.log(Task._id)
        }
    },[currTask])

    const onClick_closePopup = () => {
        document.getElementById("popup-edit-task").style = "visibility:hidden; opacity:0;"
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
                (type === 'Add') &&
                <div className="popup">
                    <h3>Add new Task</h3>
                    <a className="close" href="#">&times;</a>
                    <div className="content">
                        <form onSubmit={onSubmit_addTask}>
                            <input type="text" name="title" placeholder="Title" onChange={onInputChange} required/>
                            <textarea name="description" rows="3" cols="10" placeholder="Description" onChange={onInputChange}></textarea>
                            <input type="date" name="due_date" id="due-date" placeholder="Due date" onChange={onInputChange}/>
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
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {
    popupAction
})(PopupEditTask)