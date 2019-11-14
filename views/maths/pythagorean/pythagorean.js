const utils = new Utils();
const render = new Render();
const mathematics = new Mathematics();

/**
 * Internal function use to hydrate and render the reverse template.
 */
function _hydrateAndRenderBodyTemplate() {
    const pythagorean = new Pythagorean();

    render.renderTemplate('body-template', pythagorean.data, 'body-content');
};

/**
 * Function use to render all externals templates.
 */
function _hydrateAndRenderExternalTemplates() {
    const header = new Header();
    const footer = new Footer();
    const breadcrumb = new BreadCrumb(
        ['Hub', 'Mathématiques', 'Pythagore'], 
        ['../../../index.html', '', 'gcd.html'],
        ['before-icon-hub', 'before-icon-mathematics', '']
    );

    const externalTemplatesPath = [
        './../../../templates/includes/header.jsr',
        './../../../templates/includes/breadcrumb.jsr',
        './../../../templates/includes/footer.jsr',
    ];

    const externalTemplatesData = [
        header.data, 
        breadcrumb.data,
        footer.data
    ];

    const externalTemplatesTargetIds = [
        'header-content',
        'breadcrumb-content',
        'footer-content'
    ]

    // Render the external templates.
    render.renderExternalTemplates(
        externalTemplatesPath, 
        externalTemplatesData, 
        externalTemplatesTargetIds
    );
}

/**
 * Function call after the page loading.
 * 
 * @see Utils.createBreadcrumb
 */
$(document).ready(function() {
    _hydrateAndRenderBodyTemplate();
    _hydrateAndRenderExternalTemplates();
    
    /**
     * Get the content of all fields, then execute the Pythagorean theorem.
     */
    $("#theorem-execution").on("click", function() {
        const hypothenuse = parseFloat($("#hypothenuse").val());
        const cathetus1 = parseFloat($("#cathetus1").val());
        const cathetus2 = parseFloat($("#cathetus2").val());

        const isHypothenuseInvalid = (hypothenuse !== "" && isNaN(hypothenuse));
        const isCathetus1Invalid = (cathetus1 !== "" && isNaN(cathetus1));
        const isCathetus2Invalid = (cathetus2 !== "" && isNaN(cathetus2));

        if (hypothenuse < cathetus1 || hypothenuse < cathetus2) {
            // Invalid input.
            utils.showResult(
                'alert-result', 
                false, 
                ['', `L'hypothènuse doit toujours être la valeur la plus grande.`], 
                ['', 'danger']
            );
        } else if (isHypothenuseInvalid && isCathetus1Invalid && isCathetus2Invalid) {
            // Invalid input.
            utils.showResult(
                'alert-result', 
                false, 
                ['', `Veuillez renseigner au moins 2 des 3 champs présents.`], 
                ['', 'danger']
            );
        } else if (!isCathetus1Invalid && !isCathetus2Invalid && !isHypothenuseInvalid) {
            // Execution of the pythagorean theorem.
            const result  = mathematics.pythagoreanTheorem(
                hypothenuse,
                cathetus1,
                cathetus2
            );
            
            utils.showResult(
                'alert-result', 
                result, 
                [`Le triangle est rectangle en C.`, `Le triangle n'est pas rectangle en C.`], 
                ['success', 'danger']
            );
        } else  {
            // Converse of the theorem
            // Hypothenuse is compute.
            if (!isCathetus1Invalid && !isCathetus2Invalid && isHypothenuseInvalid) {
                const result = mathematics.pythagoreanTheoremConverse(
                    hypothenuse, 
                    cathetus1, 
                    cathetus2
                );

                utils.showResult(
                    'alert-result', 
                    true, 
                    [`La longueur de l'hypothènuse est de : ${result}`], 
                    ['success']
                );
            } 

            // Second cathetus is compute.
            if (!isCathetus1Invalid && isCathetus2Invalid && !isHypothenuseInvalid) {
                const result = mathematics.pythagoreanTheoremConverse(
                    hypothenuse, 
                    cathetus1, 
                    cathetus2
                );

                utils.showResult(
                    'alert-result', 
                    true, 
                    [`La longueur du côté manquant est de : ${result}`], 
                    ['success']
                );
            }

            // First cathetus is compute.
            if (isCathetus1Invalid && !isCathetus2Invalid && !isHypothenuseInvalid) {
                const result = mathematics.pythagoreanTheoremConverse(
                    hypothenuse, 
                    cathetus1, 
                    cathetus2
                );

                utils.showResult(
                    'alert-result', 
                    true, 
                    [`La longueur du côté manquant est de : ${result}`], 
                    ['success']
                );
            }
        }
    }); // #theorem_execution.on
}); // document.ready


