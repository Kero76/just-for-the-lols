const SQUARE_VALUE = 2;

const pythagorean = {
    /**
     * Pythagorean theorem used to check if a triangle is right or not.
     * 
     * @param {number} hypothenuse 
     *  Hypothenuse of the potential right triangle
     * @param {number} cathete1 
     *  First cathere of the potential right triangle.
     * @param {number} cathete2 
     *  Seconde cathere of the potential right triangle.
     */
    theorem(hypothenuse, cathete1, cathete2) {
        const squareHypothenuse = Math.pow(hypothenuse, SQUARE_VALUE);
        const squareCathetuses = Math.pow(cathete1, SQUARE_VALUE) + Math.pow(cathete2, SQUARE_VALUE);

        const $resultDiv = $('#theorem_result');
        let conclusion = (squareHypothenuse === squareCathetuses) 
            ? "<p>Le triangle est rectangle en C.</p>"
            : "<p>Le triangle n'est pas rectangle en C.</p>";

        $resultDiv.append(conclusion);
    }
}

/**
 * Get the content of all fields, then execute the Pythagorean theorem.
 */
$("#theorem_execution").on("click", function() {
    const hypothenuse = $("#hypothenuse").val();
    const cathetus1 = $("#cathetus1").val();
    const cathetus2 = $("#cathetus2").val();

    pythagorean.theorem(
        hypothenuse,
        cathetus1,
        cathetus2
    ); 
}); // #theorem_execution.on 


