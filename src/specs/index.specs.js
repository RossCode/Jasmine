/// <references path="../../lib/jquery.js" />
/// <references path="../../lib/jasmine/jasmine.js" />
/// <references path="../../lib/jasmine/jasmine-html.js" />
/// <references path="../../lib/jasmine/jasmine-jquery.js" />
/// <references path="../index.js" />

var uomTypes = [{
    "Id":1,
    "Name":"Volume",
    "UnitsOfMeasure":[{"Id":1,"Name":"Liters","IsDefault":true}]
}];

describe('When loading the view', function() {
    beforeEach(function(){
        jasmine.getFixtures().set("<div id='divUnitsOfMeasure'></div>");
    });

    it ('it should create drop downs', function() {
        addRowTo($('#divUnitsOfMeasure'));
        expect($('#divUnitsOfMeasure').children().length).toBeGreaterThan(0);
    });
});

describe('When saving the view', function() {
    beforeEach(function(){
        jasmine.getFixtures().set('<input type="hidden" id="hdnTypes" />');
    });

    it('it should save the new json to the hidden field', function() {
        saveUnitOfMeasuresJsonTo($('#hdnTypes'));
        expect($('#hdnTypes').val()).toBeDefined();
    });
});

describe('When the dom event fires', function() {
    
    beforeEach(function() {
        jasmine.getFixtures().set('<input type="hidden" id="hdnTypes" />');
    });

    it('it should save the new json to the hidden field', function() {
        saveSelectedValues();
        expect($('#hdnTypes').val()).toBeDefined();
    });
});
