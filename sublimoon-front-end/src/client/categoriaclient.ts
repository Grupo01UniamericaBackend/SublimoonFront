import axios, { AxiosInstance } from 'axios';

import { Categoria } from '@/model/categoria';

class CategoriaClient{

    private axiosClient: AxiosInstance

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/categoria',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number) : Promise<Categoria> {
        try {
            return (await this.axiosClient.get<Categoria>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response.data)
        }
    }

    public async listaAll(): Promise<Categoria[]> {
        try {
            return (await this.axiosClient.get<Categoria[]>(`/lista`)).data
        } catch (error:any) {
            return Promise.reject(error.response.data)
        }
    }

    public async cadastrar(categoria: Categoria): Promise<string> {
        try {
            return (await this.axiosClient.post<string>(``, categoria)).data
        } catch (error:any) {
            return Promise.reject(error.response.data)
        }
    }

    public async editar(id: number,categoria: Categoria): Promise<string> {
        try {
            return (await this.axiosClient.put<string>(`/${categoria.id}`, categoria)).data
        } catch (error:any) {
            return Promise.reject(error.response.data)
        }
    }

    public async deletaCategoria(id: number): Promise<string> {
        try {
            return (await this.axiosClient.delete<string>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response.data)
        }
      }



}

export default new CategoriaClient();