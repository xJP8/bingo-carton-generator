package es.pixel.bingo.model.entities;

public class Carton {
    private Casilla[] casillas = new Casilla[25];

    public Carton(int numCasillasVacias) {
        Imagen imagen = null;
        
        for (int i = 0; i < numCasillasVacias; i++) {
            int posRandom = (int) (Math.random() * 25);
            if (casillas[posRandom] != null) {
                i--;
                continue;
            } 
            casillas[posRandom] = new Vacia(posRandom);
        }

        for (int i = 0; i < casillas.length; i++) {
            if (casillas[i] == null) {
                do {
                    imagen = Imagen.getRandomImagen();
                } while (existeImagen(imagen));
                casillas[i] = new Rellena(i, imagen);
            }
        }
    }

    private boolean existeImagen(Imagen imagen) {
        for (Casilla casilla : casillas) {
            if (casilla instanceof Rellena) {
                Rellena rellena = (Rellena) casilla;
                if (rellena.getImg() == imagen) {
                    return true;
                }
            }
        }
        return false;
    }

    public Casilla[] getCasillas() {
        return casillas;
    }

    @Override
    public String toString() {
        String msg = "";

        for (Casilla casilla : casillas) {
            msg += casilla.toString() + "\n"+"\t"+"\t";
        }

        return msg;
    }
}
