import { ReactNode, useState, type FC } from 'react';
import ContextProvider from './context';

const filterJoin = (arr: (string | [string, boolean])[], joinVal = ' ') => arr.reduce((full: string[], val) => {
	Array.isArray(val)
	? val[1] && full.push(val[0])
	: val && full.push(val);
	return full;
}, []).join(joinVal)

type CoreProps = {
	className: string,
	onChange: (value: string) => void,
	options?: (string | {value: string, content: string | ReactNode})[],
	onClose?: () => void,
	onOpen: () => void,
	animation: 'fade' | 'slide',
}
type Pop<D> = Exclude<'up' | 'down' | 'left' | 'right', D extends 'down' ? 'up' : D extends 'up' ? 'down' : D extends 'right' ? 'left' : D extends 'left' ? 'right' : 'up' | 'down' | 'left' | 'right'>;

function Dropdown<D extends 'up' | 'down' | 'left' | 'right' = 'up' | 'down' | 'left' | 'right'>({drop, pop}: {drop?: D, pop?: Pop<D>} = {}) {
	const content = useState<{value: string, content: ReactNode}[]>()
	return <ContextProvider>
		
	</ContextProvider>
}

const b: FC = () => {
return <Dropdown />
}