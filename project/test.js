const {Browser, By, Key, until} = require("selenium-webdriver"); 
const {suite} = require("selenium-webdriver/testing"); 
const assert = require("assert"); 

suite(function(env) {
    descrive('Coolors website', function(){
        it('has Generator button', function() {
            assert(1 === 2);
        }); 

    })
});  