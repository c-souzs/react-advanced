export type AvatarProfileProps = {
  image: string;
  alt: string;
  nameUser: string;
}

export default function AvatarProfile({ image, alt, nameUser }: AvatarProfileProps) {
  return (
    <div>
      <img src={image} alt={alt} />
      <span>{nameUser}</span>
    </div>
  )
}