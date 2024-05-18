import AvatarProfile, { AvatarProfileProps } from "./Avatar"
import ChangeProfile, { ChangeProfileProps } from "./Change"
import DescriptionProfile, { DescriptionProfileProps } from "./Description"

type ProfileProps = ChangeProfileProps & DescriptionProfileProps & AvatarProfileProps & {
  openProfile: boolean;
}

// Componentes são imutáveis, ou seja, não podemos alterar o valor de uma propriedade diretamente dentro do próprio componente.
// Como componentes não podem alterar o valor de suas propriedades e nem o valor de variaveis fora do seu escopo, chamamos esses componentes de componentes puros (funções puras).
export default function Profile({ alt, complete, fnChangeProfile, image, nameUser, summary, openProfile = false }: ProfileProps) {
  return (
    <div>
      {
        openProfile ? (
          <>
            <AvatarProfile image={image} alt={alt} nameUser={nameUser} />
            <DescriptionProfile summary={summary} complete={complete} />
            <ChangeProfile fnChangeProfile={fnChangeProfile} />
          </>
        ) : (
          <p>Perfil não está aberto para novas amizades e visualizações.</p>
        )
      }
    </div>
  )
}