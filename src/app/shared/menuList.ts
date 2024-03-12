export const adminmenuList = [
  {
    text: "project",
    icon: "analytics",
    allowedRoles: ['admin'],
    routerLink: "/client/view-project"
  },
  {
    text: "Master",
    icon: "dashboard",
    allowedRoles: ['admin', 'TeamLead', 'LeadGenerator', 'blog'],
    children: [
      {
        text: "role mapping",
        icon: "category",
        allowedRoles: ['admin', 'TeamLead'],
        routerLink: "/client/role-mapping"
      },

    ]
  },
]

export const vendormenuList = [
  {
    text: "Dashboard",
    icon: "analytics",
    allowedRoles: ['supervisor'],

    routerLink: "/vendor/dashboard"
  },


]

export const supervisormenuList = [
  {
    text: "Dashboard",
    icon: "analytics",
    allowedRoles: ['supervisor'],

    routerLink: "/supervisor/dashboard"
  },


]


