if (estadoSeleccionado !== "all") {
          fetch("./src/assets/data/entidades_estatales.geojson")
            .then((r) => r.json())
            .then((entidades) => {
              const entidad = entidades.features.find(
                (f) => f.properties.NOMGEO === estadoSeleccionado
              );

              if (entidad) {
                const bounds = new maplibregl.LngLatBounds();

                // Soporte para polígonos y multipolígonos
                if (entidad.geometry.type === "Polygon") {
                  entidad.geometry.coordinates[0].forEach((c) => bounds.extend(c));
                } else if (entidad.geometry.type === "MultiPolygon") {
                  entidad.geometry.coordinates
                    .flat(2)
                    .forEach((c) => bounds.extend(c));
                }

                // Aplicar zoom al extent
                map.fitBounds(bounds, {
                  padding: 60,
                  duration: 1000,
                });
              }
            });
        }