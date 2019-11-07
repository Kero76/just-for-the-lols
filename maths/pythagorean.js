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
        const squareHypothenuse = Math.pow(hypothenuse, Constant.PYTHAGOREAN_SQUARE_VALUE);
        const squareCathetuses = Math.pow(cathete1, Constant.PYTHAGOREAN_SQUARE_VALUE) + 
                                 Math.pow(cathete2, Constant.PYTHAGOREAN_SQUARE_VALUE);

        const $resultDiv = $('#theorem_result');
        let conclusion = (squareHypothenuse === squareCathetuses) 
            ? '<div class="alert alert-success">' +
                '<i class="fa fa-check-circle-o" aria-hidden="true"></i>&nbsp;Le triangle est rectangle en C.' +
                '</div>'
            : '<div class="alert alert-danger">' + 
                '<i class="fa fa-exclamation-circle" aria-hidden="true"></i>&nbsp;Le triangle n\'est pas rectangle en C.' +
                '</div>';

        // Remove last result after X result displayed.
        if ($resultDiv.children().length === Constant.NB_RESULTS_DISPLAY) {
            $resultDiv.children()[0].remove();
        }

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


