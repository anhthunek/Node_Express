const os = require ('os')

// current user infor:Trong Node.js, có module os được sử dụng để cung cấp các phương tiện để tương tác với hệ thống máy tính (Operating System - OS). Module này cung cấp các phương thức để lấy thông tin về hệ thống, các tiến trình, môi trường làm việc và nhiều thông tin khác.

/*Dưới đây là một số phương thức phổ biến trong module os:

os.userInfo(): Trả về thông tin về người dùng hiện tại, bao gồm tên người dùng, thư mục home, và UID (User ID).
os.hostname(): Trả về tên máy chủ.
os.platform(): Trả về nền tảng hệ điều hành.
os.totalmem(): Trả về tổng dung lượng bộ nhớ hệ thống (byte).
os.freemem(): Trả về dung lượng bộ nhớ trống (byte).
os.cpus(): Trả về một mảng chứa thông tin về các CPU của hệ thống.*/
const user = os.cpus()
console.log(user);

// method returns uptime in seconds

console.log(`Uptime: ${os.uptime()}`);