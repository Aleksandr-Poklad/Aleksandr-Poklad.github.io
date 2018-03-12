class b_menu {
    //1. Секция данных==========================================================
    constructor(sSelector) {
            this.menu = $(sSelector); //$() обеспечивает доступ к главному html элементу по css селектору
            this.currentItem = $('.noCurrentItem');
            this.createEvents();
        }
        //2. Секция логики==========================================================

    toggleSubmenu(event) {
            let jqMenuItem = $(event.currentTarget);

            if (jqMenuItem.children('.b-submenu').length) {
                this.currentItem.removeClass('b-menu__item_current').children('.b-submenu').stop().slideUp();
                jqMenuItem.toggleClass('b-menu__item_current').children('.b-submenu').stop().slideToggle();
                this.currentItem = jqMenuItem;
            }

        }
        //3. Секция событий=======================================
    createEvents() {
        this.menu.find('.b-menu__item').click(this.toggleSubmenu.bind(this))
    }
}