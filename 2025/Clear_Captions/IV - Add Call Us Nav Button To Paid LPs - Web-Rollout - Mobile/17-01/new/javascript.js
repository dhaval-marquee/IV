function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-call-us')) {
        document.querySelector('body').classList.add('iv-call-us');
        
        const callIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" version="1.1" x="0px" y="0px" width="15px" height="25px" viewBox="0 0 233 309" enable-background="new 0 0 233 309" xml:space="preserve">
                    <defs>
                    </defs>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M69.353,0c1.38,0,2.76,0,4.14,0c8.515,4.727,11.958,14.493,17.08,23.29  c7.379,12.674,14.28,25.193,21.737,38.299c3.365,5.915,10.63,13.189,9.316,20.702c-1.041,5.952-9.455,8.521-14.491,11.386  c-4.737,2.695-10.377,8.98-17.597,8.281c-6.558-0.635-10.902-11.431-14.492-17.597C65.636,68.2,60.374,58.536,51.238,42.957  C47.793,37.082,39.963,27.86,40.369,21.22C41.058,9.963,63.865,5.896,69.353,0z" style="&#10;    fill: #ff4a00;&#10;"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M158.89,308.98c-2.934,0-5.866,0-8.799,0  c-27.039-6.475-46.257-25.578-63.659-44.51c-14.756-16.054-27.489-33.06-38.299-50.721C25.087,176.098,5.868,134.692,0,83.844  c0-4.485,0-8.971,0-13.457C2.418,47.1,18.481,37.458,34.676,27.948c14.236,24.925,28.708,49.615,42.957,74.528  c-10.195,6.51-14.798,18.29-13.457,35.711c1.548,20.098,10.217,37.988,21.737,54.861c13.269,19.433,34.528,40.048,61.071,28.983  c13.757,25.231,28.828,49.15,42.439,74.527C180.567,302.02,171.058,306.829,158.89,308.98z" style="&#10;    fill: #ff4a00;&#10;"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M232.899,270.163c0,1.381,0,2.761,0,4.141  c-3.483,6.993-10.033,9.727-17.597,13.974c-4.661,2.618-10.214,6.893-16.044,5.693c-6.428-1.322-10.259-13.012-13.457-18.632  c-8.707-15.304-14.971-25.322-23.808-40.369c-3.311-5.638-11.208-15.117-10.351-22.255c0.79-6.58,9.228-9.693,13.974-12.421  c5.517-3.171,11.953-8.986,19.149-7.764c6.399,1.088,10.143,11.871,13.457,17.597C210.062,230.577,222.168,250.261,232.899,270.163z  " style="&#10;    fill: #ff4a00;&#10;"/>
                    </svg>`

        const callUs = `<a href="javascript:;" class="iv-call-cta">${callIcon} <span>Call us</span></a>`

        if(!document.querySelector('.iv-call-cta')){
            document.querySelector('.fusion-column-wrapper nav').insertAdjacentHTML('beforebegin' , callUs)

            document.querySelector('.iv-call-cta').addEventListener('click' , function(){
                document.querySelector('[title="Call ClearCaptions Now"]').click();
            })
        }

    }
}


// Load code just for mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {

    loadTestCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 768px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for mobile over