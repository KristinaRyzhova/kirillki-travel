import {
	Routes,
	Route,
} from 'react-router-dom';

import {Home} from '../../pages/Home';
import {About} from '../../pages/About';
import {Photo} from '../../pages/Photo';
import {Texts} from '../../pages/Texts';

export const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/photo' element={<Photo />} />
				<Route path='/texts' element={<Texts />} />
			</Routes>
		</>
	)
};