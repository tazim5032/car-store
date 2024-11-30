import { z } from "zod";

export const carValidationSchema = z.object({
  brand: z.string({ message: "Brand is required." }),
  model: z.string({ message: "Model is required." }),
  year: z.number().max(new Date().getFullYear(), {
    message: "Year cannot be in the future.",
  }),
  price: z
    .number()
    .min(0, { message: "Price must be greater than or equal to 0." }),
    category: z
    .enum(["Sedan", "SUV", "Truck", "Coupe", "Covertible"], {
      errorMap: () => ({ message: "Category must be one of: Sedan, SUV, Truck, Coupe, Convertible." }),
    }),
  description: z.string({ message: "Description is required." }),
  quantity: z
    .number()
    .int({ message: "Quantity must be an integer." })
    .min(0, { message: "Quantity must be greater than or equal to 0." }),
  inStock: z.boolean({
    required_error: "In-stock status is required.",
    invalid_type_error: "In-stock status must be a boolean.",
  }),
});

export default carValidationSchema;
