namespace exercicio_01_classes_e_objetos;

class Program
{
    static void Main(string[] args)
    {
        //Instancia produto 1 
        Produto mesa = new Produto();
        mesa.SetNome("Mesa escritorio");
        mesa.SetPreco(500.20);
        mesa.SetQuantidade(5);
        mesa.ImprimirInformacoes();

        //Instancia produto 2
        Produto cadeira = new Produto();
        cadeira.SetNome("Cadeira escritorio");
        cadeira.SetPreco(1000.00);
        cadeira.SetQuantidade(100);
        cadeira.ImprimirInformacoes();

        //Instancia produto 3
        Produto lapTop = new Produto();
        lapTop.SetNome("Acer Nitro");
        lapTop.SetPreco(5000.00);
        lapTop.SetQuantidade(3);
        lapTop.ImprimirInformacoes();
    }
}
