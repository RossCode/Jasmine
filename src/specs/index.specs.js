var uomTypes = [{
    "Id":1,
    "Name":"Volume",
    "UnitsOfMeasure":[{"Id":1,"Name":"Liters","IsDefault":true}]
}];

describe('When loading the view', function() {
    var selectDiv = $('#divUnitsOfMeasure');
    spyOn(selectDiv, 'append');
    it ('it should create drop downs', function() {
        expect(selectDiv.append).toHaveBeenCalled();
    });
});
