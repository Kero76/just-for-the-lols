class BreadCrumb {
    /**
     * Constructor of the BreadCrumb class.
     * 
     * @param {Array} labels 
     *  Contains all labels show in breadcrumb.
     * @param {Array} urls 
     *  Contais all url to redirect user of right place.
     * @param {Array} beforeClasses 
     *  Contains all icons show before the label.
     */
    constructor(labels, urls, beforeClasses) {
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
        this.data = {
            "items": _items,
            "size": _items.length
        }
    }
}