export const adminmenuList=[
    {
      text: "project",
      icon: "analytics",
      allowedRoles: ['admin'],

      routerLink: "/client/view-project"
    },
    
    // {
    //   text: "Master",
    //   icon: "dashboard",
    //   allowedRoles: ['admin', 'TeamLead', 'LeadGenerator', 'blog'],
    //   children: [{
    //     text: "Property",
    //     icon: "category",
    //     allowedRoles: ['admin', 'TeamLead'],
    //     routerLink: "/property"
    //   },
    //   {
    //     "text": "Enquiry",
    //     "icon": "layers",
    //     allowedRoles: ['admin', 'TeamLead', 'LeadGenerator', 'blog'],
    //     "routerLink": "/enquiry"
    //   },
    //   ]
    // },
    // {
    //   text: "Client",
    //   icon: "people",
    //   allowedRoles: ['admin', 'TeamLead', 'LeadGenerator', 'blog'],

    //   routerLink: "/client"
    // },

    // {
    //   text: "Blog",
    //   icon: "people",
    //   allowedRoles: ['admin', 'blog'],

    //   routerLink: "/viewblog"
    // },
    // {
    //   text: "Order",
    //   icon: "analytics",
    //   allowedRoles: ['admin', 'TeamLead', 'LeadGenerator'],

    //   routerLink: "/order"
    // },
    // {
    //   text: "Report",
    //   icon: "analytics",
    //   allowedRoles: ['admin', 'TeamLead', 'LeadGenerator', 'blog'],

    //   routerLink: "/report"
    // }
]

export const vendormenuList=[
  {
    text: "Dashboard",
    icon: "analytics",
    allowedRoles: ['supervisor'],

    routerLink: "/vendor/dashboard"
  },
 
  
]

export const supervisormenuList=[
  {
    text: "Dashboard",
    icon: "analytics",
    allowedRoles: ['supervisor'],

    routerLink: "/supervisor/dashboard"
  },
 
  
]


