import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { UsersService } from "./users.service";

export const authGuard: CanActivateFn = (route, state) => {
  return inject(UsersService).isUserLoggedIn
    ? true
    : inject(Router).navigate(["home"]);
};
