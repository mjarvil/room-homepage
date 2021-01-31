import UI from './ui.js';
import Content from './content.js';

class App {
  initialRender = false;

  constructor(isMobile, cnt) {
    this.isMobile = isMobile;
    this.cnt = cnt;
    this.ui = new UI();
  }

  init() {
    if (!this.initialRender) {
      this.render();
      this.initialRender = true;
    }

    this.ui.sliderLeft.addEventListener('click', () => {
      if (this.cnt !== 0) {
        this.cnt = this.cnt - 1;
        this.render();
      }
    });
    this.ui.sliderRight.addEventListener('click', () => {
      if (this.cnt < 2) {
        this.cnt = this.cnt + 1;
        this.render();
      }
    });
  }

  render() {
    const content = new Content(this.isMobile, this.cnt);
    const contObject = content.getContent();
    this.ui.h1.innerText = contObject.title;
    this.ui.mainP.innerText = contObject.description;
    this.ui.hero.src = `/images/${contObject.picture}`;
  }
}

const isMobile = window.innerWidth <= 1439 ? true : false;

const app = new App(isMobile, 0);
app.init();
