import React from "react";
import { Route, Routes, Outlet } from 'react-router-dom';
export default function Organization() {
    return (
      <>
              <div className="flex flex-wrap mt-4">
                  <Outlet />
              </div>
      </>
    );
  }