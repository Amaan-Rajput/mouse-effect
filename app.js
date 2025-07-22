const Body = document.querySelector('body');
// touch move make heart 
Body.addEventListener('touchmove', (e) => {
    [...e.changedTouches].forEach(touch => {
        const span = document.createElement('span');
        span.classList.add("heart");
        span.style.left = `${touch.pageX}px`
        span.style.top = `${touch.pageY}px`;
        const area = Math.random() * 100;
        span.style.height = area + "px";
        span.style.width = area + "px";
        Body.appendChild(span);
        
        setTimeout(() => {
            span.remove();
        }, 3000);
    })
})
// mouse move make heart 
Body.addEventListener('mousemove', (e) => {
    const xasix = e.offsetX;
    const yasix = e.offsetY;
    const span = document.createElement('span');
    span.classList.add("heart");
    span.style.left = xasix + "px";
    span.style.top = yasix + "px";
    const area = Math.random() * 100;
    span.style.height = area + "px";
    span.style.width = area + "px";
    Body.appendChild(span);

    setTimeout(() => {
        span.remove();
    }, 3000);
})
// click water effect 
Body.addEventListener('click', (e) => {
    const xasix = e.offsetX;
    const yasix = e.offsetY;
    const span = document.createElement('span');
    span.classList.add("circle");
    span.style.left = xasix + "px";
    span.style.top = yasix + "px";
    Body.appendChild(span);

    setTimeout(() => {
        span.remove();
    }, 2000);
})