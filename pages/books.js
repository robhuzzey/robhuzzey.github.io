import React from 'react'
import Layout from '../components/Layout'
import {Grid, Row, Col} from 'react-bootstrap'
import MediaItem from '../components/MediaItem'
import 'isomorphic-fetch'


const BooksRow = props => (
  <Row>
    {props.books.map((book, i) => {
      return (
        <Col xs={12} md={6} key={i}>
          <MediaItem 
            title={book.volumeInfo.title}
            description={book.volumeInfo.description}
            img={book.volumeInfo.imageLinks.smallThumbnail}
          />
        </Col>
      )
    })}
  </Row>
)

class Books extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      fetchNotSupported: false
    }

  }

  static async getInitialProps ({ req }) {
    const userId = '101891936560271534706'
    const res = await fetch(`https://www.googleapis.com/books/v1/users/${userId}/bookshelves/4/volumes?country=GB&maxResults=40`)
    const json = await res.json()
    return { 
      books: json.items
    }
  }

  render() {
    if(this.state.fetchNotSupported) return <p>Fetch is not supported</p>
    return (
      <Layout className='books' loading={this.props.books.length === 0}>
        <Grid>
          {this.props.books.filter(book => {
            return book.volumeInfo.imageLinks
          }).reduce((pairs, book, index) => { // split the books into pairs
            if(index % 2 === 0) {
               pairs.push([]);
            }
            pairs[pairs.length - 1].push(book);
            return pairs;
          }, []).map((pair, index) => ( // map the pairs to row
            <BooksRow key={index} books={pair} />
          ))}
        </Grid>
      </Layout>
    )
  }
}

export default Books
