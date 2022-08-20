const Homepage = require ('../support/pages/Hpage');
let homepage = new Homepage ();
const HomepageData = require('../support/datatest/HomepageData');

describe('Page Object Model', ()=> {
    it('Visit Quote Web', ()=>{
        homepage.visit('');
    })
    it('Input Quote',()=>{
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