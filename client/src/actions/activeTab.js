/** 
 * Common action for all types of Navbar links.
 * It accepts the type/text of a link from the dispatch paramater.
 */
export const activate_NavbarLink = (link_text) => dispatch => {
    dispatch({
        type: link_text
    })
}
