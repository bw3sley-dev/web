import { Header } from '@/components/header'

import { Outlet } from 'react-router-dom'

export function ProfileLayout() {
  return (
    <div className="min-h-screen w-full bg-slate-900 text-slate-200 grid grid-cols-1 lg:grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
      <Header isProfile />

      <div className="flex-1 flex flex-col gap-4 p-8 pt-6 overflow-auto">
        <Outlet />
      </div>
    </div>
  )
}
