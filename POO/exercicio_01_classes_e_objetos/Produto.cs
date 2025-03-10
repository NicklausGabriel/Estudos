using System;

public class Produto
{
    public double precoProduto;
    public int quantidadeProduto;
    public string produtoNome;

    public void SetNome(string nomeProduto)
    {
        this.produtoNome = nomeProduto;
    }

    public void SetPreco(double preco)
    {
        this.precoProduto = preco;
    }

    public void SetQuantidade(int quantidade)
    {
        this.quantidadeProduto = quantidade;
    }
    public void ImprimirInformacoes()
    {
        Console.WriteLine($"Produto: {this.produtoNome}, Preço: R{this.precoProduto:C}, Quantidade em estoque: {this.quantidadeProduto} unidades");
    }
}