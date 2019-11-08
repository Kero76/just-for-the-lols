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
     * @returns 
     *  A boolean to indicate if the triangle is right or not.
     * 
     * @see Constant.PYTHAGOREAN_SQUARE_VALUE
     */
    theorem(hypothenuse, cathete1, cathete2) {
        const squareHypothenuse = Math.pow(hypothenuse, Constant.PYTHAGOREAN_SQUARE_VALUE);
        const squareCathetuses = Math.pow(cathete1, Constant.PYTHAGOREAN_SQUARE_VALUE) + 
                                 Math.pow(cathete2, Constant.PYTHAGOREAN_SQUARE_VALUE);

        return (squareHypothenuse === squareCathetuses);
    }
}

/**
 * Get the content of all fields, then execute the Pythagorean theorem.
 */
$("#theorem-execution").on("click", function() {
    const hypothenuse = $("#hypothenuse").val();
    const cathetus1 = $("#cathetus1").val();
    const cathetus2 = $("#cathetus2").val();

    if (hypothenuse != "" && cathetus1 != "" && cathetus2 != "") {
        const result = pythagorean.theorem(
            hypothenuse,
            cathetus1,
            cathetus2
        );
        
        Utils.showResult(
            'theorem-result', 
            result, 
            [`Le triangle est rectangle en C.`, `Le triangle n'est pas rectangle en C.`], 
            ['success', 'danger']
        );
    }
}); // #theorem_execution.on

/**
 * Function call after the page loading.
 * 
 * @see Utils.createBreadcrumb
 */
$(document).ready(function() {
    Utils.createBreadcrumb('breadcrumb', ['Hub', 'Mathématiques', 'Pythagore']);
}); // document.ready


