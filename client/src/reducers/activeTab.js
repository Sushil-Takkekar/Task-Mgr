/**
 * Set active tab for Navbar
 * Options : Login, Register, Dashboard, Profile, Logout
 */
const Navbar_activeTab = (state = 'LOGIN', action) => {
    switch(action.type) {
        case 'LOGIN':
            return 'LOGIN'
        case 'REGISTER':
            return 'LOGIN'
        default:
            return state
    }
}

export default Navbar_activeTab