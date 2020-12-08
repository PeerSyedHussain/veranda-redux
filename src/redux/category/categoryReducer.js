// import { CLICK_CATEGORY_ALL } from './categoryTypes'

const initialState = {
    category_list : [
        {
          id : 'all',
          label : 'All',
          value : true
        },
        {
          id : 'ibps_exams',
          label : 'IBPS Exams',
          value : false
        },
        {
          id : 'finance_markets',
          label : 'Finance Markets',
          value : false
        },
        {
          id : 'economics',
          label : 'Economics',
          value : false
        },
        {
          id : 'finance_services',
          label : 'Finance Services',
          value : false
        },
        {
          id : 'statistics',
          label : 'Statistics',
          value : false
        },
        {
          id : 'data_analysis',
          label : 'Data Analysis',
          value : false
        },
        {
          id : 'accountant',
          label : 'Accountant',
          value : false
        },
        {
          id : 'gst',
          label : 'GST',
          value : false
        },
        {
          id : 'market_trend',
          label : 'Market Trend',
          value : false
        },
    ],
}

// const categoryReducer = (state = initialState,action) => {
//     if(action.type){

//     }
// }

// export default categoryReducer