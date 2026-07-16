import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get('/products')
  getProducts() {

    return [

      {
        id:1,
        nome:"Mouse Logitech",
        preco:249.90
      },

      {
        id:2,
        nome:"Teclado Mecânico",
        preco:399.90
      }

    ];

  }

}