const {Browser, By, Key, until} = require("selenium-webdriver"); 
const {suite} = require("selenium-webdriver/testing"); 
const assert = require("assert"); 

const url = "https://coolors.co"

suite(function(env) {
    descrive('Coolors website', function(){
        it('has Generator button', async function() {
            let driver = await env.builder().build(); 
            await driver.get(url); 
            let elements = await driver.findElements(By.id('homepage_hero_text_btns')); 
            assert(elements.length > 0);
            driver.quit(); 
                }); 
        }); 
    });