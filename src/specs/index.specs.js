var uomTypes = [{
    "Id":1,
    "Name":"Volume",
    "UnitsOfMeasure":[{"Id":1,"Name":"Liters","IsDefault":true}]
}];

describe('When loading the view', function() {
    var selectDiv;

    beforeEach(function(){
        selectDiv = $('<div id="divUnitsOfMeasure"></div>');
        spyOn(selectDiv, 'append');

        addRowTo(selectDiv);
    });


    it ('it should create drop downs', function() {
        expect(selectDiv.append).toHaveBeenCalled();
    });
});

describe('When saving the view', function() {
    var hiddenField;

    beforeEach(function(){
        hiddenField = $('<input type="hidden" id="hdnTypes" />');
        spyOn(hiddenField, 'val');
        
        saveUnitOfMeasuresJsonTo(hiddenField);
    });

    it('it should save the new json to the hidden field', function() {
        expect(hiddenField.val).toHaveBeenCalled();
    });

});
