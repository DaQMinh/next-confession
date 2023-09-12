import Sidebar from '@/components/sidebar'
import React from 'react'
interface LayoutDashboardProps {
    children: React.ReactNode
  }
function LayoutDashboard({ children } : LayoutDashboardProps) {
  return (
    <Sidebar>
      {children}
    </Sidebar>
  )
}

export default LayoutDashboard