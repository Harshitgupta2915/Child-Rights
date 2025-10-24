
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Nav from "../components/Nav";
export default function RootLayout({ children }) {

  return (
    <html lang="en" className="[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <body>
           <Nav></Nav>
        {children}
      
      </body>
    </html>
  );
}
