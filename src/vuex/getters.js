// 这个 getHeaderTitle 函数会返回 headerTitle 的值
// 在 ES6 里你可以写成：

// export function getHeaderTitle (state) {
//     return state.getHeaderTitle;
// }

export const getHeaderTitle = state => state.getHeaderTitle;