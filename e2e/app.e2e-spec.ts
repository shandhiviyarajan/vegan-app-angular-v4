import { AngularAppV4Page } from './app.po';

describe('angular-app-v4 App', function() {
  let page: AngularAppV4Page;

  beforeEach(() => {
    page = new AngularAppV4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
