import React from 'react';
import styles from './styles.module.css';

const PageLoader = () => {
	return (
		<div className={styles.drawing}>
			<div className={styles.loadingDot}></div>
		</div>
	);
};

export default PageLoader;
