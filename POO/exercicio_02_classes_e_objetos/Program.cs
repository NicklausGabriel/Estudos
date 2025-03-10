namespace exercicio_02_classes_e_objetos;

class Program
{
    static void Main(string[] args)
    {
        //Instancia do primeiro objeto
        Livro livro1 = new Livro();
        livro1.SetTitle("Ato 1");
        livro1.SetAuthor("Gabriel");
        livro1.SetAgePiblishBook(2010);
        livro1.PrintInfo();

        //Instancia do segundo Objeto
        Livro livro2 = new Livro();
        livro2.SetTitle("Ficção atual");
        livro2.SetAuthor("Ferreira");
        livro2.SetAgePiblishBook(2025);
        livro2.PrintInfo();

        //Instancia do terceiro objeto
        Livro livro3 = new Livro();
        livro3.SetTitle("Ainda fui");
        livro3.SetAuthor("Avelar");
        livro3.SetAgePiblishBook(2011);
        livro3.PrintInfo();
    }
}
