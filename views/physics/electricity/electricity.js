const render = new Render();
const utils = new Utils();

/**
 * Internal function use to hydrate and render the reverse template.
 */
function _hydrateAndRenderBodyTemplate() {
    const electricity = new Electricity();

    render.renderTemplate('body-template', electricity.data, 'body-content');
};

/**
 * Function use to render all externals templates.
 */
function _hydrateAndRenderExternalTemplates() {
    const header = new Header();
    const footer = new Footer();
    const breadcrumb = new BreadCrumb(
        ['Hub', 'Physiques', 'Electricité'], 
        ['../../../index.html', '', 'electricity.html'],
        ['before-icon-hub', 'before-icon-physics', '']
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