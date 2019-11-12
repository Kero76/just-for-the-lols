/**
 * Class who contains all elements relatives to the Mathematics sciences.
 */
class Mathematics {

    /**
     * Default constructor of the class.
     */
    constructor() {
        this.squareValue = 2;
    }

    /**
     * Pythagorean theorem used to check if a triangle is right or not.
     * 
     * @param {number} hypothenuse 
     *  Hypothenuse of the potential right triangle
     * @param {number} cathete1 
     *  First cathere of the potential right triangle.
     * @param {number} cathete2 
     *  Seconde cathere of the potential right triangle.
     * @returns 
     *  A boolean to indicate if the triangle is right or not.
     */
    pythagoreanTheorem(hypothenuse, cathete1, cathete2) {
        const squareHypothenuse = Math.pow(hypothenuse, this.squareValue);
        const squareCathetuses = Math.pow(cathete1, this.squareValue) + 
                                 Math.pow(cathete2, this.squareValue);

        return (squareHypothenuse === squareCathetuses);
    }

    /**
     * Euclidean algorithm to compute the gcd.
     * 
     * @param {number} opA 
     *  First operande of the operation.
     * @param {number} opB 
     *  Seconde operande of the operation.
     * @returns 
     *  The ggreatest common divisor between the operand A et operand B. 
     */
    euclideanAlgorithm(a, b) {
        var opA = a;
        var opB = b;
        var tmp = opA;

        while (opB > 0){
            tmp = opA % opB;
            opA = opB;
            opB = tmp;
        }

        return(opA);
    }
}