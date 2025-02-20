'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/features/store';
import '@styles/globals.scss';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}

// 'use client';

// import React from 'react';
// import { Provider } from 'react-redux';
// import { store } from '@/features/store';
// import '@styles/Layout.module.scss';

// const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   return (
//     <html lang="en">
//       <body>
//         <Provider store={store}>
//           <div className="layout">
//             <header className="header">Welcome [Username]!</header>
//             <main className="grid-container">{children}</main>
//           </div>
//         </Provider>
//       </body>
//     </html>
//   );
// };

// export default Layout;

// 'use client';

// import { ReactNode } from 'react';
// import { Provider } from 'react-redux';
// import { store } from '@/features/store';
// import './styles/globals.scss';

// interface LayoutProps {
//   children: ReactNode;
// }

// export default function RootLayout({ children }: LayoutProps) {
//   return (
//     <html lang="en">
//       <body>
//         <Provider store={store}>{children}</Provider>
//       </body>
//     </html>
//   );
// }
