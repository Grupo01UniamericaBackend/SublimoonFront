import axios, { AxiosInstance } from 'axios';

import { Produto } from '@/model/produto';

    class ProdutoClient{

    private axiosClient: AxiosInstance


        constructor() {
            this.axiosClient = axios.create({
                baseURL: 'http://localhost:8080/api/categoria',
                headers: {'Content-type' : 'application/json'}
            });
        }
    
        public async findById(id: number) : Promise<Produto> {
            try {
                return (await this.axiosClient.get<Produto>(`/${id}`)).data
            } catch (error:any) {
                return Promise.reject(error.response.data)
            }
        }
    
        public async listaAll(): Promise<Produto[]> {
            try {
                return (await this.axiosClient.get<Produto[]>(`/lista`)).data
            } catch (error:any) {
                return Promise.reject(error.response.data)
            }
        }
    
        public async cadastrar(produto: Produto): Promise<string> {
            try {
                return (await this.axiosClient.post<string>(``, produto)).data
            } catch (error:any) {
                return Promise.reject(error.response.data)
            }
        }
    
        public async editar(id: number,produto: Produto): Promise<string> {
            try {
                return (await this.axiosClient.put<string>(`/${produto.id}`, produto)).data
            } catch (error:any) {
                return Promise.reject(error.response.data)
            }
        }
    
        public async deletaProduto(id: number): Promise<string> {
            try {
                return (await this.axiosClient.delete<string>(`/${id}`)).data
            } catch (error:any) {
                return Promise.reject(error.response.data)
            }
          }
    
    





    }

    export default new ProdutoClient();