import * as React from "react";
import Link from "next/link";
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="">
    {children}
    </div>
  );
}
