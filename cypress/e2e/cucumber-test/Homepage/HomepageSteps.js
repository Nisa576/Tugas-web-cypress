import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"

const Homepage = require ('../../../support/pages/Homepage');
let homepage = new Homepage (); 

Given(/^I open BDD Atlas Web$/, ()=>{
    homepage.visit('');
})
When(/^I type a quote: (.+)$/,(quote)=>{
    homepage.type_quote(quote);
})
And(/^I choose the (\w+) colour$/,(colour)=>{
    homepage.choose_colour(colour);

})
Then(`I verify quote submitted {string} and {string}`,(colour,quote)=>{
    homepage.submit_quote(colour,quote);
})
Then(/^I verify quote has been deleted: (.+)$/,(quote)=>{
    homepage.clear_quote(quote)
})