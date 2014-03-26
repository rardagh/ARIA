window._skel_config = {
    prefix: 'css/style',
        preloadStyleSheets: true,
    resetCSS: true,
    boxModel: 'border',
    grid: { gutters: 30 },
    breakpoints: {
        wide: { range: '1200-', containers: 1140, grid: { gutters: 50 } },
        narrow: { range: '481-1199', containers: 960 },
        mobile: { range: '-480', containers: 'fluid', lockViewport: true, grid: { collapse: true } }
    }
};

$(document).ready(function() {
    $("#add").click(function() {
        var Value1 = $("#input1").val();
        var Value2 = $("#input2").val();
		
		if ((Value1.length == 0) || (Value2.length == 0)) {
            alert("Please input 2 numeric values to calculate");
        }
        if ((Value1.length !== 0) || (Value2.length !== 0)) {
            $("#output").val(calculator.add(Value1,Value2));
        }
        
    });
    $("#subtract").click(function() {
        var Value1 = $("#input1").val();
        var Value2 = $("#input2").val();
		

        if ((Value1.length == 0) || (Value2.length == 0)) {
            alert("Please input 2 numeric values to calculate");
        }
        if ((Value1.length !== 0) || (Value2.length !== 0)) {
            $("#output").val(calculator.subtract(Value1,Value2));
        }
    });
    $("#multiply").click(function() {
        var Value1 = $("#input1").val();
        var Value2 = $("#input2").val();
		

        if ((Value1.length == 0) || (Value2.length == 0)) {
            alert("Please input 2 numeric values to calculate");
        }
        if ((Value1.length !== 0) || (Value2.length !== 0)) {
            $("#output").val(calculator.multiply(Value1,Value2));
        }
    });
    $("#divide").click(function() {
        var Value1 = $("#input1").val();
        var Value2 = $("#input2").val();
		

        if ((Value1.length == 0) || (Value2.length == 0)) {
            alert("Please input 2 numeric values to calculate");
        }
        if (Value2 ==="0") {
            alert("Sorry, but you can't divide by Zero, please try again.");
        }
        if ((Value1.length !== 0) || (Value2.length !== 0)) {
            $("#output").val(calculator.divide(Value1,Value2));
        }
    });
    $("#clearbutton").click(function() {
        $("#input1").val('');
        $("#input2").val('');
        $("#output").val('');
    });

});