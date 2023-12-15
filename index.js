const express = require("express")
const app = express()
const path = require("path")


const data = [
    category = [
        {
            id: 1,
            name: "Denim"
        },
        {
            id: 2,
            name: "Jackets"
        },
        {
            id: 3,
            name: "T-shirts"
        }
    ],

    products = [
        {
            id: 1,
            categoryId: 1,
            name: '639 Denim – Deep Blue SS2022',
            originPrice: 500000,
            salePrice: 0,
            urlImage: [
                "https://tyhisneaker.com/wp-content/uploads/2023/06/giay-nike-air-jordan-1-low-aluminum-ice-blue-like-auth.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2023/06/giay-nike-air-jordan-1-low-aluminum-ice-blue-like-auth.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2023/04/giay-mlb-liner-high-ny-white-black-quai-dan.jpg"
            ],
            description: [
                "Slim Fit 98% cotton denim 13oz & 2% spandex",
                "*Vui lòng tham khảo bảng số đo và chọn size theo khuyến nghị cân nặng phía dưới – các khuyến nghị được tổng hợp từ feedback của nhiều khách hàng và có độ chính xác cao",
                "**Chiều dài từ size 29-36 giao động khoảng 100-101cm. Nếu bạn cao trên 182cm, sản phẩm sẽ có thể chỉ đến mắt cá. Nếu bạn cao dưới 166cm, có thể bạn sẽ cần lên line gấu quần để vừa vặn",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang"
            ],
            size: [29, 30, 31, 32, 34, 36, 38],
            addInfor: {
                weight: "0.4kg",
                size: "35 × 20 × 8 cm",
                color: "Blue",
                fit: "639 Slim Fit"
            }
        },
        {
            id: 2,
            categoryId: 1,
            name: '639 Denim – Smoked Grey SS2022',
            originPrice: 550000,
            salePrice: 0,
            urlImage: [
                "https://tyhisneaker.com/wp-content/uploads/2023/12/giay-louis-vuitton-lv-trainer-blue-tron-2023.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2023/12…-louis-vuitton-lv-trainer-maxi-white-sieu-cap.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2023/12/giay-louis-vuitton-maxi-trainers-black-1abzq9.jpg"
            ],
            description: [
                "Slim Fit 98% cotton denim 13oz & 2% spandex",
                "*Vui lòng tham khảo bảng số đo và chọn size theo khuyến nghị cân nặng phía dưới – các khuyến nghị được tổng hợp từ feedback của nhiều khách hàng và có độ chính xác cao",
                "**Chiều dài từ size 29-36 giao động khoảng 100-101cm. Nếu bạn cao trên 182cm, sản phẩm sẽ có thể chỉ đến mắt cá. Nếu bạn cao dưới 166cm, có thể bạn sẽ cần lên line gấu quần để vừa vặn",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang"
            ],
            size: [29, 30, 31, 32, 34, 36, 38],
            addInfor: {
                weight: "0.4kg",
                size: "35 × 20 × 8 cm",
                color: "Black",
                fit: "639 Slim Fit"
            }
        },
        {
            id: 3,
            categoryId: 1,
            name: '639 Essential Denim – Dust Blue',
            originPrice: 530000,
            salePrice: 470000,
            urlImage: [
                "https://tyhisneaker.com/wp-content/uploads/2022/09/download-1.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2022/09/giay-adidas-ultraboost-40-xam-2.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2022/09/adidas-ultra-boost-4-0-xam-trang-nam-nu-rep-1-1-1.jpg"
            ],
            description: [
                "Slim Fit 98% cotton denim 13oz & 2% spandex",
                "[Size 38: 86~96kg]",
                "*Vui lòng tham khảo bảng số đo và chọn size theo khuyến nghị cân nặng phía dưới – các khuyến nghị được tổng hợp từ feedback của nhiều khách hàng và có độ chính xác cao",
                "**Chiều dài từ size 29-36 giao động khoảng 100-101cm. Nếu bạn cao trên 182cm, sản phẩm sẽ có thể chỉ đến mắt cá. Nếu bạn cao dưới 166cm, có thể bạn sẽ cần lên line gấu quần để vừa vặn",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang"
            ],
            size: [29, 30, 31, 32, 34, 36, 38],
            addInfor: {
                weight: "0.4kg",
                size: "35 × 20 × 8 cm",
                color: "Light Wash",
                fit: "639 Slim Fit"
            }
        },
        {
            id: 4,
            categoryId: 1,
            name: '639 Essential Denim – Silver Blue',
            originPrice: 510000,
            salePrice: 450000,
            urlImage: [
                "https://tyhisneaker.com/wp-content/uploads/2023/02/giay-jd1-paris.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2023/01/giay-air-force-one-all-white-like-auth.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2023/01/giay-air-force-one-all-white-like-auth.jpg"
            ],
            description: [
                "Slim Fit 98% cotton denim 13oz & 2% spandex",
                "[Size 28: 46~53kg]",
                "[Size 38: 83~92kg]",
                "*Vui lòng tham khảo bảng số đo và chọn size theo khuyến nghị cân nặng phía dưới – các khuyến nghị được tổng hợp từ feedback của nhiều khách hàng và có độ chính xác cao",
                "**Chiều dài từ size 29-36 giao động khoảng 100-101cm. Nếu bạn cao trên 182cm, sản phẩm sẽ có thể chỉ đến mắt cá. Nếu bạn cao dưới 166cm, có thể bạn sẽ cần lên line gấu quần để vừa vặn",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang"
            ],
            size: [28, 29, 30, 31, 34, 36],
            addInfor: {
                weight: "0.4kg",
                size: "35 × 20 × 8 cm",
                color: "Medium Wash",
                fit: "639 Slim Fit"
            }
        },
        {
            id: 5,
            categoryId: 1,
            name: '819 Denim – Dark Indigo SS22 – Delivery 2',
            originPrice: 530000,
            salePrice: 0,
            urlImage: "https://tyhisneaker.com/wp-content/uploads/2023/10/giay-nike-air-jordan-1-x-union-retro-high-black-toe-like-auth.jpg",
            description: [
                "Slim Fit 98% cotton denim 13oz & 2% spandex",
                "*Vui lòng tham khảo bảng số đo và chọn size theo khuyến nghị cân nặng phía dưới – các khuyến nghị được tổng hợp từ feedback của nhiều khách hàng và có độ chính xác cao",
                "**Chiều dài từ size 29-36 giao động khoảng 100-101cm. Nếu bạn cao trên 182cm, sản phẩm sẽ có thể chỉ đến mắt cá. Nếu bạn cao dưới 166cm, có thể bạn sẽ cần lên line gấu quần để vừa vặn",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang"
            ],
            size: [29, 30, 31, 32, 34, 36],
            addInfor: {
                weight: "0.4kg",
                size: "35 × 20 × 8 cm",
                color: "Blue",
                fit: "819 Slim Tapered Fit"
            }
        },
        {
            id: 6,
            categoryId: 1,
            name: '819 Denim – Deep Blue SS2022',
            originPrice: 500000,
            salePrice: 0,
            urlImage: [
                "https://tyhisneaker.com/wp-content/uploads/2023/11/giay-mlb-chunky-liner-mid-ny-green-3asxlmb3n-50gns.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2023/11/giay-mlb-korea-chunky-liner-mid-denim-new-york-yankees-gray-1.jpg",
            ],
            description: [
                "Slim Fit 98% cotton denim 13oz & 2% spandex",
                "*Vui lòng tham khảo bảng số đo và chọn size theo khuyến nghị cân nặng phía dưới – các khuyến nghị được tổng hợp từ feedback của nhiều khách hàng và có độ chính xác cao",
                "**Chiều dài từ size 29-36 giao động khoảng 100-101cm. Nếu bạn cao trên 182cm, sản phẩm sẽ có thể chỉ đến mắt cá. Nếu bạn cao dưới 166cm, có thể bạn sẽ cần lên line gấu quần để vừa vặn",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang"
            ],
            size: [29, 30, 31, 32, 34, 36],
            addInfor: {
                weight: "0.4kg",
                size: "35 × 20 × 8 cm",
                color: "Blue",
                fit: "819 Slim Tapered Fit"
            }
        },
        {
            id: 7,
            categoryId: 1,
            name: '819 Denim – Light Cement SS2022',
            originPrice: 500000,
            salePrice: 0,
            urlImage: [
                "https://tyhisneaker.com/wp-content/uploads/2023/05/converse-unisex-chuck-70-plus.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2023/05/giay-converse-unisex-chuck-70-plus.jpeg",
                "https://tyhisneaker.com/wp-content/uploads/2023/05/giay-converse-unisex-chuck-70-plus-1.jpeg"
            ],
            description: [
                "Slim Fit 98% cotton denim 13oz & 2% spandex",
                "*Vui lòng tham khảo bảng số đo và chọn size theo khuyến nghị cân nặng phía dưới – các khuyến nghị được tổng hợp từ feedback của nhiều khách hàng và có độ chính xác cao",
                "**Chiều dài từ size 29-36 giao động khoảng 100-101cm. Nếu bạn cao trên 182cm, sản phẩm sẽ có thể chỉ đến mắt cá. Nếu bạn cao dưới 166cm, có thể bạn sẽ cần lên line gấu quần để vừa vặn",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang"
            ],
            size: [29, 30, 31, 32, 33],
            addInfor: {
                weight: "0.4kg",
                size: "35 × 20 × 8 cm",
                color: "Blue",
                fit: "819 Slim Tapered Fit"
            }
        },
        {
            id: 8,
            categoryId: 1,
            name: '819 Denim – Pale Blue SS22 – Delivery 2',
            originPrice: 550000,
            salePrice: 0,
            urlImage: "https://tyhisneaker.com/wp-content/uploads/2022/12/giay-converse-chuck-taylor-all-star-1970s-hi-top-sieu-cap.jpg",
            description: [
                "Slim Fit 98% cotton denim 13oz & 2% spandex",
                "Màu wash này rộng hơn 1/2 size so với các màu Season trước, vui lòng chọn lùi 1 size nếu bạn đã đặt hàng mẫu 819 trước đây.",
                "*Vui lòng tham khảo bảng số đo và chọn size theo khuyến nghị cân nặng phía dưới – các khuyến nghị được tổng hợp từ feedback của nhiều khách hàng và có độ chính xác cao",
                "**Chiều dài từ size 29-36 giao động khoảng 100-101cm. Nếu bạn cao trên 182cm, sản phẩm sẽ có thể chỉ đến mắt cá. Nếu bạn cao dưới 166cm, có thể bạn sẽ cần lên line gấu quần để vừa vặn",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang"
            ],
            size: [29, 30, 31, 32, 34, 36],
            addInfor: {
                weight: "0.4kg",
                size: "35 × 20 × 8 cm",
                color: "Blue",
                fit: "819 Slim Tapered Fit"
            }
        },
        {
            id: 9,
            categoryId: 1,
            name: '819 Essential Denim – Black',
            originPrice: 530000,
            salePrice: 480000,
            urlImage: [
                "https://tyhisneaker.com/wp-content/uploads/2022/10/giay-converse-run-star-hike-high-white-trang-co-cao-4.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2022/10/giay-converse-run-star-hike-high-white-trang-co-cao-4.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2022/10/giay-converse-run-star-hike-high-white-trang-co-cao-2.jpg"
            ],
            description: [
                "Slim Fit 98% cotton denim 12oz & 2% spandex",
                "Gợi ý chọn size : 176cm – 74kg & jeans size 34",
                "165cm – 65kg & jeans size 32",
                "*Vui lòng tham khảo bảng số đo và chọn size theo khuyến nghị cân nặng phía dưới – các khuyến nghị được tổng hợp từ feedback của nhiều khách hàng và có độ chính xác cao",
                "**Chiều dài từ size 29-36 giao động khoảng 100-101cm. Nếu bạn cao trên 182cm, sản phẩm sẽ có thể chỉ đến mắt cá. Nếu bạn cao dưới 166cm, có thể bạn sẽ cần lên line gấu quần để vừa vặn",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang"
            ],
            size: [29, 30, 31, 32, 34, 36],
            addInfor: {
                weight: "0.4kg",
                size: "35 × 20 × 8 cm",
                color: "Black",
                fit: "819 Slim Tapered Fit"
            }
        },
        {
            id: 10,
            categoryId: 1,
            name: '819 Essential Denim – Dual Grey – Summer21',
            originPrice: 530000,
            salePrice: 380000,
            urlImage: [
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/giay-vans-vault-knu-skool-vr3-lx-imran-potatop-like-auth-6.jpeg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg"
            ],
            description: [
                "Slim Fit 98% cotton denim 13oz & 2% spandex",
                "*Vui lòng tham khảo bảng số đo và chọn size theo khuyến nghị cân nặng phía dưới – các khuyến nghị được tổng hợp từ feedback của nhiều khách hàng và có độ chính xác cao",
                "**Chiều dài từ size 29-36 giao động khoảng 100-101cm. Nếu bạn cao trên 182cm, sản phẩm sẽ có thể chỉ đến mắt cá. Nếu bạn cao dưới 166cm, có thể bạn sẽ cần lên line gấu quần để vừa vặn",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang"
            ],
            size: [29, 30, 31, 32, 34, 36, 38],
            addInfor: {
                weight: "0.4kg",
                size: "35 × 20 × 8 cm",
                color: "Gray",
                fit: "819 Slim Tapered Fit"
            }
        },
        {
            id: 11,
            categoryId: 1,  
            name: 'Essential Shorts – Faded Black',
            originPrice: 360000,
            salePrice: 320000,
            urlImage: [
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/giay-vans-vault-knu-skool-vr3-lx-imran-potatop-like-auth-6.jpeg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg"
            ],
            description: [
                "Slim Fit 98% cotton denim 12oz & 2% spandex",
                "Gợi ý chọn size: 175cm – 60kg & jeans size 30",
                "164cm – 68kg & jeans size 32",
                "[Size 29: 46-54kg]    [Size 30: 55-61kg]",
                "[Size 31: 62-67kg]    [Size 32: 68-72kg]",
                "[Size 34: 73-77kg]    [Size 36: 78-83kg]",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang"
            ],
            size: [29, 30, 31, 32, 34, 36],
            addInfor: {
                weight: "0.4kg",
                size: "35 × 20 × 8 cm",
                color: "Black, Gray",
                fit: "639 Slim Fit"
            }
        },
        {
            id: 12,
            categoryId: 1,
            name: 'Essential Shorts – Vintage Black',
            originPrice: 360000,
            salePrice: 240000,
            urlImage: [
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/giay-vans-vault-knu-skool-vr3-lx-imran-potatop-like-auth-6.jpeg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg"
            ],
            description: [
                "Slim Fit 98% cotton denim 12oz & 2% spandex",
                "Gợi ý chọn size: 175cm – 60kg & jeans size 30",
                "164cm – 68kg & jeans size 32",
                "[Size 29: 46-54kg]    [Size 30: 55-61kg]",
                "[Size 31: 62-67kg]    [Size 32: 68-72kg]",
                "[Size 34: 73-77kg]    [Size 36: 78-83kg]",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang"
            ],
            size: [29, 30, 31, 32, 34, 36, 38],
            addInfor: {
                weight: "0.4kg",
                size: "35 × 20 × 8 cm",
                color: "Black, Gray",
                fit: "639 Slim Fit"
            }
        },
    
        // jacker
        {
            id: 13,
            categoryId: 2,
            name: 'Button Down Denim Overshirt – Escape Blue',
            originPrice: 500000,
            salePrice: 350000,
            urlImage: [
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/giay-vans-vault-knu-skool-vr3-lx-imran-potatop-like-auth-6.jpeg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg"
            ],
            description: [
                "Relaxed Fit – 100% cotton denim 11oz",
                "Sản phẩm được thiết kế dạng rộng cùng việc sắp xếp 2 túi hộp đặc thù của phong cách workwear",
                "Model 180cm – 69kg & shirt size XL",
                "Size M [dưới 165cm: 45-60kg  //  dưới 175cm: 55-65kg]",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: "M",
            addInfor: {
                weight: "0.6kg",
                size: "35 × 25 × 8 cm",
                color: "Gray",
            }
        },
        {
            id: 14,
            categoryId: 2,
            name: 'Denim Work Shirt – Blue',
            originPrice: 550000,
            salePrice: 390000,
            urlImage: [
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/giay-vans-vault-knu-skool-vr3-lx-imran-potatop-like-auth-6.jpeg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg"
            ],
            description: [
                "Relaxed Fit – 100% cotton denim 11oz",
                "Sản phẩm được thiết kế dạng rộng cùng việc sắp xếp 2 túi hộp đặc thù của phong cách workwear",
                "Model 178cm – 65kg & shirt size L",
                "Size M [dưới 70kg ]",
                "Size L [70-77kg hoặc trên 174cm]",
                "Size XL [78-90kg hoặc trên 180cm]",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L", "XL"],
            addInfor: {
                weight: "0.6kg",
                size: "35 × 25 × 8 cm",
                color: "Black",
            }
        },
        {
            id: 15,
            categoryId: 2,
            name: 'Denim Work Shirt – Light Bleach',
            originPrice: 550000,
            salePrice: 0,
            urlImage: [
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/giay-vans-vault-knu-skool-vr3-lx-imran-potatop-like-auth-6.jpeg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg"
            ],
            description: [
                "Relaxed Fit – 100% cotton denim 11oz",
                "Sản phẩm được thiết kế dạng rộng cùng việc sắp xếp 2 túi hộp đặc thù của phong cách workwear",
                "Model 178cm – 65kg & shirt size L",
                "Size M [dưới 70kg ]",
                "Size L [70-77kg hoặc trên 174cm]",
                "Size XL [78-90kg hoặc trên 180cm]",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L", "XL"],
            addInfor: {
                weight: "0.6kg",
                size: "35 × 25 × 8 cm",
                color: "Black",
            }
        },
        {
            id: 16,
            categoryId: 2,
            name: 'Denim Work Shirt – Marble Black',
            originPrice: 550000,
            salePrice: 0,
            urlImage: [
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/giay-vans-vault-knu-skool-vr3-lx-imran-potatop-like-auth-6.jpeg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg"
            ],
            description: [
                "Relaxed Fit – 100% cotton denim 11oz",
                "Sản phẩm được thiết kế dạng rộng cùng việc sắp xếp 2 túi hộp đặc thù của phong cách workwear",
                "Model 178cm – 65kg & shirt size L",
                "Size M [dưới 70kg ]",
                "Size L [70-77kg hoặc trên 174cm]",
                "Size XL [78-90kg hoặc trên 180cm]",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L", "XL"],
            addInfor: {
                weight: "0.6kg",
                size: "35 × 25 × 8 cm",
                color: "Black",
            }
        },
        {
            id: 17,
            categoryId: 2,
            name: 'Essential Denim Jacket – Abyss Black',
            originPrice: 680000,
            salePrice: 0,
            urlImage: [
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/giay-vans-vault-knu-skool-vr3-lx-imran-potatop-like-auth-6.jpeg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg"
            ],
            description: [
                "Relaxed Fit – 100% cotton denim 11oz",
                "Sản phẩm được thiết kế dạng rộng cùng việc sắp xếp 2 túi hộp đặc thù của phong cách workwear",
                "Model 178cm – 65kg & shirt size L",
                "Size M [dưới 70kg ]",
                "Size L [70-77kg hoặc trên 174cm]",
                "Size XL [78-90kg hoặc trên 180cm]",
                "*Với mẫu khoác rộng này, khuyến nghị bạn chọn nhỏ hơn 1 size nếu cần mặc vừa, không quá rộng hoặc dài.",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L", "XL"],
            addInfor: {
                weight: "0.6kg",
                size: "35 × 25 × 8 cm",
                color: "Gray",
            }
        },
        {
            id: 18,
            categoryId: 2,
            name: 'Essential Denim Jacket – Dirty Blue',
            originPrice: 680000,
            salePrice: 0,
            urlImage: [
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/giay-vans-vault-knu-skool-vr3-lx-imran-potatop-like-auth-6.jpeg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg"
            ],
            description: [
                "Relaxed Fit – 100% cotton denim 11oz",
                "Sản phẩm được thiết kế dạng rộng cùng việc sắp xếp 2 túi hộp đặc thù của phong cách workwear",
                "Model 178cm – 65kg & shirt size L",
                "Size M [dưới 70kg ]",
                "Size L [70-77kg hoặc trên 174cm]",
                "Size XL [78-90kg hoặc trên 180cm]",
                "*Với mẫu khoác rộng này, khuyến nghị bạn chọn nhỏ hơn 1 size nếu cần mặc vừa, không quá rộng hoặc dài.",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L", "XL"],
            addInfor: {
                weight: "0.6kg",
                size: "35 × 25 × 8 cm",
                color: "Medium Wash",
            }
        },
        {
            id: 19,
            categoryId: 2,
            name: 'Signature Denim Jacket – Light Blue',
            originPrice: 680000,
            salePrice: 610000,
            urlImage: [
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/giay-vans-vault-knu-skool-vr3-lx-imran-potatop-like-auth-6.jpeg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg"
            ],
            description: [
                "Relaxed Fit – 100% cotton denim 13oz",
                "Sản phẩm được thiết kế dạng suôn, đứng form và mặc ngắn hơn các form dạng rộng.",
                "Thiết kế điểm nhấn biker tại 2 khuỷa tay cùng 6 túi cơ bản – trước ngực, bên sườn và phía trong áo.",
                "Lên 1 size so với khuyến nghị nếu bạn có vai rộng hoặc tập thể hình (bodybuilding)",
                "Model 179cm – 66kg & jacket size L",
                "[Size M: dưới 63kg & dưới 168cm]",
                "[Size L: 63-71kg]",
                "[Size XL: 72-77kg]",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L", "XL"],
            addInfor: {
                weight: "0.6kg",
                size: "35 × 25 × 8 cm",
                color: "Blue",
            }
        },
        {
            id: 20,
            categoryId: 2,
            name: 'Signature Denim Jacket – Smoke Black',
            originPrice: 680000,
            salePrice: 610000,
            urlImage: [
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/giay-vans-vault-knu-skool-vr3-lx-imran-potatop-like-auth-6.jpeg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg"
            ],
            description: [
                "Relaxed Fit – 100% cotton denim 13oz",
                "Sản phẩm được thiết kế dạng suôn, đứng form và mặc ngắn hơn các form dạng rộng.",
                "Thiết kế điểm nhấn biker tại 2 khuỷa tay cùng 6 túi cơ bản – trước ngực, bên sườn và phía trong áo.",
                "Lên 1 size so với khuyến nghị nếu bạn có vai rộng hoặc tập thể hình (bodybuilding)",
                "Model 179cm – 66kg & jacket size L",
                "[Size M: dưới 63kg & dưới 168cm]",
                "[Size L: 63-71kg]",
                "[Size XL: 72-77kg]",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L", "XL"],
            addInfor: {
                weight: "0.6kg",
                size: "35 × 25 × 8 cm",
                color: "Black",
            }
        },
        {
            id: 21,
            categoryId: 2,
            name: 'Signature Denim Jacket – Smoke Grey',
            originPrice: 610000,
            salePrice: 680000,
            urlImage: [
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/giay-vans-vault-knu-skool-vr3-lx-imran-potatop-like-auth-6.jpeg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg"
            ],
            description: [
                "Relaxed Fit – 100% cotton denim 13oz",
                "Sản phẩm được thiết kế dạng suôn, đứng form và mặc ngắn hơn các form dạng rộng.",
                "Thiết kế điểm nhấn biker tại 2 khuỷa tay cùng 6 túi cơ bản – trước ngực, bên sườn và phía trong áo.",
                "Lên 1 size so với khuyến nghị nếu bạn có vai rộng hoặc tập thể hình (bodybuilding)",
                "Model 179cm – 66kg & jacket size L",
                "[Size M: dưới 63kg & dưới 168cm]",
                "[Size L: 63-71kg]",
                "[Size XL: 72-77kg]",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L", "XL"],
            addInfor: {
                weight: "0.6kg",
                size: "35 × 25 × 8 cm",
                color: "Gray",
            }
        },
        {
            id: 22,
            categoryId: 2,
            name: 'Sleeveless Denim Jacket – Black',
            originPrice: 580000,
            salePrice: 0,
            urlImage: [
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/giay-vans-vault-knu-skool-vr3-lx-imran-potatop-like-auth-6.jpeg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg"
            ],
            description: [
                "Relaxed Fit – 100% cotton denim 12oz",
                "Sản phẩm được thiết kế dạng rộng để khoác thoải mái, cùng 6 túi cơ bản – trước ngực, bên sườn và phía trong áo.",
                "Model 180cm – 66kg & jacket size L",
                "[Size M: dưới 75kg – dưới 175cm]",
                "[Size L: 65-90kg hoặc trên 175cm ]",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L"],
            addInfor: {
                weight: "0.6kg",
                size: "35 × 25 × 8 cm",
                color: "Dark Wash",
            }
        },
        {
            id: 23,
            categoryId: 2,
            name: 'Sleeveless Denim Jacket – Sky Blue',
            originPrice: 580000,
            salePrice: 0,
            urlImage: [
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/giay-vans-vault-knu-skool-vr3-lx-imran-potatop-like-auth-6.jpeg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg"
            ],
            description: [
                "Relaxed Fit – 100% cotton denim 12oz",
                "Sản phẩm được thiết kế dạng rộng để khoác thoải mái, cùng 6 túi cơ bản – trước ngực, bên sườn và phía trong áo.",
                "Model 180cm – 66kg & jacket size L",
                "[Size M: dưới 75kg – dưới 175cm]",
                "[Size L: 65-90kg hoặc trên 175cm ]",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L"],
            addInfor: {
                weight: "0.6kg",
                size: "35 × 25 × 8 cm",
                color: "Light Wash",
            }
        },
        {
            id: 24,
            categoryId: 2,
            name: 'Sleeveless Denim Jacket – Vintage',
            originPrice: 580000,
            salePrice: 0,
            urlImage: [
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/giay-vans-vault-knu-skool-vr3-lx-imran-potatop-like-auth-6.jpeg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg"
            ],
            description: [
                "Relaxed Fit – 100% cotton denim 12oz",
                "Sản phẩm được thiết kế dạng rộng để khoác thoải mái, cùng 6 túi cơ bản – trước ngực, bên sườn và phía trong áo.",
                "Model 180cm – 66kg & jacket size L",
                "[Size M: dưới 75kg – dưới 175cm]",
                "[Size L: 65-90kg hoặc trên 175cm ]",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L"],
            addInfor: {
                weight: "0.6kg",
                size: "35 × 25 × 8 cm",
                color: "Dark Wash",
            }
        },
        {
            id: 25,
            categoryId: 3,
            name: 'Bumblebee Striped L/S Tee',
            originPrice: 300000,
            salePrice: 150000,
            urlImage: [
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/giay-vans-vault-knu-skool-vr3-lx-imran-potatop-like-auth-6.jpeg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg"
            ],
            description: [
                "100% vicose [cotton] Model 178cm – 68kg & tee size L",
                "[Size M: 50-63kg; dưới 172cm]",
                "[Size L: 64-74kg; trên 165cm]",
                "**Sản phẩm này được thiết kế rũ và thoải mái cùng độ co giãn của chất vải vicose",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L"],
            addInfor: {
                weight: "0.3kg",
                size: "30 × 25 × 5 cm",
                color: "Yellow/Black",
            }
        },
        {
            id: 26,
            categoryId: 3,
            name: 'BW Striped L/S Tee',
            originPrice: 300000,
            salePrice: 150000,
            urlImage: [
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/giay-vans-vault-knu-skool-vr3-lx-imran-potatop-like-auth-6.jpeg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg"
            ],
            description: [
                "100% vicose [cotton] Model 178cm – 68kg & tee size L",
                "[Size M: 50-63kg; dưới 172cm]",
                "[Size L: 64-74kg; trên 165cm]",
                "**Sản phẩm này được thiết kế rũ và thoải mái cùng độ co giãn của chất vải vicose",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: "L",
            addInfor: {
                weight: "0.3kg",
                size: "30 × 25 × 5 cm",
                color: "Black/White",
            }
        },
        {
            id: 27,
            categoryId: 3,
            name: 'Classic Sweatshirt – Salmon',
            originPrice: 360000,
            salePrice: 150000,
            urlImage: [
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/giay-vans-vault-knu-skool-vr3-lx-imran-potatop-like-auth-6.jpeg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg"
            ],
            description: [
                "100% vicose [cotton] Model 178cm – 68kg & tee size L",
                "[Size M: 50-63kg; dưới 172cm]",
                "[Size L: 64-74kg; trên 165cm]",
                "**Sản phẩm này được thiết kế rũ và thoải mái cùng độ co giãn của chất vải vicose",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L"],
            addInfor: {
                weight: "0.2kg",
                size: "30 × 25 × 5 cm",
                color: "Orange",
            }
        },
        {
            id: 28,
            categoryId: 3,
            name: 'Classic Sweatshirt – Wine',
            originPrice: 360000,
            salePrice: 150000,
            urlImage: [
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/giay-vans-vault-knu-skool-vr3-lx-imran-potatop-like-auth-6.jpeg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg"
            ],
            description: [
                "100% vicose [cotton] Model 178cm – 68kg & tee size L",
                "[Size M: 50-63kg; dưới 172cm]",
                "[Size L: 64-74kg; trên 165cm]",
                "**Sản phẩm này được thiết kế rũ và thoải mái cùng độ co giãn của chất vải vicose",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L"],
            addInfor: {
                weight: "0.2kg",
                size: "30 × 25 × 5 cm",
                color: "Orange",
            }
        },
        {
            id: 29,
            categoryId: 3,
            name: 'Essential Loose Tee – Black',
            originPrice: 240000,
            salePrice: 120000,
            urlImage: "https://www.thedenimaniac.com/wp-content/uploads/2019/04/AFT_2528web-e1556180430935.jpg",
            description: [
                "100% cotton – Regular Fit / Form áo suôn vừa",
                "Model 177cm – 68kg & tee size L",
                "[Size S: 40-50kg – dưới 166cm]",
                "[Size M: 50-60kg – dưới 174cm]",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["S", "M"],
            addInfor: {
                weight: "0.3kg",
                size: "30 × 25 × 5 cm",
                color: "Black",
            }
        },
        {
            id: 30,
            categoryId: 3,
            name: 'Logo L/S Tee – Black',
            originPrice: 320000,
            salePrice: 280000,
            urlImage: [
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/giay-vans-vault-knu-skool-vr3-lx-imran-potatop-like-auth-6.jpeg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg"
            ],
            description: [
                "100% cotton – Regular Fit / Form áo suôn vừa",
                "Model 179cm – 67kg & tee size L",
                "[Size M: dưới 62kg hoặc dưới 167cm]",
                "[Size L: 63-72kg hoặc trên 167cm]",
                "[Size XL: 73-80kg hoặc trên 178cm]",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L", "XL"],
            addInfor: {
                weight: "0.3kg",
                size: "30 × 25 × 5 cm",
                color: "Black",
            }
        },
        {
            id: 31,
            categoryId: 3,
            name: 'Logo L/S Tee – Cream White',
            originPrice: 320000,
            salePrice: 280000,
            urlImage: [
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/giay-vans-vault-knu-skool-vr3-lx-imran-potatop-like-auth-6.jpeg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg"
            ],
            description: [
                "100% cotton – Regular Fit / Form áo suôn vừa",
                "Model 179cm – 67kg & tee size L",
                "[Size M: dưới 62kg hoặc dưới 167cm]",
                "[Size L: 63-72kg hoặc trên 167cm]",
                "[Size XL: 73-80kg hoặc trên 178cm]",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L", "XL"],
            addInfor: {
                weight: "0.3kg",
                size: "30 × 25 × 5 cm",
                color: "White",
            }
        },
        {
            id: 32,
            categoryId: 3,
            name: 'Logo L/S Tee – Moss Green',
            originPrice: 320000,
            salePrice: 280000,
            urlImage: [
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/giay-vans-vault-knu-skool-vr3-lx-imran-potatop-like-auth-6.jpeg",
                "https://tyhisneaker.com/wp-content/uploads/2023/09/ans-vault-knu-skool-vr3-lx-imran-potatop.jpg"
            ],
            description: [
                "100% cotton – Regular Fit / Form áo suôn vừa",
                "Model 179cm – 67kg & tee size L",
                "[Size M: dưới 62kg hoặc dưới 167cm]",
                "[Size L: 63-72kg hoặc trên 167cm]",
                "[Size XL: 73-80kg hoặc trên 178cm]",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L", "XL"],
            addInfor: {
                weight: "0.3kg",
                size: "30 × 25 × 5 cm",
                color: "Green",
            }
        },
    ]
]

app.get("/v1/products", (req, res) => {
    res.status(200).json(data)
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
}

app.listen(process.env.PORT||"8080", () => {
    console.log("Server is running...");
})