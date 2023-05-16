/// <reference types = "cypress"/>

describe('API test', () => {

    let bookingId

    it('Get booking request', () => {
        cy.request({
            method : 'GET',
            url: 'https://restful-booker.herokuapp.com/booking'
        }).then(response => {
            expect(response.status).to.eq(200);
            assert.isArray(response.body, 'Response is an array')
            bookingId = response.body[0].bookingid
            cy.log(bookingId)
        })
    })

    
    it('Auth', () => {
        cy.request({
            method : 'POST',
            url: 'https://restful-booker.herokuapp.com/auth',
            body : {
                "username" : "admin",
                "password" : "password123"
            }
        }).then(response => {
            expect(response.status).to.eq(200)
            expect(response.body).has.property('token')
            cy.log(response.body.token)
        })
    })
})