import React, { useState } from 'react';
import * as Component from './styles'
import { Item } from '../../types/item'

type Props = {
	item: Item
}

export default function ListItem({item}: Props) {
	const [isChecked, setIsChecked] = useState(item.completed)

	return (
		<Component.Container checked={isChecked}>
			<input	
				type="checkbox"
				checked={isChecked}
				onChange={({target}) => setIsChecked(target.checked) }
			/>
			<label>{item.title}</label>
		</Component.Container>
	)
}