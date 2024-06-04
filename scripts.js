// scripts.js
function showCard(cardId) {
  const cards = document.querySelectorAll(".flashcard");
  cards.forEach((card) => (card.style.display = "none"));
  document.getElementById(cardId).style.display = "block";
  const answers = document.getElementById("answers");
  answers.style.display = "block";
}
function closeCard() {
  const answers = document.getElementById("answers");
  answers.style.display = "none";
}

function flipCard(cardId) {
  const card = document.getElementById(cardId);
  card.classList.toggle("show");
}

const interviewQuestions = [
  {
    id: 1,
    name: "Two Sum",
    explanation:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    code: `
function twoSum($nums, $target) {
    $map = [];
    foreach ($nums as $index => $num) {
        $diff = $target - $num;
        if (array_key_exists($diff, $map)) {
            return [$map[$diff], $index];
        }
        $map[$num] = $index;
    }
    return [];
}`,
    solutionExplanation:
      "This solution uses a hash map to store the indices of the numbers and checks for the complement in the map.",
  },
  {
    id: 2,
    name: "Reverse a Linked List",
    explanation: "Reverse a singly linked list.",
    code: `
function reverseList($head) {
    $prev = null;
    $current = $head;
    while ($current !== null) {
        $next = $current->next;
        $current->next = $prev;
        $prev = $current;
        $current = $next;
    }
    return $prev;
}`,
    solutionExplanation:
      "This solution iterates through the list, reversing the pointers one by one.",
  },
  {
    id: 3,
    name: "Merge Two Sorted Lists",
    explanation:
      "Merge two sorted linked lists and return it as a new sorted list.",
    code: `
function mergeTwoLists($l1, $l2) {
    $dummy = new ListNode(0);
    $current = $dummy;
    while ($l1 !== null && $l2 !== null) {
        if ($l1->val <= $l2->val) {
            $current->next = $l1;
            $l1 = $l1->next;
        } else {
            $current->next = $l2;
            $l2 = $l2->next;
        }
        $current = $current->next;
    }
    $current->next = $l1 ?? $l2;
    return $dummy->next;
}`,
    solutionExplanation:
      "This solution uses a dummy node to simplify the merge process and iteratively combines the lists.",
  },
  {
    id: 4,
    name: "Valid Parentheses",
    explanation:
      "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    code: `
function isValid($s) {
    $stack = [];
    $map = ['(' => ')', '[' => ']', '{' => '}'];
    for ($i = 0; $i < strlen($s); $i++) {
        $char = $s[$i];
        if (isset($map[$char])) {
            $stack[] = $char;
        } else {
            if (empty($stack) || $map[array_pop($stack)] != $char) {
                return false;
            }
        }
    }
    return empty($stack);
}`,
    solutionExplanation:
      "This solution uses a stack to match the parentheses and ensure each opening bracket has a corresponding closing bracket.",
  },
  {
    id: 5,
    name: "Remove Duplicates from Sorted Array",
    explanation:
      "Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.",
    code: `
function removeDuplicates(&$nums) {
    if (count($nums) == 0) return 0;
    $i = 0;
    for ($j = 1; $j < count($nums); $j++) {
        if ($nums[$j] != $nums[$i]) {
            $i++;
            $nums[$i] = $nums[$j];
        }
    }
    return $i + 1;
}`,
    solutionExplanation:
      "This solution uses two pointers to iterate through the array and remove duplicates in place.",
  },
  {
    id: 6,
    name: "Maximum Subarray",
    explanation:
      "Given an integer array nums, find the contiguous subarray which has the largest sum and return its sum.",
    code: `
function maxSubArray($nums) {
    $max_so_far = $nums[0];
    $max_ending_here = $nums[0];
    for ($i = 1; $i < count($nums); $i++) {
        $max_ending_here = max($nums[$i], $max_ending_here + $nums[$i]);
        $max_so_far = max($max_so_far, $max_ending_here);
    }
    return $max_so_far;
}`,
    solutionExplanation:
      "This solution uses Kadane's algorithm to find the maximum subarray sum in linear time.",
  },
  {
    id: 7,
    name: "Climbing Stairs",
    explanation:
      "Given n, how many distinct ways can you climb to the top if you can climb 1 or 2 steps at a time?",
    code: `
function climbStairs($n) {
    if ($n == 1) return 1;
    $dp = [1, 2];
    for ($i = 2; $i < $n; $i++) {
        $dp[$i] = $dp[$i - 1] + $dp[$i - 2];
    }
    return $dp[$n - 1];
}`,
    solutionExplanation:
      "This solution uses dynamic programming to find the number of distinct ways to climb the stairs.",
  },
  {
    id: 8,
    name: "Best Time to Buy and Sell Stock",
    explanation:
      "Given an array prices where prices[i] is the price of a given stock on the ith day, find the maximum profit you can achieve.",
    code: `
function maxProfit($prices) {
    $min_price = PHP_INT_MAX;
    $max_profit = 0;
    foreach ($prices as $price) {
        $min_price = min($min_price, $price);
        $max_profit = max($max_profit, $price - $min_price);
    }
    return $max_profit;
}`,
    solutionExplanation:
      "This solution iterates through the prices, keeping track of the minimum price and the maximum profit.",
  },
  {
    id: 9,
    name: "Binary Tree Inorder Traversal",
    explanation:
      "Given a binary tree, return the inorder traversal of its nodes' values.",
    code: `
function inorderTraversal($root) {
    $result = [];
    $stack = [];
    $current = $root;
    while ($current !== null || !empty($stack)) {
        while ($current !== null) {
            array_push($stack, $current);
            $current = $current->left;
        }
        $current = array_pop($stack);
        $result[] = $current->val;
        $current = $current->right;
    }
    return $result;
}`,
    solutionExplanation:
      "This solution uses an iterative approach with a stack to perform the inorder traversal.",
  },
  {
    id: 10,
    name: "Valid Anagram",
    explanation:
      "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
    code: `
function isAnagram($s, $t) {
    if (strlen($s) != strlen($t)) return false;
    $count = array_fill(0, 26, 0);
    for ($i = 0; $i < strlen($s); $i++) {
        $count[ord($s[$i]) - ord('a')]++;
        $count[ord($t[$i]) - ord('a')]--;
    }
    foreach ($count as $c) {
        if ($c != 0) return false;
    }
    return true;
}`,
    solutionExplanation:
      "It creates a size 26 int arrays as buckets for each letter in alphabet. It increments the bucket value with String s and decrement with string t. So if they are anagrams, all buckets should remain with initial value which is zero. So just checking that and return.",
  },
  {
    id: 11,
    name: "Longest Substring Without Repeating Characters",
    explanation:
      "Given a string s, find the length of the longest substring without repeating characters.",
    code: `
function lengthOfLongestSubstring($s) {
    $map = [];
    $maxLength = 0;
    $start = 0;
    for ($end = 0; $end < strlen($s); $end++) {
        if (isset($map[$s[$end]])) {
            $start = max($map[$s[$end]] + 1, $start);
        }
        $map[$s[$end]] = $end;
        $maxLength = max($maxLength, $end - $start + 1);
    }
    return $maxLength;
}`,
    solutionExplanation:
      "This solution uses a sliding window approach with a hash map to track the indices of characters and their positions.",
  },
  {
    id: 12,
    name: "Palindrome Number",
    explanation:
      "Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.",
    code: `
function isPalindrome($x) {
    if ($x < 0 || ($x % 10 == 0 && $x != 0)) return false;
    $revertedNumber = 0;
    while ($x > $revertedNumber) {
        $revertedNumber = $revertedNumber * 10 + $x % 10;
        $x = intval($x / 10);
    }
    return $x == $revertedNumber || $x == intval($revertedNumber / 10);
}`,
    solutionExplanation:
      "This solution reverses half of the number and compares it with the other half.",
  },
  {
    id: 13,
    name: "Container With Most Water",
    explanation:
      "Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i are at (i, ai) and (i, 0). Find two lines, which together with the x-axis forms a container, such that the container contains the most water.",
    code: `
function maxArea($height) {
    $maxArea = 0;
    $left = 0;
    $right = count($height) - 1;
    while ($left < $right) {
        $width = $right - $left;
        $maxArea = max($maxArea, min($height[$left], $height[$right]) * $width);
        if ($height[$left] < $height[$right]) {
            $left++;
        } else {
            $right--;
        }
    }
    return $maxArea;
}`,
    solutionExplanation:
      "This solution uses the two-pointer technique to find the maximum area by moving the pointers towards the center.",
  },
  {
    id: 14,
    name: "3Sum",
    explanation:
      "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
    code: `
function threeSum($nums) {
    sort($nums);
    $result = [];
    for ($i = 0; $i < count($nums) - 2; $i++) {
        if ($i > 0 && $nums[$i] == $nums[$i - 1]) continue;
        $left = $i + 1;
        $right = count($nums) - 1;
        while ($left < $right) {
            $sum = $nums[$i] + $nums[$left] + $nums[$right];
            if ($sum < 0) {
                $left++;
            } elseif ($sum > 0) {
                $right--;
            } else {
                $result[] = [$nums[$i], $nums[$left], $nums[$right]];
                while ($left < $right && $nums[$left] == $nums[$left + 1]) $left++;
                while ($left < $right && $nums[$right] == $nums[$right - 1]) $right--;
                $left++;
                $right--;
            }
        }
    }
    return $result;
}`,
    solutionExplanation:
      "This solution sorts the array and then uses a three-pointer approach to find all unique triplets that sum up to zero.",
  },
  {
    id: 15,
    name: "Letter Combinations of a Phone Number",
    explanation:
      "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.",
    code: `
function letterCombinations($digits) {
    if (empty($digits)) return [];
    $map = [
        '2' => 'abc', '3' => 'def', '4' => 'ghi', '5' => 'jkl',
        '6' => 'mno', '7' => 'pqrs', '8' => 'tuv', '9' => 'wxyz'
    ];
    $result = [''];
    for ($i = 0; $i < strlen($digits); $i++) {
        $letters = $map[$digits[$i]];
        $newResult = [];
        foreach ($result as $combination) {
            for ($j = 0; $j < strlen($letters); $j++) {
                $newResult[] = $combination . $letters[$j];
            }
        }
        $result = $newResult;
    }
    return $result;
}`,
    solutionExplanation:
      "This solution uses a mapping of digits to letters and iteratively builds the combinations.",
  },
  {
    id: 16,
    name: "Generate Parentheses",
    explanation:
      "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
    code: `
function generateParenthesis($n) {
    $result = [];
    backtrack($result, '', 0, 0, $n);
    return $result;
}

function backtrack(&$result, $current, $open, $close, $max) {
    if (strlen($current) == $max * 2) {
        $result[] = $current;
        return;
    }
    if ($open < $max) {
        backtrack($result, $current . '(', $open + 1, $close, $max);
    }
    if ($close < $open) {
        backtrack($result, $current . ')', $open, $close + 1, $max);
    }
}`,
    solutionExplanation:
      "This solution uses backtracking to generate all valid combinations of parentheses.",
  },
  {
    id: 17,
    name: "Merge k Sorted Lists",
    explanation:
      "Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.",
    code: `
function mergeKLists($lists) {
    if (empty($lists)) return null;
    while (count($lists) > 1) {
        $mergedLists = [];
        for ($i = 0; $i < count($lists); $i += 2) {
            $l1 = $lists[$i];
            $l2 = $i + 1 < count($lists) ? $lists[$i + 1] : null;
            $mergedLists[] = mergeTwoLists($l1, $l2);
        }
        $lists = $mergedLists;
    }
    return $lists[0];
}

function mergeTwoLists($l1, $l2) {
    $dummy = new ListNode(0);
    $current = $dummy;
    while ($l1 !== null && $l2 !== null) {
        if ($l1->val <= $l2->val) {
            $current->next = $l1;
            $l1 = $l1->next;
        } else {
            $current->next = $l2;
            $l2 = $l2->next;
        }
        $current = $current->next;
    }
    $current->next = $l1 ?? $l2;
    return $dummy->next;
}`,
    solutionExplanation:
      "This solution merges k sorted lists by repeatedly merging pairs of lists until only one list remains.",
  },
  {
    id: 18,
    name: "Unique Paths",
    explanation:
      "A robot is located at the top-left corner of a m x n grid. The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid. How many possible unique paths are there?",
    code: `
function uniquePaths($m, $n) {
    $dp = array_fill(0, $m, array_fill(0, $n, 1));
    for ($i = 1; $i < $m; $i++) {
        for ($j = 1; $j < $n; $j++) {
            $dp[$i][$j] = $dp[$i - 1][$j] + $dp[$i][$j - 1];
        }
    }
    return $dp[$m - 1][$n - 1];
}`,
    solutionExplanation:
      "This solution uses dynamic programming to fill a 2D array with the number of unique paths to each cell.",
  },
  {
    id: 19,
    name: "Search in Rotated Sorted Array",
    explanation:
      "You are given an integer array nums sorted in ascending order, and an integer target. Suppose that nums is rotated at an unknown pivot. Write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.",
    code: `
function search($nums, $target) {
    $left = 0;
    $right = count($nums) - 1;
    while ($left <= $right) {
        $mid = intval(($left + $right) / 2);
        if ($nums[$mid] == $target) return $mid;
        if ($nums[$left] <= $nums[$mid]) {
            if ($target >= $nums[$left] && $target < $nums[$mid]) {
                $right = $mid - 1;
            } else {
                $left = $mid + 1;
            }
        } else {
            if ($target > $nums[$mid] && $target <= $nums[$right]) {
                $left = $mid + 1;
            } else {
                $right = $mid - 1;
            }
        }
    }
    return -1;
}`,
    solutionExplanation:
      "This solution uses a modified binary search to account for the rotation in the sorted array.",
  },
  {
    id: 20,
    name: "Find First and Last Position of Element in Sorted Array",
    explanation:
      "Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value. If target is not found in the array, return [-1, -1].",
    code: `
function searchRange($nums, $target) {
    $first = binarySearch($nums, $target, true);
    if ($first == -1) return [-1, -1];
    $last = binarySearch($nums, $target, false);
    return [$first, $last];
}

function binarySearch($nums, $target, $findFirst) {
    $left = 0;
    $right = count($nums) - 1;
    $result = -1;
    while ($left <= $right) {
        $mid = intval(($left + $right) / 2);
        if ($nums[$mid] == $target) {
            $result = $mid;
            if ($findFirst) {
                $right = $mid - 1;
            } else {
                $left = $mid + 1;
            }
        } elseif ($nums[$mid] < $target) {
            $left = $mid + 1;
        } else {
            $right = $mid - 1;
        }
    }
    return $result;
}`,
    solutionExplanation:
      "This solution uses binary search twice to find the first and last positions of the target value.",
  },
  {
    id: 21,
    name: "Subsets",
    explanation:
      "Given an integer array nums, return all possible subsets (the power set). The solution set must not contain duplicate subsets.",
    code: `
function subsets($nums) {
    $result = [[]];
    foreach ($nums as $num) {
        $size = count($result);
        for ($i = 0; $i < $size; $i++) {
            $subset = $result[$i];
            $subset[] = $num;
            $result[] = $subset;
        }
    }
    return $result;
}`,
    solutionExplanation:
      "This solution iteratively generates subsets by adding each number to existing subsets.",
  },
  {
    id: 22,
    name: "Pow(x, n)",
    explanation:
      "Implement pow(x, n), which calculates x raised to the power n (i.e., xn).",
    code: `
function myPow($x, $n) {
    if ($n == 0) return 1;
    if ($n < 0) {
        $x = 1 / $x;
        $n = -$n;
    }
    $result = 1;
    while ($n > 0) {
        if ($n % 2 == 1) {
            $result *= $x;
        }
        $x *= $x;
        $n = intval($n / 2);
    }
    return $result;
}`,
    solutionExplanation:
      "This solution uses binary exponentiation to calculate the power of x efficiently.",
  },
  {
    id: 23,
    name: "Spiral Matrix",
    explanation:
      "Given an m x n matrix, return all elements of the matrix in spiral order.",
    code: `
function spiralOrder($matrix) {
    $result = [];
    if (empty($matrix)) return $result;
    $top = 0;
    $bottom = count($matrix) - 1;
    $left = 0;
    $right = count($matrix[0]) - 1;
    while ($top <= $bottom && $left <= $right) {
        for ($i = $left; $i <= $right; $i++) {
            $result[] = $matrix[$top][$i];
        }
        $top++;
        for ($i = $top; $i <= $bottom; $i++) {
            $result[] = $matrix[$i][$right];
        }
        $right--;
        if ($top <= $bottom) {
            for ($i = $right; $i >= $left; $i--) {
                $result[] = $matrix[$bottom][$i];
            }
            $bottom--;
        }
        if ($left <= $right) {
            for ($i = $bottom; $i >= $top; $i--) {
                $result[] = $matrix[$i][$left];
            }
            $left++;
        }
    }
    return $result;
}`,
    solutionExplanation:
      "This solution traverses the matrix in a spiral order by adjusting the boundaries.",
  },
  {
    id: 24,
    name: "Jump Game",
    explanation:
      "Given an array of non-negative integers nums, you are initially positioned at the first index of the array. Each element in the array represents your maximum jump length at that position. Determine if you can reach the last index.",
    code: `
function canJump($nums) {
    $lastPosition = count($nums) - 1;
    for ($i = count($nums) - 2; $i >= 0; $i--) {
        if ($i + $nums[$i] >= $lastPosition) {
            $lastPosition = $i;
        }
    }
    return $lastPosition == 0;
}`,
    solutionExplanation:
      "This solution iterates from right to left, updating the last position that can reach the end.",
  },
  {
    id: 25,
    name: "Group Anagrams",
    explanation:
      "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
    code: `
function groupAnagrams($strs) {
    $map = [];
    foreach ($strs as $str) {
        $key = count_chars($str, 1);
        $map[$key][] = $str;
    }
    return array_values($map);
}`,
    solutionExplanation:
      "This solution uses a hash map to group anagrams based on their character counts.",
  },
  {
    id: 26,
    name: "Combination Sum",
    explanation:
      "Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.",
    code: `
function combinationSum($candidates, $target) {
    $result = [];
    backtrack($result, [], $candidates, $target, 0);
    return $result;
}

function backtrack(&$result, $current, $candidates, $target, $start) {
    if ($target < 0) return;
    if ($target == 0) {
        $result[] = $current;
        return;
    }
    for ($i = $start; $i < count($candidates); $i++) {
        $current[] = $candidates[$i];
        backtrack($result, $current, $candidates, $target - $candidates[$i], $i);
        array_pop($current);
    }
}`,
    solutionExplanation:
      "This solution uses backtracking to find all combinations that sum up to the target.",
  },
  {
    id: 27,
    name: "Product of Array Except Self",
    explanation:
      "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.",
    code: `
function productExceptSelf($nums) {
    $length = count($nums);
    $result = array_fill(0, $length, 1);
    $leftProduct = 1;
    for ($i = 1; $i < $length; $i++) {
        $leftProduct *= $nums[$i - 1];
        $result[$i] *= $leftProduct;
    }
    $rightProduct = 1;
    for ($i = $length - 2; $i >= 0; $i--) {
        $rightProduct *= $nums[$i + 1];
        $result[$i] *= $rightProduct;
    }
    return $result;
}`,
    solutionExplanation:
      "This solution calculates the product of all elements to the left and right of each element separately.",
  },
  {
    id: 28,
    name: "Search a 2D Matrix",
    explanation:
      "Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties: Integers in each row are sorted from left to right. The first integer of each row is greater than the last integer of the previous row.",
    code: `
function searchMatrix($matrix, $target) {
    $m = count($matrix);
    if ($m == 0) return false;
    $n = count($matrix[0]);
    $left = 0;
    $right = $m * $n - 1;
    while ($left <= $right) {
        $mid = intval(($left + $right) / 2);
        $row = intval($mid / $n);
        $col = $mid % $n;
        if ($matrix[$row][$col] == $target) return true;
        if ($matrix[$row][$col] < $target) {
            $left = $mid + 1;
        } else {
            $right = $mid - 1;
        }
    }
    return false;
}`,
    solutionExplanation:
      "This solution treats the 2D matrix as a 1D array and performs binary search on it.",
  },
  {
    id: 29,
    name: "Word Search",
    explanation:
      "Given an m x n grid of characters board and a string word, return true if word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where 'adjacent' cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.",
    code: `
function exist($board, $word) {
    $rows = count($board);
    $cols = count($board[0]);
    for ($i = 0; $i < $rows; $i++) {
        for ($j = 0; $j < $cols; $j++) {
            if (dfs($board, $i, $j, $word, 0)) return true;
        }
    }
    return false;
}

function dfs(&$board, $i, $j, $word, $index) {
    if ($index == strlen($word)) return true;
    if ($i < 0 || $i >= count($board) || $j < 0 || $j >= count($board[0]) || $board[$i][$j] != $word[$index]) return false;
    $temp = $board[$i][$j];
    $board[$i][$j] = '#';
    $found = dfs($board, $i + 1, $j, $word, $index + 1) ||
             dfs($board, $i - 1, $j, $word, $index + 1) ||
             dfs($board, $i, $j + 1, $word, $index + 1) ||
             dfs($board, $i, $j - 1, $word, $index + 1);
    $board[$i][$j] = $temp;
    return $found;
}`,
    solutionExplanation:
      "This solution uses depth-first search (DFS) to explore all possible paths in the grid.",
  },
  {
    id: 30,
    name: "Largest Rectangle in Histogram",
    explanation:
      "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
    code: `
function largestRectangleArea($heights) {
    $stack = [];
    $maxArea = 0;
    for ($i = 0; $i <= count($heights); $i++) {
        while (!empty($stack) && ($i == count($heights) || $heights[$i] < $heights[end($stack)])) {
            $height = $heights[array_pop($stack)];
            $width = empty($stack) ? $i : $i - end($stack) - 1;
            $maxArea = max($maxArea, $height * $width);
        }
        $stack[] = $i;
    }
    return $maxArea;
}`,
    solutionExplanation:
      "This solution uses a monotonic stack to calculate the largest rectangle area.",
  },
  {
    id: 31,
    name: "Merge Intervals",
    explanation:
      "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
    code: `
function merge($intervals) {
    if (empty($intervals)) return [];
    usort($intervals, function($a, $b) {
        return $a[0] - $b[0];
    });
    $result = [$intervals[0]];
    for ($i = 1; $i < count($intervals); $i++) {
        $current = &$result[count($result) - 1];
        if ($intervals[$i][0] <= $current[1]) {
            $current[1] = max($current[1], $intervals[$i][1]);
        } else {
            $result[] = $intervals[$i];
        }
    }
    return $result;
}`,
    solutionExplanation:
      "This solution sorts the intervals based on their start times and merges overlapping intervals.",
  },
  {
    id: 32,
    name: "Validate Binary Search Tree",
    explanation:
      "Given the root of a binary tree, determine if it is a valid binary search tree (BST).",
    code: `
function isValidBST($root) {
    return isValidNode($root, null, null);
}

function isValidNode($node, $min, $max) {
    if ($node === null) return true;
    if (($min !== null && $node->val <= $min) || ($max !== null && $node->val >= $max)) return false;
    return isValidNode($node->left, $min, $node->val) && isValidNode($node->right, $node->val, $max);
}`,
    solutionExplanation:
      "This solution performs a depth-first search (DFS) while keeping track of the valid range for each node.",
  },
  {
    id: 33,
    name: "Minimum Path Sum",
    explanation:
      "Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path. You can only move either down or right at any point in time.",
    code: `
function minPathSum($grid) {
    $rows = count($grid);
    $cols = count($grid[0]);
    for ($i = 1; $i < $cols; $i++) {
        $grid[0][$i] += $grid[0][$i - 1];
    }
    for ($i = 1; $i < $rows; $i++) {
        $grid[$i][0] += $grid[$i - 1][0];
        for ($j = 1; $j < $cols; $j++) {
            $grid[$i][$j] += min($grid[$i - 1][$j], $grid[$i][$j - 1]);
        }
    }
    return $grid[$rows - 1][$cols - 1];
}`,
    solutionExplanation:
      "This solution uses dynamic programming to calculate the minimum path sum for each cell.",
  },
  {
    id: 34,
    name: "Binary Tree Maximum Path Sum",
    explanation:
      "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root. The path sum of a path is the sum of the node's values in the path. Given the root of a binary tree, return the maximum path sum of any path.",
    code: `
function maxPathSum($root) {
    $maxSum = PHP_INT_MIN;
    getMaxSum($root, $maxSum);
    return $maxSum;
}

function getMaxSum($node, &$maxSum) {
    if ($node === null) return 0;
    $leftMax = max(0, getMaxSum($node->left, $maxSum));
    $rightMax = max(0, getMaxSum($node->right, $maxSum));
    $maxSum = max($maxSum, $node->val + $leftMax + $rightMax);
    return $node->val + max($leftMax, $rightMax);
}`,
    solutionExplanation:
      "This solution recursively calculates the maximum path sum for each subtree.",
  },
  {
    id: 35,
    name: "Palindrome Linked List",
    explanation:
      "Given the head of a singly linked list, return true if it is a palindrome.",
    code: `
function isPalindrome($head) {
    $fast = $head;
    $slow = $head;
    while ($fast !== null && $fast->next !== null) {
        $fast = $fast->next->next;
        $slow = $slow->next;
    }
    $reversed = reverseList($slow);
    while ($reversed !== null) {
        if ($head->val != $reversed->val) return false;
        $head = $head->next;
        $reversed = $reversed->next;
    }
    return true;
}

function reverseList($head) {
    $prev = null;
    while ($head !== null) {
        $next = $head->next;
        $head->next = $prev;
        $prev = $head;
        $head = $next;
    }
    return $prev;
}`,
    solutionExplanation:
      "This solution reverses the second half of the linked list and compares it with the first half.",
  },
  {
    id: 36,
    name: "Longest Increasing Subsequence",
    explanation:
      "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
    code: `
function lengthOfLIS($nums) {
    $dp = array_fill(0, count($nums), 1);
    $maxLength = 1;
    for ($i = 1; $i < count($nums); $i++) {
        for ($j = 0; $j < $i; $j++) {
            if ($nums[$i] > $nums[$j]) {
                $dp[$i] = max($dp[$i], $dp[$j] + 1);
                $maxLength = max($maxLength, $dp[$i]);
            }
        }
    }
    return $maxLength;
}`,
    solutionExplanation:
      "This solution uses dynamic programming to find the length of the longest increasing subsequence.",
  },
  {
    id: 37,
    name: "LRU Cache",
    explanation:
      "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    code: `
class LRUCache {
    private $capacity;
    private $cache;
    function __construct($capacity) {
        $this->capacity = $capacity;
        $this->cache = new SplDoublyLinkedList();
    }
    function get($key) {
        if (!isset($this->cache[$key])) return -1;
        $this->cache->unshift($this->cache->offsetGet($key));
        $this->cache->offsetUnset($key);
        return $this->cache->offsetGet(0)[1];
    }
    function put($key, $value) {
        if (isset($this->cache[$key])) {
            $this->cache->offsetUnset($key);
        } elseif ($this->cache->count() >= $this->capacity) {
            $this->cache->pop();
        }
        $this->cache->unshift([$key, $value]);
    }
}`,
    solutionExplanation:
      "This solution uses a doubly linked list and a hash map to implement an LRU cache.",
  },
  {
    id: 38,
    name: "Merge Two Sorted Lists",
    explanation:
      "Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.",
    code: `
function mergeTwoLists($l1, $l2) {
    if ($l1 === null) return $l2;
    if ($l2 === null) return $l1;
    if ($l1->val < $l2->val) {
        $l1->next = mergeTwoLists($l1->next, $l2);
        return $l1;
    } else {
        $l2->next = mergeTwoLists($l1, $l2->next);
        return $l2;
    }
}`,
    solutionExplanation:
      "This solution recursively merges two sorted linked lists.",
  },
  {
    id: 39,
    name: "Permutations",
    explanation:
      "Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.",
    code: `
function permute($nums) {
    $result = [];
    backtrack($result, [], $nums);
    return $result;
}

function backtrack(&$result, $current, $nums) {
    if (count($current) == count($nums)) {
        $result[] = $current;
        return;
    }
    foreach ($nums as $num) {
        if (!in_array($num, $current)) {
            $current[] = $num;
            backtrack($result, $current, $nums);
            array_pop($current);
        }
    }
}`,
    solutionExplanation:
      "This solution uses backtracking to generate all possible permutations.",
  },
  {
    id: 40,
    name: "Find Peak Element",
    explanation:
      "A peak element in an array is an element that is strictly greater than its neighbors. Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.",
    code: `
function findPeakElement($nums) {
    $left = 0;
    $right = count($nums) - 1;
    while ($left < $right) {
        $mid = intval(($left + $right) / 2);
        if ($nums[$mid] < $nums[$mid + 1]) {
            $left = $mid + 1;
        } else {
            $right = $mid;
        }
    }
    return $left;
}`,
    solutionExplanation:
      "This solution uses binary search to find a peak element in the array.",
  },
  {
    id: 41,
    name: "Container With Most Water",
    explanation:
      "Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.",
    code: `
function maxArea($height) {
    $maxArea = 0;
    $left = 0;
    $right = count($height) - 1;
    while ($left < $right) {
        $maxArea = max($maxArea, min($height[$left], $height[$right]) * ($right - $left));
        if ($height[$left] < $height[$right]) {
            $left++;
        } else {
            $right--;
        }
    }
    return $maxArea;
}`,
    solutionExplanation:
      "This solution uses two pointers to find the maximum area between two vertical lines.",
  },
  {
    id: 42,
    name: "Majority Element",
    explanation:
      "Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.",
    code: `
function majorityElement($nums) {
    $count = 0;
    $candidate = null;
    foreach ($nums as $num) {
        if ($count == 0) {
            $candidate = $num;
        }
        $count += ($num == $candidate) ? 1 : -1;
    }
    return $candidate;
}`,
    solutionExplanation:
      "This solution uses Boyer-Moore Voting Algorithm to find the majority element.",
  },
  {
    id: 43,
    name: "Kth Largest Element in an Array",
    explanation:
      "Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.",
    code: `
function findKthLargest($nums, $k) {
    $heap = new SplMinHeap();
    foreach ($nums as $num) {
        $heap->insert($num);
        if ($heap->count() > $k) {
            $heap->extract();
        }
    }
    return $heap->top();
}`,
    solutionExplanation:
      "This solution uses a min heap to find the kth largest element.",
  },
  {
    id: 44,
    name: "Longest Common Prefix",
    explanation:
      "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string ''.",
    code: `
function longestCommonPrefix($strs) {
    if (empty($strs)) return '';
    $prefix = $strs[0];
    for ($i = 1; $i < count($strs); $i++) {
        while (strpos($strs[$i], $prefix) !== 0) {
            $prefix = substr($prefix, 0, -1);
            if ($prefix === '') return '';
        }
    }
    return $prefix;
}`,
    solutionExplanation:
      "This solution iterates through the array of strings to find the longest common prefix.",
  },
  {
    id: 45,
    name: "3Sum",
    explanation:
      "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets.",
    code: `
function threeSum($nums) {
    $result = [];
    sort($nums);
    for ($i = 0; $i < count($nums) - 2; $i++) {
        if ($i > 0 && $nums[$i] == $nums[$i - 1]) continue;
        $left = $i + 1;
        $right = count($nums) - 1;
        while ($left < $right) {
            $sum = $nums[$i] + $nums[$left] + $nums[$right];
            if ($sum < 0) {
                $left++;
            } elseif ($sum > 0) {
                $right--;
            } else {
                $result[] = [$nums[$i], $nums[$left], $nums[$right]];
                while ($left < $right && $nums[$left] == $nums[$left + 1]) $left++;
                while ($left < $right && $nums[$right] == $nums[$right - 1]) $right--;
                $left++;
                $right--;
            }
        }
    }
    return $result;
}`,
    solutionExplanation:
      "This solution uses two pointers to find all unique triplets that sum up to zero.",
  },
  {
    id: 46,
    name: "Letter Combinations of a Phone Number",
    explanation:
      "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.",
    code: `
function letterCombinations($digits) {
    if (empty($digits)) return [];
    $mapping = [
        '2' => 'abc',
        '3' => 'def',
        '4' => 'ghi',
        '5' => 'jkl',
        '6' => 'mno',
        '7' => 'pqrs',
        '8' => 'tuv',
        '9' => 'wxyz'
    ];
    $result = [''];
    for ($i = 0; $i < strlen($digits); $i++) {
        $letters = $mapping[$digits[$i]];
        $newResult = [];
        foreach ($result as $prefix) {
            foreach (str_split($letters) as $letter) {
                $newResult[] = $prefix . $letter;
            }
        }
        $result = $newResult;
    }
    return $result;
}`,
    solutionExplanation:
      "This solution uses backtracking to generate all possible letter combinations.",
  },
  {
    id: 47,
    name: "Generate Parentheses",
    explanation:
      "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
    code: `
function generateParenthesis($n) {
    $result = [];
    backtrack($result, '', 0, 0, $n);
    return $result;
}

function backtrack(&$result, $current, $open, $close, $max) {
    if (strlen($current) == $max * 2) {
        $result[] = $current;
        return;
    }
    if ($open < $max) {
        backtrack($result, $current . '(', $open + 1, $close, $max);
    }
    if ($close < $open) {
        backtrack($result, $current . ')', $open, $close + 1, $max);
    }
}`,
    solutionExplanation:
      "This solution uses backtracking to generate all valid combinations of parentheses.",
  },
  {
    id: 48,
    name: "Pow(x, n)",
    explanation:
      "Implement pow(x, n), which calculates x raised to the power n (i.e., xn).",
    code: `
function myPow($x, $n) {
    if ($n == 0) return 1;
    if ($n < 0) {
        $x = 1 / $x;
        $n = -$n;
    }
    $result = 1;
    while ($n > 0) {
        if ($n % 2 == 1) {
            $result *= $x;
        }
        $x *= $x;
        $n = intval($n / 2);
    }
    return $result;
}`,
    solutionExplanation:
      "This solution uses binary exponentiation to calculate the power of x efficiently.",
  },
  {
    id: 49,
    name: "N-Queens",
    explanation:
      "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other. Given an integer n, return all distinct solutions to the n-queens puzzle.",
    code: `
function solveNQueens($n) {
    $result = [];
    backtrack($result, [], 0, $n);
    return $result;
}

function backtrack(&$result, $board, $row, $n) {
    if ($row == $n) {
        $result[] = buildBoard($board);
        return;
    }
    for ($col = 0; $col < $n; $col++) {
        if (isValid($board, $row, $col)) {
            $board[] = $col;
            backtrack($result, $board, $row + 1, $n);
            array_pop($board);
        }
    }
}

function isValid($board, $row, $col) {
    foreach ($board as $r => $c) {
        if ($c == $col || $r + $c == $row + $col || $r - $c == $row - $col) {
            return false;
        }
    }
    return true;
}

function buildBoard($board) {
    $result = [];
    $n = count($board);
    foreach ($board as $col) {
        $rowStr = str_repeat('.', $col) . 'Q' . str_repeat('.', $n - $col - 1);
        $result[] = $rowStr;
    }
    return $result;
}`,
    solutionExplanation:
      "This solution uses backtracking to find all distinct solutions to the n-queens puzzle.",
  },
  {
    id: 50,
    name: "Find Minimum in Rotated Sorted Array",
    explanation:
      "Suppose an array of length n sorted in ascending order is rotated between 1 and n times. Given the sorted rotated array nums, return the minimum element of this array.",
    code: `
function findMin($nums) {
    $left = 0;
    $right = count($nums) - 1;
    while ($left < $right) {
        $mid = intval(($left + $right) / 2);
        if ($nums[$mid] < $nums[$right]) {
            $right = $mid;
        } else {
            $left = $mid + 1;
        }
    }
    return $nums[$left];
}`,
    solutionExplanation:
      "This solution uses binary search to find the minimum element in a rotated sorted array.",
  },
  {
    id: 51,
    name: "Binary Tree Level Order Traversal",
    explanation:
      "Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).",
    code: `
function levelOrder($root) {
    if ($root === null) return [];
    $result = [];
    $queue = new SplQueue();
    $queue->enqueue($root);
    while (!$queue->isEmpty()) {
        $level = [];
        $size = $queue->count();
        for ($i = 0; $i < $size; $i++) {
            $node = $queue->dequeue();
            $level[] = $node->val;
            if ($node->left !== null) $queue->enqueue($node->left);
            if ($node->right !== null) $queue->enqueue($node->right);
        }
        $result[] = $level;
    }
    return $result;
}`,
    solutionExplanation:
      "This solution performs a level order traversal using a queue.",
  },
  {
    id: 52,
    name: "Word Break",
    explanation:
      "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.",
    code: `
function wordBreak($s, $wordDict) {
    $dp = array_fill(0, strlen($s) + 1, false);
    $dp[0] = true;
    for ($i = 1; $i <= strlen($s); $i++) {
        for ($j = 0; $j < $i; $j++) {
            if ($dp[$j] && in_array(substr($s, $j, $i - $j), $wordDict)) {
                $dp[$i] = true;
                break;
            }
        }
    }
    return $dp[strlen($s)];
}`,
    solutionExplanation:
      "This solution uses dynamic programming to check if the string can be segmented into words from the dictionary.",
  },
  {
    id: 53,
    name: "Search in Rotated Sorted Array",
    explanation:
      "There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.",
    code: `
function search($nums, $target) {
    $left = 0;
    $right = count($nums) - 1;
    while ($left <= $right) {
        $mid = intval(($left + $right) / 2);
        if ($nums[$mid] == $target) return $mid;
        if ($nums[$left] <= $nums[$mid]) {
            if ($nums[$left] <= $target && $target < $nums[$mid]) {
                $right = $mid - 1;
            } else {
                $left = $mid + 1;
            }
        } else {
            if ($nums[$mid] < $target && $target <= $nums[$right]) {
                $left = $mid + 1;
            } else {
                $right = $mid - 1;
            }
        }
    }
    return -1;
}`,
    solutionExplanation:
      "This solution performs binary search on the rotated sorted array.",
  },
  {
    id: 54,
    name: "Group Anagrams",
    explanation:
      "Given an array of strings strs, group the anagrams together. You can return the answer in any order. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
    code: `
function groupAnagrams($strs) {
    $groups = [];
    foreach ($strs as $str) {
        $key = count_chars($str, 1);
        $groups[$key][] = $str;
    }
    return array_values($groups);
}`,
    solutionExplanation:
      "This solution groups anagrams by counting the frequency of characters in each string.",
  },
  {
    id: 55,
    name: "Merge k Sorted Lists",
    explanation:
      "Merge k sorted linked lists and return it as one sorted list.",
    code: `
function mergeKLists($lists) {
    $merged = null;
    foreach ($lists as $list) {
        $merged = mergeTwoLists($merged, $list);
    }
    return $merged;
}`,
    solutionExplanation:
      "This solution iteratively merges sorted lists using a helper function mergeTwoLists.",
  },
  {
    id: 56,
    name: "Unique Paths",
    explanation:
      "A robot is located at the top-left corner of a m x n grid. The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid. How many possible unique paths are there?",
    code: `
function uniquePaths($m, $n) {
    $dp = array_fill(0, $m, array_fill(0, $n, 0));
    for ($i = 0; $i < $m; $i++) {
        $dp[$i][0] = 1;
    }
    for ($j = 0; $j < $n; $j++) {
        $dp[0][$j] = 1;
    }
    for ($i = 1; $i < $m; $i++) {
        for ($j = 1; $j < $n; $j++) {
            $dp[$i][$j] = $dp[$i - 1][$j] + $dp[$i][$j - 1];
        }
    }
    return $dp[$m - 1][$n - 1];
}`,
    solutionExplanation:
      "This solution uses dynamic programming to calculate the number of unique paths.",
  },
  {
    id: 57,
    name: "Spiral Matrix",
    explanation:
      "Given an m x n matrix, return all elements of the matrix in spiral order.",
    code: `
function spiralOrder($matrix) {
    $result = [];
    $m = count($matrix);
    $n = count($matrix[0]);
    $top = 0;
    $bottom = $m - 1;
    $left = 0;
    $right = $n - 1;
    while ($top <= $bottom && $left <= $right) {
        for ($i = $left; $i <= $right; $i++) {
            $result[] = $matrix[$top][$i];
        }
        $top++;
        for ($i = $top; $i <= $bottom; $i++) {
            $result[] = $matrix[$i][$right];
        }
        $right--;
        if ($top <= $bottom) {
            for ($i = $right; $i >= $left; $i--) {
                $result[] = $matrix[$bottom][$i];
            }
            $bottom--;
        }
        if ($left <= $right) {
            for ($i = $bottom; $i >= $top; $i--) {
                $result[] = $matrix[$i][$left];
            }
            $left++;
        }
    }
    return $result;
}`,
    solutionExplanation:
      "This solution iterates through the matrix in a spiral order.",
  },
  {
    id: 58,
    name: "Jump Game",
    explanation:
      "You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position. Return true if you can reach the last index, or false otherwise.",
    code: `
function canJump($nums) {
    $maxJump = 0;
    for ($i = 0; $i < count($nums); $i++) {
        if ($i > $maxJump) return false;
        $maxJump = max($maxJump, $i + $nums[$i]);
        if ($maxJump >= count($nums) - 1) return true;
    }
    return true;
}`,
    solutionExplanation:
      "This solution iterates through the array, updating the maximum jump reachable.",
  },
  {
    id: 59,
    name: "Subsets",
    explanation:
      "Given an integer array nums that may contain duplicates, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.",
    code: `
function subsets($nums) {
    $result = [];
    sort($nums);
    backtrack($result, [], $nums, 0);
    return $result;
}

function backtrack(&$result, $current, $nums, $start) {
    $result[] = $current;
    for ($i = $start; $i < count($nums); $i++) {
        if ($i > $start && $nums[$i] == $nums[$i - 1]) continue;
        $current[] = $nums[$i];
        backtrack($result, $current, $nums, $i + 1);
        array_pop($current);
    }
}`,
    solutionExplanation:
      "This solution uses backtracking to generate all possible subsets.",
  },
  {
    id: 60,
    name: "Search a 2D Matrix",
    explanation:
      "Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties: Integers in each row are sorted from left to right. The first integer of each row is greater than the last integer of the previous row.",
    code: `
function searchMatrix($matrix, $target) {
    $m = count($matrix);
    $n = count($matrix[0]);
    $left = 0;
    $right = $m * $n - 1;
    while ($left <= $right) {
        $mid = intval(($left + $right) / 2);
        $row = intval($mid / $n);
        $col = $mid % $n;
        if ($matrix[$row][$col] == $target) {
            return true;
        } elseif ($matrix[$row][$col] < $target) {
            $left = $mid + 1;
        } else {
            $right = $mid - 1;
        }
    }
    return false;
}`,
    solutionExplanation:
      "This solution performs binary search on the flattened matrix.",
  },
  {
    id: 61,
    name: "Combination Sum",
    explanation:
      "Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order. The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.",
    code: `
function combinationSum($candidates, $target) {
    $result = [];
    backtrack($result, [], $candidates, $target, 0);
    return $result;
}

function backtrack(&$result, $current, $candidates, $target, $start) {
    if ($target < 0) return;
    if ($target == 0) {
        $result[] = $current;
        return;
    }
    for ($i = $start; $i < count($candidates); $i++) {
        $current[] = $candidates[$i];
        backtrack($result, $current, $candidates, $target - $candidates[$i], $i);
        array_pop($current);
    }
}`,
    solutionExplanation:
      "This solution uses backtracking to generate all unique combinations.",
  },
  {
    id: 62,
    name: "Search in Rotated Sorted Array II",
    explanation:
      "Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For each array, find if there exists an index i such that nums[i] == target. You must write an algorithm with O(log n) runtime complexity.",
    code: `
function search($nums, $target) {
    $left = 0;
    $right = count($nums) - 1;
    while ($left <= $right) {
        $mid = intval(($left + $right) / 2);
        if ($nums[$mid] == $target) return true;
        if ($nums[$left] == $nums[$mid] && $nums[$right] == $nums[$mid]) {
            $left++;
            $right--;
        } elseif ($nums[$left] <= $nums[$mid]) {
            if ($nums[$left] <= $target && $target < $nums[$mid]) {
                $right = $mid - 1;
            } else {
                $left = $mid + 1;
            }
        } else {
            if ($nums[$mid] < $target && $target <= $nums[$right]) {
                $left = $mid + 1;
            } else {
                $right = $mid - 1;
            }
        }
    }
    return false;
}`,
    solutionExplanation:
      "This solution performs binary search with handling for duplicates.",
  },
  {
    id: 63,
    name: "Count and Say",
    explanation:
      "The count-and-say sequence is a sequence of digit strings defined by the recursive formula: countAndSay(1) = '1'. countAndSay(n) is the way you would 'say' the digit string from countAndSay(n-1), which is then converted into a different digit string. To determine how you 'say' a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character. Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, replace the counts with a number and concatenate every saying.",
    code: `
function countAndSay($n) {
    $result = '1';
    for ($i = 2; $i <= $n; $i++) {
        $newResult = '';
        $count = 1;
        for ($j = 1; $j < strlen($result); $j++) {
            if ($result[$j] == $result[$j - 1]) {
                $count++;
            } else {
                $newResult .= strval($count) . $result[$j - 1];
                $count = 1;
            }
        }
        $newResult .= strval($count) . $result[strlen($result) - 1];
        $result = $newResult;
    }
    return $result;
}`,
    solutionExplanation:
      "This solution generates the count-and-say sequence iteratively.",
  },
  {
    id: 64,
    name: "Sort Colors",
    explanation:
      "Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue. Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.",
    code: `
function sortColors(&$nums) {
    $left = 0;
    $right = count($nums) - 1;
    $curr = 0;
    while ($curr <= $right) {
        if ($nums[$curr] == 0) {
            [$nums[$curr], $nums[$left]] = [$nums[$left], $nums[$curr]];
            $left++;
            $curr++;
        } elseif ($nums[$curr] == 2) {
            [$nums[$curr], $nums[$right]] = [$nums[$right], $nums[$curr]];
            $right--;
        } else {
            $curr++;
        }
    }
}`,
    solutionExplanation:
      "This solution uses the Dutch National Flag algorithm to sort the colors.",
  },
  {
    id: 65,
    name: "Minimum Path Sum",
    explanation:
      "Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path. You can only move either down or right at any point in time.",
    code: `
function minPathSum($grid) {
    $m = count($grid);
    $n = count($grid[0]);
    for ($i = 1; $i < $m; $i++) {
        $grid[$i][0] += $grid[$i - 1][0];
    }
    for ($j = 1; $j < $n; $j++) {
        $grid[0][$j] += $grid[0][$j - 1];
    }
    for ($i = 1; $i < $m; $i++) {
        for ($j = 1; $j < $n; $j++) {
            $grid[$i][$j] += min($grid[$i - 1][$j], $grid[$i][$j - 1]);
        }
    }
    return $grid[$m - 1][$n - 1];
}`,
    solutionExplanation:
      "This solution uses dynamic programming to find the minimum path sum.",
  },
  {
    id: 67,
    name: "Find All Anagrams in a String",
    explanation:
      "Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.",
    code: `
function findAnagrams($s, $p) {
    $result = [];
    $sLength = strlen($s);
    $pLength = strlen($p);
    if ($sLength < $pLength) return $result;
    $pCount = array_count_values(str_split($p));
    $sCount = array_fill(0, 26, 0);
    for ($i = 0; $i < $pLength; $i++) {
        $sCount[ord($s[$i]) - ord('a')]++;
    }
    for ($i = $pLength; $i <= $sLength; $i++) {
        if ($pCount == $sCount) {
            $result[] = $i - $pLength;
        }
        if ($i < $sLength) {
            $sCount[ord($s[$i]) - ord('a')]++;
            $sCount[ord($s[$i - $pLength]) - ord('a')]--;
        }
    }
    return $result;
}`,
    solutionExplanation:
      "This solution uses a sliding window approach to find all anagrams of a string.",
  },
  {
    id: 68,
    name: "Construct Binary Tree from Preorder and Inorder Traversal",
    explanation:
      "Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.",
    code: `
class TreeNode {
    public $val;
    public $left;
    public $right;
    function __construct($val = 0, $left = null, $right = null) {
        $this->val = $val;
        $this->left = $left;
        $this->right = $right;
    }
}

function buildTree($preorder, $inorder) {
    return buildSubTree($preorder, $inorder, 0, 0, count($inorder) - 1);
}

function buildSubTree(&$preorder, &$inorder, $preStart, $inStart, $inEnd) {
    if ($preStart > count($preorder) - 1 || $inStart > $inEnd) return null;
    $rootVal = $preorder[$preStart];
    $root = new TreeNode($rootVal);
    $inIndex = array_search($rootVal, $inorder);
    $root->left = buildSubTree($preorder, $inorder, $preStart + 1, $inStart, $inIndex - 1);
    $root->right = buildSubTree($preorder, $inorder, $preStart + $inIndex - $inStart + 1, $inIndex + 1, $inEnd);
    return $root;
}`,
    solutionExplanation:
      "This solution constructs a binary tree from its preorder and inorder traversals.",
  },
  {
    id: 69,
    name: "Longest Palindromic Substring",
    explanation:
      "Given a string s, return the longest palindromic substring in s.",
    code: `
function longestPalindrome($s) {
    $maxLen = 0;
    $start = 0;
    for ($i = 0; $i < strlen($s); $i++) {
        $len1 = expandAroundCenter($s, $i, $i);
        $len2 = expandAroundCenter($s, $i, $i + 1);
        $len = max($len1, $len2);
        if ($len > $maxLen) {
            $maxLen = $len;
            $start = $i - intval(($len - 1) / 2);
        }
    }
    return substr($s, $start, $maxLen);
}

function expandAroundCenter($s, $left, $right) {
    while ($left >= 0 && $right < strlen($s) && $s[$left] == $s[$right]) {
        $left--;
        $right++;
    }
    return $right - $left - 1;
}`,
    solutionExplanation:
      "This solution uses the expand around center technique to find the longest palindromic substring.",
  },
  {
    id: 70,
    name: "Maximum Subarray",
    explanation:
      "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    code: `
function maxSubArray($nums) {
    $maxSum = $nums[0];
    $currentSum = $nums[0];
    for ($i = 1; $i < count($nums); $i++) {
        $currentSum = max($nums[$i], $currentSum + $nums[$i]);
        $maxSum = max($maxSum, $currentSum);
    }
    return $maxSum;
}`,
    solutionExplanation:
      "This solution uses Kadane's algorithm to find the maximum subarray sum.",
  },
  {
    id: 71,
    name: "Container With Most Water",
    explanation:
      "Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.",
    code: `
function maxArea($height) {
    $maxArea = 0;
    $left = 0;
    $right = count($height) - 1;
    while ($left < $right) {
        $maxArea = max($maxArea, min($height[$left], $height[$right]) * ($right - $left));
        if ($height[$left] < $height[$right]) {
            $left++;
        } else {
            $right--;
        }
    }
    return $maxArea;
}`,
    solutionExplanation:
      "This solution uses a two-pointer approach to find the maximum area.",
  },
  {
    id: 72,
    name: "Permutations",
    explanation:
      "Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.",
    code: `
function permute($nums) {
    $result = [];
    backtrack($result, [], $nums);
    return $result;
}

function backtrack(&$result, $current, $nums) {
    if (count($current) == count($nums)) {
        $result[] = $current;
        return;
    }
    for ($i = 0; $i < count($nums); $i++) {
        if (in_array($nums[$i], $current)) continue;
        $current[] = $nums[$i];
        backtrack($result, $current, $nums);
        array_pop($current);
    }
}`,
    solutionExplanation:
      "This solution uses backtracking to generate all permutations.",
  },
  {
    id: 73,
    name: "Merge Intervals",
    explanation:
      "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
    code: `
function merge($intervals) {
    $result = [];
    if (empty($intervals)) return $result;
    usort($intervals, function ($a, $b) {
        return $a[0] - $b[0];
    });
    $currInterval = $intervals[0];
    foreach ($intervals as $interval) {
        if ($interval[0] <= $currInterval[1]) {
            $currInterval[1] = max($currInterval[1], $interval[1]);
        } else {
            $result[] = $currInterval;
            $currInterval = $interval;
        }
    }
    $result[] = $currInterval;
    return $result;
}`,
    solutionExplanation:
      "This solution merges overlapping intervals by sorting and iterating through them.",
  },
  {
    id: 74,
    name: "Jump Game II",
    explanation:
      "Given an array of non-negative integers nums, you are initially positioned at the first index of the array. Each element in the array represents your maximum jump length at that position. Your goal is to reach the last index in the minimum number of jumps.",
    code: `
function jump($nums) {
    $n = count($nums);
    $maxJump = 0;
    $steps = 0;
    $end = 0;
    for ($i = 0; $i < $n - 1; $i++) {
        $maxJump = max($maxJump, $i + $nums[$i]);
        if ($i == $end) {
            $steps++;
            $end = $maxJump;
        }
    }
    return $steps;
}`,
    solutionExplanation:
      "This solution calculates the minimum number of jumps needed to reach the end.",
  },
  {
    id: 75,
    name: "Subarray Sum Equals K",
    explanation:
      "Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.",
    code: `
function subarraySum($nums, $k) {
    $count = 0;
    $sum = 0;
    $map = [0 => 1];
    foreach ($nums as $num) {
        $sum += $num;
        if (array_key_exists($sum - $k, $map)) {
            $count += $map[$sum - $k];
        }
        if (!array_key_exists($sum, $map)) {
            $map[$sum] = 1;
        } else {
            $map[$sum]++;
        }
    }
    return $count;
}`,
    solutionExplanation:
      "This solution uses a hashmap to keep track of cumulative sums.",
  },
  {
    id: 76,
    name: "Longest Consecutive Sequence",
    explanation:
      "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.",
    code: `
function longestConsecutive($nums) {
    $numSet = array_flip($nums);
    $maxStreak = 0;
    foreach ($numSet as $num => $_) {
        if (!isset($numSet[$num - 1])) {
            $currentNum = $num;
            $currentStreak = 1;
            while (isset($numSet[$currentNum + 1])) {
                $currentNum++;
                $currentStreak++;
            }
            $maxStreak = max($maxStreak, $currentStreak);
        }
    }
    return $maxStreak;
}`,
    solutionExplanation:
      "This solution utilizes a set to efficiently find consecutive sequences.",
  },
  {
    id: 77,
    name: "Product of Array Except Self",
    explanation:
      "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer. You must write an algorithm that runs in O(n) time and without using the division operation.",
    code: `
function productExceptSelf($nums) {
    $n = count($nums);
    $output = array_fill(0, $n, 1);
    $leftProduct = 1;
    for ($i = 0; $i < $n; $i++) {
        $output[$i] *= $leftProduct;
        $leftProduct *= $nums[$i];
    }
    $rightProduct = 1;
    for ($i = $n - 1; $i >= 0; $i--) {
        $output[$i] *= $rightProduct;
        $rightProduct *= $nums[$i];
    }
    return $output;
}`,
    solutionExplanation:
      "This solution computes the product of all elements except self in two passes.",
  },
  {
    id: 78,
    name: "Valid Parentheses",
    explanation:
      "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order.",
    code: `
function isValid($s) {
    $stack = [];
    $mapping = [
        ')' => '(',
        '}' => '{',
        ']' => '['
    ];
    for ($i = 0; $i < strlen($s); $i++) {
        if (in_array($s[$i], ['(', '{', '['])) {
            array_push($stack, $s[$i]);
        } elseif (in_array($s[$i], [')', '}', ']'])) {
            if (empty($stack)) return false;
            $top = array_pop($stack);
            if ($mapping[$s[$i]] !== $top) return false;
        }
    }
    return empty($stack);
}`,
    solutionExplanation:
      "This solution uses a stack to check for balanced parentheses.",
  },
  {
    id: 79,
    name: "Group Anagrams",
    explanation:
      "Given an array of strings strs, group the anagrams together. You can return the answer in any order. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
    code: `
function groupAnagrams($strs) {
    $groups = [];
    foreach ($strs as $str) {
        $key = count_chars($str, 1);
        $groups[$key][] = $str;
    }
    return array_values($groups);
}`,
    solutionExplanation:
      "This solution groups anagrams by counting the frequency of characters in each string.",
  },
  {
    id: 80,
    name: "Merge k Sorted Lists",
    explanation:
      "Merge k sorted linked lists and return it as one sorted list.",
    code: `
function mergeKLists($lists) {
    $merged = null;
    foreach ($lists as $list) {
        $merged = mergeTwoLists($merged, $list);
    }
    return $merged;
}`,
    solutionExplanation:
      "This solution iteratively merges sorted lists using a helper function mergeTwoLists.",
  },
  {
    id: 81,
    name: "Word Search",
    explanation:
      "Given an m x n grid of characters board and a string word, return true if word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where 'adjacent' cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.",
    code: `
function exist($board, $word) {
    $m = count($board);
    $n = count($board[0]);
    for ($i = 0; $i < $m; $i++) {
        for ($j = 0; $j < $n; $j++) {
            if (dfs($board, $word, 0, $i, $j)) {
                return true;
            }
        }
    }
    return false;
}

function dfs(&$board, $word, $index, $i, $j) {
    if ($index == strlen($word)) return true;
    if ($i < 0 || $i >= count($board) || $j < 0 || $j >= count($board[0]) || $board[$i][$j] != $word[$index]) return false;
    $temp = $board[$i][$j];
    $board[$i][$j] = '';
    $found = dfs($board, $word, $index + 1, $i + 1, $j) || dfs($board, $word, $index + 1, $i - 1, $j) || dfs($board, $word, $index + 1, $i, $j + 1) || dfs($board, $word, $index + 1, $i, $j - 1);
    $board[$i][$j] = $temp;
    return $found;
}`,
    solutionExplanation:
      "This solution uses DFS to search for the word on the board.",
  },
  {
    id: 82,
    name: "LRU Cache",
    explanation:
      "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement the LRUCache class: LRUCache(int capacity) Initialize the LRU cache with positive size capacity. int get(int key) Return the value of the key if the key exists, otherwise return -1. void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.",
    code: `
class LRUCache {
    private $capacity;
    private $map;
    private $list;

    function __construct($capacity) {
        $this->capacity = $capacity;
        $this->map = [];
        $this->list = new SplDoublyLinkedList();
    }

    function get($key) {
        if (!array_key_exists($key, $this->map)) {
            return -1;
        }
        $this->list->rewind();
        while ($this->list->valid()) {
            if ($this->list->current() === $key) {
                $this->list->unshift($this->list->current());
                $this->list->next();
                $this->list->shift();
                break;
            }
            $this->list->next();
        }
        return $this->map[$key];
    }

    function put($key, $value) {
        if (array_key_exists($key, $this->map)) {
            $this->list->rewind();
            while ($this->list->valid()) {
                if ($this->list->current() === $key) {
                    $this->list->unshift($this->list->current());
                    $this->list->next();
                    $this->list->shift();
                    break;
                }
                $this->list->next();
            }
        } else {
            if ($this->list->count() === $this->capacity) {
                $removedKey = $this->list->pop();
                unset($this->map[$removedKey]);
            }
            $this->list->unshift($key);
        }
        $this->map[$key] = $value;
    }
}`,
    solutionExplanation:
      "This solution uses a combination of a hashmap and a doubly linked list to implement the LRU cache.",
  },
  {
    id: 83,
    name: "Reorder Data in Log Files",
    explanation:
      "You have an array of logs. Each log is a space-delimited string of words, where the first word is the identifier. There are two types of logs: Letter-logs: All words (except the identifier) consist of lowercase English letters. Digit-logs: All words (except the identifier) consist of digits. Reorder these logs so that: The letter-logs come before all digit-logs. The letter-logs are sorted lexicographically by their contents. If their contents are the same, then sort them lexicographically by their identifiers. The digit-logs maintain their relative ordering. Return the final order of the logs.",
    code: `
function reorderLogFiles($logs) {
    $letterLogs = [];
    $digitLogs = [];
    foreach ($logs as $log) {
        $splitLog = explode(' ', $log, 2);
        if (ctype_digit($splitLog[1][0])) {
            $digitLogs[] = $log;
        } else {
            $letterLogs[] = $log;
        }
    }
    usort($letterLogs, function ($a, $b) {
        $splitA = explode(' ', $a, 2);
        $splitB = explode(' ', $b, 2);
        $contentA = $splitA[1];
        $contentB = $splitB[1];
        $compareContent = strcmp($contentA, $contentB);
        if ($compareContent == 0) {
            return strcmp($splitA[0], $splitB[0]);
        }
        return $compareContent;
    });
    return array_merge($letterLogs, $digitLogs);
}`,
    solutionExplanation:
      "This solution separates letter-logs and digit-logs, sorts letter-logs, and merges them with digit-logs.",
  },
  {
    id: 84,
    name: "Top K Frequent Elements",
    explanation:
      "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
    code: `
function topKFrequent($nums, $k) {
    $countMap = array_count_values($nums);
    arsort($countMap);
    return array_slice(array_keys($countMap), 0, $k);
}`,
    solutionExplanation:
      "This solution uses a hashmap to count the frequency of elements and then sorts the hashmap by frequency to get the top k frequent elements.",
  },
  {
    id: 85,
    name: "Find Median from Data Stream",
    explanation:
      "Design a data structure that supports the following two operations: void addNum(int num) - Add a integer number from the data stream to the data structure. double findMedian() - Return the median of all elements so far. The median should be returned as a double precision floating point number, not an integer.",
    code: `
class MedianFinder {
    private $maxHeap;
    private $minHeap;

    function __construct() {
        $this->maxHeap = new SplMaxHeap();
        $this->minHeap = new SplMinHeap();
    }

    function addNum($num) {
        if ($this->maxHeap->isEmpty() || $num <= $this->maxHeap->top()) {
            $this->maxHeap->insert($num);
        } else {
            $this->minHeap->insert($num);
        }
        if ($this->maxHeap->count() > $this->minHeap->count() + 1) {
            $this->minHeap->insert($this->maxHeap->extract());
        } elseif ($this->minHeap->count() > $this->maxHeap->count()) {
            $this->maxHeap->insert($this->minHeap->extract());
        }
    }

    function findMedian() {
        if ($this->maxHeap->count() == $this->minHeap->count()) {
            return ($this->maxHeap->top() + $this->minHeap->top()) / 2;
        }
        return $this->maxHeap->top();
    }
}`,
    solutionExplanation:
      "This solution uses two heaps (one max heap and one min heap) to efficiently find the median.",
  },
  {
    id: 86,
    name: "Evaluate Reverse Polish Notation",
    explanation:
      "Evaluate the value of an arithmetic expression in Reverse Polish Notation. Valid operators are +, -, *, and /. Each operand may be an integer or another expression.",
    code: `
function evalRPN($tokens) {
    $stack = [];
    foreach ($tokens as $token) {
        if (is_numeric($token)) {
            array_push($stack, $token);
        } else {
            $operand2 = array_pop($stack);
            $operand1 = array_pop($stack);
            switch ($token) {
                case '+':
                    array_push($stack, $operand1 + $operand2);
                    break;
                case '-':
                    array_push($stack, $operand1 - $operand2);
                    break;
                case '*':
                    array_push($stack, $operand1 * $operand2);
                    break;
                case '/':
                    array_push($stack, intval($operand1 / $operand2));
                    break;
            }
        }
    }
    return $stack[0];
}`,
    solutionExplanation:
      "This solution uses a stack to evaluate the arithmetic expression in Reverse Polish Notation.",
  },
  {
    id: 87,
    name: "Letter Combinations of a Phone Number",
    explanation:
      "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.",
    code: `
function letterCombinations($digits) {
    if (empty($digits)) return [];
    $mapping = [
        '2' => 'abc',
        '3' => 'def',
        '4' => 'ghi',
        '5' => 'jkl',
        '6' => 'mno',
        '7' => 'pqrs',
        '8' => 'tuv',
        '9' => 'wxyz'
    ];
    $result = [''];
    for ($i = 0; $i < strlen($digits); $i++) {
        $letters = $mapping[$digits[$i]];
        $temp = [];
        foreach ($result as $prev) {
            foreach (str_split($letters) as $letter) {
                $temp[] = $prev . $letter;
            }
        }
        $result = $temp;
    }
    return $result;
}`,
    solutionExplanation:
      "This solution generates letter combinations using backtracking.",
  },
  {
    id: 88,
    name: "Binary Tree Level Order Traversal",
    explanation:
      "Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).",
    code: `
function levelOrder($root) {
    if (!$root) return [];
    $result = [];
    $queue = new SplQueue();
    $queue->enqueue($root);
    while (!$queue->isEmpty()) {
        $level = [];
        $size = $queue->count();
        for ($i = 0; $i < $size; $i++) {
            $node = $queue->dequeue();
            $level[] = $node->val;
            if ($node->left) $queue->enqueue($node->left);
            if ($node->right) $queue->enqueue($node->right);
        }
        $result[] = $level;
    }
    return $result;
}`,
    solutionExplanation:
      "This solution performs level order traversal using a queue.",
  },
  {
    id: 89,
    name: "Find the Difference",
    explanation:
      "You are given two strings s and t. String t is generated by randomly shuffling string s and then adding one more letter at a random position. Return the letter that was added to t.",
    code: `
function findTheDifference($s, $t) {
    $diff = 0;
    for ($i = 0; $i < strlen($s); $i++) {
        $diff ^= ord($s[$i]);
        $diff ^= ord($t[$i]);
    }
    $diff ^= ord($t[strlen($t) - 1]);
    return chr($diff);
}`,
    solutionExplanation:
      "This solution uses XOR operation to find the added letter.",
  },
  {
    id: 90,
    name: "Sum of Two Integers",
    explanation:
      "Given two integers a and b, return the sum of the two integers without using the operators + and -.",
    code: `
function getSum($a, $b) {
    while ($b != 0) {
        $carry = $a & $b;
        $a = $a ^ $b;
        $b = $carry << 1;
    }
    return $a;
}`,
    solutionExplanation:
      "This solution uses bitwise operations to compute the sum of two integers.",
  },
  {
    id: 91,
    name: "Maximum Depth of Binary Tree",
    explanation:
      "Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
    code: `
function maxDepth($root) {
    if (!$root) return 0;
    $leftDepth = maxDepth($root->left);
    $rightDepth = maxDepth($root->right);
    return max($leftDepth, $rightDepth) + 1;
}`,
    solutionExplanation:
      "This solution calculates the maximum depth of a binary tree recursively.",
  },
  {
    id: 92,
    name: "Unique Paths",
    explanation:
      "A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below). The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below). How many possible unique paths are there?",
    code: `
function uniquePaths($m, $n) {
    $dp = array_fill(0, $m, array_fill(0, $n, 1));
    for ($i = 1; $i < $m; $i++) {
        for ($j = 1; $j < $n; $j++) {
            $dp[$i][$j] = $dp[$i - 1][$j] + $dp[$i][$j - 1];
        }
    }
    return $dp[$m - 1][$n - 1];
}`,
    solutionExplanation:
      "This solution uses dynamic programming to calculate the number of unique paths.",
  },
  {
    id: 93,
    name: "Validate Binary Search Tree",
    explanation:
      "Given the root of a binary tree, determine if it is a valid binary search tree (BST). A valid BST is defined as follows: The left subtree of a node contains only nodes with keys less than the node's key. The right subtree of a node contains only nodes with keys greater than the node's key. Both the left and right subtrees must also be binary search trees.",
    code: `
function isValidBST($root, $min = null, $max = null) {
    if (!$root) return true;
    if (($min !== null && $root->val <= $min) || ($max !== null && $root->val >= $max)) return false;
    return isValidBST($root->left, $min, $root->val) && isValidBST($root->right, $root->val, $max);
}`,
    solutionExplanation:
      "This solution recursively validates if a binary tree is a valid binary search tree.",
  },
  {
    id: 94,
    name: "Sort List",
    explanation:
      "Given the head of a linked list, return the list after sorting it in ascending order. Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?",
    code: `
class ListNode {
    public $val = 0;
    public $next = null;
    function __construct($val = 0, $next = null) {
        $this->val = $val;
        $this->next = $next;
    }
}

function sortList($head) {
    if (!$head || !$head->next) return $head;
    $slow = $head;
    $fast = $head;
    $prev = null;
    while ($fast && $fast->next) {
        $prev = $slow;
        $slow = $slow->next;
        $fast = $fast->next->next;
    }
    $prev->next = null;
    $left = sortList($head);
    $right = sortList($slow);
    return merge($left, $right);
}

function merge($l1, $l2) {
    $dummy = new ListNode();
    $current = $dummy;
    while ($l1 && $l2) {
        if ($l1->val < $l2->val) {
            $current->next = $l1;
            $l1 = $l1->next;
        } else {
            $current->next = $l2;
            $l2 = $l2->next;
        }
        $current = $current->next;
    }
    $current->next = $l1 ? $l1 : $l2;
    return $dummy->next;
}`,
    solutionExplanation: "This solution sorts a linked list using merge sort.",
  },
  {
    id: 95,
    name: "Reverse Words in a String",
    explanation:
      "Given an input string s, reverse the order of the words. A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.",
    code: `
function reverseWords($s) {
    $words = explode(' ', $s);
    $reversedWords = array_reverse($words);
    return implode(' ', $reversedWords);
}`,
    solutionExplanation:
      "This solution splits the string into words, reverses the order of the words, and then joins them back together.",
  },
  {
    id: 96,
    name: "Longest Palindromic Substring",
    explanation:
      "Given a string s, return the longest palindromic substring in s.",
    code: `
function longestPalindrome($s) {
    $n = strlen($s);
    $maxLength = 1;
    $start = 0;
    for ($i = 0; $i < $n; $i++) {
        $left = $i;
        $right = $i;
        while ($left >= 0 && $right < $n && $s[$left] == $s[$right]) {
            $currentLength = $right - $left + 1;
            if ($currentLength > $maxLength) {
                $start = $left;
                $maxLength = $currentLength;
            }
            $left--;
            $right++;
        }
        $left = $i;
        $right = $i + 1;
        while ($left >= 0 && $right < $n && $s[$left] == $s[$right]) {
            $currentLength = $right - $left + 1;
            if ($currentLength > $maxLength) {
                $start = $left;
                $maxLength = $currentLength;
            }
            $left--;
            $right++;
        }
    }
    return substr($s, $start, $maxLength);
}`,
    solutionExplanation:
      "This solution expands around the center for each character and each pair of adjacent characters to find the longest palindromic substring.",
  },
  {
    id: 97,
    name: "Minimum Window Substring",
    explanation:
      "Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return an empty string. The window substring can be in any order.",
    code: `
function minWindow($s, $t) {
    $tMap = [];
    foreach (str_split($t) as $char) {
        if (!array_key_exists($char, $tMap)) {
            $tMap[$char] = 0;
        }
        $tMap[$char]++;
    }
    $requiredChars = count($tMap);
    $left = 0;
    $right = 0;
    $minWindow = '';
    $minLength = INF;
    $windowMap = [];
    $formed = 0;
    while ($right < strlen($s)) {
        $char = $s[$right];
        if (!array_key_exists($char, $windowMap)) {
            $windowMap[$char] = 0;
        }
        $windowMap[$char]++;
        if (array_key_exists($char, $tMap) && $windowMap[$char] == $tMap[$char]) {
            $formed++;
        }
        while ($left <= $right && $formed == $requiredChars) {
            if ($right - $left + 1 < $minLength) {
                $minWindow = substr($s, $left, $right - $left + 1);
                $minLength = $right - $left + 1;
            }
            $char = $s[$left];
            $windowMap[$char]--;
            if (array_key_exists($char, $tMap) && $windowMap[$char] < $tMap[$char]) {
                $formed--;
            }
            $left++;
        }
        $right++;
    }
    return $minLength == INF ? '' : $minWindow;
}`,
    solutionExplanation:
      "This solution uses a sliding window approach to find the minimum window substring.",
  },
  {
    id: 98,
    name: "Combination Sum",
    explanation:
      "Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order. The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.",
    code: `
function combinationSum($candidates, $target) {
    $result = [];
    backtrack($result, [], $candidates, $target, 0);
    return $result;
}

function backtrack(&$result, $current, $candidates, $target, $start) {
    if ($target < 0) {
        return;
    } elseif ($target == 0) {
        $result[] = $current;
        return;
    }
    for ($i = $start; $i < count($candidates); $i++) {
        $current[] = $candidates[$i];
        backtrack($result, $current, $candidates, $target - $candidates[$i], $i);
        array_pop($current);
    }
}`,
    solutionExplanation:
      "This solution uses backtracking to generate all unique combinations.",
  },
  {
    id: 99,
    name: "Search in Rotated Sorted Array",
    explanation:
      "You are given an integer array nums sorted in ascending order (with distinct values), and an integer target. Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]). If target is found in the array return its index, otherwise, return -1.",
    code: `
function search($nums, $target) {
    $left = 0;
    $right = count($nums) - 1;
    while ($left <= $right) {
        $mid = $left + intdiv($right - $left, 2);
        if ($nums[$mid] == $target) {
            return $mid;
        } elseif ($nums[$mid] >= $nums[$left]) {
            if ($target >= $nums[$left] && $target < $nums[$mid]) {
                $right = $mid - 1;
            } else {
                $left = $mid + 1;
            }
        } else {
            if ($target > $nums[$mid] && $target <= $nums[$right]) {
                $left = $mid + 1;
            } else {
                $right = $mid - 1;
            }
        }
    }
    return -1;
}`,
    solutionExplanation:
      "This solution performs a modified binary search to find the target element in a rotated sorted array.",
  },
  {
    id: 100,
    name: "Add Binary",
    explanation:
      "Given two binary strings a and b, return their sum as a binary string.",
    code: `
function addBinary($a, $b) {
    $carry = 0;
    $result = '';
    $i = strlen($a) - 1;
    $j = strlen($b) - 1;
    while ($i >= 0 || $j >= 0 || $carry > 0) {
        $sum = $carry;
        if ($i >= 0) {
            $sum += intval($a[$i]);
            $i--;
        }
        if ($j >= 0) {
            $sum += intval($b[$j]);
            $j--;
        }
        $result = ($sum % 2) . $result;
        $carry = intdiv($sum, 2);
    }
    return $result;
}`,
    solutionExplanation:
      "This solution performs binary addition digit by digit.",
  },
  {
    id: 101,
    name: "Container With Most Water",
    explanation:
      "Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai), n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.",
    code: `
function maxArea($height) {
    $maxArea = 0;
    $left = 0;
    $right = count($height) - 1;
    while ($left < $right) {
        $area = min($height[$left], $height[$right]) * ($right - $left);
        $maxArea = max($maxArea, $area);
        if ($height[$left] < $height[$right]) {
            $left++;
        } else {
            $right--;
        }
    }
    return $maxArea;
}`,
    solutionExplanation:
      "This solution uses two pointers to maximize the area.",
  },
  {
    id: 102,
    name: "Subsets",
    explanation:
      "Given an integer array nums of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.",
    code: `
function subsets($nums) {
    $result = [[]];
    foreach ($nums as $num) {
        $temp = [];
        foreach ($result as $subset) {
            $temp[] = array_merge($subset, [$num]);
        }
        $result = array_merge($result, $temp);
    }
    return $result;
}`,
    solutionExplanation: "This solution generates subsets using backtracking.",
  },
  {
    id: 103,
    name: "Search Insert Position",
    explanation:
      "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.",
    code: `
function searchInsert($nums, $target) {
    $left = 0;
    $right = count($nums) - 1;
    while ($left <= $right) {
        $mid = $left + intdiv($right - $left, 2);
        if ($nums[$mid] == $target) {
            return $mid;
        } elseif ($nums[$mid] < $target) {
            $left = $mid + 1;
        } else {
            $right = $mid - 1;
        }
    }
    return $left;
}`,
    solutionExplanation:
      "This solution performs a modified binary search to find the target or the position where it should be inserted.",
  },
  {
    id: 104,
    name: "Permutations",
    explanation:
      "Given an array nums of distinct integers, return all possible permutations. You can return the answer in any order.",
    code: `
function permute($nums) {
$result = [];
backtrack($result, [], $nums);
return $result;
}

function backtrack(&$result, $current, $nums) {
if (count($current) == count($nums)) {
$result[] = $current;
return;
}
foreach ($nums as $num) {
if (!in_array($num, $current)) {
$current[] = $num;
backtrack($result, $current, $nums);
array_pop($current);
}
}
}`,
    solutionExplanation:
      "This solution uses backtracking to generate all possible permutations.",
  },
  {
    id: 105,
    name: "Combination Sum II",
    explanation:
      "Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target. Each number in candidates may only be used once in the combination. Note: The solution set must not contain duplicate combinations.",
    code: `function combinationSum2($candidates, $target) {
sort($candidates);
$result = [];
backtrack($result, [], $candidates, $target, 0);
return $result;
}

function backtrack(&$result, $current, $candidates, $target, $start) {
if ($target < 0) {
return;
} elseif ($target == 0) {
$result[] = $current;
return;
}
for ($i = $start; $i < count($candidates); $i++) {
if ($i > $start && $candidates[$i] == $candidates[$i - 1]) {
continue;
}
$current[] = $candidates[$i];
backtrack($result, $current, $candidates, $target - $candidates[$i], $i + 1);
array_pop($current);
}
}`,
    solutionExplanation:
      "This solution uses backtracking to generate all unique combinations, avoiding duplicates by skipping identical elements.",
  },
  {
    id: 106,
    name: "Pow(x, n)",
    explanation:
      "Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).",
    code: `function myPow($x, $n) {
if ($n == 0) return 1;
if ($n < 0) {
$x = 1 / $x;
$n = -$n;
}
$result = 1;
while ($n > 0) {
if ($n % 2 == 1) {
$result *= $x;
}
$x *= $x;
$n = intdiv($n, 2);
}
return $result;
}`,
    solutionExplanation:
      "This solution uses binary exponentiation to efficiently calculate the power of x to n.",
  },
  {
    id: 107,
    name: "Spiral Matrix",
    explanation:
      "Given an m x n matrix, return all elements of the matrix in spiral order.",
    code: `function spiralOrder($matrix) {
$result = [];
$rows = count($matrix);
$cols = count($matrix[0]);
$top = 0;
$bottom = $rows - 1;
$left = 0;
$right = $cols - 1;
while ($top <= $bottom && $left <= $right) {
// Traverse top row
for ($i = $left; $i <= $right; $i++) {
$result[] = $matrix[$top][$i];
}
$top++;
// Traverse rightmost column
for ($i = $top; $i <= $bottom; $i++) {
$result[] = $matrix[$i][$right];
}
$right--;
if ($top <= $bottom) {
// Traverse bottom row
for ($i = $right; $i >= $left; $i--) {
$result[] = $matrix[$bottom][$i];
}
$bottom--;
}
if ($left <= $right) {
// Traverse leftmost column
for ($i = $bottom; $i >= $top; $i--) {
$result[] = $matrix[$i][$left];
}
$left++;
}
}
return $result;
}`,
    solutionExplanation:
      "This solution traverses the matrix in a spiral order, updating the boundaries as it progresses.",
  },
  {
    id: 108,
    name: "Jump Game",
    explanation:
      "Given an array of non-negative integers nums, you are initially positioned at the first index of the array. Each element in the array represents your maximum jump length at that position. Determine if you can reach the last index.",
    code: `function canJump($nums) {
$lastPos = count($nums) - 1;
for ($i = count($nums) - 2; $i >= 0; $i--) {
if ($i + $nums[$i] >= $lastPos) {
$lastPos = $i;
}
}
return $lastPos === 0;
}`,
    solutionExplanation:
      "This solution iterates through the array from right to left, updating the last position that can be reached from the current position.",
  },
  {
    id: 109,
    name: "Merge Intervals",
    explanation:
      "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
    code: `
function merge($intervals) {
    if (empty($intervals)) return [];
    sort($intervals);
    $result = [];
    $current = $intervals[0];
    foreach ($intervals as $interval) {
        if ($interval[0] <= $current[1]) {
            $current[1] = max($current[1], $interval[1]);
        } else {
            $result[] = $current;
            $current = $interval;
        }
    }
    $result[] = $current;
    return $result;
}`,
    solutionExplanation:
      "This solution sorts the intervals and merges overlapping intervals.",
  },
  {
    id: 110,
    name: "Unique Paths II",
    explanation:
      "A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below). The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below). Now consider if some obstacles are added to the grids. How many unique paths would there be?",
    code: `
function uniquePathsWithObstacles($obstacleGrid) {
    $m = count($obstacleGrid);
    $n = count($obstacleGrid[0]);
    $dp = array_fill(0, $m, array_fill(0, $n, 0));
    if ($obstacleGrid[0][0] == 0) {
        $dp[0][0] = 1;
    }
    for ($i = 0; $i < $m; $i++) {
        for ($j = 0; $j < $n; $j++) {
            if ($obstacleGrid[$i][$j] == 1) continue;
            if ($i > 0) $dp[$i][$j] += $dp[$i - 1][$j];
            if ($j > 0) $dp[$i][$j] += $dp[$i][$j - 1];
        }
    }
    return $dp[$m - 1][$n - 1];
}`,
    solutionExplanation:
      "This solution uses dynamic programming to calculate the number of unique paths with obstacles.",
  },
  {
    id: 111,
    name: "Next Permutation",
    explanation:
      "Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers. If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order). The replacement must be in place and use only constant extra memory.",
    code: `
function nextPermutation(&$nums) {
    $n = count($nums);
    $i = $n - 2;
    while ($i >= 0 && $nums[$i] >= $nums[$i + 1]) {
        $i--;
    }
    if ($i >= 0) {
        $j = $n - 1;
        while ($nums[$j] <= $nums[$i]) {
            $j--;
        }
        swap($nums, $i, $j);
    }
    reverse($nums, $i + 1, $n - 1);
}

function swap(&$nums, $i, $j) {
    $temp = $nums[$i];
    $nums[$i] = $nums[$j];
    $nums[$j] = $temp;
}

function reverse(&$nums, $start, $end) {
    while ($start < $end) {
        swap($nums, $start, $end);
        $start++;
        $end--;
    }
}`,
    solutionExplanation:
      "This solution finds the next lexicographically greater permutation by iterating backwards through the array.",
  },
  {
    id: 112,
    name: "Longest Valid Parentheses",
    explanation:
      "Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.",
    code: `
function longestValidParentheses($s) {
    $maxLen = 0;
    $stack = [-1];
    for ($i = 0; $i < strlen($s); $i++) {
        if ($s[$i] == '(') {
            array_push($stack, $i);
        } else {
            array_pop($stack);
            if (empty($stack)) {
                array_push($stack, $i);
            } else {
                $maxLen = max($maxLen, $i - end($stack));
            }
        }
    }
    return $maxLen;
}`,
    solutionExplanation:
      "This solution uses a stack to keep track of the indices of '(' characters and calculates the length of the longest valid parentheses substring.",
  },
];
