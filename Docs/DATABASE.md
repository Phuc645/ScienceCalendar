# Thiết kế Cơ sở dữ liệu

Cơ sở dữ liệu của dự án được thiết kế đơn giản để lưu trữ các "fact" khoa học và danh mục của chúng.

## Mô tả các bảng

Mô hình dữ liệu bao gồm hai bảng chính: `FactCategories` và `Facts`.

### Bảng `FactCategories`

Lưu trữ thông tin về các danh mục (chủ đề) của "fact".

| Tên cột            | Kiểu dữ liệu   | Mô tả                            | Ghi chú          |
| ------------------ | -------------- | -------------------------------- | ---------------- |
| `FactCategoryID`   | `SERIAL`       | Khóa chính, tự động tăng.        | **Primary Key**  |
| `FactCategoryName` | `VARCHAR(255)` | Tên của danh mục (VD: "Vật lý"). | Not Null, Unique |
| `CreatedAt`        | `TIMESTAMPTZ`  | Thời gian tạo.                   | `DEFAULT NOW()`  |
| `UpdatedAt`        | `TIMESTAMPTZ` | Thời gian cập nhật lần cuối.              | `DEFAULT NOW()`                                    |

### Bảng `Events`

Lưu trữ thông tin về các ngày lễ, sự kiện đặc biệt (cả lịch dương và lịch âm).

| Tên cột       | Kiểu dữ liệu   | Mô tả                                                          | Ghi chú         |
| -------------- | -------------- | -------------------------------------------------------------- | --------------- |
| `EventID`      | `SERIAL`       | Khóa chính, tự động tăng.                                     | **Primary Key** |
| `EventName`    | `VARCHAR(255)` | Tên sự kiện (VD: "Tết Nguyên Đán").                            | Not Null        |
| `Description`  | `TEXT`         | Mô tả chi tiết về ý nghĩa của sự kiện.                         | Not Null        |
| `Image`        | `VARCHAR(255)` | Đường dẫn đến hình ảnh đại diện cho sự kiện.                   |                 |
| `Date`         | `VARCHAR(10)`  | Ngày và tháng của sự kiện (VD: "01/01" cho lịch âm).           | Not Null        |
| `CalendarType` | `VARCHAR(50)`  | Loại lịch (`gregorian` hoặc `lunar`).                          | Not Null        |
| `CreatedAt`    | `TIMESTAMPTZ`  | Thời gian tạo.                                                 | `DEFAULT NOW()` |
| `UpdatedAt`    | `TIMESTAMPTZ`  | Thời gian cập nhật lần cuối.                                  | `DEFAULT NOW()` |

### Bảng `Facts`

Lưu trữ nội dung chi tiết của từng "fact" khoa học.

| Tên cột          | Kiểu dữ liệu  | Mô tả                                     | Ghi chú                                            |
| ---------------- | ------------- | ----------------------------------------- | -------------------------------------------------- |
| `FactID`         | `SERIAL`      | Khóa chính, tự động tăng.                 | **Primary Key**                                    |
| `FactContent`    | `TEXT`        | Nội dung chi tiết của "fact".             | Not Null                                           |
| `FactCategoryID` | `INTEGER`     | Khóa ngoại liên kết đến `FactCategories`. | **Foreign Key** to `FactCategories.FactCategoryID` |
| `CreatedAt`      | `TIMESTAMPTZ` | Thời gian tạo.                            | `DEFAULT NOW()`                                    |
| `UpdatedAt`      | `TIMESTAMPTZ` | Thời gian cập nhật lần cuối.              | `DEFAULT NOW()`                                    |
