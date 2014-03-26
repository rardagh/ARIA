var calculator = (function() {

    // Private stuff up here
    var converterValue = 2.2;


    // Public methods here
    return {
        add: function(input1,input2) {
            var num1 = parseInt(input1);
            var num2 = parseInt(input2);
            if (isNaN(num1) == true) {
                throw new Error ("Not a number");
            }
            num = num1 + num2;
            return Math.round(num);
        },

        subtract: function(input1,input2) {
            var num1 = input1;
            var num2 = input2;
            if (isNaN(num1) == true) {
                throw new Error ("Not a number");
            }
            num = num1 - num2;
            return num;
        },
        
        multiply: function(input1,input2) {
            var num1 = input1;
            var num2 = input2;
            if (isNaN(num1) == true) {
                throw new Error ("Not a number");
            }
            num = num1 * num2;
            return num;
        },
        
        divide: function(input1,input2) {
            var num1 = input1;
            var num2 = input2;
            if (isNaN(num1) == true) {
                throw new Error ("Not a number");
            }
            num = num1 / num2;
            return num;
        }

    }
}())