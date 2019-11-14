/**
 * Class who contains all elements relatives to the Mathematics sciences.
 */
class Mathematics {

    /**
     * Default constructor of the class.
     */
    constructor() {
        this.square = 2;
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
        const squareHypothenuse = Math.pow(hypothenuse, this.square);
        const squareCathetuses = Math.pow(cathete1, this.square) + 
                                 Math.pow(cathete2, this.square);

        return (squareHypothenuse === squareCathetuses);
    }

    /**
     * Compute the thirds side of a right triangle.
     * 
     * @param {number} hypothenuse 
     *  Potential hypothenuse of the triangle.
     * @param {number} cathete1 
     *  First size of the triangle.
     * @param {number} cathete2 
     *  Seconde side of the triangle.
     * @returns
     *  The size of the third value of the right triangle.
     */
    pythagoreanTheoremConverse(hypothenuse, cathete1, cathete2) {
        // Hypothenuse found, then compute a cathete size, so in other case compute the hypothenuse size
        let res = 0;
        if (!isNaN(hypothenuse) && hypothenuse != "") {
            // First size is empty, so compute it then compute the second size.
            if (!isNaN(cathete1) && cathete1 != "") {
                const _cathete = Math.pow(hypothenuse, this.square) - Math.pow(cathete1, this.square);
                res = Math.sqrt(_cathete);
            } else {
                const _cathete = Math.pow(hypothenuse, this.square) - Math.pow(cathete2, this.square);
                res = Math.sqrt(_cathete);
            }
        } else {
            const _hypothenuse = Math.pow(cathete1, this.square) + Math.pow(cathete2, this.square);
            res = Math.sqrt(_hypothenuse);
        }

        return res;
    }

    /**
     * Euclidean algorithm to compute the gcd.
     * 
     * @param {number} opA 
     *  First operande of the operation.
     * @param {number} opB 
     *  Seconde operande of the operation.
     * @returns 
     *  The greatest common divisor between the operand A et operand B. 
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

    /**
     * Get the Least Common Multiple of two numbers.
     * 
     * @param {number} a 
     *  A number.
     * @param {number} b 
     *  Another number.
     * @returns 
     *  The least common multiple between a and b.
     */
    lcmAlgorithm(a, b) {
        return Math.abs((a * b)/ this.euclideanAlgorithm(a, b));
    }
}