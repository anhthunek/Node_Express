const {readFileSync, writeFileSync} = require('fs');
const first = readFileSync('./content/subfolder/first.txt', 'utf8')
const second = readFileSync('./content/subfolder/second.txt', 'utf8')
console.log(first);
console.log(second);
/*
'w': Mở tệp để ghi. Nếu tệp không tồn tại, nó sẽ được tạo. Nếu tệp tồn tại, nội dung hiện có sẽ bị ghi đè.
'wx': Mở tệp để ghi. Nếu tệp đã tồn tại, phương thức writeFileSync() sẽ gây ra một lỗi.
'a': Mở tệp để ghi. Nếu tệp không tồn tại, nó sẽ được tạo. Nội dung mới sẽ được ghi vào cuối tệp, không ghi đè nội dung hiện có.
'ax': Mở tệp để ghi. Nếu tệp đã tồn tại, phương thức writeFileSync() sẽ gây ra một lỗi.
*/
writeFileSync('./content/subfolder/result.txt', `Kết quả là: ${first}, ${second}`, {flag: 'a'})
console.log(readFileSync('./content/subfolder/result.txt', 'utf8'));