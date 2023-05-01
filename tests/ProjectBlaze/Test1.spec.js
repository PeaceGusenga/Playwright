//add specific modules required
const {test, expect} = require('@playwright/test')

test ('Visit Site', async ({page}) => {
    //visit DemoBlaze
    await page.goto('https://www.demoblaze.com/index.html')
    //Check Site Title
    await expect(page).toHaveTitle('demoblaze')
})