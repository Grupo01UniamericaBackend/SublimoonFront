import { AbstractEntity } from "./abstract-entity";
import { Avaliacao } from "./avaliacao";
import { Carrinho } from "./carrinho";
import { Categoria } from "./categoria";
import { Cor } from "./cor";
import { Favorito } from "./favorito";

export class Produto extends AbstractEntity{

    nome!: String;

    categorias?: Categoria;

    cor!: Cor;
    descricao!: String;
    image?:String;
    preco!: String;
    quantidade!: Int16Array;

    avaliacao?: Avaliacao;

    pesoProduto!: Float32Array;
    mediaAvaliacao!: Float32Array;

    favoritos?: Favorito;

    carrinhos?: Carrinho;

    tamanho!: String;
    
}