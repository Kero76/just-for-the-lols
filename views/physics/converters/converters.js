const render = new Render();

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
        ['../../../index.html', '', 'converters.html']
    );
    
    render.renderTemplate('breadcrumb-template', breadcrumb.data, 'breadcrumb-content');
}

/**
 * Function call after the page loading.
 * 
 * @see Utils.createBreadcrumb
 */
$(document).ready(function() {
    _hydrateAndRenderBodyTemplate();
    _hydrateAndRenderBreadcrumbTemplate();
    
    /**
     * Get the value at convert, his default unit and the target unit,
     * then convert eh result and display it on the second input flag as readonly.
     */
    $("#convert").on("click", function() {
        const value = parseFloat($("#value-at-convert").val());
        const initialUnit = $("#unit-at-convert").val();
        const targetUnit = $("#unit-converted").val();

        if (value != "" && initialUnit != "" && targetUnit != "") {
            const valueConverted  = new Physics().convert(
                value,
                initialUnit,
                targetUnit
            );
            
            $('#value-converted').val(valueConverted);
        }
    }); // #theorem_execution.on
}); // document.ready