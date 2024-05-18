export type DescriptionProfileProps = {
  summary: string;
  complete: string;
}

export default function DescriptionProfile({ summary, complete }: DescriptionProfileProps) {
  return (
    <div>
      <p>{summary}</p>
      <p>{complete}</p>
    </div>
  )
}