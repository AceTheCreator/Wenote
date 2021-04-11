import React, {lazy, Suspense, useState} from 'react';
import { IoMdAdd } from 'react-icons/io';
import { AddNoteButton, HeaderTitle, Header } from '../../components/note/note.style';
import {TasksContainer, TaskListsWrapper, TaskWrapper} from './tasks.style';


const TasksList = lazy(() => import('../../components/tasks/tasksLists'));

export default function task() {
    const [taskId, setTaskId] = useState(null);

    return (
        <TasksContainer>
            <TaskListsWrapper>
                <Header>
                    <HeaderTitle>All tasks</HeaderTitle>
                    <AddNoteButton onClick={() => setTaskId('new')}>
                        <IoMdAdd fontSize="18px" />
                    </AddNoteButton>
                </Header>
                <Suspense fallback={<div>loading</div>}>
                    <TasksList taskId={taskId} />
                </Suspense>
            </TaskListsWrapper>
            <TaskWrapper>
                dkldnkl
            </TaskWrapper>
        </TasksContainer>
    )
}
