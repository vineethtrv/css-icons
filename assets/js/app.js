{/* <input id="fz" type="range" min="1" max="100">
    <input id="color" type="color"> */}
    const FontSizeCnt = document.getElementById('fz');
const FzLEl = document.getElementById('fz-l');
const ColorCont = document.getElementById('color');
const DemoIconEl = document.getElementById('demo-icon');


// Font size
FontSizeCnt.addEventListener('input',e=> {
    DemoIconEl.style.fontSize = e.target.value + 'px';
    FzLEl.textContent = e.target.value + 'px';
})
// Font color
ColorCont.addEventListener('input',e => {
    DemoIconEl.style.color = e.target.value
})