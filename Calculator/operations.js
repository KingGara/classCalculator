// TODO:
// 1.) Do I really need the else statement that throws and error?
// 2.) 



export const mathOperations = {
    operationsPool: {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        'X': (a, b) => a * b,
        '/': (a, b) => a / b,
    },


    applyOperator(operator, values) {
        if(!operator) {
            return null;
        }

        if(operator in this.operationsPool) {
            return values.reduce(this.operationsPool[operator]);
        } else {
            throw new Error("This operator doesn't exist");
        }
    },
};

