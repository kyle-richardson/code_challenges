// Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

// You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

// Example 1:

// Input: 
// 	Tree 1                     Tree 2                  
//           1                         2                             
//          / \                       / \                            
//         3   2                     1   3                        
//        /                           \   \                      
//       5                             4   7                  
// Output: 
// Merged tree:
// 	     3
// 	    / \
// 	   4   5
// 	  / \   \ 
// 	 5   4   7
 

// Note: The merging process must start from the root nodes of both trees.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var mergeTrees = function(t1, t2) {
    if (!t1 && !t2) return null //base case
    let value = 0
    let val1 = 0
    let left1 = 0
    let right1 = 0
    let val2 = 0
    let left2 = 0
    let right2 = 0
    if (!!t1) { //avoids null errors for calling .val, .left, .right on null
        val1 = t1.val
        left1 = t1.left
        right1 = t1.right
    }
    if (!!t2) { //avoids null errors for calling .val, .left, .right on null
        val2 = t2.val
        left2 = t2.left
        right2 = t2.right
    }
    value = val1+val2 // computation for each recursive call
    let left = mergeTrees(left1, left2) //recursive call
    let right = mergeTrees(right1, right2) //recursive call
    
    return new TreeNode(value, left, right)
};

