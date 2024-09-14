const nums = [1, 2, 3, 5, 7, 9, 10, 11, 13];
const target = 11;

// Linear Search function O(n)
const linearSearch = (nums, target) => {
  let steps = 0;
  for (let i = 0; i < nums.at(-1); i++) {
    steps++;
    if (nums[i] === target) {
      console.log("Steps taken by Linear : " + steps);
      return i;
    }
  }
  console.log("Steps taken by Linear : " + steps);
  return -1;
};

// Binary Search function O(logn)
const binarySearch = (nums, target) => {
  let steps = 0;
  let left = 0;
  let right = nums.at(-1);

  while (left <= right) {
    steps++;
    const mid = Math.floor((left + right) / 2); // Ensuring that mid is an integer

    if (nums[mid] === target) {
      console.log("Steps taken by Binary : " + steps);
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1; // Move the left boundary
    } else {
      right = mid - 1; // Move the right boundary
    }
  }

  console.log("Steps taken by Binary : " + steps);
  return -1;
};

// Recurcive Binary Search function O(logn)
const recursiveBinarySearch = (nums, target, left, right) => {
  let steps = 0;
  // let left = 0;
  // let right = nums.at(-1);

  if (left <= right) {
    const mid = Math.floor((left + right) / 2); // Ensuring that mid is an integer

    if (nums[mid] === target) {
      console.log("Steps taken by Binary : " + steps);
      return mid;
    } else if (nums[mid] < target)
      return binarySearch(
        nums,
        target,
        mid + 1,
        right
      ); // Move the left boundary
    else return binarySearch(nums, target, left, mid - 1); // Move the right boundary
  }

  return -1;
};

// Calling the linear search function
const result1 = linearSearch(nums, target);

if (result1 !== -1) {
  console.log("Element found at Index : " + result1);
} else {
  console.log("Element not found");
}

// Calling the binary search function
const result2 = binarySearch(nums, target);

if (result2 !== -1) {
  console.log("Element found at Index : " + result2);
} else {
  console.log("Element not found");
}

// Calling the recursive binary search function
const result3 = binarySearch(nums, target, 0, nums.at(-1));

if (result3 !== -1) {
  console.log("Element found at Index : " + result3);
} else {
  console.log("Element not found");
}
