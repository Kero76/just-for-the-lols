const utils = new Utils();
const mathematics = new Mathematics();

/**
 * Internal function use to hydrate and render the reverse template.
 */
function _hydrateAndRenderBodyTemplate() {
    const thales = new Thales();
    const template = new Template(
        thales.templateName, 
        thales.parentBlock,
        thales.data, 
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
        ['Hub', 'Mathématiques', 'Thalès'], 
        ['../../../index.html', '', 'thales.html'],
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
        // Inputs element.
        const inputs = {
            ad: $('#ad'),
            ab: $('#ab'),
            ae: $('#ae'),
            ac: $('#ac'),
            de: $('#de'),
            bc: $('#bc')
        };

        // Value of inputs.
        const inputsValues = {
            ad: parseFloat(inputs.ad.val()),
            ab: parseFloat(inputs.ab.val()),
            ae: parseFloat(inputs.ae.val()),
            ac: parseFloat(inputs.ac.val()),
            de: parseFloat(inputs.de.val()),
            bc: parseFloat(inputs.bc.val())
        };

        // Check if input values are a number or not.
        const inputsIsValid = new Map();
        inputsIsValid.set(ad, !isNaN(inputsValues.ad));
        inputsIsValid.set(ab, !isNaN(inputsValues.ab));
        inputsIsValid.set(ae, !isNaN(inputsValues.ae));
        inputsIsValid.set(ac, !isNaN(inputsValues.ac));
        inputsIsValid.set(de, !isNaN(inputsValues.de));
        inputsIsValid.set(bc, !isNaN(inputsValues.bc));

        const filterFn = b => b;
        if (Array.from(inputsIsValid.values()).filter(filterFn).length === 4) {
            const res = mathematics.interceptTheorem(
                inputsValues.ad, 
                inputsValues.ab, 
                inputsValues.ae, 
                inputsValues.ac, 
                inputsValues.de, 
                inputsValues.bc
            );

            // Loop on each input fields and check is invalid, 
            // then fill it with the value compute and change the background color.
            for (let [key,value] of inputsIsValid) {
                if (!value) {
                    $(key).val(res[key.id]);
                    $(key).addClass('computed-response');
                }
            }
        } else if (Array.from(inputsIsValid.values()).filter(filterFn).length === 6) {
            // Execute converse of the theorem
        } else {
            utils.showResult(
                'alert-result', 
                false, 
                ['', `Veuillez renseigner 4 des 6 champs présents pour exécuter le théorème de Thalès et les 6 champs pour exécuter la réciproque.`], 
                ['', 'danger']
            );
        }
    }); // #theorem_execution.on

    // Clean fields on button click.
    $('#clean-fields').on('click', function() {
        const inputs = [
            $('#ad'),
            $('#ab'),
            $('#ae'),
            $('#ac'),
            $('#de'),
            $('#bc')
        ];

        for (let i = 0; i < inputs.length; ++i) {
            let $node = inputs[i];
            $($node).val('');
            $($node).removeClass('computed-response');
        }
    }); // #clean-fields.on
}); // document.ready


