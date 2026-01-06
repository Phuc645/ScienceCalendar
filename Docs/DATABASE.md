# Thiết kế Cơ sở dữ liệu

Cơ sở dữ liệu của dự án được thiết kế đơn giản để lưu trữ các "fact" khoa học và danh mục của chúng.

## 1. Sơ đồ quan hệ thực thể (ERD)

Mô hình dữ liệu bao gồm hai bảng chính: `FactCategories` và `Facts`.

```

|  FactCategories  |      |      Facts       |
| ----------------- |     | ----------------- |
| FactCategoryID(PK)|     | FactID (PK)      |
| FactCategoryName |      | FactContent      |
| CreatedAt        |      | FactCategoryID(FK)|
| UpdatedAt        |      | CreatedAt        |
| UpdatedAt        |

```

## 2. Mô tả các bảng

### Bảng `FactCategories`

Lưu trữ thông tin về các danh mục (chủ đề) của "fact".

| Tên cột            | Kiểu dữ liệu   | Mô tả                            | Ghi chú          |
| ------------------ | -------------- | -------------------------------- | ---------------- |
| `FactCategoryID`   | `SERIAL`       | Khóa chính, tự động tăng.        | **Primary Key**  |
| `FactCategoryName` | `VARCHAR(255)` | Tên của danh mục (VD: "Vật lý"). | Not Null, Unique |
| `CreatedAt`        | `TIMESTAMPTZ`  | Thời gian tạo.                   | `DEFAULT NOW()`  |
| `UpdatedAt`        | `TIMESTAMPTZ`  | Thời gian cập nhật lần cuối.     | `DEFAULT NOW()`  |

### Bảng `Facts`

Lưu trữ nội dung chi tiết của từng "fact" khoa học.

| Tên cột          | Kiểu dữ liệu  | Mô tả                                     | Ghi chú                                            |
| ---------------- | ------------- | ----------------------------------------- | -------------------------------------------------- |
| `FactID`         | `SERIAL`      | Khóa chính, tự động tăng.                 | **Primary Key**                                    |
| `FactContent`    | `TEXT`        | Nội dung chi tiết của "fact".             | Not Null                                           |
| `FactCategoryID` | `INTEGER`     | Khóa ngoại liên kết đến `FactCategories`. | **Foreign Key** to `FactCategories.FactCategoryID` |
| `CreatedAt`      | `TIMESTAMPTZ` | Thời gian tạo.                            | `DEFAULT NOW()`                                    |
| `UpdatedAt`      | `TIMESTAMPTZ` | Thời gian cập nhật lần cuối.              | `DEFAULT NOW()`                                    |

## 3. Quan hệ

- **Một-Nhiều (One-to-Many):** Một `FactCategory` có thể có nhiều `Facts`. Mối quan hệ này được thể hiện qua khóa ngoại `FactCategoryID` trong bảng `Facts`.
