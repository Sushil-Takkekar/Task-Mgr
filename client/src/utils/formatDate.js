/**
 * Function to format the date
 */
// append 0 to date value if it is a single digit.
export const appendZero = (val) => {
    return (val < 10) ? '0'+val : val
}

export const formatDashboardDate = (dt) => {
    const monthNames = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun", 
        "Jul", "Aug", "Sep", 
        "Oct", "Nov", "Dec"
    ];
    
    const date = new Date(dt)
    const day = appendZero(date.getDate())
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

export const formatHtmlInputDateType = (date) => {
    const new_date = new Date(date)
    const dd = appendZero(new_date.getDate())
    const mm = appendZero(new_date.getMonth()+1)
    const yyyy = new_date.getFullYear()
    return yyyy+'-'+mm+'-'+dd
}