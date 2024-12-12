const{test,expect}=require('@playwright/test');

test('Create post request by using static request body',async ({ request }) => {
    
    const api_response=await request.post('/booking',{

       data:
        {
            "firstname": "tester talk playwright",
            "lastname": "tester talk api testing",
            "totalprice": 1000,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "super bowls"
        }
       


    })

     expect(api_response.ok()).toBeTruthy();
     expect(api_response.status()).toBe(200);
    const post_api_responsebody=await api_response.json();
    console.log(post_api_responsebody);
    
    //Validate JSON Api Response

    expect(post_api_responsebody.booking).toHaveProperty("firstname","tester talk playwright");
    expect(post_api_responsebody.booking.bookingdates).toHaveProperty("checkin","2018-01-01");
})