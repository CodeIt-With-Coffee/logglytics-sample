import React, { useMemo } from 'react';
import './App.css';
import { default as logglytics } from '@codeitwithcoffee/logglytics';

function App() {
	const config = {
		apiKey: 'q14V5PRhyLP7oy4MOQEii7px2SFuT4zJ4e88Ml4NRi8Cx7zmmaxzDX-5cbzS9fZt',
		projectId: 'b6951cfe-184b-4cde-9dc1-122e196ea904',
	};
	const logger = useMemo(
		() => logglytics(config),
		[config.apiKey, config.projectId],
	);
	const featureOne = () => logger.event('FEATURE_1');
	const featureTwo = () => logger.event('FEATURE_2');
	const logHello = () => logger.log('INFO', 'Hello');

	return (
		<div className='App'>
			<button onClick={featureOne}>Feature 1</button>
			<button onClick={featureTwo}>Feature 2</button>
			<button onClick={logHello}>Log hello</button>
		</div>
	);
}

export default App;
