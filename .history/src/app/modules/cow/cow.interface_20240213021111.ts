import { ISeller } from "../seller/seller.interface"
import { Types } from "mongoose"

export type ICow = {
    name: string, 
    age: number, 
    price: number, 
    location: 'Dhaka' | 'Chattogram' | 'Barishal' | 'Rajshahi' | 'Sylhet' | 'Comilla' | 'Rangpur' | 'Mymensingh',
    breed: 'Brahman' | 'Nellore' | 'Sahiwal' | 'Gir' | 'Indigenous' | 'Tharparkar' | 'Kankrej',
    weight: number, 
    label: 'for sale' | 'sold out',
    category: 'dairy' | 'Beef' | 'DualPurpose',
    seller: Types.ObjectId | ISeller
}