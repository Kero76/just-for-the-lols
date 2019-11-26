// const render = new Render();
const utils = new Utils();

/**
 * Internal function use to hydrate and render the reverse template.
 */
function _hydrateAndRenderBodyTemplate() {
    const converters = new Converters();
    const template = new Template(
        converters.templateName, 
        converters.parentBlock,
        converters.data, 
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
        ['Hub', 'Physiques', 'Convertisseurs'], 
        ['../../../index.html', '', 'converters.html'],
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
 * Convert the unit into another unit.
 * 
 * @param {string} valueId 
 *  Id of the field who contains the value at convert.
 * @param {string} initialUnitId 
 *  Id of the initial unit at convert into another unit.
 * @param {string} targetUnitId 
 *  Id of the target unit.
 * @param {string} valueConvertedId 
 *  Id of the field who contains the value converted.
 * 
 * @since 1.0
 */
function _convertUnit(valueId, initialUnitId, targetUnitId, valueConvertedId) {
    const value = parseFloat(utils.getHtmlNodeByIdName(valueId).val());
    const initialUnit = parseFloat(utils.getHtmlNodeByIdName(initialUnitId).val());
    const targetUnit = parseFloat(utils.getHtmlNodeByIdName(targetUnitId).val());

    if (value != "" && initialUnit != "" && targetUnit != "") {
        const valueConverted  = new Physics().convert(
            value,
            initialUnit,
            targetUnit
        );
        
        utils.getHtmlNodeByIdName(valueConvertedId).val(valueConverted);
    }
}

/**
 * Function call after the page loading.
 * 
 * @since 1.0
 */
$(document).ready(function() {
    _hydrateAndRenderBodyTemplate();
    _hydrateAndRenderExternalTemplates();
    
    $("#liter-convert").on("click", function() {
        _convertUnit(
            'liter-value-at-convert',
            'liter-unit-at-convert', 
            'liter-unit-converted', 
            'liter-value-converted'
        );
    }); // #liter-convert.on
    
    $("#distance-convert").on("click", function() {
        _convertUnit(
            'distance-value-at-convert',
            'distance-unit-at-convert', 
            'distance-unit-converted', 
            'distance-value-converted'
        );
    }); // #distance-convert.on
    
    $("#weight-convert").on("click", function() {
        _convertUnit(
            'weight-value-at-convert',
            'weight-unit-at-convert', 
            'weight-unit-converted', 
            'weight-value-converted'
        );
    }); // #weight-convert.on
}); // document.ready