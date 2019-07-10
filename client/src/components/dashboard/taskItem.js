import React from 'react'
import { connect } from 'react-redux'
import { formatDashboardDate } from '../../utils/formatDate'
import { popupAction } from '../../actions/popup'
import { Popup_EditTask } from '../../actions/types'

const TaskItem = ({ task, edit_task, popupAction }) => {
    const task_status = task.completed ? ' disabled-task' : ''
    const onClickTaskCompleted = (e) => {
        const task_status = task.completed ? false : true
        popupAction(Popup_EditTask, {...task, completed: task_status})
    }
    const onClickEditBtn = () => {
        edit_task(task)
    }
    return (
        <>
            <div className={"task-item"+task_status}>
                <div className="task-col status">
                    <input type="checkbox" defaultChecked={task.completed} onChange={onClickTaskCompleted}/>
                </div>
                <div className="task-col title">
                    {task.title}
                </div>
                <div className="task-col description">
                    {task.description}
                </div>
                <div className="task-col due-date">
                    {formatDashboardDate(task.due_date)}
                </div>
                <i className="material-icons edit-btn" onClick={onClickEditBtn}>edit</i>
            </div>
        </>
    )
}

export default connect(null,{
    popupAction
})(TaskItem)