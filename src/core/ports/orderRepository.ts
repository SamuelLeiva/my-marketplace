import { CreateOrderInput, Order } from "@/contracts";

export interface OrderRepository {
  create(input: CreateOrderInput): Promise<Order>;
  getById(id: string): Promise<Order | null>;
  listByBuyer(buyerId: string): Promise<Order[]>;
  updateStatus(id: string, status: Order["status"]): Promise<Order>;
}
