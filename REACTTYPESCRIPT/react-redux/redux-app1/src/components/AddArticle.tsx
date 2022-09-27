import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
  saveArticle: (article: IArticle | any) => void
}

export const AddArticle: React.FC<Props> = ({ saveArticle }) => {
  const [article, setArticle] = React.useState<IArticle | {}>()

  const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
    setArticle({
      ...article,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const addNewArticle = (e: React.FormEvent) => {
    e.preventDefault()
    saveArticle(article)
  }

  return (
    <form className="Add-article" onSubmit={addNewArticle}>

      <div className="text-center bg-secondary form-group "  >

        <input
          type="text"
          id="title"
          placeholder="Name"
          onChange={handleArticleData}
        />
        <input
          type="text"
          id="body"
          placeholder="Email"
          onChange={handleArticleData}
        />
        <button disabled={article === undefined ? true : false} className="btn btn-success">
          Submit
        </button>

      </div>

    </form>

  )
}