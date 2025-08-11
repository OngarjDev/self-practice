// Map
// Square the value of every element in the array
let Square = [1, 2, 3, 4, 5].map(value => value * value);
console.log(Square);
/*
Map Filter Reduce Foreach
ใช้ filter
เลือกสินค้าที่มีสต็อกมากกว่า 0 เท่านั้น

ใช้ map
สร้าง array ใหม่ที่มีแต่ชื่อสินค้าและราคารวมภาษี (สมมติ VAT = 7%)

ใช้ reduce
หาผลรวมราคาสินค้าทั้งหมด (ราคาต่อชิ้น × จำนวนในสต็อก)

ใช้ forEach
แสดงข้อความใน console เช่น
สินค้า Laptop มีราคา 34240 บาท (รวม VAT)
*/
const products = [
  { name: "Laptop", price: 32000, stock: 5 },
  { name: "Mouse", price: 800, stock: 50 },
  { name: "Keyboard", price: 1500, stock: 15 },
  { name: "Monitor", price: 7200, stock: 0 },
  { name: "Tablet", price: 12000, stock: 8 },
];

let stock = products.filter(data => data.stock > 0);
console.log(stock)

let tax = products.map(data => ({name: data.name , price_tax: data.price * 1.07 }))
console.log(tax)

let sum_stock = products.reduce((acc,value) => acc + value.price*value.stock,0);
console.log(sum_stock)

products.forEach(data => console.log(`สินค้า ${data.name} มีราคา ${data.price} บาท (รวม VAT)`))

// โจทย์ผสม Map Filter Reduce Foreach
const orders = [
  { id: 1, customer: "Alice", items: [
      { product: "Laptop", price: 32000, quantity: 1 },
      { product: "Mouse", price: 800, quantity: 2 }
    ]
  },
  { id: 2, customer: "Bob", items: [
      { product: "Tablet", price: 12000, quantity: 1 },
      { product: "Keyboard", price: 1500, quantity: 1 }
    ]
  },
  { id: 3, customer: "Charlie", items: [
      { product: "Monitor", price: 7200, quantity: 2 },
      { product: "Mouse", price: 800, quantity: 1 }
    ]
  },
  { id: 4, customer: "Alice", items: [
      { product: "Keyboard", price: 1500, quantity: 3 }
    ]
  },
];

/*
ใช้ map + reduce
แปลง orders ให้เป็น array ใหม่ที่มีแต่ { customer, total }

total คือราคารวมของ items ในแต่ละ order (price × quantity)

ใช้ filter
เลือกเฉพาะ order ที่ total มากกว่า 15,000

ใช้ reduce
หาผลรวมของยอดขายจากทุก order ที่ผ่านการ filter

ใช้ forEach
แสดงผลลัพธ์ของ order ที่ผ่านการ filter แบบนี้:

ลูกค้า Alice มียอดสั่งซื้อ 33,600 บาท
ขั้นเสริม (ยากขึ้น)
รวมยอดขายของแต่ละลูกค้า (Alice อาจมีหลาย order ให้รวมกัน) แล้วแสดงเรียงจากยอดขายมาก → น้อย

*/