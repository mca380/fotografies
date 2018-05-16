$(document).ready(function(){//cerca de fotografies a FLICKR
        $("#formulari").submit(function(evento){
            $(".resultat").remove();
            var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
            var etiqueta = $("#etiquetes").val();
            var incloure = $("#incloure").val();
            var etiquetes = etiqueta.replace(" ");
            $.getJSON( 
            flickrAPI, {
                tags:etiquetes,
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