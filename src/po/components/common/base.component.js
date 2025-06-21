export default class BaseComponent {
  constructor(rootSelector) {
    this.rootSelector = rootSelector;
  }

  get rootEl() {
    return $(this.rootSelector);
  }

  get title() {
    return this.rootEl.$('.app_logo');
  }
}
