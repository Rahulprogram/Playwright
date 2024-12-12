const{test,expect}=require('@playwright/test');
const post_bookingbody=require('../testdata/PostRequest.json');

test('Create post request by using static request json file',async ({ request }) => {
    
    const api_response=await request.post('/booking',{
      // Request Body Passed Static
       data:post_bookingbody
    })

     expect(api_response.ok()).toBeTruthy();
     expect(api_response.status()).toBe(200);
    const post_api_responsebody=await api_response.json();
    console.log(post_api_responsebody);
    
    //Validate JSON Api Response

    expect(post_api_responsebody.booking).toHaveProperty("firstname","tester talk playwright");
    expect(post_api_responsebody.booking.bookingdates).toHaveProperty("checkin","2018-01-01");
})