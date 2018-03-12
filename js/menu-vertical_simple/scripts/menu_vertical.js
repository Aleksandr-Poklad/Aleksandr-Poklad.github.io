class b_menu {
    //1 - сукция данных
    constructor(sSelector) {
            this.menu = $(sSelector);
            this.createEvents();
        }
        //2 - секция логики
    showSubmenu(event) {
        let jqMenuItem = $(event.currentTarget);
        jqMenuItem.children('.b-submenu').addClass('b-submenu_shown');
    }
    hideSubmenu(event) {
            let jqMenuItem = $(event.currentTarget);
            jqMenuItem.children('.b-submenu').removeClass('b-submenu_shown');
        }
        //3 - секция событий
    createEvents() {
        this.menu.find('.b-menu__item').mouseover(this.showSubmenu.bind(this));
        this.menu.find('.b-menu__item').mouseout(this.hideSubmenu.bind(this));
    }
}