type FeedProps = {
  children?: React.ReactNode;
  posts: {
    id: number;
    title: string;
    content: string;
  }[];
}

export default function Feed({ children: childrenProfile, posts }: FeedProps) {
  return (
    <div>
      { childrenProfile }
      <div>
        {
          posts.map(post => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

{
  // Exemplo de um componente que recebe múltiplos filhos
  type FeedMultipleChildrenProps = {
    children: React.ReactNode[];
  }
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const FeedMultipleChildren = ({ children }: FeedMultipleChildrenProps) => {
    return (
      <div>
        {
          children.map((child, index) => (
            <div key={index}>
              {child}
            </div>
          ))
        }
      </div>
    )
  }
}