import { expect, Locator, Page } from "@playwright/test"

let formlink: Locator;
let hPage: Page;

interface BrokenImage {
    url: string;
    status: number;
}

export class homepage {
    protected page: Page;
    constructor(page: Page) {
        this.page = page;
        hPage = this.page
        formlink = page.getByText('Practice Form');
    }

    async verifyTitle() {
        await expect(this.page).toHaveTitle(/DEMOQA/);
    }

    async fillForm() {
        
        await hPage.getByRole('heading', { name: 'Forms' }).click();
        await formlink.click();
        await hPage.getByPlaceholder('First Name').fill("Ajiskumar");
        await hPage.locator('input[placeholder="name@example.com"]').fill('ajiskumar.mca@gmail.com');
        await hPage.waitForTimeout(2000);
    }

    async uploadAndDownloadFile(){
        await hPage.getByRole('heading',{name: "Elements"}).click();
        await hPage.getByText("Upload and Download").click();
        await hPage.setInputFiles("input[type='file']","C:/Users/ajisk/Desktop/Upload.txt")
        await hPage.waitForTimeout(2000);

    }
    
    async validateBrokenImage()
    {
        await hPage.getByRole('heading',{name: "Elements"}).click();
        await hPage.getByText("Broken Links - Images").click();
        
        await hPage.waitForLoadState("domcontentloaded");
        const images = hPage.locator("img");
        console.log(await images.count());
        const allImages = await images.all();
        for await(const img of allImages)
        {
            const imgSrc = await img.getAttribute("src");
            const res = await hPage.request.get(hPage.url()+imgSrc);
            console.log(imgSrc)
            console.log(res.status())
            expect.soft(res.status()).toBe(200);
        }
    }
       
    

}