interface IRepositoryItemProps {
  repository: {
    name: string,
    description: string,
    html_url: string;
  }
}

function RepositoryItem(props: IRepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'Repositório Padrão'}</strong>
      <p>{props.repository?.description}</p>
      <a href={props.repository?.html_url}>Acesso ao Repositório</a>
    </li>
  )
}

export default RepositoryItem
