class Render {
    constructor() {

    }

    /**
     * Render a template.
     * 
     * @param {string} templateId 
     *  Template identifier.
     * @param {JSON} data
     *  Json object who contains the data used to hydrate the template.
     * @param {string} templateTargetId
     *  The HTML element identtifier who contains the template.
     * 
     * @see _addHashForIdentifier
     */
    renderTemplate(templateId, data, templateTargetId) {
        const tmpdId = this._addHashForIdentifier(templateId);
        const template = $.templates(tmpdId);
        const htmlOutput = template.render(data);
        const tmplTargetId = this._addHashForIdentifier(templateTargetId);

        $(tmplTargetId).html(htmlOutput);
    }

    /**
     * Render all externals templates.
     * 
     * @param {Array} templatesPaths 
     *  All paths for each template to render.
     * @param {Array} data 
     *  The data present on each template.
     * @param {Array} templateTargetIds 
     *  All html parent node of each external template to render.
     * 
     * @see _renderExternalTemplate
     */
    renderExternalTemplates(templatesPaths, data, templateTargetIds) {
        for (let i = 0; i < templatesPaths.length; ++i) {
            const _filePath = templatesPaths[i];
            const _data = data[i];
            const _target = templateTargetIds[i];

            Render.prototype._renderExternalTemplate(_filePath, _data, _target);
        }
    }

    /// Private Functions ///
    /**
     * Add a '#' for get an Jquery identifier.
     * 
     * @param {string} identifier 
     *  The identiier.
     * @returns
     *  '#' concate with the identifier (only if necessary).
     */
    _addHashForIdentifier(identifier) {
        return (identifier.charAt(0) === '#')
            ? identifier
            : `#${identifier}`;
    }

    /**
     * Private function use to render an external template.
     * 
     * @param {String} templatePath 
     *  Relative path of the template to load.
     * @param {String} data 
     *  The data found in template.
     * @param {String} templateTargetId 
     *  The html node parent of the template.
     */
    _renderExternalTemplate(templatePath, data, templateTargetId) {
        const tmplTargetId = this._addHashForIdentifier(templateTargetId);

        $.when(
            $.get(templatePath)
        ).done(function(tmplData) {
            $.templates({ tmpl: tmplData });
            $(tmplTargetId).html($.render.tmpl(data));
        });
    }
}