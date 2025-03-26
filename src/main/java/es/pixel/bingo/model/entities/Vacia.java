package es.pixel.bingo.model.entities;

public class Vacia extends Casilla {
    public Vacia(int pos) {
        this.pos = pos;
    }
    
    @Override
    public String toString() {
        final String MSG = "<div title='Comod&iacute;n'></div>";
        return MSG;
    }
}
