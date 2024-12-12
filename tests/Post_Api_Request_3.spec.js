const{test,expect}=require('@playwright/test');
import {faker} from '@faker-js/faker';
const{DataTime}=require('luxon');

test('Create post request by using dynamic request body',async ({ request }) => {

    const firstname= faker.person.firstName();
    const lastname = faker.person.lastName();
    const totalprice= faker.number.int(1000);

    const checkinDate=DataTime.now().toFormat('yyyy-mm-dd');
    const checkoutDate=DataTime.now().plus({day:3}).toFormat('yyyy-mm-dd');

    const api_response=await request.post('/booking',{

       data:
        {
            "firstname":firstname,
            "lastname": lastname,
            "totalprice": totalprice,
            "depositpaid": true,
            "bookingdates": {
                "checkin": checkinDate,
                "checkout": checkoutDate
            },
            "additionalneeds": "super bowls"
        }
       


    })

     expect(api_response.ok()).toBeTruthy();
     expect(api_response.status()).toBe(200);
    const post_api_responsebody=await api_response.json();
    console.log(post_api_responsebody);
    
    //Validate JSON Api Response

    expect(post_api_responsebody.booking).toHaveProperty("firstname",firstname);
    expect(post_api_responsebody.booking.bookingdates).toHaveProperty("checkin",checkinDate);
})