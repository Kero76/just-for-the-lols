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
     */
    renderTemplate(templateId, data, templateTargetId) {
        let tmpdId = this._addHashForIdentifier(templateId);
        const template = $.templates(tmpdId);
        const htmlOutput = template.render(data);
        
        let tmpdTargetId = this._addHashForIdentifier(templateTargetId);
        $(tmpdTargetId).html(htmlOutput);
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
            : `#${identifier}`
    }
}