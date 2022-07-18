# vdom-diff

react、vue 的 diff 算法解析

[react-diff 思维导图](https://www.processon.com/view/link/61b20cab1e08534ca6ddc6f8#map)

[vue-diff 思维导图](https://www.processon.com/view/link/618b83c51efad41bf2be1f9b#map)

## 运行

1、安装依赖`pnpm install`

2、执行测试代码`pnpm run test`

## vue-diff 过程

- 从左边往右边查找，直到节点不能复用，停止查找；
- 从右边往左边查找，直到节点不能复用，停止查找；
- 老节点没了，新节点还有，进行新增操作
- 老节点还有，新节点没了，进行删除操作

## react-diff 过程

## react 和 vuediff 算法不同点总结

react 的 vdom 采用的是单链表
从左到右的遍历

vue 的 vdom 采用的是数组
