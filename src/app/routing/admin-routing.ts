export const Adimrouters=[
    {
    path:"",loadChildren:()=>import ('../admin/admin.module').then(a=>a.AdminModule)
    }
]