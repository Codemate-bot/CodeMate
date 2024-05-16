import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import CodeMate from './pages/CodeMate';
import GeneralMode from './pages/GeneralMode';
import IndividualMode from './pages/IndividualMode';
import TeamMode from './pages/TeamMode';


const router = createBrowserRouter([
  { path: '/', element: <CodeMate /> },
// { path: '/CodeMate', element: <CodeMate /> },
{ path: '/GeneralMode', element: <GeneralMode /> },
{ path: '/IndividualMode', element: <IndividualMode /> },
{ path: '/TeamMode', element: <TeamMode /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}