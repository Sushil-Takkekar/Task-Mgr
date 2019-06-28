import React from 'react'
import { connect } from 'react-redux'
import TaskItem from './taskItem'

const TaskContainer = ({ Tasks }) => {
    return (
        <>
            <div className="tasks">
                <div className="heading">
                    All
                </div>
                {
                    Tasks.map((item, index) => {
                        const task = {
                            title: 'Not available in backend',
                            desc: item.description,
                            due_date: item.createdAt,
                            status: item.completed
                        }
                        return <TaskItem key={item._id} task={task} />
                    })
                }
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

const mapStateToProps = (state) => {
    return {
        Tasks : state.Dashboard.tasks
    }
}

export default connect(mapStateToProps,{

})(TaskContainer)