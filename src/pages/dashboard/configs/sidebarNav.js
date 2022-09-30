import DoneAllIcon from '@mui/icons-material/DoneAll';
import AddBoxIcon from '@mui/icons-material/AddBox';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import StarIcon from '@mui/icons-material/Star';
const sidebarNav = [
    {
        link: '/admin',
        section: 'home',
        icon: <AddBoxIcon />,
        text: 'Add Product'
    },
    {
        link: '/admin/finished-table',
        section: 'dashboard/finished-table',
        icon: <DoneAllIcon />,
        text: 'Table of finished pr.'
    },
    {
        link: '/admin/not-finished-table',
        section: 'dashboard/not-finished-table',
        icon: <RemoveDoneIcon />,
        text: 'Table of not finished pr.'
    },
    {
        link: '/admin/favorites-table',
        section: 'dashboard/favorites-table',
        icon: <StarIcon />,
        text: 'Favorites Table'
    },
    {
        link: '/admin/settings',
        section: 'dashboard/settings',
        icon: <i className='bx bx-cog'></i>,
        text: 'Settings'
    }
]

export default sidebarNav