import { Header } from '@/components/header'

import { Outlet } from 'react-router-dom'

export function SetupLayout() {
  return (
    <div className="min-h-screen w-full bg-slate-900 text-slate-200 grid grid-cols-1 lg:grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
      <Header hasGoBackButton />

      <div className="col-span-full overflow-auto h-[calc(100vh-72px)] lg:h-[calc(100vh-80px)]">
        <Outlet />
      </div>
    </div>
  )
}
