class b_form {
    constructor(sSelector) {
        this.form = $(sSelector);
        this.createEvents();
    }

    getLanguage() {
        let oLanguages = settings.get('langs'),
        sLanguages = '';

        $.each(oLanguages, (sLanguageCode, sLanguageName)=> {
            let sDelimeter = sLanguages ? '\n' : '';
            sLanguages += sDelimeter + sLanguageCode + '   ' + sLanguageName;
        });

        return sLanguages;
    }


    label(sSelector) {
        return this.form.find(sSelector).html();
    }

    val(sSelector) {
        let
        jqField = this.form.find(sSelector),
        sFieldType = jqField.attr('type'),
        sFieldTagName = jqField.prop('tagName');
        if (sFieldType == 'radio') { // 1. переключатели (атрибут type=radio)
            return jqField.filter(':checked').val();
        } else if (sFieldTagName == 'SELECT') { // 2. выпадающие списки (тег SELECT)
            return jqField.children('option').filter(':selected').html();
        } else if (sFieldType == 'checkbox') { // 3. флажки (атрибут type=checkbox)
            let sCheckboxes = '';

            jqField.filter(':checked').each((i, oCheckbox) => {
                let
                jqCheckbox = $(oCheckbox),
                sDelimiter = sCheckboxes ? ', ' : ''
                    //sDelimiter = sCheckboxes != '' ? ', ' : ''
                    ;

                    sCheckboxes += `${sDelimiter}${jqCheckbox.val()}`;
                });

            return sCheckboxes;
        } else { // 4. текстовое поле
            return jqField.val();
        }
    }

    showInfo(event) {
        // let jqOKButton = $(event.currentTarget);		// не используется в данном случае




        alert(
            settings.get('b-form__yourform') + 
            `\n${this.label('.b-form__label_name')}: ` + this.val('.b-form__name') +
            `\n${this.label('.b-form__label_surname')}: ` + this.val('.b-form__surname') +
            `\n${this.label('.b-form__label_season')}: ` + this.val('.b-form__season') +
            `\n${this.label('.b-form__label_review')}: ` + this.val('.b-form__review') +
            `\n${this.label('.b-form__label_fruit')}: ` + this.val('.b-form__fruit') +
            `\n${this.label('.b-form__label_animals')}: ` + this.val('.b-form__animals')+
            `\nЯзыки:\n`+this.getLanguage()
            );
    }

    createEvents() {
        this.form.find('.b-form__ok-button').click(this.showInfo.bind(this));
    }
}