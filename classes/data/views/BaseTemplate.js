/**
 * @author Nicolas GILLE <nic.gille@gmail.com>
 * @since 1.0
 * @version 1.0
 * @license MIT
 */
class BaseTemplate {
    /**
     * Constructor of the Converters class.
     * 
     * @constructor
     * 
     * @param {string} templateName
     *  The complete path of the breadcrumb template.
     * @param {string} parentBlock
     *  The identifier of the HTML element where inserted the template.
     * 
     * @since 1.0
     */
    constructor(templateName = '#body-template', parentBlock = '#body-content') {
        this.templateName = templateName;
        this.parentBlock = parentBlock;
    }
}