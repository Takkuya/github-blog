/* eslint-disable camelcase */
import { PublicationsContainer } from './styles'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import ReactMarkdown from 'react-markdown'

type PublicationsCardProps = {
  repository: {
    created_at: Date
    title: string
    body: string
    id: number
  }
}

export const PublicationsCard = ({ repository }: PublicationsCardProps) => {
  const { title, created_at, body } = repository
  const createDate = new Date(created_at)
  const publishedDateFormatted = format(
    createDate,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR },
  )

  // tempo decorrido em relação ao presente
  const publishedDateRelativeToNow = formatDistanceToNow(createDate, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <PublicationsContainer>
      <header>
        <h2>{title}</h2>
        <time
          title={publishedDateFormatted}
          dateTime={createDate.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <span>
        <ReactMarkdown>{body}</ReactMarkdown>
      </span>
    </PublicationsContainer>
  )
}
