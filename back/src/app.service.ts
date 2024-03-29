import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUsers() {
    return [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
      { id: 3, name: 'Jane' },
    ];
  }

  getPosts() {
    return [
      { id: 1, userId: 1, title: 'Post 1' },
      { id: 2, userId: 1, title: 'Post 2' },
      { id: 3, userId: 2, title: 'Post 3' },
      { id: 4, userId: 3, title: 'Post 4' },
    ];
  }
}
