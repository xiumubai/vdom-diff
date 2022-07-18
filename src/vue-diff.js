/*
 * @Author: 朽木白
 * @Date: 2022-07-18 16:12:20
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-07-18 17:18:33
 * @Description:
 */

/**

// old array  a b c d e f g
// new array  a b e c d h f g

// mountElement 新增元素 h
// patch  复用元素 a b c d e f g
// unmount 删除元素
// move 元素移动 

 */

/**
 * @description:
 * @param {*} c1            老节点
 * @param {*} c2            新节点
 * @param {*} mountElement  新增元素
 * @param {*} patch         复用元素
 * @param {*} unmount       删除元素
 * @param {*} move          元素移动
 * @return {*}
 */
exports.diffArray = (c1, c2, { mountElement, patch, unmount, move }) => {
  function isSameVnodeType(n1, n2) {
    return n1.key === n2.key; // && n1.type === n2.type;
  }

  /** 老节点长度 */
  let l1 = c1.length;
  /** 新节点长度 */
  let l2 = c2.length;
  /** 游标 */
  let i = 0;
  /** 老节点结束位置 */
  let e1 = l1 - 1;
  /** 新节点结束位置 */
  let e2 = l2 - 1;

  // *1 从左边往右，如果元素可以复用就继续往右边，否则就停止循环
  while (i <= e1 && i <= e2) {
    const n1 = c1[i];
    const n2 = c2[i];
    if (isSameVnodeType(n1, n2)) {
      patch(n1.key);
    } else {
      break;
    }
    i++;
  }

  // *2 从右边往左，如果元素可以复用就继续往左边，否则就停止循环
  while (i <= e1 && i <= e2) {
    const n1 = c1[e1];
    const n2 = c2[e2];
    if (isSameVnodeType(n1, n2)) {
      patch(n1.key);
    } else {
      break;
    }
    e1--;
    e2--;
  }
};
