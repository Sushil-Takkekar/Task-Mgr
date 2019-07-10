import React,{ useState } from 'react'
import { connect } from 'react-redux'
import TaskItem from './taskItem'
import { popupAction } from '../../actions/popup'
import { Popup_EditTask, Popup_DeleteTask } from '../../actions/types'
import { formatHtmlInputDateType } from '../../utils/formatDate'

const TaskContainer = ({ Active_SideLink, Tasks, PopupStatus, Lists, popupAction }) => {
    /** set task category title **/
    const tasks_category = Active_SideLink.substr(Active_SideLink.indexOf('_')+1, Active_SideLink.length)

    /** edit task configuration **/
    const formElements = {
        _id : '',
        title : '',
        description : '',
        completed: false,
        due_date : new Date(),
        list : ''
    }
    const [formData, setFormData] = useState(formElements)
    const onInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const { _id, title, description, due_date, list } = formData

    /** this function will be called by the edit task button inside 'taskItem'. **/
    const edit_task = (task) => {
        document.getElementById("popup-edit-task").style = "visibility:visible; opacity:1;"
        setFormData({ 
            ...formData, 
            _id: task._id,
            title: task.title,
            description: task.description,
            completed: task.completed,
            due_date: formatHtmlInputDateType(task.due_date),
            list: task.list
        })
    }
    const onClick_closePopup = () => {
        document.getElementById("popup-edit-task").style = "visibility:hidden; opacity:0;"
    }
    const onClick_deleteBtn = () => {
        popupAction(Popup_DeleteTask, formData._id)
    }
    const onSubmit_editTask = (e) => {
        e.preventDefault()
        popupAction(Popup_EditTask, formData)
    }
    return (
        <>
            <div className="tasks">
                <div className="heading">
                    {tasks_category}
                </div>
                {
                    (Tasks.length <= 0) ?
                    <div className="no-task">
                        <h2>No tasks to show !</h2>
                        <h3>Click on bottom right button to add one.</h3>
                    </div>
                    :
                    Tasks.map((item, index) => {
                        const task = {
                            _id: item._id,
                            title: item.title,
                            description: item.description,
                            due_date: item.due_date,
                            completed: item.completed,
                            list: item.list
                        }
                        return <TaskItem key={item._id} task={task} edit_task={edit_task} />
                    })
                }
            </div>

            {/* <!-- Edit task --> */}
            { (PopupStatus==='' || PopupStatus==='FAIL') &&
                <div id="popup-edit-task" className="popup-block popup-overlay">
                    <div className="popup">
                        <h3>Edit Task</h3>
                        <a className="close" onClick={onClick_closePopup}>&times;</a>
                        <div className="content">
                            <form onSubmit={onSubmit_editTask}>
                                <input type="text" placeholder="Title" name="title" value={title} onChange={onInputChange} />
                                <textarea rows="3" cols="10" placeholder="Description" name="description" value={description} onChange={onInputChange}></textarea>
                                <input type="date" placeholder="Due date" name="due_date" onChange={onInputChange} value={due_date}/>
                                <select name="list" name="list" onChange={onInputChange} value={list}>
                                    <option value="none">None</option>
                                    {
                                        Lists.map(item => {
                                            return <option key={item._id} value={item._id}> {item.title} </option>
                                        })
                                    }
                                </select>
                                <input type="submit" className="btn submit-task-btn" value="Update" />
                            </form>
                            <button className="btn" onClick={onClick_deleteBtn}>Delete</button>
                        </div>
                    </div>
                </div>
            }

            {/* <!-- add task button --> */}
            <div className="add-task-float-btn">
                <a href="#popup-add-task" className="float">
                    <i className="material-icons plus-icon">add</i>
                </a>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        Active_SideLink : state.Active_Link.Active_SideLink,
        Tasks : state.Dashboard.tasks,
        PopupStatus: state.PopupStatus,
        Lists: state.Dashboard.lists
    }
}

export default connect(mapStateToProps,{
    popupAction
})(TaskContainer)