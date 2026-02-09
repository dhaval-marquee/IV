function loadCode() {
	var checkFooter = setInterval(() => {
		if(document.querySelectorAll('footer').length > 0 && document.querySelectorAll('#chatIV').length == 0) {
			clearInterval(checkFooter);
			// document.querySelector("footer").insertAdjacentHTML('afterend','<div id="chatIV"></div>');

			// var script = document.createElement("script");
			// script.innerHTML = `
			// 	(function(t,i,o,n,w,a,e){
			// 		t["bowtieDataToken"]=w;
			// 		t[w]=t[w]||function(){
			// 			(t[w].i=t[w].i||[]).push(arguments)
			// 		};
			// 		t[w].o=1*new Date;
			// 		a=i.createElement(o);
			// 		e=i.getElementsByTagName(o)[0];
			// 		a.async=1;
			// 		a.src=n;
			// 		e.parentNode.insertBefore(a,e)
			// 	})(window,document,"script","https://s3.amazonaws.com/bowtie.ai/bowtieJS/bowtie_widget.js","nk5FEV6p9l");
			// `;
			// chatIV.appendChild(script);


			jQuery("footer").after('<div id="chatIV"></div>');
			jQuery('#chatIV').html('<script>(function(t,i,o,n,w,a,e){t["bowtieDataToken"]=w;t[w]=t[w]||function(){(t[w].i=t[w].i||[]).push(arguments)};t[w].o=1*new Date;a=i.createElement(o);e=i.getElementsByTagName(o)[0];a.async=1;a.src=n;e.parentNode.insertBefore(a,e)})(window,document,"script","https://s3.amazonaws.com/bowtie.ai/bowtieJS/bowtie_widget.js","nk5FEV6p9l");</script>');
		}
	}, 100);
}

var jQisLoaded = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQisLoaded);
        loadCode();
    }
}, 100);