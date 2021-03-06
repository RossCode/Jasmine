/// <reference path="../../lib/jquery.js" />
/// <reference path="../../lib/jasmine/jasmine.js" />
/// <reference path="../../lib/jasmine/jasmine-html.js" />
/// <reference path="../../lib/jasmine/jasmine-jquery.js" />
/// <reference path="../index.js" />

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
        RossCode.UoM.addRowTo($('#divUnitsOfMeasure'));
        expect($('#divUnitsOfMeasure').children().length).toBeGreaterThan(0);
    });
});

describe('When saving the view', function() {
    beforeEach(function(){
        jasmine.getFixtures().set('<input type="hidden" id="hdnTypes" />');
    });

    it('it should save the new json to the hidden field', function() {
        RossCode.UoM.saveUnitOfMeasuresJsonTo($('#hdnTypes'));
        expect($('#hdnTypes').val()).toBeDefined();
    });
});

describe('When the dom event fires', function() {
    
    beforeEach(function() {
        jasmine.getFixtures().set('<input type="hidden" id="hdnTypes" />');
    });

    it('it should save the new json to the hidden field', function() {
        RossCode.UoM.saveSelectedValues();
        expect($('#hdnTypes').val()).toBeDefined();
    });
});
