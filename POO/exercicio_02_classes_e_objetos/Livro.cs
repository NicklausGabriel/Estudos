using System;

class Livro
{
    public string titleBook;
    public string authorBook;
    public int agePublishBook;

    public void SetTitle(string title)
    {
        this.titleBook = title;
    }
    public void SetAuthor(string author)
    {
        this.authorBook = author;
    }
    public void SetAgePiblishBook(int age)
    {
        this.agePublishBook = age;
    }

    public void PrintInfo()
    {
        Console.WriteLine($"Titulo: {this.titleBook}, Autor: {this.authorBook}, Ano publicação: {this.agePublishBook}");
    }
}