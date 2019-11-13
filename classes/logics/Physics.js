/**
 * 
 */
class Physics {
    /**
     * Empty constructor
     */
    constructor() {

    }

    /**
     * Convert a value in specific unit into an another unit.
     * 
     * @param {number} value 
     *  Value to convert
     * @param {number} initialUnit 
     *  The value of the initial value
     * @param {number} targetUnit 
     *  The target value
     * @returns 
     *  A number which represent the value for the targetUnit.
     */
    convert(value, initialUnit, targetUnit) {
        return (value * initialUnit) / targetUnit;
    }
}