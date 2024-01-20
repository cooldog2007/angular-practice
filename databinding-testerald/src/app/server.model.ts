export class Server {
  constructor(
    public type: 'server' | 'blueprint',
    public name: string,
    public content: string
  ) {}
}
