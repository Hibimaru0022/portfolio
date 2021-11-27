export default class Hover {
    constructor() {
        this.init();
    }
    init() {
        this.mouseOver();
    }

    mouseOver() {
        const thumbnail = document.querySelectorAll('.works__col__thumbnail');

        thumbnail.addEventListener('mouseenter', (e) => {
            let parentOffset = this.offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
        });
    }
}

$(function () {
    $('.btn-6')
        .on('mouseenter', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({ top: relY, left: relX });
        })
        .on('mouseout', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({ top: relY, left: relX });
        });
    $('[href=#]').click(function () {
        return false;
    });
});
