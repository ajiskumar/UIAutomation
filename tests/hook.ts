import { test, expect, chromium, Page } from '@playwright/test';


  let browser;
  let context;
  let page;

  test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext({
      viewport: { width: 1850, height: 960 }, 
    });
  });

  test.beforeEach(async() => {
    page = await context.newPage();
    await page.goto('https://demoqa.com/');  
    await page.waitForTimeout(2000);
  
  })

  test.afterEach(async () => {
    // Close the page after each test
    await page.close();
  });

  test.afterAll(async () => {
    // Close the browser and context after all tests
    await context.close();
    await browser.close();
  });


 
export function getPage(): Page {
  return page;
}


