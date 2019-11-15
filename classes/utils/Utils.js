/**
 * Utils class.
 */
class Utils {

    /**
     * Empty constructor
     */
    constructor() {

    }
    
    /**
     *  
     * @param {string} resultId 
     *  The result div identifier.
     * @param {boolean} conclusionPredicate 
     *  The predicate to display the succes or the failed message.
     * @param {Array} messages 
     *  An array of messages. 
     *  The first index of the array contains the success message and the second index indicate the failed message.
     * @param {Array} alertClasses 
     *  An array who contains the bootstrap classes used in alert to change the background color.
     *  This array can take the following element : 
     *  - primary
     *  - secondary
     *  - success
     *  - danger
     *  - warning
     *  - info
     *  - light
     *  - dark
     * The first element of the array contains the class in case of success and the second index indicate the failed class.
     */
    showResult(resultId, conclusionPredicate, messages, alertClasses) {
        const alertClass = (conclusionPredicate) ? alertClasses[0] : alertClasses[1];
        const message = (conclusionPredicate) ? messages[0] : messages[1];

        const conclusion = (conclusionPredicate) 
            ? `<div class="alert alert-${alertClass}">` +
                `<i class="fa fa-check-circle-o" aria-hidden="true"></i>&nbsp;${message}` +
                `</div>`
            : `<div class="alert alert-danger">` + 
                `<i class="fa fa-exclamation-circle" aria-hidden="true"></i>&nbsp;${message}` +
                `</div>`;

        // Remove last result after X result displayed.
        const $resultDiv = $(`#${resultId}`);
        if ($resultDiv.children().length === Constant.NB_RESULTS_DISPLAY) {
            $resultDiv.children()[0].remove();
        }

        $resultDiv.append(conclusion);
    }

    /**
     * Create a breadcrumb to move on website more easily. 
     * 
     * @param {string} $breadcrumbDiv 
     *  The identifier of the block who contains the breadcrumb.
     * @param {Array} path 
     *  An array of string who contains the path to show in breadcrumb.
     * @param {Array} urls
     *  Local urls found on link present on each element of the breadcrumb.
     */
    createBreadcrumb($breadcrumbDivId, path, urls) {
        let breadcrumb = '';
        breadcrumb += '<nav aria-label="breadcrumb">';
        breadcrumb += '<ol class="breadcrumb">';

        let index = 0;
        let activeClass = '';
        let ariaCurrentPage = '';
        let link = '';
        for (let i = 0; i < path.length; ++i) {
            if (index === (path.length - 1)) {
                activeClass = 'active';
                ariaCurrentPage = 'aria-current="page"';
                link = path[i];
            } else {
                link = `<a href="${urls[i]}">${path[i]}</a>`
            }

            breadcrumb += `<li class="breadcrumb-item ${activeClass}" ${ariaCurrentPage}>` + link + `</li>`;
            index++;
        }

        breadcrumb += '</ol>';
        breadcrumb += '</nav>';
        
        const $breadcrumbDiv = $(`#${$breadcrumbDivId}`);
        $breadcrumbDiv.append(breadcrumb);
    }

    /**
     * Get the html element by his id.
     * 
     * @param {string} idName 
     *  Identifier of the html element.
     * @returns
     *  The node element.
     */
    getHtmlNodeByIdName(idName) {
        return this._getHtmlNodeByType('#', idName);
    }

    /**
     * Get the html element by their class names.
     * 
     * @param {string} className 
     *  Class name of the html element.
     * @returns 
     *  The node element.
     */
    getHtmlNodeByClassName(className) {
        return this._getHtmlNodeByType('.', className);
    }

    /**
     * Get the html element by his type and his identifier.
     *  
     * @param {char} type 
     *  Type of the html node like '.' for class or '#' for id.
     * @param {string} identifier 
     *  Identifier name of the element html required.
     * @returns
     *  The node element.
     */
    _getHtmlNodeByType(type, identifier) {
        return (identifier.charAt(0) === type) 
            ? $(identifier)
            : $(`#${identifier}`);
    }
}
