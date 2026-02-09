function beforeAfter() {
    if (!document.body.classList.contains('iv-floating-box')) {
        document.body.classList.add('iv-floating-box');

        const floatingBox = `
        <div class="iv-main-container">
            <div class="iv-resources">
                <a class="iv-closed" href="javascript:;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F"></path> </g></svg>
                </a>
                <h5>Exclusive IBO <br/> Content Inside</h5>
                <a class="iv-button" href="https://www.amway.com/sso/prepare">Log In</a>
            </div>
        </div>`;
        
        document.body.insertAdjacentHTML('afterbegin', floatingBox);

        // Close button
        const closeBtn = document.querySelector('.iv-closed');
        if (closeBtn) {
            closeBtn.addEventListener('click', function () {
                const box = document.querySelector('.iv-main-container');
                if (box) {
                    box.remove();
                }
                document.body.classList.remove('iv-floating-box');
            });
        }

    }
}

beforeAfter();
