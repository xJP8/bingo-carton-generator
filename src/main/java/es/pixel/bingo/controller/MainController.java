package es.pixel.bingo.controller;

import java.util.ArrayList;
import java.util.List;

import es.pixel.bingo.model.entities.Carton;
import es.pixel.bingo.model.utils.ImpresoraHTML;
import es.pixel.bingo.view.MainView;

public class MainController {
    public static void generar() {
        List<Carton> cartones = new ArrayList<>();
        MainView mainView = new MainView();
        ImpresoraHTML impresoraHTML = new ImpresoraHTML();
        int numCartones = mainView.pedirNumCartones();
        int numCasillasVacias = mainView.pedirNumCasillas();
        String carpeta = mainView.pedirCarpeta();

        for (int i = 0; i < numCartones; i++) {
            Carton carton = new Carton(numCasillasVacias);

            if (cartones.contains(carton)) {
                i--;
                continue;
            }else {
                cartones.add(carton);
            }
        }

        try {
            impresoraHTML.imprimir(cartones, carpeta);
        } catch (Exception e) {
            System.out.println("Error al imprimir los cartones");
        }

    }
}
