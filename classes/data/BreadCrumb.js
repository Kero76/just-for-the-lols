class BreadCrumb {
    constructor(labels, urls) {
        let _items = [];
        for(let i = 0; i < labels.length; ++i) {
            _items.push(
                {
                    "label": labels[i],
                    "url": urls[i],
                    "isActive": (i === labels.length - 1 )
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