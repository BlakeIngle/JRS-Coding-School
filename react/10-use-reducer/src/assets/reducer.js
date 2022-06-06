/**
 * Given the current state and some action, do anything.
 * Must return a value of the new state.
 * 
 * Multiple actions can be condensed or 'reduced' into one 
 * function this way.
 * 
 * The action must be an object with a 'type' prop
 * and an optional 'payload' prop
 * 
 * The reducer function includes all 'buisness logic' so the
 * components do not get too bulky
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export function reducer(state, action) {

    switch (action.foo) {
        case 'reset':
            return resetArray();
        case 'select-index':
            return selectIndex(state, action.payload);


    }

    return state;
}

function resetArray(state) {
    let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    for (let i = 0; i < 10; i++) {
        let randI = Math.floor(Math.random() * 10)

        let temp = newArr[i]
        newArr[i] = newArr[randI]
        newArr[randI] = temp;
    }

    return {
        myArr: newArr,
        i1: null,
        i2: null,
        temp: null
    }

}

function selectIndex(state, i) {
    if (state.i1 >= 0) {
        return {
            ...state,
            i2: i
        }
    } else {
        return {
            ...state,
            i1: i
        }
    }
}