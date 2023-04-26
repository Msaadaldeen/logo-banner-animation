const container = document.querySelector('.animation-container');

const animation = lottie.loadAnimation({
	container: container,
	renderer: 'svg',
	loop: false,
	autoplay: false,
	path: './assets/data.json'
});

animation.addEventListener('DOMLoaded', () => {
	animation.playSegments([ 0, 845 ], true);

	const btn = document.querySelector('#Path');
	console.log(btn);
	const btnStyle = document.getElementById('Path').getElementsByTagName('g')[0].getElementsByTagName('path')[0];
	console.log(btnStyle);
	btn.addEventListener('click', () => {
		animation.playSegments([ 840, 1000 ], true);
		console.log('clicked');
	});
	btnStyle.addEventListener('mouseover', () => {
		btnStyle.style.fill = '#750a47';
		btnStyle.style.transform = 'scale(1.03)';
		console.log('mouseover');
	});

	btnStyle.addEventListener('mouseout', () => {
		btnStyle.style.fill = '#ab0967';
		btnStyle.style.transform = 'scale(1)';
		console.log('mouseout');
	});
});
