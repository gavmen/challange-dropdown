"use client";
import { Auth0Provider } from '@auth0/auth0-react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
 
export default function RootLayout({ children }) {
 return (
    <UserProvider>
      <html lang="pt-BR">
        <body>{children}</body>
      </html>
    </UserProvider>
  );
}
