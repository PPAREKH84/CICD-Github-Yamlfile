import {test,expect} from '@playwright/test';

test('Github action practice-1',async({page})=>{
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle(/Google/);
    console.log('This is my first github action practice');
})
test('Github action practice-2',async({page})=>{
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle(/Google/);
    console.log('This is my second github action practice');
})
test('Github action practice-3',async({page})=>{
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle(/Google1/);
    console.log('This is my third github action practice');
})
test('Github action practice-4',async({page})=>{
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle(/Google/);
    console.log('This is my fourth github action practice');
})

test.describe('Github action practice-5',()=>{
    test('Test-1',async({page})=>{
        await page.goto('https://www.google.com/'); 
        await expect(page).toHaveTitle(/Google/);
        console.log('This is my fifth github action practice');
    })
    test('Test-2',async({page})=>{
        await page.goto('https://www.google.com/'); 
        await expect(page).toHaveTitle(/Google/);
        console.log('This is my sixth github action practice');
    })
})