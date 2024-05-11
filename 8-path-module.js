const path = require('path')
//Trong Node.js, module path được sử dụng để xử lý và tạo các đường dẫn file và thư mục trên hệ thống tệp. Module này cung cấp các phương thức để làm việc với các đường dẫn, bao gồm cả việc phân tích, nối và chuẩn hóa đường dẫn.
console.log(path.sep);//xác định dấu phân cách thư mục trong đường dẫn file, tùy thuộc vào hệ điều hành đang chạy.

const filePath = path.join('/content/', 'subfolder', 'test.txt')//Nối các đoạn đường dẫn lại với nhau, tự động sửa các ký tự dấu phân cách đường dẫn phù hợp với nền tảng hệ điều hành.
console.log(filePath);

const base = path.basename(filePath, path.extname(filePath))//Trả về phần cơ bản của tên file hoặc thư mục từ một đường dẫn, có thể loại bỏ phần đuôi mở rộng nếu được chỉ định.
console.log(base);

const resolve = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')// Chuyển các đoạn đường dẫn thành đường dẫn tuyệt đối, dựa trên thư mục làm việc hiện tại.

console.log(resolve);