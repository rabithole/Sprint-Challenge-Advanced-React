import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

afterEach(rtl.cleanup);

test('renders without crashing', () => {
	const wrapper = rtl.render(<App />)
	const element = wrapper.debug(wrapper.getByText("Women's World Cup Roster"))
});

test('renders without crashing', () => {
	const wrapper = rtl.render(<App />)
	const element = wrapper.debug(wrapper.getByText("Name"))
});
