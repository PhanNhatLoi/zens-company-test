// Mini-Max Sum

// Given five positive integers, find the minimum and maximum values that can be calculated by summing
// exactly four of the five integers. Then print the respective minimum and maximum values as a single line
// of two space-separated long integers.
// For example arr = [1, 3, 5, 7, 9], . Our minimum sum is 1 + 3 + 5 + 7 = 16 and our maximum sum is 3 + 5 + 7 + 9 = 24

// We would print
// 16 24

// // Function Description
// Complete the miniMaxSum function in the editor below. It should print two space-separated integers on
// one line: the minimum sum and the maximum sum of 4 of 5 elements.

// miniMaxSum has the following parameter(s): arr: an array of 5 intergers

// Input format
// A single line of five space-separated intergers

// Output format
// Print two space-separated long integers denoting the respective minimum and maximum values that can
// be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit
// integer.)
// Simple input
// 1 2 3 4 5
// Simple output
// 10 14

const fs = require("fs");

// Đọc dữ liệu từ file input.INP
fs.readFile("./input.INP", "utf8", (err, data) => {
  if (err) {
    console.error("Không đọc được tệp:", err);
    return;
  }

  // Chuyển đổi dữ liệu đọc được thành mảng các số nguyên
  const arr = data.trim().split(" ").map(Number);

  // Khai báo 2 biến là số min và max trả về từ hàm miniMaxSum
  const [minSum, maxSum] = miniMaxSum(arr);

  // Khai báo biến chứa kết quả tổng các phần tử
  const total = totalArray(arr);

  // khai báo biến chứa số nhỏ nhất trong mảng
  const min = minInArray(arr);

  // khai báo biến chứa số lớn nhất trong mảng
  const max = maxInArray(arr);

  // khai báo biến chứa mảng số chẵn trong mảng
  const evens = evenInArray(arr);

  // khai báo biến chứa mảng số lẽ trong mảng
  const odds = oddInArray(arr);

  // Cách tính miniMaxSum 2
  const [minSum2, maxSum2] = miniMaxSum2(arr);

  // Ghi kết quả ra file output.OUT
  fs.writeFile(
    "output.OUT",
    `miniMaxSum: ${minSum} ${maxSum}\ntotal: ${total}\nmin: ${min}\nmax: ${max}\neven elements: ${evens.join(
      " "
    )}\nodd elements: ${odds.join(" ")}\nminiMaxSum2: ${minSum2} ${maxSum2}`,
    "utf8",
    (err) => {
      if (err) {
        console.error("Không thể viết tệp:", err);
        return;
      }
      console.log("Ghi vào tệp thành công.");
    }
  );
});

// function miniMaxSum: sử dụng function
// Xử lý logic cơ bản: Sắp xếp mảng theo tăng dần, tính tổng nhỏ nhất bằng cách đếm tổng của phần tử 0 -> 4.
// Tính tổng lớn nhất bằng cách đến tổng của phần tử 1 -> 5
// kết hợp sử dụng hàm slice (để cắt mảng lấy phần tử 0 - 4 và 1 - 5) cùng hàm reduce để tính tổng qua từng vòng lặp.
function miniMaxSum(arr) {
  // sắp xếp tăng dần
  arr.sort((a, b) => a - b);

  //tính tổng nhỏ nhất
  const minSum = arr.slice(0, 4).reduce((num, curr) => num + curr, 0);

  //tính tổng lớn nhất
  const maxSum = arr.slice(1).reduce((num, curr) => num + curr, 0);

  // trả về kết quả
  return [minSum, maxSum];
}

// Các hàm cho phần Bouns: sử dụng arrow function

// Count total of array
const totalArray = (arr) => {
  if (arr.length === 0) {
    // Trả về 0 nếu mảng rỗng
    return 0;
  }
  return arr.reduce((num, curr) => num + curr, 0);
};

// Find min in array
const minInArray = (arr) => {
  if (arr.length === 0) {
    // Trả về null nếu mảng rỗng
    return null;
  }

  let min;
  // Duyệt qua các phần tử còn lại của mảng
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      min = arr[0];
    } else if (arr[i] < min) {
      // Nếu phần tử thứ i nhỏ hơn min, cập nhật min
      min = arr[i];
    }
  }

  return min; // Trả về số nhỏ nhất
};

// Find max in array
const maxInArray = (arr) => {
  if (arr.length === 0) {
    // Trả về null nếu mảng rỗng
    return null;
  }

  let max;
  // Duyệt qua các phần tử còn lại của mảng
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      max = arr[0];
    } else if (arr[i] > max) {
      // Nếu phần tử thứ i lớn hơn max, cập nhật max
      max = arr[i];
    }
  }

  return max; // Trả về số lớn nhất
};

// Find even elements in array
const evenInArray = (arr) => {
  // Sử dụng phương thức filter để lọc ra các phần tử chẵn
  const evenNumbers = arr.filter((num) => num % 2 === 0);
  return evenNumbers;
};

// Find odd elements in array
const oddInArray = (arr) => {
  // Tương tự bên trên dùng phương thức filter để lọc ra các phần tử lẽ
  const oddNumbers = arr.filter((num) => num % 2 !== 0);
  return oddNumbers;
};

// Ngoài ra dựa vào hàm min và max vừa tạo ra phía trên, ta có thêm một cách để giải bài toàn ban đầu.
// Sử dụng kết hợp hàm filter để filter số max ra min ra trước khi tính tổng ta sẽ tính được tổng lớn nhất và nhỏ nhất từ 4 con số còn lại
// Ưu điểm tận dụng lại các hàm đã được xây dựng để tạo ra hàm mới. Nên sử dụng đối với những bài toán phức tạp cần chia nhỏ thuật toán ra.
const miniMaxSum2 = (arr) => {
  //tính tổng nhỏ nhất (filter số lớn nhất sau đó tính tổng)
  const minSum = arr
    .filter((f) => f !== maxInArray(arr))
    .reduce((num, curr) => num + curr, 0);

  //tính tổng lớn nhất (filter số nhỏ nhất sau đó tính tổng)
  const maxSum = arr
    .filter((f) => f !== minInArray(arr))
    .reduce((num, curr) => num + curr, 0);

  // trả về kết quả
  return [minSum, maxSum];
};
