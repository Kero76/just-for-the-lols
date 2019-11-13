class Footer {
    constructor() {
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