const snow = document.querySelector('.snow')
const snowflakes = document.querySelectorAll('.snow__flake')

function getRandInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min
}

function getRandFloat(min, max) {
    return (Math.random() * (max - min) + min).toFixed(1)
}

snowflakes.forEach(snowflake => {
    snowflake.style.fontSize = getRandFloat(0.7, 2) + 'em'
    snowflake.style.animationDuration = getRandInteger(10, 30) + 's'
    snowflake.style.animationDelay = getRandInteger(-1, snowflakes.length / 2) + 's'
})