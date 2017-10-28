export default (name) => ({
    type: 'ADD_SEARCH',
    payload: {
        name:  name ,
        date: new Date().toDateString()
    }
});