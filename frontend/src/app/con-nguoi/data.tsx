import React from 'react';

export interface Leader {
  name: string;
  role: string;
  img: string;
  objectPosition?: string;
  scale?: string | number;
  objectFit?: "cover" | "contain" | "fill";
}

export interface LongService {
  name: string;
  years: number;
  dept: string;
  date: string;
  img: string;
}

export interface DepartmentItem {
  img: string;
  name: string;
  role: string;
  objectPosition?: string;
  scale?: string | number;
  scaleX?: string | number;
  objectFit?: "cover" | "contain" | "fill";
}

export interface DepartmentPage {
  title?: string;
  layout?: string;
  items: DepartmentItem[];
}

export interface Department {
  name: string;
  img: string;
  gridObjectPosition?: string;
  gridScale?: number;
  gridObjectFit?: "cover" | "contain";
  hasTextOnImage: boolean;
  details: {
    useStaggeredOnMain?: boolean;
    use2x2Layout?: boolean;
    use3x2Layout?: boolean;
    useCollageStaggered4?: boolean;
    mainItems?: DepartmentItem[];
    leader?: { name: string; role: string; img: string; objectPosition?: string; scale?: string | number; scaleX?: string | number; objectFit?: "cover" | "contain" | "fill" };
    group?: { name: string; subName: string; img: string };
    deputies?: { name: string; role: string; img: string; objectPosition?: string; scale?: string | number; scaleX?: string | number; objectFit?: "cover" | "contain" | "fill" }[];
    extraPages?: DepartmentPage[];
  };
}

export interface Branch {
  name: string;
  img: string;
  hasTextOnImage: boolean;
  details: {
    leader: { name: string; role: string; img: string };
    group: { name: string; subName: string; img: string };
    deputies?: { name: string; role: string; img: string; objectPosition?: string }[];
    deputy?: { name: string; role: string; img: string; objectPosition?: string }; // For legacy compatibility
  };
}

export interface Store {
  id: string;
  img: string;
  objectPosition?: string;
  scale?: string | number;
  objectFit?: "object-cover" | "object-contain";
  translateX?: string;
  translateY?: string;
}

export interface Province {
  name: string;
  map: string;
  mapWithText?: string;
  stores: Store[];
}

export interface FormerDirector {
  name: string;
  img: string;
  role: string;
  period: string;
  description: React.ReactNode;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
  scale?: number;
  mobileObjectPosition?: string;
  mobileScale?: number;
  translateX?: string;
  translateY?: string;
  modalImg?: string;
  modalObjectPosition?: string;
  modalScale?: number;
  modalTranslateY?: string;
  mobileModalObjectPosition?: string;
  mobileModalScale?: number;
  mobileModalTranslateY?: string;
}

export const leaders: Leader[] = [
  { name: "THƯỢNG TÁ\nTRƯƠNG ĐẠI NGHĨA", role: "Phó giám đốc Viettel Store", img: encodeURI("/images/giamdoc/le-quoc-tuan-1.jpg"), objectPosition: "20% top", scale: 1.08, objectFit: "cover" },
  { name: "THIẾU TÁ\nĐINH THỊ DUNG", role: "Phó giám đốc công ty Viettel Commerce\nGiám đốc Viettel Store", img: encodeURI("/images/ban giám đốc/dung.jpg"), objectPosition: "center top", scale: 1.45 },
  { name: "THIẾU TÁ\nĐINH SƠN TÙNG", role: "Phó giám đốc Viettel Store", img: encodeURI("/images/ban giám đốc/tung.jpg"), objectPosition: "center top", scale: 1.15 },
];

export const longService: LongService[] = [
  { name: "ĐỒNG CHÍ NGÔ NGÂN HÀ", years: 20, dept: "Phòng Kinh doanh Thiết bị", date: "01/10/2005", img: "/images/vinhdanh/v1.jpg" },
  { name: "ĐỒNG CHÍ NGUYỄN THỊ THÙY DƯƠNG", years: 20, dept: "Phòng Chất lượng dịch vụ", date: "01/10/2005", img: "/images/vinhdanh/v2.jpg" },
  { name: "ĐỒNG CHÍ ĐOÀN CHÍ HIẾU", years: 20, dept: "Phòng Kế hoạch và kiểm soát", date: "01/10/2005", img: "/images/vinhdanh/v3.jpg" },
  { name: "ĐỒNG CHÍ BÙI ĐỨC TOÀN", years: 20, dept: "Phòng Chất lượng dịch vụ", date: "01/10/2005", img: "/images/vinhdanh/v4.jpg" },
  { name: "ĐỒNG CHÍ PHAN MINH TUẤN", years: 19, dept: "Phòng Kinh doanh Thiết bị", date: "27/12/2005", img: "/images/vinhdanh/v5.jpg" },
  { name: "ĐỒNG CHÍ NGUYỄN THỊ DUYÊN", years: 19, dept: "Hệ thống siêu thị: HNI03", date: "01/07/2006", img: "/images/vinhdanh/v6.jpg" },
  { name: "ĐỒNG CHÍ NGUYỄN THỊ NGỌC OANH", years: 19, dept: "Hệ thống cửa hàng: HYN-CH01", date: "03/01/2006", img: "/images/vinhdanh/v7.jpg" },
  { name: "ĐỒNG CHÍ BÙI THỊ THU LÊ", years: 19, dept: "Phòng Marketing", date: "15/10/2006", img: "/images/vinhdanh/v8.jpg" },
  { name: "ĐỒNG CHÍ PHÙNG THU HUYỀN", years: 18, dept: "Phòng Kế hoạch và Kiểm soát", date: "01/05/2007", img: "/images/vinhdanh/v9.jpg" },
  { name: "ĐỒNG CHÍ BÙI THỊ LƯ", years: 18, dept: "Hệ thống siêu thị: HNI06", date: "01/05/2007", img: "/images/vinhdanh/v10.jpg" },
  { name: "ĐỒNG CHÍ TRẦN HẢI VINH", years: 18, dept: "Phòng Điều hành và Phát triển siêu thị", date: "01/05/2007", img: "/images/vinhdanh/v11.jpg" },
  { name: "ĐỒNG CHÍ NGUYỄN THỊ THU HƯỜNG", years: 18, dept: "Hệ thống siêu thị: HNI06", date: "05/01/2007", img: "/images/vinhdanh/v12.jpg" },
  { name: "ĐỒNG CHÍ VŨ KIM CHUNG", years: 18, dept: "Phòng Kinh doanh Thiết bị", date: "01/11/2007", img: "/images/vinhdanh/v13.jpg" },
  { name: "ĐỒNG CHÍ DƯƠNG SƠN TÙNG", years: 18, dept: "Phòng Kinh doanh Dịch vụ", date: "01/11/2007", img: "/images/vinhdanh/v14.jpg" },
  { name: "ĐỒNG CHÍ NGUYỄN THỊ HẠNH", years: 18, dept: "Phòng Kinh doanh Thiết bị", date: "01/10/2006", img: "/images/vinhdanh/v15.jpg" },
  { name: "ĐỒNG CHÍ NGUYỄN THỊ NGÀ", years: 17, dept: "Phòng Kinh doanh Thiết bị", date: "01/08/2008", img: "/images/vinhdanh/v16.jpg" },
  { name: "ĐỒNG CHÍ LÊ DUY BÁCH", years: 17, dept: "Phòng Chất lượng dịch vụ", date: "01/09/2008", img: "/images/vinhdanh/v17.jpg" },
  { name: "ĐỒNG CHÍ TRƯƠNG ĐẠI NGHĨA", years: 17, dept: "Ban Giám đốc Trung tâm", date: "01/10/2007", img: "/images/vinhdanh/v18.jpg" },
  { name: "ĐỒNG CHÍ HUỲNH THỊ BÁ THẢO", years: 17, dept: "Hệ thống siêu thị: LDG08", date: "01/12/2006", img: "/images/vinhdanh/v19.jpg" },
  { name: "ĐỒNG CHÍ VÕ THỊ CHÂU TRINH", years: 17, dept: "Hệ thống siêu thị: QNI02", date: "01/11/2007", img: "/images/vinhdanh/v20.jpg" },
];

export const departments: Department[] = [
  {
    name: "Phòng Kinh doanh Thiết bị",
    img: "/images/tapthephong/Phòng Kinh doanh Thiết bị.jpg",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đồng chí Trần Hoàng Chung", role: "Trưởng phòng Kinh doanh Thiết bị", img: encodeURI("/images/tapthephong/tp-pp/kinh doanh thiết bị/TP-Trần Hoàng Chung.jpg"), objectPosition: "20% center", scale: 1.1 },
      group: { name: "Tập thể Phòng Kinh doanh Thiết bị", subName: "Phòng Kinh doanh Thiết bị", img: "/images/tapthephong/Phòng Kinh doanh Thiết bị.jpg" },
      deputies: [
        { name: "Đồng chí Nguyễn Thị Quỳnh Mai", role: "Phó phòng Kinh doanh Thiết bị", img: encodeURI("/images/tapthephong/tp-pp/kinh doanh thiết bị/PP-Nguyễn Thị Quỳnh Mai.jpg") }
      ]
    }
  },
  {
    name: "Phòng Kinh doanh Dịch vụ",
    img: "/images/tapthephong/Phòng Kinh doanh tịch vụ.jpg",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đồng chí Dương Sơn Tùng", role: "Trưởng phòng Kinh doanh Dịch vụ", img: encodeURI("/images/tapthephong/tp-pp/kinh doanh dịch vụ/TP-Dương Sơn Tùng.jpg") },
      group: { name: "Tập thể Phòng Kinh doanh Dịch vụ", subName: "Phòng Kinh doanh Dịch vụ", img: "/images/tapthephong/Phòng Kinh doanh tịch vụ.jpg" },
      deputies: []
    }
  },
  {
    name: "Phòng Marketing",
    img: "/marketing-main.jpg",
    gridObjectFit: "cover",
    gridObjectPosition: "center center",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đồng chí Bùi Quốc Hưng", role: "Trưởng phòng Marketing", img: encodeURI("/images/tapthephong/tp-pp/mkt/TP-Bùi Quốc Hưng.jpg") },
      group: { name: "Tập thể Phòng Marketing", subName: "Phòng Marketing", img: "/marketing-main.jpg" },
      deputies: [
        { name: "Đồng chí Bùi Xuân Vinh", role: "Phó phòng Marketing", img: encodeURI("/images/tapthephong/tp-pp/mkt/PP-Bùi Xuân Vinh.JPG") }
      ]
    }
  },
  {
    name: "Phòng Điều hành và Phát triển Siêu thị\nBộ phận Điều hành Siêu thị",
    img: "/images/tapthephong/Bộ Phận Điều hành Siêu thị.jpg",
    hasTextOnImage: false,
    details: {
      leader: { name: "Phạm Anh Tuấn", role: "Trưởng phòng Điều hành và Phát triển Siêu thị", img: encodeURI("/images/tapthephong/tp-pp/điều hành siêu thị/TP-Phạm Anh Tuấn.jpg") },
      group: { name: "Tập thể Bộ phận Điều hành Siêu thị", subName: "Phòng Điều hành và Phát triển Siêu thị", img: "/images/tapthephong/Bộ Phận Điều hành Siêu thị.jpg" },
      deputies: [
        { name: "Chung Duy Tuấn", role: "Phó phòng Điều hành và Phát triển Siêu thị", img: encodeURI("/images/tapthephong/tp-pp/điều hành siêu thị/PP-Chung Duy Tuấn 2.jpg") }
      ]
    }
  },
  {
    name: "Phòng Điều hành và Phát triển Siêu thị\nBộ phận Phát triển Kênh",
    img: "/images/tapthephong/Phát triển Siêu thị.jpg",
    hasTextOnImage: false,
    details: {
      group: { name: "Tập thể Bộ phận Phát triển Kênh", subName: "Phòng Điều hành và Phát triển Siêu thị", img: "/images/tapthephong/Phát triển Siêu thị.jpg" },
      deputies: [
        { name: "Đồng chí Trần Hải Vinh", role: "Phó phòng - Phụ trách bộ phận Phát triển Kênh", img: encodeURI("/images/tapthephong/tp-pp/phát triển kênh/PP-Trần Hải Vinh.jpg") }
      ]
    }
  },
  {
    name: "Phòng Chất lượng Dịch vụ",
    img: "/images/tapthephong/Phòng Chất Lượng Dịch vụ.jpg",
    hasTextOnImage: false,
    details: {
      group: { name: "Tập thể Phòng Chất lượng Dịch vụ", subName: "Phòng Chất lượng Dịch vụ", img: "/images/tapthephong/Phòng Chất Lượng Dịch vụ.jpg" },
      deputies: [
        { name: "Đồng chí Lê Duy Bách", role: "Trưởng phòng Chất lượng Dịch vụ", img: encodeURI("/images/tapthephong/tp-pp/chất lượng dvu/TP-Lê Duy Bách.jpg") }
      ]
    }
  },
  {
    name: "Phòng Tài chính Kế toán",
    img: "/images/tapthephong/Phòng Tài chính kế toán.jpg",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đồng chí Nguyễn Thị Nguyên", role: "Trưởng phòng Tài chính Kế toán", img: encodeURI("/images/tapthephong/tp-pp/tài chính/TP-Nguyễn Thị Nguyên.jpg") },
      group: { name: "Tập thể Phòng Tài chính Kế toán", subName: "Phòng Tài chính Kế toán", img: "/images/tapthephong/Phòng Tài chính kế toán.jpg" },
      deputies: [
        { name: "Đồng chí Trần Thị Nghĩa", role: "Phó phòng Tài chính Kế toán", img: encodeURI("/images/tapthephong/tp-pp/tài chính/PP-Trần Thị Nghĩa.jpg") },
        { name: "Đồng chí Đỗ Thị Khánh Hòa", role: "Phó phòng Tài chính Kế toán", img: encodeURI("/images/tapthephong/tp-pp/tài chính/PP-Đỗ Thị Khánh Hòa.jpg"), objectPosition: "center 20%" }
      ]
    }
  },
  {
    name: "Phòng Chính trị Nhân sự",
    img: "/images/tapthephong/Phòng Chính trị Nhân sự.jpg",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đồng chí Nguyễn Thị Hà Doan", role: "Trưởng phòng Chính trị Nhân sự", img: "/images/tapthephong/tp-pp/chính trị nhân sự/TP-Nguyễn Thị Hà Doan.jpg" },
      group: { name: "Tập thể Phòng Chính trị Nhân sự", subName: "", img: "/images/tapthephong/Phòng Chính trị Nhân sự.jpg" },
      deputies: [
        { name: "Đồng chí Ngô Quang Hiếu", role: "Phó phòng Chính trị Nhân sự", img: "/images/tapthephong/tp-pp/chính trị nhân sự/PP-Ngô Quang Hiếu.jpg" }
      ]
    }
  },
  {
    name: "Phòng Công nghệ Thông tin",
    img: "/images/tapthephong/cntt.JPG",
    gridScale: 1.15,
    hasTextOnImage: false,
    details: {
      leader: { name: "Đồng chí Đặng Thị Quỳnh Nga", role: "Trưởng phòng Công nghệ Thông tin", img: encodeURI("/images/tapthephong/tp-pp/cntt/TP-Đặng Thị Quỳnh Nga.jpg") },
      group: { name: "Tập thể Phòng Công nghệ Thông tin", subName: "", img: "/images/tapthephong/cntt.JPG" },
      deputies: [
        { name: "Đồng chí Đinh Đăng Thiên", role: "Phó phòng Công nghệ Thông tin", img: encodeURI("/images/tapthephong/tp-pp/cntt/PP-Đinh Đăng Thiên.jpg") }
      ]
    }
  },
  {
    name: "Phòng Kế hoạch và Kiểm soát\nBộ phận Kế Hoạch",
    img: "/images/tapthephong/Bộ phận kế hoạch Tổng hợp.jpg",
    gridObjectPosition: "80% center",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đồng chí Phan Thị Ngọc Tú", role: "Trưởng phòng Bộ phận Kế hoạch", img: encodeURI("/images/tapthephong/tp-pp/bộ phận kế hoạch/TP-Phan Thị Ngọc Tú.jpg") },
      group: { name: "Tập thể Bộ phận Kế hoạch", subName: "Phòng Kế hoạch và Kiểm soát", img: "/images/tapthephong/Bộ phận kế hoạch Tổng hợp.jpg" },
      deputies: [
        { name: "Đồng chí Phạm Anh Quân", role: "Phó phòng Bộ phận Kế hoạch", img: encodeURI("/images/tapthephong/tp-pp/bộ phận kế hoạch/PP-Phạm Anh Quân.jpg") }
      ]
    }
  },
  {
    name: "Phòng Kế hoạch và Kiểm soát\nBộ phận Kiểm soát",
    img: "/images/tapthephong/Bộ phận Kiểm soát.jpg",
    hasTextOnImage: false,
    details: {
      group: { name: "Tập thể Bộ phận Kiểm soát", subName: "Phòng Kế hoạch và Kiểm soát", img: "/images/tapthephong/Bộ phận Kiểm soát.jpg" },
      deputies: [
        { name: "Đồng chí Đoàn Chí Hiếu", role: "Phó phòng - Phụ trách bộ phận Kiểm soát", img: encodeURI("/images/tapthephong/tp-pp/bộ phận kiểm soát/PP-Đoàn Chí Hiếu.jpg") }
      ]
    }
  },
  {
    name: "Chi nhánh bán lẻ khu vực phía Nam",
    img: "/1792293004306854965.jpg",
    hasTextOnImage: false,
    details: {
      group: { name: "Chi nhánh bán lẻ khu vực phía Nam", subName: "Viettel Store", img: "/1792293004306854965.jpg" },
      deputies: []
    }
  },
];

export const ecommerceChannel: Department = {
  name: "Kênh Thương mại Điện tử",
  img: "/images/tapthephong/Kênh TMĐT.jpg",
  hasTextOnImage: false,
  details: {
    group: { name: "Tập thể Kênh Thương mại Điện tử", subName: "Kênh Thương mại Điện tử", img: "/images/tapthephong/Kênh TMĐT.jpg" },
    deputies: [
      { name: "Đồng chí Lê Thị Thanh Mai", role: "Phó giám đốc kênh Thương mại Điện tử", img: encodeURI("/images/tapthephong/tp-pp/kênh thương mại điện tử/Phó giám đốc -Lê Thị Thanh Mai.jpg") }
    ]
  }
};

export const supermarketChannel: Department = {
  name: "Quản lý vùng",
  img: encodeURI("/tập thể qlv.jpg"),
  hasTextOnImage: false,
  details: {
    deputies: [],
    extraPages: [
      {
        title: "QUẢN LÝ VÙNG",
        items: [
          { img: encodeURI("/images/ảnh nhân sự/c36c2549b912de31f2ee7b038e17379c516c6727.jpg"), name: "Đồng chí Lê Đình Giáp", role: "Quản lý vùng" },
          { img: encodeURI("/images/ảnh nhân sự/3452289c633053c6b3fe745eaf2f7d5a099f94c4.jpg"), name: "Đồng chí Phạm Duy Phố", role: "Quản lý vùng" },
          { img: encodeURI("/images/ảnh nhân sự/92cde5e665f12890cab6b4bdf78b5017dbc0d33c.jpg"), name: "Đồng chí Nguyễn Đại Khiêm", role: "Quản lý vùng" }
        ]
      },
      {
        title: "QUẢN LÝ VÙNG",
        items: [
          { img: encodeURI("/images/ảnh nhân sự/34bb5189995efad634242857370b4bbc6ee11e4d.jpg"), name: "Đồng chí Đinh Hồng Quân", role: "Quản lý vùng" },
          { img: encodeURI("/images/ảnh nhân sự/b4bc0e5e5ca76b372afd88e8ae520dc8e9d35114.jpg"), name: "Đồng chí Quách Thị Thuý", role: "Quản lý vùng" },
          { img: encodeURI("/images/ảnh nhân sự/22d31805f85f7a992ea00cf54ab3553fc50aa129.jpg"), name: "Đồng chí Phạm Đình Phong", role: "Quản lý vùng" }
        ]
      },
      {
        title: "QUẢN LÝ VÙNG",
        items: [
          { img: encodeURI("/images/ảnh nhân sự/064a53ee4386709bb10fb44a62cf4c361b9f57ae.jpg"), name: "Đồng chí Nguyễn Xuân Thuỳ", role: "Quản lý vùng" },
          { img: encodeURI("/images/ảnh nhân sự/b4114357a0d12811dd38ad78d948a5f7c0b25f57.jpg"), name: "Đồng chí Lê Thế Công", role: "Quản lý vùng" },
          { img: encodeURI("/images/ảnh nhân sự/fa04ec1e9e02ec16e305122e9a88b52d79cbe903.jpg"), name: "Đồng chí Nguyễn Công Hưởng", role: "Quản lý vùng" }
        ]
      },
      {
        title: "QUẢN LÝ VÙNG",
        items: [
          { img: encodeURI("/images/ảnh nhân sự/b507b621cf655996ecd369b151d16ffb69b66ef9.jpg"), name: "Đồng chí Phạm Minh Khánh", role: "Quản lý vùng" },
          { img: encodeURI("/images/ảnh nhân sự/c9baf5fce77b0830df0d30ea3b68db90aad27746.jpg"), name: "Đồng chí Vũ Mạnh Tiến", role: "Quản lý vùng" },
          { img: encodeURI("/images/ảnh nhân sự/2e9ffe8e2df08ab9c8ac1336a310393054c14541.jpg"), name: "Đồng chí Trịnh Xuân Hạnh", role: "Quản lý vùng" }
        ]
      },
      {
        title: "QUẢN LÝ VÙNG",
        items: [
          { img: encodeURI("/images/ảnh nhân sự/1.jpg"), name: "Đồng chí Trương Công Luân", role: "Quản lý vùng" },
          { img: encodeURI("/images/ảnh nhân sự/2.jpg"), name: "Đồng chí Phan Minh Hải", role: "Quản lý vùng" },
          { img: encodeURI("/images/ảnh nhân sự/3.jpg"), name: "Đồng chí Trương Minh Sang", role: "Quản lý vùng" }
        ]
      },
      {
        title: "QUẢN LÝ VÙNG",
        items: [
          { img: encodeURI("/images/ảnh nhân sự/4.jpg"), name: "Đồng chí Diệp Nghĩa Trọng", role: "Quản lý vùng" },
          { img: encodeURI("/images/ảnh nhân sự/5.jpg"), name: "Đồng chí Trần Quốc Việt", role: "Quản lý vùng" },
          { img: encodeURI("/images/ảnh nhân sự/6.png"), name: "Đồng chí Đoàn Anh Thao", role: "Quản lý vùng" }
        ]
      }
    ]
  }
};

export const partyGroups: Department[] = [
  {
    name: "Đảng bộ bộ phận và Chi bộ",
    img: "/images/dangbophanvachibo/anhmain.jpg",
    hasTextOnImage: true,
    details: {
      useStaggeredOnMain: true,
      mainItems: [
        { img: "/images/dangbophanvachibo/anhmain.jpg", name: "", role: "" },
        { img: "/images/dangbophanvachibo/anh2.jpg", name: "", role: "" },
        { img: "/images/dangbophanvachibo/anh3.jpg", name: "Đảng bộ bộ phận Trung tâm bán lẻ", role: "" },
        { img: "/images/dangbophanvachibo/anh4.jpg", name: "Chi bộ khối kinh doanh", role: "", objectPosition: "30% center" },
        { img: "/images/dangbophanvachibo/anh5.jpg", name: "Chi bộ khối Dịch vụ Khách hàng", role: "" },
        { img: "/images/dangbophanvachibo/anh6.jpg", name: "Chi bộ khối Đảm bảo", role: "", scale: 1.05 }
      ],
      group: { name: "Đảng bộ bộ phận và Chi bộ", subName: "Viettel Store", img: "/images/dangbophanvachibo/anhmain.jpg" },
      deputies: [],
      extraPages: [
        {
          layout: "collage-staggered-4",
          items: [
            { img: "/images/dangbophanvachibo/anh7.jpg", name: "", role: "" },
            { img: "/images/dangbophanvachibo/anh8.jpg", name: "", role: "" },
            { img: "/images/dangbophanvachibo/anh9.jpg", name: "", role: "" },
            { img: "/images/dangbophanvachibo/anh10.jpg", name: "", role: "" }
          ]
        }
      ]
    }
  },
  {
    name: "Công đoàn cơ sở thành viên",
    img: "/images/anh_cong_doan/1.jpg",
    hasTextOnImage: true,
    details: {
      use2x2Layout: true,
      mainItems: [
        { img: "/images/anh_cong_doan/1.jpg", name: "", role: "" },
        { img: "/images/anh_cong_doan/2.jpg", name: "", role: "" },
        { img: "/images/anh_cong_doan/3.jpg", name: "", role: "" },
        { img: "/images/anh_cong_doan/4.jpg", name: "", role: "" }
      ],
      group: { name: "Công đoàn cơ sở thành viên", subName: "Viettel Store", img: "/images/anh_cong_doan/1.jpg" },
      deputies: [],
      extraPages: [
        {
          layout: "grid-2x2",
          items: [
            { img: "/images/anh_cong_doan/5.jpg", name: "", role: "" },
            { img: "/images/anh_cong_doan/6.jpg", name: "", role: "", scale: 1.5 },
            { img: "/images/anh_cong_doan/7.jpg", name: "", role: "" },
            { img: "/images/anh_cong_doan/8.jpg", name: "", role: "" }
          ]
        },
        {
          layout: "collage-1-2",
          items: [
            { img: "/images/anh_cong_doan/9.jpg", name: "", role: "" },
            { img: "/images/anh_cong_doan/10.jpg", name: "", role: "" },
            { img: "/images/anh_cong_doan/11.jpg", name: "", role: "" }
          ]
        }
      ]
    }
  },
  {
    name: "Tập thể Chi hội phụ nữ",
    img: "/images/chi_hoi_phu_nu/main.jpg",
    hasTextOnImage: true,
    details: {
      useCollageStaggered4: true,
      mainItems: [
        { img: "/images/chi_hoi_phu_nu/4.jpg", name: "", role: "", objectFit: "fill", scaleX: 1.3 },
        { img: "/images/chi_hoi_phu_nu/2.jpg", name: "", role: "" },
        { img: "/images/chi_hoi_phu_nu/3.jpg", name: "", role: "" },
        { img: "/images/chi_hoi_phu_nu/main.jpg", name: "", role: "" }
      ],
      group: { name: "Chi hội phụ nữ", subName: "Viettel Store", img: "/images/chi_hoi_phu_nu/main.jpg" },
      deputies: []
    }
  },
  {
    name: "Liên chi đoàn",
    img: "/images/lien_chi_doan/5.jpg",
    hasTextOnImage: true,
    details: {
      use2x2Layout: true,
      mainItems: [
        { img: "/images/lien_chi_doan/1.jpg", name: "", role: "" },
        { img: "/images/lien_chi_doan/2.jpg", name: "", role: "", objectPosition: "center 95%" },
        { img: "/images/lien_chi_doan/3.jpg", name: "", role: "", objectPosition: "center 95%" },
        { img: "/images/lien_chi_doan/4.jpg", name: "", role: "" }
      ],
      group: { name: "Liên chi đoàn", subName: "Viettel Store", img: "/images/lien_chi_doan/5.jpg" },
      deputies: [],
      extraPages: [
        {
          layout: "grid-2x2",
          items: [
            { img: "/images/lien_chi_doan/5.jpg", name: "", role: "", objectPosition: "center 95%" },
            { img: "/images/lien_chi_doan/6.jpg", name: "", role: "" },
            { img: "/images/lien_chi_doan/7.jpg", name: "", role: "" },
            { img: "/images/lien_chi_doan/8.jpg", name: "", role: "" }
          ]
        },
        {
          layout: "grid-2x2",
          items: [
            { img: "/images/lien_chi_doan/1.jpg", name: "", role: "" },
            { img: "/images/lien_chi_doan/2.jpg", name: "", role: "" },
            { img: "/images/lien_chi_doan/3.jpg", name: "", role: "" },
            { img: "/images/lien_chi_doan/4.jpg", name: "", role: "" }
          ]
        }
      ]
    }
  },
];

export const branches: Branch[] = [
  {
    name: "Chi nhánh Bình Dương",
    img: "/images/bình dương.jpg",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đang cập nhật...", role: "Giám đốc Chi nhánh", img: "/images/logo-viettel-store.png" },
      group: { name: "Tập thể Chi nhánh Bình Dương", subName: "Chi nhánh bán lẻ Bình Dương", img: "/images/bình dương.jpg" },
      deputies: [
        { name: "Đang cập nhật...", role: "Phó giám đốc", img: "/images/logo-viettel-store.png" }
      ]
    }
  },
  {
    name: "Chi nhánh Cà Mau",
    img: "/images/logo-viettel-store.png",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đang cập nhật...", role: "Giám đốc Chi nhánh", img: "/images/logo-viettel-store.png" },
      group: { name: "Tập thể Chi nhánh Cà Mau", subName: "Chi nhánh bán lẻ Cà Mau", img: "/images/logo-viettel-store.png" },
      deputies: [
        { name: "Đang cập nhật...", role: "Phó giám đốc", img: "/images/logo-viettel-store.png" }
      ]
    }
  },
  {
    name: "Chi nhánh TP. Hồ Chí Minh",
    img: "/images/logo-viettel-store.png",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đang cập nhật...", role: "Giám đốc Chi nhánh", img: "/images/logo-viettel-store.png" },
      group: { name: "Tập thể Chi nhánh TP. Hồ Chí Minh", subName: "Chi nhánh bán lẻ TP. HCM", img: "/images/logo-viettel-store.png" },
      deputies: [
        { name: "Đang cập nhật...", role: "Phó giám đốc", img: "/images/logo-viettel-store.png" }
      ]
    }
  },
  {
    name: "Chi nhánh Đồng Nai",
    img: "/images/logo-viettel-store.png",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đang cập nhật...", role: "Giám đốc Chi nhánh", img: "/images/logo-viettel-store.png" },
      group: { name: "Tập thể Chi nhánh Đồng Nai", subName: "Chi nhánh bán lẻ Đồng Nai", img: "/images/logo-viettel-store.png" },
      deputy: { name: "Đang cập nhật...", role: "Phó giám đốc", img: "/images/logo-viettel-store.png" }
    }
  },
  {
    name: "Chi nhánh Long An",
    img: "/images/logo-viettel-store.png",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đang cập nhật...", role: "Giám đốc Chi nhánh", img: "/images/logo-viettel-store.png" },
      group: { name: "Tập thể Chi nhánh Long An", subName: "Chi nhánh bán lẻ Long An", img: "/images/logo-viettel-store.png" },
      deputy: { name: "Đang cập nhật...", role: "Phó giám đốc", img: "/images/logo-viettel-store.png" }
    }
  },
  {
    name: "Chi nhánh Tiền Giang",
    img: "/images/logo-viettel-store.png",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đang cập nhật...", role: "Giám đốc Chi nhánh", img: "/images/logo-viettel-store.png" },
      group: { name: "Tập thể Chi nhánh Tiền Giang", subName: "Chi nhánh bán lẻ Tiền Giang", img: "/images/logo-viettel-store.png" },
      deputy: { name: "Đang cập nhật...", role: "Phó giám đốc", img: "/images/logo-viettel-store.png" }
    }
  },
  {
    name: "Chi nhánh Vũng Tàu",
    img: "/images/logo-viettel-store.png",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đang cập nhật...", role: "Giám đốc Chi nhánh", img: "/images/logo-viettel-store.png" },
      group: { name: "Tập thể Chi nhánh Vũng Tàu", subName: "Chi nhánh bán lẻ Vũng Tàu", img: "/images/logo-viettel-store.png" },
      deputy: { name: "Đang cập nhật...", role: "Phó giám đốc", img: "/images/logo-viettel-store.png" }
    }
  },
  {
    name: "Chi nhánh Cần Thơ",
    img: "/images/logo-viettel-store.png",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đang cập nhật...", role: "Giám đốc Chi nhánh", img: "/images/logo-viettel-store.png" },
      group: { name: "Tập thể Chi nhánh Cần Thơ", subName: "Chi nhánh bán lẻ Cần Thơ", img: "/images/logo-viettel-store.png" },
      deputy: { name: "Đang cập nhật...", role: "Phó giám đốc", img: "/images/logo-viettel-store.png" }
    }
  },
];

export const provinces: Province[] = [

  {
    name: "TUYÊN QUANG",
    map: encodeURI("/images/provinces/tuyen_quang_thumb.png"),
    mapWithText: encodeURI("/images/provinces/tuyen_quang_thumb chữ.png"),
    stores: [
      { id: "TQG01", img: "/images/hethongsieuthi/tuyenquang/tqg01.jpg", objectPosition: "center 100%", scale: 1.1, translateX: "-5%" },
      { id: "TQG02", img: "/images/hethongsieuthi/tuyenquang/tqg02.jpg", objectPosition: "center 55%", scale: 1.2, translateX: "-4%" },
      { id: "TQG03", img: "/images/hethongsieuthi/tuyenquang/tqg03.jpg", objectPosition: "center 90%" },
      { id: "TQG04", img: "/images/hethongsieuthi/tuyenquang/tqg04.jpg" },
      { id: "TQG05", img: "/images/hethongsieuthi/tuyenquang/tqg05.jpg" },
    ]
  },
  {
    name: "CAO BẰNG",
    map: encodeURI("/images/provinces/cao bằng.png"),
    mapWithText: encodeURI("/images/provinces/cao bằng chữ.png"),
    stores: [
      { id: "CBG01", img: "/images/hethongsieuthi/caobang/caobang-1.jpg" },
      { id: "CBG02", img: "/images/hethongsieuthi/caobang/caobang-2.jpg" },
      { id: "CBG03", img: "/images/hethongsieuthi/caobang/caobang-3.jpg", objectPosition: "center 20%" },
    ]
  },
  {
    name: "LAI CHÂU",
    map: encodeURI("/images/provinces/lai_chau_thumb.png"),
    mapWithText: encodeURI("/images/provinces/lai_chau_thumb chữ.png"),
    stores: [
      { id: "LCU01", img: "/images/hethongsieuthi/laichau/laichau-1.jpg" },
    ]
  },
  {
    name: "LÀO CAI",
    map: encodeURI("/images/provinces/lao_cai_thumb.png"),
    mapWithText: encodeURI("/images/provinces/lao_cai_thumb chữ 2.png"),
    stores: [
      { id: "LCI01", img: "/images/hethongsieuthi/laocai/laocai-1.jpg" },
      { id: "LCI02", img: "/images/hethongsieuthi/laocai/laocai-2.jpg" },
      { id: "LCI03", img: "/images/hethongsieuthi/laocai/laocai-3.jpg", objectPosition: "center 30%" },
      { id: "LCI04", img: "/images/hethongsieuthi/laocai/laocai-4.jpg" },
      { id: "LCI05", img: "/images/hethongsieuthi/laocai/laocai-5.jpg" },
      { id: "LCI06", img: "/images/hethongsieuthi/laocai/laocai-6.jpg", objectPosition: "center 60%" },
    ]
  },
  {
    name: "THÁI NGUYÊN",
    map: encodeURI("/images/provinces/thai_nguyen_thumb.png"),
    mapWithText: encodeURI("/images/provinces/thai_nguyen_thumb chữ.png"),
    stores: [
      { id: "TNN01", img: "/images/hethongsieuthi/thainguyen/thainguyen-1.jpg" },
      { id: "TNN02", img: "/images/hethongsieuthi/thainguyen/thainguyen-2.jpg" },
      { id: "TNN03", img: "/images/hethongsieuthi/thainguyen/thainguyen-3.jpg" },
      { id: "TNN04", img: "/images/hethongsieuthi/thainguyen/thainguyen-4.jpg" },
      { id: "TNN05", img: "/images/hethongsieuthi/thainguyen/thainguyen-5.jpg" },
      { id: "TNN06", img: "/images/hethongsieuthi/thainguyen/thainguyen-6.jpg" },
      { id: "TNN07", img: "/images/hethongsieuthi/thainguyen/thainguyen-7.jpg", objectPosition: "center 5%" },
      { id: "TNN08", img: "/images/hethongsieuthi/thainguyen/thainguyen-8.jpg" },
      { id: "TNN09", img: "/images/hethongsieuthi/thainguyen/thainguyen-9.jpg", objectPosition: "center 40%" },
      { id: "TNN10", img: "/images/hethongsieuthi/thainguyen/thainguyen-10.jpg" },
    ]
  },
  {
    name: "ĐIỆN BIÊN",
    map: encodeURI("/images/provinces/điện biên.png"),
    mapWithText: encodeURI("/images/provinces/điện biên chữ.png"),
    stores: [
      { id: "DBN01", img: "/images/hethongsieuthi/dienbien/dienbien-1.jpg", objectPosition: "center 30%" },
      { id: "DBN02", img: "/images/hethongsieuthi/dienbien/dienbien-2.jpg", objectPosition: "center 45%" },
    ]
  },
  {
    name: "LẠNG SƠN",
    map: encodeURI("/images/provinces/lang_son_thumb.png"),
    mapWithText: encodeURI("/images/provinces/lang_son_thumb chữ.png"),
    stores: [
      { id: "LSN01", img: "/images/hethongsieuthi/langson/langson-2.jpg" },
      { id: "LSN02", img: "/images/hethongsieuthi/langson/langson-1.jpg", objectPosition: "center 40%" },
    ]
  },
  {
    name: "SƠN LA",
    map: encodeURI("/images/provinces/son_la_thumb.png"),
    mapWithText: encodeURI("/images/provinces/son_la_thumb chữ.png"),
    stores: [
      { id: "SLA01", img: "/images/hethongsieuthi/sonla/sonla-3.jpg", objectPosition: "center 85%" },
      { id: "SLA02", img: "/images/hethongsieuthi/sonla/sonla-1.jpg", objectPosition: "center 85%", scale: "scale-140" },
      { id: "SLA03", img: "/images/hethongsieuthi/sonla/sonla-4.jpg" },
      { id: "SLA04", img: "/images/hethongsieuthi/sonla/sonla-2.jpg", scale: "scale-150", objectPosition: "center 60%" },
    ]
  },
  {
    name: "PHÚ THỌ",
    map: encodeURI("/images/provinces/phu_tho_thumb.png"),
    mapWithText: encodeURI("/images/provinces/phu_tho_thumb chữ.png"),
    stores: [
      { id: "PTO01", img: "/images/hethongsieuthi/phutho/pt001.jpg" },
      { id: "PTO02", img: "/images/hethongsieuthi/phutho/pt002.jpg" },
      { id: "PTO03", img: "/images/hethongsieuthi/phutho/pt003.jpg" },
      { id: "PTO04", img: "/images/hethongsieuthi/phutho/pt004.jpg", objectPosition: "center 30%" },
      { id: "PTO05", img: "/images/hethongsieuthi/phutho/pt005.jpg", scale: "scale-120", objectPosition: "60% center" },
      { id: "PTO06", img: "/images/hethongsieuthi/phutho/pt006.jpg" },
      { id: "PTO07", img: "/images/hethongsieuthi/phutho/pt007.jpg" },
      { id: "PTO08", img: "/images/hethongsieuthi/phutho/pt008.png" },
      { id: "PTO10", img: "/images/hethongsieuthi/phutho/pt010.jpg", objectPosition: "center 80%" },
      { id: "PTO11", img: "/images/hethongsieuthi/phutho/pt011.jpg", objectPosition: "center 80%" },
      { id: "PTO12", img: "/images/hethongsieuthi/phutho/pt012.jpg" },
      { id: "PTO13", img: "/images/hethongsieuthi/phutho/pt013.jpg" },
      { id: "PTO14", img: "/images/hethongsieuthi/phutho/pt014.jpg", objectPosition: "center 80%" },
      { id: "PTO15", img: "/images/hethongsieuthi/phutho/pt015.jpg" },
      { id: "PTO16", img: "/images/hethongsieuthi/phutho/pt016.jpg" },
      { id: "PTO17", img: "/images/hethongsieuthi/phutho/pt017.jpg" },
      { id: "PTO18", img: "/images/hethongsieuthi/phutho/pt018.jpg", objectPosition: "center 20%" },
      { id: "PTO19", img: "/images/hethongsieuthi/phutho/pt019.jpg" },
      { id: "PTO20", img: "/images/hethongsieuthi/phutho/pt020.jpg", objectPosition: "center 80%" },
      { id: "PTO21", img: "/images/hethongsieuthi/phutho/pt021.jpg" },
      { id: "PTO22", img: "/images/hethongsieuthi/phutho/pt022.jpg", objectPosition: "center 60%" },
      { id: "PTO-CH01", img: "/images/hethongsieuthi/phutho/pto-ch01.jpg", objectPosition: "center 80%" },
      { id: "PTO-CH02", img: "/images/hethongsieuthi/phutho/pto-ch2.jpg" },
    ]
  },
  {
    name: "BẮC NINH",
    map: encodeURI("/images/provinces/bắc nih.png"),
    mapWithText: encodeURI("/images/provinces/bắc nih chữ.png"),
    stores: [
      { id: "BNH01", img: "/images/hethongsieuthi/bacninh/bnh01.jpg" },
      { id: "BNH02", img: "/images/hethongsieuthi/bacninh/bnh02.jpg", objectPosition: "center 30%" },
      { id: "BNH03", img: "/images/hethongsieuthi/bacninh/bnh03.jpg" },
      { id: "BNH04", img: "/images/hethongsieuthi/bacninh/bnh04.jpg", scale: "scale-[1.5]", objectPosition: "center 80%" },
      { id: "BNH05", img: "/images/hethongsieuthi/bacninh/bnh05.jpg" },
      { id: "BNH06", img: "/images/hethongsieuthi/bacninh/bnh06.jpg", scale: "scale-110" },
      { id: "BNH07", img: "/images/hethongsieuthi/bacninh/bnh07.jpg" },
      { id: "BNH08", img: "/images/hethongsieuthi/bacninh/bnh08.jpg" },
      { id: "BNH09", img: "/images/hethongsieuthi/bacninh/bnh09.jpg", objectPosition: "center 80%" },
      { id: "BNH10", img: "/images/hethongsieuthi/bacninh/bnh10.jpg", objectPosition: "center 90%" },
      { id: "BNH11", img: "/images/hethongsieuthi/bacninh/bnh11.jpg", objectPosition: "42% center", scale: "scale-[1.2]" },
      { id: "BNH12", img: "/images/hethongsieuthi/bacninh/bnh12.jpg", objectPosition: "center 70%" },
      { id: "BNH-CH01", img: "/images/hethongsieuthi/bacninh/bnh-ch01.jpg", objectPosition: "center 70%" },
    ]
  },
  {
    name: "QUẢNG NINH",
    map: encodeURI("/images/provinces/quang_ninh_thumb.png"),
    mapWithText: encodeURI("/images/provinces/quang_ninh_thumb chữ.png"),
    stores: [
      { id: "QNH01", img: "/images/hethongsieuthi/quangninh/qnh01.jpg" },
      { id: "QNH02", img: "/images/hethongsieuthi/quangninh/qnh02.jpg" },
      { id: "QNH03", img: "/images/hethongsieuthi/quangninh/qnh03.jpg", objectPosition: "center 25%", scale: "scale-100" },
      { id: "QNH04", img: "/images/hethongsieuthi/quangninh/qnh04.jpg", objectPosition: "center 80%" },
      { id: "QNH05", img: "/images/hethongsieuthi/quangninh/qnh05.jpg" },
      { id: "QNH06", img: "/images/hethongsieuthi/quangninh/qnh06.jpg" },
      { id: "QNH07", img: "/images/hethongsieuthi/quangninh/qnh07.jpg", objectPosition: "center 70%" },
      { id: "QNH08", img: "/images/hethongsieuthi/quangninh/qnh08.jpg", objectPosition: "center 40%" },
      { id: "QNH09", img: "/images/hethongsieuthi/quangninh/qnh09.jpg", objectPosition: "center 40%" },
      { id: "QNH-CH01", img: "/images/hethongsieuthi/quangninh/ch-01.jpg" },
    ]
  },
  {
    name: "TP. HÀ NỘI",
    map: encodeURI("/images/provinces/hà nội.png"),
    mapWithText: encodeURI("/images/provinces/hà nội chữ.png"),
    stores: [
      { id: "HNI01", img: "/images/hethongsieuthi/hanoi/hni01.jpg" },
      { id: "HNI02", img: "/images/hethongsieuthi/hanoi/hni02.jpg", scale: "scale-[1.6]", objectPosition: "center 90%" },
      { id: "HNI03", img: "/images/hethongsieuthi/hanoi/hni03.jpg", objectPosition: "center 70%" },
      { id: "HNI04", img: "/images/hethongsieuthi/hanoi/hni04.jpg", objectPosition: "center 40%" },
      { id: "HNI05", img: "/images/hethongsieuthi/hanoi/hni05.jpg" },
      { id: "HNI06", img: "/images/hethongsieuthi/hanoi/hni06.jpg", objectPosition: "center 30%" },
      { id: "HNI07", img: "/images/hethongsieuthi/hanoi/hni07.jpg", objectPosition: "center 20%" },
      { id: "HNI08", img: "/images/hethongsieuthi/hanoi/hni08.jpg", objectPosition: "center 70%" },
      { id: "HNI09", img: "/images/hethongsieuthi/hanoi/hni09.jpg" },
      { id: "HNI10", img: "/images/hethongsieuthi/hanoi/hni010.jpg" },
      { id: "HNI11", img: "/images/hethongsieuthi/hanoi/hni011.jpg" },
      { id: "HNI12", img: "/images/hethongsieuthi/hanoi/hni012.jpg" },
      { id: "HNI13", img: "/images/hethongsieuthi/hanoi/hni013.jpg" },
      { id: "HNI14", img: "/images/hethongsieuthi/hanoi/hni014.jpg" },
      { id: "HNI15", img: "/images/hethongsieuthi/hanoi/hni015.jpg", objectPosition: "center 60%" },
      { id: "HNI16", img: "/images/hethongsieuthi/hanoi/hni016.jpg" },
      { id: "HNI17", img: "/images/hethongsieuthi/hanoi/hni017.jpg", objectPosition: "center 20%" },
      { id: "HNI18", img: "/images/hethongsieuthi/hanoi/hni018.png" },
      { id: "HNI19", img: "/images/hethongsieuthi/hanoi/hni019.jpg" },
      { id: "HNI21", img: "/images/hethongsieuthi/hanoi/hni021.jpg" },
      { id: "HNI22", img: "/images/hethongsieuthi/hanoi/hni022.jpg" },
      { id: "HNI23", img: "/images/hethongsieuthi/hanoi/hni023.jpg" },
      { id: "HNI24", img: "/images/hethongsieuthi/hanoi/hni024.jpg", scale: "scale-[1.4]" },
      { id: "HNI25", img: "/images/hethongsieuthi/hanoi/hni025.jpg", objectPosition: "center 40%" },
      { id: "HNI26", img: "/images/hethongsieuthi/hanoi/hni026.jpg", scale: "scale-[1.4]" },
      { id: "HNI27", img: "/images/hethongsieuthi/hanoi/hni-ch027.jpg", scale: "scale-[1.2]", objectPosition: "center 45%" },
      { id: "HNI28", img: "/images/hethongsieuthi/hanoi/hni028.jpg" },
      { id: "HNI-CH01", img: "/images/hethongsieuthi/hanoi/hni-ch01.png", objectPosition: "center 30%" },
      { id: "HNI-CH02", img: "/images/hethongsieuthi/hanoi/hni-ch02.jpg", objectPosition: "center 40%" },
      { id: "HNI-CH03", img: "/images/hethongsieuthi/hanoi/hni-ch03.jpg" },
      { id: "HNI-CH04", img: "/images/hethongsieuthi/hanoi/hni-ch04.jpg", objectPosition: "center 10%" },
      { id: "HNI-CH06", img: "/images/hethongsieuthi/hanoi/hni-ch06.jpg" },
      { id: "HNI-CH07", img: "/images/hethongsieuthi/hanoi/hni-ch07.jpg" },
      { id: "HNI-CH11", img: "/images/hethongsieuthi/hanoi/hni-ch011.jpg", objectPosition: "center 40%" },
      { id: "HNI-CH12", img: "/images/hethongsieuthi/hanoi/hni-ch012.jpg" },
      { id: "HNI-CH13", img: "/images/hethongsieuthi/hanoi/hni-ch013.jpg", objectPosition: "center 70%" },
      { id: "HNI-CH14", img: "/images/hethongsieuthi/hanoi/hni-ch014.jpg", objectPosition: "center 40%" },
      { id: "HNI-CH16", img: "/images/hethongsieuthi/hanoi/hni-ch016.jpg", objectPosition: "center 40%" },
      { id: "HNI-CH19", img: "/images/hethongsieuthi/hanoi/hni-ch019.jpg" },
    ]
  },
  {
    name: "TP. HẢI PHÒNG",
    map: encodeURI("/images/provinces/hải phòng.png"),
    mapWithText: encodeURI("/images/provinces/hải phòng chữ.png"),
    stores: [
      { id: "HPG01", img: "/images/hethongsieuthi/haiphong/hpg01.jpg", objectPosition: "center 70%" },
      { id: "HPG02", img: "/images/hethongsieuthi/haiphong/hpg02.jpg" },
      { id: "HPG03", img: "/images/hethongsieuthi/haiphong/hpg03.jpg" },
      { id: "HPG04", img: "/images/hethongsieuthi/haiphong/hpg04.jpg", objectPosition: "center 80%" },
      { id: "HPG05", img: "/images/hethongsieuthi/haiphong/hpg05.jpg" },
      { id: "HPG06", img: "/images/hethongsieuthi/haiphong/hpg06.jpg", objectPosition: "center 20%" },
      { id: "HPG07", img: "/images/hethongsieuthi/haiphong/hpg07.jpg" },
      { id: "HPG08", img: "/images/hethongsieuthi/haiphong/hpg08.jpg" },
      { id: "HPG09", img: "/images/hethongsieuthi/haiphong/hpg09.jpg" },
      { id: "HPG10", img: "/images/hethongsieuthi/haiphong/hpg10.jpg", objectPosition: "center 30%" },
      { id: "HPG11", img: "/images/hethongsieuthi/haiphong/hpg11.jpg" },
      { id: "HPG12", img: "/images/hethongsieuthi/haiphong/hpg12.jpg" },
      { id: "HPG13", img: "/images/hethongsieuthi/haiphong/hpg13.jpg", objectPosition: "center 70%" },
      { id: "HPG14", img: "/images/hethongsieuthi/haiphong/hpg14.jpg", objectPosition: "center 30%" },
    ]
  },
  {
    name: "HƯNG YÊN",
    map: encodeURI("/images/provinces/hung_yen_thumb.png"),
    mapWithText: encodeURI("/images/provinces/hung_yen_thumb chữ.png"),
    stores: [
      { id: "HYN01", img: "/images/hethongsieuthi/hungyen/hyn01.jpg" },
      { id: "HYN02", img: "/images/hethongsieuthi/hungyen/hyn02.jpg", objectPosition: "center 80%" },
      { id: "HYN03", img: "/images/hethongsieuthi/hungyen/hyn03.jpg", objectPosition: "center 80%" },
      { id: "HYN04", img: "/images/hethongsieuthi/hungyen/hyn04.jpg" },
      { id: "HYN05", img: "/images/hethongsieuthi/hungyen/hyn05.jpg" },
      { id: "HYN06", img: "/images/hethongsieuthi/hungyen/hyn06.jpg" },
      { id: "HYN07", img: "/images/hethongsieuthi/hungyen/hyn07.jpg" },
      { id: "HYN08", img: "/images/hethongsieuthi/hungyen/hyn08.jpg", objectPosition: "center 60%" },
      { id: "HYN09", img: "/images/hethongsieuthi/hungyen/hyn09.jpg" },
      { id: "HYN10", img: "/images/hethongsieuthi/hungyen/hyn10.jpg" },
      { id: "HYN11", img: "/images/hethongsieuthi/hungyen/hyn11.jpg" },
      { id: "HYN12", img: "/images/hethongsieuthi/hungyen/hyn12.jpg" },
      { id: "HYN13", img: "/images/hethongsieuthi/hungyen/hyn13.jpg" },
      { id: "HYN-CH01", img: "/images/hethongsieuthi/hungyen/hyn-ch01.jpg", objectPosition: "center 20%" },
    ]
  },
  {
    name: "NINH BÌNH",
    map: encodeURI("/images/provinces/ninh_binh_thumb.png"),
    mapWithText: encodeURI("/images/provinces/ninh_binh_thumb có chữ.png"),
    stores: [
      { id: "NBH01", img: "/images/hethongsieuthi/ninhbinh/nbh01.jpg" },
      { id: "NBH02", img: "/images/hethongsieuthi/ninhbinh/nbh02.jpg" },
      { id: "NBH03", img: "/images/hethongsieuthi/ninhbinh/nbh03.jpg" },
      { id: "NBH04", img: "/images/hethongsieuthi/ninhbinh/nbh04.jpg" },
      { id: "NBH05", img: "/images/hethongsieuthi/ninhbinh/nbh05.jpg", objectPosition: "center 60%" },
      { id: "NBH06", img: "/images/hethongsieuthi/ninhbinh/nbh06.jpg" },
      { id: "NBH07", img: "/images/hethongsieuthi/ninhbinh/nbh07.jpg" },
      { id: "NBH08", img: "/images/hethongsieuthi/ninhbinh/nbh08.jpg", objectPosition: "center 60%" },
      { id: "NBH09", img: "/images/hethongsieuthi/ninhbinh/nbh09.jpg", objectPosition: "center 60%" },
      { id: "NBH10", img: "/images/hethongsieuthi/ninhbinh/nbh10.jpg", objectPosition: "center 30%" },
      { id: "NBH11", img: "/images/hethongsieuthi/ninhbinh/nbh11.jpg", objectPosition: "center 30%" },
      { id: "NBH12", img: "/images/hethongsieuthi/ninhbinh/nbh12.png", objectPosition: "center 10%" },
      { id: "NBH13", img: "/images/hethongsieuthi/ninhbinh/nbh13.jpg", objectPosition: "center 60%" },
    ]
  },
  {
    name: "THANH HOÁ",
    map: encodeURI("/images/provinces/thanh_hoa_thumb.png"),
    mapWithText: encodeURI("/images/provinces/thanh_hoa_thumb chữ.png"),
    stores: [
      { id: "THA01", img: "/images/hethongsieuthi/thanhhoa/tha01.jpg" },
      { id: "THA02", img: "/images/hethongsieuthi/thanhhoa/tha02.jpg", objectPosition: "center 60%" },
      { id: "THA03", img: "/images/hethongsieuthi/thanhhoa/tha03.jpg", objectPosition: "center 60%" },
      { id: "THA04", img: "/images/hethongsieuthi/thanhhoa/tha04.jpg", objectPosition: "center 80%" },
      { id: "THA05", img: "/images/hethongsieuthi/thanhhoa/tha05.jpg", objectPosition: "center 80%" },
      { id: "THA06", img: "/images/hethongsieuthi/thanhhoa/tha06.jpg", objectPosition: "center 40%" },
      { id: "THA07", img: "/images/hethongsieuthi/thanhhoa/tha07.jpg" },
      { id: "THA08", img: "/images/hethongsieuthi/thanhhoa/tha08.jpg", objectPosition: "center 70%" },
      { id: "THA09", img: "/images/hethongsieuthi/thanhhoa/tha09.jpg" },
      { id: "THA-CH01", img: "/images/hethongsieuthi/thanhhoa/tha-ch01.jpg" },
    ]
  },
  {
    name: "NGHỆ AN",
    map: encodeURI("/images/provinces/nghe_an_thumb.png"),
    mapWithText: encodeURI("/images/provinces/nghe_an_thumb chữ.png"),
    stores: [
      { id: "NAN01", img: "/images/hethongsieuthi/nghean/nan01.jpg" },
      { id: "NAN02", img: "/images/hethongsieuthi/nghean/nan02.jpg" },
      { id: "NAN03", img: "/images/hethongsieuthi/nghean/nan03.jpg", objectPosition: "center 60%" },
      { id: "NAN04", img: "/images/hethongsieuthi/nghean/nan04.jpg", objectPosition: "center 20%" },
      { id: "NAN05", img: "/images/hethongsieuthi/nghean/nan05.jpg" },
      { id: "NAN06", img: "/images/hethongsieuthi/nghean/nan06.jpg" },
      { id: "NAN07", img: "/images/hethongsieuthi/nghean/nan07.jpg" },
      { id: "NAN08", img: "/images/hethongsieuthi/nghean/nan08.jpg" },
      { id: "NAN09", img: "/images/hethongsieuthi/nghean/nan09.jpg", objectPosition: "center 70%" },
      { id: "NAN10", img: "/images/hethongsieuthi/nghean/nan10.jpg" },
      { id: "NAN11", img: "/images/hethongsieuthi/nghean/nan11.jpg" },
      { id: "NAN12", img: "/images/hethongsieuthi/nghean/nan12.jpg", objectPosition: "center 10%" },
      { id: "NAN13", img: "/images/hethongsieuthi/nghean/nan13.jpg", scale: "scale-[1.0]" },
      { id: "NAN14", img: "/images/hethongsieuthi/nghean/nan14.jpg" },
    ]
  },
  {
    name: "HÀ TĨNH",
    map: encodeURI("/images/provinces/ha_tinh_thumb.png"),
    mapWithText: encodeURI("/images/provinces/ha_tinh_thumb chữ.png"),
    stores: [
      { id: "HTH01", img: "/images/hethongsieuthi/hatinh/hth01.jpg" },
      { id: "HTH02", img: "/images/hethongsieuthi/hatinh/hth02.jpg", objectPosition: "center 60%" },
      { id: "HTH03", img: "/images/hethongsieuthi/hatinh/hth03.jpg" },
      { id: "HTH04", img: "/images/hethongsieuthi/hatinh/hth04.jpg", objectPosition: "center 60%" },
      { id: "HTH05", img: "/images/hethongsieuthi/hatinh/hth05.jpg", objectPosition: "center 20%" },
      { id: "HTH06", img: "/images/hethongsieuthi/hatinh/hth06.jpg" },
    ]
  },
  {
    name: "QUẢNG TRỊ",
    map: encodeURI("/images/provinces/quang_tri_thumb.png"),
    mapWithText: encodeURI("/images/provinces/quang_tri_thumb chữ.png"),
    stores: [
      { id: "QTI01", img: "/images/hethongsieuthi/quangtri/qti01.jpg" },
      { id: "QTI02", img: "/images/hethongsieuthi/quangtri/qti02.jpg" },
      { id: "QTI03", img: "/images/hethongsieuthi/quangtri/qti03.jpg" },
      { id: "QTI04", img: "/images/hethongsieuthi/quangtri/qti04.jpg", objectPosition: "center 60%" },
      { id: "QTI05", img: "/images/hethongsieuthi/quangtri/qti05.jpg", objectPosition: "center 30%" },
      { id: "QTI06", img: "/images/hethongsieuthi/quangtri/qti06.jpg" },
      { id: "QTI07", img: "/images/hethongsieuthi/quangtri/qti07.jpg" },
      { id: "QTI08", img: "/images/hethongsieuthi/quangtri/qti08.jpg" },
      { id: "QTI-CH01", img: "/images/hethongsieuthi/quangtri/qti-ch01.jpg", objectPosition: "center 60%" },
    ]
  },
  {
    name: "TP. HUẾ",
    map: encodeURI("/images/provinces/huế.png"),
    mapWithText: encodeURI("/images/provinces/huế chữ.png"),
    stores: [
      { id: "HUE01", img: "/images/hethongsieuthi/hue/hue01.jpg" },
      { id: "HUE02", img: "/images/hethongsieuthi/hue/hue02.jpg", objectPosition: "center 25%" },
      { id: "HUE03", img: "/images/hethongsieuthi/hue/hue03.jpg" },
      { id: "HUE-CH01", img: "/images/hethongsieuthi/hue/hue-ch01.jpg", objectPosition: "center 45%" },
    ]
  },
  {
    name: "TP. ĐÀ NẴNG",
    map: encodeURI("/images/provinces/đà nẵng.png"),
    mapWithText: "/images/danang_text3.png",
    stores: [
      { id: "DNG01", img: "/images/hethongsieuthi/danang/dng01.jpg", objectPosition: "center 60%" },
      { id: "DNG02", img: "/images/hethongsieuthi/danang/dng02.jpg", objectPosition: "center 10%" },
      { id: "DNG03", img: "/images/hethongsieuthi/danang/dng03.jpg" },
      { id: "DNG04", img: "/images/hethongsieuthi/danang/dng04.jpg", objectPosition: "center 60%" },
      { id: "DNG05", img: "/images/hethongsieuthi/danang/dng05.jpg", objectPosition: "center 40%" },
      { id: "DNG06", img: "/images/hethongsieuthi/danang/dng06.jpg", objectPosition: "center 60%" },
      { id: "DNG07", img: "/images/hethongsieuthi/danang/dng07.jpg" },
      { id: "DNG08", img: "/images/hethongsieuthi/danang/dng08.jpg", objectPosition: "center 80%" },
      { id: "DNG09", img: "/images/hethongsieuthi/danang/DNG09.jpg" },
      { id: "DNG10", img: "/images/hethongsieuthi/danang/dng10.jpg", objectPosition: "center 60%" },
      { id: "DNG11", img: "/images/hethongsieuthi/danang/dng11.jpg" },
      { id: "DNG-CH01", img: "/images/hethongsieuthi/danang/dng-ch01.jpg", objectPosition: "center 70%" },
      { id: "DNG-CH02", img: "/images/hethongsieuthi/danang/dng-ch02.jpg" },
      { id: "DNG-CH03", img: "/images/hethongsieuthi/danang/dng-ch03.jpg" },
      { id: "DNG-CH04", img: "/images/hethongsieuthi/danang/dng-ch04.jpg" },
    ]
  },
  {
    name: "QUẢNG NGÃI",
    map: encodeURI("/images/provinces/quang_ngai_thumb.png"),
    mapWithText: encodeURI("/images/provinces/quang_ngai_thumb chữ.png"),
    stores: [
      { id: "QNI01", img: "/images/hethongsieuthi/quangngai/QNI01.jpg" },
      { id: "QNI02", img: "/images/hethongsieuthi/quangngai/qni02.jpg", objectPosition: "center 80%" },
      { id: "QNI03", img: "/images/hethongsieuthi/quangngai/qni03.jpg", objectPosition: "center 60%" },
      { id: "QNI04", img: "/images/hethongsieuthi/quangngai/qni04.jpg" },
      { id: "QNI05", img: "/images/hethongsieuthi/quangngai/qni05.jpg" },
      { id: "QNI-CH01", img: "/images/hethongsieuthi/quangngai/qni-ch01.jpg" },
    ]
  },
  {
    name: "GIA LAI",
    map: encodeURI("/images/provinces/gia_lai_thumb.png"),
    mapWithText: encodeURI("/images/provinces/gia_lai_thumb chữ.png"),
    stores: [
      { id: "GLI01", img: "/images/hethongsieuthi/gialai/gli01.jpg", scale: "scale-[1.0]", objectFit: "object-contain" },
      { id: "GLI02", img: "/images/hethongsieuthi/gialai/gli02.jpg" },
      { id: "GLI03", img: "/images/hethongsieuthi/gialai/GLI03.jpg" },
      { id: "GLI04", img: "/images/hethongsieuthi/gialai/gli04.jpg", objectPosition: "center 60%" },
      { id: "GLI05", img: "/images/hethongsieuthi/gialai/GLI05.jpg" },
      { id: "GLI06", img: "/images/hethongsieuthi/gialai/gli06.jpg" },
      { id: "GLI-CH01", img: "/images/hethongsieuthi/gialai/gli-ch01.jpg", objectPosition: "center 20%" },
    ]
  },
  {
    name: "ĐẮK LẮK",
    map: encodeURI("/images/provinces/đắk lắk.png"),
    mapWithText: encodeURI("/images/provinces/đắk lắk chữ.png"),
    stores: [
      { id: "DLK01", img: "/images/hethongsieuthi/daklak/dlk01.png", objectPosition: "center 40%" },
      { id: "DLK02", img: "/images/hethongsieuthi/daklak/dlk02.jpg", objectPosition: "center 60%" },
      { id: "DLK03", img: "/images/hethongsieuthi/daklak/dlk03.jpg", objectPosition: "center 70%" },
      { id: "DLK04", img: "/images/hethongsieuthi/daklak/DLK04.jpg" },
      { id: "DLK05", img: "/images/hethongsieuthi/daklak/dlk05.jpg" },
      { id: "DLK06", img: "/images/hethongsieuthi/daklak/DLK06.jpg", objectPosition: "center 80%" },
      { id: "DLK07", img: "/images/hethongsieuthi/daklak/dlk07.JPG" },
      { id: "DLK09", img: "/images/hethongsieuthi/daklak/dlk09.jpg", objectPosition: "center 60%" },
      { id: "DLK-CH01", img: "/images/hethongsieuthi/daklak/DLK-CH01.jpg", objectPosition: "center 30%" },
    ]
  },
  {
    name: "KHÁNH HOÀ",
    map: encodeURI("/images/provinces/khanh_hoa_thumb.png"),
    mapWithText: "/images/khanhhoa_text3.png",
    stores: [
      { id: "KHA01", img: "/images/hethongsieuthi/khanhhoa/kha01.jpg" },
      { id: "KHA02", img: "/images/hethongsieuthi/khanhhoa/kha02.jpg" },
      { id: "KHA03", img: "/images/hethongsieuthi/khanhhoa/KHA03.jpg", objectPosition: "center 80%" },
      { id: "KHA04", img: "/images/hethongsieuthi/khanhhoa/kha04.jpg" },
      { id: "KHA05", img: "/images/hethongsieuthi/khanhhoa/KHA05.jpg", objectPosition: "center 40%" },
      { id: "KHA06", img: "/images/hethongsieuthi/khanhhoa/KHA06.jpg" },
    ]
  },
  {
    name: "LÂM ĐỒNG",
    map: encodeURI("/images/provinces/lam_dong_thumb.png"),
    mapWithText: encodeURI("/images/provinces/lam_dong_thumb chữ.png"),
    stores: [
      { id: "LDG01", img: "/images/hethongsieuthi/lamdong/ldg01.jpg", objectPosition: "center 60%" },
      { id: "LDG02", img: "/images/hethongsieuthi/lamdong/LDG02.jpg", objectPosition: "center 40%" },
      { id: "LDG03", img: "/images/hethongsieuthi/lamdong/ldg03.jpg" },
      { id: "LDG04", img: "/images/hethongsieuthi/lamdong/LDG04.jpg", objectPosition: "center 30%" },
      { id: "LDG05", img: "/images/hethongsieuthi/lamdong/ldg05.jpg", objectPosition: "center 30%" },
      { id: "LDG06", img: "/images/hethongsieuthi/lamdong/LDG06.jpg", objectPosition: "center 20%" },
      { id: "LDG07", img: "/images/hethongsieuthi/lamdong/LDG07.jpg" },
      { id: "LDG08", img: "/images/hethongsieuthi/lamdong/LDG08.jpg" },
      { id: "LDG09", img: "/images/hethongsieuthi/lamdong/LDG09.jpg", objectPosition: "center 70%" },
      { id: "LDG-CH01", img: "/images/hethongsieuthi/lamdong/ldg-ch01.jpg", objectPosition: "center 30%" },
    ]
  },
  {
    name: "TP. ĐỒNG NAI",
    map: encodeURI("/images/provinces/đồng nai.png"),
    mapWithText: encodeURI("/images/provinces/đồng nai chữ.png"),
    stores: [
      { id: "DNI01", img: "/images/hethongsieuthi/dongnai/dni01.JPG" },
      { id: "DNI02", img: "/images/hethongsieuthi/dongnai/dni02.jpg", objectPosition: "center 60%" },
      { id: "DNI03", img: "/images/hethongsieuthi/dongnai/dni03.jpg", objectPosition: "center 40%" },
      { id: "DNI04", img: "/images/hethongsieuthi/dongnai/dni04.jpg", objectPosition: "center 20%" },
      { id: "DNI05", img: "/images/hethongsieuthi/dongnai/dni05.jpg", objectPosition: "center 20%" },
      { id: "DNI06", img: "/images/hethongsieuthi/dongnai/dni06.png", objectPosition: "center 20%" },
      { id: "DNI07", img: "/images/hethongsieuthi/dongnai/dni07.png" },
      { id: "DNI08", img: "/images/hethongsieuthi/dongnai/dni08.jpeg", objectPosition: "center 80%", scale: 1.2, translateX: "-5%" },
      { id: "DNI09", img: "/images/hethongsieuthi/dongnai/dni09.jpg" },
      { id: "DNI10", img: "/images/hethongsieuthi/dongnai/dni10.jpg" },
      { id: "DNI11", img: "/images/hethongsieuthi/dongnai/dni11.jpg", objectPosition: "center 10%" },
      { id: "DNI12", img: "/images/hethongsieuthi/dongnai/dni12.jpg", objectPosition: "center 80%" },
      { id: "DNI13", img: "/images/hethongsieuthi/dongnai/dni13.jpg" },
      { id: "DNI14", img: "/images/hethongsieuthi/dongnai/dni14.jpg", objectPosition: "center 20%" },
      { id: "DNI15", img: "/images/hethongsieuthi/dongnai/dni15.jpg", objectPosition: "center 20%" },
      { id: "DNI16", img: "/images/hethongsieuthi/dongnai/dni16.jpg" },
      { id: "DNI18", img: "/images/hethongsieuthi/dongnai/dni18.jpg" },
      { id: "DNI19", img: "/images/hethongsieuthi/dongnai/dni19.jpg" },
    ]
  },
  {
    name: "TÂY NINH",
    map: encodeURI("/images/provinces/tay_ninh_thumb.png"),
    mapWithText: encodeURI("/images/provinces/tay_ninh_thumb chữ.png"),
    stores: [
      { id: "TNH01", img: "/images/hethongsieuthi/tayninh/tnh01.jpg", objectPosition: "center 60%" },
      { id: "TNH02", img: "/images/hethongsieuthi/tayninh/tnh02.jpg", objectPosition: "center 40%" },
      { id: "TNH03", img: "/images/hethongsieuthi/tayninh/tnh03.jpg", objectPosition: "center 10%" },
      { id: "TNH04", img: "/images/hethongsieuthi/tayninh/tnh04.jpg", objectPosition: "center 30%" },
      { id: "TNH05", img: "/images/hethongsieuthi/tayninh/tnh05.jpg", objectPosition: "center 5%" },
      { id: "TNH06", img: "/images/hethongsieuthi/tayninh/tnh06.jpg" },
      { id: "TNH07", img: "/images/hethongsieuthi/tayninh/tnh07.jpg", objectPosition: "center 40%" },
      { id: "TNH08", img: "/images/hethongsieuthi/tayninh/tnh08.jpg", objectPosition: "center 30%" },
      { id: "TNH09", img: "/images/hethongsieuthi/tayninh/tnh09.jpg" },
    ]
  },
  {
    name: "TP. HỒ CHÍ MINH",
    map: encodeURI("/images/provinces/sài gòn.png"),
    mapWithText: encodeURI("/images/provinces/sài gòn chữ.png"),
    stores: [
      { id: "HCM01", img: "/images/hethongsieuthi/hcm/hcm01.jpg" },
      { id: "HCM02", img: "/images/hethongsieuthi/hcm/hcm02.jpg", objectPosition: "center 30%" },
      { id: "HCM03", img: "/images/hethongsieuthi/hcm/hcm03.JPG" },
      { id: "HCM04", img: "/images/hethongsieuthi/hcm/hcm04.jpg" },
      { id: "HCM05", img: "/images/hethongsieuthi/hcm/HCM05.jpg", objectPosition: "center 30%" },
      { id: "HCM06", img: "/images/hethongsieuthi/hcm/hcm06.jpg", objectPosition: "center 70%" },
      { id: "HCM07", img: "/images/hethongsieuthi/hcm/hcm07.jpg" },
      { id: "HCM08", img: "/images/hethongsieuthi/hcm/hcm08.jpg", objectPosition: "center 40%" },
      { id: "HCM09", img: "/images/hethongsieuthi/hcm/HCM09.jpg", objectPosition: "center 60%" },
      { id: "HCM10", img: "/images/hethongsieuthi/hcm/hcm10.jpg", objectPosition: "center 30%" },
      { id: "HCM11", img: "/images/hethongsieuthi/hcm/hcm11.jpg", objectPosition: "center 40%" },
      { id: "HCM12", img: "/images/hethongsieuthi/hcm/hcm12.jpg" },
      { id: "HCM13", img: "/images/hethongsieuthi/hcm/hcm13.jpg" },
      { id: "HCM15", img: "/images/hethongsieuthi/hcm/HCM15.jpg" },
      { id: "HCM16", img: "/images/hethongsieuthi/hcm/hcm16.jpg" },
      { id: "HCM18", img: "/images/hethongsieuthi/hcm/hcm18.jpg" },
      { id: "HCM19", img: "/images/hethongsieuthi/hcm/hcm19.jpg" },
      { id: "HCM20", img: "/images/hethongsieuthi/hcm/hcm20.jpg" },
      { id: "HCM21", img: "/images/hethongsieuthi/hcm/hcm21.jpg" },
      { id: "HCM22", img: "/images/hethongsieuthi/hcm/hcm22.jpg", objectPosition: "center 30%" },
      { id: "HCM23", img: "/images/hethongsieuthi/hcm/hcm23.jpg" },
      { id: "HCM24", img: "/images/hethongsieuthi/hcm/hcm24.jpg" },
      { id: "HCM25", img: "/images/hethongsieuthi/hcm/hcm25.jpg" },
      { id: "HCM26", img: "/images/hethongsieuthi/hcm/hcm26.jpg" },
      { id: "HCM27", img: "/images/hethongsieuthi/hcm/hcm27.jpg" },
      { id: "HCM28", img: "/images/hethongsieuthi/hcm/hcm28.jpeg" },
      { id: "HCM29", img: "/images/hethongsieuthi/hcm/hcm29.jpg" },
      { id: "HCM30", img: "/images/hethongsieuthi/hcm/hcm30.jpg" },
      { id: "HCM31", img: "/images/hethongsieuthi/hcm/hcm31.jpg" },
      { id: "HCM32", img: "/images/hethongsieuthi/hcm/hcm32.jpg" },
      { id: "HCM33", img: "/images/hethongsieuthi/hcm/hcm33.jpg" },
      { id: "HCM34", img: "/images/hethongsieuthi/hcm/hcm34.jpg", objectPosition: "center 30%" },
      { id: "HCM35", img: "/images/hethongsieuthi/hcm/hcm35.JPG" },
      { id: "HCM36", img: "/images/hethongsieuthi/hcm/hcm36.jpg" },
      { id: "HCM37", img: "/images/hethongsieuthi/hcm/hcm37.jpg", objectPosition: "center 50%" },
      { id: "HCM38", img: "/images/hethongsieuthi/hcm/hcm38.jpg" },
      { id: "HCM39", img: "/images/hethongsieuthi/hcm/HCM39.jpg" },
      { id: "HCM40", img: "/images/hethongsieuthi/hcm/hcm40.jpg" },
      { id: "HCM41", img: "/images/hethongsieuthi/hcm/hcm41.jpg" },
      { id: "HCM42", img: "/images/hethongsieuthi/hcm/HCM42.jpg" },
      { id: "HCM43", img: "/images/hethongsieuthi/hcm/hcm43.jpg", objectPosition: "center 60%" },
      { id: "HCM44", img: "/images/hethongsieuthi/hcm/hcm44.jpg" },
      { id: "HCM45", img: "/images/hethongsieuthi/hcm/HCM45.jpg" },
      { id: "HCM46", img: "/images/hethongsieuthi/hcm/hcm46.jpg", objectPosition: "center 70%" },
      { id: "HCM47", img: "/images/hethongsieuthi/hcm/hcm47.jpg" },
      { id: "HCM48", img: "/images/hethongsieuthi/hcm/hcm48.jpg" },
      { id: "HCM49", img: "/images/hethongsieuthi/hcm/hcm49.jpg" },
      { id: "HCM50", img: "/images/hethongsieuthi/hcm/HCM50.jpeg", objectPosition: "center 30%" },
      { id: "HCM51", img: "/images/hethongsieuthi/hcm/HCM51.jpg" },
      { id: "HCM53", img: "/images/hethongsieuthi/hcm/hcm53.jpg" },
      { id: "HCM-CH01", img: "/images/hethongsieuthi/hcm/hcm-ch01.jpg" },
      { id: "HCM-CH02", img: "/images/hethongsieuthi/hcm/hcm-ch02.jpg" },
      { id: "HCM-CH04", img: "/images/hethongsieuthi/hcm/hcm-ch04.jpg", objectPosition: "center 30%" },
      { id: "HCM-CH05", img: "/images/hethongsieuthi/hcm/hcm-ch05.jpg", objectPosition: "center 60%" },
      { id: "HCM-CH06", img: "/images/hethongsieuthi/hcm/hcm-ch06.jpg" },
      { id: "HCM-CH08", img: "/images/hethongsieuthi/hcm/hcm-ch08.jpg" },
      { id: "HCM-CH09", img: "/images/hethongsieuthi/hcm/hcm-ch09.jpg", objectPosition: "center 40%" },
      { id: "HCM-CH10", img: "/images/hethongsieuthi/hcm/hcm-ch10.jpg" },
      { id: "HCM-CH11", img: "/images/hethongsieuthi/hcm/hcm-ch11.jpg" },
      { id: "HCM-CH12", img: "/images/hethongsieuthi/hcm/hcm-ch12.jpg", objectPosition: "center 40%" },
      { id: "HCM-CH14", img: "/images/hethongsieuthi/hcm/hcm-ch14.jpg", objectPosition: "center 40%" },
      { id: "HCM-CH15", img: "/images/hethongsieuthi/hcm/hcm-ch15.jpg", objectPosition: "center 30%" },
      { id: "HCM-CH16", img: "/images/hethongsieuthi/hcm/hcm-ch16.jpg", objectPosition: "center 40%" },
      { id: "HCM-CH17", img: "/images/hethongsieuthi/hcm/hcm-ch17.jpg" },
      { id: "HCM-CH18", img: "/images/hethongsieuthi/hcm/hcm-ch18.jpg" },
      { id: "HCM-CH19", img: "/images/hethongsieuthi/hcm/hcm-ch19.jpg", objectPosition: "center 30%" },
      { id: "HCM-CH20", img: "/images/hethongsieuthi/hcm/hcm-ch20.jpg" },
      { id: "HCM-CH21", img: "/images/hethongsieuthi/hcm/hcm-ch21.jpg", objectPosition: "center 20%" },
    ]
  },
  {
    name: "ĐỒNG THÁP",
    map: encodeURI("/images/provinces/dong_thap_thumb.png"),
    mapWithText: encodeURI("/images/provinces/dong_thap_thumb chữ.png"),
    stores: [
      { id: "DTP01", img: "/images/hethongsieuthi/dongthap/dtp01.jpg" },
      { id: "DTP02", img: "/images/hethongsieuthi/dongthap/dtp02.jpg" },
      { id: "DTP03", img: "/images/hethongsieuthi/dongthap/dtp03.jpg" },
      { id: "DTP04", img: "/images/hethongsieuthi/dongthap/dtp04.jpg" },
      { id: "DTP05", img: "/images/hethongsieuthi/dongthap/dtp05.jpg" },
      { id: "DTP06", img: "/images/hethongsieuthi/dongthap/dtp06.jpg", objectPosition: "center 30%" },
      { id: "DTP07", img: "/images/hethongsieuthi/dongthap/dtp07.jpg", objectPosition: "center 30%" },
      { id: "DTP09", img: "/images/hethongsieuthi/dongthap/dtp09.jpg" },
      { id: "DTP-CH01", img: "/images/hethongsieuthi/dongthap/dtp-ch01.jpg" },
    ]
  },
  {
    name: "AN GIANG",
    map: encodeURI("/images/provinces/an giang_.png"),
    mapWithText: encodeURI("/images/provinces/an giang chữ.png"),
    stores: [
      { id: "AGG01", img: "/images/hethongsieuthi/angiang/sthi agg01.jpg" },
      { id: "AGG02", img: "/images/hethongsieuthi/angiang/sthi agg02.jpg" },
      { id: "AGG03", img: "/images/hethongsieuthi/angiang/sthi agg03.jpg" },
      { id: "AGG04", img: "/images/hethongsieuthi/angiang/sthi agg04.jpg" },
      { id: "AGG05", img: "/images/hethongsieuthi/angiang/sthi agg05.jpg" },
      { id: "AGG06", img: "/images/hethongsieuthi/angiang/sthi agg06.jpg", objectPosition: "center 30%" },
      { id: "AGG07", img: "/images/hethongsieuthi/angiang/sthi agg07.jpg" },
      { id: "AGG-CH01", img: "/images/hethongsieuthi/angiang/agg ch01.jpg", objectPosition: "center 30%" },
      { id: "AGG-CH03", img: "/images/hethongsieuthi/angiang/agg ch03.jpg" },
    ]
  },
  {
    name: "VĨNH LONG",
    map: encodeURI("/images/provinces/vinh_long_thumb.png"),
    mapWithText: encodeURI("/images/provinces/vinh_long_thumb chữ.png"),
    stores: [
      { id: "VLG01", img: "/images/hethongsieuthi/vinhlong/vlg01.jpg" },
      { id: "VLG02", img: "/images/hethongsieuthi/vinhlong/vlg02.jpg", objectPosition: "center 40%" },
      { id: "VLG03", img: "/images/hethongsieuthi/vinhlong/vlg03.jpg" },
      { id: "VLG04", img: "/images/hethongsieuthi/vinhlong/vlg04.jpg" },
      { id: "VLG05", img: "/images/hethongsieuthi/vinhlong/vlg05.jpg", objectPosition: "center 35%" },
      { id: "VLG06", img: "/images/hethongsieuthi/vinhlong/vlg06.JPG" },
      { id: "VLG07", img: "/images/hethongsieuthi/vinhlong/vlg07.jpg" },
      { id: "VLG08", img: "/images/hethongsieuthi/vinhlong/vlg08.jpg" },
      { id: "VLG-CH01", img: "/images/hethongsieuthi/vinhlong/ch-vlg01.jpg" },
    ]
  },
  {
    name: "TP. CẦN THƠ",
    map: encodeURI("/images/provinces/cần thơ.png"),
    mapWithText: encodeURI("/images/provinces/cần thơ chữ.png"),
    stores: [
      { id: "CTO01", img: "/images/hethongsieuthi/cto/cto01.jpg" },
      { id: "CTO02", img: "/images/hethongsieuthi/cto/cto02.jpg" },
      { id: "CTO03", img: "/images/hethongsieuthi/cto/cto03.jpg", objectPosition: "center 40%" },
      { id: "CTO04", img: "/images/hethongsieuthi/cto/cto04.jpg", objectPosition: "center 60%" },
      { id: "CTO05", img: "/images/hethongsieuthi/cto/cto05.jpg" },
      { id: "CTO06", img: "/images/hethongsieuthi/cto/CTO06..jpg" },
      { id: "CTO07", img: "/images/hethongsieuthi/cto/cto07.jpg" },
      { id: "CTO08", img: "/images/hethongsieuthi/cto/cto08.jpg" },
      { id: "CTO09", img: "/images/hethongsieuthi/cto/cto09.jpg" },
      { id: "CTO-CH01", img: "/images/hethongsieuthi/cto/ch-cto01.jpg", objectPosition: "center 40%" },
    ]
  },
  {
    name: "CÀ MAU",
    map: encodeURI("/images/provinces/cà mau.png"),
    mapWithText: encodeURI("/images/provinces/cà mau chữ.png"),
    stores: [
      { id: "CMU01", img: "/images/hethongsieuthi/camau/cmu01.jpg" },
      { id: "CMU02", img: "/images/hethongsieuthi/camau/cmu02.jpg", objectPosition: "center 20%" },
      { id: "CMU03", img: "/images/hethongsieuthi/camau/cmu03.jpg", objectPosition: "center 20%" },
      { id: "CMU04", img: "/images/hethongsieuthi/camau/cmu04.JPEG", objectPosition: "center 40%" },
      { id: "CMU05", img: "/images/hethongsieuthi/camau/cmu05.jpg" },
    ]
  },
];

export const formerDirectorsData: FormerDirector[] = [
  {
    name: "Đồng chí Nguyễn Chí Thanh",
    img: "/images/giamdoc/nguyen-chi-thanh.jpg",
    role: "Giám đốc đầu tiên của Trung tâm Viettel Store",
    period: "01/2009 - 06/2012",
    description: (
      <>
        <p className="mb-2 text-[#333333]">Là Giám đốc đầu tiên khi Trung tâm Bán lẻ được thành lập, đồng chí đã có những đóng góp đặt nền móng quan trọng:</p>
        <ul className="space-y-2 text-[#333333]">
          <li>- <strong>Xây dựng hệ thống từ sơ khởi</strong>: Chủ trì việc bàn bạc và đẩy mạnh phát triển chuỗi bán lẻ điện thoại trong bối cảnh thị trường viễn thông bùng&nbsp;nổ.</li>
          <li>- <strong>Học tập và ổn định hệ thống</strong>: Trực tiếp chỉ đạo Ban Giám đốc Trung tâm làm việc cật lực, học hỏi các chuỗi bán lẻ nước ngoài để ổn định tất cả các khâu từ xây dựng cửa hàng, nhập hàng đến điều chuyển hàng hóa và marketing.</li>
          <li>- <strong>Mở rộng quy mô thần tốc</strong>: Dưới sự điều hành của đồng chí, hệ thống đã cán mốc <span className="text-[#EE0033] font-bold">100 siêu thị</span> vào năm 2010 và hoàn thành độ phủ tại <span className="text-[#EE0033] font-bold">63/63 tỉnh, thành phố</span> vào tháng 8/2011.</li>
        </ul>
      </>
    )
  },
  {
    name: "Đồng chí Nguyễn Duy Tuấn",
    img: "/images/giamdoc/nguyen-duy-tuan.jpg",
    role: "Giám đốc Viettel Store",
    period: "06/2012 - 09/2014",
    description: (
      <>
        <p className="mb-2 text-[#333333]">Trong nhiệm kỳ của mình, đồng chí tập trung vào việc chuyên nghiệp hóa và mở rộng kênh bán hàng:</p>
        <ul className="space-y-2 text-[#333333]">
          <li>- <strong>Đẩy mạnh kênh Online</strong>: Bắt đầu đầu tư mạnh cho kênh bán hàng trực tuyến từ quý 2/2012, cử nhân sự chuyên trách truyền thông cho website và triển khai gian hàng trên các thương mại điện tử.</li>
          <li>- <strong>Cải thiện hình ảnh và dịch vụ</strong>: Triển khai chương trình nâng cao hình ảnh siêu thị &quot;5S&quot;, ban hành bộ tài liệu cẩm nang và tổ chức đào tạo trực tiếp cho khối siêu thị.</li>
          <li>- <strong>Tiếp nhận hệ thống cửa hàng</strong>: Chỉ đạo trực tiếp việc tiếp nhận và quản lý tài sản, trang thiết bị của hệ thống <span className="text-[#EE0033] font-bold">807 cửa hàng Viettel</span> điều chuyển từ Viettel Telecom sang.</li>
        </ul>
      </>
    )
  },
  {
    name: "Đồng chí Nguyễn Quang Vinh",
    img: "/images/giamdoc/former-vinh.jpg",
    modalImg: "/images/giamdoc/former-vinh.jpg",
    role: "Quyền Giám đốc Viettel Store",
    period: "10/2014 - 01/2015",
    scale: 1.1,
    objectPosition: "center 40%",
    mobileObjectPosition: "center 30%",
    modalTranslateY: "0px",
    mobileModalObjectPosition: "center 30%",
    modalScale: 1.05,
    description: (
      <>
        <p className="mb-2 text-[#333333]">Đồng chí đã dẫn dắt Trung tâm qua các giai đoạn chuyển dịch chiến lược quan trọng:</p>
        <ul className="space-y-2 text-[#333333]">
          <li>- <strong>Chiến lược &quot;Rộng - Trẻ - Rẻ&quot;</strong>: Xác định định hướng phát triển giai đoạn mới, tập trung vào việc tối ưu nhân lực trẻ và tạo lợi thế cạnh tranh về&nbsp;giá.</li>
          <li>- <strong>Vận hành mô hình BU</strong>: Kiện toàn Trung tâm Bán lẻ thành một Đơn vị kinh doanh độc lập (BU), tự chịu trách nhiệm toàn trình về hiệu quả kinh doanh và hạch toán.</li>
          <li>- <strong>Ứng dụng công nghệ</strong>: Triển khai hệ thống phần mềm quản lý <span className="text-[#EE0033] font-bold">ERP</span> trên toàn quốc và đưa ứng dụng chăm sóc khách hàng vào vận hành.</li>
          <li>- <strong>Xử lý tồn đọng</strong>: Quyết liệt trong việc xử lý dứt điểm hàng tồn xấu cũ và công nợ xấu, giúp hệ thống tài chính &quot;sạch&quot; hơn để phát triển bền&nbsp;vững.</li>
        </ul>
      </>
    )
  },
  {
    name: "Đồng chí Lê Quốc Tuấn",
    img: "/images/giamdoc/le-quoc-tuan.png",
    role: "Giám đốc Viettel Store",
    period: "(01/2015 - 08/2015) và giai đoạn (12/2015 - 05/2018)",
    objectPosition: "center 80%",
    modalImg: "/images/giamdoc/le-quoc-tuan.png",
    modalObjectPosition: "center 80%",
    mobileModalObjectPosition: "center 30%",
    modalScale: 1.15,
    description: (
      <>
        <ul className="space-y-2 text-[#333333]">
          <li>- <strong>Chuyển dịch cơ cấu sản phẩm</strong>: Chỉ đạo chuyển dịch từ bán máy điện thoại đơn thuần sang thiết bị viễn thông và các thiết bị thông minh (Smart Device).</li>
          <li>- <strong>Thay đổi mô hình quản lý</strong>: Chuyển đổi mô hình cấp siêu thị từ Trưởng siêu thị sang <span className="text-[#EE0033] font-bold">Giám đốc siêu thị</span> và áp dụng cơ chế khoán lương toàn diện để tăng tính chủ động.</li>
          <li>- <strong>Nâng cấp nhận diện</strong>: Hoàn thành cải tạo, nâng cấp hình ảnh cho toàn bộ hệ thống siêu thị theo nhận diện mới đồng bộ trên toàn quốc.</li>
        </ul>
      </>
    )
  },
  {
    name: "Đồng chí Phạm Thị Thanh Vân",
    img: "/images/pham-thi-van-v2.png",
    role: "Phó Giám đốc Công ty kiêm Giám đốc Trung tâm Viettel Store",
    period: "09/2015 - 11/2015",
    description: (
      <>
        <p className="text-[#333333]">- Trong thời gian ngắn kiêm nhiệm, đồng chí đã tập trung vào việc đẩy mạnh các chương trình truyền thông khuyến mại lớn, đặc biệt là chiến dịch &quot;Back to School&quot; và các gói bundle dịch vụ viễn thông đi kèm thiết bị.</p>
      </>
    )
  },
  {
    name: "Đồng chí Vũ Tam Hòa",
    img: "/images/giamdoc/vu-tam-hoa.jpg",
    role: "Giám đốc Công ty kiêm Phụ trách Trung tâm Viettel Store",
    period: "05/2018 - 09/2018",
    objectPosition: "center 80%",
    modalTranslateY: "0px",
    mobileModalObjectPosition: "center 30%",
    modalScale: 1.05,
    description: (
      <>
        <p className="mb-2 text-[#333333]">Trên cương vị Giám đốc Công ty kiêm phụ trách Trung tâm, đồng chí đã có những đóng góp trong việc thay đổi tư duy quản trị:</p>
        <ul className="space-y-2 text-[#333333]">
          <li>- <strong>Đối thoại dân chủ</strong>: Tổ chức các buổi hội thảo &quot;Hội nghị Diên hồng&quot; để lắng nghe ý kiến từ nhân viên trực tiếp, tìm ra nguyên nhân yếu kém trong sản xuất kinh doanh.</li>
          <li>- <strong>Tối ưu hóa hệ thống</strong>: Kiên quyết dừng hoạt động các siêu thị lỗ kéo dài, tập trung nguồn lực để tối ưu hóa các vị trí hiện có thay vì mở rộng ồ ạt.</li>
        </ul>
      </>
    )
  },
];
