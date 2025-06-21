import BasePage from './base.page';
import HeaderComponent from '../components/common/header.component';

export default class DashboardPage extends BasePage {
  constructor() {
    super('/inventory.html');
    this.header = new HeaderComponent();
  }
}
