export type ChangeProfileProps = {
  fnChangeProfile: () => void;
}

export default function ChangeProfile({ fnChangeProfile }: ChangeProfileProps) {
  return (
    <div>
      <button onClick={() => fnChangeProfile()}>Trocar de conta</button>
    </div>
  )
}