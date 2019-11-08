const Utils = {
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
        const $resultDiv = $(`#${resultId}`);
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
        if ($resultDiv.children().length === Constant.NB_RESULTS_DISPLAY) {
            $resultDiv.children()[0].remove();
        }

        $resultDiv.append(conclusion);
    },
}