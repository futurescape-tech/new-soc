type SearchData = {
  id: string
  name: string
  url: string
  excludeLang?: boolean
  icon: string
  section: string
  shortcut?: string
}

const data: SearchData[] = [
  {
    id: '1',
    name: 'Dashboard',
    url: '/dashboard/',
    icon: 'ri-pie-chart-2-line',
    section: 'Dashboard'
  },
  {
    id: '2',
    name: 'Users',
    url: '/dashboard/users',
    icon: 'ri-user-3-line',
    section: 'Users'
  },
  {
    id: '3',
    name: 'Roles',
    url: '/dashboard/roles',
    icon: 'ri-shield-user-line',
    section: 'Users'
  },
  {
    id: '4',
    name: 'Permissions',
    url: '/dashboard/permissions',
    icon: 'ri-shield-user-line',
    section: 'Users'
  },
  {
    id: '5',
    name: 'Settings',
    url: '/dashboard/settings',
    icon: 'ri-settings-3-line',
    section: 'Settings'
  },
  {
    id: '6',
    name: 'Profile',
    url: '/dashboard/profile',
    icon: 'ri-user-3-line',
    section: 'Profile'
  },
  {
    id: '7',
    name: 'Log Out',
    url: '/dashboard/logout',
    icon: 'ri-logout-box-line',
    section: 'Profile'
  }
]

export default data
