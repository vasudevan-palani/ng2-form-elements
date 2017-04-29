import { Ng2FormElementsPage } from './app.po';

describe('ng2-form-elements App', function() {
  let page: Ng2FormElementsPage;

  beforeEach(() => {
    page = new Ng2FormElementsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
