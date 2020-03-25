document.addEventListener('scroll', onScroll);

function onScroll(event) {
    const currentPosition = window.scrollY;
    const childrenBody = Array.prototype.slice.call(document.querySelector('body').children);
    const links = document.querySelectorAll('#menu a');

    childrenBody.forEach(el => {

        if (el.offsetTop <= currentPosition && (el.offsetTop + el.offsetHeight) > currentPosition) {
            links.forEach((a) => {
                a.classList.remove('active');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active');
                }
            })
        }

    });


}

module.exports = scroll;