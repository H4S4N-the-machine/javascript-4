// ⭐⭐script for custom mouse start ⭐⭐//

const cursor = document.querySelector('.cursor')
const cursorSM = document.querySelector('.cursorSM')

const customMouseCursor = (event) => {
    const { pageX: left, pageY: top } = event
    cursor.style.top = top+'px'
    cursor.style.left = left + 'px'
    cursorSM.style.top = top+'px'
    cursorSM.style.left = left+'px'
}





window.addEventListener('mousemove', customMouseCursor)


//⭐⭐ script for custom mouse end ⭐⭐//