const utils = new Utils();
const mathematics = new Mathematics();

/**
 * Internal function use to hydrate and render the reverse template.
 */
function _hydrateAndRenderBodyTemplate() {
    const pythagorean = new Pythagorean();
    const template = new Template(
        pythagorean.templateName, 
        pythagorean.parentBlock,
        pythagorean.data, 
    );

    const render = new RenderLocalTemplate();
    render.render(template);
};

/**
 * Function use to render all externals templates.
 */
function _hydrateAndRenderExternalTemplates() {
    const header = new Header(
        './../../../templates/includes/header.jsr'
    );
    const footer = new Footer(
        './../../../templates/includes/footer.jsr'
    );
    const breadcrumb = new BreadCrumb(
        ['Hub', 'Mathématiques', 'Pythagore'], 
        ['../../../index.html', '', 'pythagore.html'],
        ['before-icon-hub', 'before-icon-mathematics', ''],
        './../../../templates/includes/breadcrumb.jsr',
    );

    const headerTemplate = new Template(
        header.templateName,
        header.parentBlock,
        header.data
    );

    const footerTemplate = new Template(
        footer.templateName,
        footer.parentBlock,
        footer.data
    );

    const breadcrumbTemplate = new Template(
        breadcrumb.templateName,
        breadcrumb.parentBlock,
        breadcrumb.data
    );

    const render = new RenderExternalTemplate();
    render.render(headerTemplate);
    render.render(footerTemplate);
    render.render(breadcrumbTemplate);
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


