import React from 'react'

const TaskContainer = () => {
    return (
        <>
            <div className="tasks">
                <div className="heading">
                    All
                </div>
                <div className="task-item">
                    <div className="task-col status">
                        <input type="checkbox" />
                    </div>
                    <div className="task-col title">
                        Enhance PS script.Create PS script function for FT. Add it to existing script
                    </div>
                    <div className="task-col description">
                        Try FT config on local machine. Create PS script function for FT. Add it to existing script.
                    </div>
                    <div className="task-col due-date">
                        12 Jun
                    </div>
                    <i className="material-icons edit-btn">edit</i>
                </div>

                <div className="task-item">
                    <div className="task-col status">
                        <input type="checkbox" />
                    </div>
                    <div className="task-col title">
                        Submit timecard
                    </div>
                    <div className="task-col description">
                        Go to oracle ebiz site and submit the timecard for this week.
                    </div>
                    <div className="task-col due-date">
                        7 Jun
                    </div>
                    <i className="material-icons edit-btn">edit</i>
                </div>
            </div>

            {/* <!-- add task button --> */}
            <div className="add-task-float-btn">
                <a href="#" className="float">
                    <i className="material-icons plus-icon">add</i>
                </a>
            </div>
        </>
    )
}

export default TaskContainer