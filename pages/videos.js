import React from 'react'
import Layout from '../components/Layout'
import {Grid, Row, Col, Modal, Button} from 'react-bootstrap'
import MediaItem from '../components/MediaItem'
import ResponsiveEmbed from 'react-responsive-embed'


class Videos extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      showModal: false,
      playingUrl: null,
      fetchNotSupported: false
    }

    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }

  componentDidMount() {
    if(!window.fetch) {
      return this.setState({
        fetchNotSupported: true
      })
    }
    const playlistId = 'PL0hqao7rYmKLvuLeffaAJyF6Skjj9U28W'
    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=AIzaSyC3YTdLwbWAehAQG_OvTMGVAIwE06F5c2w`)
      .then((resp) => resp.json()) // Transform the data into json
      .then(json => {
        this.setState({
          videos: json.items
        })
      })
  }

  showModal(playingUrl) {
    this.setState({
      showModal: true,
      playingUrl
    })
  }

  hideModal() {
    this.setState({
      showModal: false,
      playingUrl: null
    })
  }

  render() {
    if(this.state.fetchNotSupported) return <p>Fetch is not supported</p>
    return (
      <Layout loading={this.state.videos.length === 0}>
        <Grid>
          <Row>
            {this.state.videos.map((video, i) => {
              return (
                <Col xs={12} md={12} key={i}>
                  <MediaItem
                    onImageClick={() => this.showModal(`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`)}
                    title={video.snippet.title}
                    description={video.snippet.description}
                    img={video.snippet.thumbnails.default.url}
                  />
                </Col>
              )
            })}
            
          </Row>
        </Grid>
        <Modal bsSize='lg' show={this.state.showModal} onHide={this.hideModal}>
          <Modal.Body>
            {this.state.playingUrl && <ResponsiveEmbed src={this.state.playingUrl} allowfullscreen ratio='16:9' />}
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.hideModal}>Close</Button>
          </Modal.Footer>

        </Modal>
      </Layout>
    )
  }
}

export default Videos
