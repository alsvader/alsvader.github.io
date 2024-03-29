import React, { Suspense } from 'react';
import ReactDOM, { hydrate, render } from 'react-dom';
import './index.css';
import App from './App';
import { PageLoader } from './components';
import reportWebVitals from './reportWebVitals';

import './utils/i18n';

// ReactDOM.render(
// 	<Suspense fallback={<PageLoader />}>
// 		<App />
// 	</Suspense>,
// 	document.getElementById('root'),
// );

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
	hydrate(
		<Suspense fallback={<PageLoader />}>
			<App />
		</Suspense>,
		rootElement,
	);
} else {
	render(
		<Suspense fallback={<PageLoader />}>
			<App />
		</Suspense>,
		rootElement,
	);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
