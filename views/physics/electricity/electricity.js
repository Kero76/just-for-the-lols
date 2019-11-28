const utils = new Utils();

/**
 * Internal function use to hydrate and render the reverse template.
 */
function _hydrateAndRenderBodyTemplate() {
    const electricity = new Electricity();
    const template = new Template(
        electricity.templateName, 
        electricity.parentBlock,
        electricity.data, 
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
        ['Hub', 'Physiques', 'Electricité'], 
        ['../../../index.html', '', 'electricity.html'],
        ['before-icon-hub', 'before-icon-physics', ''],
        './../../../templates/includes/breadcrumb.jsr'
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

    // Get input node.
    const $voltageInput = $(utils.getHtmlNodeByIdName('voltage-value'));
    const $intensityInput = $(utils.getHtmlNodeByIdName('intensity-value'));
    const $powerInput = $(utils.getHtmlNodeByIdName('power-value'));
    const $resistanceInput = $(utils.getHtmlNodeByIdName('resistance-value'));

    $("#compute-result").on("click", function() {
        const voltage = parseFloat($voltageInput.val());
        const intensity = parseFloat($intensityInput.val());
        const power = parseFloat($powerInput.val());
        const resistance = parseFloat($resistanceInput.val());

        const isValidFields = [
            !isNaN(voltage),
            !isNaN(intensity),
            !isNaN(power),
            !isNaN(resistance)
        ];

        const filterFn = b => b;
        if (isValidFields.filter(filterFn).length < 2) {
            utils.showResult(
                'alert-result', 
                false, 
                ['', `Veuillez renseigner 2 des 4 champs présents.`], 
                ['', 'danger']
            );
        } else if (isValidFields.filter(filterFn).length >= 3) {
            utils.showResult(
                'alert-result', 
                false, 
                ['', `Veuillez renseigner uniquement 2 des 4 champs présents.`], 
                ['', 'danger']
            );
        } else {
            const result = new Physics().computeElectricity(
                voltage, intensity, power, resistance
            );

            // Fill the fields with the result compute.
            result.forEach(element => {
                if (element.name === 'voltage') {
                    $voltageInput.val(element.value);
                }
    
                if (element.name === 'intensity') {
                    $intensityInput.val(element.value);
                }
    
                if (element.name === 'power') {
                    $powerInput.val(element.value);
                }
    
                if (element.name === 'resistance') {
                    $resistanceInput.val(element.value);
                }
            }); // result.forEach
        }
    }); // #compute-result.on

    // Clear the content of all fields.
    $('#clear-result').on('click', function() {
        $voltageInput.val('');
        $intensityInput.val('');
        $powerInput.val('');
        $resistanceInput.val('');
    }); // #clear-result.on
}); // document.ready