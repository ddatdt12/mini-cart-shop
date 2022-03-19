import axios from 'axios';

const products = [
  {
    id: 1,
    name: 'iPhone 13 Pro Max 256GB',
    price: 33000000,
    description: 'Khung viền thép, một số phiên bản khung nhôm cùng mặt lưng kính.',
    img: 'https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13-_pro-5_4_1.jpg',
  },
  {
    id: 2,
    name: 'Xiaomi Redmi Note 11',
    price: 4290000,
    description: 'Hiệu năng ấn tượng - Snapdragon 680 8 nhân cùng RAM 4GB, bộ nhớ 64GB',
    img: 'https://image.cellphones.com.vn/358x/media/catalog/product/1/1/11_4_32.jpg',
  },
  {
    id: 3,
    name: 'Samsung Galaxy Z Fold3 5G',
    price: 33000000,
    description:
      'Thiết kế độc đáo tiện lợi, khẳng định đẳng cấp - Thiết kế gập mở, chất liệu cao cấp, bản lề chắc chắn',
    img: 'https://image.cellphones.com.vn/358x/media/catalog/product/g/a/galaxy-z-fold3-kv_5g__1p_cmyk.jpg',
  },
  {
    id: 4,
    name: 'Samsung Galaxy Watch4 40mm LTE',
    price: 6990000,
    description: 'Thiết kế cổ điển,màn hình Amoled 1.19 inch hiển thị sắc nét',
    img: 'https://image.cellphones.com.vn/358x/media/catalog/product/5/_/5_13_9.png',
  },
  {
    id: 5,
    name: 'Ốp lưng iPhone 13 Likgus Royal',
    price: 200000,
    description:
      'Ốp với các khung viền được hoàn thiện nhô cao giúp bảo vệ màn hình và mặt kính camera khỏi các trầy xước.',
    img: 'https://image.cellphones.com.vn/358x/media/catalog/product/o/p/op-lung-iphone-13-pro-likgus-royal-3.jpg',
  },
  {
    id: 6,
    name: 'Xiaomi 11T',
    price: 8900000,
    description: 'Khung viền thép, một số phiên bản khung nhôm cùng mặt lưng kính.',
    img: 'https://image.cellphones.com.vn/358x/media/catalog/product/x/i/xiaomi-mi-11t-1_1.jpg',
  },
  {
    id: 7,
    name: 'OPPO Reno6 Z 5G',
    price: 12240000,
    description: 'Khung viền thép, một số phiên bản khung nhôm cùng mặt lưng kính.',
    img: 'https://image.cellphones.com.vn/358x/media/catalog/product/1/2/12345678.jpg',
  },
];
const productApi = {
  getProducts: async () => {
    // const res = await axios.request(options);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(products);
      }, 0);
    });
  },
};

export default productApi;
