
/**
 * Function call after the page loading.
 */
$(document).ready(function() {
    let subjectsId = [
        'mathematical',
    ];

    /**
     * Loop on each subjects and for each subject, 
     * we compute the number of elements and change the value found in the badge.
     */
    subjectsId.forEach(function(subject) {
        const subjectSelector = '#subjects-' + subject;
        const nbChildren = $(subjectSelector).children('li').length;

        const badgeSelector = `#badge-${subject}`;
        const $badge = $(badgeSelector);
        $badge.text(nbChildren);
    }); // subjectsId.forEach
}); // document.ready