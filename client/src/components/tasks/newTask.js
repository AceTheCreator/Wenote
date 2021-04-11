import React, {useState} from 'react';
import {DescriptionInput, NewTaskWrapper, SaveTask, TitleInput} from './tasks.style';

export default function newTask() {
    const [values, setValues] = useState({
        title: null,
        description: null
    });
    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
      <NewTaskWrapper onSubmit={(e) => onSubmit(e)}>
        <TitleInput
          onChange={(e) => setValues({ ...values, title: e.target.value })}
          placeholder="Enter task title"
        />
        <DescriptionInput
          onChange={(e) => setValues({ ...values, description: e.target.value })}
          placeholder="Enter task description"
        />
        <SaveTask type="submit">Save</SaveTask>
      </NewTaskWrapper>
    );
}
