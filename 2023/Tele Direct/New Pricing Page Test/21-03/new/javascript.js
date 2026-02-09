var bodyEle = document.querySelector('body');
if (!bodyEle.classList.contains('cta_change_iv')) {
	bodyEle.classList.add('cta_change_iv');
	
	jQuery('.cta_change_iv a[href="#contact-form"]').attr('href','//www.teledirect.com/pricing/');
	jQuery('.cta_change_iv form#gform_1').eq(0).before('<a href="//www.teledirect.com/pricing/" class="new_cta orange ow-icon-placement-left ow-button-hover __mPS2id" rel="m_PageScroll2id"><span>Get a quote</span></a>');
}