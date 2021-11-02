import React, { useState } from 'react';
import { Item } from './types/item'
import * as Component from './App.styles'
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import trashIcon from './images/trash.svg';
import { idText } from 'typescript';

export default function App() {
  const [list, setList] = useState<Item[]>([])

  const handleTask = (task: string) => {
    const idTask = list.length !== 0 
      ? Math.max(...list.map((item) => item.id)) + 1 : 1;
    const newList = [
      ...list,
      { id: idTask, title: task, completed: false }
    ]
    setList(newList);
  }

  const handleChecked = (checked: boolean, title: string, id: number) => {
    const newList = list.filter((item) => item.id !== id )
    newList.push({id: id, title: title, completed: checked })
    newList.sort((a, b) => a.id - b.id)
    setList(newList);
  }

  const excludeTask = () => {
    const newList = list.filter((item) => item.completed === false)
    setList(newList)
  };

  return(
    <Component.Container>
      <Component.Content>
        <Component.Header>Todo List</Component.Header>

        <AddItem onEnter={handleTask}/>  
        {list.map((item) =>  <ListItem key={item.id} item={item} done={handleChecked} /> )}
      
        <Component.ExcludeBox onClick={excludeTask}>
          <img src={trashIcon} alt="trash" />
        </Component.ExcludeBox>

      </Component.Content>
    </Component.Container>
  );
}

