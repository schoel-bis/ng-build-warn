import type { Routes } from "@angular/router";

export const TIME_ROUTES: Routes = [
  {
    path: "/time",
    loadComponent: async () =>
      (await import("./time-messaging.component")).TimeMessagingComponent,
  },
];
