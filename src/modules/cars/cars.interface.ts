export type Car = {
    brand: string,
    model: string,
    year: number,
    price: number,
    category: "Sedan" | "SUV" | "Truck" | "Coupe" | "Covertible",
    description: string,
    quantity: number,
    inStock: boolean
}