import { AccountingAppFrontEndPage } from './app.po';

describe('accounting-app-front-end App', () => {
  let page: AccountingAppFrontEndPage;

  beforeEach(() => {
    page = new AccountingAppFrontEndPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
