package es.pixel.bingo.view;

import java.util.Scanner;

public class MainView {
    public int pedirNumCartones(){
        Scanner sc = new Scanner(System.in);
        int numCartones = -1;
        
        do {
            System.out.println("Introduce el número de cartones que quieres generar: ");
            numCartones = sc.nextInt();
        } while (numCartones < 1);
        return numCartones;
    }

    public int pedirNumCasillas(){
        Scanner sc = new Scanner(System.in);
        int numCasillas = -1;
        
        do {
            System.out.println("Introduce el número de casillas vacías que quieres que tenga el cartón: ");
            numCasillas = sc.nextInt();
        } while (numCasillas < 0);
        return numCasillas;
    }

    public String pedirCarpeta(){
        Scanner sc = new Scanner(System.in);
        String carpeta = "";
        
        do {
            System.out.println("Introduce la carpeta donde quieres guardar los cartones: ");
            carpeta = sc.nextLine();
        } while (carpeta.isEmpty());
        return carpeta;
    }
}
