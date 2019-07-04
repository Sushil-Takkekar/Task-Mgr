import React from 'react'
import { connect } from 'react-redux'
import TaskItem from './taskItem'

const TaskContainer = ({ Active_SideLink, Tasks }) => {
    const tasks_cat = Active_SideLink.substr(Active_SideLink.indexOf('_')+1, Active_SideLink.length)
    return (
        <>
            <div className="tasks">
                <div className="heading">
                    {tasks_cat}
                </div>
                {
                    Tasks.map((item, index) => {
                        const task = {
                            title: item.title,
                            desc: item.description,
                            due_date: item.due_date,
                            status: item.completed
                        }
                        return <TaskItem key={item._id} task={task} />
                    })
                }
            </div>

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
        Tasks : state.Dashboard.tasks
    }
}

export default connect(mapStateToProps,{

})(TaskContainer)