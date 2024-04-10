const $header = document.querySelector("#header"),
      $container = document.querySelector("#container");
var langSet = localStorage.getItem("lang");

setLang(langSet)
function setLang(language) {
    localStorage.removeItem("lang");// remueve 

    localStorage.setItem("lang", language); // establece el lenguaje recibido

    let langSet = localStorage.getItem("lang");
    console.log(langSet)
    
    if(langSet.indexOf('en') !== -1){
        writeTemplate("en");
        $container.innerHTML = langContent.en;
    }
    else if(langSet.indexOf('pt') !== -1){
        writeTemplate("pt");
        $container.innerHTML = langContent.pt;
    }
    else if(langSet.indexOf('es') !== -1){
        writeTemplate("es");
        $container.innerHTML = langContent.es;
    } 
	else {
        writeTemplate("en");
        $container.innerHTML = langContent.en;
	}
	
}
function writeTemplate(language) {
    fetch('./scripts/data.json')
    .then(response => response.json())
    .then(dataJson => {
            if(language.indexOf('es') !== -1) { let es = dataJson["es"]; $header.innerHTML = write(es) }
            else if(language.indexOf('pt') !== -1) { let pt = dataJson["pt"]; $header.innerHTML = write(pt) } // portugues aún no establecido
            else if(language.indexOf('en') !== -1) { let en = dataJson["en"]; $header.innerHTML = write(en)}
            else { let es = dataJson["es"]; $header.innerHTML = write(es) }
    })
    .catch(error => console.error('Error al cargar el archivo JSON: ', error));

}

function write(text) {
    let header = "";
    for(let i=0; i < text.length; i++) {
    header += `<a class=\"logo\" href=\"index.html\">&nbsp;</a> <input type=\"checkbox\" id=\"openMenu\" class=\"open-menu\"><nav id=\"nav\"> <a id=\"itemSolutions\" class=\"item-solutions with-sub\" for=\"itemSolutions${i}\">${text[i]['solutions']}&nbsp;&nbsp;</a><label class=\"item-solutions with-sub\" for=\"itemSolutions${i}\">${text[i]['solutions']}&nbsp;&nbsp;</label><input type=\"checkbox\" id=\"itemSolutions${i}\" class=\"open-menu int\"><div class=\"sub menu-solutions\">aaaaaaaaaaaa </div> <!--- --> <a class=\"item-tecnologies with-sub\" for=\"itemTecnologies${i}\">${text[i]['tecnologies']}&nbsp;&nbsp;</a><label class=\"item-tecnologies with-sub\" for=\"itemTecnologies${i}\">${text[i]['tecnologies']}&nbsp;&nbsp;</label><input type=\"checkbox\" id=\"itemTecnologies${i}\" class=\"open-menu int\"><div class=\"sub menu-tecnologies\"> <div class=\"group-items\"><a><span>${text[i]['papermaking_equip']}</span></a><!-- Inicio Bloque --> <div style=\"display: block;z-index:0;\"><!-- Item Interno --><a class=\"tecno\" href=\"tec\/runtech.html\"><h1>${text[i]['runtech']}<\/h1><span>${text[i]['papermachine_components']}</span><div class="image"> <img src=\"..\/img\/runtech.png\"></div></a> <!-- Fin Item Interno --> <!-- Item Interno --><a class=\"tecno\" href=\"tec\/qualifiber.html\"><h1>${text[i]['qualifiber']}<\/h1><span>${text[i]['stock_prep_complete']}</span><div class="image"> <img src=\"..\/img\/qualifiber.png\"></\div></a> <!-- Fin Item Interno --> <!-- Item Interno --><a class=\"tecno\" href=\"tec\/runtech.html\"><h1>${text[i]['runtech']}<\/h1><span>${text[i]['papermachine_components']}</span><div class="image"> <img src=\"..\/img\/runtech.png\"></div></a> <!-- Fin Item Interno --> </div><!-- Fin Bloque --></div><div class=\"group-items\"> <a><span>${text[i]['pm_auxilieres']}</span></a><div>Sub Item 2</div></div><div class=\"group-items\"> <a><span>${text[i]['paper_pm_chemicals']}</span></a> <a><span>${text[i]['paper_converting']}</span></a> <a><span>${text[i]['services_pm']}</span></a> <a><span>${text[i]['pm_specialized_engineering']}</span></a> </div> </div> </div><a id=\"itemAbout\" class=\"item-about\" href=\"#\">${text[i]['about_us']}</a><a href=\"#\"><span>${text[i]['contact']}</span></a><a href=\"#\"><span>${text[i]['blog']}</span></a>  </nav> <div class=\"lang-cont\"> <a class=\"openLangs\">&nbsp;</a> <div class=\"flags\"> <a class=\"flag en\" id=\"langEn\" onclick=\"setLang('en');\">&nbsp;</a> <a class=\"flag es\" id=\"langEs\" onclick=\"setLang('es');\">&nbsp;</a> <a class=\"flag pt\" id=\"langPt\" onclick=\"setLang('pt');\">&nbsp;</a> </div></div>`
    }
    return header;
}