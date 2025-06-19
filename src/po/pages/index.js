import LoginPage from './login.page';

export default function pages(name) {
  const items = {
    login: new LoginPage(),
  };

  return items[name.toLowerCase()];
}
