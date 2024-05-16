import { AnticationModule } from '../antication/antication.module';
export const Anticationrouter=[
    {
        path:"",loadChildren:()=>import ("../antication/antication.module").then(x=>x.AnticationModule)
    }
]