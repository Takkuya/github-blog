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

type UserContextType = {
  user: UserType
  repositories: RepositoryType
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

    setRepositories(responseObject)
  }

  useEffect(() => {
    getUserInformation()
    getRepositoryIssues()
  }, [])

  return (
    <UserContext.Provider value={{ user, repositories }}>
      {children}
    </UserContext.Provider>
  )
}
