package es.pixel.bingo.model.utils;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;

import es.pixel.bingo.model.entities.Carton;

public class ImpresoraHTML {

    public void imprimir(List<Carton> cartones, String carpeta) throws Exception {
        Path path = Paths.get("src\\main\\resources\\template.html");

        for (int i = 0; i < cartones.size(); i++) {
            int numCarton = i + 1;
            Path ruta = Paths.get(carpeta + "Carton-" + numCarton + ".html");
            List<String> lines = Files.readAllLines(path);
            String template = lines.stream().collect(Collectors.joining("\n"));
            String html = template
                            .replace("${numCarton}", String.valueOf(numCarton))
                            .replace("${carton}", cartones.get(i).toString());
            Files.write(ruta, html.getBytes());
        }
    }
    
}
