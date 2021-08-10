import React from 'react'

const USERS_URL = 'https://example.com/api/users'
const PAGE_SIZE = 10
const FIRST_PAGE = 0

type User = {
  id: number
  firstName: string
  lastName: string
}
type Users = User[]

export const Table: React.FC = () => {
  const [loading, setLoading] = React.useState(false)
  const [data, setData] = React.useState<Users>([])
  const [currPage, setCurrPage] = React.useState(FIRST_PAGE)
  const [count, setCount] = React.useState(0)

  const goToLastPage = () => {
    setCurrPage(Math.floor(count / PAGE_SIZE))
  }

  const getData = (page: any) => {
    setLoading(true)
    fetch(`${USERS_URL}?page=${page}`)
      .then((response) => response.json())
      .then(({ results, count }) => {
        setCount(count)
        setData(results)
      })
      .catch((err) => {
        console.log(111, err)
        setCount(0)
        setData([])
      })
      .finally(() => setLoading(false))
  }

  const firstDisabled = loading || currPage === FIRST_PAGE
  const nextDisabled = loading || currPage * PAGE_SIZE + PAGE_SIZE > count
  const previousDisabled = loading || currPage - 1 < FIRST_PAGE
  const lastDisabled = loading || currPage === Math.floor(count / PAGE_SIZE)

  React.useEffect(() => {
    getData(currPage)
  }, [currPage])

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.firstName}</td>
              <td>{row.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <section className="pagination">
        <button
          disabled={firstDisabled}
          onClick={() => setCurrPage(FIRST_PAGE)}
          className="first-page-btn"
        >
          first
        </button>
        <button
          disabled={previousDisabled}
          onClick={() => setCurrPage(currPage - 1)}
          className="previous-page-btn"
        >
          previous
        </button>
        <button
          disabled={nextDisabled}
          onClick={() => setCurrPage(currPage + 1)}
          className="next-page-btn"
        >
          next
        </button>
        <button disabled={lastDisabled} onClick={goToLastPage} className="last-page-btn">
          last
        </button>
      </section>
    </div>
  )
}
