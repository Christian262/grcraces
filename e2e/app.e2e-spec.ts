import { GrcracesPage } from './app.po';

describe('grcraces App', () => {
  let page: GrcracesPage;

  beforeEach(() => {
    page = new GrcracesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
