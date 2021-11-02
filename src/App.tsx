import React, { useState } from 'react';
import { Item } from './types/item'
import * as Component from './App.styles'
import ListItem from './components/ListItem';

export default function App() {
  const [list, setList] = useState<Item[]>([
    {id: 1, title: 'comprar camisa do barca', completed: false},
    {id: 2, title: 'comprar camisa do liverpool', completed: false}
  ])

  return(
    <Component.Container>
      <Component.Content>
        <Component.Header>Todo List</Component.Header>

          {list.map((item) =>  <ListItem key={item.id} item={item} /> )}

      </Component.Content>
    </Component.Container>
  );
}

