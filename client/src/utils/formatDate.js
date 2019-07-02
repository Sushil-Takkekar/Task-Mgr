/**
 * Function to format the date
 */
export const formatDashboardDate = (dt) => {
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

export const setFilterDate = (date) => {
    const new_date = new Date(date)
    new_date.setHours(23)
    new_date.setMinutes(59)
    new_date.setSeconds(59)
    return new_date
}