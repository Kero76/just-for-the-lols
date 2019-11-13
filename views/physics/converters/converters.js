const render = new Render();
const utils = new Utils();

/**
 * Internal function use to hydrate and render the reverse template.
 */
function _hydrateAndRenderBodyTemplate() {
    const converters = new Converters();

    render.renderTemplate('body-template', converters.data, 'body-content');
};

/**
 * Internal function use to hydrate and render the breadcrumb.
 */
function _hydrateAndRenderBreadcrumbTemplate() {
    const breadcrumb = new BreadCrumb(
        ['Hub', 'Physiques', 'Convertisseurs'], 
        ['../../../index.html', '', 'converters.html'],
        ['before-icon-hub', 'before-icon-physics', '']
    );
    
    render.renderTemplate('breadcrumb-template', breadcrumb.data, 'breadcrumb-content');
}

/**
 * Internal function use to hydrate and render the header.
 */
function _hydrateAndRenderHeaderTemplate() {
    const header = new Header();

    render.renderTemplate('header-template', header.data, 'header-content');
}

/**
 * Internal function use to hydrate and render the footer.
 */
function _hydrateAndRenderFooterTemplate() {
    const footer = new Footer();
    
    render.renderTemplate('footer-template', footer.data, 'footer-content');
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
 * @see Utils.createBreadcrumb
 */
$(document).ready(function() {
    _hydrateAndRenderBodyTemplate();
    _hydrateAndRenderHeaderTemplate();
    _hydrateAndRenderBreadcrumbTemplate();
    _hydrateAndRenderFooterTemplate();
    
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