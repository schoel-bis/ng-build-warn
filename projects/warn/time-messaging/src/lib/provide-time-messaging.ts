import { EnvironmentProviders, makeEnvironmentProviders } from "@angular/core";
import { Routes, ROUTES } from "@angular/router";
 
export function provideTimeMessaging(): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: ROUTES,
      multi: true,
      useValue: [
        {
            path: 'time',
            loadChildren: async () => (await import('./time-routes')).TIME_ROUTES
        }
      ] as Routes,
    },
  ]);
}
