import React, { useState } from 'react';
import { Item } from './types/item'
import * as Component from './App.styles'
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

export default function App() {
  const [list, setList] = useState<Item[]>([
    {id: 1, title: 'comprar camisa do barca', completed: true},
    {id: 2, title: 'comprar camisa do liverpool', completed: false}
  ])

  const handleTask = (task: string) => {
    const newList = [
      ...list,
      { id: 3, title: task, completed: false }
    ]
    setList(newList);
  }

  return(
    <Component.Container>
      <Component.Content>
        <Component.Header>Todo List</Component.Header>

        <AddItem onEnter={handleTask}/>  
        {list.map((item) =>  <ListItem key={item.id} item={item} /> )}

      </Component.Content>
    </Component.Container>
  );
}

