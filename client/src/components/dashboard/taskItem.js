import React from 'react'
import { formatDashboardDate } from '../../utils/formatDate'

const TaskItem = ({ task }) => {
    return (
        <>
            <div className="task-item">
                <div className="task-col status">
                    <input type="checkbox" />
                </div>
                <div className="task-col title">
                    {task.title}
                </div>
                <div className="task-col description">
                    {task.desc}
                </div>
                <div className="task-col due-date">
                    {formatDashboardDate(task.due_date)}
                </div>
                <i className="material-icons edit-btn">edit</i>
            </div>
        </>
    )
}

export default TaskItem