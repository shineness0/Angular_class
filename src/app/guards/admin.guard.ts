import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  let adminRouter = inject(Router)
 let x=1
 if (x==2) {
   return true;
  }else{
    adminRouter.navigate(['home'])
    return false;

 }
};
