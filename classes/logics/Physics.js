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

    
    computeElectricity(voltage, intensity, power, resistance) {
        const isValidVoltage = !isNaN(voltage);
        const isValidIntensity = !isNaN(intensity);
        const isValidPower = !isNaN(power);
        const isValidResistance = !isNaN(resistance);

        const returnValues = [
            {
                'name': 'voltage',
                'value': (isValidVoltage) ? voltage : undefined,
            }, 
            {
                'name': 'intensity',
                'value': (isValidIntensity) ? intensity : undefined,
            },
            {
                'name': 'power',
                'value': (isValidPower) ? power : undefined,
            },
            {
                'name': 'resistance',
                'value': (isValidResistance) ? resistance : undefined,
            }
        ]

        returnValues.forEach(element => {
            if (element.name === 'voltage' && !isValidVoltage) {
                if (isValidPower && isValidIntensity) {
                    element.value = this._computeVoltageWithPowerAndIntensity(power, intensity);
                } else if (isValidResistance && isValidIntensity) {
                    element.value = this._computeVoltageWithResistanceAndIntensity(resistance, intensity);
                } else {
                    element.value = this._computeVoltageWithPowerAndResistance(power, resistance);
                }
                
                isValidVoltage = true;
            }

            if (element.name === 'intensity' && !isValidIntensity) {
                if (isValidPower && isValidVoltage) {
                    this._computeIntensityWithPowerAndVoltage(power, voltage);
                } else if (isValidVoltage && isValidResistance) {
                    element.value = this._computeIntensityWithVoltageAndResistance(voltage, resistance);
                } else {
                    element.value = this._computeIntensityWithPowerAndResistance(power, resistance);
                }
                
                isValidIntensity = true;
            }

            if (element.name === 'power' && !isValidPower) {
                if (isValidVoltage && isValidIntensity) {
                    this._computePowerWithVoltageAndIntensity(voltage, intensity);
                } else if (isValidResistance && isValidIntensity) {
                    element.value = this._computePowerWithResistanceAndIntensity(resistance, intensity);
                } else {
                    element.value = this._computePowerWithVoltageAndResistance(voltage, resistance);
                }
                
                isValidPower = true;
            }

            if (element.name === 'resistance' && !isValidResistance) {
                element.value = this._computeResistanceWithVoltageAndIntensity(voltage, intensity);
            }
        });

        console.log(returnValues);
    }

    // Private functions //
    /**
     * Compute the voltage with the power and the intensity.
     * 
     * @param {number} power 
     *  The power in watt.
     * @param {number} intensity 
     *  The intensity in ampere.
     * @returns 
     *  The voltage in volt compute.
     */
    _computeVoltageWithPowerAndIntensity(power, intensity) {
        return power / intensity;
    }

    /**
     * Compute the voltage with the resistance and the intensity.
     * 
     * @param {number} power 
     *  The resistance in ohm.
     * @param {number} intensity 
     *  The intensity in ampere.
     * @returns 
     *  The voltage in volt compute.
     */
    _computeVoltageWithResistanceAndIntensity(resistance, intensity) {
        return resistance * intensity;
    }

    /**
     * Compute the voltage with the power and the resistance.
     * 
     * @param {number} power 
     *  The power in watt.
     * @param {number} resistance 
     *  The resistance in ohm.
     * @returns 
     *  The voltage in volt compute.
     */
    _computeVoltageWithPowerAndResistance(power, resistance) {
        return Math.sqrt(power * resistance);
    }

    /**
     * Compute the intensity in function of the power and the voltage.
     * 
     * @param {number} power 
     *  The power in watt.
     * @param {number} voltage 
     *  The voltage in volt.
     * @returns 
     *  The intensity in ampere compute.
     */
    _computeIntensityWithPowerAndVoltage(power, voltage) {
        return power / voltage;
    }

    /**
     * Compute the intensity in function of the voltage and the resistance.
     * 
     * @param {number} voltage 
     *  The voltage in volt
     * @param {number} resistance 
     *  The resistance in ohm.
     * @returns 
     *  The intensity in ampere compute.
     */
    _computeIntensityWithVoltageAndResistance(voltage, resistance) {
        return voltage / resistance;
    }

    /**
     * Compute the intensity in function of the power and the resistance.
     * 
     * @param {number} power 
     *  The power in watt.
     * @param {number} resistance 
     *  The resistance in ohm.
     * @returns 
     *  The intensity in ampere compute.
     */
    _computeIntensityWithPowerAndResistance(power, resistance) {
        return Math.sqrt(power / resistance);
    }

    /**
     * Compute the poower in function of the voltage and the resstance.
     * @param {number} voltage 
     * The voltage in volt.
     * @param {number} intensity 
     *  The intensity in ampere.
     * @returns
     *  The power in ohm compute.
     */
    _computePowerWithVoltageAndIntensity(voltage, intensity) {
        return voltage * intensity;
    }

    /**
     * Compute the power in function of the resistance and the intensity.
     * 
     * @param {number} resistance 
     *  The resistance in ohm.
     * @param {number} intensity 
     *  The intensity in ampere.
     * @returns
     *  The power in watt compute.
     */
    _computePowerWithResistanceAndIntensity(resistance, intensity) {
        return resistance * Math.pow(intensity, 2);
    }

    /**
     * Compute the power in function of the voltage and the resistance.
     * 
     * @param {number} voltage 
     *  The voltage in volt.
     * @param {number} resistance 
     *  The resistance in ohm.
     * @returns
     *  The power in watt compute. 
     */
    _computePowerWithVoltageAndResistance(voltage, resistance) {
        return Math.pow(voltage, 2) * resistance;
    }

    /**
     * Compute the resistance in function of the voltage and the intensity.
     * 
     * @param {number} voltage 
     *  The voltage in volt.
     * @param {number} intensity 
     *  The intensity in watt.
     * @returns
     *  The resistance in ohm compute.
     */
    _computeResistanceWithVoltageAndIntensity(voltage, intensity) {
        return voltage / intensity;
    }
}