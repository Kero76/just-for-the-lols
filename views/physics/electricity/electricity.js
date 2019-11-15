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
    
    $("#compute-result").on("click", function() {
        const voltage = parseFloat(
            $(utils.getHtmlNodeByIdName('voltage-value')).val()
        );
        const intensity = parseFloat(
            $(utils.getHtmlNodeByIdName('intensity-value')).val()
        );
        const power = parseFloat(
            $(utils.getHtmlNodeByIdName('power-value')).val()
        );
        const resistance = parseFloat(
            $(utils.getHtmlNodeByIdName('resistance-value')).val()
        );

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
        }
    }); // #compute-result.on    
}); // document.ready