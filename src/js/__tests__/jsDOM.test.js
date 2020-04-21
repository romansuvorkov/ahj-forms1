import Popover from '../app';

test('should render self', () => {
    document.body.innerHTML = `<div class="btn_container">
    <div class="tooltip_container display_none">
        <div class="arrow"></div>
        <span class="tooltip_header">Popover title</span>
        <span class="tooltip_text">And here's some amazing content. It's very engaging. Right?</span>
    </div>
    <button class="btn">Click To Toggle popover</button>
</div>`;
    const popover = new Popover();
    popover.init();
    const tooltipContainer = document.querySelector('.tooltip_container');
    const btn = document.querySelector('.btn');
    btn.click();
    expect(tooltipContainer.classList.contains('display_flex'));
});
