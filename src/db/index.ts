import { Index } from '@upstash/vector'
import * as dotenv from 'dotenv'

// this file is separetly called from our nextjs app 
// so thats why we implemnted this doenv config so the db 
// will get the env variables
dotenv.config()

export type Product = {
  id: string
  imageId: string
  name: string
  size: 'S' | 'M' | 'L'
  color: 'white' | 'beige' | 'blue' | 'green' | 'purple'
  price: number
}

export const db = new Index<Product>()