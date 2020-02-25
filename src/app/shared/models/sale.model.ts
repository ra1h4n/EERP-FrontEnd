export class Sale {
    CustomerName: string;
    CustomerPhone: string;
    CustomerAddress: string;
    PaymentType: string;
    SaleDate: string;
    SaleDetails: string;

    BatchNo: string
    Category: string;
    Brand: string;
    ProductName: string;
    AvailableQuantity: number;
    ProductUnit: string;
    SaleQuantity: number;
    SaleRate: number;
    DiscountInPercent: number = 0.0;
    Total: number;
}