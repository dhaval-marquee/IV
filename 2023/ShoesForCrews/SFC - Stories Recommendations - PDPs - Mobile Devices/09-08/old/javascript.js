let isIOS = (/iPad|iPhone|iPod/.test(navigator.platform) ||
(navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
!window.MSStream;

if(isIOS === true){
  let storiesWidgetContainer = document.getElementById('dy_stories_thumbs_${dyVariationId}');
  storiesWidgetContainer.parentNode.classList.add('isIOS'); 
}

let animTime = ${Animation Duration} * 1000,
    timeout = undefined,
    widgets = document.getElementsByClassName('dy_stories_wrap_${dyVariationId}'),
    widgetsNumber = widgets.length;
    
let touchstartY = 0,
    touchendY = 0;
    
class StrategyWidget {
  constructor(name, i) {
    this.n = i;
    this.widgetElem = document.getElementsByClassName(name)[i];
    this.closeBtn = this.widgetElem.querySelector('.dy_story_close_${dyVariationId}');
    this.nextBtn = this.widgetElem.querySelector('.dy_story_next_${dyVariationId}');
    this.prevBtn = this.widgetElem.querySelector('.dy_story_prev_${dyVariationId}');
    this.overlayBox = this.widgetElem.querySelector('.overlay_story_${dyVariationId}');
    this.thumb = this.widgetElem.querySelector('.dy_stories_thumb_${dyVariationId}');
    this.thumbImg = this.thumb.querySelector('.dy_thumbnail_image_${dyVariationId}');
    this.items = this.widgetElem.querySelectorAll('.dy_story_recommended_product_${dyVariationId}');
    this.track = this.widgetElem.querySelector('.dy_story_tracks_${dyVariationId}');
    this.title = this.widgetElem.querySelector('.dy_thumbnail_stategy_title_${dyVariationId}');

    this.active = 0;
    this.nextSlide = this.nextSlide.bind(this);
    this.nextWidgetSlides = this.nextWidgetSlides.bind(this);
    this.thumbImage();
  }
  
  thumbImage() {
    this.prodImg = this.items[0].querySelector('.dy_stories_story_img_${dyVariationId}');
    this.thumbImg.style.backgroundImage = this.prodImg.style.backgroundImage;
  }
  
  addTrackItems() {
    this.items.forEach(() => (this.track.innerHTML += `<span></span>`));
  }
  
  nextSlide() {
    if (this.active < this.items.length - 1) {
      this.activeSlide(this.active + 1);
    }
  }
  
  prevSlide() {
    this.activeSlide(this.active - 1);
  }
  
  activeSlide(index) {
    this.clearData();
    this.active = index;
    this.items[index].classList.add('active');
    this.trackItems[index].classList.add('active');
  	this.allPrev = getPrevSiblings(this.trackItems[index]);
  	this.allPrev.forEach((prev) => prev.classList.add('viewed'));
  // 	this.prodPrice = this.items[index].querySelector('.dy_stories_story_price_${dyVariationId} span');
  // 	parsePriceHtml(this.prodPrice, '${Thousands Separator}', '${Decimal Separator}');

  	this.prodLink = this.items[index].querySelector('.dy_stories_story_cta_${dyVariationId}');
  	this.prodLink.addEventListener('touchstart', (event) => {
      touchstartY = event.changedTouches[0].screenY;
    }, false);
    this.prodLink.addEventListener('touchend', (event) => {
      touchendY = event.changedTouches[0].screenY;
      swipeUp(() => {
        this.prodLink.classList.add('swiped-up');
        this.prodLink.click();
      });
    }, false);
  	
  	setTimeout(() => {
      timeout = window.setTimeout(this.nextWidgetSlides, animTime);
    });
  }
  
  nextWidgetSlides() {
    if (this.active < this.items.length - 1) {
      this.nextSlide();
    } else if (this.n < widgetsNumber - 1) {
      widgetNav(this, 'next');
    } else {
      this.closeOverlay();
    }
  }
  
  clearData() {
    this.trackItems = Array.from(this.track.children);
    this.items.forEach((item) => item.classList.remove('active'));
    this.trackItems.forEach((item) => item.classList.remove('active', 'viewed'));
  }
  
  openOverlay() {
    this.overlayBox.classList.remove('close');
       document.getElementById('dy_stories_thumbs_${dyVariationId}').parentNode.classList.add('active'); 
    this.activeSlide(0);
    
    document.addEventListener('keydown', (event) => {
    	if(event.key === "Escape") {
    		this.closeOverlay();
    	}
    });
  }
  
  closeOverlay() {
    this.overlayBox.classList.add('close');
    document.getElementById('dy_stories_thumbs_${dyVariationId}').parentNode.classList.remove('active'); 
    this.clearData();
    this.active = 0;
    window.clearTimeout(timeout);
  }
}

function passDYEvent(name) {
  DY.API("event", {name: name});
}

function parsePriceHtml(selector, integrSeperator, fructionSeperator) {
  var numberHtml = document.querySelectorAll(selector);
  for(var i=0; i < numberHtml.length; i++){
    var num = numberHtml[i].textContent;
    var str = num.toString().split('.');
    if (str[0].length >= 5) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1'+integrSeperator);
    }
    if (str[1] && str[1].length >= 5) {
      str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    numberHtml[i].textContent = str.join(fructionSeperator);
  }
}

function getPrevSiblings(element) {
  let arrayPrev = [];
  while ( element = element.previousSibling ) {
    arrayPrev.push(element);
  }
  return arrayPrev;
}

function parentIndex() {
  let a = document.getElementById('dy_stories_thumbs_${dyVariationId}');
  let parents = [];
  while (a) {
    parents.push(a);
    a = a.parentNode;
  }
  parents[1].style.position = 'relative';
  parents[1].style.zIndex = '10';

  if (parents[3] && parents[3] !== document) parents[3].style.zIndex = 'unset';
}

    
function widgetSwitch(current, sibling) {
  current.closeOverlay();
  current = sibling;
  current.openOverlay();
}

function widgetNav(widget, vector) {
  window.clearTimeout(widget.timeout);
  if (vector == 'next') {
    let current = widget;
    if (current.active < current.items.length - 1) {
      current.nextSlide();
    } else if (current.n < widgetsNumber - 1) {
      let nextWidget = new StrategyWidget('dy_stories_wrap_${dyVariationId}', current.n + 1);
      widgetSwitch(current, nextWidget);
    } else {
      current.closeOverlay();
    }
  }
  if (vector == 'prev') {
    let current = widget;
    if (current.active > 0) {
      current.prevSlide();
    } else if (current.n > 0) {
      let prevWidget = new StrategyWidget('dy_stories_wrap_${dyVariationId}', current.n - 1);
      widgetSwitch(current, prevWidget);
    } else {
      current.closeOverlay();
    }
  }
}

function swipeUp(callback) {
  if (touchendY < touchstartY) {
    callback();
  }
}

for (var i = 0; i < widgetsNumber; i++) {
  let widget = new StrategyWidget('dy_stories_wrap_${dyVariationId}', i);

  widget.addTrackItems();
  
  widget.thumb.addEventListener('click', () => {
    widget.openOverlay();
  });
  
  widget.closeBtn.addEventListener('click', () => {
    widget.closeOverlay();
  });
  
  widget.nextBtn.addEventListener('click', () => {
    window.clearTimeout(timeout);
    widgetNav(widget, 'next');
  });
  
  widget.prevBtn.addEventListener('click', () => {
    window.clearTimeout(timeout);
    widgetNav(widget, 'prev');
  });
  
  widget.overlayBox.addEventListener('click', (e) => {
    if (e.target === widget.overlayBox) {
      widget.closeOverlay();
      document.getElementById('dy_stories_thumbs_${dyVariationId}').parentNode.classList.remove('active'); 
    }
  });
  
  for (var l = 0; l < widget.items.length; l++) {
    let link = widget.items[l].querySelector('.dy_stories_story_cta_${dyVariationId}');
    link.addEventListener('click', (e) => {passDYEvent(widget.title.innerHTML)});
    link.addEventListener('touchend', (e) => {
      touchendY = event.changedTouches[0].screenY;
      swipeUp(() => {
        passDYEvent(widget.title.innerHTML);
      });
    });
  }
}

parentIndex();
parsePriceHtml('.dy_stories_story_price_${dyVariationId} span', '${Thousands Separator}', '${Decimal Separator}');