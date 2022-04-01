export const scrollToTop = () => {
	const { top } = document.body.getClientRects()[0];

	if (top < 0) {
		window.scroll({ top: 0, behavior: 'smooth' });
	}
};
