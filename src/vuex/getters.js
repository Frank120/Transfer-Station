// 这个 getHeaderTitle 函数会返回 headerTitle 的值

export function getHeaderTitle (state) {
    console.log('from getter' + state);
}

// export const getHeaderTitle = state => state.getHeaderTitle;
