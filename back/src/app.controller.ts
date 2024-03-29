import { Controller, Get, Header, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/users')
  getUsers() {
    return this.appService.getUsers();
  }

  @Get('/posts')
  getPosts() {
    return this.appService.getPosts();
  }

  @Get('/script.js')
  // @Header('content-type', 'application/javascript')
  getScript(@Res() res: Response) {
    let url = 'http://localhost:4000';

    let script = `
      define(["require", "axios"], function (require) {
        async function func(){
          let axios = require('axios');
          const user = await axios.get('${url}/users');
          const post = await axios.get('${url}/posts');
          console.log(user.data, post.data);  
          return { user: user.data, post: post.data };
        }

        return {
          func
        }
      });
    `;

    res.setHeader('Content-Type', `application/javascript; charset=utf-8`);
    res.send(script);
  }
}
