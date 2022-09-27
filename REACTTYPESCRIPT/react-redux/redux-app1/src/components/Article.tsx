import * as React from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"

type Props = {
    article: IArticle
    removeArticle: (article: IArticle) => void
}

export const Article: React.FC<Props> = ({ article, removeArticle }) => {
    const dispatch: Dispatch<any> = useDispatch()

    const deleteArticle = React.useCallback(
        (article: IArticle) => dispatch(removeArticle(article)),
        [dispatch, removeArticle]
    )

    return (
        <div className="Article">
            <div>


                <table className="table table-bordered table-primary  ">
                    {/* <thead>
                        <tr>

                            <th>First Name</th>
                            <th>Email</th>
                             <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead> */}
                    <tbody id="tbodys">
                        {

                            <tr>
                                <td> {article.title}</td>
                                <td>{article.body}</td>
                            </tr>

                        }
                    </tbody>
                </table >


            </div>
            <button onClick={() => deleteArticle(article)}>Delete</button>
        </div>
    )
}