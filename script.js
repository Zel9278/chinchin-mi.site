const box = document.getElementById('text')
setInterval(() => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    const color = `rgb(${r}, ${g}, ${b})`
    box.style.color = color
})
