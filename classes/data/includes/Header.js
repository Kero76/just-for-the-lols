/**
 * @author Nicolas GILLE <nic.gille@gmail.com>
 * @since 1.0
 * @version 1.0
 * @license MIT
 */
class Header {
    /**
     * Constructor of the Header object. 
     * 
     * @constructor
     * 
     * @param {string} templateName 
     *  Template path of the include template.
     * @param {string} parentBlock 
     *  Name of the HTML element where the header is inserted.
     * 
     * @since 1.0
     */
    constructor( templateName, parentBlock = "#header-content") {
        this.templateName = templateName;
        this.parentBlock = parentBlock;
        this.data = {
            "projectName": "Just 4 the Lols Project"
        };
    }
}