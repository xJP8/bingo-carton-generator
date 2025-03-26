package es.pixel.bingo.model.entities;

public class Rellena extends Casilla {
    private Imagen img;

    public Rellena(int pos, Imagen img) {
        this.pos = pos;
        this.img = img;
    }    

    public Imagen getImg() {
        return img;
    }


    public void setImg(Imagen img) {
        this.img = img;
    }

    @Override
    public String toString() {
        final String MSG = "<div class='casilla'><img src='%s' alt='%s' title='%s'></div>";
        return String.format(MSG, this.img.getRuta(), this.img.name(), this.img.name());
    }

}
