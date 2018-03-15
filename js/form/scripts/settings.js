//Статический класс (пример статического обьекта - это Math())
class settings {
	//this не используется в статических классах и отдельных методах


	//инициализация
	static init(oSettingsData){ 
		settings.data = oSettingsData;
	}
	static get(sSettingName){ 
		return settings.data[sSettingName];
	}

}

settings.data = null; //свойство класса settings


