type Props = {
  className?: string
}

function HelloWorld({ className }: Props) {
  return (
    <div className={className}>
      Hello World!
    </div>
  )
}

export default HelloWorld