import { FC, useContext, useEffect, useState } from 'react';
import { context } from './context';

const boop: `/${string}` | `http${'s' | ''}://${string}.${string}` = '/boop'

const Element: FC<{choices: [string, (() => void) | `/${string}` | `http(s|)://${string}` | string][]}> = ({choices}) => {
	const [type, setType] = useState<'special'|'select'>('select');
	useEffect(() => {
		for (const i in choices) {
			if (type === 'select' && (typeof (choices[i][1] === 'function' || choices[i][1].match(/^\//) || choices[i][1].match(/^http(s|):\/\//))){
				setType('special');
			}
		}
	}, [choices])
	return
}