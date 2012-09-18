$(document).ready(function() {
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
        $("#divUnitsOfMeasure").append(row);
    }
});

function saveSelectedValues() {
    for (var typeIndex in uomTypes) {
        var uomType = uomTypes[typeIndex];
        var id = "UoMType" + uomType.Id;

        var selectBox = $("#" + id);

        $("#" + id + " > option").each(function(i) {
            uomType.UnitsOfMeasure[i].IsDefault = this.selected;
        });
    }

    $('#hdnTypes').val(JSON.stringify(uomTypes));
}
