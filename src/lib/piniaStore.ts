import {defineStore} from 'pinia'
import {ref} from "vue";
// import PocketBase from 'pocketbase';
// // PocketBase
// const pb = new PocketBase('https://datoun.pockethost.io');
// const resultList = await pb.collection('companies').getList(1, 50, {
//     filter: 'created >= "2022-01-01 00:00:00"',
// });


export const enum state_enum{
    ShowingComapniesGrid,
    ShowingDetail,
    ShowingEdit,
}

export const piniaStore = defineStore('counter', () => {

    const category_a_selected = "Category A"
    const category_b_selected = "Category B"
    const category_c_selected = "Category C"
    const company_id_selected = ref(-1)
    const state = ref(state_enum.ShowingComapniesGrid)
    // const companies = resultList.items

    function changeState(newState: state_enum) {
        state.value = newState
    }

    function showCompanyDetail(id: number) {
        company_id_selected.value = id
        state.value = state_enum.ShowingDetail
    }
    function resetAndGoHome(){
        company_id_selected.value = -1
        state.value = state_enum.ShowingComapniesGrid
    }

    const categories = [
        {
            id: 11,
            name: "Elektronika",
            subcategories: [
                {
                    id: 123,
                    name: "Počítače",
                    subcategories: [
                        {
                            id: 999,
                            name: "Notebooky"
                        },
                        {
                            id: 888,
                            name: "Laptopy"
                        }
                    ]
                }
            ]
        },
        {
            id: 11,
            name: "Móda a doplňky",
            subcategories: [
                {
                    id: 123,
                    name: "Oblečení",
                    subcategories: [
                        {
                            id: 999,
                            name: "Trička"
                        },
                        {
                            id: 888,
                            name: "Kalhoty"
                        },
                        {
                            id: 889,
                            name: "Sukně"
                        }
                    ]
                }
            ]
        },
        {
            id: 11,
            name: "Dům a zahrada",
            subcategories: [
                {
                    id: 123,
                    name: "Zahrada",
                    subcategories: [
                        {
                            id: 999,
                            name: "Sekačky"
                        },
                    ]
                }
            ]
        },
    ]

    const companies = [
        {
            id: 0,
            name: "Company A",
            description: "Lorem Ipsum dolor sit amet",
        },
        {
            id: 1,
            name: "Company B",
            description: "Lorem Ipsum dolor sit amet",
        },
        {
            id: 2,
            name: "Company C",
            description: "Lorem Ipsum dolor sit amet",
        },
        {
            id: 3,
            name: "Company D",
            description: "Lorem Ipsum dolor sit amet",
        },
        {
            id: 4,
            name: "Company E",
            description: "Lorem Ipsum dolor sit amet",
        },
        {
            id: 5,
            name: "Company F",
            description: "Lorem Ipsum dolor sit amet",
        },
        {
            id: 6,
            name: "Company G",
            description: "Lorem Ipsum dolor sit amet",
        },
        {
            id: 7,
            name: "Company H",
            description: "Lorem Ipsum dolor sit amet",
        },
        {
            id: 8,
            name: "Company I",
            description: "Lorem Ipsum dolor sit amet",
        },
        {
            id: 9,
            name: "Company J",
            description: "Lorem Ipsum dolor sit amet",
        },
        {
            id: 10,
            name: "Company K",
            description: "Lorem Ipsum dolor sit amet",},
        {
            id: 11,
            name: "Company L",
            description: "Lorem Ipsum dolor sit amet",
        },{
            id: 12,
            name: "Company M",
            description: "Lorem Ipsum dolor sit amet",
        },{
            id: 13,
            name: "Company N",
            description: "Lorem Ipsum dolor sit amet",
        },{
            id: 14,
            name: "Company O",
            description: "Lorem Ipsum dolor sit amet",
        },{
            id: 15,
            name: "Company P",
            description: "Lorem Ipsum dolor sit amet",
        }
    ];

    return {
        companies,
        category_a_selected,
        category_b_selected,
        category_c_selected,
        categories,
        state,
        company_id_selected,
        showCompanyDetail,
        resetAndGoHome,
        changeState,
    }
})