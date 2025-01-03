import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAnimations } from '@angular/platform-browser/animations';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideToastr } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { firebaseConfig } from './firebase/firebase-config';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [ provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideToastr(),
    provideAnimations(),
    importProvidersFrom(ReactiveFormsModule) // Import ReactiveFormsModule
  ],
};
