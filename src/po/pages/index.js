import DashboardPage from './dashboard.page';
import LoginPage from './login.page';

export default function pages(name) {
  const items = {
    login: new LoginPage(),
    dashboard: new DashboardPage(),
  };

  return items[name.toLowerCase()];
}
