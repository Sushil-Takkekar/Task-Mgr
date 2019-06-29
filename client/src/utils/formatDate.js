/**
 * Function to format the date
 */
const formatDate = (dt) => {
    const monthNames = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun", 
        "Jul", "Aug", "Sep", 
        "Oct", "Nov", "Dec"
    ];
    
    const date = new Date(dt)
    const day = (date.getDate()<10 ? '0'+date.getDate() : date.getDate());  // if dat value is simgle digit, append 0 to it.
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    
    const curr_date = new Date();
    const print_year = (curr_date.getFullYear() === year ? '' : ' '+year);

    return day + ' ' + monthNames[monthIndex] + print_year;
}

export default formatDate