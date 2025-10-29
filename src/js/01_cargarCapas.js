export function cargarCapas(map) {
  const estilos = getComputedStyle(document.documentElement);

  map.on('load', () => {
    // === Capa de estados ===
    map.addSource('estados_source', {
      type: 'geojson',
      data: './src/assets/data/entidades_estatales.geojson'
    });

    map.addLayer({
      id: 'estados_layer',
      type: 'fill',
      source: 'estados_source',
      paint: {
        'fill-color':'rgba(0, 0, 0, 0)' ,
        'fill-opacity': 1,
        'fill-outline-color': '#000000'
        }
    });
    // === Capa de proyectos ===
    map.addSource('infra_source', {
      type: 'geojson',
      data: './src/assets/data/infraestructura_cientifica.geojson'
    });

    map.addLayer({
      id: 'infra_layer',
      type: 'circle',
      source: 'infra_source',
      paint: {
        'circle-color': '#A3E4D7',
        'circle-radius': 2,
        'circle-stroke-width': 0.1,
        'circle-stroke-color': '#000000ff'
        }
    });











  })
}