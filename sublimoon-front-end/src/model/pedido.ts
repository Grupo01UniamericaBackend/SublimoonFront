import { AbstractEntity } from "./abstract-entity";
import { Carrinho } from "./carrinho";

export class Pedido extends AbstractEntity{

    total!: Float32Array;
    pagamento!: String;
    endereco!: String;
    cep!: String;

    carrinho?: Carrinho;
}