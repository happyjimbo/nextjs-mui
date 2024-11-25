import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { Roboto } from 'next/font/google';
import TopBar from "@/app/navigation/TopBar";
import SideBar from "@/app/navigation/SideBar";
import {Box} from "@mui/material";
import {ReactNode} from "react";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout = (props:RootLayoutProps) => (
  <html lang="en">
    <body className={roboto.variable}>
    <AppRouterCacheProvider options={{ key: 'css' }} >
      <ThemeProvider theme={theme}>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '150px' }}>
              <TopBar />
              <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                <SideBar />
                  <Box
                      component="main"
                      sx={{
                          flexGrow: 1,
                          bgcolor: 'background.default',
                          p: 3,
                          overflow: 'auto',
                      }}
                  >
                      {props.children}
                  </Box>
              </Box>
          </Box>
      </ThemeProvider>
      </AppRouterCacheProvider>
    </body>
  </html>
)

export default RootLayout;