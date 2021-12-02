import RepositoryItem from "./RepositoryItem";
import { useState, useEffect } from "react";

import '../styles/repositories.scss';

interface IRepository {
  id: number;
  name: string,
  description: string,
  html_url: string;
}

function RepositoryList() {

  const [repositories, setRepositories] = useState<IRepository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/LeonMarqs/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map(repository => <RepositoryItem key={repository.id} repository={repository} />)}
      </ul>
    </section>
  )
}

export default RepositoryList
