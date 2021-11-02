import React, { useState, KeyboardEvent } from 'react';
import * as Content from './styles';
import moreIcon from '../../images/add.svg'

// type Add = {
//   add: 
// }

export default function AddItem() {
  const [task, setTask] = useState('');

  const handleKeyUp = (event: KeyboardEvent) => {

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