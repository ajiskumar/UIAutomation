// import {expect, test} from "@playwright/test";
// import exp from "constants";
// import { describe } from "node:test";


// test('simple api test', async({request})=>{
//    var baseUrl = 'https://reqres.in/api';
   
//    const response = await request.get(`${baseUrl}/users?page=2`);

//     //Some Assertion for Get Request
//     expect(response.status()).toBe(200)  
//     var responseBody = JSON.parse(await response.text());
//     console.log(responseBody.data[1].id);
//     console.log(responseBody.data.length);
//     expect(responseBody.data[1].email).toBeTruthy();

// })