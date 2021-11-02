import React, { useEffect, useState } from 'react';
import * as Component from './styles'
import { Item } from '../../types/item'

type Props = {
	item: Item;
	done: (checked: boolean, title: string, id: number) => void
}

export default function ListItem({item, done}: Props) {
	const [isChecked, setIsChecked] = useState(item.completed)

	const setCheckedTask = ({target}: any) => {
		setIsChecked(target.checked)
	}

	useEffect(() => {
		done(isChecked, item.title, item.id);
	},[isChecked])

	return (
		<Component.Container checked={isChecked}>
			<input	
				type="checkbox"
				checked={isChecked}
				onChange={setCheckedTask}
			/>
			<label>{item.title}</label>
		</Component.Container>
	)
}