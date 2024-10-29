function resizeWindow(){
	const width=window.innerWidth;
	const height=window.innerHeight;

	const selectH1=document.querySelector('#sizeInfo h1');
	selectH1.textContent=`Width: ${width} and Height: ${height}`;
}

resizeWindow()
window.addEventListener('resize', resizeWindow);