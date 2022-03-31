const toLocalDate = (date, languageCode = 'es') => {
	if (!date) {
		return '';
	}

	return new Date(date).toLocaleString(languageCode, {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	});
};

const dates = { toLocalDate };

export default dates;
