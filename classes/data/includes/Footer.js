/**
 * @author Nicolas GILLE <nic.gille@gmail.com>
 * @since 1.0
 * @version 1.0
 * @license MIT
 */
class Footer {
    /**
     * Constructor of the Footer object. 
     * 
     * @constructor
     * 
     * @param {string} templateName 
     *  Template path of the include template.
     * @param {string} parentBlock 
     *  Name of the HTML element where the footer is inserted.
     * 
     * @since 1.0
     */
    constructor(templateName, parentBlock = "#footer-content") {
        const _socialLinks = [
            {
                "name": "Email",
                "link": "mailto:nic.gille@gmail.com",
                "icon": "envelope",
                "target": "_self"
            },
            {
                "name": "Github",
                "link": "https://github.com/Kero76",
                "icon": "github",
                "target": "_blank"
            },
            {
                "name": "Tweeter",
                "link": "https://twitter.com/NickGille",
                "icon": "twitter",
                "target": "_blank"
            }
        ];

        this.templateName = templateName;
        this.parentBlock = parentBlock;
        this.data = {
            "projectName": "Just 4 the Lols Project",
            "releaseYear": "2019",
            "currentYear": new Date().getFullYear(),
            "developer": {
                "name": "Nicolas GILLE",
                "nickname": "Kero76"
            },
            "socialLinks": _socialLinks
        }
    }
}