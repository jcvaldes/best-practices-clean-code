(() => {
  interface Product {
    id: number;
    name: string;
  }
  class ProductService {
    // private httpAdapter: Object;
    getProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      console.log("Producto: ", { id, name: "OLED Tv" });
    }
    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      console.log("Guardando en base de datos", product);
    }
  }
  class MailerService {
    private masterEmail: string = "idev@gmail.com";
    sendEmail(emailList: string[], template: "to-clients" | "to-admin") {
      // Realiza una petición para enviar un correo
      console.log("Enviando correo a los clientes", template);
    }
  }
  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
    private productService: ProductService;
    private mailerService: MailerService;
    constructor(productService: ProductService, mailerService: MailerService) {
      // voy a hacer uso de la responsabilidad unica del productService y el mailerService
      this.productService = productService;
      this.mailerService = mailerService;
    }
    loadProduct(id: number) {
      return this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
      this.productService.saveProduct(product);
    }

    notifyClients() {
      this.mailerService.sendEmail(["jcvaldes@gmail.com"], "to-clients");
    }
  }
  class CartBloc {
    private itemsInCart: Object[] = [];
    onAddToCart(productId: number) {
      // Agregar al carrito de compras
      console.log("Agregando al carrito ", productId);
    }
  }

  const productService = new ProductService();
  const mailerService = new MailerService();

  const productBloc = new ProductBloc(productService, mailerService);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  cartBloc.onAddToCart(10);
})();
