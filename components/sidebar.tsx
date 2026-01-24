import { ReactNode } from 'react'

interface SidebarProps {
  title: string
  children: ReactNode
}

export function Sidebar({ title, children }: SidebarProps) {
  return (
    <div className="space-y-6 bg-white p-4">
      <div>
        <h2 className="mb-4 text-lg font-black">{title}</h2>
        <div className="flex h-0.5 w-full">
  <div className="w-1/5 bg-black"></div>
  <div className="w-4/5 bg-gray-200"></div>
</div>
      </div>
      <div>{children}</div>
    </div>
  )
}
