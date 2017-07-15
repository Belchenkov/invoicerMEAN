import { InvoicerAngularPage } from './app.po';

describe('invoicer-angular App', () => {
  let page: InvoicerAngularPage;

  beforeEach(() => {
    page = new InvoicerAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
