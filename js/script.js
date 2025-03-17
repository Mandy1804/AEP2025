// Função que inicializa o mapa
function initMap() {
    var localizacao = { lat: -23.5505, lng: -46.6333 }; // Coordenadas (São Paulo)
    
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12, // Nível de zoom inicial
        center: localizacao, // Define o centro do mapa
    });

    new google.maps.Marker({
        position: localizacao, // Define a posição do marcador
        map: map, // Define em qual mapa o marcador será adicionado
        title: "Ponto de Coleta", // Texto que aparece ao passar o mouse
    });
}

// Formulário de agendamento
document.getElementById("coletaForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o recarregamento da página
    alert("Coleta agendada com sucesso!");
});