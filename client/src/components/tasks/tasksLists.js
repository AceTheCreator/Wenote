import React, {Suspense, lazy} from 'react';

const NewTask = lazy(() => import('./newTask'));
export default function tasksLists({taskId}) {
    return (
        <div>
            {taskId === 'new' ? <Suspense fallback={<div>loading</div>}>
                <NewTask />
            </Suspense> : <div></div>}
        </div>
    )
}
