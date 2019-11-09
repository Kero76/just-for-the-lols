const utils = new Utils();

/**
 * Get the content of all fields, then execute the Pythagorean theorem.
 */
$("#theorem-execution").on("click", function() {
    const hypothenuse = $("#hypothenuse").val();
    const cathetus1 = $("#cathetus1").val();
    const cathetus2 = $("#cathetus2").val();

    if (hypothenuse != "" && cathetus1 != "" && cathetus2 != "") {
        const result  = new Mathematics().pythagoreanTheorem(
            hypothenuse,
            cathetus1,
            cathetus2
        );
        
        utils.showResult(
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
    utils.createBreadcrumb(
        'breadcrumb', 
        ['Hub', 'Mathématiques', 'Pythagore'],
        ['../../index.html', '', 'pythagorean.html'],
    );
}); // document.ready


