function updateStock(currentStock: number, quantityChange: number): number {
  return currentStock + quantityChange;
}

const result = updateStock(2,3)
console.log(result)