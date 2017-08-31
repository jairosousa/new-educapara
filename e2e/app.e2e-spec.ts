import { EducaparaAppPage } from './app.po';

describe('educapara-app App', () => {
  let page: EducaparaAppPage;

  beforeEach(() => {
    page = new EducaparaAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
