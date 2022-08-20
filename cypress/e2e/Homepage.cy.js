const Homepage = require ('../support/pages/Homepage');
let homepage = new Homepage ();
const HomepageData = require('../support/datatest/HomepageData');

describe('Page Object Model Web', ()=> {
    it('Visit Web', ()=>{
        homepage.visit('');
    })
    it('Type Quote',()=>{
        homepage.type_quote(HomepageData.datatest.quote);
    })
    it('Selector Colour',()=>{
        homepage.choose_colour(HomepageData.datatest.quote_colour);

    })
    it('Submit Quote',()=>{
        homepage.submit_quote(HomepageData.datatest.quote_colour, HomepageData.datatest.quote);
    })
    it('Clear Quote',()=>{
        homepage.clear_quote(HomepageData.datatest.quote)
    })
})