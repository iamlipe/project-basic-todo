import React, { useState, KeyboardEvent } from 'react';
import * as Content from './styles';
import moreIcon from '../../images/add.svg'

type Props = {
  onEnter: (task: string) => void;
}

export default function AddItem({ onEnter }: Props) {
  const [task, setTask] = useState('');

  const handleKeyUp = (event: KeyboardEvent) => {
    if ( event.code === 'Enter' && task.length !== 0 ) {
      onEnter(task);
      setTask('');
    }
  };

  return (
    <Content.Container>
      <img src={moreIcon} alt="more" ></img>
      <input
        type="text"
        placeholder="add task"
        value={task}
        onChange={({target}) => setTask(target.value)}
        onKeyUp={handleKeyUp}
      />
    </Content.Container>
  )
}