import React from 'react';
import Home from '../homeSection/home';
import Info from '../../layout/info';
import HIW from '../HIW/hiw';
import Footer from '../footer/footer';
const FullPage = () => {
	return (
		<>
			<Home />
			<Info
				left="Healthcare the way you want it. Simple, convinent, and reliable"
				right="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, mollitia, ipsa omnis debitis laborum, nemo est a optio distinctio modi sequi. "
			/>
			<HIW />
			<Footer />
		</>
	);
};

export default FullPage;
