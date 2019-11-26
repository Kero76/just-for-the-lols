/**
 * @author Nicolas GILLE <nic.gille@gmail.com>
 * @since 1.0
 * @version 1.0
 * @license MIT
 */
class BreadCrumb {
    /**
     * Constructor of the BreadCrumb class.
     * 
     * @constructor
     * 
     * @param {Array} labels 
     *  Contains all labels show in breadcrumb.
     * @param {Array} urls 
     *  Contais all url to redirect user of right place.
     * @param {Array} beforeClasses 
     *  Contains all icons show before the label.
     * @param {string} templateName
     *  The complete path of the breadcrumb template.
     * @param {string} parentBlock
     *  The identifier of the HTML element where inserted the template.
     * 
     * @since 1.0
     */
    constructor(labels, urls, beforeClasses, templateName, parentBlock = "#breadcrumb-content") {
        let _items = [];
        for(let i = 0; i < labels.length; ++i) {
            _items.push(
                {
                    "label": labels[i],
                    "url": urls[i],
                    "isActive": (i === labels.length - 1),
                    "iconClass": beforeClasses[i]
                }
            );
        }

        // Data used in template.
        this.templateName = templateName;
        this.parentBlock = parentBlock;
        this.data = {
            "items": _items,
            "size": _items.length
        }
    }
}