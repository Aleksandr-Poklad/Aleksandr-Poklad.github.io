class b_menu {
    //1 - сукция данных
    constructor(sSelector) {
            this.menu = $(sSelector);
            this.createEvents();
        }
        //2 - секция логики
    toggleSubmenu(event) {
            let jqMenuItem = $(event.currentTarget);
            jqMenuItem.children('.b-submenu').slideToggle();
        }
        //3 - секция событий
    createEvents() {
        this.menu.find('.b-menu__item').click(this.toggleSubmenu.bind(this));
    }
}