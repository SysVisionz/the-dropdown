import { ReactNode, useState, type ReactEventHandler, type FC, useRef } from 'react';
import ContextProvider from './context';

const filterJoin = (arr: (string | [string, boolean])[], joinVal = ' ') => arr.reduce((full: string[], val) => {
	Array.isArray(val)
	? val[1] && full.push(val[0])
	: val && full.push(val);
	return full;
}, []).join(joinVal)

type Pop<D> = Exclude<'up' | 'down' | 'left' | 'right', D extends 'down' ? 'up' : D extends 'up' ? 'down' : D extends 'right' ? 'left' : D extends 'left' ? 'right' : 'up' | 'down' | 'left' | 'right'>;

function Dropdown<D extends 'up' | 'down' | 'left' | 'right' = 'up' | 'down' | 'left' | 'right'>({drop, pop, children}: {drop?: D, pop?: Pop<D>, children?: ReactNode}  = {}) {
	const content = useState<{value: string, content: ReactNode}[]>()
	const theSelect = useRef<HTMLSelectElement | null>(null)
	const theOptions = useRef< | null>()
	const childOptions = useState<ReactNode[]>([])
	const computedChildren = useState<ReactNode[]>(() => {})
	return <ContextProvider>
		{computedChildren}
	</ContextProvider>
}

const b: FC = () => {
return <Dropdown />
}