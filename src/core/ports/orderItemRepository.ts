import { CreateOrderItemInput, OrderItem } from "@/contracts";

export interface OrderItemRepository {
  createMany(items: CreateOrderItemInput[]): Promise<OrderItem[]>;
  listByOrder(orderId: string): Promise<OrderItem[]>;
}
