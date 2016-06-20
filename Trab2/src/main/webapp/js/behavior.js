/* 
 * Este codigo faz parte do primeiro trabalho desenvolvido para o curso
 * EEL 418 - Programacao Avanacada, ministrado no primeiro semestre
 * de 2016 pelo professor Jorge Lopes de Souza Leao
 * Autor: Leonardo dos Santos Teixeira de Souza
 * DRE: 112086681
 */

serverURL = "http://127.0.0.1:8084/Trab2";

function menuBehavior(option){
    cleanTextFields('all');
    showSearchResult(false);
    switch (option){
        case "entrar":
            // menu options handling
            document.getElementById('menuEntrar').style.display='none';
            document.getElementById('menuSair').style.display='block';
            document.getElementById('menuCatalogacao').style.display='block';
            document.getElementById('menuBusca').style.display='none';
            
            // page content handling
            document.getElementById('idDivLogin').style.display='none';
            document.getElementById('idDivBusca').style.display='block';
            document.getElementById('idDivCatalogacao').style.display='none';
            
            break;
        case "catalogacao":
            // menu options handling
            document.getElementById('menuCatalogacao').style.display='none';
            document.getElementById('menuBusca').style.display='block';
            
            // page content handling
            document.getElementById('idDivLogin').style.display='none';
            document.getElementById('idDivBusca').style.display='none';
            document.getElementById('idDivCatalogacao').style.display='block';
            break;
        
        case "sair":
            // menu options handling
            document.getElementById('menuEntrar').style.display='block';
            document.getElementById('menuSair').style.display='none';
            document.getElementById('menuCatalogacao').style.display='none';
            document.getElementById('menuBusca').style.display='none';
            
            // page content handling
            document.getElementById('idDivLogin').style.display='block';
            document.getElementById('idDivBusca').style.display='none';
            document.getElementById('idDivCatalogacao').style.display='none';
            break;
            
        case "busca":
            // menu options handling
            document.getElementById('menuCatalogacao').style.display='block';
            document.getElementById('menuBusca').style.display='none';
            
            // page content handling
            document.getElementById('idDivLogin').style.display='none';
            document.getElementById('idDivBusca').style.display='block';
            document.getElementById('idDivCatalogacao').style.display='none';
            break;
            
        default:
            alert("ERRO");
            break;
    }
}

function cleanTextFields(option){
    switch(option){
        
        case 'all':
            cleanTextFields('login');
            cleanTextFields('busca');
            cleanTextFields('catalogacao');
            break;
            
        case 'login':
            document.getElementById('idUsuario').value = '';
            document.getElementById('idSenha').value = '';
            break;
            
        case 'busca':
            //patrionio
            document.getElementById('idpatrimonio2').value = '';
            document.getElementById('idcheckpatrimonio').checked = false;

            // titulo
            document.getElementById('idtitulo2').value = '';
            document.getElementById('idchecktituloOU').checked = false;
            document.getElementById('idchecktituloE').checked = false;

            // autoria
            document.getElementById('idautoria2').value = '';
            document.getElementById('idcheckautoriaOU').checked = false;
            document.getElementById('idcheckautoriaE').checked = false;

            // veiculo
            document.getElementById('idveiculo2').value = '';
            document.getElementById('idcheckveiculoOU').checked = false;
            document.getElementById('idcheckveiculoE').checked = false;

            // data da publicacao
            document.getElementById('iddatapublicacao21').value = '';
            document.getElementById('iddatapublicacao22').value = '';
            document.getElementById('idcheckdatapublicacaoOU').checked = false;
            document.getElementById('idcheckdatapublicacaoE').checked = false;

            // Palavras Chave
            document.getElementById('idpalchave2').value = '';
            document.getElementById('idcheckpalchaveOU').checked = false;
            document.getElementById('idcheckpalchaveE').checked = false;
            break;
            
        case 'catalogacao':
            document.getElementById('idpatrimonio3').value = '';
            document.getElementById('idtitulo3').value = '';
            document.getElementById('idautoria3').value = '';
            document.getElementById('idveiculo3').value = '';
            document.getElementById('iddatapublicacao3').value = '';
            document.getElementById('idpalchave3').value = '';
            break;
         
        default:
            alert('Erro de parametro em cleanTextFields')
            
            
    }
}

function showSearchResult(show){
    var displayType = 'none';
    if (show === 'true'){
        displayType = 'block';
    }
    document.getElementById('idDivResultados').style.display = displayType;
}

function sendSearchRequest(){
    var request;
    if (window.XMLHttpRequest){
        request = new XMLHttpRequest();
    } else {
        // compatibility with IE5 & IE6
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    request.onreadystatechange = function() {
        if (request.readyState == 4){
            if(request.status == 200) {
                document.getElementById("idTabelaResultados").innerHTML = request.responseText;
            }else{
                alert("Server not found");
            }
        }
    };
    
    request.open('POST', serverURL, true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send();
}