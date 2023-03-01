const initState = {
    themeId: 1,
};



// export type changeThemeType = {
//     type: string;
//     id: number;
// };

// export type themeReducerType = ReturnType<typeof themeReducer>
export const themeReducer = (state = initState, action: changeThemeType): typeof state => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.id
            };
        default:
            return state;
    }
};


export type changeThemeType = ReturnType<typeof changeThemeId>;
export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id }); // fix any
