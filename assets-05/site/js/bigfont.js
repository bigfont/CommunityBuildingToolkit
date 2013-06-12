(function ($) {

    "use strict";
    /*global $, jQuery, window*/

    function createNavigationListItem(section) {
        var li, a, i, title, target;

        // add the section title
        target = '#' + $(section).attr('id');
        title = $(section)
            .find('header')
            .first()
            .find('span')
            .remove()
            .end()
            .text();

        li = $('<li/>');
        a = $('<a/>', {
            text: title,
            href: target
        });
        i = $('<i/>', {
            'class': 'icon-chevron-right'
        });

        li.append(a);
        a.prepend(i);

        return li;
    }

    function populateSubNavigation() {
        var
    ulSections, ulSubsections,
    sections, subSections,
    liSection, liSubsection;

        // add the sections
        ulSections = $('#sub-nav > .nav-list');
        sections = $('article > section');

        $.each(sections, function (i, section) {

            liSection = createNavigationListItem(section);
            ulSections.append(liSection);

            // add the subsections to the section
            ulSubsections = $('<ul/>', {
                'class':'nav nav-list'
            });
            subSections = $(section).find('> section');

            $.each(subSections, function (i, subSection) {

                liSubsection = createNavigationListItem(subSection);
                ulSubsections.append(liSubsection);
                liSection.append(ulSubsections);

            });

        });
    }


    $(function () {

        populateSubNavigation();

    });
}(window.jQuery));