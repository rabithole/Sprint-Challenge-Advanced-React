import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

afterEach(rtl.cleanup);

it('renders without crashing', () => {

	const wrapper = rtl.render(<App />)
	const element = wrapper.debug(wrapper.getByText("Women's World Cup Roster"))
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
});
