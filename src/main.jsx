import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Prodject from './pages/Prodject.jsx'
import Education from './pages/Education.jsx'
import Contact from './pages/LIA.jsx'
import LIA from './pages/LIA.jsx'


const router = createHashRouter ([
	{
		path: '/',
		Component: App,
		children: [
			{
				index: true,
				Component: Home
			},
			{
				path: "/about/",
				Component: About
			},
			{
				path: "/prodject",
				Component: Prodject
			},
			{
				path: "/education",
				Component: Education
			},
			{
				path: "/lia",
				Component: LIA
			}

		]
	}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
