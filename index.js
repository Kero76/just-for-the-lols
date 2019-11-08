
/**
 * Function call after the page loading.
 */
$(document).ready(function() {
    _fillMainBadgeCategory();
    _fillBadgeCategories();
}); // document.ready

/**
 * Fill the content of the main badge of the title 'Category'.
 */
function _fillMainBadgeCategory() {
    const nbCategories = $('.container > article').length
    const $badge = $('#badge-categories');
    $badge.text(nbCategories);
}

/**
 * Fill the content of the badge for each categories found in app.
 */
function _fillBadgeCategories() {
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
}