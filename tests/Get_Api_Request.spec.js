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

    // expect(api_response.ok()).toBeTruthy();
    // expect(api_response.status()).toBe(200);
    const post_api_responsebody=await api_response.json();
    console.log(post_api_responsebody);

    const b_id= post_api_responsebody.bookingid;
    const get_apiresponse=await request.get('/booking/${b_id}')

    console.log( get_apiresponse.json());

    expect(get_apiresponse.ok()).toBeTruthy();
     expect(get_apiresponse.status()).toBe(200);
    

    
})