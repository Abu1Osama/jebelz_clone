"use client"
import { Provider } from "react-redux";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { store } from "./Redux/store";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>

<Provider store={store}>

        <Navbar />
       <div className="">
       {children}
       </div>
        <Footer />
        <Toaster/>
</Provider>

      </body>
    </html>
  );
}
