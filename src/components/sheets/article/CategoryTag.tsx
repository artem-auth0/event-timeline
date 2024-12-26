interface CategoryTagProps {
  name: string
}

export function CategoryTag({ name }: CategoryTagProps) {
  return (
    <span
      className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary"
    >
      {name}
    </span>
  )
} 