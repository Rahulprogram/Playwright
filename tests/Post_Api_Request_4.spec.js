const{test,expect}=require('@playwright/test');
import { stringFormat } from '../Utils/common'; 
const post_bookingbody=require('../testdata/PostRequest_Dynamic.json');

test('Create post request by using Dynamic request json file',async ({ request }) => {

  //const dynamic_requestbody=stringFormat(JSON.stringify(post_bookingbody),"Rahhul","Rawat","Test");
    
    const api_response=await request.post('/booking',{
      // Request Body Passed Static
       data:JSON.parse(dynamic_requestbody)
    })

     expect(api_response.ok()).toBeTruthy();
     expect(api_response.status()).toBe(200);
    const post_api_responsebody=await api_response.json();
    console.log(post_api_responsebody);
    
    //Validate JSON Api Response

    expect(post_api_responsebody.booking).toHaveProperty("firstname","Rahhul");
    
})