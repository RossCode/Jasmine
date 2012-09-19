$(document).ready(function() {
    addRowTo($("#divUnitsOfMeasure"));
});

function addRowTo(divToAppend) {
    for (var typeIndex in uomTypes) {
        var uomType = uomTypes[typeIndex];
        var id = "UoMType" + uomType.Id;
        var selectBox = $("<select id=\"" + id + "\" name \"" + id + "\" />");
        for (var uomIndex in uomType.UnitsOfMeasure) {
            var uom = uomType.UnitsOfMeasure[uomIndex];
            $("<option />", { value: uom.Id, text: uom.Name, selected: uom.IsDefault }).appendTo(selectBox);
        }
        var label = $("<label for=\"" + id + "\" >" + uomType.Name + ":&nbsp;</label>");
        var row = $("<div />");
        row.append(label);
        row.append(selectBox);
        divToAppend.append(row);
    }
}

function saveSelectedValues() {
    saveUnitOfMeasuresJsonTo($('#hdnTypes'));
}

function saveUnitOfMeasuresJsonTo(field) {
    for (var typeIndex in uomTypes) {
        var uomType = uomTypes[typeIndex];
        var id = "UoMType" + uomType.Id;

        var selectBox = $("#" + id);

        $("#" + id + " > option").each(function(i) {
            uomType.UnitsOfMeasure[i].IsDefault = this.selected;
        });
    }

    field.val(JSON.stringify(uomTypes));
};
