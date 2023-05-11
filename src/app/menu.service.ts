import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  public pizza: Menu[]= [
    {
      nombre: "Margherita",
      imagen: "assets/media/pizzas/margherita.jpg",
      ingredientes: "Masa de pizza (harina, agua, levadura, sal y aceite de oliva), Salsa de tomate, Queso mozzarella fresco (o bocconcini), Tomates frescos en rodajas, Hojas de albahaca fresca, Sal y aceite de oliva extra virgen"
    },
    {
      nombre: "Diavola",
      imagen: "assets/media/pizzas/Diavola.jpg",
      ingredientes: "Masa de pizza (harina, agua, levadura, sal y aceite de oliva), Salsa de tomate, Queso mozzarella rallado, Salami picante en rodajas, Aceitunas negras en rodajas, Orégano seco, Aceite de oliva extra virgen"
    },
    {
      nombre: "Quattro Formaggi",
      imagen: "assets/media/pizzas/Quattro_Formaggi.png",
      ingredientes: "Masa de pizza (harina, agua, levadura, sal y aceite de oliva), Salsa blanca (a base de crema o queso ricotta), Queso mozzarella rallado, Queso Gorgonzola (o queso azul similar), Queso Parmesano rallado, Queso Provolone rallado, Pimienta negra molida"
    },
    {
      nombre: "Prosciutto e funghi",
      imagen: "assets/media/pizzas/funghi.jpg",
      ingredientes: "Masa de pizza (harina, agua, levadura, sal y aceite de oliva), Salsa de tomate, Queso mozzarella rallado, Jamón en rodajas, Champiñones en rodajas, Orégano seco, Aceite de oliva extra virgen"
    }
  ];
}

export interface Menu{
  nombre: string ;
  imagen: string;
  ingredientes: string;
} 
