export default class Popover {
  constructor() {
    this.tooltipContainer = null;
    this.btn = null;
    this.arrow = null;
  }

  init() {
    const tooltipContainer = document.querySelector('.tooltip_container');
    const btn = document.querySelector('.btn');
    const arrow = document.querySelector('.arrow');
    this.tooltipContainer = tooltipContainer;
    this.btn = btn;
    this.arrow = arrow;
    this.btn.addEventListener('click', (e) => {
      e.preventDefault();
      this.buttonClick();
    });
  }

  buttonClick() {
    this.tooltipContainer.classList.toggle('display_none');
    this.tooltipContainer.classList.toggle('display_flex');
    this.tooltipContainer.style.top = `-${this.btn.offsetTop + this.btn.offsetHeight + this.btn.offsetHeight / 4}px`;
    this.tooltipContainer.style.left = `-${this.btn.offsetLeft - this.btn.offsetWidth / 2}px`;
    this.arrow.style.left = `${this.btn.offsetWidth / 2 + this.arrow.offsetWidth / 2}px`;
  }
}

const popover = new Popover();
popover.init();

// const tooltipContainer = document.querySelector('.tooltip_container');
// const btn = document.querySelector('.btn');
// const arrow = document.querySelector('.arrow');

// tooltipContainer.style.top = `-${btn.offsetTop + btn.offsetHeight + btn.offsetHeight / 4}px`;
// tooltipContainer.style.left = `-${btn.offsetLeft - btn.offsetWidth / 2}px`;

// btn.addEventListener('click', (e) => {
//   e.preventDefault();
//   tooltipContainer.classList.toggle('display_none');
//   tooltipContainer.classList.toggle('display_flex');
//   arrow.style.left = `${btn.offsetWidth / 2 + arrow.offsetWidth / 2}px`
// });
