import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../../lib/axios'

type UserContextProviderProps = {
  children: ReactNode
}

type UserType = {
  name: string
  followers: number
  bio: string
  login: string
  company?: string | null
}

export type RepositoryType = {
  [key: string | number]: {
    created_at: Date
    title: string
    body: string
    id: number
    comments: number
  }
}

type Repository = {
  created_at: Date
  title: string
  body: string
  id: number
  comments: number
}

type FetchPublicationsResponse = {
  items: Repository[]
}

type UserContextType = {
  user: UserType
  repositories: RepositoryType
  fetchPublications: (query: string) => Promise<void>
}

export const UserContext = createContext({} as UserContextType)

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<UserType>({} as UserType)
  const [repositories, setRepositories] = useState<RepositoryType>(
    {} as RepositoryType,
  )

  async function getUserInformation() {
    const response = await api.get('/users/Takkuya')
    setUser(response.data)
  }

  async function getRepositoryIssues() {
    // <> => dizer pro axios o que vem da request, tipo dos dados
    const response = await api.get<Repository[]>(
      '/repos/Takkuya/github-blog/issues',
    )

    const responseObject = response.data.reduce((acc, currentValue) => {
      return { ...acc, [currentValue.id]: currentValue }
    }, {})

    console.log('repsonseobj', responseObject)

    setRepositories(responseObject)
  }

  useEffect(() => {
    getUserInformation()
    getRepositoryIssues()
  }, [])

  async function fetchPublications(query: string) {
    const response = await api.get<FetchPublicationsResponse>(
      `search/issues?q=${query}%20repo:Takkuya/github-blog`,
    )

    console.log('response', response.data)

    const responseObject = response.data.items.reduce((acc, currentValue) => {
      return { ...acc, [currentValue.id]: currentValue }
    }, {})

    console.log(responseObject)
    setRepositories(responseObject)
  }

  return (
    <UserContext.Provider value={{ user, repositories, fetchPublications }}>
      {children}
    </UserContext.Provider>
  )
}
