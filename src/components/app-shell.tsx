import type { AppVariant } from '@/types/ui';
import React, { useState, type ReactNode } from 'react'
import { SidebarProvider } from './ui/sidebar';

type Props = {
  children: ReactNode;
  variant?: AppVariant;
}

function AppShell({ children, variant = 'sidebar' }: Props) {
  const [isOpen, setIsOpen] = useState(() => {
    const saved = localStorage.getItem('sidebar_open');
    return saved !== null ? JSON.parse(saved) : true
  })

  if (variant === 'header')
    return (
      <div className='flex min-h-screen w-full flex-col'>{children}</div>
    );
  return <SidebarProvider defaultOpen={isOpen}>{children}</SidebarProvider>;
}

export default AppShell