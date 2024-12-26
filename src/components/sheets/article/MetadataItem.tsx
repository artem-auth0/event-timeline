interface MetadataItemProps {
  icon: React.ReactNode
  children: React.ReactNode
}

export function MetadataItem({ icon, children }: MetadataItemProps) {
  return (
    <div className="flex items-center gap-1.5">
      {icon}
      {children}
    </div>
  )
}
