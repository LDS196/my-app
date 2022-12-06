import React from 'react';

type TasksPropsType = {
    data: {
        title: string,
        tasks: TaskType[],
        students: string[],
    }
}
type TaskType={
    tasksId?: number,
    title: string,
    isDone: boolean
}

export const Tasks = (props: TasksPropsType) => {
    let tasks = props.data.tasks.map( (el,index) =>  <li key={index}><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li> )
    let students = props.data.students.map((student,index) => <p key={index}>{student}</p>)
    return (
        <div>
            <h3 >{props.data.title}</h3>

            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasks}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
            {students}
        </div>
    )
}