$(document).ready(function(){//cerca de fotografies a FLICKR
        $("#formulari").submit(function(evento){
            $(".resultat").remove();
            var URLfli = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";//aquí afegim el paràmetre jsoncallback=?.
            var etiqueta = $("#etiquetes").val();
            var incloure = $("#incloure").val();
            var etiquetes = etiqueta.replace(" ", ",");//aquí feim la conversió: al paràmetre tags les etiquetes van separades per comes.
            $.getJSON( 
                URLfli, { //mitjançant el mètode getJSON es va la recerca a la URL que s'ha definit anteriorment com a variable agafant els paràmetres tag i tagmode. 
                tags:etiquetes,//utilitzam el paràmetre amb la conversió.
                tagmode:incloure,
                format:"json"
            },
            function(data) {//Mostra les fotogragies a la taula. Cada fotorafia a una fila de la taula. 
                $.each( data.items, function(i, item) {
                    var filaNova =$("<tr class='resultat'><td>Títol: "+item.title+"<br><br>"+"Autor: "+item.author+"</td><td>Enllaç: "+item.link
                        +"<br><br>"+"Etiquetes: "+item.tags+"</td><td>Data: "+item.published+"<br><br><img src='"+item.media.m+"'></td></tr>");
                            filaNova.appendTo("#cosTaula");
                        });
                    }
                    );
                    return false;
                });
                
            });