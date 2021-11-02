import React from 'react';
import * as Component from './styles'
import { Item } from '../../types/item'

type Props = {
	item: Item
}

export default function ListItem({item}: Props) {
	return (
		<Component.Container>
			<input type="checkbox" />
			<label>{item.title}</label>
		</Component.Container>
	)
}