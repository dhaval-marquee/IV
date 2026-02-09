function handleMobileClick(event) {
    if (window.innerWidth <= 767) { 
        if (event.target.matches(".react-datepicker__time-list-item:not(.react-datepicker__time-list-item--disabled)")) {
            const button = document.querySelector(".ob-quote__appointment-box .ob-btn__fixed-container > button");
            if (button && !button.classList.contains("event-time")) { 
                button.classList.add("event-time");
                button.disabled = false;
            }
        }
    }
    }
    function applyMobileListener() {
    if (window.innerWidth <= 767) {
        document.addEventListener("click", handleMobileClick);
    } else {
        document.removeEventListener("click", handleMobileClick);
    }
    }
    applyMobileListener();
    window.addEventListener("resize", applyMobileListener);
    