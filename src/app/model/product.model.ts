export class ProductModel {
  constructor(
    public name: string,
    public price: number,
    public disc: number,
    public url: string,
    public spec: string[],
    public desc: string
  ) {}
}
