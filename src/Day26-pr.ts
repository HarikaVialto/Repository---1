type Item = {
  name: string;
  quantity: number;
  price: number;
};

type ItemDetail = {
  name: string;
  quantity: number;
  price: number;
  total: string; 
};

type Invoice = {
  customer: string;
  items: ItemDetail[];
  subtotal: string;
  tax: string;
  total: string;
  date: string;
};

function GenerateInvoice(
  customerName: string,
  items: Item[],
  taxrate: number = 0.1
): Invoice {
  let subtotal = 0;

  // Calculate item totals
  const itemDetails: ItemDetail[] = items.map((item) => {
    const total = item.quantity * item.price;
    subtotal += total;
    return {
      name: item.name,
      quantity: item.quantity,
      price: item.price,
      total: total.toFixed(2),
    };
  });

  const tax = subtotal * taxrate;
  const total = subtotal + tax;

  // invoice
  const invoice: Invoice = {
    customer: customerName,
    items: itemDetails,
    subtotal: subtotal.toFixed(2),
    tax: tax.toFixed(2),
    total: total.toFixed(2),
    date: new Date().toLocaleString(),
  };

  return invoice;
}

const customer = "Harika Mula";
const items: Item[] = [
  { name: "Laptop", quantity: 1, price: 35000 },
  { name: "Keyboard", quantity: 1, price: 3000 },
  { name: "Mouse", quantity: 1, price: 1500 },
];

const invoice = GenerateInvoice(customer, items);
console.log(invoice);
