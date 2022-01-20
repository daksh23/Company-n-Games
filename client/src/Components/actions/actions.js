const setBossImage = (image) => {
	localStorage.setItem('boss', image);

	return {
		type: 'SET_BOSS_IMAGE', image
	}
}

export {setBossImage}